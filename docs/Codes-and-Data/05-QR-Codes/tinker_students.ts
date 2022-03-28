import axios from 'axios';

// npx ts-node tinker_students.ts

const USER = '3Afol8qSkv9'; 
const GROUP = '9bLqMHFjjbf'; // '9bLqMHFjjbf'
const COOKIE = 'OPTOUTMULTI_REF=73f8b69e-84c6-4ef3-abf0-37a3efe55aef; adsk_ccpa=false; adsk_ccpa_guid=db249a66-ce55-41fc-b38b-0225740c3bb2; LSID=97431c051c7faedb81e79c2d82bafc47f50c24b4; tinkercad-ldid=3Afol8qSkv9; USE_NEW_API_READER_BACKEND=false; USE_NEW_CSG_HOST_BACKEND=false; OPTOUTMULTI_GEO=false; LSES=9A096F10-D887-40E4-B07A-D880406DC476; SID=2c1640ad370d6ddee9c126666cefdb13; _tcad_session_colab=2c1640ad370d6ddee9c126666cefdb13; _circuits_session_colab=2c1640ad370d6ddee9c126666cefdb13; csrf-token=fa6491504c1a6322c922db08232e245b; OPTOUTMULTI_TYPE=P; OPTOUTMULTI=0%3A0%7Cc9%3A0%7Cc1%3A0%7Cc8%3A0%7Cc7%3A0; ADSK_GDPR_OPT_LENGTH=Wed%2C%2027%20Apr%202022%2016%3A38%3A40%20GMT; utag_main=v_id:017eb5cd7320001579f85581469805089001a08100942$_sn:7$_ss:0$_st:1648487320735$optoutbackup:undefined%3Bexp-1651503647725$ses_id:1648485518578%3Bexp-session$_pn:1%3Bexp-session';

const STUDS = [
    'Maelle.Abt@edu.gbsl.ch',
'Uma.Anderegg@edu.gbsl.ch',
'Eline.Andres@edu.gbsl.ch',
'Berenike.Arnaschus@edu.gbsl.ch',
'Matteo.Aschwanden@edu.gbsl.ch',
'Cedric.Fleischer@edu.gbsl.ch',
'Mia.Furer@edu.gbsl.ch',
'Kyra.Hugelshofer@edu.gbsl.ch',
'Noemi.Huersch@edu.gbsl.ch',
'Annic.Jungo@edu.gbsl.ch',
'Luana.Kuhn@edu.gbsl.ch',
'Jana.Kyburz@edu.gbsl.ch',
'Alessia.Moser@edu.gbsl.ch',
'Maelle.Naef@edu.gbsl.ch',
'Leonie.Perret@edu.gbsl.ch',
'Julien.Preiswerk@edu.gbsl.ch',
'Jael.Roethlisberger@edu.gbsl.ch',
'Emil.Schoch@edu.gbsl.ch',
'Cindy.Schwab@edu.gbsl.ch',
'Rownok.Shaud@edu.gbsl.ch',
'Riana.Strazza@edu.gbsl.ch'
];

axios.post(
    `https://api-reader.tinkercad.com/users/${USER}/groups/${GROUP}/members/create`,
    {members: STUDS.map((mail) => ({name: mail.toLowerCase(), identifier: mail.split('@')[0].toLowerCase()}))},
    {
        headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9,de;q=0.8,fr;q=0.7",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Microsoft Edge\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "x-csrf-token": "fa6491504c1a6322c922db08232e245b",
            "cookie": COOKIE,
            "Referer": "https://www.tinkercad.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        }
    }
).then((res) => console.log(res)).catch((err) => console.log(err));

// const create = (emails: string[]) => {
//     return fetch(`https://api-reader.tinkercad.com/users/${USER}/groups/${GROUP}/members/create`, {
//         "headers": {
//             "accept": "application/json, text/plain, */*",
//             "accept-language": "en-US,en;q=0.9,de;q=0.8,fr;q=0.7",
//             "cache-control": "no-cache",
//             "content-type": "application/json",
//             "pragma": "no-cache",
//             "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Microsoft Edge\";v=\"99\"",
//             "sec-ch-ua-mobile": "?0",
//             "sec-ch-ua-platform": "\"macOS\"",
//             "sec-fetch-dest": "empty",
//             "sec-fetch-mode": "cors",
//             "sec-fetch-site": "same-site",
//             "x-csrf-token": "fa6491504c1a6322c922db08232e245b",
//             "cookie": COOKIE,
//             "Referer": "https://www.tinkercad.com/",
//             "Referrer-Policy": "strict-origin-when-cross-origin"
//         },
//         "body": JSON.stringify({members: emails.map((mail) => ({name: mail, identifier: mail.split('@')[0]}))}),
//         "method": "POST"
//     });
// };


// create(STUDS).then((res) => console.log(res)).catch((err) => console.log(err));