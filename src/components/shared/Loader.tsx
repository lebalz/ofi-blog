import * as React from 'react';
import clsx from 'clsx';
import styles from './Loader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';


interface Props {
    caption?: string;
    overlay?: boolean; 
}
const Loader = (props: Props) => {
    return (
        <div className={clsx(styles.loader, props.overlay && styles.overlay)}>
            <FontAwesomeIcon icon={faCircleNotch} spin />
            <span className={clsx('badge', styles.badge)}>{props.caption || 'Laden...'}</span>
        </div>
    )
};

export default Loader;