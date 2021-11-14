import { CancelTokenSource } from 'axios';
import { Document, putDocument } from './../../api/document';
import { action, computed, makeObservable, observable } from "mobx";
import Chapter from './Chapter';
import { TimedModel } from '../iModel';
import { DocumentStore } from "../../stores/DocumentStore";
import { rootStore } from '../../stores/stores';
import SaveService from '../SaveService';

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

export const DEFAULT_DATA: TimedDoc = {
    chapter: '',
    exercises: []
}

const save = (model: TimedExercises, cancelToken: CancelTokenSource) => {
    return putDocument<TimedDoc>(model.webKey, model.data, cancelToken);
}

export default class TimedExercises implements TimedModel {
    type: 'tdoc' = 'tdoc';
    private readonly store: DocumentStore;
    webKey: string;
    id: number;
    userId: number;
    @observable 
    createdAt: Date;
    @observable
    updatedAt: Date;

    @observable.ref
    chapter: Chapter;

    @observable.ref
    pristine: TimedDoc;

    @observable
    isDummy: boolean;

    @observable
    loaded: boolean = false;
    @observable.ref
    legacyData?: TimedDoc;
    legacyCleanup?: () => void;

    @observable.ref
    saveService: SaveService;
    readonly: boolean;


    constructor(doc: Document<TimedDoc>, readonly: boolean = false) {
        this.readonly = readonly;
        this.store = rootStore.documentStore;
        this.webKey = doc.web_key;
        this.id = doc.id;
        this.userId = doc.user_id;
        this.createdAt = new Date(doc.created_at);
        this.updatedAt = new Date(doc.updated_at);
        this.pristine = doc.data;
        this.chapter = new Chapter(doc.data);
        makeObservable(this);
        /** order depends, initialize AFTER making this observable! */
        this.saveService = new SaveService(this, save);
    }

    @computed
    get canUpdate(): boolean {
        return false;
    }

    @computed
    get data(): TimedDoc {
        return this.chapter.props;
    }

    @action
    setData(data: TimedDoc) {
        this.chapter = new Chapter(data);
    }

    @computed
    get props(): Document<TimedDoc> {
        return {
            id: this.id,
            user_id: this.userId,
            web_key: this.webKey,
            type: this.type,
            data: this.data,
            created_at: this.createdAt.toISOString(),
            updated_at: this.updatedAt.toISOString(),
        };
    }

}