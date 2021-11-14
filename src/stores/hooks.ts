import { reaction } from 'mobx';
import React from 'react';
import { DocType, ModelTypes } from '../models/iModel';
import { rootStore, storesContext } from './stores';

export const useStores = () => React.useContext(storesContext);

export const useStore = <T extends keyof typeof rootStore>(store: T): typeof rootStore[T] =>
    React.useContext(storesContext)[store];

export const useDocument = (
    defaultData: ModelTypes,
    type: DocType,
    webKey: string,
    persist: boolean,
    getLegacyData: () => { data: ModelTypes | undefined; cleanup?: () => void },
    readonly?: boolean
) => {
    /** initial load */
    React.useEffect(() => {
        rootStore.documentStore.provideDocument(defaultData, type, webKey, persist, getLegacyData, readonly);
    }, []);
    /** load when view changes */
    React.useEffect(() => {
        return reaction(
            () => rootStore.userStore.currentView,
            (currentView) => {
                if (currentView) {
                    rootStore.documentStore.provideDocument(
                        defaultData,
                        type,
                        webKey,
                        persist,
                        getLegacyData,
                        readonly
                    );
                }
            }
        );
    }, []);
    /** load when api is online again */
    React.useEffect(() => {
        return reaction(
            () => rootStore.msalStore.isApiOffline,
            (isOffline) => {
                if (!isOffline) {
                    rootStore.documentStore.provideDocument(
                        defaultData,
                        type,
                        webKey,
                        persist,
                        getLegacyData,
                        readonly
                    );
                }
            }
        );
    }, []);
};
