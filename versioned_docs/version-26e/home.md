---
sidebar_position: 0.1
sidebar_label: 26e
sidebar_custom_props:
  id: b690a135-2569-4a4c-80cf-a9fbf3833b3c
---

import Table from "@site/src/components/Table";
import {SortTimeTableByDate} from '@site/src/helpers/time';
import hs2022 from "./26e_HS2022.json"
import fs2023 from "./26e_FS2023.json"
import hk2022 from "./26e-HK_HS2022.json"
import hs2023 from "./26e_HS2023.json"
import fs2024 from "./26e_FS2024.json"

# 26e Informatik

:::::note[Prüfung]
Dauer
: 90 Minuten
Form
: Schriftlich auf Papier
Hilfsmittel
: Taschenrechner (nicht programmierbar)
: 1 A4 Blatt (**Handgeschrieben**, beidseitig beschrieben. Kopierte oder ausgedruckte Notizblätter (bspw. von OneNote ausgedruckt) sind nicht erlaubt und werden vor der Prüfung eingesammelt.)

:::info[Lernziele Netzwerke]
- Sie kennen das Prinzip sowie die Vorteile eines Schichten-Modells und können dies in eigenen Worten erklären
- Sie kennen die vier Schichten des *TCP/IP-Schichtenmodells* und deren Reihenfolge
- Sie wissen was die Funktion von Protokollen ist und können zwei Netzwerkprotokolle aufzählen
- Sie wissen was ein Protokoll ist und können auf jeder Schicht (ausser der physikalischen Schicht) die konzeptuelle Funktionsweise folgender Protokolle beschreiben: HTTP/HTTPS, TCP/UDP, IP.
- Sie kennen die Unterschiede zwischen HTTP und HTTPS sowie zwischen TCP und UDP.
- Sie können in je einem Satz erklären, was die Aufgabe jeder einzelnen TCP/IP-Schicht ist
- Sie können die Begriffe Server, Client, Host, Rechnernetz und Internet kurz erklären
- Sie kennen die Funktionsweise eines Routers und wissen was der Standardgateway ist
- Sie kennen die Funktionsweise von DNS und können am Computer Hostnamen in IP-Adressen umwandeln (und umgekehrt)
- Sie wissen, was eine MAC-Adresse ist und wie sich diese von einer IP-Adresse unterscheidet
- Sie können erklären, weshalb ein Router zwei Netzwerkkarten hat und wissen, welche Tabellen ein Router führt, um Nachrichten weiterzuleiten
- Sie können Domain-Namen in ihrer Hierarchischen Struktur zerlegen und Einordnen (Baumstruktur, Top-Level-Domain, Second-Level-Domain, Sub-Domain)
- Sie können für ein kleines Netzwerk die statischen Routing-Tabellen inkl. der Standardrouten eintragen
- Sie können das Konzept des dynamischen Routings in eigenen Worten erklären
- Sie wissen Bescheid über die praktischen Übungen im Unterricht (bspw. `ping` und `tracert`) und können Vorgehen und Ergebnisse wiedergeben
- Sie können anhand eines Beispiels erklären, wie NAT (Network Address Translation) funktioniert und dadurch private und öffentliche Netzwerke verbunden werden
- Sie können die Funktionsweise des TTL-Headers bei Nachrichten im Internet beschreiben und deren Notwendigkeit begründen
- Auch Inhalte von den Übungsblättern und den Powerpoint-Präsentationen sind prüfungsrelevant
:::

::::info[Lernziele Kryptologie]
:::note[Verschlüsselungsverfahren]
- Sie verstehen das Prinzip symmetrischer Verschlüsselungsverfahren und verwenden das Wissen in Beispielen mit antiken Verfahren an.
- Sie knacken antike symmetrische Verfahren (Häufigkeitsanalysen, Brute Force, ...).
- Sie wissen, wie der ECB und CBC Modus funktionieren und können diese exemplarisch mit XOR als Verschlüsselungsalgorithums anwenden.
- Sie kennen das Prinzip von Kerckhoffs und können nachvollziehen, wieso es sinnvoll ist, die Funktionsweise von Algorithmen nicht geheimzuhalten (*Security through Obscurity*).
- Sie wissen, dass moderne symmetrische Verfahren mit Bitfolgen anstelle von Buchstaben arbeiten und mathematisch viel komplexer sind.
- Sie erkennen das Problem des Schlüsselaustauschs bei symmetrischen Verfahren.
- Sie kennen **Man-in-the-Middle-Angriffe** und verstehen, dass auch öffentliche Schlüssel auf ihre Echtheit überprüft werden müssen.
- Sie begreifen **asymmetrische** Verfahren mit ihren Schlüsselpaaren als Hilfsmittel für einen sicheren Austausch (z.B. Vorhängeschloss/Schlüssel-Analogie oder die asymmetrischen Schlüssel-Boxen).
- Sie verstehen, dass asymmetrische Verfahren **umgekehrt** werden können und damit sowohl die Integrität (es wurde nichts verändert) wie auch die Authentizität (die Absender\:in kann verifiziert werden) gewährtleistet werden können. (Verschlüsselungsboxen mit mehreren öffentlichen Schlüsseln und nur jeweils einem privaten Schlüssel)
:::

:::note[Hashfunktionen]
- Sie wissen, dass Passwörter nicht im Klartext gespeichert werden.
- Sie kennen die Zielsetzung und die Funktionsweise von Hashverfahren (Stichworte *sicheres Speichern von Passwörtern*, *Intregritätsprüfung*)
- Sie kennen Angriffsmöglichkeiten auf Passworthashes (*Dictionnary*, *Brute Force*).
:::

:::note[Angriffe]
- Sie sind sich bewusst, dass für erfolgreiche Angriffe auf Systeme häufig ein Fehlverhalten von Personen verantwortlich ist.
- Sie wissen, dass Personen daher ein beliebtes Angriffsziel sind (z.B. Social Engineering, Phishing).
- Sie verstehen die Wichtigkeit, dieselben Passwörter nicht für mehrere Dienste/Systeme einzusetzen und kennst Möglichkeiten der Passwortverwaltung (z.B. Passwortmanager).
- Sie verstehen, dass das Passwort des E-Mail-Accounts besonders wichtig ist (z.B. wegen der Passwortrücksetzung via E-Mail).
:::

::::


:::warning[Unterrichtsinhalte]
An der Prüfung können auch Inhalte/Diskussionen/Experimente zu den obigen Themen aufgegriffen werden, welche nur im Unterricht behandelt/diskutiert wurden.
:::
:::::


<Table
  header={["Datum", "Thema", "Inhalt"]}
  compact
  selectable
  rows={fs2024}
  order={SortTimeTableByDate()}
/>

:::details[1. Semester]

<Tabs
    defaultValue="theorie"
    values={[
      {label: 'Einzellektion', value: 'theorie'},
      {label: 'Praktikum', value: 'hk'}
    ]}
>
<TabItem value="theorie">
<Table
  header={["Datum", "Thema", "Inhalt"]}
  compact
  selectable
  rows={hs2022}
  order={SortTimeTableByDate()}
/>

</TabItem>

<TabItem value="hk">
<Table
  header={["Datum", "Halbklasse", "Thema", "Inhalt"]}
  compact
  selectable
  rows={hk2022}
  order={SortTimeTableByDate()}
/>
</TabItem>
</Tabs>

:::

:::details[2. Semester]

<Table
  header={["Datum", "Thema", "Inhalt"]}
  compact
  selectable
  rows={fs2023}
  order={SortTimeTableByDate()}
/>

:::

:::details[3. Semester]
<Table
  header={["Datum", "Thema", "Inhalt"]}
  compact
  selectable
  rows={hs2023}
  order={SortTimeTableByDate()}
/>
:::