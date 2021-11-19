import { ApiModel } from './../SaveService';
import axios, { CancelTokenSource } from 'axios';
import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { rootStore } from '../../stores/stores';
import SaveService from '../SaveService';
import { putTopic, TimedTopicData, TimedTopic as TimedTopicProps } from '../../api/timed_topic';
import { TimedTopicStore } from '../../stores/TimedTopicStore';
import TimedExercise from './TimedExercise';
import { postExercise } from '../../api/timed_exercise';
import TimeSpan from './TimeSpan';

const save = (model: TimedTopic, cancelToken: CancelTokenSource) => {
    return putTopic(model.webKey, model.data, cancelToken);
};

export default class TimedTopic implements ApiModel {
    private readonly store: TimedTopicStore;
    webKey: string;
    id: number;
    userId: number;
    @observable
    createdAt: Date;
    @observable
    updatedAt: Date;

    @observable
    exercises = observable<TimedExercise>([]);

    @observable.ref
    pristine: TimedTopicData;

    @observable
    isDummy: boolean;

    @observable
    loaded: boolean = false;

    @observable.ref
    saveService: SaveService;

    constructor(timedTopic: TimedTopicProps, isDummy: boolean = false) {
        this.isDummy = isDummy;
        this.store = rootStore.timedTopicStore;
        this.webKey = timedTopic.web_key;
        this.id = timedTopic.id;
        this.userId = timedTopic.user_id;
        this.createdAt = new Date(timedTopic.created_at);
        this.updatedAt = new Date(timedTopic.updated_at);
        this.pristine = timedTopic.data;
        (timedTopic.exercises || []).forEach((ex) => {
            this.exercises.push(new TimedExercise(ex, this));
        });
        makeObservable(this);
        /** order depends, initialize AFTER making this observable! */
        this.saveService = new SaveService(this, save);
    }

    @computed
    get canUpdate(): boolean {
        return !this.isDummy && this.loaded;
    }

    @computed
    get data(): TimedTopicData {
        return {};
    }

    @action
    stopAllRunning() {
        this.runningTimeSpans.forEach((ts) => {
            ts.stop();
        });
    }

    @computed
    get runningTimeSpans(): TimeSpan[] {
        return this.exercises.map((ex) => ex.running).filter((ts) => ts);
    }

    @computed
    get umami() {
        return {
            event: 'update-timed-topic',
            message: ''
        }
    }

    @action
    addExercise() {
        const ct = axios.CancelToken.source();
        return postExercise(this.id, { name: '', data: { labels: [] } }, ct).then(({ data }) => {
            if (data) {
                runInAction(() => {
                    this.exercises.push(new TimedExercise(data, this));
                });
            }
        });
    }

    @computed
    get props(): TimedTopicProps {
        return {
            id: this.id,
            user_id: this.userId,
            web_key: this.webKey,
            data: this.data,
            exercises: this.exercises.map((ex) => ex.props),
            created_at: this.createdAt.toISOString(),
            updated_at: this.updatedAt.toISOString(),
        };
    }
}
