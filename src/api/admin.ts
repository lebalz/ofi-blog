import api from './base';
import { AxiosPromise, CancelTokenSource } from 'axios';
import { User } from './user';
import { Document } from './document';
import TimedTopic from '../models/TimedTopic';

export function users(): AxiosPromise<User[]> {
    return api.get('admin/users');
}

export function getDocument<T>(uid: number, webKey: string, cancelToken: CancelTokenSource): AxiosPromise<Document<T>> {
    return api.get(
        `admin/document/${uid}/${webKey}`,
        { cancelToken: cancelToken.token }
    );
}

export function getTopicAsAdmin(uid: number, webKey: string, cancelToken: CancelTokenSource): AxiosPromise<TimedTopic> {
    return api.get(
        `admin/timed_topics/${uid}/${webKey}`
    )
}