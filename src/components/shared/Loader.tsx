import * as React from 'react';
import clsx from 'clsx';
import styles from './Loader.module.scss';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';

const Loader = observer(() => {
    return (
        <div className={clsx(styles.loader)}>
            <FontAwesomeIcon icon={faCircleNotch} spin />
            <span className={clsx('badge', styles.badge)}>Laden...</span>
        </div>
    )
});

export default Loader;