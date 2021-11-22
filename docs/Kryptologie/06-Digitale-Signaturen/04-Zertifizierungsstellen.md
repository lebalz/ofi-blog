---
title: Zertifizierungsstellen
---

import Answer from '@site/src/components/Answer'

# Zertifizierungsstellen [^1]

## Übertragung öffentlicher Schlüssel
Öffentliche Schlüssel enthalten keine geheime Information, können also problemlos über einen offenen Kanal übertragen werden. Oder?

![Angriff auf den öffentlichen Schlüssel](images/public-key-attack-1.svg)

:::aufgabe Aufgabe Angriff auf den öffentlichen Schlüssel
Alice schickt ihren öffentlichen Schlüssel (also ihr Vorhängeschloss) per Post an Bob. Überlege dir, was der bösartige Mallory anstellen könnte, um Alice und Bob zu überlisten.

<Answer type="text" webKey="5b4c5a94-b1fc-4dd6-9c99-65c907b258d4" />
:::

## Schutz gegen Man-in-the-Middle-Attacken
Wie können wir uns vor Man-in-the-Middle-Attacken schützen? Kann uns Trent helfen?


![Die Rolle von Trent](images/certificates-task.svg)

:::aufgabe Aufgabe Zertifizierungsstellen
Wie könnte Trent dafür sorgen, dass die öffentlichen Schlüssel besser überprüfbar sind?

<Answer type="text" webKey="a2ef63f4-8f01-4e78-8135-1eb43e4a09ed" />
:::



[^1]: Quelle: [rothe.io](https://rothe.io/?b=crypto&p=848484)
