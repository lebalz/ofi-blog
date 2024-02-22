---
sidebar_custom_props:
  id: 117ce91b-5b5d-40cc-a18d-4dab7a731f9d
---
# SQL Commands

## Show all indexes
 
```sql
SELECT
    tablename,
    indexname,
    indexdef
FROM
    pg_indexes
WHERE
    schemaname = 'public'
ORDER BY
    tablename,
    indexname;
```

```sql
CREATE ROLE ef_2024 WITH LOGIN PASSWORD 'ef_gbsl_2024' ;
-- connect to a database you want the user to grant access
GRANT SELECT ON ALL TABLES IN SCHEMA public TO ef_2024;

-- connect to a database you want the user to grant access (for flights db)
GRANT USAGE ON SCHEMA bookings TO ef_2024;
GRANT SELECT ON ALL TABLES IN SCHEMA bookings TO ef_2024;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA bookings TO ef_2024;


```

## Create DB on dokku with given files

```bash
scp demo-flights.sql root@123.22.23.23:/root/demo-flights.sql

ssh root@123.22.23.23

# on dokku
mkdir flights
mv demo-flights.sql flights/demo-flights.sql

dokku postgres:create flights-db
docker cp flights/ $(dokku postgres:info flights-db --id):/home/flights

dokku postgres:enter flights-db

# inside postgres container "flights-db"
cd /home/flights
psql -f demo-small.sql -U postgres
```

## Export Database (plain text)

```bash
pg_dump --host=<host> --port=5432 --username=postgres --password --dbname=<db-name> > dump.sql
```

## Import Database (plain text)

```bash
psql --host=<host> --port=5432 --username=postgres --password --dbname=<db-name> < dump.sql
```
