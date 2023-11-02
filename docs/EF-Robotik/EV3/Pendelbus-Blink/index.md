---
sidebar_custom_props:
  id: 5bb1278f-fd22-4c41-86c3-7c85915881e8
  source:
    name: sdg
    ref: https://gitlab.gbsl.website/ev3/pendelbusmitblinker
---
# Pendelbus mit Blinker
Musterlösung

---

<Solution webKey="09e896f4-fa67-4d55-a0d8-92f2284bd2f0" open noWrap>

Das Programm verfügt über zwei Loops, einen für den Blinker, einen für die Zustandsmaschine. Damit beide Loops nebeneinander ausgeführt werden, müssen diese in Coroutinen verpackt und als Tasks gestartet werden.
Wichtig ist, dass beide Coroutinen regelmässig mit await die Kontrolle an den Scheduler zurückgeben, so dass die jeweils andere Coroutine eine Chance zum Laufen erhält. Der Blinker legt dabei Pausen von einer Sekunde ein wait asyncio.sleep(1), in welchen die Zustandsmaschine (aufgerufen durch den Scheduler) arbeitet. Diese gibt aber vor jedem Schleifendurchlauf dem Scheduler die Möglichkeit eine andere Coroutine zuerst auszuführen (await.asyncio.sleep(0)).
Beobachtung: Immer dann, wenn aus der Zustandsmaschine eine EV3-Funktion aufgerufen wird, welche länger dauert (z.B. Sprachausgabe, oder Motorbefehle wie run_angle()). stockt der Blinker. Dies passiert, weil diese EV3-Befehle blockeiernd sind. D.h. das Programm fährt an dieser Stelle erst dann weiter, wenn die Befehle vollständig ausgeführt sind. Dadurch verzögert sich der Schleifendurchgang des Zustandsmaschinen-Loops und der Blinker erhält erst dann wiedcer die Chance zum Laufen, wenn dieser Schleifendurchgang vollständig ausgeführt worden ist.
Es ist also wichtig, dass die Coroutinen möglichst kurze Ausführungszeiten haben. Blockierende EV3-Befehle müssen unter Umständen in kleinere Teilbefehle aufgetrennt werden, zwischen welchen mit await asyncio.sleep(0) kurz dem Scheduler die Kontrolle übergeben wird.


```py reference title="main.py"
https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Robotik/EV3/Pendelbus-Blink/assets/pendelblink.py
```
</Solution>
