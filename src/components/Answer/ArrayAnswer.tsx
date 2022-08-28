import * as React from 'react';
import styles from './Answer.module.scss';
import { observer } from 'mobx-react-lite';
import { ArrayProps, Types } from '.';
import Option from './Option';
import { useStore } from '../../stores/hooks';
import { default as ArrayAnswerModel } from '../../models/Answer/Array';
import Loader from '../shared/Loader';
import clsx from 'clsx';

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

    if (!doc.loaded) {
        return <Loader />;
    }
    return (
        <div className={styles.answer}>
            {props.label && <label>{props.label}</label>}
            <div className={styles.arrayAnswer}>
            {doc.data.value.map((c, i) => {
                if (props.select) {
                    return (
                        <div className={clsx('dropdown')} key={i}>
                            <div
                                className={clsx(styles.option, !c && styles.empty, getClassName(c))}
                                data-toggle="dropdown"
                                onClick={(e) => {
                                    const toggle = e.currentTarget;
                                    const dropdown = toggle.parentElement;
                                    function dismissDropdown() {
                                      console.log('remove')
                                        toggle.classList.remove('button--active');
                                        dropdown.classList.remove('dropdown--show');
                                        document.removeEventListener('click', dismissDropdown);
                                    }
                                    if (!dropdown.classList.contains('dropdown--show')) {
                                      toggle.classList.add('button--active');
                                      dropdown.classList.add('dropdown--show');
                                      setTimeout(() => {
                                          document.addEventListener('click', dismissDropdown);
                                      }, 0);
                                    }
                                }}
                            >
                                {c.replace(OPTIONS_REGEX, '')}
                            </div>
                            <div className={clsx(styles.dropdownMenu, 'dropdown__menu')}>
                                {props.select.map((sval, idx) => {
                                  const klass = getClassName(sval);
                                  const label = sval.replace(OPTIONS_REGEX, '');
                                    return (
                                        <div
                                          key={idx} 
                                          onClick={() => onChange(sval, i)}
                                          className={clsx(styles.option, klass, !label && styles.empty, sval === c && styles.active)}
                                        >
                                            <span>{label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                }
                return (
                    <input
                        key={i}
                        type="text"
                        onChange={(e) => onChange(e.target.value, i)}
                        value={c}
                        disabled={!doc.loaded || doc.readonly}
                    />
                );
            })}
            </div>
        </div>
    );
});

export default ArrayAnswer;
