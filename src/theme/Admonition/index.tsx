import React from 'react';
import Admonition from '@theme-original/Admonition';
import type AdmonitionType from '@theme/Admonition';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof AdmonitionType>;

export default function AdmonitionWrapper(props: Props): JSX.Element {  
  switch (props.type as string) {
    case 'aufgabe':
      return <Admonition {...props} type="info" />;
    case 'def':
      return <Admonition {...props} type="info" />;
  }
  if (props.type !== 'info') {
    return <Admonition {...props} />;
  }
  return (
    <>
      <Admonition {...props} />
    </>
  );
}
