---
sidebar_custom_props:
  id: d71c1c0c-6fe6-4f47-bfbf-cbf828c17d87
---
# Grüfnisch

<blockquote>

Grüfnisch ist in der Schweiz unter Jugendlichen und Kindern eine verbreitete Spielsprache. Diese Sprache wird von vielen Kindern und Jugendlichen auch als Geheimsprache benutzt. Bei „Grüfnisch“ werden alle Vokale wie folgt ersetzt:[^1]

a
: anafa
e
: enefe
i
: inifi
o
: onofo
u
: unufu
ä
: änäfä
ö
: önöfö
ü
: ünüfü


### Beispiele
Hallo
: Hanafallonofo

Gymnasium Biel Seeland
: Gymnanafasinifiunufum Binifienefel-Senefeenefelanafand


</blockquote>

:::info[Ziel: Python spricht Grüfnisch]
Das Ziel ist, einen vorgegebenen Text auf Grfünisch zu übersetzen und später auch vorlesen zu lassen.
:::

## Texte in Python


### Gross- und Kleinschreibung

:::def[`.upper()`: Grossbuchstaben]

```py live_py slim
text = 'Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch.'
gross = text.upper()

print(gross)
```
:::

:::def[`.lower()`: Kleinbuchstaben]
```py live_py slim
text = 'Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch.'
klein = text.lower()

print(klein)
```
:::

### Text ersetzen

::::def[`.replace(alt, neu)`]
Mit `replace(alt, neu)` können Text-Teile in einem Text (`string`) ersetzt werden.


```py live_py slim
text = 'Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch.'

# Alle . durch !!! ersetzen
text = text.replace('.', '!!!')

print(text)
```

```py live_py slim
text = 'Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch.'
# Alle 'ich' durch XXX ersetzen
text = text.replace('ich', 'XXX')

print(text)
```
:::warning[Merke]
Python nimmt es genau beim ersetzen - die Gross- & Kleinschreibung spielt eine Rolle! Im obigen Beispiel wird das `Ich` am Satzanfang also nicht ersetzt.
:::

Lösungen: (1) Gross- und kleingeschriebenes ersetzen, oder (2) zuerst alles klein schreiben und dann ersetzen.

:::cards[]
::br{code=true}
```py live_py slim
text = 'Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch.'

text = text.replace('ich', 'XXX') # Alle 'ich' durch XXX ersetzen
text = text.replace('Ich', 'XXX') # Alle 'Ich' durch XXX ersetzen
print(text)
```
::br{code=true}
```py live_py slim
text = 'Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch.'

text = text.lower() # text kleinschreiben
text = text.replace('ich', 'XXX') # Alle 'ich' durch XXX ersetzen
print(text)
```
:::
::::


### Vervielfachen

Um Textteile zu vervielfachen, können diese mit einem Faktor 'multipliziert' werden.


```py live_py slim
print('❤️ ' * 5)
```

oder auch komplizierter:

```py live_py slim
for i in range(5):
    print('❤️ ' * (i + 1))
```

## Aufgabe

:::aufgabe[Grüfnisch]
<Answer type="state" webKey="7893e2f7-b498-48c3-83f5-0c629f5dd6e4" />

1. Wie lautet der Satz `hallo, es ist winter` auf Grünfisch? (Von Hand, ohne Programm übersetzen)

    <Answer type="string" webKey="cf4dfba6-f319-4509-bdac-92deaa32fec4" solution="hanafallonofo enefes inifist winifintenefer" sanitizer={(val) => val.toLowerCase().replaceAll(',', ' ').replaceAll('.', ' ').trim().replaceAll(/\s+/g, ' ')} width="100%"/>


2. Programmieren Sie, dass der Text automatisch ins Grüfnisch übersetzt wird.
3. Funktioniert Ihr Text auch, wenn Sie den Satz mit Grossbuchstaben, bspw. `Informatikunterricht` übersetzen? Passen Sie ihn entsprechen an.
4. Auf 👉 https://jupyter.gbsl.website können Python-Programme auch einen Sprachdienst aufrufen, um den übersetzten Text in gesprochene Sprache umzuwandeln. Dazu muss ein neues __Python 3 Notebook__ geöffnet werden. Der folgende Code übernimmt dies für uns:

    ```py
    from gtts import gTTS # Google Text To Speach Bibliothek
    from playsound import playsound # playsound Bibliothek um mp3 abzuspielen

    text = 'Hallo GBSL!'
    # Text zu Sprache umwandeln
    mp3 = gTTS(text, lang='de', slow=False)
    # Ausgabe als mp3 abspeichern
    mp3.save('out.mp3')
    # mp3 Datei abspielen
    playsound('out.mp3')
    ```

    Verwenden Sie Ihr untenstehendes Programm, um damit gesprochenen Text auszugeben.

5. ⭐ Passen Sie Ihr Programm so an, dass auch die Zusatzregel bei Grüfnisch umgesetzt wird. Wie könnte dies gelingen?
    > Ausnahme beim Ersetzen: Bei Diphthongen/Zwielauten wird nur der erste verlängert (z. B. „au“ ⇒ „anafau“).
    > Beispiel: "Bauen" hat den Diphtong `au` und wird also grüfnisch "Banafauenefen" ausgesprochen.



```py live_py id=00070a97-3898-46a6-88df-79c2cd28ad17 title=gruefnisch.py
text = 'hallo, es ist winter!'
print('Original', text)
```
:::

[^1]: Quelle: [Wikipedia](https://de.wikipedia.org/wiki/Spielsprache#Gr%C3%BCfnisch)
