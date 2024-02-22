---
sidebar_custom_props:
  id: f1015eb7-2a8c-41b3-9e04-b18ea7e095be
---

# Setup IMDB Database

1. Download the [IMDB Dataset](https://datasets.imdbws.com/).
2. Execute `node create-db-copy-files.js` to create the copy files.
3. Copy the files to the server. `scp *.sql ip-address:/home/imdb`
4. On the server, execute the following commands:

```bash
dokku postgres:create hfr-imdb
dokku postgres:expose hfr-imdb

DB_URL=$(dokku postgres:info hfr-imdb --dsn | sed 's/@.*:/@localhost:/')
NEW_DB=$(echo $DB_URL | sed 's/5432\/.*/5432\/imdb/')
echo $DB_URL > imdb/DB_URL
echo $NEW_DB > imdb/NEW_DB
docker cp imdb/ $(dokku postgres:info hfr-imdb --id):/home/imdb

dokku postgres:enter hfr-imdb

cd /home/imdb
psql $(cat DB_URL) -f ./_1-create-db.sql
psql $(cat NEW_DB) -f ./_2-setup-db.sql
psql $(cat NEW_DB) -f ./_3-restore-db.sql
```

## Troubleshooting

Problem: `COPY` does not work when a single line is erroneous.

```bash
ERROR:  insert or update on table "humans_movies" violates foreign key constraint "humans_movies_movie_id_fkey"
DETAIL:  Key (movie_id)=(tt16607280) is not present in table "movies"
```

To remove the erroneous line, you can use the following command:

```bash
sed -i '/tt16607280/d' humans_movies.sql
```

and reimport this file:

```bash	
psql $(cat NEW_DB) -c "COPY humans_movies FROM '/home/imdb/humans_movies.sql';"
```

:::details[Unknown Entries 16.08.2023]
The following keys are in `humans_movies.sql` but not found in `movies.sql`:

- `tt8885954`
- `tt16607280`
- `tt14469846`
- `tt27415372`
- `tt27866357`
- `tt10857444`
- `tt9676044`
- `tt9685030`
- `tt12247918`
- `tt11812250`
- `tt10452116`
- `tt14703146`
- `tt27411480`
- `tt13853058`
- `tt22183860`
- `tt14273900`
- `tt18116552`
- `tt3644138`
- `tt20356568`
- `tt21051790`
- `tt3435486`
- `tt21411828`
- `tt22050582`
- `tt27685422`
- `tt21237486`
- `tt23767348`
- `tt27147468`
- `tt25429502`
- `tt27493989`
- `tt27936112`
- `tt28108823`
- `tt27310698`
- `tt27929191`
- `tt7303822`

eventually it is easier at one point to split the file into multiple files:
```bash
NR=$(awk '/tt21237486/{ print NR; exit }' humans_movies.sql)
split -l $NR humans_movies.sql human_movs_
```
:::

## Index

```sql
-- for text search gin + trigram indexes (reduces search time from ~3s to ~50ms)
CREATE INDEX ON movies USING gin (primary_title gin_trgm_ops);
CREATE INDEX ON movies USING gin (original_title gin_trgm_ops);
CREATE INDEX ON humans USING gin (name gin_trgm_ops);

-- for eq-comparison a normal btree index is faster
CREATE INDEX ON movies(primary_title);
CREATE INDEX ON movies(original_title);
CREATE INDEX ON humans(name);

CREATE INDEX ON movies(type);
CREATE INDEX ON movies(primary_title);
CREATE INDEX ON movies(original_title);
CREATE INDEX ON movies(is_adult);
CREATE INDEX ON movies(start_year);
CREATE INDEX ON movies(end_year);
CREATE INDEX ON movies(runtime_minutes);

CREATE INDEX ON humans(name);
CREATE INDEX ON humans(birth_year);
CREATE INDEX ON humans(death_year);

CREATE INDEX ON humans_movies(human_id);
CREATE INDEX ON humans_movies(movie_id);

CREATE INDEX ON ratings(averageRating);
CREATE INDEX ON ratings(numVotes);
CREATE INDEX ON ratings(movie_id);
```
