import { action, computed, makeObservable, observable } from "mobx";
import { ExerciseLabel, TExercise } from ".";
import { DocumentStore } from "../../stores/DocumentStore";
import { rootStore } from "../../stores/stores";
import Chapter from "./Chapter";

export default class Exercise {
    private readonly store: DocumentStore;
    private readonly chapter: Chapter;
    @observable
    startTime?: Date;
    @observable
    endTime?: Date;
    createdAt: Date;
    @observable
    name: string;
    labels = observable<ExerciseLabel>([]);

    constructor(data: TExercise, chapter: Chapter) {
        this.store = rootStore.documentStore;
        this.chapter = chapter;
        this.createdAt = data.created_at ? new Date(data.created_at) : new Date(); 
        this.startTime = data.start ? new Date(data.start) : undefined;
        this.endTime = data.end ? new Date(data.end) : undefined;
        this.name = data.name;
        this.labels.replace(data.labels);
        makeObservable(this);
    }

    @action
    start() {
        this.chapter.stopRunning();
        this.startTime = new Date();
    }

    @action
    stop() {
        if (!this.endTime) {
            this.endTime = new Date();
        }
    }

    @action
    delete() {
        this.chapter.remove(this);
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
    get isRunning(): boolean {
        return !!this.startTime && !this.endTime;
    }

    @computed
    get duration() {
        if (!this.startTime) {
            return;
        }
        if (this.isRunning) {
            const tspan = this.store.timer - this.startTime.getTime();
            return tspan < 0 ? 0 : tspan;
        }
        return this.endTime.getTime() - this.startTime.getTime();
    }

    @computed
    get props(): TExercise {
        return {
            start: this.startTime?.toISOString() || '',
            end: this.endTime?.toISOString() || '',
            name: this.name,
            labels: this.labels,
            created_at: this.createdAt.toISOString()
        };
    }
}
