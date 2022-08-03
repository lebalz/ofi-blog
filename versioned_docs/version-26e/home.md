---
sidebar_position: 0.1
sidebar_label: 26e
sidebar_custom_props:
  id: b690a135-2569-4a4c-80cf-a9fbf3833b3c
---

import Table from "@site/src/components/Table";
import {SortTimeTableByDate} from '@site/src/helpers/time';
import hs2022 from "./26e_HS2022.json"

# 26e Informatik

<Table
  header={["Datum", "Thema", "Inhalt"]}
  compact
  selectable
  rows={hs2022}
  order={SortTimeTableByDate}
/>
