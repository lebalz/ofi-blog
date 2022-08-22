import { CancelTokenSource } from 'axios';
import { Document, putDocument } from './../../api/document';
import { action, computed, makeObservable, observable } from "mobx";
import { StringModel } from '../iModel';
import { DocumentStore } from "../../stores/DocumentStore";
import { rootStore } from '../../stores/stores';
import SaveService, { ApiModel } from '../SaveService';

export interface StringDoc {
    value: string;
    type: "string";
    default?: string;
  }

export const DEFAULT_DATA: StringDoc = {
    value: '',
    type: 'string',
}

const save = (model: StringAnswer, cancelToken: CancelTokenSource) => {
    return putDocument<StringDoc>(model.webKey, model.data,  false, false, cancelToken);
}

export default class StringAnswer implements StringModel, ApiModel {
    type: 'string' = 'string';
    private readonly store: DocumentStore;
    webKey: string;
    id: number;
    userId: number;
    @observable 
    createdAt: Date;
    @observable
    updatedAt: Date;

    @observable.ref
    pristine: StringDoc;

    @observable
    isDummy: boolean;

    @observable.ref
    saveService: SaveService;
    readonly: boolean;


    @observable
    loaded: boolean = false;

    @observable
    value: string;

    constructor(doc: Document<StringDoc>, readonly: boolean = false) {
        this.store = rootStore.documentStore;
        this.readonly = readonly;
        this.webKey = doc.web_key;
        this.id = doc.id;
        this.userId = doc.user_id;
        this.createdAt = new Date(doc.created_at);
        this.updatedAt = new Date(doc.updated_at);
        this.pristine = doc.data;
        this.value = doc.data.value;
        makeObservable(this);
        /** order depends, initialize AFTER making this observable! */
        this.saveService = new SaveService(this, save);
    }

    @computed
    get canUpdate(): boolean {
        return !this.readonly && this.loaded;
    }


    @computed
    get data(): StringDoc {
        return {
            type: 'string',
            value: this.value
        };
    }

    @computed
    get umami() {
        return {
            event: `update-doc-${this.type}`,
            data: {webKey: this.webKey, type: this.type}
        }
    }

    @action
    setData(data: StringDoc) {
        this.value = data.value;
    }

    @computed
    get props(): Document<StringDoc> {
        return {
            id: this.id,
            user_id: this.userId,
            web_key: this.webKey,
            type: this.type,
            data: this.data,
            versions: [],
            created_at: this.createdAt.toISOString(),
            updated_at: this.updatedAt.toISOString(),
        };
    }

}