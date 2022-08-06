---
sidebar_custom_props:
  id: f20bb7f5-4433-4cee-bad6-b169bbcd4e37
---

# Struktos

import Strukto from '@site/src/components/struktogramm/Strukto';

:::flex --min=250px --gap=50px
```py live_py slim
for i in range(5):
    left(90)
    forward(17)
    right(90)
    forward(29) 
```
***
<Strukto program={[
    {
        type: 'repeat', 
        code: <span><u>5</u> mal wiederholen:</span>,
        block: [
            {type: 'step', code: <span><u>90</u>° nach links</span>},
            {type: 'step', code: <span><u>17</u> Schritte vorwärts</span>},
            {type: 'step', code: <span><u>90</u>° nach rechts</span>},
            {type: 'step', code: <span><u>29</u> Schritte vorwärts</span>}
        ]
    }
]} />
:::
