import { AxiosPromise, CancelTokenSource } from "axios";
import api from "./base";
import { TimedExercise } from "./timed_exercise";

export interface TimedTopicData {
}


export interface TimedTopic {
    id: number;
    user_id: number;
    web_key: string;
    data: TimedTopicData;
    exercises?: TimedExercise[];
    updated_at: string;
    created_at: string;
}


export function getTopic(webKey: string, cancelToken: CancelTokenSource): AxiosPromise<TimedTopic> {
    return api.get(`timed_topics/${webKey}`, { cancelToken: cancelToken.token });
}

export function postTopic(
    webKey: string,
    data: TimedTopicData,
    cancelToken: CancelTokenSource
): AxiosPromise<TimedTopic> {
    return api.post(
        'timed_topics',
        {
            web_key: webKey,
            data: data
        },
        { cancelToken: cancelToken.token }
    );
}

export function putTopic(
    webKey: string,
    data: TimedTopicData,
    cancelToken: CancelTokenSource
): AxiosPromise<{ updated_at: string; state: string }> {
    return api.put(
        `timed_topics/${webKey}`,
        {
            data: data,
        },
        { cancelToken: cancelToken.token }
    );
}
