---
sidebar_custom_props:
  id: f42675f8-60e7-4023-9f9a-53f556343cd8
---
# Schlüsselwörter in Python

## Schlüsselwörter

Python kennt `35` **Schlüsselwörter**, sie sind im folgenden aufgelistet.

<div className="small-table no-table-header">

|          |            |           |            |          |
| :------- | :--------- | :-------- | :--------- | :------- |
| `False`  | `await`    | `else`    | `import`   | `pass`   |
| `None`   | `break`    | `except`  | `in`       | `raise`  |
| `True`   | `class`    | `finally` | `is`       | `return` |
| `and`    | `continue` | `for`     | `lambda`   | `try`    |
| `as`     | `def`      | `from`    | `nonlocal` | `while`  |
| `assert` | `del`      | `global`  | `not`      | `with`   |
| `async`  | `elif`     | `if`      | `or`       | `yield`  |

</div>

:::danger[Achtung]
Diese Schlüsselwörter sollten **nicht** als Namen für eine Variable oder für ein Unterprogramm verwendet werden.
:::
## Spezielle Zeichen in Python:

### Feldtrenner (_delimiter_)

<div className="small-table no-table-header">

|      |      |      |      |       |       |       |
| :--- | :--- | :--- | :--- | :---- | :---- | :---- |
| `(`  | `)`  | `[`  | `]`  | `{`   | `}`   |       |
| `,`  | `:`  | `.`  | `;`  | `@`   | `=`   | `->`  |
| `+=` | `-=` | `*=` | `/=` | `//=` | `%=`  | `@=`  |
| `&=` | `    | =`   | `^=` | `>>=` | `<<=` | `**=` |

</div>

### Zeichen mit spezieller Bedeutung

- `'` Markiert einen Texte
- `"` Markiert einen Texte
- `#` Kommentar
- `\` Spezielles Steuerzeichen, bspw. um eine **n**eue Zeile zu machen: `\n`  
```py live_py slim
print('Zeile 1\nZeile 2')
```

### Operatoren

<div className="small-table no-table-header">

|      |      |      |      |      |      |      |     |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | --- |
| `+`  | `-`  | `*`  | `**` | `/`  | `//` | `%`  |     |
| `<<` | `>>` | `&`  | `    | `    | `^`  | `~`  | `@` |
| `<`  | `>`  | `<=` | `>=` | `==` | `!=` | `:=` |     |

</div>
