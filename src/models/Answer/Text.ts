import { CancelTokenSource } from 'axios';
import { Document, putDocument } from './../../api/document';
import { action, computed, makeObservable, observable } from "mobx";
import { TextModel } from '../iModel';
import SaveService from '../SaveService';

export interface TextDoc {
    value: React.ReactNode;
    type: "text";
    default?: string | React.ReactNode;
  }

export const DEFAULT_DATA: TextDoc = {
    value: '',
    type: 'text',
}

const save = (model: Text, cancelToken: CancelTokenSource) => {
    return putDocument<TextDoc>(model.webKey, model.data, cancelToken);
}

export default class Text implements TextModel {
    type: 'text' = 'text';
    webKey: string;
    id: number;
    userId: number;
    @observable 
    createdAt: Date;
    @observable
    updatedAt: Date;
    readonly: boolean;

    @observable.ref
    pristine: TextDoc;

    @observable
    isDummy: boolean;


    @observable
    loaded: boolean = false;
    @observable.ref
    legacyData?: TextDoc;
    legacyCleanup?: () => void;

    @observable.ref
    saveService: SaveService;

    @observable
    value: React.ReactNode;

    constructor(doc: Document<TextDoc>, readonly: boolean = false, showLegacy: boolean = false) {
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
        return !this.readonly &&  this.loaded;
    }

    @computed
    get data(): TextDoc {
        return {
            type: 'text',
            value: this.value
        };
    }

    @action
    setData(data: TextDoc) {
        this.value = data.value;
    }

    @computed
    get props(): Document<TextDoc> {
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