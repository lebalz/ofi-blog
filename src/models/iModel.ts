import ArrayAnswer, { ArrayDoc } from './Answer/Array';
import StringAnswer, { StringDoc } from './Answer/String';
import Text, { TextDoc } from './Answer/Text';
import SaveService from './SaveService';
import Script, { PyDoc } from './Script';

export type DocType = 'code' | 'string' | 'text' | 'array';

export interface BaseModel {
    webKey: string;
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;

    loaded: boolean;

    readonly: boolean;
    canUpdate: boolean;
    saveService: SaveService;
}

export interface ArrayModel extends BaseModel {
    type: 'array';
    data: ArrayDoc;
    size: number;
    setData: (data: ArrayDoc) => void;
}
export interface StringModel extends BaseModel {
    type: 'string';
    data: StringDoc;
    setData: (data: StringDoc) => void;
}
export interface TextModel extends BaseModel {
    type: 'text';
    data: TextDoc;
    setData: (data: TextDoc) => void;
}
export interface CodeModel extends BaseModel {
    type: 'code';
    data: PyDoc;
    setData: (data: PyDoc) => void;
}

export interface CodeModel extends BaseModel {
    type: 'code';
    data: PyDoc;
    setData: (data: PyDoc) => void;
}


export type ModelTypes = ArrayDoc | PyDoc | StringDoc | TextDoc;
export type IModel = CodeModel | TextModel | StringModel | ArrayModel ;
export type Model = Script | Text | ArrayAnswer | StringAnswer;

function TypedDoc(type: 'array', data: Object): ArrayDoc;
function TypedDoc(type: 'code', data: Object): PyDoc;
function TypedDoc(type: 'string', data: Object): StringDoc;
function TypedDoc(type: 'text', data: Object): TextDoc;
function TypedDoc(type: DocType, data: Object) {
    switch (type) {
        case 'code':
            return data as any as PyDoc;
        case 'string':
            return data as any as StringDoc;
        case 'text':
            return data as any as TextDoc;
        case 'array':
            return data as any as ArrayDoc;
    }
}

export {TypedDoc}