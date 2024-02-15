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
    [7]: { desc: 'Sportwoche', type: 'holiday' },
    [13]: { desc: 'Sonderwoche', type: 'holiday' },
    [14]: { desc: 'Frühlingsferien', type: 'holiday' },
    [15]: { desc: 'Frühlingsferien', type: 'holiday' },
    [24]: { desc: 'Mündliche Maturwoche', type: 'holiday'},
    [28]: { desc: 'Sommerferien', type: 'holiday' },

}
const CLASS_EVENTS = {
    ['24ef']: {
    },
    ['26P']: {
        [6]: { desc: 'Concours: Math Sans Frontières', type: 'event', date: '07.02.2024' },
    },
    ['26e']: {
        [6]: { desc: 'SchiLw-Tag', type: 'holiday', details: 'Frei', date: '07.02.2024' }
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
    [19]: [
        { desc: 'Auffahrt', type: 'holiday', date: '09.05.2024' },
        { desc: 'Auffahrt', type: 'holiday', date: '10.05.2024' }
    ],
    [21]: { desc: 'Pfingstmontag', type: 'holiday', date: '20.05.2024' },
    [26]: { desc: 'Notenschluss', type: 'event', date: '27.06.2024' },
    [25]: { desc: 'Abgabe Projekt', details: 'Bis 22:00 Uhr', type: 'test', date: '19.06.2024' },
}

const CLASS_DAY = {
    ['24ef']: 'fr',
    ['26P']: 'di',
    ['26e']: 'mi',
}
const YEAR = 2024
const SEMESTER = 'FS'

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

const SCHEDULE_EF_HS2 = [
    ["Datenbanken", "Relationale DB's, Einführund SQL"],
    ["Datenbanken", "Relationale DB's, Datenmodellierung, ER-Diagramme, SQL Abfragen"],
    ["Datenbanken", "Relationale DB's, Tabellen erstellen, SQL CREATE, INSERT, UPDATE, DELETE"],
    ["Datenbanken", "Relationale DB's, Tabellen erstellen, SQL CRUD"],
    ["Datenbanken", "Test"],
    ["Robotik", "Einstieg, Zustandsmaschinen, EV3"],
    ["Robotik", "Vorbereitungen RobOlympics"],
    ["Robotik", "Zustandsmaschinen, Zustandsdiagramme"],
    ["Robotik", "Zustandsmaschinen, Zustandsdiagramme"],
    ["Robotik", "Test"],
    ["Algorithmik", "Effizienz"],
    ["Algorithmik", "O(n) Notation, Sortieren"],
    ["Algorithmik", "Suchen, Sortieren"],
    ["Algorithmik", "N+1 Problem"],
    ["Algorithmik", "Wiederholung"],
    ["Algorithmik", "Test"],
]
const SCHEDULE_EF_FS2 = [
    ["Datenbanken", "Relationale DB's, Einführund SQL"],
    ["Datenbanken", "Relationale DB's, Datenmodellierung, ER-Diagramme, SQL Abfragen"],
    ["Datenbanken", "Relationale DB's, Tabellen erstellen, SQL CREATE, INSERT, UPDATE, DELETE"],
    ["Datenbanken", "Relationale DB's, Tabellen erstellen, SQL CRUD"],
    ["Datenbanken", "Test"],
    ["Robotik", "Einstieg, Zustandsmaschinen, EV3"],
    ["Robotik", "Vorbereitungen RobOlympics"],
    ["Robotik", "Zustandsmaschinen, Zustandsdiagramme"],
    ["Robotik", "Zustandsmaschinen, Zustandsdiagramme"],
    ["Robotik", "Test"],
    ["Algorithmik", "Effizienz"],
    ["Algorithmik", "O(n) Notation, Sortieren"],
    ["Algorithmik", "Suchen, Sortieren"],
    ["Algorithmik", "N+1 Problem"],
    ["Algorithmik", "Wiederholung"],
    ["Algorithmik", "Test"],
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
const SCHEDULE_GYM2_26_FS = [
    ["Kryptologie","Symmetrische Verschlüsselung"],
    ["Kryptologie","Kerckhoff's Prinzip, Asymmetrische Verschlüsselung"],
    ["Kryptologie","Signaturverfahren"],
    ["Kryptologie und Netzwerke","Wiederholung"],
    ["Kryptologie und Netzwerke","Test"],
    ["Programmieren 2","Datenstrukturen, Listen, MicroBit"],
    ["Programmieren 2","Robotik"],
    ["Programmieren 2","Robotik"],
    ["Programmieren 2","Robotik"],
    ["Programmieren 2","Wettbewerb: Robotik", "test"],
    ["Projekt","🚀🚦🧨🪚⚙️🌡🤖"],
    ["Projekt","🚀🚦🧨🪚⚙️🌡🤖"],
    ["Projekt","🚀🚦🧨🪚⚙️🌡🤖"],
    ["Projekt","🚀🚦🧨🪚⚙️🌡🤖"],
    ["Projekt: Abschluss und Abgabe","🚀🚦🧨🪚⚙️🌡🤖"],
    ["Projekt Austauschen, Abschluss",""],
    ["Abschluss Informatik",""]
]

const SCHEDULE = SCHEDULE_GYM2_26_FS;
// const SCHEDULE = prepareHK(SCHEDULE_GYM1_PRAKTIKUM, ['B', 'A']);

['26e', '26P'].forEach((klasse) =>{
    const cells = [];
    let subjectNr = 0
    const klass = klasse.split('-')[0];
    const colSize = SCHEDULE[0].length + 1;
    Array(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27).forEach((weekNr) => {
        const date = moment().year(YEAR + (weekNr < 30 ? 0 : 0)).week(weekNr).day(DAYS[CLASS_DAY[klasse]]).format('DD.MM.YYYY');
        if (EVENTS[date]) {
            cells.push({ cells: [date, EVENTS[date].desc, EVENTS[date].details || ''], type: EVENTS[date].type });
        } else if (EVENTS[weekNr]) {
            cells.push({ cells: [date, EVENTS[weekNr].desc, EVENTS[weekNr].details || ''], type: EVENTS[weekNr].type });
        } else if (CLASS_EVENTS[klass][date]) {
            cells.push({ cells: [date, CLASS_EVENTS[klass][date].desc, CLASS_EVENTS[klass][date].details || ''], type: CLASS_EVENTS[klass][date].type });
        } else if (CLASS_EVENTS[klass][weekNr]) {
            cells.push({ cells: [CLASS_EVENTS[klass][weekNr].date, CLASS_EVENTS[klass][weekNr].desc, CLASS_EVENTS[klass][weekNr].details || ''], type: CLASS_EVENTS[klass][weekNr].type });
        } else if (SCHEDULE[subjectNr]) {
            const isTest = SCHEDULE[subjectNr][1].toLowerCase().includes('test') || SCHEDULE[subjectNr][2] === 'test';
            cells.push({ cells: [date, ...SCHEDULE[subjectNr].slice(0, 2)], type: isTest ? 'test' : undefined});
            subjectNr += 1;
        }
        if (SCHOOL_EVENTS[weekNr]) {
            if (Array.isArray(SCHOOL_EVENTS[weekNr])) {
                SCHOOL_EVENTS[weekNr].forEach((event) => {
                    cells.push({ cells: [event.date, event.desc, event.details || ''], type: event.type});
                })
            } else {
                cells.push({ cells: [SCHOOL_EVENTS[weekNr].date, SCHOOL_EVENTS[weekNr].desc, SCHOOL_EVENTS[weekNr].details || ''], type: SCHOOL_EVENTS[weekNr].type});
            }
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