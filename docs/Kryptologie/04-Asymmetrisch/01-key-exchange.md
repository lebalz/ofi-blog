---
title: Schlüsselaustausch
---

import Answer from '@site/src/components/Answer'
import Solution from '@site/src/components/Solution'

# Schlüsselaustausch [^1]

Alice und Bob möchten sich geheime Unterlagen senden. Doch wie können sie den Schlüssel austauschen?

![Schlüsselaustausch](images/key-exchange.svg)



Vielleicht hilft es, wenn wir uns in Erinnerung rufen, dass im Handel mehrere Schlösser mit unterschiedlichen Schlüsseln zu kaufen sind:

![Schlüsselaustausch](images/key-exchange-2.svg)

:::aufgabe Schlüsselaustausch
- Finden Sie eine Möglichkeit, den Inhalt der Truhe sicher zu übertragen?

Versetzen Sie sich dabei in die Rollen der anderen Krypto-Charaktere!

<Answer type="text" webKey="fea4de63-dc0a-4000-8432-c6d676b8443a" />

<details><summary>Hinweis: Variante 1</summary>

#### Variante 1: Eigene Schlösser Verteilen

![](images/asymm-encryption-1.svg)

Können Sie sich zusammenreimen, wie die geheimen Unterlagen versendet werden? Wo liegen allenfalls Probleme?
<Answer type="text" webKey="6157d510-a401-4cae-aef5-d1eb1e8be55d" />


<Solution webKey="c4a8c0b0-60ce-4a3d-9b12-1145bdf8d9f7">

Alice verschliesst die Truhe mit dem eigenen Schloss, um ungewollten Zugriff zu unterbinden. So verschlossen schickt sie die Truhe an Bob. Auch er kann sie nicht öffnen. Daher fügt er noch sein Schloss hinzu und sendet die Truhe zurück. Nun kann Alice ihr Schloss entfernen und die Truhe ein letztes Mal schicken und nachdem Bob sein eigenes Schloss entfernt hat, kann er den Inhalt sehen.

Dass es sich um Alices Schloss handelt, kann Bob glauben, da die Absenderin die Informationen ja sicher nicht offen transportieren würde.

**Problem**: Wie weiss Alice, dass es sich um Bobs Schloss handelt? Jemand unterwegs könnte das Schloss austauschen.
</Solution>
</details>

<details><summary>Hinweis: Variante 2</summary>

#### Variante 2: Eigene Schlösser Verteilen

![](images/asymm-encryption-2.svg)

Wie können die Unterlagen sicher zugestellt werden? Wo liegen allenfalls Probleme?

<Answer type="text" webKey="71166ff0-e7d6-4ff9-ab7c-a8695b004818" />

<Solution webKey="c4a8c0b0-60ce-4a3d-9b12-1145bdf8d9f7">

Bob könnte Alice das eigene Schloss senden, mit dem Alice anschliessend die Truhe verschliesst.

**Problem**: Wie weiss Alice, dass es sich um Bobs Schloss handelt? Jemand unterwegs könnte das Schloss austauschen.

</Solution>

</details>

<details><summary>Hinweis: Variante 3</summary>

#### Variante 3: Schlösser beim vertrauenswürdigen Trent beziehen

![](images/asymm-encryption-3.svg)

Wie können die Unterlagen sicher zugestellt werden? Wo liegen allenfalls Probleme?

<Answer type="text" webKey="caf33c6d-2642-40cd-99d1-74fca9959cf1" />

<Solution webKey="c4a8c0b0-60ce-4a3d-9b12-1145bdf8d9f7">

#### Variante 3:

Hier handelt es sich eigentlich um die erste, einfache Variante mit nur einer Sendung. Allerdings erhält Alice das Schloss nicht von Bob, sondern von einer vertrauenswürdigen Dritten Stelle (Trent). Trent hat eine ganze Sammlung von Schlössern – natürlich nicht nur von Bob, sondern von ganz vielen Leuten. So können alle, die Trent vertrauen, dort Schlösser abholen.

</Solution>

</details>

:::

[^1]: Quelle: [rothe.io](https://rothe.io/?b=crypto&p=280524)
