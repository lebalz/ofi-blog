import clsx from 'clsx';
import _, { sortBy } from 'lodash';
import styles from './styles.module.scss';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { formatTime } from '../../helpers/time';
import Table, { iRow } from '../Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
    totalTimeGroupedByDate: { [key: string]: number };
    totalTime: number;
}
const TimeStats = observer((props: Props) => {
    const [showStats, setShowStats] = React.useState(false);
    const rows: iRow[] = [];
    const { totalTimeGroupedByDate, totalTime } = props;
    for (const [date, time] of Object.entries(totalTimeGroupedByDate)) {
        rows.push({ cells: [date, formatTime(time)] });
    }

    return (
        <div className={clsx(styles.topicStats)}>
            <FontAwesomeIcon
                className={clsx(styles.faButton)}
                color={showStats ? 'var(--ifm-color-primary)' : 'gray'}
                icon={faInfoCircle}
                onClick={() => setShowStats(!showStats)}
            />
            {showStats && (
                <div className={clsx('card')}>
                    <div className={clsx('card__header')}>
                        <h3>Zusammenfassung</h3>
                    </div>
                    <div
                        className={clsx('card__body')}
                        style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}
                    >
                        <div>
                            Zeit Total:{' '}
                            <span className={clsx('badge', 'badge--success')}>{formatTime(totalTime)}</span>
                        </div>
                        <Table
                            header={['Tag', 'Zeit']}
                            rows={sortBy(rows, (item) => item.cells[0])}
                            compact
                            size="small"
                            alignments={['left', 'right']}
                            collapsing
                        />
                    </div>
                </div>
            )}
        </div>
    );
});

export default TimeStats;
