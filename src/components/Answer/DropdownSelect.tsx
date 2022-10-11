import * as React from 'react';
import styles from './Answer.module.scss';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';

export interface ItemProps {
    color?: string;
    className?: string;
    value: string;
    label?: string;
}

interface Props {
    onChange: (newVal: string) => void;
    value?: string;
    items: ItemProps[];
    disabled?: boolean;
    className?: string;
}

const DropdownSelect = observer((props: Props) => {
    const [selectedIdx, setSelectedIdx] = React.useState(props.value ? props.items.findIndex((i) => i.value === props.value) : 0);
    const current = props.items[selectedIdx];

    const onChange = (val: string, idx: number) => {
        setSelectedIdx(idx);
        props.onChange(val);
    }

    return (
        <div className={clsx('dropdown', styles.dropdown, props.className)}>
            <div
                className={clsx(styles.current, styles.option, !current.color && styles.empty, current.className, props.disabled && styles.disabled)}
                data-toggle="dropdown"
                onClick={(e) => {
                    if (props.disabled) {
                        return;
                    }
                    const toggle = e.currentTarget;
                    const dropdown = toggle.parentElement;
                    function dismissDropdown() {
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
                {current.label || current.value}
            </div>
            <div className={clsx(styles.dropdownMenu, 'dropdown__menu')}>
                {props.items.map((item, idx) => {
                    return (
                        <div
                            key={idx} 
                            onClick={() => onChange(item.value, idx)}
                            className={clsx(styles.option, item.className, !item.color && styles.empty, selectedIdx === idx && styles.active)}
                        >
                            <span>{item.label || item.value}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default DropdownSelect;
