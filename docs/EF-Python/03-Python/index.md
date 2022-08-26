---
sidebar_custom_props:
  id: e921599f-0f0e-49be-b9b3-e0f2445f0118
---

# Python

Auffrischung der im obligatorischen Fach Informatik gewonnenen Kenntnisse.

👉 offizielle Webseite: https://www.python.org

Bei Python handelt es sich um eine weit verbreitete «höhere» Programmiersprache. Im Gegensatz zu vielen anderen Programmiersprachen, wird Python interpretiert. D.h. ein Python-Code läuft auf allen Systemen für welche Python-Interpreter existieren und diese existieren für fast jedes Betriebssystem: Windows, macOS, Linux und andere.


![Python-Logo --width=400px](images/python-logo.png)

Die Syntax von Python legt viel Wert auf Lesbarkeit des Codes. Dies wird vor allem durch das Einrücken von Code zur Kennzeichnung von Programmierblöcken erreicht. Was bei Python zur Syntax gehört, ist bei vielen anderen Programmiersprachen nur Konvention, an welche man sich nicht zwingend halten muss.

## Kommentare
Kommentare werden vom Interpreter ignoriert. Sie stellen keine Anweisungen dar! Aber sie können uns helfen den Code zu dokumentieren,

Python bietet zwei Arten von Kommentaren:

### einzeilige Kommentare
Wird mit einem Hashtag # gekennzeichnet – alles was rechts davon auf dieser Zeile steht gilt als Kommentar.

```py live_py slim
# Das ist ein Kommentar
print(42) # ab hier ist der Rest der Zeile ein Kommentar
# print('Hallo') # Diese Zeile wird nicht interpretiert
```

### mehrzeilige Kommentare
Wird durch drei Anführungszeichen """ eingeleitet – alles bis zu den nächsten drei Anführungszeichen gilt als Kommentar.

```py live_py slim
'''
Alles zwischen den drei Hochkommas ist ein Kommentar
Alle Zeilen werden von Python ignoriert
'''
print(42)
```



## `print`-Befehl

Der print-Befehl gibt seine Argumente auf einer Zeile aus. Dabei können beliebig viele Argumente übergeben werden. `print` wandelt diese automatisch in Text um.

```py live_py slim
print('Hello World')

print('Hello', 'World')

print('Hello, i am', 16 'years old')
```
