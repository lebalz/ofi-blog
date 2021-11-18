import clsx from "clsx";
import styles from './styles.module.scss';
import { observer } from "mobx-react-lite";
import * as React from "react";
import {default as TimeSpanModel} from "../../models/TimedTopic/TimeSpan";
import { formatTime, slimTime } from "../../helpers/time";


interface Props {
    timeSpan: TimeSpanModel;
}

const TimeSpan = observer((props: Props) => {
    const ts = props.timeSpan;
    if (ts.exercise.timeSpans.length === 1) {
        return null;
    }
    let {timeSpentBefore, duration, timeSpentAfter} = ts;
    if (ts.exercise.isRunning) {
        const toNextMinute = 60000 - (ts.exercise.duration % 60000);
        timeSpentAfter += toNextMinute;
        if (ts.isRunning) {
            duration += toNextMinute;
            timeSpentAfter = 0;
        }
    }
    if (ts)
    return (
        <div className={clsx(styles.timeSpan)}>
            <div className={clsx(styles.spacer)} style={{flexGrow: timeSpentBefore}}></div>
            <div className={clsx(styles.time, ts.isRunning && styles.active)} style={{flexGrow: duration}} >
                <div className={clsx(styles.timeText)}>{slimTime(ts.duration)}</div>
            </div>
            <div className={clsx(styles.spacer)} style={{flexGrow: timeSpentAfter}} ></div>
        </div>
    )
});

export default TimeSpan;