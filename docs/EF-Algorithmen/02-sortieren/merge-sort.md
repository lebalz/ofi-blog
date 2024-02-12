---
sidebar_custom_props:
  id: 987f9ec7-9216-456e-819a-5e3d78abd6a2
---

import JassCard, { SplitLine } from '@site/src/components/JassCard';
import Stack from '@site/src/components/JassCard/Stack';

# Merge Sort

Der Merge Sort ist ein stabiler Sortieralgorithmus, der auf dem Prinzip des Teilen und Herrschen (Divide-and-Conquer) beruht. Dabei wird das Problem in kleinere Teilprobleme zerlegt, die dann rekursiv gelöst werden. Die Lösungen der Teilprobleme werden dann zu einer Lösung des Gesamtproblems zusammengefügt.

### Aufteilen
:::cards
<div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
    <JassCard value={9} suit="HEARTS" />
    <JassCard value={5} suit="HEARTS" />
    <JassCard value={7} suit="HEARTS" />
    <JassCard value={2} suit="HEARTS" />
    <JassCard value={4} suit="HEARTS" />
    <JassCard value={3} suit="HEARTS" />
    <JassCard value={8} suit="HEARTS" />
    <JassCard value={6} suit="HEARTS" />
</div>
:::

<div style={{display: 'flex', justifyContent: 'space-between', gap: '30px'}}>
:::cards
<div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
    <JassCard value={9} suit="HEARTS" />
    <JassCard value={5} suit="HEARTS" />
    <JassCard value={7} suit="HEARTS" />
    <JassCard value={2} suit="HEARTS" />
</div>
:::
:::cards
<div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
        <JassCard value={4} suit="HEARTS" />
        <JassCard value={3} suit="HEARTS" />
        <JassCard value={8} suit="HEARTS" />
        <JassCard value={6} suit="HEARTS" />
</div>
:::
</div>

<div style={{display: 'flex', justifyContent: 'space-between', gap: '30px'}}>
:::cards
<div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
    <JassCard value={9} suit="HEARTS" />
    <JassCard value={5} suit="HEARTS" />
</div>
:::
:::cards
<div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
    <JassCard value={7} suit="HEARTS" />
    <JassCard value={2} suit="HEARTS" />
</div>
:::
:::cards
<div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
    <JassCard value={4} suit="HEARTS" />
    <JassCard value={3} suit="HEARTS" />
</div>
:::
:::cards
<div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
    <JassCard value={8} suit="HEARTS" />
    <JassCard value={6} suit="HEARTS" />
</div>
:::

</div>

<div style={{display: 'flex', justifyContent: 'center', gap: '30px'}}>
    <JassCard value={9} suit="HEARTS" />
    <JassCard value={5} suit="HEARTS" />
    <JassCard value={7} suit="HEARTS" />
    <JassCard value={2} suit="HEARTS" />
    <JassCard value={4} suit="HEARTS" />
    <JassCard value={3} suit="HEARTS" />
    <JassCard value={8} suit="HEARTS" />
    <JassCard value={6} suit="HEARTS" />
</div>

### Sortieren durch Zusammenfügen (Merge)

<div style={{display: 'flex', justifyContent: 'space-around', gap: '10px'}}>
    <Stack cards={[{value: 5, suit: 'HEARTS'}, {value: 9, suit: 'HEARTS'}]} />
    <Stack cards={[{value: 2, suit: 'HEARTS'}, {value: 7, suit: 'HEARTS'}]} />
    <Stack cards={[{value: 3, suit: 'HEARTS'}, {value: 4, suit: 'HEARTS'}]} />
    <Stack cards={[{value: 6, suit: 'HEARTS'}, {value: 8, suit: 'HEARTS'}]} />
</div>


<div style={{display: 'flex', justifyContent: 'space-around', gap: '10px'}}>
    <Stack width={150} cards={[{value: 2, suit: 'HEARTS'}, {value: 5, suit: 'HEARTS'}, {value: 7, suit: 'HEARTS'}, {value: 9, suit: 'HEARTS'}]} />
    <Stack width={150} cards={[{value: 3, suit: 'HEARTS'}, {value: 4, suit: 'HEARTS'}, {value: 6, suit: 'HEARTS'}, {value: 8, suit: 'HEARTS'}]} />
</div>


<div style={{display: 'flex', justifyContent: 'space-around', gap: '10px'}}>
    <Stack 
        cards={[
            {value: 2, suit: 'HEARTS'},
            {value: 3, suit: 'HEARTS'},
            {value: 4, suit: 'HEARTS'}, 
            {value: 5, suit: 'HEARTS'},
            {value: 6, suit: 'HEARTS'},
            {value: 7, suit: 'HEARTS'},
            {value: 8, suit: 'HEARTS'},
            {value: 9, suit: 'HEARTS'}
        ]}
        width={200}
    />
</div>

## Mit Zahlen

![Nicht gerade Anzahl Elemente](./images/merge-sort-example.png)