---
sidebar_custom_props:
  id: 21e9e5c5-1c63-408f-bc11-d11b13720a8d
---
# Felder Auffüllen

Im vorherigen Schritt wurden alle gleichzahligen Nachbarszellen (und deren Nachbarszellen) mit einem leeren Wert ersetzt. Nun sollen die leeren Zellen zusammengeschoben werden.
1. An der Stelle der ausgewählten Zelle wird der ursprüngliche Wert verdoppelt.

    ```
    Spalte 2, Zeile 3 ausgewählt (Zahl 4)

        1   2   3   4   5                  1   2   3   4   5  
    ---------------------              ---------------------
    1 | 2 | 4 | 1 | 8 | 8 |            1 | 2 | 4 | 1 | 8 | 8 |
    ---------------------              ---------------------
    2 |   | 2 | 8 |   | 1 |            2 |   | 2 | 8 |   | 1 |
    ---------------------              ---------------------
    3 |   |[4]|   |   | 2 |     --->   3 |   | 8 |   |   | 2 |
    ---------------------              ---------------------
    4 | 2 | 8 | 1 |   | 1 |            4 | 2 | 8 | 1 |   | 1 |
    ---------------------              ---------------------
    5 | 2 |   |   |   |   |            5 | 2 |   |   |   |   |
    ---------------------              ---------------------
    ```

2. Jede Spalte wird von unten her durchgegangen. Ist die Zelle leer, wird der Wert mit der nächstmöglichen, nichtleeren Zelle derselben Spalte getauscht.
   
<GTabs getLabel={(idx) => ['Beispiel 1', 'Beispiel 2', 'Zeilen 4-1'][idx]} >

```
         1   2   3   4   5        |         1   2                                 1   2    
     ---------------------        |     -----------                           -----------
     1 | 2 | 4 | 1 | 8 | 8 |      |     1 | 2 | 4 |                           1 | 2 | 4 |
     ---------------------        |     -----------                           -----------
     2 |   | 2 | 8 |   | 1 |      |     2 |   | 2 |                           2 |   | 2 |
     ---------------------        |     -----------                           -----------
     3 |   | 8 |   |   | 2 |      |     3 |   | 8 |               --->        3 |   | 8 |
     ---------------------        |     -----------                           -----------
     4 | 2 | 8 | 1 |   | 1 |      |     4 | 2 | 8 | <-- oberhalb leer? Nein   4 | 2 |   | <-- Werte vertauscht
     ---------------------        |     -----------       /                   -----------       /
-->  5 | 2 |   |   |   |   |      |     5 | 2 |   |    <-'                    5 | 2 | 8 |    <-' 
     ---------------------        |     -----------                           -----------
             ^                    |             ^                                     ^   
             |                    |             |                                     |   
```

```
         1   2   3   4   5        |       ...  3   4                                   ...  3   4    
     ---------------------        |      -...---------                                -...---------
     1 | 2 | 4 | 1 | 8 | 8 |      |    1 |...| 1 | 8 | <--.   oberhalb leer? Nein   1 |...| 1 |   | <--.
     ---------------------        |      -...---------     \                          -...---------     \
     2 |   | 2 | 8 |   | 1 |      |    2 |...| 8 |   | <--  | oberhalb leer? Ja     2 |...| 8 |   |      |
     ---------------------        |      -...---------      |                         -...---------      |
     3 |   | 8 |   |   | 2 |      |    3 |...|   |   | <--  | oberhalb leer? Ja     3 |...|   |   |      |
     ---------------------        |      -...---------      |                         -...---------      |
     4 | 2 |   |   |   | 1 |      |    4 |...|   |   | <--  | oberhalb leer? Ja     4 |...|   |   |      |
     ---------------------        |      -...---------     /                          -...---------     /  Werte vertauscht
-->  5 | 2 | 8 | 1 |   |   |      |    5 |...| 1 |   |  <-'                         5 |...| 1 | 8 |  <-' 
     ---------------------        |      -...---------                                -...---------
                     ^            |                ^                                         ^   
                     |            |                |                                         |   
```

```
    Zeile 4                        Zeile 3                       Zeile 2                       Zeile 1
         1   2   3   4   5             1   2   3   4   5             1   2   3   4   5             1   2   3   4   5    
       ---------------------         ---------------------         ---------------------         ---------------------  
     1 | 2 | 4 | 1 |   | 8 |       1 | 2 | 4 | 1 |   | 8 |       1 |   | 4 |   |   | 8 |  -->  1 |   |   |   |   |   |  
       ---------------------         ---------------------         ---------------------         ---------------------  
     2 |   | 2 | 8 |   | 1 |       2 |   | 2 |   |   | 1 |  -->  2 |   |   |   |   |   |       2 | 2 | 4 | 1 |   | 8 |  
       ---------------------         ---------------------         ---------------------         ---------------------  
     3 |   | 8 |   |   | 2 |  -->  3 |   |   |   |   |   |       3 | 2 | 2 | 1 |   | 1 |       3 | 2 | 2 | 1 |   | 1 |  
       ---------------------         ---------------------         ---------------------         ---------------------  
-->  4 | 2 |   |   |   |   |       4 | 2 | 8 | 8 |   | 2 |       4 | 2 | 8 | 8 |   | 2 |       4 | 2 | 8 | 8 |   | 2 |  
       ---------------------         ---------------------         ---------------------         ---------------------  
     5 | 2 | 8 | 1 | 8 | 1 |       5 | 2 | 8 | 1 | 8 | 1 |       5 | 2 | 8 | 1 | 8 | 1 |       5 | 2 | 8 | 1 | 8 | 1 |  
       ---------------------         ---------------------         ---------------------         ---------------------  
```

</GTabs>

3. Alle Zellen werden erneut durchgegangen. Ist eine Zelle leer, so wird eine zufällige ganze Zahl oder 1 als Zellenwert festgelegt. Es kommen also die Zahlen `[1, 2, 4]`, evtl. auch noch die `8` in Frage. Lesen Sie im Kapitel __Programmieren > Python > Zufällige Zahlen__ nach, welche Möglichkeiten zum Erzeugen von zufälligen Zahlen es unter Python gibt.

:::aufgabe Aufgabe
<Answer type="state" webKey="7c436f14-0f29-4795-af02-4e2002e590f4" />

Setzen Sie obigen Algorithmus um. Markieren Sie die Aufgabe anschliessend als erledigt.
:::