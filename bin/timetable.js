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
    [40]: {desc: 'Sonderwoche', type: 'holiday'},
    [41]: {desc: 'Herbstferien', type: 'holiday'},
    [42]: {desc: 'Herbstferien', type: 'holiday'},
    [52]: {desc: 'Winterferien', type: 'holiday'},
    [1]: {desc: 'Winterferien', type: 'holiday'},
    [7]: {desc: 'Sportwoche', type: 'holiday'},
    [17]: {desc: 'Sonderwoche', type: 'holiday'},
    [18]: {desc: 'Frühlingsferien', type: 'holiday'},
    [19]: {desc: 'Frühlingsferien', type: 'holiday'},

}
const CLASS_EVENTS = {
    ['25h']: {

    },
    ['24ef']: {
        [4]: {desc: 'Notenchluss', type: 'event', date: '24.01.2023'},
    },
    ['26P']: {
        [45]: {desc: 'SET', type: 'holiday', date: '8.11.2023'},
        [49]: {desc: 'Kantonaler Fachschaftstag', type: 'holiday', date: '05.12.2023'},
    },
    ['26e']: {
        [49]: {desc: 'Kantonaler Fachschaftstag', type: 'holiday', date: '05.12.2023'},
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
    [4]: { desc: 'Notenchluss', type: 'event', date: '25.01.2024' },
    [5]: { desc: 'Semesterende', type: 'event', date: '04.02.2024' },
    [6]: { desc: 'Start Semester 2', type: 'event', date: '05.02.2024' },
}

const CLASS_DAY = {
    ['24ef']: 'fr',
    ['26P']: 'mi',
    ['26e']: 'di',
}
const YEAR = 2023
const SEMESTER = 'HS'

const SCHEDULE_GYM1_HS = [
    ["Einstieg","ICT Einstieg"],
    ["ICT","BYOD Basics"],
    ["ICT","BYOD Basics"],
    ["ICT","Office: Layout und Gliederung"],
    ["ICT","Office: Layout und Gliederung"],
    ["ICT","Office: Layout und Gliederung"],
    ["ICT","Office: Layout und Gliederung"],
    ["ICT","Kurztest Office"],
    ["Informatik Biber","Wettbewerb"],
    ["Daten","Office: Tabellenkalkulation"],
    ["Daten","Office: Tabellenkalkulation"],
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
    ["Programmieren 1", "Unterprogramme und Fehler"],
    ["Programmieren 1", "Parameter"],
    ["Programmieren 1", "Variablen, Eingabe & Ausgabe"],
    ["Programmieren 1", "Variablen, Eingabe & Ausgabe"],
    ["Programmieren 1", "Verzweigungen"],
    ["Programmieren 1", "Mini Projekt"],
    ["Programmieren 1", "Mini Projekt"],
]

const SCHEDULE_GYM2_HS_DB = [
    ["Daten und Datenbanken", "Excel"],
    ["Daten und Datenbanken", "Excel"],
    ["Daten und Datenbanken", "Excel und SQL"],
    ["Daten und Datenbanken", "SQL"],
    ["Daten und Datenbanken", "SQL"],
    ["Daten und Datenbanken", "SQL"],
    ["Daten und Datenbanken", "Wiederholung"],
    ["Daten und Datenbanken", "Test"],
    ["Netzwerke", "Protokolle, Schichtenmodell"],
    ["Netzwerke", "Routing, IP-Adresse"],
    ["Netzwerke", "TCP/IP"],
    ["Netzwerke", "Routing, DNS"],
    ["Netzwerke", "Routing, DNS"],
    ["Netzwerke", "Wiederholung"],
    ["Netzwerke", "Test"],
    ["Kryptologie", "Antike Verschlüsselung"],
    ["Kryptologie", "Symmetrische Verschlüsselung"],
    ["Kryptologie", "Hashfunktion"],
    ["Kryptologie", "Asymmetrische Verschlüsselung"],
    ["Kryptologie", "Digitale Signaturen"],
    ["Kryptologie", "Kryptologie im Alltag"],
    ["Kryptologie", "Test"],
    ["Programmieren 2", "Datenstrukturen und Listen"],
    ["Programmieren 2", "Algorithmen und Sortieren"],
    ["Programmieren 2", "Robotik"],
    ["Programmieren 2", "Robotik"],
    ["Programmieren 2", "Robotik"],
    ["Programmieren 2", "Test Abgabe Robotik-Projekt"],
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
    ["Kryptologie","Antike Verschlüsselungsverfahren + Informatik Biber"],
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

const SCHEDULE = SCHEDULE_GYM2_HS_DB;
// const SCHEDULE = prepareHK(SCHEDULE_GYM1_PRAKTIKUM, ['B', 'A']);

['26P'].forEach((klasse) =>{
    const cells = [];
    let subjectNr = 0
    const klass = klasse.split('-')[0];
    const colSize = SCHEDULE[0].length + 1;
    Array(34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19).forEach((weekNr) => {
        const date = moment().year(YEAR + (weekNr < 30 ? 1 : 0)).week(weekNr).day(DAYS[CLASS_DAY[klasse]]).format('DD.MM.YYYY');
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
    console.log(`Writing ${klasse}_${SEMESTER}${YEAR}.json`)
    console.log(prettyJson)
    fs.writeFileSync(`versioned_docs/version-${klass}/${klasse}_${SEMESTER}${YEAR}.json`, prettyJson, 'utf-8');
    // fs.writeFileSync(`./bin/${klasse}_${SEMESTER}${YEAR}.json`, prettyJson, 'utf8');
})