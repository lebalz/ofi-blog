import { makeObservable, observable } from "mobx";
import { Authorization } from "../api/solution_policy";

export default class SolutionAuthorization {
    readonly webKey: string;
    readonly show: boolean;
    readonly userId: number;
    @observable
    loaded: boolean = false;
    constructor(auth: Authorization) {
        this.webKey = auth.web_key;
        this.show = auth.show;
        this.userId = auth.user_id;
        makeObservable(this);
    }
}