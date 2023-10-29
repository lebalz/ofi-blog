import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useStore } from '../../stores/hooks';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
    email: string;
    children?: React.ReactNode;
}
const OnlyFor = observer((props: Props) => {
    const userStore = useStore('userStore');
    const { current } = userStore;

    if (!current) {
        return null;
    }
    const emailMatches = current.email.toLowerCase() === props.email.toLowerCase();
    if (!emailMatches && !current.admin) {
        return null;
    }

    return (
        <div>
            {!emailMatches && <div className={clsx(styles.small, 'alert', 'alert--blue')} role='alert'>Only for {props.email}</div>}
            {props.children}
        </div>
    );
});

export default OnlyFor;
