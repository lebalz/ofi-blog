---
sidebar_custom_props:
  id: 39138d1d-af75-42d8-9b2c-a389cf4738e6
---
# Simple SQL Injection Example

## Vorbereitung

- psycopg2 installieren für die Verbindung zur Datenbank

    ```bash
    pip install psycopg2
    ```

- flask installieren für den Webserver

    ```bash
    pip install flask
    ```

## Flask starten

Um die Web Applikation zu starten, muss zuerst Flask gesagt werden, wo die Applikation zu finden ist (die Datei __webapp.py__ in diesem Fall) mit der Umgebungsvariable `FLASK_APP`:


```bash
export FLASK_APP=webapp
```

Damit wir die Applikation im Entwicklungsmodus starten können, muss die Umgebungsvariable `FLASK_ENV` gesetzt werden:

```bash
export FLASK_ENV=development
```

Zuletzt kann die Applikation mit dem Befehl `flask run` gestartet werden:

```bash
flask run
```

oder alles in einem:

```bash
FLASK_APP=webapp FLASK_ENV=development flask run
```

Wenn die Applikation gestartet ist, kann sie im Browser unter der Adresse http://127.0.0.1:5000/ aufgerufen werden.


```bash
Output
 * Serving Flask app "hello" (lazy loading)
 * Environment: development
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

:::danger[Hinweis Schul-WLAN]
Im Schul-WLAN sind höhere Ports gesperrt, weshalb keine Verbindung zur Datenbank aufgebaut werden kann. Über einen Hotspot funktioniert es aber...
:::


## WebApp

:::details[webapp.py]

```py reference title="webapp.py"
https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Datenbanken/04-sql-injection/snippets/webapp.py
```

:::


:::details[static/style.css]

```css reference title="static/style.css"
https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Datenbanken/04-sql-injection/snippets/static/style.css
```

:::
