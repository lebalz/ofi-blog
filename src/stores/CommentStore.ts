import axios, { CancelTokenSource } from 'axios';
import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { computedFn } from 'mobx-utils';
import { getComments, postComment, Comment as CommentProps, Locator, CommentData } from '../api/comment';
import { getComments as getCommentsAsAdmin } from '../api/admin';
import ArrayAnswer from '../models/Answer/Array';
import StringAnswer from '../models/Answer/String';
import Text from '../models/Answer/Text';
import { RootStore } from './stores';
import Comment from '../models/Comment';
import { LocatorType } from '../api/comment';

export class CommentStore {
    private readonly root: RootStore;
    comments = observable<Comment>([]);
    loadedPages = observable.set<string>();

    @observable initialized: boolean = false;
    constructor(root: RootStore) {
        this.root = root;
        makeObservable(this);
    }

    @computed
    get viewedComments() {
        const view = this.root.userStore.currentView;
        if (!view) {
            return this.comments;
        }
        return this.comments.filter((doc) => doc.userId === view.id || doc.userId < 0);
    }

    byPage = computedFn(
        function (this: CommentStore, pageKey: string) {
            return this.viewedComments.filter((comm) => comm.pageKey === pageKey);
        },
        { keepAlive: true }
    );

    isLoaded(pageKey: string): boolean {
        return this.byPage(pageKey).length > 0;
    }

    find = computedFn(
        function (this: CommentStore, pageKey: string, type: LocatorType, nr: number) {
            return this.byPage(pageKey).find((q) => q.nr === nr && q.type === type);
        },
        { keepAlive: false }
    );

    @action
    openComment(pageKey: string, type: LocatorType, nr: number) {
        if (this.loadedPages.has(pageKey)) {
            const loaded = this.find(pageKey, type, nr);
            if (loaded) {
                return loaded.toggleOpen();
            }
            const ct = axios.CancelToken.source();
            return this.apiCreateComment(pageKey, { comment: '' }, { type, nr }, ct).then(action((comment) => {
                if (comment) {
                    this.comments.push(new Comment(comment));
                }
            }));
        }
        this.loadComments(pageKey, false).then((res) => {
            this.openComment(pageKey, type, nr);
        }).catch(() => {
            console.log('Too bad, could not load comment')
        })
    }

    @action
    loadComments(pageKey: string, forceReload: boolean) {
        const loadedModel = this.byPage(pageKey);
        if (loadedModel.length > 0 && !forceReload) {
            return Promise.reject('Nothin to load');
        }
        this.loadedPages.add(pageKey);
        const ct = axios.CancelToken.source();
        return this.apiGetComments(pageKey, ct).then((comms) => {
            if (comms) {
                runInAction(() => {
                    this.byPage(pageKey).forEach((c) => {
                        this.comments.remove(c);
                    });
                    comms.forEach((com) => {
                        this.comments.push(new Comment(com));
                    });
                });
                return comms;
            }

            this.loadedPages.delete(pageKey);
            return Promise.reject('Error during load');
        });
    }

    @computed
    get isLoggedIn() {
        return this.root.msalStore.loggedIn;
    }

    @action
    apiGetComments(pageKey: string, cancelToken: CancelTokenSource): Promise<CommentProps[] | void> {
        return this.root.msalStore.withToken().then((ok) => {
            if (ok) {
                const isOthersView =
                    this.root.userStore.currentView &&
                    this.root.userStore.currentView.id !== this.root.userStore.current?.id;
                if (!isOthersView) {
                    return getComments(pageKey, cancelToken)
                        .then(({ data }) => {
                            return data;
                        })
                        .catch((err) => {
                            if (err.message?.startsWith('Network Error')) {
                                this.root.msalStore.setApiOfflineState(true);
                            } else {
                                return;
                            }
                        });
                }
                return getCommentsAsAdmin(this.root.userStore.currentView.id, pageKey, cancelToken)
                    .then(({ data }) => {
                        return data;
                    })
                    .catch((err) => {
                        if (err.message?.startsWith('Network Error')) {
                            this.root.msalStore.setApiOfflineState(true);
                        } else {
                            return;
                        }
                    });
            }
        });
    }

    @action
    apiCreateComment(
        pageKey: string,
        data: CommentData,
        locator: Locator,
        cancelToken: CancelTokenSource
    ): Promise<CommentProps | void> {
        return this.root.msalStore
            .withToken()
            .then((ok) => {
                if (ok) {
                    return postComment(pageKey, data, locator, undefined, cancelToken).then(({ data }) => {
                        return data;
                    });
                }
            })
            .catch((err) => {
                if (err.message?.startsWith('Network Error')) {
                    this.root.msalStore.setApiOfflineState(true);
                } else {
                    return;
                }
            });
    }
}
