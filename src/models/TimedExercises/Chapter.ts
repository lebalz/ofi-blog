import _ from "lodash";
import { action, computed, makeObservable, observable, reaction } from "mobx";
import { TimedDoc } from ".";
import Exercise from "./Exercise";

export default class Chapter {
    exercises = observable<Exercise>([]);
    chapter: string;
    constructor(data: TimedDoc) {
        this.chapter = data.chapter;
        const exercises = _.orderBy(data.exercises, ['name']).map((ex) => new Exercise(ex, this));
        this.exercises.replace(exercises);
        makeObservable(this);
    }

    @action
    addExercise() {
        const ex = new Exercise({ start: '', end: '', name: '', labels: [] }, this);
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
