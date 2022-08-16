import axios, { CancelTokenSource } from 'axios';
import _ from 'lodash';
import { action, computed, makeObservable, observable } from 'mobx';
import moment from 'moment';
import { stopTimeSpan, TimeSpan as TimeSpanProps } from '../../api/time_span';
import { formatDate, HOUR_MS, MINUTE_MS, SECOND_MS, WeekDay, WEEK_DAYS } from '../../helpers/time';
import { rootStore } from '../../stores/stores';
import { TimedTopicStore } from '../../stores/TimedTopicStore';
import TimedExercise from './TimedExercise';

const save = (model: TimeSpan, cancelToken: CancelTokenSource) => {
    return stopTimeSpan(model.topicId, model.exerciseId, model.id, cancelToken);
};

export default class TimeSpan {
    private readonly store: TimedTopicStore;
    readonly start: Date;
    readonly id: number;
    @observable.ref
    exercise: TimedExercise;
    @observable
    end?: Date;
    @observable
    stoppInProgress: boolean = false;
    constructor(data: TimeSpanProps, exercise: TimedExercise) {
        this.store = rootStore.timedTopicStore;
        this.exercise = exercise;
        this.end = data.stop ? new Date(data.stop) : undefined;
        this.start = new Date(data.start);
        this.id = data.id;
        makeObservable(this);
    }

    @computed
    get dayOfYear() {
        return moment(this.start).dayOfYear();
    }

    @computed
    get day(): WeekDay {
        return WEEK_DAYS[this.start.getDay()];
    }

    @computed
    get canUpdate() {
        return true;
    }

    @computed
    get isRunning() {
        return this.start && !this.end;
    }

    @computed
    get umami() {
        return {
            event: 'update-time-span',
            data: {},
        };
    }

    @action
    stop() {
        if (!this.isRunning || this.stoppInProgress) {
            return;
        }
        this.stoppInProgress = true;
        const ct = axios.CancelToken.source();
        stopTimeSpan(this.topicId, this.exerciseId, this.id, ct)
            .then(
                action(({ data }) => {
                    this.end = new Date(data.stop);
                })
            )
            .catch(
                action(() => {
                    this.stoppInProgress = false;
                })
            );
    }

    @computed
    get offsets() {
        const start = this.start.getTime() - this.exercise.startTime;
        if (this.isRunning) {
            return { start: start, end: 0 };
        }
        return {
            start: start,
            end: this.exercise.endTime - this.end.getTime(),
        };
    }

    @computed
    get fStartDate(): string {
        return `${this.day}. ${formatDate(this.start)}`;
    }

    @computed
    get tooLong(): boolean {
        return this.rawDuration > HOUR_MS;
    }

    @computed
    get nextTimeSpan(): TimeSpan | undefined {
        return this.exercise.nextTimeSpan(this);
    }

    @computed
    get timeSpentBefore(): number {
        return this.exercise.timeSpentBefore(this);
    }

    @computed
    get timeSpentAfter() {
        return this.exercise.duration - (this.timeSpentBefore + this.duration);
    }

    @computed
    get timeSpentAfterWithoutRunning() {
        return this.timeSpentAfter - (this.exercise.running?.duration || 0);
    }

    @computed
    get rawDuration(): number {
        if (this.isRunning) {
            const tspan = this.store.timer - this.start.getTime();
            return tspan < 0 ? 0 : tspan;
        }
        return this.end.getTime() - this.start.getTime();
    }

    @computed
    get duration(): number {
        if (this.tooLong) {
            return 5 * MINUTE_MS;
        }
        return this.rawDuration;
    }

    @computed
    get topicId() {
        return this.exercise.topicId;
    }

    @computed
    get exerciseId() {
        return this.exercise.id;
    }

    @computed
    get data() {
        return this.end;
    }

    @computed
    get props(): TimeSpanProps {
        return {
            id: this.id,
            start: this.start.toISOString(),
            stop: this.end?.toISOString(),
        };
    }
}
