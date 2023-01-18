---
sidebar_custom_props:
  id: a227a176-bf7b-4b1f-a062-fc7369111932
  source:
    name: Gym-Kirchenfeld
    ref: https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero
---
# Tastaturereignisse
---

```py
def on_key_down(taste):
```
wird aufgerufen, wenn eine Taste gedrückt wird.

```py
def on_key_up(taste):
```
wird aufgerufen, wenn eine Taste losgelassen wird.

Die Variable `taste` kann folgende Werte annehmen:

| Taste | Variable |           Taste | Variable           | Taste | Variable   |
| -----:|:-------- | ---------------:|:------------------ | -----:|:---------- |
|   [A] | `keys.A` |             [Y] | `keys.Y`           |       |            |
|   [B] | `keys.B` |             [Z] | `keys.Z`           |   [0] | `keys.K_0` |
|   [C] | `keys.C` |             [ä] | `keys.QUOTE`       |   [1] | `keys.K_1` |
|   [D] | `keys.D` |             [ö] | `keys.SEMICOLON`   |   [2] | `keys.K_2` |
|   [E] | `keys.E` |             [ü] | `keys.LEFTBRACKET` |   [3] | `keys.K_3` |
|   [F] | `keys.F` |             [,] | `keys.COMMA`       |   [4] | `keys.K_4` |
|   [G] | `keys.G` |             [.] | `keys.PERIOD`      |   [5] | `keys.K_5` |
|   [H] | `keys.H` |         [Space] | `keys.SPACE`       |   [6] | `keys.K_6` |
|   [I] | `keys.I` |           [Tab] | `keys.TAB`         |   [7] | `keys.K_7` |
|   [J] | `keys.J` |     [Backspace] | `keys.BACKSPACE`   |   [8] | `keys.K_8` |
|   [K] | `keys.K` |         [Enter] | `keys.RETURN`      |   [9] | `keys.K_9` |
|   [L] | `keys.L` |           [Esc] | `keys.ESCAPE`      |  [F1] | `keys.F1`  |
|   [M] | `keys.M` |      [CapsLock] | `keys.CAPSLOCK`    |  [F2] | `keys.F2`  |
|   [N] | `keys.N` |   Linke [Shift] | `keys.LSHIFT`      |  [F3] | `keys.F3`  |
|   [O] | `keys.O` |  Rechte [Shift] | `keys.RSHIFT`      |  [F4] | `keys.F4`  |
|   [P] | `keys.P` |    Linke [Ctrl] | `keys.LCTRL`       |  [F5] | `keys.F5`  |
|   [Q] | `keys.Q` |   Rechte [Ctrl] | `keys.RCTRL`       |  [F6] | `keys.F6`  |
|   [R] | `keys.R` |     Linke [Alt] | `keys.LALT`        |  [F7] | `keys.F7`  |
|   [S] | `keys.S` | Rechte [Alt Gr] | `keys.RALT`        |  [F8] | `keys.F8`  |
|   [T] | `keys.T` |            [Up] | `keys.UP`          |  [F9] | `keys.F9`  |
|   [U] | `keys.U` |          [Left] | `keys.LEFT`        | [F10] | `keys.F10` |
|   [V] | `keys.V` |          [Down] | `keys.DOWN`        | [F11] | `keys.F11` |
|   [W] | `keys.W` |         [Right] | `keys.RIGHT`       | [F12] | `keys.F12` |
|   [X] | `keys.X` |                 |                    |       |            |
