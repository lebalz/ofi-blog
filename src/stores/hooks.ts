import { reaction } from 'mobx';
import React from 'react';
import { DocType, ModelTypes } from '../models/iModel';
// @ts-ignore
import { useDoc } from '@docusaurus/theme-common/internal';
import { rootStore, storesContext } from './stores';

export const useStores = () => React.useContext(storesContext);

export const useStore = <T extends keyof typeof rootStore>(store: T): typeof rootStore[T] =>
    React.useContext(storesContext)[store];

export const useDocument = (
    defaultData: () => ModelTypes,
    type: DocType,
    webKey: string,
    persist: boolean,
    readonly?: boolean,
    versioned?: boolean
) => {
    const [initialized, setInitialized] = React.useState(false);
    let pageKey: string | undefined = undefined;
    try {
        const { frontMatter } = useDoc();
        const { sidebar_custom_props } = frontMatter;
        pageKey = sidebar_custom_props?.id;
    } catch (e) {
        console.log(e)
    }
    /** initial load */
    React.useEffect(() => {
        rootStore.documentStore
            .provideDocument(defaultData(), type, pageKey, webKey, persist, readonly, false, versioned)
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
                        pageKey,
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
    // React.useEffect(() => {
    //     return reaction(
    //         () => rootStore.msalStore.isApiOffline,
    //         (isOffline) => {
    //             if (initialized && !isOffline) {
    //                 rootStore.documentStore.provideDocument(
    //                     defaultData(),
    //                     type,
    //                     webKey,
    //                     persist,
    //                     readonly,
    //                     true,
    //                     versioned
    //                 );
    //             }
    //         }
    //     );
    // }, [initialized]);
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
    // React.useEffect(() => {
    //     return reaction(
    //         () => rootStore.msalStore.isApiOffline,
    //         (isOffline, prev) => {
    //             if (initialized && !isOffline && prev) {
    //                 rootStore.timedTopicStore.provideTopic(
    //                     webKey,
    //                     true
    //                 );
    //             }
    //         }
    //     );
    // }, [initialized]);
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
    // React.useEffect(() => {
    //     return reaction(
    //         () => rootStore.msalStore.isApiOffline,
    //         (isOffline, prev) => {
    //             if (initialized && !isOffline && prev) {
    //                 rootStore.policyStore.provideAuthorization(
    //                     webKey,
    //                     true
    //                 );
    //             }
    //         }
    //     );
    // }, [initialized]);
};


export const useComments = (pageKey: string) => {
    const [initialized, setInitialized] = React.useState(false);
    /** initial load */
    React.useEffect(() => {
        if (!rootStore.msalStore.loggedIn) {
            return;
        }
        rootStore.commentStore
            .loadComments(pageKey)
            .catch((e) => console.log(e))
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
                    rootStore.commentStore.loadComments(pageKey, true)
                }
            }
        );
    }, [initialized]);
    /** load when api is online again */
    // React.useEffect(() => {
    //     return reaction(
    //         () => rootStore.msalStore.isApiOffline,
    //         (isOffline, prev) => {
    //             if (initialized && !isOffline && prev) {
    //                 rootStore.commentStore.loadComments(pageKey)
    //             }
    //         }
    //     );
    // }, [initialized]);
};

