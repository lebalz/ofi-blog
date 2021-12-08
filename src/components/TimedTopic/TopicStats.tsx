import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { WeekDay } from '../../helpers/time';
import { useStore } from '../../stores/hooks';
import TimeStats from './TimeStats';

interface Props {
    firstDayOfWeek?: WeekDay;
}

const TopicStats = observer((props: Props) => {
    const store = useStore('timedTopicStore');
    return <TimeStats {...store.topicStats} firstDayOfWeek={props.firstDayOfWeek} />;
});

export default TopicStats;
