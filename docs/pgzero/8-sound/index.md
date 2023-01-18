---
sidebar_custom_props:
  id: 36c4d9be-6009-48fe-ac38-07539aabfaca
  source:
    name: Gym-Kirchenfeld
    ref: https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero
---
# Musik und Soundeffekte
---

## Soundeffekte

Soundeffekte müssen im Format `WAV` oder `OGG` im Unterordner `sound` abgespeichert werden.

```py
sounds.name.play()
```
spielt den Soundeffekt mit dem Name `name` ab.

Um beispielsweise den Soundeffekt `extraleben.wav` abzuspielen, schreibt man:
```py
sounds.extraleben.play()
```

## Musik

Musikdateien müssen im Format `MP3` oder `OGG` im Unterordner `music` abgelegt werden. Um die Datei `hintergrundmusik.mp3` abzuspielen, schreibt man:

```py
music.play("hintergrundmusik")
```

```py
music.play(name)
```
spielt die Musikdatei mit dem Namen `name` ab. Das Abspielen wird endlos wiederholt.

```py
music.play_once(name)
```
spielt die Musikdatei mit dem Namen `name` ab. Die Musikdatei wird nur einmal abgespielt.

```py
music.queue(name)
```
fügt die Musikdatei mit dem Namen `name` in die Abspielliste ein.

```py
music.stop()
```
stoppt das Abspielen der Musik.

```py
music.pause()
```
pausiert das Abspielen der Musik.

```py
music.unpause()
```
nimmt das Abspielen der Musik nach einer Pause wieder auf.

```py
music.is_playing()
```
überprüft, ob zur Zeit Musik abgespielt wird.
