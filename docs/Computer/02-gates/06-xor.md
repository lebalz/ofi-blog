---
sidebar_custom_props:
  id: 40fc24cc-0c6b-4f99-83d9-3db243caac51
---

# 6. XOR-Gatter

Ein XOR-Gatter (engl. *exclusive or*) hat der Ausgang Y dann den Wert 1️⃣, wenn Eingang A **oder** Eingang B **aber** nicht beide den Wert 1️⃣ haben.

<div className="slim-table">

|   A   |   B   |   Y   |
| :---: | :---: | :---: |
|   0   |   0   |   0   |
|   0   |   1   |   1   |
|   1   |   0   |   1   |
|   1   |   1   |   0   |
</div>

In Schaltplänen wird ein XOR-Gatter mit folgendem Symbol dargestellt:

![Symbol für ein XOR-Gatter](images/06-xor-gate.svg)

## Interaktive Schaltung

[@circuitverse](https://circuitverse.org/simulator/embed/rothe-xor-gate)

## Beispiele

### TV-Debatte

Für die TV-Debatte zwischen dem US-Präsidenten und seinem Herausforderer soll sichergestellt werden, dass sich die Teilnehmer nicht dreinreden können. Mit einer Schaltung soll die Tonübertragung nur aktiviert werden, wenn einer der Teilnehmer spricht. Wenn keiner oder beide sprechen, soll die Übertragung ausgeschaltet werden.

![](images/06-presidential-debate.svg)


### Dating-Show

Bei einer Dating-Show sollen die potenziellen Paare gleichzeitig aber unabhängig Ja/Nein-Fragen mittels Ein-/Aus-Schalter beantworten. Bei einer Übereinstimmung der Antworten soll ein Herz aufleuchten.

![](images/06-dating-show.svg)

:::aufgabe
<Answer type="state" webKey="e4f4b7dc-4798-431b-8937-433534489d0b" />

Entwerfen Sie je eine Schaltung für die folgenden Szenarien. Sie können **OR-Gatter** oder **XOR-Gatter** sowie **Inverter** verwenden. Gehen Sie für jedes Szenario so vor:

- Erstellen Sie eine Wahrheitstabelle für das Szenario.
- Entwerfen Sie die Schaltung in CircuitVerse inklusive Beschriftung.
- Überprüfen Sie, ob die Schaltung mit der Wahrheitstabelle übereinstimmt.

1. **Anna und Bert**: Anna und Bert arbeiten in einem dunklen Archiv im Keller. Immer wenn jemand von ihnen im Archiv ist, soll Licht brennen. Sie hören gerne Musik – allerdings nicht, wenn beide arbeiten, dann haben sie stets viel zu besprechen. Anna und Bert geben an, ob sie im Büro sind, indem sie je einen eigenen Schalter betätigen.

    ![](images/06-ex-anna-bert.svg)

    <Answer type="text" webKey="5a90fb23-ee8e-4b25-93ca-796a5155371c" />

<Solution webKey="cd1f61e3-5a8e-4d54-8f64-1316d6f0268f">

![](images/06-ex-anna-bert-solution.svg)
</Solution>

2. **Dating-Show 1**: Die Schaltung der Dating-Show soll so erweitert werden, dass zusätzlich ein Kreuz aufleuchtet, falls die Antworten **nicht** übereinstimmen.

    ![](images/06-ex-dating-show-1.svg)

    <Answer type="text" webKey="5938ec48-8dc1-46c6-932d-befaeddca3f8" />

<Solution webKey="cd1f61e3-5a8e-4d54-8f64-1316d6f0268f">

![](images/06-ex-dating-show-1-solution.svg)
</Solution>

3. **Dating-Show 2**: Das vorherige Beispiel soll so ausgebaut werden, dass die Lampen erst leuchten, wenn die Moderatorin mit einem Druckknopf das Resultat freigibt.

    ![](images/06-ex-dating-show-2.svg)

    <Answer type="text" webKey="4fb183c7-6522-4c58-982f-1b7338d45509" />

<Solution webKey="cd1f61e3-5a8e-4d54-8f64-1316d6f0268f">

![](images/06-ex-dating-show-2-solution.svg)
</Solution>

4. **⭐️ Schwimmbadabdeckung**: Ein Schwimmbecken verfügt auf einer Seite über eine aufgerollte Abdeckung. Diese wird beim Schliessen von einem Motor mit zwei Seilen über das Schwimmbecken gezogen. Beim Öffnen wird die Abdeckung von einem anderen Motor aufgerollt. Jeder Motor wird mit einem eigenen Druckknopf in Gang gebracht. Es soll sichergestellt werden, dass nie beide Motoren gleichzeitig laufen und dadurch die Abdeckung in Stücke reissen.

    ![](images/06-ex-swimming-pool.svg)

    <Answer type="text" webKey="91489788-473e-49ca-bfde-fe34fa2f2b16" />

<Solution webKey="cd1f61e3-5a8e-4d54-8f64-1316d6f0268f">

![](images/06-ex-swimming-pool-solution.svg)
</Solution>
:::

:::aufgabe
<Answer type="state" webKey="3e27b438-ce03-4951-b85d-ba66a481c77b" />

Analysieren Sie die folgende Schaltungen, indem Sie eine Wahrheitstabelle erstellen. Kann man die Schaltung vereinfachen? Wie?

1. ![](images/06-cv-XOR-AND.png)

    <Answer type="text" webKey="075b07dc-2eb9-40a8-9a7c-338ba443b424" />

<Solution webKey="cd1f61e3-5a8e-4d54-8f64-1316d6f0268f">

Wahrheitstabelle:

```
A    B  |  X
--------|----
0    0  |  0
1    0  |  0
0    1  |  1
1    1  |  0
```

![](images/06-cv-XOR-AND-solution.png)

</Solution>

2. ![](images/06-cv-4-XOR.png)

    <Answer type="text" webKey="e12a6ab6-8bff-4084-859e-1e2a3db7c87d" />

<Solution webKey="cd1f61e3-5a8e-4d54-8f64-1316d6f0268f">

Wahrheitstabelle:

```
A    B  |  X
--------|----
0    0  |  0
1    0  |  1
0    1  |  1
1    1  |  0
```

:mdi-arrow-right: ein einzelnes `XOR`-Gatter reicht aus...

</Solution>
:::
