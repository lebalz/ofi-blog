import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Video.module.scss";

import { faWindowMinimize, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
interface Props {
  src: string;
  type?: "mp4";
  title?: string | JSX.Element;
  expanded?: boolean;
}

export default class Video extends React.Component<Props> {
  state = { open: !!this.props.expanded, visible: false };

  videoRef = React.createRef<HTMLDivElement>();
  //attach our function to document event listener on scrolling whole doc
  componentDidMount() {
    document.addEventListener("scroll", this.isInViewport);
    this.isInViewport();
  }

  //do not forget to remove it after destroyed
  componentWillUnmount() {
    document.removeEventListener("scroll", this.isInViewport);
  }

  isInViewport = () => {
    const bbox = this.videoRef.current.getBoundingClientRect();
    const { top, bottom } = bbox;
    const {innerHeight} = window;
    if (top < innerHeight && bottom > 0) {
      if (!this.state.visible) {
        this.setState({visible: true});
      }
    } else {
      if (this.state.visible) {
        this.setState({visible: false});
      }
    }
  };

  onClick = () => {
    this.setState({ open: !this.state.open });
    this.isInViewport()
  };
  render() {
    const { title, src, type, children } = this.props;

    return (
      <div ref={this.videoRef} className={styles.videoComponent}>
        {this.state.open ? (
          <div className={styles.cardOpen}>
            <div className={styles.headerOpen}>
              {title && <h5 className={styles.title}>{title}</h5>}
              <button
                className={clsx(
                  "button button--sm button--outline button--secondary",
                  styles.minimize
                )}
                onClick={this.onClick}
              >
                <FontAwesomeIcon icon={faWindowMinimize} />
              </button>
              {children && <div className={styles.description}>{children}</div>}
            </div>
            {this.state.visible ? (
              <video 
              controls 
              autoPlay 
              width="100%" 
              loop
              >
                <source src={src} type={`video/${type || "mp4"}`} />
              </video>
            ) : (
              <div style={{height: '150px'}}>
                <FontAwesomeIcon icon={faCircleNotch} spin />
              </div>
            )}
          </div>
        ) : (
          <button
            className="button button--block button--outline button--secondary"
            onClick={this.onClick}
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div className={styles.headerClosed}>
              <div className={styles.title}>{title || "Video"}</div>
              {children && <div className={styles.description}>{children}</div>}
            </div>
            {this.state.visible ? (
                <video style={{ marginLeft: "auto" }} autoPlay controls height="150px" loop>
                  <source src={src} type={`video/${type || "mp4"}`} />
                </video>
            ) : (
              <div style={{height: '150px'}}>
                <FontAwesomeIcon icon={faCircleNotch} spin />
              </div>
            )}
            </button>
        )}
      </div>
    );
  }
}
