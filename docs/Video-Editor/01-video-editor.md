---
sidebar_custom_props:
  id: 4cc087b3-7cc8-478e-a947-841b63f0198e
---

# Video Editieren

Es ist schwierig, ein komplettes Video am Stück zu drehen und dabei genug schnell alles vorzuzeigen, keine Fehler zu machen und aber auch die Zuschauer:innen nicht zu langweilen. Oft gibt es zudem mehrere **Szenen** oder "Drehorte" (können auch "Reale Welt" und "Screencast" sein). Deshalb muss ein Video oft nachbearbeitet und zusammengeschnitten werden.

Dazu kann unter Windows  [👉 Clipchamp](https://www.microsoft.com/store/productId/9P1J8S7CCWWT) (alternativ auch die [👉 Fotos-Legacy App](https://apps.microsoft.com/store/detail/microsoft-fotoslegacy/9NV2L4XVMCXM)) und unter Mac die iMovie App verwendet werden.

Um ein Video mit mehreren Szenen zusammenzuschneiden, kann wie folgt vorgegangen werden:
- **Video-Rohmaterial erstellen:** Wichtig ist primär das **Bildmaterial**, die **Tonspur** kann später noch aufgenommen und hinzugefügt werden.
- **Videos zuschneiden:** Ein Video Projekt erstellen, die verschiedenen Sequenzen hinzufügen, zuschneiden und fehlerhafte Teile entfernen.
- **Story erzählen: Videos anordnen**: Die einzelnen Clips so anordnen, dass die gewünschte Geschichte nachvollziehbar und spannend erzählt werden kann.
  - Langweilige/Technische Passagen schneller abspielen
  - Übergänge zwischen den Sequenzen hinzufügen - Achtung: oft lenken schlichte und relative schnelle Übergangseffekte weniger vom Inhalt ab als pompöse Effekte.
  - im Hinblick auf die folgende Vertonung des Videos: im Hinterkopf halten, wo es viel oder wenig Erklärungen braucht
- **Tonspur hinzufügen**: Überlegen Sie sich genau, was Sie mitteilen wollen und nehmen Sie anschliessend den Text auf. Vermeiden Sie störende Hintergrundgeräusche.
  - Wichtige Dinge können auch mit Text zusätzlich untermauert werden.
  - Für Teile ohne Sprache kann auch Musik verwendet werden. 
- **Exportieren des Videos**: Die einzelnen Videosequenzen, Bilder und Tonspuren zu einem Video zusammenfügen - dieser Prozess wird **Rendering** genannt.



Hilfreiche Links inkl. weiteren Anleitungen:
- [Windows Video-Editor/Clipchamp](https://support.microsoft.com/de-de/windows/erstellen-von-filmen-mit-einem-video-editor-94e651f8-a5be-ae03-3c50-e49f013d47f6)
- [iMovie](https://www.apple.com/imovie/)

## Video Editor öffnen

<GTabs groupId="video-editor" getLabel={(idx) => ['Clipchamp', 'Fotos (Legacy)', 'iMovie'][idx]} >
<div className="Clipchamp">

Die von Microsoft unter Windows 11 vorgeschlagene App zur Bearbeitung von Videos ist [👉 Clipchamp](https://www.microsoft.com/store/productId/9P1J8S7CCWWT). Das Unternehmen wurde von Microsoft aufgekauft und mit dem Schul-Account hat man einige Premium-Funktionen frei erhältlich.

![Video-Editor](images/clipchamp/01-video-editor.png)

</div>
<div className="Fotos-Legacy">


Unter Windows 10 können über die Fotos-App auch Video-Projekte erstellt werden. Unter Windows 11 muss dazu die "alte" Version der Fotos-App heruntergalden werden:  [👉 Fotos-Legacy](https://apps.microsoft.com/store/detail/microsoft-fotoslegacy/9NV2L4XVMCXM).

![Video-Editor](images/fotos-legacy/01-video-editor.png)

</div>
<div className="iMovie">

Unter Mac OS X muss die Software [👉 iMovie](https://www.apple.com/de/imovie/) aus dem App-Store heruntergeladen werden.

![Neues Projekt erstellen](images/i-movie/01-video-editor.png)

![Medien per Drag&Drop hinzufügen](images/i-movie/01-video-editor_b.png)

</div>
</GTabs>

## Titel und Text

Zu Beginn eines Videos soll ein Titel angezeigt werden. Die mitwirkenden Personen werden entweder auch auf der Titelseite, oder aber im Abspann vermerkt.

Wichtige Aussagen im Video können zusätzlich mit Text untermauert werden. Die Dauer der Texteinblendung kann jeweils eingestellt werden und sollte min. `3s` dauern.

<GTabs groupId="video-editor" getLabel={(idx) => ['Clipchamp', 'Fotos (Legacy)', 'iMovie'][idx]} >
<div className="Clipchamp">

__Grafiken > Hintergründe > Einfarbig__

![Hintergrundfarbe einstellen](images/clipchamp/02-video-editor-bg-color.png)

![Titel hinzufügen und Style wählen](images/clipchamp/03-video-editor-bg-text.png)

</div>
<div className="Fotos-Legacy">

![Hintergrundfarbe einstellen](images/fotos-legacy/02-video-editor-bg-color.png)

![Titel hinzufügen und Style wählen](images/fotos-legacy/03-video-editor-bg-text.png)

</div>
<div className="iMovie">

![Hintergrundfarbe einstellen](images/i-movie/02-video-editor-bg-color.png)

![Titel hinzufügen und Style wählen](images/i-movie/03-video-editor-bg-text.png)

</div>
</GTabs>

## Zuschneiden und Aufteilen

Das Aufteilen von Videos ist besonders hilfreich, wenn
- fehlerhafte Teile entfernt werden sollen oder
- die Geschwindigkeit einzelner Teile verändert werden muss.

<GTabs groupId="video-editor" getLabel={(idx) => ['Clipchamp', 'Fotos (Legacy)', 'iMovie'][idx]} >
<div className="Clipchamp">

![Video aufteilen :mdi[content-cut]](images/clipchamp/04-video-editor-split.png)
</div>
<div className="Fotos-Legacy">

![Video aufteilen](images/fotos-legacy/04-video-editor-split.png)
</div>
<div className="iMovie">

![Video aufteilen](images/i-movie/04-video-editor-split.png)
</div>
</GTabs>

## Wiedergabegeschwindigkeit

Die Geschwindigkeit der Wiedergabe kann verändert werden. Dies ist besonders hilfreich, wenn die Geschwindigkeit der Erklärung zu schnell oder zu langsam ist. 


:::danger[Maximal 150 %]
Die Geschwindigkeit sollte für **gesprochenen Text** nicht schneller als 150 % (also Faktor `1.5`) sein! Sonst wird es sehr schwierig, den Inhalt zu verstehen.
:::

<GTabs groupId="video-editor" getLabel={(idx) => ['Clipchamp', 'Fotos (Legacy)', 'iMovie'][idx]} >
<div className="Clipchamp">

![Geschwindigkeit ändern](images/clipchamp/05-video-editor-speed.png)
</div>
<div className="Fotos-Legacy">

![Geschwindigkeit ändern --max-width=450px](images/fotos-legacy/05-video-editor-speed.png)
</div>
<div className="iMovie">

![Geschwindigkeit ändern --max-width=450px](images/i-movie/05-video-editor-speed.png)
</div>
</GTabs>

## Tonspur

Ein Video besitzt normalerweise bereits eine Tonspur. Das Video kann aber auch neu vertont werden, indem neue Tonspuren hinzugefügt werden. Für jede Tonspur kann die Lautstärke individuell eingestellt werden. So lassen sich auch mehrere Tonspuren unterschiedlicher Lautstärke überlagern.

:::warning[Hintergrundmusik]
Die Tonspur mit gesprochenem Text soll immer klar und verständlich sein. Lieber verzichtet man auf eine durchgehende Hintergrundmusik, als dass dadurch die Klarheit der Stimme leidet.
:::

<GTabs groupId="video-editor" getLabel={(idx) => ['Clipchamp', 'Fotos (Legacy)', 'iMovie'][idx]} >
<div className="Clipchamp">

Soll die Tonspur des Videos verändert werden, muss zuerst die Tonspur vom Video separiert werden: 

![](images/clipchamp/07-video-editor-sound-1.png)

Per Drag&Drop können neue Audio-Dateien zum Projekt hinzugefügt werden. Die Audiospuren lassen sich durch verschieben der Regler direkt zuschneiden. Die Tonspuren können auch überlagert werden.

Durch Klicken auf das Lautsprechersymbol kann die Lautstärke für diese Tonspur eingestellt werden. Zudem kann Mit "Ein/Ausblenden" ausgewählt werden, wie lange es dauert, bis die Lautstärke maximal ist...

![](images/clipchamp/08-video-editor-sound-2.png)
</div>
<div className="Fotos-Legacy">

Oben rechts "Benutzerdefiniertes Audio" wählen und anschliessend mehrere Audiodateien hinzufügen. Die Audiospuren lassen sich durch verschieben der Regler direkt zuschneiden. Die Tonspuren können auch überlagert werden.   

![](images/fotos-legacy/07-video-editor-sound-1.png)

Durch Klicken auf das Lautsprechersymbol kann die Lautstärke für diese Tonspur eingestellt werden. Zudem kann eingestellt werden, ob die Tonspur direkt mit der gewählten Lautstärke abgespielt wird, oder ein Übergang verwendet wird.

![--max-width=300px](images/fotos-legacy/08-video-editor-sound-2.png)
</div>
<div className="iMovie">

Soll die Tonspur des Videos verändert werden, muss zuerst die Tonspur vom Video separiert werden: 

![](images/i-movie/07-video-editor-separate-sound.png)

Um die Lautstärke der Tonspur zu ändern, kann die horizontale Linie in der Tonspur nach Oben/Unten verschoben werden. Zudem lassen sich die Lautstärken zu Beginn oder am Ende als Übergang Ein- bzw. Ausblenden.

![](images/i-movie/07-video-editor-sound-1.png)
</div>
</GTabs>

### Tonspuren aufnehmen

Gesprochener Text wird am besten direkt zum Abspielen des Videos aufgenommen.

<GTabs groupId="video-editor" getLabel={(idx) => ['Clipchamp', 'Fotos (Legacy)', 'iMovie'][idx]} >
<div className="Clipchamp">

Unter Windows wird zum Aufnehmen einer Tonspur das Programm [👉 Audiorekorder](https://www.microsoft.com/store/productId/9WZDNCRFHWKN) benötigt. So kann direkt zum abgespielten Video der Text eingesprochen werden.

![Sprache aufnehmen](images/clipchamp/06-video-editor-speech.png)

Die gespeicherten Aufzeichnungen können anschliessend als Tonspur hinzugefügt werden.

</div>
<div className="Fotos-Legacy">

Unter Windows wird zum Aufnehmen einer Tonspur das Programm [👉 Sprachrekorder](https://support.microsoft.com/de-de/windows/verwendung-des-sprachrekorders-6fbb53d5-0539-abda-a9a4-0bcb84a778e7) benötigt.

![Sprache aufnehmen](images/fotos-legacy/06-video-editor-speech.png)

Die gespeicherten Aufzeichnungen können anschliessend als Tonspur hinzugefügt werden.

</div>
<div className="iMovie">

In iMovie ist ein Sprachrekorder direkt eingebaut:

![Sprache hinzufügen --max-width=450px](images/i-movie/06-video-editor-speech.png)

</div>
</GTabs>

## Exportieren

Ist das Video fertiggestellt, kann es als Videodatei exportiert werden. Beim exportieren wird die Darstellung jedes einzelnen Bildes *(für eine Sekunde Film sind es 30 Bilder)* berechnet, wobei Textüberlagerungen, Tondateien und Spezialeffekte zusammengefügt werden. Dieser Prozess kann sehr lange dauern und ist abhängig von der Geschwindigkeit der Grafikkarte. Dieser Prozess wird auch **Rendering** genannt. Das Video soll mit **720p** oder mit **1080p** exportiert werden.

<GTabs groupId="video-editor" getLabel={(idx) => ['Clipchamp', 'Fotos (Legacy)', 'iMovie'][idx]} >
<div className="Clipchamp">

Oben rechts auf "Fertig stellen" klicken und das Video abspeichern.

![](images/clipchamp/09-video-editor-export.png)

</div>
<div className="Fotos-Legacy">

Oben rechts auf "Fertig stellen" klicken und das Video abspeichern.

![--max-width=300px](images/fotos-legacy/09-video-editor-export.png)

</div>
<div className="iMovie">

Oben rechts auf das "Teilen" Symbol klicken und "Datei exportieren" wählen.

![--max-width=450px](images/i-movie/09-video-editor-export.png)

</div>
</GTabs>
