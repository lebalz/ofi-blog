---
title: Struktos
---

import Strukto from '@site/src/components/struktogramm/Strukto';
import Flex from '@site/src/components/Flex';

<Flex alignItems="end">
<div style={{flexGrow: 1, minWidth: '300px'}}>


```py live_py slim
for i in range(5):
    left(90)
    forward(17)
    right(90)
    forward(29) 
```

</div>
<div style={{flexGrow: 1}}></div>
<div style={{flexGrow: 1}}>
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
</div>

</Flex>