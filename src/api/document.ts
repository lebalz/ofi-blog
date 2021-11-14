import api from './base';
import { AxiosPromise, CancelTokenSource } from 'axios';
import { DocType } from '../models/iModel';

export interface Document<T> {
    id: number;
    user_id: number;
    web_key: string;
    type: DocType;
    data: T;
    created_at: string;
    updated_at: string;
}

export function getDocument<T>(webKey: string, cancelToken: CancelTokenSource): AxiosPromise<Document<T>> {
    return api.get(`document/${webKey}`, { cancelToken: cancelToken.token });
}

export function postDocument<T>(
    webKey: string,
    type: DocType,
    data: T,
    cancelToken: CancelTokenSource
): AxiosPromise<Document<T>> {
    return api.post(
        'document',
        {
            web_key: webKey,
            data: data,
            type: type,
        },
        { cancelToken: cancelToken.token }
    );
}

export function putDocument<T extends Object = Object>(
    webKey: string,
    data: T,
    cancelToken: CancelTokenSource
): AxiosPromise<{ updated_at: string; state: string }> {
    return api.put(
        `document/${webKey}`,
        {
            data: data,
        },
        { cancelToken: cancelToken.token }
    );
}

export function deleteDocument(webKey: string, cancelToken: CancelTokenSource) {
    return api.delete(`document/${webKey}`, { cancelToken: cancelToken.token });
}
