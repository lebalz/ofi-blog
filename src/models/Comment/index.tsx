import { CommentData, Locator, LocatorType, putComment, Comment as CommentProps } from "@site/src/api/comment";
import { iTextData } from "@site/src/components/shared/QuillEditor_";
import { CommentStore } from "@site/src/stores/CommentStore";
import { rootStore } from "@site/src/stores/stores";
import { CancelTokenSource } from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import SaveService, { ApiModel } from "../SaveService";

const COLOR_MAPPING = {
    red: '#fa383e',
    orange: '#ffba00',
    green: '#00a400',
    yellow: '#fff700',
    blue: '#3578e5'
};

const save = (model: Comment, cancelToken: CancelTokenSource) => {
    return putComment(model.id, model.data, model.locator, cancelToken);
};

export default class Comment implements ApiModel, iTextData {
    private readonly store: CommentStore;
    id: number;
    userId: number;
    pageKey: string;

    @observable
    nr: number;

    @observable
    open: boolean;

    @observable
    color: 'red' | 'orange' | 'green' | 'blue' | 'yellow';

    @observable
    type: LocatorType;

    @observable
    createdAt: Date;

    @observable
    updatedAt: Date;

    @observable
    comment: string;

    @observable.ref
    pristine: CommentData;

    @observable.ref
    saveService: SaveService;

    @observable
    loaded: boolean = true;
    
    /** model specific props */
    @observable
    showMenu: boolean = false;

    @observable
    markDeleted: boolean = false;


    versionsCT: CancelTokenSource;

    constructor(comment: CommentProps) {
        this.store = rootStore.commentStore;
        this.comment = comment.data.comment;
        this.open = comment.data.open;
        this.color = comment.data.color || 'blue';
        this.pageKey = comment.page_key;
        this.nr = comment.locator.nr;
        this.type = comment.locator.type;
        this.id = comment.id;
        this.userId = comment.user_id;
        this.createdAt = new Date(comment.created_at);
        this.updatedAt = new Date(comment.updated_at);
        this.pristine = comment.data;
        makeObservable(this);
        /** order depends, initialize AFTER making this observable! */
        this.saveService = new SaveService(this, save);
    }

    @computed
    get displayNr(): number {
        const max = this.store.commentableNodes.get(this.pageKey).get(this.type);
        return this.nr < max ? this.nr : max;
    }

    @action
    setNr(nr: number) {
        const max = this.store.commentableNodes.get(this.pageKey).get(this.type);
        if (nr > 0 && nr < max) {
            this.nr = nr;
        }
    }

    @computed
    get text(): string {
        return this.comment;
    }

    @computed
    get cssColor(): string {
        return COLOR_MAPPING[this.color];
    }

    @action
    setShowMenu(show: boolean) {
        this.showMenu = show;
    }

    @action
    setText(text: string) {
        this.comment = text;
    }

    @action
    toggleOpen() {
        this.open = !this.open;
    }

    @computed
    get locator(): Locator {
        return {
            nr: this.nr,
            type: this.type
        }
    }

    @computed
    get canUpdate(): boolean {
        return this.loaded;
    }

    @computed
    get umami() {
        return {
            event: `update-document-${this.type}`,
            message: this.pageKey,
        };
    }

    @computed
    get data(): CommentData {
        return {
            comment: this.comment,
            open: this.open,
            color: this.color
        };
    }

    @computed
    get props(): CommentProps {
        return {
            id: this.id,
            user_id: this.userId,
            page_key: this.pageKey,
            locator: this.locator,
            data: this.data,
            created_at: this.createdAt.toISOString(),
            updated_at: this.updatedAt.toISOString(),
        };
    }

    @action
    delete() {
        this.store.remove(this);
    }
}
