import api from './base';
import { AxiosPromise, CancelTokenSource } from 'axios';
import { User, UserProps } from './user';
import { Document } from './document';
import TimedTopic from '../models/TimedTopic';
import { Authorization, SolutionPolicy, PolicyModifier } from './solution_policy';
import { Comment } from './comment';

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

export function getDocument<T>(uid: number, webKey: string, versions: boolean, cancelToken: CancelTokenSource): AxiosPromise<Document<T>> {
    return api.get(
        `admin/document/${uid}/${webKey}&versions=${versions}`,
        { cancelToken: cancelToken.token }
    );
}

export function getComments(uid: number, pageKey: string, cancelToken: CancelTokenSource): AxiosPromise<Comment[]> {
    return api.get(
        `admin/comments/${uid}/${pageKey}`,
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

export function updateSolutionPolicy(webKey: string, data: PolicyModifier, cancelToken: CancelTokenSource): AxiosPromise<SolutionPolicy> {
    return api.put(
        `admin/policy/solution/${webKey}`,
        {
            data: data
        },
        { cancelToken: cancelToken.token }
    );
}