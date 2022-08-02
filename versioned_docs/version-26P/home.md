---
sidebar_position: 0.1
sidebar_label: 26P
---

import Table from "@site/src/components/Table";
import {SortTimeTableByDate} from '@site/src/helpers/time';
import hs2022 from "./26P_HS2022.json"

# 26P Informatik

<Table
  header={["Datum", "Thema", "Inhalt"]}
  compact
  selectable
  rows={hs2022}
  order={SortTimeTableByDate}
/>