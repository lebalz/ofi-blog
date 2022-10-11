import React from "react";
import styles from "./styles.module.scss";
import FXSvf from './fx.svg';
import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
}

const ExcelBox = (props: Props) => {
  return (
    <figure>
      <div className={clsx('no-comments', styles.searchContainer)}>
        <div className={styles.searchIcon}>
          <FXSvf  />
        </div>
        <code>
          <slot>{props.children}</slot>
        </code>
      </div>
    </figure>
  );
};

export default ExcelBox;
