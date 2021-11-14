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
    const [initialized, setInitialized] = React.useState(false);
    /** initial load */
    React.useEffect(() => {
        rootStore.documentStore
            .provideDocument(defaultData, type, webKey, persist, getLegacyData, readonly)
            .finally(() => {
                setInitialized(true);
            });
    }, []);
    /** load when view changes */
    React.useEffect(() => {
        return reaction(
            () => rootStore.userStore.currentView,
            (currentView) => {
                if (initialized && currentView && !rootStore.userStore.isMyView) {
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
    }, [initialized]);
    /** load when api is online again */
    React.useEffect(() => {
        return reaction(
            () => rootStore.msalStore.isApiOffline,
            (isOffline) => {
                if (initialized && !isOffline) {
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
    }, [initialized]);
};
