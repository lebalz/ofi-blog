---
sidebar_custom_props:
  id: 4d1e2574-f77e-450b-babc-315b87aae00f
  source:
    name: rothe.io
    ref: https://rothe.io/?b=crypto&p=4464
---

# Umwandlung ins Binärsystem
In diesem Kapitel dringen wir in unsere Zeit vor. Wir verwenden Computer, die mit binären Zahlen arbeiten. Somit muss der Klartext vor der Verschlüsselung in binäre Zahlen umgewandelt werden.

## Prozess der Verschlüsselung
Das Verfahren wird etwas umständlicher, da jeweils in die binäre Computersprache übersetzt werden muss:
1. Der Geheimtext wird in eine Folge von binären Zahlen codiert (Klartext → binärer Klartext)
2. Verschlüsselung dieser Zahlenfolge (binärer Klartext → binärer Geheimtext)
3. ... (Versand, Abspeichern, ...)
4. Decodierung des binären Geheimtextes (binärer Geheimtext → Geheimtext)

:::info[Unterschied «Codierung» und «Verschlüsselung»]
Es ist wichtig, dass die Begriffe **Codierung** und **Verschlüsselung** unterschieden werden:

Codierung
: Eine **Codierung** ist eine Umwandlung in eine andere Darstellungsform (z.B. Text → Zahlen, Bild → Text, Zahlen → binäre Zahlen, ...). Eine Codierung hat das **Ziel**, eine Information in ein bestimmtes **Datenformat umzuwandeln**, sie bietet **keine Sicherheit**.

Verschlüsselung
: Eine **Verschlüsselung** oder *Chiffre* hat das Ziel zu **verhindern**, dass Aussenstehende an eine bestimmte **Information gelangen**, indem Daten mithilfe eines Schlüssels so verändert werden, dass ohne Kenntnis des Schlüssels nicht mehr auf die ursprüngliche Form geschlossen werden kann.
:::

## Ein grosser Vorteil
Die vorgängige Codierung bedeutet zwar beim Erarbeiten einen Mehraufwand, bietet jedoch einen erheblichen Vorteil: Alles, was sich in binärer Form darstellen lässt, kann ohne weitere Anpassung des Verfahrens verschlüsselt werden!

- Texte (unabhängig von der Sprache resp. den verwendeten Schriftzeichen)
- Bilder
- Ton
- Videos

Dies war in der Antike nicht nötig, heute ist es allerdings unumgänglich.

## Codierung
Wie im Kapitel «Codes und Daten» besprochen, gibt es dazu eine Vielzahl von Codierungen. Beispielsweise könnte dazu die ASCII-Codierung oder die UTF-8 Codierung verwendet werden.

Für die folgenden Beispiele verwenden wir den etwas kürzeren Pentacode.



