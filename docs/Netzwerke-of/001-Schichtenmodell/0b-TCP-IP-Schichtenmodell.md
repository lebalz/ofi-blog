---
sidebar_position: 2
sidebar_custom_props:
  id: 9726251e-e342-4338-bc44-0727f1941ae2
  source:
    name: mygymer.ch
    ref: https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/02.tcp-ip.html
---

import Stack from '@site/src/components/VisualizationTools/TCP_IP_Stack'

# TCP/IP-Schichtenmodell

<Answer type="state" webKey="ca2e69ab-8efb-4e57-b235-c4c564cab7f5">
Gelesen?
</Answer>

Genauso wie die Pakete im Beispiel übermittelt werden, geschieht dies auch am Computer – hier sprechen wir von Datenpaketen.

Die oberen Schichten verwenden Dienste der unteren Schichten.
Jede Schicht verpackt die Daten neu, wenn sie von der darüberliegenden Schicht übergeben werden und entpackt sie wieder beim Empfangen bevor sie wieder an die darüberliegende Schicht übergeben werden
Jede Schicht hat einen bestimmten Auftrag.

<Stack />

## Die Analogie

Wenn wir im obigen Beispiel die Schichten ansehen, dann ist jede Schicht für einen bestimmten Schritt zuständig.

![](./img/0b-schichtenmodell-analogie.png)



