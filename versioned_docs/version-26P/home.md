---
sidebar_position: 0.1
sidebar_label: 26P
sidebar_custom_props:
  id: 04d530dc-7809-476c-b133-7c23f7bdfae2
---

import Table from "@site/src/components/Table";
import {SortTimeTableByDate} from '@site/src/helpers/time';
import hs2022 from "./26P_HS2022.json"
import hk2022 from "./26P-HK_HS2022.json"
import byodTests from "./26P_byod_daten.json"
import Snowfall from 'react-snowfall';

<Snowfall
  style={{
      position: 'fixed',
      width: '100vw',
      height: '100vh',
  }}
/>

# 26P Informatik

:::success Word Probe
<Solution webKey="5ba6b51b-db2a-461c-a3d1-ac934806624f" open title="Link zur Probe">

[👉 Hier gehts zur Prüfung](/text-templates/01-p26)

</Solution>
:::

:::info BYOD-Test Prüfungsdaten
Bereiten Sie sich auf das angegebene Datum für die BYOD-Prüfung vor.
:::details Prüfungsliste
<Table
  header={["Name", "Halbklasse", "Datum"]}
  compact
  selectable
  rows={byodTests}
  order={SortTimeTableByDate(2)}
/>
:::
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
