---
sidebar_position: 0.1
sidebar_label: 26e
sidebar_custom_props:
  id: b690a135-2569-4a4c-80cf-a9fbf3833b3c
---

import Table from "@site/src/components/Table";
import {SortTimeTableByDate} from '@site/src/helpers/time';
import hs2022 from "./26e_HS2022.json"
import hk2022 from "./26e-HK_HS2022.json"
import Winter from "@site/src/components/Theme/Winter";

<Winter />
# 26e Informatik

:::success Word Probe
<Solution webKey="5ba6b51b-db2a-461c-a3d1-ac934806624f" open title="Link zur Probe">

[👉 Hier gehts zur Prüfung](/text-templates/01-p26)

</Solution>
:::


<Tabs
    defaultValue="theorie"
    values={[
      {label: 'Einzellektion', value: 'theorie'},
      {label: 'Praktikum', value: 'hk'}
    ]}
>
<TabItem value="theorie">
<Table
  header={["Datum", "Thema", "Inhalt"]}
  compact
  selectable
  rows={hs2022}
  order={SortTimeTableByDate()}
/>

</TabItem>

<TabItem value="hk">
<Table
  header={["Datum", "Halbklasse", "Thema", "Inhalt"]}
  compact
  selectable
  rows={hk2022}
  order={SortTimeTableByDate()}
/>
</TabItem>
</Tabs>
