---
title: 7. Hauptplatine
---

import Answer from '@site/src/components/Answer'

# 7. Hauptplatine

Der Grundbestandteil eines jeden Computers ist seine Hauptplatine (engl. *mainbaord* oder auch *motherboard* genannt). Die Elektronik auf der Hauptplatine verbindet Prozessor, RAM, etliche weitere verbaute Chips und sämtliche Peripherie, die über die zahlreichen Anschlüssen mit dem Computer verbunden werden kann.

![ASRock Mainboard](images/07-mainboard.jpg)


## Aufbau

Hauptplatinen von modernen Computern sind stets ähnlich aufgebaut, sie bestehen aus den beiden wichtigen Komponenten **Northbridge** und **Southbridge**, die gemeinsam als **Chipsatz** bezeichnet werden.

Im nachfolgenden Schema sieht man gut, dass über die Northbridge diejenigen Computerkomponenten verbunden sind, die besonders schnell miteinander kommunizieren müssen: Prozessor, RAM und allenfalls schnelle Grafikkarten.

Über die Southbridge werden die restlichen Komponenten verbunden, so zum Beispiel Festplatten, Erweiterungskarten (wie z.B. Grafik- oder Netzwerkkarten) und das BIOS (*basic input and output system*).

![Schema einer Hauptplatine](images/07-mainboard-diagram.svg)

In modernen Systemen wird die Northbridge oft auch direkt im Prozessor integriert, zudem enthält die Southbridge meist einen Netzwerk- und Grafikkontroller, so dass die grundlegende Ausgabe- und Netzwerkfunktionalität bereits gegeben ist. 

:::aufgabe Aufgabe Hauptplatine
1. Betrachten Sie das ASRock Mainboard. Wo werden die folgenden Komponenten eingesteckt?
   - Prozessor
   - RAM
   - Festplatten
   - allenfalls benötigte zusätzliche Grafik- und Netzwerkkarten
2. Wie wird die Hauptplatine mit Strom versorgt?
3. Welche externen Anschlüsse (für Peripherie wie Bildschirm, Maus, ...) gibt es auf dieser Hauptplatine?
4. Finden Sie auf dem ASRock Mainboard die North- und die Southbridge. Womit werden die beiden Chips verdeckt? Begründen Sie!

<Answer type="text" webKey="b13a6003-0e80-48b2-af80-5f6965c3bf26" />
:::


## BIOS

Beim Starten des Computers wird als erstes das BIOS (engl. *basic input and output system*) aktiv. Das BIOS erkennt und überprüft die vorhandene Hardware und sorgt dafür, dass ein Betriebssystem gestartet werden kann. Basierend auf der gespeicherten Konfiguration entscheidet das BIOS, welcher Datenträger als Grundlage für den Startvorgang dient. Dies ist in der Regel eine eingebaute Festplatte, kann aber auch eine CD/DVD oder ein USB-Stick sein.

Um die BIOS-Konfiguration zu ändern, muss kurz nach dem Start eine bestimmte Taste gedrückt werden. In der Regel wird dies kurz auf dem Bildschirm eingeblendet. Die häufigsten Tasten sind: `F1`, `F2`, `Del` oder `Enter`, bei Mac sind es die Wahltaste (`⌥`) oder `Alt`.

:::info Windows Schnellstart
Da heutige Laptops die vorhandene Hardware bereits in Sekundenbruchteilen überprüft hat, oder für einen schnelleren Start bei einem sog. "Fastboot" nicht alle Komponenten neu überprüft, bleibt zu wenig Zeit um die richtige Taste zu drücken. Um dennoch ins BIOS zu kommen, muss der Computer speziell über den "Erweiterten Start" neu gestartet werden. Dann gelangt man automatisch ins BIOS:

https://www.pc-magazin.de/ratgeber/bios-uefi-starten-windows-10-3201227.html
:::

Je nach Konfiguration muss noch ein Passwort eingegeben werden, bevor die BIOS-Einstellungen angezeigt oder verändert werden können.

Es gibt verschiedene BIOS-Hersteller. Die Oberfläche ist sehr schlicht und einfach gestaltet. Man navigiert mit den **Pfeiltasten**, wählt mit `Enter` einen Eintrag aus und beendet ein Menü mit Hilfe von `Esc`. Nachfolgend zwei Beispiele:

:::cards --columns=2
![AMI BIOS](images/07-bios-ami.jpg)
***
![Award BIOS](images/07-bios-award.png)
:::

:::success UEFI
Der grafisch aufgepeppte Nachfolger von BIOS ist **UEFI** (*Unified Extensible Firmware Interface*). Es kann im Gegensatz zum BIOS auch per Maus gesteuert werden, erfüllt aber dieselbe Aufgabe wie das oben beschriebene BIOS.
:::