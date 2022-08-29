import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Figure from '../components/Figure';
import SourceRef from '../components/Figure/SourceRef';
import DefinitionList from '../components/DefinitionList';
import Answer from '../components/Answer';
import Solution from '../components/Solution';
import Comment from '../components/Comment';
import GTabs from '../components/GTabs';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Comment: Comment,
  Figure: Figure,
  SourceRef: SourceRef,
  dl: DefinitionList,
  Answer: Answer,
  Solution: Solution,
  Tabs: Tabs,
  GTabs: GTabs,
  TabItem: TabItem
};