---
sidebar_custom_props:
  id: 74e85854-4d50-42eb-81a1-900e9c35fc04
  source:
    name: Gym-Kirchenfeld
    ref: https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero
---

import keyboard from './keyboard.raw.py';
import CodeBlock from '@theme/CodeBlock';


# Tastaturzustand
---

Das Objekt `keyboard` repräsentiert die Tastatur. Für jede Taste gibt eine entsprechende Variable des `keyboard`-Objekts an, ob diese gerade gedrückt ist.

## Normale Tasten

| Taste | Variable     |           Taste | Variable               | Taste | Variable       |
| -----:|:------------ | ---------------:|:---------------------- | -----:|:-------------- |
|   [A] | `keyboard.a` |             [Y] | `keyboard.y`           |   [0] | `keyboard.k_0` |
|   [B] | `keyboard.b` |             [Z] | `keyboard.z`           |   [1] | `keyboard.k_1` |
|   [C] | `keyboard.c` |             [ä] | `keyboard.quote`       |   [2] | `keyboard.k_2` |
|   [D] | `keyboard.d` |             [ö] | `keyboard.semicolon`   |   [3] | `keyboard.k_3` |
|   [E] | `keyboard.e` |             [ü] | `keyboard.leftbracket` |   [4] | `keyboard.k_4` |
|   [F] | `keyboard.f` |                 |                        |   [5] | `keyboard.k_5` |
|   [G] | `keyboard.g` |             [,] | `keyboard.comma`       |   [6] | `keyboard.k_6` |
|   [H] | `keyboard.h` |             [.] | `keyboard.period`      |   [7] | `keyboard.k_7` |
|   [I] | `keyboard.i` |         [Space] | `keyboard.space`       |   [8] | `keyboard.k_8` |
|   [J] | `keyboard.j` |           [Tab] | `keyboard.tab`         |   [9] | `keyboard.k_9` |
|   [K] | `keyboard.k` |     [Backspace] | `keyboard.backspace`   |  [F1] | `keyboard.f1`  |
|   [L] | `keyboard.l` |         [Enter] | `keyboard.return`      |  [F2] | `keyboard.f2`  |
|   [M] | `keyboard.m` |           [Esc] | `keyboard.escape`      |  [F3] | `keyboard.f3`  |
|   [N] | `keyboard.n` |      [CapsLock] | `keyboard.capslock`    |  [F4] | `keyboard.f4`  |
|   [O] | `keyboard.o` |   Linke [Shift] | `keyboard.lshift`      |  [F5] | `keyboard.f5`  |
|   [P] | `keyboard.p` |  Rechte [Shift] | `keyboard.rshift`      |  [F6] | `keyboard.f6`  |
|   [Q] | `keyboard.q` |    Linke [Ctrl] | `keyboard.lctrl`       |  [F7] | `keyboard.f7`  |
|   [R] | `keyboard.r` |   Rechte [Ctrl] | `keyboard.rctrl`       |  [F8] | `keyboard.f8`  |
|   [S] | `keyboard.s` |     Linke [Alt] | `keyboard.lalt`        |  [F9] | `keyboard.f9`  |
|   [T] | `keyboard.t` | Rechte [Alt Gr] | `keyboard.ralt`        | [F10] | `keyboard.f10` |
|   [U] | `keyboard.u` |            [Up] | `keyboard.up`          | [F11] | `keyboard.f11` |
|   [V] | `keyboard.v` |          [Left] | `keyboard.left`        | [F12] | `keyboard.f12` |
|   [W] | `keyboard.w` |          [Down] | `keyboard.down`        |       |                |
|   [X] | `keyboard.x` |         [Right] | `keyboard.right`       |       |                |

## Ziffernblock

|         Taste | Variable       |       Taste | Variable               |
| -------------:|:-------------- | -----------:|:---------------------- |
|           [0] | `keyboard.kp0` |         [9] | `keyboard.kp9`         |
|           [1] | `keyboard.kp1` | [.] / [Del] | `keyboard.kp_period`   |
|  [2] / [Down] | `keyboard.kp2` |     [Enter] | `keyboard.kp_enter`    |
|           [3] | `keyboard.kp3` |         [+] | `keyboard.kp_plus`     |
|  [4] / [Left] | `keyboard.kp4` |         [-] | `keyboard.kp_minus`    |
|           [5] | `keyboard.kp5` |         [*] | `keyboard.kp_multiply` |
| [6] / [Right] | `keyboard.kp6` |         [/] | `keyboard.kp_divide`   |
|           [7] | `keyboard.kp7` |       [Num] | `keyboard.numlock`     |
|    [8] / [Up] | `keyboard.kp8` |             |                        |


<CodeBlock language='python'>
{keyboard}
</CodeBlock>