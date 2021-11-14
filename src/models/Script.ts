import { CancelTokenSource } from 'axios';
import { Document, putDocument } from './../api/document';
import { action, computed, makeObservable, observable } from "mobx";
import { BaseModel, CodeModel } from './iModel';
import { DocumentStore } from "../stores/DocumentStore";
import { rootStore } from '../stores/stores';
import SaveService from './SaveService';
import { DOM_ELEMENT_IDS, TURTLE_IMPORTS_TESTER } from '../components/AceEditor/constants';

export interface PyDoc {
    code: string;
}


export interface LogMessage {
    type: 'done' | 'stdout' | 'stderr';
    output: string;
    timeStamp: number;
}


export const DEFAULT_DATA: PyDoc = {
    code: ''
}

const save = (model: Script, cancelToken: CancelTokenSource) => {
    return putDocument<PyDoc>(model.webKey, model.data, cancelToken);
}

export default class Script implements CodeModel {
    type: 'code' = 'code';
    private readonly store: DocumentStore;
    webKey: string;
    id: number;
    userId: number;
    @observable 
    createdAt: Date;
    @observable
    updatedAt: Date;

    @observable.ref
    pristine: PyDoc;

    @observable
    isDummy: boolean;

    @observable.ref
    saveService: SaveService;

    @observable
    loaded: boolean = false;
    @observable.ref
    legacyData?: PyDoc;
    legacyCleanup?: () => void;


    /** model specific props */

    _logMessages = observable<LogMessage>([]);

    @observable
    executing: boolean = false;

    @observable
    showRaw: boolean = false;

    @observable
    turtleModalOpen: boolean = false;

    @observable
    execCounter: number = 0;

    @observable
    executedScriptSource: string;

    rawScript: string;

    @observable
    code: string;
    readonly: boolean;


    constructor(doc: Document<PyDoc>, rawScript: string, readonly: boolean = false, isDummy: boolean = false) {
        this.readonly = readonly;
        this.store = rootStore.documentStore;
        this.webKey = doc.web_key;
        this.id = doc.id;
        this.userId = doc.user_id;
        this.createdAt = new Date(doc.created_at);
        this.updatedAt = new Date(doc.updated_at);
        this.pristine = doc.data;
        this.rawScript = rawScript;
        this.executedScriptSource = doc.data.code;
        this.code = doc.data.code;
        this.isDummy = isDummy;
        makeObservable(this);
        /** order depends, initialize AFTER making this observable! */
        this.saveService = new SaveService(this, save);
    }

    @computed
    get canUpdate(): boolean {
        return !this.isDummy &&!this.readonly && this.loaded;
    }

    @computed
    get data(): PyDoc {
        return {
            code: this.code
        };
    }

    @action
    setData(data: PyDoc) {
        this.code = data.code;
    }

    @computed
    get props(): Document<PyDoc> {
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

    @action
    addLogMessage(msg: LogMessage) {
        this._logMessages.push(msg);
    }

    @action
    clearLogMessages() {
        this._logMessages.clear();
    }

    @computed
    get logMessages() {
        return this._logMessages
            .slice()
            .sort((a, b) => (a.timeStamp > b.timeStamp ? 1 : a.timeStamp < b.timeStamp ? -1 : 0));
    }

    @action
    setTurtleModalOpen(open: boolean) {
        this.turtleModalOpen = open;
    }

    @action
    execScript(document: globalThis.Document) {
        if (this.hasTurtleImport) {
            this.store.setOpendTurtleModal(this.webKey);
        }
        // make sure brython always processes only one script per page
        document.querySelectorAll('.brython-script[type="text/python"]').forEach((src) => {
            src.setAttribute('type', 'text/py_disabled');
        });
        document.querySelectorAll('.brython-turtle-result').forEach((resContainer) => {
            resContainer.childNodes.forEach((svg) => {
                resContainer.removeChild(svg);
            });
        });
        const active = document.getElementById(DOM_ELEMENT_IDS.scriptSource(this.codeId));
        active.setAttribute('type', 'text/python');
        this.executing = true;
        this.executedScriptSource = this.code;
        setTimeout(
            action(() => {
                this.execCounter += 1;
            }),
            1
        );
    }

    @computed
    get codeId(): string {
        return `ofi_${this.webKey}`.replace(/-/g, '_');
    }

    @computed
    get hasTurtleImport(): boolean {
        return TURTLE_IMPORTS_TESTER.test(this.data.code);
    }

    @computed
    get hasEdits(): boolean {
        return this.rawScript !== this.data.code;
    }

}