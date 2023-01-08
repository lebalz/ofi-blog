import axios, { CancelTokenSource } from 'axios';
import { Document, putDocument, Version } from './../api/document';
import { action, computed, makeObservable, observable } from 'mobx';
import { CodeModel } from './iModel';
import { DocumentStore } from '../stores/DocumentStore';
import { rootStore } from '../stores/stores';
import SaveService, { ApiModel } from './SaveService';
import { DOM_ELEMENT_IDS, TURTLE_IMPORTS_TESTER, GRAPHICS_OUTPUT_TESTER, CANVAS_OUTPUT_TESTER, GRID_IMPORTS_TESTER, TURTLE3D_IMPORTS_TESTER } from '../components/CodeEditor/constants';

export interface PyDoc {
    code: string;
}

export interface LogMessage {
    type: 'done' | 'stdout' | 'stderr';
    output: string;
    timeStamp: number;
}

export const DEFAULT_DATA: PyDoc = {
    code: '',
};

const save = (model: Script, cancelToken: CancelTokenSource) => {
    const pasted = model.pastedEdit;
    if (pasted) {
        model.setPastedEdit(false);
    }
    return putDocument<PyDoc>(model.webKey, model.data, model.versioned, pasted, cancelToken);
};

export default class Script implements CodeModel, ApiModel {
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

    @observable
    precode: string = '';

    rawScript: string;

    @observable
    code: string;
    readonly: boolean;

    versioned: boolean;
    @observable
    versionsLoaded: false | 'loading' | 'loaded' = false;
    versions = observable.array<Version<PyDoc>>([]);

    @observable
    pastedEdit: boolean;

    versionsCT: CancelTokenSource;

    constructor(
        doc: Document<PyDoc>,
        rawScript: string,
        readonly: boolean = false,
        isDummy: boolean = false,
        versioned: boolean = false
    ) {
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
        this.versioned = versioned;
        makeObservable(this);
        /** order depends, initialize AFTER making this observable! */
        this.saveService = new SaveService(this, save);
    }

    @computed
    get canUpdate(): boolean {
        return !this.isDummy && !this.readonly && this.loaded;
    }

    @computed
    get umami() {
        return {
            event: `update-doc-${this.type}`,
            data: { webKey: this.webKey }
        };
    }

    @computed
    get data(): PyDoc {
        return {
            code: this.code,
        };
    }

    @action
    setData(data: PyDoc) {
        this.code = data.code;
    }

    @action
    loadVersions() {
        if (!this.versioned) {
            return;
        }
        if (this.versionsCT) {
            this.versionsCT.cancel();
        }
        this.versionsLoaded = 'loading';
        this.versionsCT = axios.CancelToken.source();
        this.store
            .apiGetDocument<PyDoc>(this.webKey, true, this.versionsCT)
            .then(action((res) => {
                if (res) {
                    this.versions.replace(res.versions);
                    this.versionsLoaded = 'loaded';
                } else {
                    this.versionsLoaded = false;
                }
            }));
    }

    @computed
    get props(): Document<PyDoc> {
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
    stopScript(document: globalThis.Document) {
        document.querySelectorAll('.brython-script[type="text/python"]').forEach((src) => {
            src.setAttribute('type', 'text/py_disabled');
            src.removeAttribute('data--start-time');
        });
    }

    @action
    execScript(document: globalThis.Document) {
        if (this.hasGraphicsOutput) {
            this.store.setOpendTurtleModal(this.webKey);
        }
        // make sure brython always processes only one script per page
        document.querySelectorAll('.brython-script[type="text/python"]').forEach((src) => {
            src.setAttribute('type', 'text/py_disabled');
            src.removeAttribute('data--start-time');
        });
        document.querySelectorAll('.brython-graphics-result').forEach((resContainer) => {
            resContainer.replaceChildren();
            if (this.hasCanvasOutput) {
                const canv = document.createElement('canvas');
                canv.setAttribute('width', '500');
                canv.setAttribute('height', '500');
                canv.style.width = '500px';
                canv.style.height = '500px';
                canv.style.display = 'block';
                canv.id = DOM_ELEMENT_IDS.canvasContainer(this.codeId);
                resContainer.appendChild(canv);
            }
        });
        const active = document.getElementById(DOM_ELEMENT_IDS.scriptSource(this.codeId));
        active.setAttribute('type', 'text/python');
        active.setAttribute('data--start-time', `${Date.now()}`);
        this.executing = true;
        this.executedScriptSource = this.code;
        setTimeout(
            action(() => {
                this.execCounter += 1;
            }),
            1
        );
    }

    @action
    setPastedEdit(pasted: boolean) {
        this.pastedEdit = pasted;
    }

    @computed
    get codeId(): string {
        return `ofi_${this.webKey}`.replace(/-/g, '_');
    }

    @computed
    get hasGraphicsOutput(): boolean {
        const code = `${this.precode}\n${this.data.code}`;
        return CANVAS_OUTPUT_TESTER.test(code) || GRAPHICS_OUTPUT_TESTER.test(code) || TURTLE_IMPORTS_TESTER.test(code) || GRID_IMPORTS_TESTER.test(code) || TURTLE3D_IMPORTS_TESTER.test(code);
    }

    @computed
    get hasTurtleOutput(): boolean {
        const code = `${this.precode}\n${this.data.code}`;
        return this.hasGraphicsOutput && (TURTLE_IMPORTS_TESTER.test(code) || TURTLE3D_IMPORTS_TESTER.test(code));
    }

    @computed
    get hasCanvasOutput(): boolean {
        const code = `${this.precode}\n${this.data.code}`;
        return CANVAS_OUTPUT_TESTER.test(code) || GRID_IMPORTS_TESTER.test(code);
    }

    @computed
    get hasEdits(): boolean {
        return this.rawScript !== this.data.code;
    }
}
