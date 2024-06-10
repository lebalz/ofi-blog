import * as React from 'react';
import styles from './Answer.module.scss';
import { observer } from 'mobx-react-lite';
import { ArrayProps } from '.';
import { useStore } from '../../stores/hooks';
import { default as ArrayAnswerModel } from '../../models/Answer/Array';
import Loader from '../shared/Loader';
import clsx from 'clsx';
import DropdownSelect from './DropdownSelect';

const OPTIONS_REGEX = /--(?<klass>\w+)$/;

const getDataAttr = (value: string) => {
    if (OPTIONS_REGEX.test(value)) {
        return value.match(OPTIONS_REGEX).groups!.klass;
    }
    return undefined;
};

const getClassName = (value: string) => {
    return styles[getDataAttr(value)];
};

const ArrayAnswer = observer((props: ArrayProps) => {
    const store = useStore('documentStore');
    const doc = store.find<ArrayAnswerModel>(props.webKey);

    const onChange = (newVal: string, idx: number = 0) => {
        const newArr = [...doc.data.value.slice(0, idx), newVal, ...doc.data.value.slice(idx + 1)];
        doc.setData({ ...doc.data, value: newArr });
    };

    if (!doc.isLoaded) {
        return <Loader />;
    }
    return (
        <div className={styles.answer}>
            {props.label && <label>{props.label}</label>}
            <div className={styles.arrayAnswer}>
                {doc.data.value.map((c, i) => {
                    if (props.select) {
                        return (
                            <DropdownSelect
                                value={c}
                                onChange={(value) => onChange(value, i)}
                                items={props.select.map((sval, idx) => {
                                    const label = sval.replace(OPTIONS_REGEX, '');
                                    return {
                                        value: sval,
                                        label: label || sval,
                                        className: getClassName(sval)
                                    };
                                })}
                            />
                        );
                    }
                    return (
                        <input
                            key={i}
                            type="text"
                            onChange={(e) => onChange(e.target.value, i)}
                            value={c}
                            disabled={!doc.isLoaded || doc.readonly}
                        />
                    );
                })}
            </div>
        </div>
    );
});

export default ArrayAnswer;
