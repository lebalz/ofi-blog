import { CancelTokenSource } from 'axios';
import { Document, putDocument } from './../../api/document';
import { action, computed, makeObservable, observable } from "mobx";
import { TextModel } from '../iModel';
import SaveService, { ApiModel } from '../SaveService';
import { iTextData } from '../../components/shared/QuillEditor';

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
    return putDocument<TextDoc>(model.webKey, model.data,  false, false, cancelToken);
}

export default class Text implements TextModel, ApiModel, iTextData {
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
    saveService: SaveService;

    @observable
    value: React.ReactNode;

    constructor(doc: Document<TextDoc>, readonly: boolean = false) {
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
    get text(): string | React.ReactNode {
        return this.value;
    }

    @action
    setText(text: React.ReactNode) {
        this.value = text;
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
    get umami() {
        return {
            event: `update-doc-${this.type}`,
            message: this.webKey
        }
    }

    @computed
    get props(): Document<TextDoc> {
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