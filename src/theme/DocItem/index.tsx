import React from 'react';
import DocItem from '@theme-original/DocItem';
import type DocItemType from '@theme/DocItem';
import type {WrapperProps} from '@docusaurus/types';
// @ts-ignore
import { Context } from '@theme/useFrontMatter';
type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): JSX.Element {
  return (
    <Context.Provider value={props.content.frontMatter}>
      <DocItem {...props} />
    </Context.Provider>
  );
}
