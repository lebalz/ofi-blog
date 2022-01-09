import useIsBrowser from "@docusaurus/useIsBrowser";
import styles from "./PdfViewer.module.scss";
import clsx from "clsx";
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

interface Props {
  file: string;
  name: string;
  page?: number;
  width?: number;
  minWidth?: number;
  scale?: number;
  noDownload?: boolean;
}

// var Document: any | undefined = undefined;
// var Page: any | undefined = undefined;

// const loadReactPdf = (callback) => {
//     if (Document) {
//         return callback();
//     }
//     const loadLibs = [
//         import('react-pdf/dist/esm/entry.webpack')
//     ];
//     const importPosition: {[key: string]: number} = {
//         'react-pdf': 0,
//     }
//     Promise.all(loadLibs).then((packages) => {
//         Document = packages[importPosition['react-pdf']].Document;
//         Page = packages[importPosition['react-pdf']].Page;
//         callback();
//     });
// };
// const [pdfLoaded, setPdfLoaded] = React.useState(false);
//   React.useEffect(() => {
//     let isMounted = true;
//     loadReactPdf(() => {
//         if (isMounted) {
//             setPdfLoaded(true);
//         }
//     });
//     return () => {
//         isMounted = false;
//     };
// }, [props]);

const PdfViewer = (props: Props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(props.page || 1);
  const [width, setWidth] = useState(props.width);
  const inBrowser = useIsBrowser();
  React.useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  const ref = React.useRef<HTMLDivElement>(null);

  const onResize = () => {
    if (!ref.current) {
      return;
    }
    const maxWidth = ref.current.getBoundingClientRect().width * 0.92;
    let newWidth = maxWidth;
    if (props.width && props.scale) {
      newWidth = Math.min(props.width * props.scale, maxWidth);
    } else if (props.width) {
      newWidth = Math.min(props.width, maxWidth);
    } else if (props.scale) {
      newWidth = props.scale * maxWidth;
    }
    if (props.minWidth && newWidth < props.minWidth) {
      newWidth = props.minWidth;
    }
    setWidth(newWidth);
    setPageNumber(props.page || pageNumber);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
    onResize();
  };

  const changePage = (offset) => {
    const { scrollX, scrollY } = window;
    if (pageNumber + offset > numPages) {
      setPageNumber(1);
    } else if (pageNumber + offset < 1) {
      setPageNumber(numPages);
    } else {
      setPageNumber(pageNumber + offset);
    }
    setTimeout(() => {
      window.scrollTo(scrollX, scrollY);
    }, 0);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  // if (!inBrowser || !Document || !Page || !pdfLoaded) {
  if (!inBrowser) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={clsx(
        styles.pdfWrapper,
        (numPages <= 1 || props.page !== undefined) && styles.singlepage
      )}
      ref={ref}
    >
      <Document
        file={props.file}
        onLoadSuccess={onDocumentLoadSuccess}
        className={clsx(styles.doc)}
        options={{
          cMapUrl: "cmaps/",
          cMapPacked: true,
        }}
      >
        <Page pageNumber={pageNumber} width={width} />
        {!props.noDownload && (
          <a
            href={props.file}
            className={clsx(
              styles.download,
              "button",
              "button--secondary",
              "button--sm"
            )}
            download={props.name}
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        )}
      </Document>
      <div className={clsx(styles.controls)}>
        {numPages > 1 && props.page === undefined && (
          <div className={clsx("button-group")}>
            <button
              className={clsx("button", "button--secondary", "button--sm")}
              onClick={previousPage}
            >
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </button>
            <button
              className={clsx("button", "button--secondary", "button--sm")}
              disabled
            >
              {pageNumber || (numPages ? 1 : "--")} / {numPages || "--"}
            </button>
            <button
              className={clsx("button", "button--secondary", "button--sm")}
              onClick={nextPage}
            >
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
