import axios, { CancelTokenSource } from 'axios';
import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { computedFn } from 'mobx-utils';
import { getComments, postComment, Comment as CommentProps, Locator, CommentData, deleteComment } from '../api/comment';
import { getComments as getCommentsAsAdmin } from '../api/admin';
import { RootStore } from './stores';
import Comment from '../models/Comment';
import { LocatorType } from '../api/comment';

export class CommentStore {
    private readonly root: RootStore;
    comments = observable<Comment>([]);
    commentableNodes = observable(new Map<string, Map<LocatorType, number>>());
    loadedPages = observable.set<string>();
    
    @observable 
    initialized: boolean = false;
    
    @observable 
    displayInline: boolean = false;
    
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
        return this.comments.filter((doc) => doc.userId === view.id && !doc.markDeleted);
    }
    isLoaded(pageKey: string): boolean {
        return this.loadedPages.has(pageKey);
    }

    byPage = computedFn(
        function (this: CommentStore, pageKey: string): Comment[] {
            return this.viewedComments.filter((comm) => comm.pageKey === pageKey);
        },
        { keepAlive: true }
    );


    find = computedFn(
        function (this: CommentStore, pageKey: string, type: LocatorType, nr: number): Comment[] {
            return this.byPage(pageKey).filter((q) => q.displayNr === nr && q.type === type).sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
        },
        { keepAlive: false }
    );

    @computed
    get isMyView(): boolean {
        return this.root.userStore.isMyView;
    }

    @action
    notifyPresence(pageKey: string, type: LocatorType, nr: number) {
        if (!this.commentableNodes.has(pageKey)) {
            this.commentableNodes.set(pageKey, new Map<LocatorType, number>);
        }
        if (!this.commentableNodes.get(pageKey).has(type)) {
            this.commentableNodes.get(pageKey).set(type, 0);
        }
        if (nr > this.commentableNodes.get(pageKey).get(type)) {
            this.commentableNodes.get(pageKey).set(type, nr);
        }
    }

    @action
    openComment(pageKey: string, type: LocatorType, nr: number) {
        if (this.loadedPages.has(pageKey)) {
            const loaded = this.find(pageKey, type, nr);
            if (loaded.length > 0) {
                return loaded.forEach(c => c.toggleOpen);
            }
            const ct = axios.CancelToken.source();
            return this.apiCreateComment(pageKey, { comment: '', open: true }, { type, nr }, ct).then(action((comment) => {
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
    loadComments(pageKey: string, forceReload: boolean = false) {
        if (this.isLoaded(pageKey) && !forceReload) {
            return Promise.reject('Nothing to load');
        }
        this.loadedPages.add(pageKey);
        const ct = axios.CancelToken.source();
        return this.apiGetComments(pageKey, ct).then(action((comms) => {
            if (comms) {
                const view = this.root.userStore.currentView;
                const [toRemove, existing] = this.comments.reduce((partitioned, c) => {
                    if (c.pageKey === pageKey && c.userId === view.id) {
                        partitioned[0].push(c);
                    } else {
                        partitioned[1].push(c);
                    }
                    return partitioned;
                }, [[],[]] as [Comment[], Comment[]]);
                toRemove.forEach((c) => {
                    c.cleanup();
                });
                // const existing = this.comments.filter((cm) => cm.pageKey !== pageKey && cm.userId !== view.id);
                this.comments.replace([...existing, ...comms.map((cm) => new Comment(cm))]);
                return comms;
            }

            this.loadedPages.delete(pageKey);
            return Promise.reject('Error during load');
        }));
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

    @action
    remove(comment: Comment) {
        if (!this.isMyView) {
            return;
        }
        const ct = axios.CancelToken.source();
        comment.markDeleted = true;
        this.apiRemoveComment(comment.id, ct).then(action((res) => {
            if (res.status === 200) {
                comment.cleanup();
                this.comments.remove(comment);
            }
        })).catch(action(() => {
            comment.markDeleted = false;
        }))
    }

    @action
    apiRemoveComment(id: number, cancelToken: CancelTokenSource) {
        return this.root.msalStore
            .withToken()
            .then((ok) => {
                if (ok) {
                    return deleteComment(id, cancelToken);
                }
            });

    }
}
