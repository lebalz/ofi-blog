const moment = require("moment");
const fs = require('fs');
const path = require('path');


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
    [9]: {desc: 'Videoabgabe', type: 'test', date: '06.03.2022'},
    [24]: {desc: 'Projektabgabe', type: 'test', date: '22.06.2022'},
    [26]: {desc: 'Notenschluss', type: 'event', date: '30.06.2022'},
}

const CLASS_DAY = {
    ['24i']: 'mo',
    ['24f']: 'di',
    ['24o']: 'mo',
    ['24L']: 'mo',
    ['24K']: 'mi',
    ['25h']: 'fr',
}
const YEAR = 2022
const SEMESTER = 'FS'


const SCHEDULE = [
    ["Computer","Logische Schaltungen 1"],
    ["Computer","Logische Schaltungen 2"],
    ["Computer","Video erstellen: Halbaddierer"],
    ["Computer","Video finalisieren&schneiden"],
    ["Computer","Rechnerarchitektur"],
    ["Computer","Rechnerarchitektur"],
    ["Computer","Betriebssysteme"],
    ["Bilder","Grafikformate"],
    ["Bilder","Kompression"],
    ["Bilder","Urheberrecht"],
    ["Projekt","🚀🚦🧨🪚⚙️🌡🤖"],
    ["Projekt","🚀🚦🧨🪚⚙️🌡🤖"],
    ["Projekt","🚀🚦🧨🪚⚙️🌡🤖"],
    ["Projekt","🚀🚦🧨🪚⚙️🌡🤖"],
    ["Projekt","🚀🚦🧨🪚⚙️🌡🤖"],
    ["Projekt","🚀🚦🧨🪚⚙️🌡🤖"],
    ["Projekt Austauschen",""],
    ["🚧",""]
]

Array('24L', '24o').forEach((klasse) =>{
    const cells = [];
    let subjectNr = 0
    Array(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27).forEach((weekNr) => {
        const date = moment().day(DAYS[CLASS_DAY[klasse]]).year(YEAR).week(weekNr + 1).format('DD.MM.YYYY');
        if (EVENTS[date]) {
            cells.push({ cells: [date, EVENTS[date].desc, ''], type: EVENTS[date].type });
        } else if (EVENTS[weekNr]) {
            cells.push({ cells: [date, EVENTS[weekNr].desc, ''], type: EVENTS[weekNr].type });
        } else if (CLASS_EVENTS[klasse][date]) {
            cells.push({ cells: [date, CLASS_EVENTS[klasse][date].desc, ''], type: CLASS_EVENTS[klasse][date].type });
        } else if (CLASS_EVENTS[klasse][weekNr]) {
            cells.push({ cells: [date, CLASS_EVENTS[klasse][weekNr].desc, ''], type: CLASS_EVENTS[klasse][weekNr].type });
        } else {
            cells.push({ cells: [date, ...SCHEDULE[subjectNr]]});
            subjectNr += 1;
        }
        if (SCHOOL_EVENTS[weekNr]) {
            cells.push({ cells: [SCHOOL_EVENTS[weekNr].date, SCHOOL_EVENTS[weekNr].desc, ''], type: SCHOOL_EVENTS[weekNr].type});
        }
    })
    
    let first = true;
    const prettyJson = JSON.stringify(cells, function(k,v){
        if(v instanceof Array && !first) {
            return JSON.stringify(v);
        }
        first = false;
        return v;
     },4).replace(/"\[/g, '[')
        .replace(/\]"/g, ']')
        .replace(/\\"/g, '"')
        .replace(/""/g, '""');
    
    fs.writeFileSync(`versioned_docs/version-${klasse}/${klasse}_${SEMESTER}${YEAR}.json`, prettyJson)
})