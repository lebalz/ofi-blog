import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import TimedTopic from '.';
import {
    deleteExercise,
    ExerciseLabel,
    putExercise,
    TimedExercise as TimedExerciseProps,
    TimedExerciseData,
} from '../../api/timed_exercise';
import SaveService, { ApiModel } from '../SaveService';
import axios, { CancelTokenSource } from 'axios';
import TimeSpan from './TimeSpan';
import { postTimeSpan } from '../../api/time_span';
import { sortBy, sumBy } from 'lodash';
import { TimedTopicStore } from '../../stores/TimedTopicStore';
import { rootStore } from '../../stores/stores';


const save = (model: TimedExercise, cancelToken: CancelTokenSource) => {
    return putExercise(model.topicId, model.id, model.data, cancelToken);
};

export default class TimedExercise implements ApiModel {
    private readonly store: TimedTopicStore;
    private readonly topic: TimedTopic;
    readonly id: number;
    createdAt: Date;

    @observable.ref
    updatedAt: Date;

    @observable
    name: string;

    @observable.ref
    saveService: SaveService;

    labels = observable<ExerciseLabel>([]);

    timeSpans = observable<TimeSpan>([]);

    constructor(data: TimedExerciseProps, topic: TimedTopic) {
        this.store = rootStore.timedTopicStore;
        this.topic = topic;
        this.id = data.id;
        this.createdAt = data.created_at ? new Date(data.created_at) : new Date();
        this.updatedAt = data.updated_at ? new Date(data.updated_at) : new Date();
        this.name = data.name || '';
        sortBy(data.time_spans, ['start']).forEach((ts) => {
            this.timeSpans.push(new TimeSpan(ts, this));
        });
        this.labels.replace(data.data.labels || []);
        makeObservable(this);
        this.saveService = new SaveService(this, save);
    }

    @computed
    get topicId() {
        return this.topic.id;
    }

    @computed
    get canUpdate() {
        return this.topic.canUpdate;
    }

    @computed
    get webKey() {
        return this.topic.webKey;
    }

    @computed
    get data(): TimedExerciseData {
        return {
            data: {
                labels: this.labels.slice()
            },
            name: this.name,
        };
    }

    @computed
    get isRunning() {
        return this.timeSpans.some((ts) => ts.isRunning);
    }

    @computed
    get umami() {
        return {
            event: `update-timed-exercise`,
            message: ''
        }
    }

    @computed
    get running(): TimeSpan | undefined {
        return this.timeSpans.find((ts) => ts.isRunning);
    }

    @action
    start() {
        this.store.stopAllRunning();
        const ct = axios.CancelToken.source();
        postTimeSpan(this.topicId, this.id, ct).then(({ data }) => {
            runInAction(() => {
                this.timeSpans.push(new TimeSpan(data, this));
            });
        });
    }

    @action
    stop() {
        const running = this.timeSpans.find((ts) => ts.isRunning);
        if (running) {
            running.stop();
        }
    }

    @computed
    get userId() {
        return this.topic.userId;
    }

    @action
    delete() {
        if (!this.canUpdate) {
            return this.topic.exercises.remove(this);
        }
        deleteExercise(this.topicId, this.id, this.saveService.cancelToken).then((res) => {
            if (res.status === 204) {
                runInAction(() => {
                    this.topic.exercises.remove(this);
                });
            }
        });
    }

    @action
    toggleLabel(label: ExerciseLabel) {
        if (this.labels.includes(label)) {
            this.labels.remove(label);
        } else {
            this.labels.push(label);
            if (label === 'fail') {
                this.labels.remove('solved');
            } else if (label === 'solved') {
                this.labels.remove('fail');
            }
        }
    }

    @computed
    get duration(): number {
        return sumBy(this.timeSpans, (ts) => ts.duration);
    }

    @computed
    get lastEdited() {
        const len = this.timeSpans.length;
        if (len === 0) {
            return this.createdAt;
        }
        return this.timeSpans[len - 1].start;
    }

    /**
     * start-offset relative to the full duration after removal of all breaks
     */
    timeSpentBefore(ts: TimeSpan) {
        const idx = this.timeSpans.indexOf(ts);
        if (idx <= 0) {
            return 0;
        }
        return this.timeSpans[idx - 1].timeSpentBefore + this.timeSpans[idx - 1].duration;
    }

    nextTimeSpan(ts: TimeSpan) {
        const idx = this.timeSpans.indexOf(ts);
        if (this.timeSpans.length < idx + 2) {
            return;
        }
        return this.timeSpans[idx + 1]
    }

    @computed
    get startTime(): number {
        if (this.timeSpans.length === 0) {
            return 0;
        } 
        return this.timeSpans[0].start.getTime();
    }

    @computed
    get endTime(): number {
        const len = this.timeSpans.length;
        if (len === 0) {
            return 0;
        } 
        return this.timeSpans[len - 1].start.getTime() + this.timeSpans[len - 1].duration;
    }

    @computed
    get props(): TimedExerciseProps {
        return {
            id: this.id,
            name: this.name,
            updated_at: this.updatedAt.toISOString(),
            created_at: this.createdAt.toISOString(),
            data: {
                labels: this.labels
            },
            time_spans: this.timeSpans.map((ts) => ts.props),
        };
    }
}
