import React, {ComponentProps} from 'react';
import Playground from '@theme-original/Playground';
// @ts-ignore
import type PlaygroundType from '@theme/Playground';
import styles from "./styles.module.scss";


type Props = ComponentProps<typeof PlaygroundType>

export default function PlaygroundWrapper(props: Props): JSX.Element {
  return (
    <div className={styles.playgroundWrapper}>
      <div className={styles.playgroundContainer}>
        <Playground {...props} />
      </div>
    </div>
  );
}
