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
    // ['10.02.2022']: { desc: 'Filmanlass GYM2 / SchiLw', type: 'holiday' },
    // [7]: {desc: 'Sportwoche', type: 'holiday'},
    [38]: {desc: 'Sonderwoche', type: 'holiday'},
    [39]: {desc: 'Herbstferien', type: 'holiday'},
    [40]: {desc: 'Herbstferien', type: 'holiday'},
    [41]: {desc: 'Herbstferien', type: 'holiday'},
    [52]: {desc: 'Winterferien', type: 'holiday'},
    [0]: {desc: 'Winterferien', type: 'holiday'}
}
const CLASS_EVENTS = {
    ['25h']: {

    },
    ['24ef']: {

    },
    ['26P']: {
        [49]: {desc: 'Kantonaler Fachschaftstag', type: 'holiday', date: '06.12.2022'},
    },
    ['26e']: {
        // [49]: {desc: 'Kantonaler Fachschaftstag', type: 'holiday', daxte: '06.12.2022'},
    },
    // ['24L']: {
    //     [23]: { desc: 'Pfingsten', type: 'holiday'}
    // },
    // ['24i']: {
    //     [23]: { desc: 'Pfingsten', type: 'holiday'}
    // },
    // ['24f']: {
    // },
    // ['24o']: {
    //     [23]: { desc: 'Pfingsten', type: 'holiday'}
    // },
}

SCHOOL_EVENTS = {
    // [9]: {desc: 'Videoabgabe', type: 'test', date: '06.03.2022'},
    // [46]: { desc: 'Notenschluss Zwischenzeugnis', type: 'event', date: '17.11.2022' },
    [4]: { desc: 'Notenschluss', type: 'event', date: '25.01.2023' },
    [5]: { desc: 'Semesterende', type: 'event', date: '03.02.2023' },
}

const CLASS_DAY = {
    ['24ef']: 'fr',
    ['25h']: 'mi',
    ['26P']: 'di',
    ['26P-HK']: 'di',
    ['26e']: 'di',
    ['26e-HK']: 'do',
}
const YEAR = 2022
const SEMESTER = 'HS'

const SCHEDULE_GYM1_HS = [
    ["Einstieg","ICT Einstieg"],
    ["ICT","BYOD Basics"],
    ["ICT","BYOD Basics"],
    ["ICT","Office: Layout und Gliederung"],
    ["ICT","Office: Layout und Gliederung"],
    ["ICT","Office: Layout und Gliederung"],
    ["ICT","Kurztest Office"],
    ["Daten","Office: Tabellenkalkulation"],
    ["Daten","Office: Tabellenkalkulation"],
    ["Daten","Office: Tabellenkalkulation"],
    ["Daten","Datenbanken"],
    ["Daten","Datenbanken"],
    ["Daten","Datenbanken"],
    ["Daten","Datenbanken"],
    ["Daten","Wiederholung"],
    ["Daten","Kurztest Daten"],
    ["Codes und Daten","Zeichencodierung"],
    ["Codes und Daten","Zahlensysteme"],
]
const SCHEDULE_EF_HS1 = [
    ["Programmieren", "Infrastruktur, Installation, Git, Markdown, Python Grundlagen"],
    ["Programmieren", "Datenstrukturen - Listen"],
    ["Programmieren", "Strings, Eingabe, Game-Loop"],
    ["Programmieren", "Funktionen, Referenzen"],
    ["Programmieren", "Arbeiten am NumTrip Game"],
]

const SCHEDULE_GYM1_PRAKTIKUM = [
    ["Programmieren 1", "Algorithmen & RoboZZle"],
    ["Programmieren 1", "Algorithmen & Einstieg Turtlegrafik"],
    ["Programmieren 1", "Wiederholte Ausführung"],
    ["Programmieren 1", "Unterprogramme"],
    ["Programmieren 1", "Parameter"],
    ["Programmieren 1", "Variablen, Eingabe & Ausgabe"],
    ["Programmieren 1", "Variablen, Eingabe & Ausgabe"],
    ["Programmieren 1", "Verzweigungen"],
    ["Programmieren 1", "Mini Projekt"],
    ["Programmieren 1", "Mini Projekt"],
]

/**
 * 
 * @param {string[][]} schedule 
 */
const prepareHK = (schedule, hk=['A', 'B']) => {
    const newSchedule = []
    schedule.forEach((data) => {
        hk.forEach((hk) => {
            newSchedule.push([hk, ...data])
        })
    })
    return newSchedule;
}

const SCHEDULE_GYM2_HS = [
    ["Netzwerke","Schichtenmodell, TCP/IP"],
    ["Netzwerke","Codierung, IP-Adresse"],
    ["Netzwerke","Routing & DNS"],
    ["Netzwerke","Protokolle, World Wide Web"],
    ["Netzwerke","Workshop"],
    ["Netzwerke","Wiederholung"],
    ["Netzwerke","Test"],
    ["Kryptologie","Antike Verschlüsselungsverfahren"],
    ["Kryptologie","Symmetrische Verschlüsselung"],
    ["Kryptologie","Asymmetrische Verschlüsselung"],
    ["Kryptologie","Hashfunktion"],
    ["Kryptologie","Digitale Signaturen"],
    ["Kryptologie","Kryptologie im Alltag"],
    ["Kryptologie","Test"],
    ["Kryptologie","Steganographie"],
    ["Programmieren 2","Listen & Game"],
    ["Programmieren 2","Game"],
    ["Programmieren 2","Game"],
    ["Programmieren 2","Game"]
]


const SCHEDULE_GYM2_FS = [
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

const SCHEDULE = SCHEDULE_EF_HS1;
// const SCHEDULE = prepareHK(SCHEDULE_GYM1_PRAKTIKUM, ['B', 'A']);

Array('24ef').forEach((klasse) =>{
    const cells = [];
    let subjectNr = 0
    const klass = klasse.split('-')[0];
    const colSize = SCHEDULE[0].length + 1;
    console.log(colSize)
    Array(33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 1, 2, 3, 4, 5).forEach((weekNr) => {
        const date = moment().day(DAYS[CLASS_DAY[klasse]]).year(YEAR + (weekNr < 30 ? 1 : 0)).week(weekNr + 1).format('DD.MM.YYYY');
        if (EVENTS[date]) {
            cells.push({ cells: [date, EVENTS[date].desc, ''], type: EVENTS[date].type });
        } else if (EVENTS[weekNr]) {
            cells.push({ cells: [date, EVENTS[weekNr].desc, ''], type: EVENTS[weekNr].type });
        } else if (CLASS_EVENTS[klass][date]) {
            cells.push({ cells: [date, CLASS_EVENTS[klass][date].desc, ''], type: CLASS_EVENTS[klass][date].type });
        } else if (CLASS_EVENTS[klass][weekNr]) {
            cells.push({ cells: [date, CLASS_EVENTS[klass][weekNr].desc, ''], type: CLASS_EVENTS[klass][weekNr].type });
        } else if (SCHEDULE[subjectNr]) {
            cells.push({ cells: [date, ...SCHEDULE[subjectNr]], type: SCHEDULE[subjectNr][1].toLowerCase().includes('test') ? 'test' : undefined});
            subjectNr += 1;
        }
        if (SCHOOL_EVENTS[weekNr]) {
            cells.push({ cells: [SCHOOL_EVENTS[weekNr].date, SCHOOL_EVENTS[weekNr].desc, ''], type: SCHOOL_EVENTS[weekNr].type});
        }
    })
    cells.forEach((row, idx) => {
        while (row.cells.length < colSize) {
            row.cells.push('')
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
    
    fs.writeFileSync(`versioned_docs/version-${klass}/${klasse}_${SEMESTER}${YEAR}.json`, prettyJson, 'utf-8');
    // fs.writeFileSync(`./bin/${klasse}_${SEMESTER}${YEAR}.json`, prettyJson, 'utf8');
})