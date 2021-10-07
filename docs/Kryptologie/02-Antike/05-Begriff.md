---
title: Begriffe
---

import Answer from "@site/src/components/Answer";

# Begriffe

## Kryptologie

Der Begriff **Kryptologie** setzt sich zusammen aus dem altgriechischen _κρυπτός_ (also _kryptós_), was **verborgen** bedeutet, und _λόγος_ (also _lógos_), was **Lehre**, **Kunde** bedeutet. Kryptologie bezeichnet die Wissenschaft, die sich mit der Ver- und Entschlüsselung von Informationen (also mit **Informationssicherheit**) beschäftigt.

![Kryptologie, Kryptographie und Kryptoanalyse](images/cryptology.svg)

## Kryptographie und Kryptoanalyse

Die Kryptologie kann grob in zwei Teilbereiche unterteilt werden:

- die Kryptographie (_γράφειν_, also _gráphein_, was **schreiben** bedeutet) und
- die **Kryptoanalyse**.

Während sich die Kryptographie mit dem Finden von sicheren Verschlüsselungsverfahren beschäftigt, liegt der Fokus der Kryptoanalyse beim «Brechen» oder «Knacken» solcher Verfahren.

## Klartext, Geheimtext und Schlüssel

| Symbol | deutscher Begriff | englischer Begriff | Bedeutung                                                                                       |
| :----: | :---------------- | :----------------- | :---------------------------------------------------------------------------------------------- |
|  $p$   | **Klartext**      | _plaintext_        | unverschlüsselte Nachricht                                                                      |
|  $c$   | **Geheimtext**    | _ciphertext_       | verschlüsselte Nachricht                                                                        |
|  $k$   | **Schlüssel**     | _key_              | Information, welche benötigt wird, um den Klartext zu ver- bzw. den Geheimtext zu entschlüsseln |


## Verschlüsselungsverfahren
Ein **Verschlüsselungsverfahren** ist ein Algorithmus, welcher einen Klartext unter Verwendung eines Schlüssels in einen Geheimtext überführt oder umgekehrt.

![Zusammenhang zwischen Klartext, Geheimtext und Schlüssel](images/symmetric-cryptosystem.svg)

## Schlüsselraum
Der Begriff *Schlüsselraum* bezeichnet die Anzahl möglicher Schlüssel für ein bestimmtes Verschlüsselungsverfahren. Die Sicherheit eines Verschlüsselungsverfahrens hängt stark von der Grösse des Schlüsselraums ab.

Die Grösse des Schlüsselraums wird in bit (d.h. als binärer Logarithmus) angegeben. Bei zwei möglichen Schlüsseln ($=2^1$) spricht man von 1 bit, bei 1024 möglichen Schlüsseln ($=2^{10}$) von 10 bit.

:::aufgabe Schlüsselräume
Geben Sie die Grösse des Schlüsselraumes für die folgenden Verschlüsselungsverfahren an:


#### Skytale
<Answer type="text" id="q1"></Answer>

#### Caesar
<Answer type="text" id="q2"></Answer>

#### ROT13
<Answer type="text" id="q3"></Answer>

#### Substitution
allgemeine monoalphabetische Substitution
<Answer type="text" id="q4"></Answer>


:::

---

[^1]: Quelle: [rothe.io](https://rothe.io/?b=crypto&p=796759)
