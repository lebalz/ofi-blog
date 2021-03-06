import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Figure from '../components/Figure';
import SourceRef from '../components/SourceRef';
import DefinitionList from '../components/DefinitionList';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Figure: Figure,
  SourceRef: SourceRef,
  dl: DefinitionList,
};