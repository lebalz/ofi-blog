---
sidebar_custom_props:
  id: 90d2952c-ca8b-4617-8b4d-806c1a6dcb1f
  source:
    name: Gym-Kirchenfeld
    ref: https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero
---

import clock from './clock.raw.py';
import CodeBlock from '@theme/CodeBlock';

# Aufrufe planen
---

Um eine Aktion erst nach einer bestimmten Zeit auszulösen, können mit dem `clock`-Objekt zukünftige Aufrufe von Unterprogrammen geplant werden.

```py
clock.schedule_unique(u, s)
```
plant den einmaligen Aufruf des Unterprogramms `u` in `s` Sekunden. Nachdem diese Zeit verstrichen ist, wird das Unterprogramm `u` aufgerufen. Alle anderen geplanten Aufrufe des gleichen Unterprogramms werden abgebrochen.

```py
clock.schedule(u, s)
```
plant den einmaligen Aufruf des Unterprogramms `u` in `s` Sekunden. Nachdem diese Zeit verstrichen ist, wird das Unterprogramm `u` aufgerufen. Andere geplante Aufrufe des gleichen Unterprogramms werden nicht beeinflusst.

```py
clock.schedule_interval(u, s)
```
plant den regelmässigen Aufruf des Unterprogramms `u` alle `s` Sekunden. Andere geplante Aufrufe des gleichen Unterprogramms werden nicht beeinflusst.

```py
clock.unschedule(u)
```
bricht alle geplanten Aufrufe des Unterprogramms `u` ab.

## Beispiel

Im folgenden Beispiel ändert das Aussehen des Fisches 1.5 Sekunden, nachdem die [Space]-Taste gedrückt wurde.

Für die gewünschte Aktion wird das Unterprogramm `aendere_nemo` definiert. Der Name des Unterprogramms kann frei gewählt werden. Mit der Anweisung `clock.schedule()` wird der Aufruf geplant. Dabei werden in Klammern das aufzurufende Unterprogramm und die Verzögerung in Sekunden angegeben:

<CodeBlock language='python'>
{clock}
</CodeBlock>