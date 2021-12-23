import api from './base';
import { AxiosPromise, CancelTokenSource } from 'axios';
import { User, UserProps } from './user';
import { Document } from './document';
import TimedTopic from '../models/TimedTopic';
import { Authorization, SolutionPolicy } from './solution_policy';

export function users(): AxiosPromise<User[]> {
    return api.get('admin/users');
}

export function setUserProps(uid: number, data: Partial<UserProps>, cancelToken: CancelTokenSource): AxiosPromise<User> {
    return api.put(
        `admin/users/${uid}`,
        {
            data: data
        },
        { cancelToken: cancelToken.token }
    );
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

export function getSolutionAuthorizationAsAdmin(uid: number, webKey: string, cancelToken: CancelTokenSource): AxiosPromise<Authorization> {
    return api.get(
        `admin/policy/solution/${uid}/${webKey}`
    )
}


export function solutionPolicies(): AxiosPromise<SolutionPolicy[]> {
    return api.get('admin/policy/solution');
}