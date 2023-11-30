---
sidebar_position: 0.1
sidebar_label: 26P
sidebar_custom_props:
  id: 04d530dc-7809-476c-b133-7c23f7bdfae2
---

import Table from "@site/src/components/Table";
import {SortTimeTableByDate} from '@site/src/helpers/time';
import fs2023 from "./26P_FS2023.json"
import hs2022 from "./26P_HS2022.json"
import hk2022 from "./26P-HK_HS2022.json"
import hs2023 from "./26P_HS2023.json"
import Winter from "@site/src/components/Theme/Winter";

<Winter />


# 26P Informatik

<Table
  header={["Datum", "Thema", "Inhalt"]}
  compact
  selectable
  rows={hs2023}
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

:::details 2. Semester
<Table
  header={["Datum", "Thema", "Inhalt"]}
  compact
  selectable
  rows={fs2023}
  order={SortTimeTableByDate()}
/>
:::