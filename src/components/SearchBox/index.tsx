import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  caption?: string;
}

const SearchBox = (props: Props) => {
  return (
    <figure className={styles.searchFigure}>
      <div className={styles.searchContainer}>
        <p style={{margin: 0}}>
          <slot>{props.children}</slot>
        </p>
        <i className={clsx(styles.searchIcon, 'mdi', 'mdi-magnify')}></i>
      </div>
      {props.caption && (
        <figcaption>{props.caption}</figcaption>
      )}
    </figure>
  );
};

export default SearchBox;
