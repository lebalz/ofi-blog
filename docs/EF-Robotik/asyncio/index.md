---
sidebar_position: 4
sidebar_custom_props:
  id: 57115045-f2e5-4d0a-b843-ccd322d072ae
  source:
    name: sdg
    ref: https://gitlab.gbsl.website/gymbefin23/material/-/wikis/Robotik/Coroutinen-und-asyncio
---
# Coroutinen und asyncio

Können Computer mehrere Dinge **gleichzeitig** tun? Die Antwort lautet unterschiedlich, je nach dem, was mit *gleichzeitig* gemeint ist.

Das Herz des Computers ist der **Prozessor**. Er führt Programme aus. Programme bestehen aus einzelnen Anweisungen, sogenannten **Maschinenbefehlen**, welche vom Prozessor einer nach dem anderen ausgeführt werden. Ein einfacher Prozessor mit einem **Kern** kann also nur eine einzige Aufgabe, man spricht von **Tasks**, auf's mal bearbeiten.

Heutige Prozessoren verfügen praktisch immer über **mehrere Kerne**. Jeder Kern für sich ist ein eigener Prozessor. Computer mit solchen Prozessoren können also so viele Tasks **parallel** ausführen, wie ihr Prozessor Kerne hat.

Wenn ein Prozessor nur einen Kern hat, oder die Anzahl der zu bearbeitenden Tasks die Anzahl der verfügbaren Kerne **übersteigt**, so kann dennoch eine Form von "Gleichzeitigkeit" bei der Bearbeitung der Tasks erreicht werden. Man spricht von **Concurrency** (eigentlich Nebenläufigkeit). Wie das gelöst wird steht im folgenden Abschnitt.

## Multitasking
Beim Multtasking werden die Tasks von einem **Scheduler** (engl. für Planer, Disponent) auf die einzelnen Kerne **verteilt**. Der Scheduler ist Teil des Betriebssystems (welches ja auch nur ein Programm ist). Er ist verantwortlich, dass alle zu bearbeitenden Tasks möglichst **gleich viel Bearbeitungszeit** auf den Kernen zugeteilt erhalten und das alle Kerne möglichst gut ausgelastet sind.

Dabei gibt es **zwei** Verfahren, wie der Scheduler und die Tasks zusammenarbeiten:
1. Der Scheduler teilt den Tasks feste **Bearbeitungszeitschlitze** auf den zur Verfügung stehenden Kernen zu. Nach Ablauf der zugeteilten Zeit **unterbricht** der Scheduler den Task und teilt den Kern einem anderen Tasks zu, welcher am warten ist. Der unterbrochene Task muss selber warten, bis er wieder vom Scheduler aktiviert wird. Der Scheduler ist also der Meister und sagt, was geht. Diese Art von Multitasking nennt man **präemptives Multitasking** (präemptiv = zuvorkommend, präventiv, unterbrechend). Der grosse Vorteil dieser Vorgehensweise ist, dass ein Task den Computer **nicht blockieren** kann. Ein Nachteil ist, dass ein Task grundsätzlich an **jeder beliebigen** Stelle unterbrochen werden kann, was bei der Programmierung berücksichtigt werden muss. Alle gängigen heutigen Betriebssysteme funktionieren auf diese Weise.   

1. Ein aktiver Task besetzt seinen zugeteilten Kern so lange, bis er entweder fertig ist, oder von sich aus beschliesst eine Pause zu machen, weil er zum Beispiel auf eine Eingabe vom Benutzer wartet. Er informiert dann den Scheduler, dass er den Kern freigibt und der Scheduler teilt diesen einem wartenden Task zu. Diese Art von Multitasking nennt man **kooperatives Multitasking**, weil hier die Tasks und der Scheduler zusammenarbeiten müssen. Besetzt ein Task seinen Kern zu lange, oder für immer, z.B. weil er sich in einer unendlichen Schleife befindet, bekommen andere Tasks und auch der Scheduler keine Chance, um ihrerseits aktiv zu werden. Das System kann **blockiert** sein. **Frühe** Versionen von Windows und MacOS verwendeten kooperatives Multitasking, weil es viel **einfacher** zu implementieren ist. Heute findet man es oft in **eingebetteten Systemen**, weil es viel weniger Overhead mit sich bringt und weniger Speicherressourcen benötigt. Ausserdem gewinnt es zunehmend an Bedeutung innerhalb von Programmen, welche auf sogenannten **Coroutinen** aufbauen. 

## Coroutinen
Eine Coroutine ist eine Funktion, welche an bestimmten Stellen ihre Ausführung **unterbricht** und später an dieser Stelle wieder aufnehmen kann. In der Zwischenzeit erhalten andere Coroutinen die Gelegenheit selber aktiv zu werden, bis auch sie ihre Arbeit wieder unterbrechen. Coroutinen sind überall dort sinnvoll, wo ein Programm auf bestimmte **Ereignisse** warten muss, gleichzeitig aber andere Aufgaben **nicht blockiert** werden dürfen. Dies ist beispielsweise der Fall in Programmen, welche einerseits auf Eingaben durch den Benutzer warten und andererseits auf Nachrichten reagieren müssen, welche über das Netzwerk ankommen.

### `asyncio`
`asyncio` heisst die Python-Bibliothek, welche es zur Programmierung von Coroutinen braucht. In Micro-Python heisst die Bibliothek `uasyncio`. 

Ein Beispiel, wie man mit `asyncio` Coroutinen programmieren kann, ist in folgendem Snippet zu finden

```py reference title="asyncio_demo.py"
https://github.com/lebalz/ofi-blog/blob/71289c73782c7270a65de75bd63e5ea8c0e02f18/docs/EF-Robotik/asyncio/scripts/demo.py
```