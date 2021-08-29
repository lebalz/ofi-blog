---
title: Routing im Alltag
---

import Answer from "@site/src/components/Answer";
import Finding from "@site/src/components/Finding";
import TabItem from '@theme/TabItem';
import OsTabs from '@site/src/components/OsTabs';

# Routing im Alltag [^1]

:::danger Vorgehensweise

Lesen Sie sich selbständig durch dieses Kapitel durch, wobei Sie

- die Aufgaben lösen und die Ergebnisse notieren
- vor jedem «gewonnene Erkenntnisse» überlegen Sie kurz, was eine gewonnene Erkenntnis sein könnte – und zwar bevor Sie das Kästchen aufklappen
- lesen Sie die «gewonnenen Erkenntnisse» durch und überlegen Sie sich, was damit genau gemeint ist
- falls Sie eine Frage haben oder eine Erkenntnis notiert haben, die nicht aufgelistet wird, dann halten Sie diese fest, damit wir am Schluss darüber sprechen können

:::

Wir befinden uns auf der [Vermittlungs-Schicht](../001-Schichtenmodell/2-Vermittlungsschicht.md): Hier werden IP-Pakete vom Start- zum Zielgerät übertragen. Bei ihrem Weg durch das Internet müssen die Pakete geleitet werden – man spricht von **Routing**.

## Verkehrsbetriebe Biel

Durch das Verkehrsnetz der Verkehrsbetriebe Biel wird der öffentliche Verkehr in der Stadt Biel sichergestellt.

![](images/vb-verkehrsnetz.png)

Sie möchten mit dem ÖV vom Gymnasium (Ländtestrasse 12, Biel/Bienne) zum Sportplatz Mettmoos fahren.

:::aufgabe Mit dem Netzplan

Welche Möglichkeiten sehen Sie auf dem Liniennetz?
<Answer type="text" id="q1"/>
:::

:::aufgabe 💻 mit Google Maps
Welchen Transportoptionen schlägt Ihnen [Google Maps](https://www.google.com/maps/dir/Gymnasium+Biel-Seeland,+L%C3%A4ndtestrasse+12,+2503+Biel/Sports+Ground+Mettmoos,+Parkplatz+Mettmoos,+2504+Biel/@47.1389934,7.2384864,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478e195743e2cd43:0x7eeeab7e9cc7fa72!2m2!1d7.2359916!2d47.1334096!1m5!1m1!1s0x478e192b26b851e1:0x5e85058550f44003!2m2!1d7.2756948!2d47.1390779!3e3) vor, wenn Sie die Route _Ländtestrasse 12_ → *Sportplatz Mettmoos* suchen?

- Welche Optionen werden vorgeschlagen?
- Welches ist gemäss Google die beste Route?
- Ändert sich die Route, wenn sie möglichst kurze Fusswege enthalten soll? (Einstellbar unter _Routenoptionen_)
- Ändert sich der Reisevorschlag, wenn Sie spät in der Nacht eine Verbindung suchen?

<Answer type="text" id="q2"/>

:::

<Finding>

- Es gibt mehrere Wege, welche ans Ziel führen.
- Der optimale Weg ist abhängig von den Rahmenbedingungen und kann sich **ändern**.

</Finding>

## gefundene Analogien

<div className="no-table-header">

|              <!-- --> | <!-- -->                                                            |
| --------------------: | :------------------------------------------------------------------ |
|              **WLAN** | zu Fuss bis zur nächsten Haltestelle                                |
|   **Sichtbare WLANs** | Haltestellen, die zu Fuss erreichbar sind: Bahnhof & Badhausstrasse |
| **Rechnernetz (LAN)** | mit Bus (für weiter entfernte Ziele: Tram, Zug, ...)                |
|            **Router** | Umsteigen an gewissen Haltestellen                                  |

</div>

## Routing für Touristen
Datenpakete sind – anders als wir als Passagiere vom *ÖV* – nicht intelligent. Sie wissen nicht, wie sie umsteigen müssen. Dies muss für sie übernommen werden.

Ein Datenpaket im ÖV vom Gymer zum Sportplatz Mettmoos müsste
- an jeder Haltestelle wissen:
  - ob es aussteigen oder umsteigen muss
  - in welchen Bus es einsteigen muss
  - ob es am Ziel angekommen ist.

- an jeder Strassenkreuzung (wenn zu Fuss unterwegs) wissen:
  - welche Abzweigung es nehmen soll
  - ob es am Ziel angekommen ist.

:::aufgabe Routing-Tabelle

Erstellen Sie für das Ziel "Sportplatz Mettmoos" Umsteige-Anleitungen für die folgenden Haltestellen:

- Seehofweg
- Bahnhof Biel
- Mühlestrasse/Moulin
- Schulen Linde
- Bahnhof Mett

Beispiel-Anleitung: **Bahnhof Biel** → in Bus Nr. 1 Richtung *Löhre/Mauchamp* einsteigen

<Answer type="text" id="q3"/>

:::


:::aufgabe Andere Ziele

Die Anleitungen müssten natürlich auch Anweisungen haben für andere Ziele.

- Wie würden die Umsteigungsanweisungen für die 5 obenstehenden Haltestellen für das Ziel "Bern" lauten?
- Wie für das Ziel "Zürich"?
- Muss jede Haltestelle wirklich Anweisungen für jedes andere Ziel haben?

<Answer type="text" id="q4"/>

:::


<Finding>

Es können Anweisungen "delegiert" werden: Es muss nur der *Bahnhof Biel* wissen, in welchen Zug man einsteigen muss um nach Bern oder Zürich zu fahren. Die anderen Haltestellen leiten alle Anfragen ausserhalb des Biel-Netzes an den *Bahnhof Biel* weiter.

</Finding>

## Ausfall Schienennetz

> Wegen Umbauarbeiten fällt die Linie Nr. 9 ab "Brühlplatz" aus. Welche Möglichkeiten haben Sie, wenn Sie beim *Seehofweg* eingestiegen sind, um doch an den Sportplatz zu gelangen?


<Finding>

Es gibt verschiedene Wege zum Ziel - auch nicht optimale Wege, die normalerweise nicht benutzt werden. Diese Optionen ermöglichen aber eine gewisse **Ausfallsicherheit**. Im Beispiel oben können Sie entweder beim Bahnhof Biel oder beim Brühlplatz auf eine andere Verbindung umsteigen. 

</Finding>

## Grosse Gruppe

> 4 Parallelklassen – also ca. 100 Personen haben beim Sportplatz Mettmoos.
> Wie kommen sie am schnellsten dahin, wenn wir damit rechnen, dass wegen Corona und dem Feierabendverkehr maximal 25 Personen pro Bus Platz finden?


<Finding>

Bei Engpässen können verschiedene Wege gleichzeitig benutzt werden. (Load-Balancing)

</Finding>

[^1]: Quelle: [informatik.mygymer.ch](https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/05.routing.html)