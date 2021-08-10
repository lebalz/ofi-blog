import useBaseUrl from '@docusaurus/useBaseUrl';

# Game-Runner

Auf [https://game.gbsl.website](https://game.gbsl.website) lassen sich die erstellten Games hochladen und spielen. Mit einer kleinen Modifikation können kann sogar der Punktestand einer Spielerin/Spielers in ein Scoreboard übernommen werden.

Im erstellten Spiel wurde (in den meisten Fällen\*) eine Funktion `set_score` definiert, über welche jeweils der neue Score aktualisiert wurde. Um den Score nun auch im Scoreboard zu registrieren, muss dort `device.report(new_score)` aufgerufen werden. Sofern der aktuelle Wert einen neuen Punkte-Höchststand ist, wird er ans Scoreboard geschickt.

```py
def set_score(new_score):
    global score
    score = new_score
    if score > 10 and level == 1:
        level_2()
    elif score < 20 and level == 2:
        level_1()
    device.update_text(
        id='score',
        text=f'Score: {score}'
    )
    device.report(score)
```

\* Falls keine `set_score` Funktion verwendet wurde, muss überall dort, wo der `score` verändert wird das `device.set_score(score)` aufgerufen werden.

## Game Hochladen

Ein Game kann als `.zip` Ordner hochgeladen werden. Der komprimierte Ordner enthält genau ein Python-Programm (z.B. `game.py`) und falls das Spiel Bilder und oder Sound enthält, auch diese Ordner.

Die Ordnerstruktur könnte also in etwa wie folgt aussehen:

```txt
game.zip
    ├── game.py
    ├── Bilder
    │   ├── hintergrund.png
    │   ├── ghost.gif
    │   └── ghost_yellow.gif
    └── Sound
        ├── booooom.mp3
        └── catch.mp3
```

## Anzeigebild hinzufügen

![](images/13-game-runner/preview-image.png)

Es kann ein Anzeigebild für das Game hochgeladen werden. Dazu wird dem Zip-Ordner ein Vorschaubild mit dem Namen `preview` (z.b. `preview.png`, `preview.jpg` oder `preview.gif`) hinzugefügt. Die Ordnerstruktur sieht dann wie folgt aus:

**Wichtig**: Das Vorschaubild muss exakt den Namen `preview` haben, sonst wird es nicht verwendet.

```txt
game.zip
    ├── game.py
    ├── preview.png
    ├── Bilder
    │   ├── hintergrund.png
    │   ├── ghost.gif
    │   └── ghost_yellow.gif
    └── Sound
        ├── booooom.mp3
        └── catch.mp3
```

## Spieloptimierungen

Damit das Spiel schneller lädt, gibt es ein paar Tricks:

- entfernen von allen nicht verwendeten Bildern und Sound-Tracks aus den Bilder/Sound Ordnern
- Die Bildergrösse verringern, indem die Auflösung des Bildes heruntergesetzt wird (bspw. für Hintergründe auf eine Breite von `500px`, für kleine Objekte auf eine Breite von `200px`). **Achtung**: Durch die Reduktion der Auflösung gehen Informationen verloren und das Bild kann u.U. verpixelt werden.
  - [Mac OSX: Vorschau App](https://www.maclife.de/ratgeber/aendern-bildgroesse-vorschau-app-10080447.html)
  - [Windows 10: Paint 3D](https://www.heise.de/tipps-tricks/Fotos-verkleinern-in-Windows-10-so-geht-s-4114478.html#Fotos%20mit%20Paint%203D%20verkleinern)
- Die Dateigrösse von Sound-Dateien reduzieren. Auch hier geht Soundqualität verloren. Oft ist dies aber kaum spürbar bei Smartphone/Laptop Lautsprechern. Diese Reduktion der Dateigrösse heisst _Komprimierung_ und kann bspw. mit einem Onlinetool gemacht werden:
  - [mp3smaller](https://www.mp3smaller.com/) -> `Small File Size (MP3 Bitrate 32Kbps)` wählen
  - [compress-mp3](https://www.onlineconverter.com/compress-mp3) -> `Quality: Best Compression` wählen

### Codeoptimierung

Wenn im Spiel mehrfach (daher auch an einem anderen Ort als ganz am Anfang) `device.clear_playground()` steht, so können bis auf den ersten Aufruf die Befehle zu `device.clean_playground()` (mit einem `n` statt einem `r` am Ende) verwendet werden. Dies bewirkt, das die Bilder und Sound-Dateien nicht gelöscht werden und somit nicht erneut hochgeladen werden müssen. Dazu müssen aber auch alle `device.configure_playground()` Befehle (ausser der Erste!) angepasst werden und die `images=` und `audio_tracks=` Optionen entfernt werden. (Bemerke: Die Option `image=` kann dennoch gesetzt werden.)

## Wettbewerb 🥇🥇🥇

In jeder Klasse werden Spiele und SpielerInnen prämiert:

- Das am besten bewertete Spiel der Klasse
- Das am meisten gespielte Spiel der Klasse
- Die Spielerin/Der Spieler mit dem Highscore beim (gesamthaft) am besten bewerteten Spiel

**Zeitraum**: Montag 25.01.2021 bis Sonntag 31.01.2021
