import { CancelTokenSource } from 'axios';
import { Document, putDocument } from './../../api/document';
import { action, computed, makeObservable, observable } from 'mobx';
import { StateModel } from '../iModel';
import { DocumentStore } from '../../stores/DocumentStore';
import { rootStore } from '../../stores/stores';
import SaveService, { ApiModel } from '../SaveService';

export type StateType = 'checked' | 'question' | 'unset' | 'star' | 'star-half' | 'star-empty';

export interface StateDoc {
    value: StateType;
    type: 'state';
}

export const DEFAULT_DATA: StateDoc = {
    value: 'unset',
    type: 'state',
};

const save = (model: StateAnswer, cancelToken: CancelTokenSource) => {
    return putDocument<StateDoc>(model.webKey, model.data, false, false, cancelToken);
};

export default class StateAnswer implements StateModel, ApiModel {
    type: 'state' = 'state';
    private readonly store: DocumentStore;
    webKey: string;
    id: number;
    userId: number;
    @observable
    createdAt: Date;
    @observable
    updatedAt: Date;

    @observable.ref
    pristine: StateDoc;

    @observable
    isDummy: boolean;

    @observable.ref
    saveService: SaveService;
    readonly: boolean;

    @observable
    isLoaded: boolean = false;

    @observable
    value: StateType;

    @observable
    windowPositionY: number = -1;

    constructor(doc: Document<StateDoc>, readonly: boolean = false) {
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
        this.saveService = new SaveService(this, save, 250);
    }

    @action
    setWindowPositionY(posY: number) {
        this.windowPositionY = posY;
    }

    @computed
    get canUpdate(): boolean {
        return !this.readonly && this.isLoaded;
    }

    @computed
    get data(): StateDoc {
        return {
            type: 'state',
            value: this.value,
        };
    }

    @computed
    get umami() {
        return {
            event: `update-doc-${this.type}`,
            data: { webKey: this.webKey },
        };
    }

    @action
    setValue(value: StateType) {
        this.value = value;
    }

    @action
    setData(data: StateDoc) {
        this.value = data.value;
    }

    @computed
    get props(): Document<StateDoc> {
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
