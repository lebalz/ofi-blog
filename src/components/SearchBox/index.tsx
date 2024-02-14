import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import Icon from "@mdi/react";
import { mdiClipboardCheck, mdiClipboardTextOff, mdiLoading, mdiMagnify } from "@mdi/js";

interface Props {
  children?: React.ReactNode;
  caption?: string;
}

type CopyState = 'spin' | 'copied' | 'error';

const CopyIcon: { [key in CopyState]: string } = {
  copied: mdiClipboardCheck,
  error: mdiClipboardTextOff,
  spin: mdiLoading
}

const CopyColor: { [key in CopyState]: string } = {
  copied: 'var(--ifm-color-success)',
  error: 'var(--ifm-color-danger)',
  spin: 'black'
}

const SearchBox = (props: Props) => {
  const [copyState, setCopyState] = React.useState<CopyState | 'none'>('none');

  React.useEffect(() => {
    if (['none', 'spin', 'ready'].includes(copyState)) {
      return;
    }
    const timeoutId = setTimeout(() => setCopyState('none'), 2000);
    return () => clearTimeout(timeoutId);
  }, [copyState]);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setCopyState('spin');
    try {
      navigator.clipboard.writeText(e.currentTarget.textContent).then(() => {
        setCopyState('copied');
      })
        .catch((err) => {
          setCopyState('error');
          console.warn(err);
        });
    } catch (err) {
      console.warn(err);
      setCopyState('error');
    }
  }
  return (
    <figure className={styles.searchFigure}>
      <div className={styles.searchContainer} onClick={onClick}>
        <p style={{margin: 0}}>
          <slot>{props.children}</slot>
        </p>
        <div className={clsx(styles.icons)}>
          {copyState !== 'none' && (
                <Icon path={CopyIcon[copyState]} size={0.8} color={CopyColor[copyState]} className={clsx(styles.copyIcon)} />
          )}
          <Icon path={mdiMagnify} size={1} className={clsx(styles.searchIcon)} />
        </div>
      </div>
      {props.caption && (
        <figcaption>{props.caption}</figcaption>
      )}
    </figure>
  );
};

export default SearchBox;
