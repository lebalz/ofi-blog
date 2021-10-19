import React from "react";
import styles from "./Image.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

interface Bib {
  author?: string;
  source?: string;
  licence?: string;
  licence_url?: string;
  edited?: boolean;
}

interface Options {
  size?: string;
  width?: string;
  height?: string;
  noMargins?: boolean;
}

interface FigProps {
  src: string;
  caption?: string;
  alt?: string;
}

interface Props extends FigProps {
  bib?: Bib;
  options: Options;
  isInline: boolean;
}

const isOver = (bbox: DOMRect, x: number, y: number) => {
  const lr = bbox.left <= x && bbox.right >= x;
  const tb = bbox.top <= y && bbox.bottom >= y;
  return lr && tb;
};

const BibDetails = (props: Bib) => {
  return (
    <span className={styles.details}>
      <span className={clsx("badge badge--secondary", styles.badgeItem)}>
        Autor: {props.author}
      </span>
      <a href={props.licence_url} target="_blank" className={styles.badgeItem}>
        <span className={clsx("badge badge--secondary")}>
          Lizenz: {props.licence}
        </span>
      </a>
      {props.edited && (
        <span className={clsx("badge badge--secondary", styles.badgeItem)}>
          Bearbeitet
        </span>
      )}
      <a href={props.source} target="_blank" className={styles.badgeItem}>
        <span className={clsx("badge badge--secondary")}>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </span>
      </a>
    </span>
  );
};

const defaultUnit = (value: string, unit: string = "px") => {
  // when only a number is given, add the default unit
  if (/^\d+(\.\d*)?$/.test(value)) {
    return `${value}${unit}`;
  }
  return value;
};

const ResizedImage = (props: Props) => {
  const style: React.CSSProperties = {};
  if (props.options.size) {
    style.maxWidth = defaultUnit(props.options.size);
    style.maxHeight = defaultUnit(props.options.size);
  }
  if (props.options.height) {
    style.maxHeight = defaultUnit(props.options.height);
  }
  if (props.options.width) {
    style.maxWidth = defaultUnit(props.options.width);
  }
  // Object.entries(props.options).forEach(([attr, val]) => {
  //   if (['height', 'width', 'size'].includes(attr)) {
  //     return;
  //   }
  //   style[attr] = val;
  // })

  return (
    <img
      src={props.src}
      alt={props.alt}
      style={style}
      title={
        props.isInline && props.bib
          ? `Author: ${props.bib.author} @ ${props.bib.licence}${
              props.bib.edited ? ", Bearbeitet" : ""
            }`
          : undefined
      }
    />
  );
};

const Image = (props: Props) => {
  if (props.isInline) {
    return <ResizedImage {...props} />;
  }
  const [showControls, setShowControls] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const hasCaption = props.caption && props.caption !== "undefined";
  const hasFigCaption = props.bib || hasCaption;
  return (
    <figure
      className={clsx(styles.container, props.options.noMargins && styles.noMargins)}
      onMouseEnter={() => setShowControls(true)}
      onMouseOut={(e) => {
        if (
          !isOver(e.currentTarget.getBoundingClientRect(), e.clientX, e.clientY)
        ) {
          setShowControls(false);
        }
      }}
    >
      <ResizedImage {...props} />
      {hasFigCaption && (
        <figcaption>

          {hasCaption && (
            <span>{props.caption}</span>
          )}
          {props.bib && (
            <span className={clsx(styles.bib, visible ? styles.visible : undefined)} onClick={() => setVisible(!visible)}>
              @
            </span>
          )}
          {visible && <BibDetails {...props.bib} />}
        </figcaption>
      )}
    </figure>
  );
};

export default Image;
