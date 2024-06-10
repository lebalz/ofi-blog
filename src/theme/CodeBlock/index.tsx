import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import type CodeBlockType from '@theme/CodeBlock';
import type {WrapperProps} from '@docusaurus/types';
// @ts-ignore
import Playground from '@theme/Playground';
// @ts-ignore
import ReactLiveScope from '@theme/ReactLiveScope';

type Props = WrapperProps<typeof CodeBlockType>;
interface MetaProps {
  live_jsx?: boolean;
}
const extractMetaProps = (props: {metastring?: string}): MetaProps => {
  const metaString = (props?.metastring || '').replace(/\s*=\s*/g, '='); // remove spaces around =
  const metaRaw = metaString.split(/\s+/).map((s) => s.trim().split('='));
  return metaRaw.reduce((acc, [key, value]) => {
      /** casts to booleans and numbers. When no value was provided, true is used */
      const val = value === 'true' ? true
                  : value === 'false' ? false
                  : !Number.isNaN(Number(value)) ? Number(value)
                  : value || true;
      acc[key] = val;
      return acc;
  }, {} as {[key: string]: number | string | boolean});
}
export default function CodeBlockWrapper(props: Props): JSX.Element {
  const metaProps = extractMetaProps(props);
  if (metaProps.live_jsx) {
      return <Playground scope={ReactLiveScope} {...props} />;
  }
  return (
    <>
      <CodeBlock {...props} />
    </>
  );
}
