import clsx from 'clsx';
import _, { orderBy, sortBy } from 'lodash';
import styles from './styles.module.scss';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { formatDate, formatTime, WeekDay, WEEK_DAYS } from '../../helpers/time';
import Table, { iRow } from '../Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { DayStats } from '../../models/TimedTopic';
import moment from 'moment';

interface Props {
    totalTimeGroupedByDate: { [key: string]: DayStats };
    totalTime: number;
    firstDayOfWeek?: WeekDay;
}

const TimeStats = observer((props: Props) => {
    const [showStats, setShowStats] = React.useState(false);
    const rows: iRow[] = [];
    const { totalTimeGroupedByDate, totalTime, firstDayOfWeek } = props;
    const shift = -1 * WEEK_DAYS.indexOf(firstDayOfWeek || 'So');
    orderBy(Object.values(totalTimeGroupedByDate), ['date'], ['asc']).forEach((item) => {
        const firstDayOfYear = moment(item.date).startOf('year').day();
        const weekNr = Math.floor((item.day - 1 + firstDayOfYear + shift) / 7);
        rows.push({ cells: [item.fDate, formatTime(item.total)], className: clsx(weekNr % 2 === 0 ? styles.even : styles.odd) });
    })

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
                            rows={rows}
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
