import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useStore } from '../../stores/hooks';
import TimeStats from './TimeStats';

const TopicStats = observer(() => {
    const store = useStore('timedTopicStore');
    return <TimeStats {...store.topicStats} />;
});

export default TopicStats;
