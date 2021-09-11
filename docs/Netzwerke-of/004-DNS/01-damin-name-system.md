---
title: Domain Name System
---

import Answer from "@site/src/components/Answer";

# Domain-Name-System [^1]

:::info Ziele
- Was ist ein Domain-Name?
- Sie können zu einem gegebenen Domain-Namen die zugehörige IP-Adresse ermitteln.
-	Sie können herausfinden, wem ein Domain-Name gehört und ob ein bestimmter Domain-Name noch frei ist.
-	Sie können Web-Links auf ihre Unbedenklichkeit überprüfen.
:::

## Telefonbücher

<div className="float-right">

![](images/telefonbuch.jpg)

</div>

IP-Adressen sind wie Telefonnummern, man kann sie sich nur schwer merken. Für Telefonnummern gibt es deshalb Verzeichnisse, in welchen man die Nummer einer bestimmten Person nachschauen kann (entweder das gute alte Telefonbuch oder, moderner, [tel.search.ch](https://tel.search.ch)). Man muss nur den Namen der Person und vielleicht noch die Wohnadresse kennen.

## Domain Name
Auch für das Internet gibt es solche Verzeichnisse. Wenn man den Namen einer bestimmten Webseite kennt, kann man im Verzeichnis die IP-Adresse des Servers nachschauen, der diese Seite im Internet anbietet. 

Solche Namen sind zum Beispiel
-	www.instagram.com
-	www.gbsl.ch
-	ofi.gbsl.website

Diese Namen werden als **Domain-Names** bezeichnet und das Verzeichnis, wo sie drinstehen, heisst **Domain-Name-System**, kurz **DNS**.

## Kernidee
> Namen kann man sich viel besser merken als Zahlen. Deshalb sind Webseiten im Internet mit einem Domain-Namen versehen. Im **Verzeichnis** der Domain-Namen, dem **Domain-Name-System**, kann man nachschauen, welches die IP-Adresse des Servers ist, der diese Seite anbietet.


## Funktionsweise

Es gibt auf der Welt bald **2 Milliarden**[^2] Webseiten, verteilt auf ca. 200 Millionen Server. Jeder Server beherbergt also durchschnittlich 10 Webseiten. Für jeden dieser Server braucht es eine öffentliche IP-Adresse, damit der Server im Internet erreichbar ist. Wenn man die IP-Adresse des Servers kennt, könnte man theoretisch versuchen im Browser statt des Domain-Namens einer Web-Site direkt die IP-Adresse des Servers einzugeben, also statt www.instgram.com die IP-Adresse 157.240.17.174.

Wie schon in der Einleitung erwähnt, wird das niemand tun, weil man sich diese IP-Adresse nicht merken kann und sie mit der Zeit auch ändern könnte (z.B. wenn die Web-Site auf einen anderen Server gezügelt wird). Ganz abgesehen davon, dass es auch nicht ausreichen würde, nur die IP-Adresse anzugeben, weil ja eben mehrere Web-Sites an einer bestimmten Adresse «zuhause» sein können.

Die Frage ist nun aber: Wie kann man 2 Milliarden Domain-Namen in einem Verzeichnis verwalten? Würde man dies in Form eines Buches versuchen, so ergäbe das ein Buch mit ca. **4 Millionen Seiten** (500 Adresseinträge pro Seite). Hinzu kommt, dass diese Adressen laufend angepasst werden müssten. Neue Adressen kommen hinzu, andere ändern oder verschwinden. Ganz zu schweigen von der schieren Unmöglichkeit, in einem solchen Buch eine gesuchte Adresse zu finden.

In elektronischer Form ist dieses Problem nicht so gross. 2 Milliarden Adressen ergeben eine Datenmenge von ca. **2 Terrabyte**, wenn man grosszügig 1 KB (1000 Zeichen) pro Adresse annimmt. Eine Harddisk mit so viel Platz kriegt man für einige zehn Franken. Allerdings bleibt das Problem mit den dauernden Änderungen. Eine zentrale Stelle, welche dieses Verzeichnis führen müsste, wäre wohl schnell überfordert. Zudem bestünde auch ein grosses Risiko, dass ein Ausfall dieser zentralen Stelle das ganze Internet lahmlegen könnte. Schliesslich müsste ein solches Verzeichnis auch auf einem sehr, sehr leistungsfähigen Server betrieben werden, denn bei ca. 5 Milliarden Internetnutzern weltweit, die dauernd irgendwelche IP-Adressen brauchen, ist mit einer enormen Flut von Anfragen zu rechnen.

Aus diesen Gründen haben die Erfinder des Domain-Name-Systems einen anderen Weg eingeschlagen: Das Verzeichnis ist
-	erstens **hierarchisch gegliedert** und
-	zweitens auf viele DNS-Server weltweit **verteilt**, wobei jeder Server nur die Adressen in seiner Zone kennt und für alle anderen Adressen auf weitere DNS-Server verweist.


Untenstehendes Bild zeigt diese Hierarchie. Auf der obersten Ebene befinden sich die sogenannten **Top-Level-Domains** (**TLD**), z.B. **ch**, **de**, **org** oder **com**. Diese sind unter einer namenlosen Root-Domain zusammengefasst (Punkt im obersten Kästchen auf dem Bild). Unterhalb einer TLD können dann **beliebig viele Subdomains** angehängt werden. Liest man nun von unten beginnend, die Namen der Subdomains auf einem Pfad bis zur Root-Domain, so entsteht ein vollständiger Domain-Name, z.B. en.wikipedia.org.

<div id="dns-schema"></div>

![](images/dns-schema.png)

Im Bild sind **drei DNS-Server** mit ihrer jeweiligen **Zone** (grau) eingezeichnet. Jeder DNS-Server verwaltet den Teil der Adressinformationen, der zu seiner Zone gehört. Die IP-Adresse zum Domain-Namen en.wikipedia.org, also 91.198.174.192, kennt dabei nur der unterste DNS-Server, denn er ist für die Zone, in welche dieser Domain-Name schliesslich gehört, zuständig.

Wird einer der übergeordneten DNS-Server nach dieser IP-Adresse gefragt, so verweist er als Antwort nur auf den nächsttieferen DNS-Server, mit dem Hinweis, man solle dort weiterfragen. Das geht dann so weiter, bis der Frager beim untersten DNS-Server angelangt ist und die IP-Adresse als Antwort erhält.
 
Man kann diese Situation mit jemandem vergleichen, der sich in einer fremden Stadt über mehrere Stationen zu seinem Hotel durchfragt.

:::aufgabe Selbsttest

Füllen Sie das folgende [Forms-Quizz](https://forms.office.com/Pages/ResponsePage.aspx?id=Y4MGSWGDB0aVSWK2tVeUqmHAwu9d_oRHn4uu_hm4VSJUQUNaRktCVkZSOVFXVVgyM0RSOVhaWUJCTi4u) aus.
:::

:::aufgabe DNS-Hierarchie

Zeichnen Sie eine Hierarchie (Baum), in welcher folgende Domain-Namen vorkommen (so wie auf der Abbildung im Arbeitsblatt):

- www.gbsl.ch
- learningview.org
- tel.search.ch
- erzbe-my.sharepoint.com
- outlook.office.com
- www.office.com

Halten Sie Ihre Lösung auf einem Blatt Papier fest.
:::

## Wer verwaltet Domain-Namen?
Die hierarchische Gliederung des Domain-Name-Systems erlaubt es, die Verwaltung zu **dezentralisieren**. So gibt es für jede Top-Level-Domain eine Organisation, welche die Namen der darunter angesiedelten Subdomains verwaltet. Für die TLD der Schweiz (ch) und Liechtenstein (li) ist das die Stiftung [SWITCH](https://www.switch.ch/) zuständig.

:::info
Die SWITCH betreibt unter dem Link https://www.nic.ch/de/ einen Dienst zur Überprüfung, ob eine bestimmte Subdomain noch verfügbar ist. Das Registrieren einer Subdomain delegiert die SWITCH an sogenannte **Registrare**, also an Unternehmen die Domain-Namen anbieten und verkaufen. Bekannte (und günstige) Registrare sind:
- [Swizzonic.ch](https://swizzonic.ch/)
- [Gandi.net](https://www.gandi.net/)
- [hostech](https://www.hosttech.ch/domains)
:::

Es gibt Web-Sites, über welche man herausfinden kann, von wem ein bestimmter Domain-Name registriert wurde (Registrar) und wem dieser Name gehört (Registrant). Drei davon sind:
- https://www.hostpoint.ch/domains/whois.html	(TLDs ch, li, …)
- https://www.whois.com/whois/ (TLDs com, org, edu, …)
- http://whois.nic.swiss/ (TLD swiss)

## IP Adressen herausfinden
Wenn Sie im Browser auf Ihrem Computer den Link https://www.instagram.com eingeben, so muss Ihr Computer herausfinden, welche IP-Adresse zum Domain-Name www.instagram.com in diesem Link gehört, damit er den Instagram-Server schliesslich kontaktieren kann.

Den zuständigen DNS-Server kann Ihr Computer, aber nur über dessen eigene IP-Adresse erreichen. Wenn Ihr Computer das zum ersten Mal macht, so kennt er diese Adresse noch nicht. Deshalb wendet er sich an einen der **13 DNS-Server** auf der obersten Ebene, den sogenannten **Root-Servern**, deren IP-Adressen jedem Computer bekannt sind. Diese leiten Ihren Computer dann an die tiefer gelegenen DNS-Server weiter, bis schliesslich der richtige DNS-Server gefunden ist. Das passiert automatisch, ohne, dass Sie davon etwas merken.

Man kann solche Anfragen aber auch von Hand machen. Dazu können Sie die Seite https://tools.keycdn.com/dig verwenden.

:::aufgabe Aufgabe 1

Wie findet man die IP-Adresse, welche zu einem Domain-Name gehört? (Googeln Sie nach einer Website, welche einen Dienst anbietet, der dies tut.)

<Answer type="text" id="q1"/>


<details><summary>⭐️ The Hacky Way - Übers Terminal</summary>

Sie können auch in der Windows-Eingabeaufforderung oder auf dem Mac-Terminal einen Domain-Name zu einer IP-Adresse auflösen. Dazu brauchen Sie den Befehl `nslookup`.

Beispiel:
```
nslookup de.wikipedia.org
```
Probieren Sie es aus, wenn Sie Lust auf mehr Hacker-Feeling haben.
</details>
:::

:::aufgabe Instagram

Finden Sie heraus, welches die IP-Adresse von www.instagram.com ist.

<Answer type="text" id="q2" label="IP-Adresse"/>

:::


:::aufgabe Aufgabe 2
Untenstehende Abbildung zeigt eine verdächtige aussehende E-Mail. Sie enthält einen Button, unter welchem angeblich Details eines Fotos angeschaut werden können.

![](images/fishy-mail.png)

Der Button ist mit einem Link verbunden, welcher vom E-Mail-Programm am unteren Rand angezeigt wird, sobald man mit der Maus über den Button fährt (**⚠ nicht klicken!**). Darin ist ein Domain-Namen enthalten, der links Unten im Browser angezeigt wird.


Im obigen E-Mail ist das `satellite-equipment.ru`, ein Domain-Namen aus Russland.

Finden Sie mit https://tools.keycdn.com/dig und einer der Webseiten im Abschnitt «Wer verwaltet Domain-Namen?» heraus,
- welche IP-Adresse hinter diesem Domain-Namen steht,
- wem diese Domain gehört und 
- in welchem Land der Besitzer zuhause ist.

<Answer type="text" id="q3" default="<p>IP-Adresse: </p><p>Eigentümer: </p><p>Land: </p>" />

:::


:::danger
Warnung: Auch hier gilt wieder: Nie auf solche Buttons klicken, denn in diesem Fall ist das Risiko hoch, dass Ihr Computer mit einem Virus infiziert wird. 
:::

:::aufgabe Aufgabe 3

Diese Aufgabe hat nicht direkt mit dem Domain-Name-System zu tun. Da hinter der E-Mail aus Aufgabe 2 aber mit Sicherheit jemand mit böswilliger Absicht steckt, können wir noch überprüfen, ob  der Link bereits **als gefährlich registriert** ist.

Solche Überprüfungen bietet z.B. die Seite 	https://sitecheck.sucuri.net/ an.

Überprüfen Sie damit den Domain-Namen aus Aufgabe 2. 

**Achtung: Geben Sie diese URL auschliesslich in das für die Überprüfung vorgesehene Feld ein!**

<Answer type="text" id="q4" placeholder="Resultat der Überprüfung"/>
:::


:::aufgabe Aufgabe 4
Sie möchten Ihr eigenes Unternehmen gründen, oder Sie möchten eine Kampagne für ein Ihnen wichtiges Anliegen führen. In beiden Fällen hilft einen Auftritt im Web, um möglichst erfolgreich zu sein. Eine grosse Rolle spielt dabei, ob Sie einen einprägsamen und packenden Domain-Name finden. Dieser muss selbstverständlich noch verfügbar sein.

Überlegen Sie sich einen solchen Domain-Name und überprüfen Sie mit den oben beschriebenen Whois-Diensten, ob dieser Name noch frei ist.

<Answer type="text" id="q5" default="<b>Domain-Name: </b><b>Ist noch frei? </b>"/>

:::

:::aufgabe Aufgabe 5
Ein Gedankenspiel: Die Berner Kantonalbank (BEKB) bietet ihren Kunden Internet-Banking an. Diese ist erreichbar über die Web-Site der BEKB, www.bekb.ch.

Angenommen einem Angreifer gelingt es, Ihrem Computer eine beliebige, aber falsche IP-Adresse für den Domain-Name www.bekb.ch unterzuschieben, welche Möglichkeiten ergeben sich dem Angreifer dadurch?

<Answer type="text" id="q6" placeholder="Möglichkeiten"/>
:::

## Schlusspunkt
Sie haben nun das Domain-Name-System kennengelernt. Es ist eines der wichtigsten Teile des Internet. Sie haben gesehen, wie man zu einem Domain-Name die zugehörige IP-Adresse erhält. Sie haben auch eine Idee von den Konsequenzen erhalten, wenn das Domain-Name-System nicht so funktioniert, wie erwartet, beispielsweise wegen einer Attacke durch Hacker (*DNS-Hijacking*). Solche Attacken können in unserer vernetzten Welt einen enormen wirtschaftlichen Schaden verursachen.


[^1]: Quelle: Arbeitsblatt A. Scheidegger
[^2]: Quelle: [internetlivestats](https://www.internetlivestats.com/total-number-of-websites/)
