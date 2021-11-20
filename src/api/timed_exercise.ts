import { AxiosPromise, CancelTokenSource } from "axios";
import api from "./base";
import { TimeSpan } from "./time_span";

export type ExerciseLabel = 'solved' | 'important' | 'question' | 'fail';

export interface Data {
    labels: ExerciseLabel[];
    text?: React.ReactNode;
}

export interface  TimedExerciseData {
    data: Data;
    name: string;
}

export interface TimedExercise extends TimedExerciseData {
    id: number;
    time_spans?: TimeSpan[];
    updated_at: string;
    created_at: string;
}

export function postExercise(
    topic_id: number,
    data: TimedExerciseData,
    cancelToken: CancelTokenSource
): AxiosPromise<TimedExercise> {
    return api.post(
        `timed_topics/${topic_id}`,
        {
            data: data
        },
        { cancelToken: cancelToken.token }
    );
}

export function putExercise(
    topicId: number,
    exerciseId: number,
    data: TimedExerciseData,
    cancelToken: CancelTokenSource
): AxiosPromise<{ updated_at: string }> {
    return api.put(
        `timed_topics/${topicId}/${exerciseId}`,
        data,
        { cancelToken: cancelToken.token }
    );
}

export function deleteExercise(topicId: number, exerciseId: number, cancelToken: CancelTokenSource) {
    return api.delete(`timed_topics/${topicId}/${exerciseId}`, { cancelToken: cancelToken.token });
}