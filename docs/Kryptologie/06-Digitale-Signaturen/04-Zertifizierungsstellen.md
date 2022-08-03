---
title: Zertifizierungsstellen
sidebar_custom_props:
  id: 2697eeca-a55f-4e22-8af6-6437297cc1cd
---


# Zertifizierungsstellen [^1]

## Übertragung öffentlicher Schlüssel
Öffentliche Schlüssel enthalten keine geheime Information, können also problemlos über einen offenen Kanal übertragen werden. Oder?

![Angriff auf den öffentlichen Schlüssel](images/public-key-attack-1.svg)

:::aufgabe Aufgabe Angriff auf den öffentlichen Schlüssel
Alice schickt ihren öffentlichen Schlüssel (also ihr Vorhängeschloss) per Post an Bob. Überlege dir, was der bösartige Mallory anstellen könnte, um Alice und Bob zu überlisten.

<Answer type="text" webKey="5b4c5a94-b1fc-4dd6-9c99-65c907b258d4" />
<Solution webKey="c6892ee0-018c-498f-9bbd-185f0e3038d2">

Da der öffentliche Schlüssel nur aus Zahlen besteht, ist es für Bob nicht erkennbar, ob er den richtigen Schlüssel erhalten hat.

![Man-in-the-middle-Attacke](images/public-key-attack-2.svg)
</Solution>
:::

## Schutz gegen Man-in-the-Middle-Attacken
Wie können wir uns vor Man-in-the-Middle-Attacken schützen? Kann uns Trent helfen?


![Die Rolle von Trent](images/certificates-task.svg)

:::aufgabe Aufgabe Zertifizierungsstellen
Wie könnte Trent dafür sorgen, dass die öffentlichen Schlüssel besser überprüfbar sind?

<Answer type="text" webKey="a2ef63f4-8f01-4e78-8135-1eb43e4a09ed" />

<Solution webKey="c6892ee0-018c-498f-9bbd-185f0e3038d2">

Trent ist bekannt und akzeptiert als Zertifizierungsstelle, alle kennen seinen öffentlichen Schlüssel. Wenn Trent die Kunden gut überprüft und deren **öffentliche Schlüssel** (⚠️ die privaten Schlüssel der Kunden kennt auch Trent nicht!) signiert, kann Bob sicher sein, den richtigen Schlüssel zu verwenden. Er akzeptiert folglich keine unsignierten Schlüssel mehr.

![Schutz vor Man-in-the-Middle-Attacken](images/certificates.svg)

</Solution>
:::

## Wieso kann sich Mallory nicht zwischen Trent und Bob einschleichen?

Da im Internet nicht offensichtlich ist, mit wem man kommuniziert, könnte sich Mallory als Alice ausgeben. Trent wird nur benötigt, um eine Absicherung zu erhalten, dass Alice's öffentlicher Schlüssel auch wirklich ihr gehört. Bei der Übermittlung des öffentlichen Schlüssels wird HTTPS verwendet, so dass sich Mallory nicht dazwischenschleichen kann. Auch Alice und Bob könnten HTTPS verwenden, doch dann weiss Bob immer noch nicht, ob er nicht fälschlicherweise eine Verbindung mit Mallory statt Alice aufgebaut hat...

Das Aufbauen einer HTTPS Verbindung verwendet übrigens auch die Integritätsprüfung. Durch eine signierte Nachricht wird die IP Adresse des Servers überprüft. Aufgrund der Signatur kann die Nachricht nicht von Mallory stammen. Anschliessend wird gemäss dem Farbmischprinzip ein gemeinsamer Sitzungsschlüssel für die Verschlüsselung der Verbindung erzeugt. So ist es für Mallory unmöglich, sich zwischen Trent und Bob zu stellen - sofern Bob die richtige IP-Adresse zu Trent besitzt.

[^1]: Quelle: [rothe.io](https://rothe.io/?b=crypto&p=848484)
