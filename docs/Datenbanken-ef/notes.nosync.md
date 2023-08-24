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


```