import axios, { CancelTokenSource, Method } from "axios";
import { debounce } from "lodash";
import { action, computed, makeObservable, observable } from "mobx";
import { DOM_ELEMENT_IDS, TURTLE_IMPORTS_TESTER } from "../components/AceEditor/constants";
import { DocumentStore } from "../stores/DocumentStore";
import Document from "./Document";

export interface PyDoc {
  code: string;
}

export interface LogMessage {
  type: "done" | "stdout" | "stderr";
  output: string;
  timeStamp: number;
}

export default class Script {
  @observable.ref
  pyDoc: Document<PyDoc>;
  isDummy: boolean;

  _logMessages = observable<LogMessage>([]);

  @observable
  executing: boolean = false;

  @observable
  showRaw: boolean = false;

  @observable
  showSavedNotification: boolean = false;


  @observable
  turtleModalOpen: boolean = false;

  @observable
  execCounter: number = 0;

  @observable
  executedScriptSource: string;

  rawScript: string;

  constructor(pyDoc: Document<PyDoc>, rawScript: string) {
    this.rawScript = rawScript;
    this.pyDoc = pyDoc;
    this.executedScriptSource = this.pyDoc.data.code;
    this.isDummy = pyDoc.isDummy;
    makeObservable(this);
  }

  @action
  addLogMessage(msg: LogMessage) {
    console.log('got msg', msg)
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
      .sort((a, b) =>
        a.timeStamp > b.timeStamp ? 1 : a.timeStamp < b.timeStamp ? -1 : 0
      );
  }

  @action
  setTurtleModalOpen(open: boolean) {
    this.turtleModalOpen = open;
  }

  @action
  execScript(document: globalThis.Document, store: DocumentStore) {
    if (this.hasTurtleImport) {
      store.setOpendTurtleModal(this.pyDoc.webKey);
    }
    // make sure brython always processes only one script per page
    document
      .querySelectorAll('.brython-script[type="text/python"]')
      .forEach((src) => {
        src.setAttribute("type", "text/py_disabled");
      });
    const active = document.getElementById(
      DOM_ELEMENT_IDS.scriptSource(this.codeId)
    );
    active.setAttribute("type", "text/python");
    this.executing = true;
    this.executedScriptSource = this.pyDoc.data.code;
    setTimeout(action(() => {
      this.execCounter += 1;
    }), 1)
  }

  @computed
  get codeId(): string {
    return `ofi_${this.pyDoc.webKey}`.replace(/-/g, '_');
  }

  @computed
  get hasTurtleImport(): boolean {
    return TURTLE_IMPORTS_TESTER.test(this.pyDoc.data.code);
  }

  @computed
  get hasEdits(): boolean {
    return this.rawScript !== this.pyDoc.data.code;
  }
}
