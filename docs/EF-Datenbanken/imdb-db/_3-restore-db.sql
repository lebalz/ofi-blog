COPY genres FROM '/var/lib/postgresql/imdb-files/genres.sql';
COPY professions FROM '/var/lib/postgresql/imdb-files/professions.sql';
COPY humans FROM '/var/lib/postgresql/imdb-files/humans.sql';
COPY movies FROM '/var/lib/postgresql/imdb-files/movies.sql';
COPY humans_movies FROM '/var/lib/postgresql/imdb-files/humans_movies.sql';
COPY humans_professions FROM '/var/lib/postgresql/imdb-files/humans_professions.sql';
COPY movies_genres FROM '/var/lib/postgresql/imdb-files/movies_genres.sql';
COPY ratings FROM '/var/lib/postgresql/imdb-files/ratings.sql';
