const moment = require("moment");

const DAYS = {
    mo: 'Moday',
    di: 'Tuesday',
    mi: 'Wednesday',
    do: 'Thursday',
    fr: 'Friday',
    sa: 'Saturday',
    so: 'Sunday'
}
// 30.6.2022 Notenschluss
const EVENTS = {
    ['10.02.2022']: { desc: 'Filmanlass GYM2 / SchiLw', type: 'holiday' },
    [7]: {desc: 'Sportwoche', type: 'holiday'},
    [14]: {desc: 'Sonderwoche', type: 'holiday'},
    [15]: {desc: 'Frühlingsferien', type: 'holiday'},
    [16]: {desc: 'Frühlingsferien', type: 'holiday'},
    [24]: {desc: 'Präventionswoche', type: 'holiday'},
}
const CLASS_EVENTS = {
    ['24K']: {
        ['02.03.2022']: { desc: 'Besuch Bundeshaus', type: 'holiday' },
    },
    ['24L']: {
        [23]: { desc: 'Pfingsten', type: 'holiday'}
    },
    ['24i']: {
        [23]: { desc: 'Pfingsten', type: 'holiday'}
    },
    ['24f']: {
    },
    ['24o']: {
        [23]: { desc: 'Pfingsten', type: 'holiday'}
    },
    ['25h']: {
        [21]: { desc: 'Auffahrt', type: 'holiday'},
        ['01.07.2022']: { desc: 'Filmanlass', type: 'event'}
    }
}

SCHOOL_EVENTS = {
    [26]: {desc: 'Notenschluss', type: 'event', date: '30.06.2022'}
}

const CLASS_DAY = {
    ['24i']: 'mo',
    ['24f']: 'di',
    ['24o']: 'mo',
    ['24L']: 'mo',
    ['24K']: 'mi',
    ['25h']: 'fr',
}
const KLASSE = '25h'

const cells = [];
Array(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27).forEach((weekNr) => {
    const date = moment().day(DAYS[CLASS_DAY[KLASSE]]).year(2022).week(weekNr + 1).format('DD.MM.YYYY');
    if (EVENTS[date]) {
        cells.push({ cells: [date, EVENTS[date].desc, ''], type: EVENTS[date].type });
    } else if (EVENTS[weekNr]) {
        cells.push({ cells: [date, EVENTS[weekNr].desc, ''], type: EVENTS[weekNr].type });
    } else if (CLASS_EVENTS[KLASSE][date]) {
        cells.push({ cells: [date, CLASS_EVENTS[KLASSE][date].desc, ''], type: CLASS_EVENTS[KLASSE][date].type });
    } else if (CLASS_EVENTS[KLASSE][weekNr]) {
        cells.push({ cells: [date, CLASS_EVENTS[KLASSE][weekNr].desc, ''], type: CLASS_EVENTS[KLASSE][weekNr].type });
    } else {
        cells.push({ cells: [date, '', '']});
    }
    if (SCHOOL_EVENTS[weekNr]) {
        cells.push({ cells: [SCHOOL_EVENTS[weekNr].date, SCHOOL_EVENTS[weekNr].desc, ''], type: SCHOOL_EVENTS[weekNr].type});
    }
})

console.log(cells)