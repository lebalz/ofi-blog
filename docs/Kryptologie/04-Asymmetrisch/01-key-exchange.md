---
sidebar_custom_props:
  id: 33e2009c-39fe-4689-9a7b-eaafc11a8970
  source:
    name: rothe.io
    ref: https://rothe.io/?b=crypto&p=280524
---

# Schlüsselaustausch

Alice und Bob möchten sich geheime Unterlagen senden. Doch wie können sie den Schlüssel austauschen?

![Schlüsselaustausch](images/key-exchange.svg)



Vielleicht hilft es, wenn wir uns in Erinnerung rufen, dass im Handel mehrere Schlösser mit unterschiedlichen Schlüsseln zu kaufen sind:

![Schlüsselaustausch](images/key-exchange-2.svg)

::::aufgabe[Schlüsselaustausch]
<Answer type="state" webKey="991ccdea-6925-4830-92cc-1cade6c5feac" />

Finden Sie eine Möglichkeit, den Inhalt der Truhe sicher zu übertragen?

Versetzen Sie sich dabei in die Rollen der anderen Krypto-Charaktere!

<Answer type="text" webKey="fea4de63-dc0a-4000-8432-c6d676b8443a" />

:::details[Hinweis: Variante 1]

#### Variante 1: Eigene Schlösser Verteilen

![](images/asymm-encryption-1.svg)

Können Sie sich zusammenreimen, wie die geheimen Unterlagen versendet werden? Wo liegen allenfalls Probleme?
<Answer type="text" webKey="6157d510-a401-4cae-aef5-d1eb1e8be55d" />


<Solution webKey="c4a8c0b0-60ce-4a3d-9b12-1145bdf8d9f7">

Alice erstellt einen Schlüssel für die private Kommunikation (= __Sitzungsschlüssel__). Diesen Schlüssel muss sie an Bob weitergeben. Dazu legt sie ihn in die Truhe und verschliesst diese mit dem eigenen Schloss, um ungewollten Zugriff zu unterbinden. So verschlossen schickt sie die Truhe an Bob. Auch er kann sie nicht öffnen. Daher fügt er noch sein Schloss hinzu und sendet die Truhe zurück. Nun kann Alice ihr Schloss entfernen und die Truhe ein letztes Mal schicken und nachdem Bob sein eigenes Schloss entfernt hat, kann er den Inhalt (also den Sitzungsschlüssel)  sehen.

Dass es sich um Alices Schloss handelt, kann Bob glauben, da die Absenderin die Informationen ja sicher nicht offen transportieren würde.

**Problem**: Wie weiss Alice, dass es sich um Bobs Schloss handelt? Jemand unterwegs könnte das Schloss austauschen.
</Solution>

:::

:::details[Hinweis: Variante 2]

#### Variante 2: Eigene Schlösser Verteilen

![](images/asymm-encryption-2.svg)

Wie können die Unterlagen sicher zugestellt werden? Wo liegen allenfalls Probleme?

<Answer type="text" webKey="71166ff0-e7d6-4ff9-ab7c-a8695b004818" />

<Solution webKey="2a2f7b2c-8504-4949-9a4b-dbee089b50d9">

Bob könnte Alice das eigene, offene Schloss senden, mit dem Alice anschliessend die Truhe verschliesst.

**Problem**: Wie weiss Alice, dass es sich um Bobs Schloss handelt? Jemand unterwegs könnte das Schloss austauschen.

</Solution>

:::

:::details[Hinweis: Variante 3]

#### Variante 3: Schlösser beim vertrauenswürdigen Trent beziehen

![](images/asymm-encryption-3.svg)

Wie können die Unterlagen sicher zugestellt werden? Wo liegen allenfalls Probleme?

<Answer type="text" webKey="caf33c6d-2642-40cd-99d1-74fca9959cf1" />

<Solution webKey="f1d91c40-a4ad-4d22-8fb1-4e0662259acc">

#### Variante 3:

Hier handelt es sich eigentlich um die zweite, einfache Variante mit nur einer Sendung. Allerdings erhält Alice das Schloss nicht von Bob, sondern von einer vertrauenswürdigen Dritten Stelle (Trent). Trent hat eine ganze Sammlung von Schlössern – natürlich nicht nur von Bob, sondern von ganz vielen Leuten. So können alle, die Trent vertrauen, dort Schlösser abholen.

</Solution>

:::

::::