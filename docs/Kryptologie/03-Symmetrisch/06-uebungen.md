---
sidebar_custom_props:
  id: 1a04affb-3d17-4f2f-ad01-8423c3bb8732
---

import {UPPER_NOSPACE} from '@site/src/components/Answer';
import {TextEditor} from "@site/src/components/VisualizationTools/Pentacode";

# Übungen

Lösen Sie die Übungen von Hand (daher nur mit dem Pentacode-Editor als Hilfsmittel).
## ECB Modus

<TextEditor />

:::aufgabe[1. XOR Verschlüsselung]
Verschlüsseln Sie den Text `BUCHSTABENSPIELE` mit dem Schlüssel `AKRONYM`

<Answer type="text" webKey="a30ab42b-0e2a-4452-a7a4-f34c96e8a4cd" monospace />


<Answer label="Text (nicht binär)" type="string" webKey="b680e137-905a-4bc5-a05a-fe65bc1684ee" solution="C?QG.MLCN--?PHMN" sanitizer={UPPER_NOSPACE}/>

:::

:::aufgabe[2. XOR Entschlüsseln]
Entschlüsseln Sie den Text `XWVJZWEKK,XWVJIK` mit dem Schlüssel `VVXKZ`

<Answer type="text" webKey="f0c2bc43-cc15-4f58-8466-19f2f3374d2e" monospace />

<Answer label="Text (nicht binär)" type="string" webKey="f877bdef-a2e9-4b82-a6cc-1b61109970c7" solution="NANA ASS ANANAS." sanitizer={UPPER_NOSPACE}/>
:::

## CBC Modus

:::info[Hinweis CBC-Modus]
- Jeder Block hat genau so viele Bits wie der Schlüssel. (Hier werden also meist 2 Buchstaben (=`10` bits) pro Antwort in einem Block verwendet.)
- `c1` ist ein Zwischenresultat, damit wird weitergearbeitet...
:::

::::aufgabe[3. CBC-Modus: Verschlüsseln]

![CBC: Verschlüsseln](images/CBC_encryption.svg)

Verschlüsseln Sie den Text `WINTER` mit dem Schlüssel `NY` und dem IV `AZ`.

<Answer type="text" webKey="aeaf6634-df2d-427f-9daa-970ff225f105" monospace />

<br />

(Antworten als Penta-Binärcode)
:::cards[--rows=3 --min-width=250px --font-family=monospace]
**Block 1**
<Answer label="p" width="12em" labelWidth="3em" type="string" webKey="9f33bc0e-1475-49ee-8201-f389920f3da7" solution="10111 01001" sanitizer={UPPER_NOSPACE}/>
<Answer label="IV" width="12em" labelWidth="3em" type="string" webKey="576d141c-99d1-41dd-9cb6-2536b5eefc61" solution="00001 11010" sanitizer={UPPER_NOSPACE}/>
<i>Nach XOR mit IV </i>
<Answer label="c1" width="12em" labelWidth="3em" type="string" webKey="6280885d-6427-4403-a09a-144b04f76716" solution="10110 10011" sanitizer={UPPER_NOSPACE}/>
<Answer label="k" width="12em" labelWidth="3em" type="string" webKey="53ff56be-1a4b-4ad0-86fb-a98590d83d50" solution="01110 11001" sanitizer={UPPER_NOSPACE}/>
<i>Nach XOR mit Schlüssel</i>
<Answer label="c" width="12em" labelWidth="3em" type="string"  webKey="029d1f0e-f597-4eb4-bac5-7c9ef6d8e849" solution="11000 01010" sanitizer={UPPER_NOSPACE}/>

***
**Block 2**

<Answer label="p" type="string" width="12em" labelWidth="3em"webKey="55c93903-3bdb-4189-8f80-68bb19f4cbd1" solution="01110 10100" sanitizer={UPPER_NOSPACE}/>
<Answer label="IV" type="string" width="12em" labelWidth="3em"webKey="4fd15699-160c-4738-8288-b9d2a3ac40d3" solution="11000 01010" sanitizer={UPPER_NOSPACE}/>
<i>Nach XOR mit IV </i>
<Answer label="c1" width="12em" labelWidth="3em" type="string" webKey="52dc90fe-224a-4739-b277-1181fb41c265" solution="10110 11110" sanitizer={UPPER_NOSPACE}/>
<Answer label="k" width="12em" labelWidth="3em" type="string" webKey="53ff56be-1a4b-4ad0-86fb-a98590d83d50" disabled/>
<i>Nach XOR mit Schlüssel</i>
<Answer label="c" width="12em" labelWidth="3em" type="string"  webKey="2bbfd220-5673-488a-a903-528ef7324885" solution="11000 00111" sanitizer={UPPER_NOSPACE}/>
***

**Block 3**

<Answer width="12em" labelWidth="3em"label="p" type="string" webKey="8e2339e3-d4d9-4339-9709-bbbaf28e4e05" solution="00101 10010" sanitizer={UPPER_NOSPACE}/>
<Answer width="12em" labelWidth="3em"label="IV" type="string" webKey="8db5f43f-0bcd-4d11-8bca-a72286778e65" solution="11000 00111" sanitizer={UPPER_NOSPACE}/>
<i>Nach XOR mit IV </i>
<Answer label="c1" width="12em" labelWidth="3em" type="string" webKey="3a7ac8ec-b6c6-4acd-b123-f1ca84d99fad" solution="11101 10101" sanitizer={UPPER_NOSPACE}/>
<Answer label="k" width="12em" labelWidth="3em" type="string" webKey="53ff56be-1a4b-4ad0-86fb-a98590d83d50" disabled/>
<i>Nach XOR mit Schlüssel</i>
<Answer label="c" width="12em" labelWidth="3em" type="string"  webKey="a44a611e-6cff-41ea-9277-4b0859ea6249" solution="10011 01100" sanitizer={UPPER_NOSPACE}/>
:::

<Answer label="Text (nicht binär)" type="string" webKey="dabff993-1dc5-43c8-bfca-f944c8dc3f96" solution="XJXGSL" sanitizer={UPPER_NOSPACE}/>
::::


::::aufgabe[4. CBC-Modus: Entschlüsseln]

![CBC Entschlüsseln](images/CBC_decryption.svg)

Entschlüsseln Sie den Text `NNHDFBA` mit dem Schlüssel `BE` und beliebigem IV.

<Answer type="text" webKey="1d46518d-94df-4d09-8d12-ae6f28df2b67" monospace />

<br />

(Antworten als Penta-Binärcode)
:::cards[--rows=4 --min-width=250px --font-family=monospace]
**Block 1**
<Answer label="c" width="12em" labelWidth="3em" type="string" webKey="150519fd-560b-42e6-acec-58407af94ada" solution="01110 01110" sanitizer={UPPER_NOSPACE}/>
<Answer label="k" width="12em" labelWidth="3em" type="string" webKey="f20e9df7-4811-4856-a487-02e2ed6b883b" solution="00010 00101" sanitizer={UPPER_NOSPACE}/>
<i>Nach XOR mit Schlüssel </i>
<Answer label="c1" width="12em" labelWidth="3em" type="string" webKey="92338241-0b77-4195-b65b-c4cf64bf6734" solution="01100 01011" sanitizer={UPPER_NOSPACE}/>
<Answer label="IV" width="12em" labelWidth="3em" type="string" webKey="aa136c52-c970-437f-b9ff-270468514137" checker={(val) => UPPER_NOSPACE(val)?.length === 10}/>
<i>Nach XOR mit IV </i>
<Answer label="p" width="12em" labelWidth="3em" type="string"  webKey="14beb904-594a-43ff-a67c-88b9ce93cb3c" checker={(val) => UPPER_NOSPACE(val)?.length === 10}/>

***
**Block 2**

<Answer label="c" type="string" width="12em" labelWidth="3em"webKey="97948788-feeb-4c72-94fe-5e176283218a" solution="01000 00100" sanitizer={UPPER_NOSPACE}/>
<Answer label="k" type="string" width="12em" labelWidth="3em"webKey="f20e9df7-4811-4856-a487-02e2ed6b883b" disabled/>
<i>Nach XOR mit Schlüssel</i>
<Answer label="c1" width="12em" labelWidth="3em" type="string" webKey="b4afd242-e054-4f3c-b865-2d14cc206057" solution="01010 00001" sanitizer={UPPER_NOSPACE}/>
<Answer label="IV" width="12em" labelWidth="3em" type="string" webKey="d9ff2b83-e6de-490b-be42-11d4d4676da7" solution="01110 01110" sanitizer={UPPER_NOSPACE}/>
<i>Nach XOR mit IV </i>
<Answer label="p" width="12em" labelWidth="3em" type="string"  webKey="00ac07c4-7f1f-4d9a-a908-7f41f20621b0" solution="00100 01111" sanitizer={UPPER_NOSPACE}/>
***

**Block 3**

<Answer label="c" width="12em" labelWidth="3em" type="string" webKey="b99355ce-bc59-4ac6-8183-cada8a706b27" solution="00110 00010" sanitizer={UPPER_NOSPACE}/>
<Answer label="k" width="12em" labelWidth="3em" type="string" webKey="f20e9df7-4811-4856-a487-02e2ed6b883b" disabled/>
<i>Nach XOR mit Schlüssel</i>
<Answer label="c1" width="12em" labelWidth="3em" type="string" webKey="dc3049f2-5006-4507-8dd5-8759b7c24465" solution="00100 00111" sanitizer={UPPER_NOSPACE}/>
<Answer label="IV" width="12em" labelWidth="3em" type="string" webKey="e33acd9e-ccbf-4d39-aea2-9ee51b665fb2" solution="01000 00100" sanitizer={UPPER_NOSPACE}/>
<i>Nach XOR mit IV </i>
<Answer label="p" width="12em" labelWidth="3em" type="string"  webKey="1bcc452d-3099-4ab4-b24d-b24407a63c41" solution="01100 00011" sanitizer={UPPER_NOSPACE}/>
***

**Block 4**

<Answer label="c" width="12em" labelWidth="3em" type="string" webKey="30d7f06d-2d98-4649-b585-c3e0e11841fc" solution="00001" sanitizer={UPPER_NOSPACE}/>
<Answer label="k" width="12em" labelWidth="3em" type="string" webKey="f20e9df7-4811-4856-a487-02e2ed6b883b" disabled/>
<i>Nach XOR mit Schlüssel</i>
<Answer label="c1" width="12em" labelWidth="3em" type="string" webKey="69af84b4-3d3a-4377-adbb-6870b71cb9c7" solution="00011" sanitizer={UPPER_NOSPACE}/>
<Answer label="IV" width="12em" labelWidth="3em" type="string" webKey="791d6b06-0ab1-4cb7-82d2-388ed8cd7626" solution="00110" sanitizer={UPPER_NOSPACE}/>
<i>Nach XOR mit IV </i>
<Answer label="p" width="12em" labelWidth="3em" type="string"  webKey="d0fbef85-346d-4d70-bb60-972205240d36" solution="00101" sanitizer={UPPER_NOSPACE}/>
:::

<Answer label="Text (nicht binär)"  type="string" webKey="4ce989c5-27ad-4146-bdf6-adb7b5908b55" solution="DOLCE" sanitizer={(val) => UPPER_NOSPACE(val)?.length === 7 ? UPPER_NOSPACE(val).slice(2) : UPPER_NOSPACE(val)}/>
::::
