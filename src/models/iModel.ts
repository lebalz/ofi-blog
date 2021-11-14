import ArrayAnswer, { ArrayDoc } from './Answer/Array';
import StringAnswer, { StringDoc } from './Answer/String';
import Text, { TextDoc } from './Answer/Text';
import SaveService from './saveService';
import Script, { PyDoc } from './Script';
import TimedExercises, { TimedDoc } from './TimedExercises';

export type DocType = 'code' | 'string' | 'text' | 'array' | 'tdoc';

// const BlaMap: {[key in DocType]: Function} = {
//     'array': ArrayAnswer,
//     'string': StringAnswer,
//     'code': Script,
//     'text': Text,
//     'tdoc': TimedExercises,
// }
export interface BaseModel {
    webKey: string;
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;

    loaded: boolean;

    readonly: boolean;
    canUpdate: boolean;
    legacyCleanup?: () => void;
    saveService: SaveService;
}

export interface ArrayModel extends BaseModel {
    type: 'array';
    data: ArrayDoc;
    legacyData?: ArrayDoc;
    size: number;
    setData: (data: ArrayDoc) => void;
}
export interface StringModel extends BaseModel {
    type: 'string';
    data: StringDoc;
    legacyData?: StringDoc;
    setData: (data: StringDoc) => void;
}
export interface TextModel extends BaseModel {
    type: 'text';
    data: TextDoc;
    legacyData?: TextDoc;
    setData: (data: TextDoc) => void;
}
export interface TimedModel extends BaseModel {
    type: 'tdoc';
    data: TimedDoc;
    legacyData?: TimedDoc;
    setData: (data: TimedDoc) => void;
}
export interface CodeModel extends BaseModel {
    type: 'code';
    data: PyDoc;
    legacyData?: PyDoc;
    setData: (data: PyDoc) => void;
}


export type ModelTypes = ArrayDoc | PyDoc | StringDoc | TextDoc | TimedDoc;
export type IModel = CodeModel | TimedModel | TextModel | StringModel | ArrayModel;
export type Model = Script | Text | ArrayAnswer | StringAnswer | TimedExercises;

function TypedDoc(type: 'array', data: Object): ArrayDoc;
function TypedDoc(type: 'code', data: Object): PyDoc;
function TypedDoc(type: 'string', data: Object): StringDoc;
function TypedDoc(type: 'text', data: Object): TextDoc;
function TypedDoc(type: 'tdoc', data: Object): TimedDoc;
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
        case 'tdoc':
            return data as any as TimedDoc;
    }
}

export {TypedDoc}