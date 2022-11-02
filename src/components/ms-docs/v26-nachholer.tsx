import React from 'react';
import clsx from 'clsx';
import { useStore } from '../../stores/hooks';
import { observer } from 'mobx-react-lite';
import { Document, ImageRun, Packer, Paragraph } from 'docx';
import { saveAs } from 'file-saver';
import styles from "./styles.module.scss";

const ProbeV26 = observer(() => {
  const msalStore = useStore('msalStore');
  const { account } = msalStore;

  const t1 = `Autonomes Fahren
So fahren wir in Zukunft`

const t2 = `
Ein Beitrag von ADAC
01.11.2022
Ursprüngliche Zeitpläne zu ambitioniert
Fahrerlose Autos sollten in Deutschland eigentlich heute schon am Strassnverkehr teilnehmen können. Schon seit Jahren sind die Ingenieure fast aller Autohersteller mit Systemen zum automatisierten und hochautomatisierten Fahren unterwegs. Der ambitionierte Zeitplan hat sich jedoch immer wieder verschoben. Die zu entwickelnde Technik auf Seiten der Autohersteller wie auch die Rechtslage auf Seiten der Gesetzgebung waren offenbar komplexer als gedacht.
Immerhin ist der notwendige Rechtsrahmen inzwischen gesteckt. Im Mai 2021 haben Bundestag und Bundesrat einem Gesetz zugestimmt, nach dem vollständig autonome Fahrzeuge in Deutschland grundsäzlich am öffentlichen Strassenverkehr teilnehmen können. Die konkreten Ausführungsbestimmungen folgen nach und nach.

Vollständig autonomes Fahren wird Realität werden. Die Frage ist nur, wann und wo zuerst? Eine aktuelle Standortbestimmung mit Beispielen von Projekten in Deutschland und den USA.
Der gesetzliche Rahmen für vollautomatisierte Fahrzeuge steht, die Ausführungsbestimmungen folgen nach und nach
Wie die Hersteller die Autos fürs Selberfahren fit machen
Autonome Autos werden sich laut Prognos-Studie erst ab 2040 durchsetzen
Welche Vorteile bieten selbst fahrende Autos?
Überzeugt scheinen die Deutschen trotz aller Fortschritte nicht unbedingt zu sein vom autonom fahrenden Auto. Laut Umfragen zweifeln 45 Prozent der Autofahrer an der Verlässlichkeit der Fahrzeugtechnologie oder haben Angst vor Hackern. Digitale Euphorie sieht anders aus.
Doch machen dann das neue Gesetz und die Entwicklung autonom fhrender Autos überhaupt noch Sinn? Auf alle Fälle. Denn die Potenziale dieser Technologie sind enorm – für die Gesellschaft, die Sicherheit und für den Wirtschaftsstandort Europa.
Für die Gesellschaft liegt die Chance darin, ältere oder leistungseingeschränkte Menschen bessser einzubinden – und jeder Einzelne kann seine Zeit produktiv oder zur Erholung nutzen. Automatisierte Taxis oder Busse fahren vielleicht so günstig, dass sich auch der ländliche Raum besser erschliessen lässt. Der Verkehr läuft flüssiger, und Güter können rationalisierter und umweltschonender transportiert werden.
Je nach Grad der Automatisierung werden sich auch die Unfallzahlen weiter reduzieren, denn für immerhin 90 Prozent aller Crashs ist menschliches Versagen die Ursache. Allerdings wird dieser Prozess langwierig sein, weil konventionelle und automatisierte Fahrzeuge noch sehr viele Jahre im Mischverkehr fahren werden.  Ex-VW-Chef Herbert Diess
Verhindert werden muss, dass die technischen Systeme versagen oder Verkehrssituationen einfach falsch einschätzen. Die Entwicklung der besten Technologie fürs autonome Fahren hat daher eine immens grosse Bedeutung.
Prognos-Studie: Autonome Autos bis 2040
Erfolge bei Forschung und Entwicklung sind das eine – die Realität auf den Strassen ist das andere. Eine Studie des Prognos-Forschungsinstituts zum autonomen Fahren für den ADAC zeigt: Automatisiertes Fahren wird sich nur langsam durchsetzen. Das liegt vor allem daran, dass Autos durchschnittlich bis zu 20 Jahre im Einsatz sind – und sich neue Technologien deshalb nur ganz allmählich im Gesamtbestand bemerkbar machen.
So wird der Anteil von Neufahrzeugen, bei denen sich der Fahrer auf allen Autobahnen komplett von der Fahraufgabe abwenden kann, laut Prognos im "optimistischen" Fall von 2,4 Prozent im Jahr 2020 auf immerhin 70 Prozent im Jahr 2050 steigen. Ab 2030 werden dann Pkw mit Citypilot, also der Fähigkeit, sowohl auf der Autobahn als auch in der Stadt allein zu fahren, allmählich auf den Strassen auftauchen. Und erst nach 2040 werden in grösserer Zahl Autos angeboten, die völlig autonom von Tür zu Tür kommen, also auch auf Landstrassen keinen Fahrer mehr benötigen.`

const t3 = `
Abbildung 1: Übersicht über die erwartete Verbreitung automatisierter Autos
Das bedeutet: Noch bis weit ins 21. Jahrhundert hinein werden den Prognos-Forschern zufolge ganz normale Fahrzeuge neben vollautomatisierten unterwegs sein. Damit relativiert sich auch die Hoffnung auf schnelle Sicherheitsgewinne durch autonome Pkw in den nächsten Jahrzehnten. Dass trotzdem immer weniger Menschen im Strassenverkehr sterben oder verletzt werden, wird eher an der Verbreitung leistungsfähiger Assistenzsysteme liegen: So greifen Helfer wie der Notbremsassistent schon heute ein, wenn der Mensch einen Fehler macht. Ganz ohne autonome Technik.
Vorreiter in Amerika
Der Wettbewerb um die beste Technologi für das autonome Fahren ist weltweit in vollem Gang. Nach Meinung von Ex-VW-Chef Herbert Diess hinken die deutschen Autohersteller bei der Entwicklung der Technologie für das autonom fahrende Auto jedoch "ein bis zwei Jahre hinterher". An der Spitze des Knowhows werden Firmen in den USA gesehen – zum Beispiel die US-amerikanische Firma Waymo, die zum Imperium von Google gehört. Auch Mobileye, eine israelische Tochtergesellschaft des grossen Chip-Herstellers Intel, gehört dazu.
Im US-Bundesstaat Arizona, genauer in einem Vorort von Phoenix, lässt Waymo schon eine Weile Roboterautos als Taxis fahren – zum Teil auch ohne Sicherheitsfahrer hinter dem Lenkrad. Kunden können ihre Fahrt per App ordern und werden dort abgeholt, wo sie sich gerade befinden. Filme dazu gibt es im Internet zuhauf. Die Technik von Waymo erscheint enorm weit fortgeschritten. Sie ist aber auch extrem aufwendig und teuer. Teils kommt es zu skurrilen Szenen, wenn ein Auto nicht weiss, was es machen soll.
Reaktionstempo und hohe Rechenleistung der Autos
Als Entscheidungsgrundlage für die automatischen Fahraktionen fallen im Auto pro Minute fünf Gigabyte Daten zur Verarbeitung an. Die Rechenleistung an Bord kommt ungefähr der von 15 Laptops gleich. Die Zukunftsfahrzeuge sollen das Verkehrsgeschehen für rund zehn Sekunden vorausberechnen können und alle möglichen Verkehrsszenarien beherrschen, und zwar überall auf der Welt. Und die Systeme müssen in Zukunft nicht nur verkehrssicher, sondern auch datensicher entwickelt sein, um mögliche Cyberangriffe abwehren zu können.
Der selbst fahrende VW ID. Buzz in Hamburg`
const t4 = `
Abbildung 2: Prototyp von VW: Ein auto-nom fahrender ID.Buzz
Auch Volkswagen hat grosse Ambitionen, schon bald Fahrzeuge mit höchsten Automatisierungsgraden auf die Strasse zu schicken. Zur Zeit werden Prototypen auf Basis des vollelektrischen Bulli ID. Buzz erprobt, ausgestattet mit einer Kombination aus Lidaren, Radaren, Kameras und Laserscannern. Das System liefert präzise Daten, um daraus ein sehr genaues Verkehrsbild der Innenstädte zu erzeugen.
Die Entwicklungspartnerschaft mit dem amerikanischen Tech-Unternehmen Argo AI ist kürzlich überraschend beendet worden. Aus welchem Grund, wurde von Volkswagen nicht mitgeteilt. Am Entwicklungsziel, den autonom fahrenden ID. BUZZ ab 2025 als Ridesharing-Fahrzeug von Moia in Hamburg einzusetzen, hält VW fest. Perspektivisch soll eine Flotte von 1000 autonomen Fahrzeugen im Hamburger Stadtgebiet auf die Reise geschickt werden. Weitere Flotten an anderen Standorten sollen folgen.
Mobileye und Sixt: Ride-Hailing in München`
const t5 = `
Abbildung 3: Das autonome Taxi von Mobileye basiert auf einem SUV von Nio
Schneller als Volkswagen wollen Intel und Mobileye sein. Schon bald, so der ambitionierte Plan, würden selbst fahrende Ride-Hailing-Dienste in München und Tel Aviv zur Verfügung stehen. Unter Ride-Hailing versteht man den Appbasierten Verkauf von Fahrten mit einem privaten Pkw, das US-amerikanische Unternehmen Uber bietet diese Dienstleistung in vielen Ländern an. Als deutscher Partner für Intel und Mobileye fungiert der Autovermieter Sixt. Die Autos sollen sowohl über die App von Moovit als auch über die Sixt-App für RideHailing, Autovermietung, Carsharing und Auto-Abos angefordert werden können.
Mobileye betont, dass der Weg zu vollautonomen Fahrzeugen skalierbare Lösungen erfordere. So könne das Selbstfahrsystem von Mobileye auch im Güter und Personentransport eingesetzt werden. Mit Schaeffler plane Mobileye beispielsweise eine Kooperation zur Entwicklung einer flexiblen selbst fahrenden Fahrzeugplattform für autonome Shuttles. Zuvor hatte Mobileye eine Kooperation mit Udelv angekündigt für autonome Transporter, die einen Tür-zu-Tür Zustellbetrieb übernehmen können.

Abbildungsverzeichnis`
  
const generateFromUrl = async (name: string)  => {
  const bild1 = await fetch(
    '/img/word-basics/v26-nachholer/Bild1.jpg'
  ).then((r) => r.blob());
  const bild2 = await fetch(
    '/img/word-basics/v26-nachholer/Bild2.jpg'
  ).then((r) => r.blob());
  const bild3 = await fetch(
    '/img/word-basics/v26-nachholer/Bild3.jpg'
  ).then((r) => r.blob());
  const bild4 = await fetch(
    '/img/word-basics/v26-nachholer/Bild4.jpg'
  ).then((r) => r.blob());
  const hash = name.split('@')[0].split('').map(c => c.charCodeAt(0)).reduce((v, s) => v + s, 0);
  const hash100raw = Math.floor(hash / 100);
  const hash100 = hash100raw % 16;
  const hash10 = Math.floor((hash - hash100raw * 100) / 10) % 16;
  const hash1 = hash - hash100raw * 100 - hash10 * 10;
  const color = `F${hash100.toString(16)}F${hash10.toString(16)}F${hash1.toString(16)}`.toUpperCase();

  const doc = new Document({
    creator: name,
    description: `Test für ${name}`,
    title: `Word Prüfung GBSL Autonomes Fahren`,
    keywords: `ofi, msword, test, ${name}`,
    background: {
      color: color,
    },
    sections: [
      {
        children: [
          ...t1.split('\n').map((l) => new Paragraph(l)),
          new Paragraph({
            children: [
              new ImageRun({
                data: bild1 as any as ArrayBuffer,
                transformation: {
                  width: 2000/4,
                  height: 1125/4,
                }
              }),
            ],
          }),
          ...t2.split('\n').map((l) => new Paragraph(l)),
          new Paragraph({
            children: [
              new ImageRun({
                data: bild2 as any as ArrayBuffer,
                transformation: {
                  width: 800/2,
                  height: 450/2,
                },
              }),
            ],
          }),
          ...t3.split('\n').map((l) => new Paragraph(l)),
          new Paragraph({
            children: [
              new ImageRun({
                data: bild3 as any as ArrayBuffer,
                transformation: {
                  width: 800/2,
                  height: 450/2,
                },
              }),
            ],
          }),
          ...t4.split('\n').map((l) => new Paragraph(l)),
          new Paragraph({
            children: [
              new ImageRun({
                data: bild4 as any as ArrayBuffer,
                transformation: {
                  width: 800/2,
                  height: 450/2,
                },
              }),
            ],
          }),
          ...t5.split('\n').map((l) => new Paragraph(l)),
        ],
      },
    ],
  });
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, 'probe.docx');
  });
}
const name = account.username;
  return (
      <button
        className={clsx('button--primary', 'button', styles.download)}
        onClick={() => generateFromUrl(name)}
       >
        Vorlage Herunterladen: probe.docx
        <i className='mdi mdi-download' style={{marginLeft: '1em', marginRight: '-1em'}}/>
      </button>
  )
});

export default ProbeV26;