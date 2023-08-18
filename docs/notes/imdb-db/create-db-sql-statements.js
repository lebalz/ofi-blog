
const fs = require('fs');
var csv = require('csv-stream')
// All of these arguments are optional.
var options = {
    delimiter : '\t', // default is ,
    endLine : '\n', // default is \n,
    columnOffset : 0, // default is 0
    escapeChar : '', // default is an empty string
    enclosedChar : '' // default is an empty string
}
 
var tsvHumansStream = csv.createStream(options);

const professionStore = {};
let pKeyProfessions = 1;

const FOLDER_NAME = 'bin';

/** CLEANUP */
if (fs.existsSync('./professions.sql')) {
    fs.rmSync('./professions.sql');
    fs.rmSync('./humans.sql');
    fs.rmSync('./humans_professions.sql');
    fs.rmSync('./humans_movies.sql');
    fs.rmSync('./movies.sql');
    fs.rmSync('./genres.sql');
    fs.rmSync('./movies_genres.sql');
}

const firstValueWritten = {};

/** HUMANS */
const streamHumans = fs.createReadStream(`./${FOLDER_NAME}/name.basics.tsv`);

const wStreamProfessions = fs.createWriteStream('./professions.sql', {flag: 'a', encoding: 'utf8'});
const wStreamHumans = fs.createWriteStream('./humans.sql', {flag: 'a', encoding: 'utf8'});
const wStreamHumProf = fs.createWriteStream('./humans_professions.sql', {flag: 'a', encoding: 'utf8'});
const wStreamHumMov = fs.createWriteStream('./humans_movies.sql', {flag: 'a', encoding: 'utf8'});

wStreamProfessions.write('INSERT INTO professions (id, profession) VALUES ');
wStreamHumans.write('INSERT INTO humans (id, name, birth_year, death_year) VALUES ');
wStreamHumProf.write('INSERT INTO humans_professions (human_id, profession_id) VALUES ');
wStreamHumMov.write('INSERT INTO humans_movies (human_id, movie_id) VALUES ');

streamHumans.on('close', () => {
    console.log('done HUMANS');
});

const sanitize = (str = '\\N') => {
    if (str === '\\N') {
        return 'NULL';
    }
    return `'${str.replace(/'/g, "''")}'`;
}
streamHumans.pipe(tsvHumansStream)
    .on('error',function(err){
        console.error(err);
    })
    .on('data',function(data){
        (data.primaryProfession || '').split(',').forEach(p => {
            if (!p || p.length === 0) {
                return;
            }
            if (!professionStore[p]) {
                professionStore[p] = `pp${pKeyProfessions.toString().padStart(7, '0')}`;
                pKeyProfessions++;
                if (firstValueWritten.professions) {
                    wStreamProfessions.write(',');
                } else {
                    firstValueWritten.professions = true;
                }
                wStreamProfessions.write(`\n('${professionStore[p]}', ${sanitize(p)})`);
                // console.log(professions);
            }
            if (firstValueWritten.humans_professions) {
                wStreamHumProf.write(',');
            } else {
                firstValueWritten.humans_professions = true;
            }
            wStreamHumProf.write(`\n('${data.nconst}', '${professionStore[p]}')`);
        });
        (data.knownForTitles || '').split(',').forEach(m => {
            if (!m || m.length === 0) {
                return;
            }
            if (firstValueWritten.humans_movies) {
                wStreamHumMov.write(',');
            } else {
                firstValueWritten.humans_movies = true;
            }
            wStreamHumMov.write(`('${data.nconst}', '${m}')`);
        });
        if (firstValueWritten.humans) {
            wStreamHumans.write(',');
        } else {
            firstValueWritten.humans = true;
        }
        wStreamHumans.write(`('${data.nconst}', ${sanitize(data.primaryName)}, ${sanitize(data.birthYear)}, ${sanitize(data.deathYear)})`);
    });

/** MOVIES: Basics */

const genresStore = {};
let pKeyGenres = 1;

var tsvMoviesStream = csv.createStream(options);
const streamMovies = fs.createReadStream(`./${FOLDER_NAME}/title.basics.tsv`);

const wStreamMovies = fs.createWriteStream('./movies.sql', {flag: 'a', encoding: 'utf8'});
const wStreamGenres = fs.createWriteStream('./genres.sql', {flag: 'a', encoding: 'utf8'});
const wStreamMovGen = fs.createWriteStream('./movies_genres.sql', {flag: 'a', encoding: 'utf8'});

wStreamMovies.write('INSERT INTO movies (id, type, primary_title, original_title, is_adult, start_year, end_year, runtime_minutes) VALUES ');
wStreamGenres.write('INSERT INTO genres (id, genre) VALUES ');
wStreamMovGen.write('INSERT INTO movies_genres (movie_id, genre_id) VALUES ');

streamMovies.on('close', () => {
    console.log('done', 'MOVIES');
});

streamMovies.pipe(tsvMoviesStream)
    .on('error',function(err){
        console.error(err);
    })
    .on('data',function(data){
        (data.genres || '').split(',').forEach(g => {
            if (!g || g.length === 0) {
                return;
            }
            if (!genresStore[g]) {
                genresStore[g] = `gg${pKeyGenres.toString().padStart(7, '0')}`;
                pKeyGenres++;
                
                if (firstValueWritten.genres) {
                    wStreamGenres.write(',');
                } else {
                    firstValueWritten.genres = true;
                }
                wStreamGenres.write(`('${genresStore[g]}', ${sanitize(g)})`);
            }
            if (firstValueWritten.movies_genres) {
                wStreamMovGen.write(',');
            } else {
                firstValueWritten.movies_genres = true;
            }
            wStreamMovGen.write(`('${data.tconst}', '${genresStore[g]}')`);
        });
        if (firstValueWritten.movies) {
            wStreamMovies.write(',');
        } else {
            firstValueWritten.movies = true;
        }
        wStreamMovies.write(`('${data.tconst}', ${sanitize(data.titleType)}, ${sanitize(data.primaryTitle)}, ${sanitize(data.originalTitle)}, ${sanitize(data.isAdult)}, ${sanitize(data.startYear)}, ${sanitize(data.endYear)}, ${sanitize(data.runtimeMinutes)})`);
    });



// var csvStream = csv.createStream(options);
// let maxLen = 0;
// fs.createReadStream(`./bin/name.basics.tsv`).pipe(csvStream)
//     .on('error',function(err){
//         console.error(err);
//     })
//     .on('data',function(data){
//         if (data.nconst.length > maxLen) {
//             maxLen = data.nconst.length;
//             console.log(data.nconst, maxLen, data);
//         }
//     });