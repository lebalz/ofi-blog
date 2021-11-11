import axios, { CancelTokenSource, Method } from 'axios';
import _ from 'lodash';
import { debounce } from 'lodash';
import { action, computed, makeObservable, observable, reaction } from 'mobx';
import { DOM_ELEMENT_IDS, TURTLE_IMPORTS_TESTER } from '../components/AceEditor/constants';
import { DocumentStore } from '../stores/DocumentStore';
import Document from './Document';

export type ExerciseLabel = 'solved' | 'important' | 'question' | 'fail';

export interface TExercise {
    start: string;
    end: string;
    name: string;
    labels: ExerciseLabel[];
}

export interface TimedDoc {
    chapter: string;
    exercises: TExercise[];
}

export const formatTime = (ms: number) => {
    const t = new Date(ms).toISOString().slice(11, -5);
    if (t.startsWith('00')) {
        return `${t.slice(3)} m`;
    }
    return `${t} h`;
}

export class Exercise {
    private readonly chapter: Chapter;
    @observable
    startTime?: Date;
    @observable
    endTime?: Date;
    @observable
    name: string;
    labels = observable<ExerciseLabel>([]);

    disposer?: NodeJS.Timer;

    @observable
    timer = 0;

    constructor(data: TExercise, chapter: Chapter) {
        this.chapter = chapter;
        this.startTime = data.start ? new Date(data.start) : undefined;
        this.endTime = data.end ? new Date(data.end) : undefined;
        if (this.startTime && !this.endTime) {
            this.timer = Date.now() - this.startTime.getTime();
            this.startTimer();
        }
        this.name = data.name;
        this.labels.replace(data.labels);
        makeObservable(this);
    }

    @action
    startTimer() {
        this.disposer = setInterval(action(() => {
            if (this.isRunning) {
                this.timer = Date.now() - this.startTime.getTime();
            } else {
                this.stopTimer();
            }
        }), 1000);
    }

    @action
    stopTimer() {
        if (this.disposer) {
            clearInterval(this.disposer);
        }
    }

    @action
    start() {
        this.chapter.stopAll();
        this.startTime = new Date();
        this.startTimer();
    }

    @action
    stop() {
        this.endTime = new Date();
        this.stopTimer();
    }

    @action
    delete() {
        this.chapter.remove(this);
        this.stopTimer();
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
            return Date.now() - this.startTime.getTime();
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
        };
    }
}

class Chapter {
    exercises = observable<Exercise>([]);
    chapter: string;
    constructor(data: TimedDoc, onChange: (data: TimedDoc) => void) {
        this.chapter = data.chapter;
        const exercises = _.orderBy(data.exercises, ['name']).map((ex) => new Exercise(ex, this));
        this.exercises.replace(exercises);
        makeObservable(this);
        reaction(
            () => this.props,
            (props) => {
                onChange(props);
            }
        );
    }

    @computed
    get sortedExercises() {
        return _.sortBy(this.exercises, ['name']);
    }

    @computed
    get props(): TimedDoc {
        return {
            chapter: this.chapter,
            exercises: this.sortedExercises.map((ex) => ex.props),
        };
    }

    @action
    stopAll() {
        this.exercises.forEach((ex) => {
            if (ex.isRunning) {
                ex.stop();
            }
        })
    }

    @action
    remove(item: Exercise) {
        this.exercises.remove(item);
    }
}

export default class TimedExercises {
    @observable.ref
    _tDoc: Document<TimedDoc>;
    @observable.ref
    chapter: Chapter;
    isDummy: boolean;

    constructor(tDoc: Document<TimedDoc>) {
        if (!tDoc.loaded) {
            const iDisposer = reaction(
                () => tDoc.loaded,
                (loaded) => {
                    this.chapter = new Chapter(tDoc.data, (data) => this._tDoc.setData(data));
                    iDisposer();
                }
            );
        }
        this.isDummy = tDoc.isDummy;
        this._tDoc = tDoc;
        this.chapter = new Chapter(tDoc.data, (data) => this._tDoc.setData(data));
        makeObservable(this);
    }
}
