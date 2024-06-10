import { CancelTokenSource } from 'axios';
import { Document, putDocument } from './../../api/document';
import { action, computed, makeObservable, observable } from "mobx";
import { ArrayModel, BaseModel } from '../iModel';
import { DocumentStore } from "../../stores/DocumentStore";
import { rootStore } from '../../stores/stores';
import SaveService, { ApiModel } from '../SaveService';

export interface ArrayDoc {
    value: string[];
    type: "array";
    size: number;
    default?: string;
  }

export const DEFAULT_DATA: ArrayDoc = {
    value: [],
    size: 0,
    type: 'array',
}

const save = (model: ArrayAnswer, cancelToken: CancelTokenSource) => {
    return putDocument<ArrayDoc>(model.webKey, model.data, false, false, cancelToken);
}

export default class ArrayAnswer implements ArrayModel, ApiModel {
    type: 'array' = 'array';
    private readonly store: DocumentStore;
    webKey: string;
    id: number;
    userId: number;
    @observable 
    createdAt: Date;
    @observable
    updatedAt: Date;
    size: number;
    readonly: boolean;

    @observable.ref
    pristine: ArrayDoc;

    @observable
    isDummy: boolean;

    @observable.ref
    saveService: SaveService;

    @observable
    isLoaded: boolean = false;

    value = observable<string>([]);

    constructor(doc: Document<ArrayDoc>, readonly: boolean = false) {
        this.store = rootStore.documentStore;
        this.readonly = readonly;
        this.webKey = doc.web_key;
        this.id = doc.id;
        this.size = doc.data.size;
        this.userId = doc.user_id;
        this.createdAt = new Date(doc.created_at);
        this.updatedAt = new Date(doc.updated_at);
        this.pristine = doc.data;
        this.value.replace(doc.data.value);
        makeObservable(this);
        /** order depends, initialize AFTER making this observable! */
        this.saveService = new SaveService(this, save);
    }

    @computed
    get canUpdate(): boolean {
        return !this.readonly && this.isLoaded;
    }

    @computed
    get data(): ArrayDoc {
        return {
            type: 'array',
            value: this.value.slice(),
            size: this.size
        };
    }

    @computed
    get umami() {
        return {
            event: `update-doc-${this.type}`,
            data: { webKey: this.webKey }
        }
    }

    @action
    setData(data: ArrayDoc) {
        this.value.replace(data.value);
        this.size = data.size;
    }


    @computed
    get props(): Document<ArrayDoc> {
        return {
            id: this.id,
            user_id: this.userId,
            web_key: this.webKey,
            type: this.type,
            versions: [],
            data: this.data,
            created_at: this.createdAt.toISOString(),
            updated_at: this.updatedAt.toISOString(),
        };
    }

}