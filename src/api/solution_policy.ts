import { AxiosPromise, CancelTokenSource } from "axios";
import api from "./base";

export interface SolutionPolicyData {
    web_key: string;
    document_url: string;
}

export interface SolutionPolicy extends SolutionPolicyData {
    authorized_classes: string[];
    authoirzed_users: string[];
    authoirzed_groups: string[];
}

export interface Authorization {
    show: boolean;
    web_key: string;
    user_id: number;
}

export function authorized(webKey: string, cancelToken: CancelTokenSource): AxiosPromise<Authorization> {
    return api.get(`policy/solutions/${webKey}`, { cancelToken: cancelToken.token });
}

export function postSolutionPolicy(
    data: SolutionPolicyData,
    cancelToken: CancelTokenSource
): AxiosPromise<SolutionPolicy> {
    return api.post(
        'policy/solutions',
        data,
        { cancelToken: cancelToken.token }
    );
}