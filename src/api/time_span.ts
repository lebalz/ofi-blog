import { AxiosPromise, CancelTokenSource } from "axios";
import api from "./base";

export interface TimeSpan {
    id: number;
    start: string;
    stop: string;
}


export function postTimeSpan(
    topicId: number,
    exerciseId: number,
    cancelToken: CancelTokenSource
): AxiosPromise<TimeSpan> {
    return api.post(
        `timed_topics/${topicId}/${exerciseId}`,
        { cancelToken: cancelToken.token }
    );
}

export function stopTimeSpan(
    topicId: number,
    exerciseId: number,
    tsId: number,
    cancelToken: CancelTokenSource
): AxiosPromise<TimeSpan> {
    return api.put(
        `timed_topics/${topicId}/${exerciseId}/${tsId}`,
        { cancelToken: cancelToken.token }
    );
}