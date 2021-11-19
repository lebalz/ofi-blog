import { CancelTokenSource } from 'axios';
import _ from 'lodash';
import { action, computed, makeObservable, observable } from 'mobx';
import { stopTimeSpan, TimeSpan as TimeSpanProps } from '../../api/time_span';
import { rootStore } from '../../stores/stores';
import { TimedTopicStore } from '../../stores/TimedTopicStore';
import SaveService, { ApiModel } from '../SaveService';
import TimedExercise from './TimedExercise';

const save = (model: TimeSpan, cancelToken: CancelTokenSource) => {
    return stopTimeSpan(model.topicId, model.exerciseId, model.id, cancelToken);
};

export default class TimeSpan implements ApiModel {
    private readonly store: TimedTopicStore;
    readonly start: Date;
    readonly id: number;
    @observable.ref
    exercise: TimedExercise;
    @observable
    end?: Date;
    @observable.ref
    saveService: SaveService;
    constructor(data: TimeSpanProps, exercise: TimedExercise) {
        this.store = rootStore.timedTopicStore;
        this.exercise = exercise;
        this.end = data.end ? new Date(data.end) : undefined;
        this.start = new Date(data.start);
        this.id = data.id;
        makeObservable(this);
        if (this.isRunning) {
            console.log('setup save service');
            this.saveService = new SaveService(this, save);
        }
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
            message: ''
        }
    }

    @action
    stop() {
        if (!this.isRunning) {
            return;
        }
        this.end = new Date();
    }

    @computed
    get offsets() {
        const start = this.start.getTime() - this.exercise.startTime;
        if (this.isRunning) {
            return { start: start, end: 0};
        }
        return {
            start: start,
            end: this.exercise.endTime - this.end.getTime()
        }
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
    get duration(): number {
        if (this.isRunning) {
            const tspan = this.store.timer - this.start.getTime();
            return tspan < 0 ? 0 : tspan;
        }
        return this.end.getTime() - this.start.getTime();
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
            end: this.end?.toISOString(),
        };
    }
}
