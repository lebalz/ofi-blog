import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useStore } from '../../stores/hooks';
import styles from './styles.module.scss';
import { ORDER_COLUMNS, ORDER_NAME_MAP } from '../../stores/TimedTopicStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const OrderControl = observer(() => {
    const store = useStore('timedTopicStore');
    return (
        <div className={clsx(styles.orderControl)}>
            <span
                className={clsx('badge', 'badge--primary', styles.orderBadge)}
                onClick={() => store.toggleSortOrder()}
            >
                <FontAwesomeIcon className={styles.faIcon} icon={store.sortOrder === 'asc' ?  faArrowUp : faArrowDown} />
            </span>
            <div className={clsx(styles.orderBadge, 'dropdown', 'dropdown--hoverable')}>
                <button className={clsx('badge', 'badge--primary')}>{ORDER_NAME_MAP[store.orderBy]}</button>
                <ul className="dropdown__menu">
                    {ORDER_COLUMNS.map((col, idx) => (
                        <li key={idx} onClick={() => store.setOrderColumn(col)}>
                            <div
                                className={clsx(
                                    styles.colBadge,
                                    'badge',
                                    'badge--secondary',
                                    'dropdown__link'
                                )}
                            >
                                {ORDER_NAME_MAP[col]}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

export default OrderControl;
