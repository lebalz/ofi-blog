import React from 'react';
import Admonition from '@theme-original/Admonition';
import type AdmonitionType from '@theme/Admonition';
import type {WrapperProps} from '@docusaurus/types';
import AufgabenIcon from './icons/aufgabe.svg';
import FindingIcon from './icons/finding.svg';
import DefIcon from './icons/def.svg';

type Props = WrapperProps<typeof AdmonitionType>;

export default function AdmonitionWrapper(props: Props): JSX.Element {  
  switch (props.type as string) {
    case 'aufgabe':
      return <Admonition {...props} type="info" icon={<AufgabenIcon />}/>;
    case 'finding':
      return <Admonition {...props} type="caution" icon={<FindingIcon />}/>;
      case 'def':
        return <Admonition {...props} type="info" icon={<DefIcon />}/>;
      case 'warn':
      case 'warning':
          return <Admonition {...props} type="caution"/>;
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
