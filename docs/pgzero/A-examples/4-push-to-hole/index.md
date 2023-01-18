---
sidebar_custom_props:
  id: 573133eb-bef6-4a55-b855-0d47f007aaf3
  source:
    name: Gym-Kirchenfeld
    ref: https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero
---

import push_to_hole from './push_to_hole.raw.py';
import CodeBlock from '@theme/CodeBlock';

# Push to Hole
---

## Beschreibung

Ein Ball muss mit der Maus in ein Loch geschoben werden. Das Loch ändert alle paar Sekunden seine Position.

![](./images/screenshot-push-to-hole.png)

## Grafiken

![](./images/ball_blau.png)
![](./images/hole.png)

## Programm

<CodeBlock language='python'>
{push_to_hole}
</CodeBlock>