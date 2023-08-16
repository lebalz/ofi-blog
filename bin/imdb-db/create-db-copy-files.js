
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
const DELIMITER='\t';

const professionStore = {};
let pKeyProfessions = 1;

const FOLDER_NAME = 'bin';

const sanitize = (str = '\\N') => {
    return str;
}

/** CLEANUP */
if (fs.existsSync('./professions.sql')) {
    fs.rmSync('./professions.sql');
    fs.rmSync('./humans.sql');
    fs.rmSync('./humans_professions.sql');
    fs.rmSync('./humans_movies.sql');
    fs.rmSync('./movies.sql');
    fs.rmSync('./genres.sql');
    fs.rmSync('./movies_genres.sql');
    fs.rmSync('./ratings.sql');
}

const firstValueWritten = {};

/** HUMANS */
const streamHumans = fs.createReadStream(`./${FOLDER_NAME}/name.basics.tsv`);

const wStreamProfessions = fs.createWriteStream('./professions.sql', {flag: 'a', encoding: 'utf8'});
const wStreamHumans = fs.createWriteStream('./humans.sql', {flag: 'a', encoding: 'utf8'});
const wStreamHumProf = fs.createWriteStream('./humans_professions.sql', {flag: 'a', encoding: 'utf8'});
const wStreamHumMov = fs.createWriteStream('./humans_movies.sql', {flag: 'a', encoding: 'utf8'});


streamHumans.on('close', () => {
    console.log('done HUMANS');
});

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
                wStreamProfessions.write(`${professionStore[p]}${DELIMITER}${sanitize(p)}\n`);
                // console.log(professions);
            }
            wStreamHumProf.write(`${data.nconst}${DELIMITER}${professionStore[p]}\n`);
        });
        (data.knownForTitles || '').split(',').forEach(m => {
            if (!m || m.length === 0) {
                return;
            }
            wStreamHumMov.write(`${data.nconst}${DELIMITER}${m}\n`);
        });
        wStreamHumans.write(`${data.nconst}${DELIMITER}${sanitize(data.primaryName)}${DELIMITER}${sanitize(data.birthYear)}${DELIMITER}${sanitize(data.deathYear)}\n`);
    });

/** MOVIES: Basics */

const genresStore = {};
let pKeyGenres = 1;

var tsvMoviesStream = csv.createStream(options);
const streamMovies = fs.createReadStream(`./${FOLDER_NAME}/title.basics.tsv`);

const wStreamMovies = fs.createWriteStream('./movies.sql', {flag: 'a', encoding: 'utf8'});
const wStreamGenres = fs.createWriteStream('./genres.sql', {flag: 'a', encoding: 'utf8'});
const wStreamMovGen = fs.createWriteStream('./movies_genres.sql', {flag: 'a', encoding: 'utf8'});

// wStreamMovies.write('id,type,primary_title,original_title,is_adult,start_year,end_year,runtime_minutes');
// wStreamGenres.write('id,genre');
// wStreamMovGen.write('movie_id,genre_id');

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
                wStreamGenres.write(`${genresStore[g]}${DELIMITER}${sanitize(g)}\n`);
            }
            wStreamMovGen.write(`${data.tconst}${DELIMITER}${genresStore[g]}\n`);
        });
        wStreamMovies.write(`${data.tconst}${DELIMITER}${sanitize(data.titleType)}${DELIMITER}${sanitize(data.primaryTitle)}${DELIMITER}${sanitize(data.originalTitle)}${DELIMITER}${sanitize(data.isAdult)}${DELIMITER}${sanitize(data.startYear)}${DELIMITER}${sanitize(data.endYear)}${DELIMITER}${sanitize(data.runtimeMinutes)}\n`);
    });


/** RATINGS */

var tsvRatingsStream = csv.createStream(options);
const streamRatings = fs.createReadStream(`./${FOLDER_NAME}/title.ratings.tsv`);

const wStreamRatings = fs.createWriteStream('./ratings.sql', {flag: 'a', encoding: 'utf8'});

streamRatings.on('close', () => {
    console.log('done', 'RATINGS');
});

streamRatings.pipe(tsvRatingsStream)
    .on('error',function(err){
        console.error(err);
    })
    .on('data',function(data){
        wStreamRatings.write(`${data.tconst}${DELIMITER}${sanitize(data.averageRating)}${DELIMITER}${sanitize(data.numVotes)}\n`);
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