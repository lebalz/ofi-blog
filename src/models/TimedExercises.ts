import { useStore } from './../stores/hooks';
import axios, { CancelTokenSource, Method } from 'axios';
import _ from 'lodash';
import { debounce } from 'lodash';
import { action, computed, makeObservable, observable, reaction } from 'mobx';
import { DOM_ELEMENT_IDS, TURTLE_IMPORTS_TESTER } from '../components/AceEditor/constants';
import { DocumentStore } from '../stores/DocumentStore';
import Document from './Document';
import { rootStore } from '../stores/stores';

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
    private readonly store: DocumentStore;
    private readonly chapter: Chapter;
    @observable
    startTime?: Date;
    @observable
    endTime?: Date;
    @observable
    name: string;
    labels = observable<ExerciseLabel>([]);

    constructor(data: TExercise, chapter: Chapter) {
        this.store = rootStore.documentStore;
        this.chapter = chapter;
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
            return this.store.timer - this.startTime.getTime();
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
    private readonly timedEx: TimedExercises;
    exercises = observable<Exercise>([]);
    chapter: string;
    constructor(data: TimedDoc, timedEx: TimedExercises) {
        this.timedEx = timedEx;
        this.chapter = data.chapter;
        const exercises = _.orderBy(data.exercises, ['name']).map((ex) => new Exercise(ex, this));
        this.exercises.replace(exercises);
        makeObservable(this);
        reaction(
            () => this.props,
            (props) => {
                this.timedEx.updateData(this);
            }
        );
    }

    @action
    addExercise() {
        const ex = new Exercise({start: '', end: '', name: '', labels: []}, this);
        this.exercises.push(ex);
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
    stopRunning() {
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
    _tDoc: Document<TimedDoc, TimedExercises>;
    @observable.ref
    chapter: Chapter;
    isDummy: boolean;
    store: DocumentStore;

    constructor(tDoc: Document<TimedDoc, TimedExercises>) {
        this.store = rootStore.documentStore;
        if (!tDoc.loaded) {
            const iDisposer = reaction(
                () => tDoc.loaded,
                (loaded) => {
                    if (loaded) {
                        this.chapter = new Chapter(tDoc.data, this);
                        iDisposer();
                    }
                }
            );
        }
        this.isDummy = tDoc.isDummy;
        this._tDoc = tDoc;
        this._tDoc.setModel(this);
        this.chapter = new Chapter(tDoc.data, this);
        makeObservable(this);
    }

    @action
    updateData(source: Chapter) {
        this._tDoc.setData(source.props);
    }
}
