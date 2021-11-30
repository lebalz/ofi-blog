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

## Wieso kann sich Mallory nicht zwischen Trent und Bob einschleichen?

Da im Internet nicht offensichtlich ist, mit wem man kommuniziert, könnte sich Mallory als Alice ausgeben. Trent wird nur benötigt, um eine Absicherung zu erhalten, dass Alice's öffentlicher Schlüssel auch wirklich ihr gehört. Bei der Übermittlung des öffentlichen Schlüssels wird HTTPS verwendet, so dass sich Mallory nicht dazwischenschleichen kann. Auch Alice und Bob könnten HTTPS verwenden, doch dann weiss Bob immer noch nicht, ob er nicht fälschlicherweise eine Verbindung mit Mallory statt Alice aufgebaut hat...

Das Aufbauen einer HTTPS Verbindung verwendet übrigens auch die Integritätsprüfung. Durch eine signierte Nachricht wird die IP Adresse des Servers überprüft. Aufgrund der Signatur kann die Nachricht nicht von Mallory stammen. Anschliessend wird gemäss dem Farbmischprinzip ein gemeinsamer Sitzungsschlüssel für die Verschlüsselung der Verbindung erzeugt. So ist es für Mallory unmöglich, sich zwischen Trent und Bob zu stellen - sofern Bob die richtige IP-Adresse zu Trent besitzt.

[^1]: Quelle: [rothe.io](https://rothe.io/?b=crypto&p=848484)
