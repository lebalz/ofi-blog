import { reaction } from 'mobx';
import React from 'react';
import { DocType, ModelTypes } from '../models/iModel';
import { rootStore, storesContext } from './stores';

export const useStores = () => React.useContext(storesContext);

export const useStore = <T extends keyof typeof rootStore>(store: T): typeof rootStore[T] =>
    React.useContext(storesContext)[store];
export const useRootStore = () => React.useContext(storesContext);

export const useDocument = (
    defaultData: () => ModelTypes,
    type: DocType,
    webKey: string,
    persist: boolean,
    readonly?: boolean,
    versioned?: boolean
) => {
    const [initialized, setInitialized] = React.useState(false);
    /** initial load */
    React.useEffect(() => {
        rootStore.documentStore
            .provideDocument(defaultData(), type, webKey, persist, readonly, false, versioned)
            .finally(() => {
                setInitialized(true);
            });
    }, []);
    /** load when view changes */
    React.useEffect(() => {
        return reaction(
            () => rootStore.userStore.currentView,
            (currentView) => {
                if (initialized && currentView) {
                    rootStore.documentStore.provideDocument(
                        defaultData(),
                        type,
                        webKey,
                        persist,
                        readonly,
                        true,
                        versioned
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
                        defaultData(),
                        type,
                        webKey,
                        persist,
                        readonly,
                        true,
                        versioned
                    );
                }
            }
        );
    }, [initialized]);
};



export const useTimedTopic = (
    webKey: string,
) => {
    const [initialized, setInitialized] = React.useState(false);
    /** initial load */
    React.useEffect(() => {
        rootStore.timedTopicStore
            .provideTopic(webKey, false)
            .finally(() => {
                setInitialized(true);
            });
    }, []);
    /** load when view changes */
    React.useEffect(() => {
        return reaction(
            () => rootStore.userStore.currentView,
            (currentView, prev) => {
                if (initialized && currentView) {
                    rootStore.timedTopicStore.provideTopic(
                        webKey,
                        true
                    );
                }
            }
        );
    }, [initialized]);
    /** load when api is online again */
    React.useEffect(() => {
        return reaction(
            () => rootStore.msalStore.isApiOffline,
            (isOffline, prev) => {
                if (initialized && !isOffline && prev) {
                    rootStore.timedTopicStore.provideTopic(
                        webKey,
                        true
                    );
                }
            }
        );
    }, [initialized]);
};



export const useSolution = (
    webKey: string,
) => {
    const [initialized, setInitialized] = React.useState(false);
    /** initial load */
    React.useEffect(() => {
        rootStore.policyStore
            .provideAuthorization(webKey, false)
            .finally(() => {
                setInitialized(true);
            });
    }, []);
    /** load when view changes */
    React.useEffect(() => {
        return reaction(
            () => rootStore.userStore.currentView,
            (currentView, prev) => {
                if (initialized && currentView) {
                    rootStore.policyStore.provideAuthorization(
                        webKey,
                        true
                    );
                }
            }
        );
    }, [initialized]);
    /** load when api is online again */
    React.useEffect(() => {
        return reaction(
            () => rootStore.msalStore.isApiOffline,
            (isOffline, prev) => {
                if (initialized && !isOffline && prev) {
                    rootStore.policyStore.provideAuthorization(
                        webKey,
                        true
                    );
                }
            }
        );
    }, [initialized]);
};
