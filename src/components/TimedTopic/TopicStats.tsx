import _, { orderBy, sortBy } from 'lodash';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { formatTime } from '../../helpers/time';
import TimedTopic from '../../models/TimedTopic';
import Table, { iRow } from '../Table';

interface Props {
    topic: TimedTopic;
}
const TopicStats = observer((props: Props) => {
    const rows: iRow[] = [];
    const {topic} = props;
    for (const [date, time] of Object.entries(topic.totalTimeGroupedByDate)) {
        rows.push({cells: [date, formatTime(time)]});
    }

    return (
        <Table 
            header={['Tag', 'Zeit']}
            rows={sortBy(rows, (item) => item.cells[0])}
            compact
            size="small"
            alignments={['left', 'right']}
            collapsing
        />
    );
})

export default TopicStats;