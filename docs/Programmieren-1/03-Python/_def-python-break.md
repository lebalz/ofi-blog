:::def `break`
Mit `break` kann eine Wiederholter Codeblock beendet werden. Die Ausführung geht mit der nächsten Zeile nach dem Codeblock weiter.

**Beispiel**

```py live_py slim
for i in range(10):
    print('Zahl', i)
    if i == 4:
        break
print('Ende')
```

**Bemerke**: Bei `i == 4` wird `break` aufgerufen und das Programm führt als nächstes die Zeile 5 aus.

:::