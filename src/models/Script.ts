import axios, { CancelTokenSource } from 'axios';
import { Document, putDocument, Version } from './../api/document';
import { action, computed, makeObservable, observable, reaction } from 'mobx';
import { CodeModel } from './iModel';
import { DocumentStore } from '../stores/DocumentStore';
import { rootStore } from '../stores/stores';
import SaveService, { ApiModel } from './SaveService';
import { sanitizePyScript } from '../utils/sanitizers';
import { throttle } from 'lodash';
import { 
    CANVAS_OUTPUT_TESTER, 
    DOM_ELEMENT_IDS, 
    GRAPHICS_OUTPUT_TESTER, 
    GRID_IMPORTS_TESTER, 
    TURTLE_IMPORTS_TESTER 
} from 'docusaurus-live-brython/theme/CodeEditor/constants';
import { splitPreCode } from 'docusaurus-live-brython/theme/CodeEditor/WithScript/helpers';
import { Status } from 'docusaurus-live-brython/theme/CodeEditor/WithScript/Types';

export interface PyDoc {
    code: string;
}

export interface LogMessage {
    type: 'done' | 'stdout' | 'stderr' | 'start';
    output: string;
    timeStamp: number;
}

export const DEFAULT_DATA: PyDoc = {
    code: '',
};

const save = (model: Script, cancelToken: CancelTokenSource) => {
    const pasted = model.isPasted;
    if (pasted) {
        model.setPastedEdit(false);
    }
    return putDocument<PyDoc>(model.webKey, model.data, model.isVersioned, pasted, cancelToken);
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
    isLoaded: boolean = false;

    /** model specific props */

    _logMessages = observable<LogMessage>([]);

    @observable
    isExecuting: boolean = false;

    @observable
    showRaw: boolean = false;

    @observable
    turtleModalOpen: boolean = false;

    @observable
    executedScriptSource: string;

    
    @observable
    isGraphicsmodalOpen: boolean = false;

    @observable
    preCode: string = '';

    rawScript: string;

    @observable
    code: string;

    // @observable
    // status: Status = Status.IDLE;

    readonly: boolean;

    readonly isVersioned: boolean;
    readonly _pristineCode: string;
    readonly codeId: string;
    readonly lang = 'python';

    @observable
    versionsLoaded: boolean = false;
    versions = observable.array<Version<PyDoc>>([]);

    @observable
    isPasted: boolean;

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
        this.codeId = `code.${this.webKey}`.replace(/(-|\.)/g, '_');
        
        const {pre, code} = splitPreCode(doc.data.code) as {pre: string, code: string};
        this._pristineCode = code;

        this.isDummy = isDummy;
        this.isVersioned = versioned;
        makeObservable(this);
        /** order depends, initialize AFTER making this observable! */
        this.saveService = new SaveService(this, save);
    }

    @computed
    get canUpdate(): boolean {
        return !this.isDummy && !this.readonly && this.isLoaded;
    }

    @action
    setIsPasted(isPasted: boolean) {
        this.isPasted = isPasted;
    };
    @action
    setShowRaw(showRaw: boolean) {
        this.showRaw = showRaw;
    };

    @computed
    get pristineCode() {
        return this._pristineCode;
    }

    @action
    setStatus(status: Status) {
        // this.status = status;
        if (status === Status.IDLE) {
            this.saveService.state = 'init';
        }
    };

    @computed
    get status() {
        switch (this.saveService.state) {
            case 'pending':
                return Status.SYNCING;
            case 'done':
                return Status.SUCCESS;
            case 'error':
                return Status.ERROR;
            default:
                return Status.IDLE;
        };
    }

    @action
    setExecuting(executing: boolean) {
        this.isExecuting = executing;
    }


    @action
    closeGraphicsModal() {
        this.isGraphicsmodalOpen = false;
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
    _addVersion(version: Version<PyDoc>) {
        if (!this.isVersioned) {
            return;
        }
        this.versions.push(version);
    }

    addVersion = throttle(
        this._addVersion,
        DocumentStore.syncMaxOnceEvery,
        {leading: false, trailing: true}
    );

    @action
    saveNow() {
        this.saveService.saveNow();
    }

    @action
    setCode(code: string, action?: 'insert' | 'remove' | string) {
        if (this.isPasted && action === 'remove') {
            return;
        }
        this.code = code;
        const updatedAt = new Date();
        this.updatedAt = updatedAt;
        if (this.isVersioned) {
            this.addVersion({
                data: this.data,
                pasted: this.isPasted,
                version: (new Date()).toISOString()
            });
        }
        if (this.isPasted) {
            this.isPasted = false;
        }

        /**
         * call the api to save the code...
         */
    }

    @action
    loadVersions() {
        if (!this.isVersioned) {
            return;
        }
        if (this.versionsCT) {
            this.versionsCT.cancel();
        }
        this.versionsLoaded = false;
        this.versionsCT = axios.CancelToken.source();
        this.store
            .apiGetDocument<PyDoc>(this.webKey, true, this.versionsCT)
            .then(action((res) => {
                if (res) {
                    this.versions.replace(res.versions);
                    this.versionsLoaded = true;
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
        this._logMessages.push({output: msg.output, timeStamp: msg.timeStamp, type: msg.type});
    }

    @action
    clearLogMessages() {
        this._logMessages.clear();
    }

    @computed
    get logs() {
        return this._logMessages
            .slice()
            .sort((a, b) => (a.timeStamp > b.timeStamp ? 1 : a.timeStamp < b.timeStamp ? -1 : 0));
    }

    @action
    stopScript() {
        const code = document.getElementById(DOM_ELEMENT_IDS.communicator(this.codeId));
        if (code) {
            code.removeAttribute('data--start-time');
        }
    }

    
    @computed
    get codeToExecute() {
        if (this.preCode.length > 0) {
            return `${this.preCode}\n${this.code}`;
        }
        return `${this.code}`;
    }
    

    @action
    execScript() {
        const lineShift = this.preCode.split(/\n/).length;
        const src = `from brython_runner import run\nrun("""${sanitizePyScript(this.codeToExecute || '')}""", '${this.codeId}', ${lineShift})\n`;
        if (!(window as any).__BRYTHON__) {
            alert('Brython not loaded');
            return;
        }
        if (this.hasGraphicsOutput) {
            this.isGraphicsmodalOpen = true;
        }
        this.isExecuting = true;
        const active = document.getElementById(DOM_ELEMENT_IDS.communicator(this.codeId));
        active?.setAttribute('data--start-time', `${Date.now()}`);
        /**
         * ensure that the script is executed after the current event loop.
         * Otherwise, the brython script will not be able to access the graphics output.
         */
        setTimeout(() => {
            (window as any).__BRYTHON__.runPythonSource(
                src,
                {
                    pythonpath: DocumentStore.router === 'hash' ? [] : [DocumentStore.libDir]
                }
            );
        }, 0);
    }

    @action
    setPastedEdit(pasted: boolean) {
        this.isPasted = pasted;
    }

    @computed
    get hasGraphicsOutput() {
        return this.hasTurtleOutput || this.hasCanvasOutput || GRAPHICS_OUTPUT_TESTER.test(this.codeToExecute);
    }

    @computed
    get hasTurtleOutput() {
        return TURTLE_IMPORTS_TESTER.test(this.codeToExecute);
    }


    @computed
    get hasCanvasOutput() {
        return CANVAS_OUTPUT_TESTER.test(this.codeToExecute) || GRID_IMPORTS_TESTER.test(this.codeToExecute);
    }

    @computed
    get hasEdits(): boolean {
        return this.rawScript !== this.data.code;
    }

    
    subscribe(listener: () => void, selector: keyof Script) {
        if (Array.isArray(this[selector])) {
            return reaction(
                () => (this[selector] as Array<any>).length,
                listener
            );
        }
        return reaction(
            () => this[selector],
            listener
        );
    }
}
