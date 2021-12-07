import axios, { CancelTokenSource } from 'axios';
import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { computedFn } from 'mobx-utils';
import { getTopicAsAdmin } from '../api/admin';
import { RootStore } from './stores';
import TimedTopic from '../models/TimedTopic';
import { getTopic, postTopic, TimedTopicData, TimedTopic as TimedTopicProps } from '../api/timed_topic';
import {orderBy as _orderBy} from 'lodash';


export type OrderBy = 'name' | 'createdAt' | 'lastEdited' | 'duration';
export const ORDER_COLUMNS: OrderBy[] = ['name', 'lastEdited', 'duration', 'createdAt'];
export const ORDER_NAME_MAP: {[key in OrderBy]: string} = {
    name: 'Name',
    lastEdited: 'Zuletzt Geändert',
    duration: 'Länge',
    createdAt: 'Erstellt Am'
};
export class TimedTopicStore {
    private readonly root: RootStore;
    timedTopics = observable<TimedTopic>([]);

    @observable
    orderBy: OrderBy = 'createdAt';
    @observable
    sortOrder: 'asc' | 'desc' = 'desc';

    @observable
    timer = 0;

    @observable initialized: boolean = false;

    constructor(root: RootStore) {
        this.root = root;
        makeObservable(this);
        setInterval(
            action(() => {
                this.timer = Date.now();
            }),
            1000
        );
    }

    @action
    setOrderColumn(col: OrderBy) {
        if (this.orderBy === col) {
            return;
        }
        this.orderBy = col;
    }

    @action
    toggleSortOrder() {
        if (this.sortOrder === 'asc') {
            this.setSortOrder('desc');
        } else {
            this.setSortOrder('asc');
        }
    }

    @action
    setSortOrder(order: 'asc' | 'desc') {
        if (this.sortOrder === order) {
            return;
        }
        this.sortOrder = order;
    }

    @computed
    get viewedTopics() {
        const view = this.root.userStore.currentView;
        if (!view) {
            return this.timedTopics;
        }
        return this.timedTopics.filter((doc) => doc.userId === view.id || doc.userId < 0);
    }

    @computed
    get topicStats() {
        const totalTime = this.viewedTopics.reduce((prev, curr) => prev + curr.totalTime, 0);
        const totalTimeGroupedByDate: { [key: string]: number } = {};
        _orderBy(this.viewedTopics, ['createdAt'], ['asc']).forEach((topic) => {
            for (const [date, time] of Object.entries(topic.totalTimeGroupedByDate)) {
                if (date in totalTimeGroupedByDate) {
                    totalTimeGroupedByDate[date] += time;
                } else {
                    totalTimeGroupedByDate[date] = time;
                }
            }
        });
        return {
            totalTimeGroupedByDate: totalTimeGroupedByDate,
            totalTime: totalTime,
        };
    }

    @computed
    get myTopics() {
        const view = this.root.userStore.current;
        if (!view) {
            return this.timedTopics;
        }
        return this.timedTopics.filter((doc) => doc.userId === view.id || doc.userId < 0);
    }

    find = computedFn(
        function (this: TimedTopicStore, webKey: string): TimedTopic | undefined {
            return this.viewedTopics.find((q) => q.webKey === webKey);
        },
        { keepAlive: true }
    );

    @action
    provideTopic(webKey: string, forceReload?: boolean): Promise<TimedTopic> {
        const loadedTopic = this.find(webKey);
        if (loadedTopic) {
            if (loadedTopic.loaded && !forceReload) {
                return Promise.resolve(loadedTopic);
            }
            this.timedTopics.remove(loadedTopic);
        }
        const model = new TimedTopic(
            {
                data: {},
                exercises: [],
                id: -1,
                user_id: this.root.userStore.currentView?.id || -1,
                web_key: webKey,
                updated_at: new Date().toISOString(),
                created_at: new Date().toISOString(),
            },
            true
        );
        this.timedTopics.push(model);
        if (!this.root.msalStore.loggedIn) {
            model.loaded = true;
            return Promise.resolve(model);
        }
        const ct = axios.CancelToken.source();
        const { isMyView } = this.root.userStore;
        return this.apiGetTopic(model.webKey, ct)
            .then((data) => {
                if (data) {
                    return { data: data, returnDummy: false };
                } else {
                    if (isMyView) {
                        return this.apiCreateTopic(model.webKey, model.data, ct).then((data) => {
                            return { data: data, returnDummy: false };
                        });
                    }
                    return { data: model.props, returnDummy: true };
                }
            })
            .then((data) => {
                if (data && data.returnDummy) {
                    runInAction(() => {
                        model.loaded = true;
                    });
                    return model;
                }
                if (data) {
                    const fromApi = new TimedTopic(data.data, false);
                    runInAction(() => {
                        fromApi.loaded = true;
                        this.timedTopics.remove(model);
                        this.timedTopics.push(fromApi);
                    });
                    return fromApi;
                }
                return model;
            });
    }

    @action
    stopAllRunning() {
        this.myTopics.forEach((topic) => {
            topic.stopAllRunning();
        });
    }

    @computed
    get isLoggedIn() {
        return this.root.msalStore.loggedIn;
    }

    @action
    apiGetTopic(webKey: string, cancelToken: CancelTokenSource) {
        return this.root.msalStore.withToken().then((ok) => {
            if (ok) {
                const isOthersView =
                    this.root.userStore.currentView &&
                    this.root.userStore.currentView.id !== this.root.userStore.current?.id;
                if (!isOthersView) {
                    return getTopic(webKey, cancelToken)
                        .then(({ data }) => {
                            return data;
                        })
                        .catch((err) => {
                            if (err.message?.startsWith('Network Error')) {
                                this.root.msalStore.setApiOfflineState(true);
                            } else {
                                return undefined;
                            }
                        });
                }
                return getTopicAsAdmin(this.root.userStore.currentView.id, webKey, cancelToken)
                    .then(({ data }) => {
                        return data;
                    })
                    .catch((err) => {
                        if (err.message?.startsWith('Network Error')) {
                            this.root.msalStore.setApiOfflineState(true);
                        } else {
                            return undefined;
                        }
                    });
            }
        });
    }

    @action
    apiCreateTopic(
        webKey: string,
        data: TimedTopicData,
        cancelToken: CancelTokenSource
    ): Promise<void | TimedTopicProps> {
        return this.root.msalStore
            .withToken()
            .then((ok) => {
                if (ok) {
                    return postTopic(webKey, data, cancelToken).then(({ data }) => {
                        return data;
                    });
                }
            })
            .catch((err) => {
                if (err.message?.startsWith('Network Error')) {
                    this.root.msalStore.setApiOfflineState(true);
                } else {
                    return undefined;
                }
            });
    }
}
