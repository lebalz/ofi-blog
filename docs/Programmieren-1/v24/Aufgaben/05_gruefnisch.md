# Grüfnisch

[05_gruefnisch.zip](skeletons/05_gruefnisch.zip)



> Grüfnisch ist in der Schweiz unter Jugendlichen und Kindern eine verbreitete Spielsprache. Diese Sprache wird von vielen Kindern und Jugendlichen auch als Geheimsprache benutzt. Bei „Grüfnisch“ werden die Vokale **a**, **e**, **i**, **o**, **u**, **ä**, **ö** und **ü** durch **anafa**, **enefe**, **inifi**, **onofo**, **unufu**, **änäfä**, **önöfö** und **ünüfü** ersetzt (z. B.: „Hanafallonofo“ = „Hallo“). Ausnahme: Bei Diphthongen/Zwielauten wird nur der erste verlängert (z. B. „au“ ⇒ „anafau“). [^1]

## Beispiel

`Gymnasium Biel Seeland` heisst auf Grüfnisch `Gymnanafasinifiunufum Binifienefel-Senefeenefelanafand`

## Aufgabe

1. Passe das Skript `01_gruefnisch.py` so an, dass am Ende die grüfnische Übersetzung ausgegeben wird.
2. Geben Sie am Ende die grüfnische Übersetzung als Sprache aus, wobei das folgende Beispiel zeigt, wie der Text `Hallo GBSL` als Sprache ausgegeben wird.
    ```py
    satz = 'Hallo GBSL'
    gesprochen = gTTS(text=satz, lang='de', slow=False)
    gesprochen.save('speak_out.mp3')
    playsound('speak_out.mp3')
    ```
3. Ändern Sie das Skript so ab, dass der Benutzer mit `input()` nach einem zu übersetzenden Satz gefragt wird.

[^1]: Quelle: [Wikipedia](https://de.wikipedia.org/wiki/Spielsprache#Gr%C3%BCfnisch)