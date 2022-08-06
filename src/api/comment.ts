import api from './base';
import { AxiosPromise, CancelTokenSource } from 'axios';

export interface CommentData {
    comment: string;
    open: boolean;
    color?: 'red' | 'orange' | 'green' | 'blue' | 'yellow';
}

export type LocatorType = 'paragraph' | 'table' | 'heading' | 'figure';
export interface Locator {
    type: LocatorType;
    nr: number;
}

export interface CommentPayload {
    page_key: string;
    data: CommentData;
    locator: Locator;
    related_to?: number;
}

export interface Comment extends CommentPayload {
    user_id: number;
    id: number;
    updated_at: string;
    created_at: string;
}
export function getComments(pageKey: string, cancelToken: CancelTokenSource): AxiosPromise<Comment[]> {
    return api.get(`comment/${pageKey}`, { cancelToken: cancelToken.token });
}

export function postComment(
    pageKey: string,
    data: CommentData,
    locator: Locator,
    related_to: number | undefined,
    cancelToken: CancelTokenSource
): AxiosPromise<Comment> {
    return api.post(
        'comment',
        {
            page_key: pageKey,
            data: data,
            locator: locator,
            related_to: related_to
        },
        { cancelToken: cancelToken.token }
    );
}

export function putComment(
    id: number,
    data: CommentData,
    locator: Locator | undefined,
    cancelToken: CancelTokenSource
): AxiosPromise<{ updated_at: string; state: string }> {
    return api.put(
        `comment/${id}`,
        {
            data: data,
            locator: locator
        },
        { cancelToken: cancelToken.token }
    );
}

export function deleteComment(id: number, cancelToken: CancelTokenSource) {
    return api.delete(`comment/${id}`, { cancelToken: cancelToken.token });
}
