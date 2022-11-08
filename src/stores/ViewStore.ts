import { action, makeObservable, observable } from 'mobx';
import { RootStore } from './stores';


export class ViewStore {
    private readonly root: RootStore;

    @observable.ref
    caesar: {text: string, cipher: string, key: string, source: 'text' | 'cipher' } = {
        text: '',
        cipher: '',
        key: 'D',
        source: 'text'
    }

    @observable.ref
    textFrequency = {
        text: 'Hallo',
        sortAlphabetic: true,
        onlyLetters: false,
        indicateUnusedChars: true,
    }

    @observable.ref
    substitution: {text: string, cipher: string, key: string, source: 'text' | 'cipher' } = {
        text: '',
        cipher: '',
        key: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        source: 'text'
    }
    
    @observable.ref
    penta: {text: string } = {
        text: ''
    }
    
    @observable.ref
    pentaPixel: {penta: string } = {
        penta: '00000 00000 00000 00000 00000'
    }

    constructor(root: RootStore) {
        this.root = root;
        makeObservable(this);
    }
}
