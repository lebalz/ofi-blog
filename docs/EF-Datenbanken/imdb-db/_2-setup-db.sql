CREATE EXTENSION IF NOT EXISTS btree_gin;
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE TABLE professions (
    id VARCHAR(10) PRIMARY KEY,
    profession VARCHAR(32) NOT NULL
);
create table genres (
    id VARCHAR(10) PRIMARY KEY,
    genre varchar(12)
);
CREATE TABLE movies (
    id VARCHAR(10) PRIMARY KEY,
    type VARCHAR(12) NOT NULL,
    primary_title VARCHAR(512) NOT NULL,
    original_title  VARCHAR(512) NOT NULL,
    is_adult BOOLEAN NOT NULL,
    start_year int,
    end_year int,
    runtime_minutes int
);
CREATE TABLE humans (
    id VARCHAR(10) PRIMARY KEY,
    name TEXT NOT NULL,
    birth_year int,
    death_year int
);
CREATE TABLE humans_movies (
    human_id VARCHAR(10),
    movie_id VARCHAR(10),
    FOREIGN KEY (human_id) REFERENCES humans(id),
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);
CREATE TABLE humans_professions (
    human_id VARCHAR(10),
    profession_id VARCHAR(10),
    FOREIGN KEY (human_id) REFERENCES humans(id),
    FOREIGN KEY (profession_id) REFERENCES professions(id)
);
CREATE TABLE movies_genres (
    movie_id VARCHAR(10),
    genre_id VARCHAR(10),
    FOREIGN KEY (movie_id) REFERENCES movies(id),
    FOREIGN KEY (genre_id) REFERENCES genres(id)
);
CREATE TABLE ratings (
    movie_id VARCHAR(10),
    average_rating float not null,
    num_votes BIGINT NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);