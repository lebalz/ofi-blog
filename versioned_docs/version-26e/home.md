---
sidebar_position: 0.1
sidebar_label: 26e
sidebar_custom_props:
  id: b690a135-2569-4a4c-80cf-a9fbf3833b3c
---

import Table from "@site/src/components/Table";
import {SortTimeTableByDate} from '@site/src/helpers/time';
import hs2022 from "./26e_HS2022.json"
import fs2023 from "./26e_FS2023.json"
import hk2022 from "./26e-HK_HS2022.json"

# 26e Informatik

<Table
  header={["Datum", "Thema", "Inhalt"]}
  compact
  selectable
  rows={fs2023}
  order={SortTimeTableByDate()}
/>

:::details 1. Semester

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

:::