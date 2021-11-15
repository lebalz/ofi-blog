import _ from 'lodash';
import { action, computed, makeObservable, observable, reaction } from 'mobx';
import { TimedDoc } from '.';
import Exercise from './Exercise';

export default class Chapter {
    exercises = observable<Exercise>([]);
    chapter: string;
    constructor(data: TimedDoc, created_at: string) {
        this.chapter = data.chapter;
        const exercises = _.orderBy(data.exercises, ['name', 'created_at']).map(
            (ex) => new Exercise({...ex, created_at: ex.created_at || created_at}, this)
        );
        this.exercises.replace(exercises);
        makeObservable(this);
    }

    @action
    addExercise() {
        const ex = new Exercise(
            { start: '', end: '', name: '', labels: [], created_at: new Date().toISOString() },
            this
        );
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
        });
    }

    @action
    remove(item: Exercise) {
        this.exercises.remove(item);
    }
}
