Anstatt Zahlen im Dezimalsystem oder Binärsystem zu schreiben, kann auch das Hexadezimalsystem mit `16` eindeutigen Zeichen verwendet werden. Dabei werden die zehn Zahlenziffern mit den ersten 6 Buchstaben des Alphabets ergänzt:

<div className="slim-table no-header">

|         |        |        |        |        |        |        |        |        |        |        |        |        |        |        |        |        |
| :------ | -----: | -----: | -----: | -----: | -----: | -----: | -----: | -----: | -----: | -----: | -----: | -----: | -----: | -----: | -----: | -----: |
| **Hex** |    `0` |    `1` |    `2` |    `3` |    `4` |    `5` |    `6` |    `7` |    `8` |    `9` |    `A` |    `B` |    `C` |    `D` |    `E` |    `F` |
| **Dez** |    `0` |    `1` |    `2` |    `3` |    `4` |    `5` |    `6` |    `7` |    `8` |    `9` |   `10` |   `11` |   `12` |   `13` |   `14` |   `15` |
| **Bin** | `0000` | `0001` | `0010` | `0011` | `0100` | `0101` | `0110` | `0111` | `1000` | `1001` | `1010` | `1011` | `1100` | `1101` | `1110` | `1111` |

</div>

Jede Stelle in einer Hexadezimal-Zahl entspricht hier einer 16er Potenz:


$$\
\begin{aligned}

A3D_{16} &= A \cdot 16^2 + 3 \cdot 16^1 + D \cdot 16^0 \\
    &= 11 \cdot 256 + 3 \cdot 16 + 13 \cdot 1 \\
    &= 2816 + 48 + 13 \\
    &= 2877_{10}

\end{aligned}$$

#### Anwendungsbereich

Das praktische bei Hexadezimalzahlen: `4 bits` können mit nur **einer** Hexadezimalzahl geschrieben werden, was deutlich übersichtlicher wird:

$$
1101_{2} = 13_{10} = D_{16}
$$

Ein Byte (8 bits) werden dann konventionell als zwei Hexadezimal Zahlen geschrieben:

```
1101 1001 = D9
F5 = 1111 1001
```
