---
sidebar_custom_props:
  id: fa2db39b-bea9-4c76-a037-4a5d0c6d1ffa
  source:
    name: rothe.io
    ref: https://rothe.io/?b=crypto&p=254616
---


# Vignère-Chiffre

Die Vigenère-Chiffre wurde vom Franzosen Blaise de Vigenère (1523-1596) erfunden und galt fast 300 Jahre lang als unknackbar. Es handelt sich um ein polyalphabetisches Verschlüsselungsverfahren, da mehrere Alphabete genutzt werden. Als Schlüssel dient ein Wort, das die Anzahl der verwendeten Substitutions-Alphabete bestimmt: Für jeden Buchstaben des Schlüsselwortes wird die Caesar-Chiffre mit dem jeweiligen Buchstaben als Schlüssel verwendet. Die Buchstaben des Klartextes werden abwechslungsweise durch diese Caesar-Chiffren verschlüsselt.

![Vignère-Verschlüsselung](images/vignere.png)

:::aufgabe
Verschlüsseln Sie den Text `RUDERN AUF DEM SEE` mit der Vigenère-Chiffre. Verwenden Sie dazu den Schlüssel `GBSL`.

<Answer type="string" webKey="f0ae0e40-3e5d-40b2-9e3d-fd0607990eb4" sanitizer={(val) => val.toUpperCase().trim()} solution="XVVPXO SFL EWX YFW"/>

:::


