import useIsBrowser from '@docusaurus/useIsBrowser';
import styles from './PdfViewer.module.scss';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    file: string;
    name: string;
    page?: number;
    scroll?: boolean;
    width?: number;
    minWidth?: number;
    scale?: number;
    noDownload?: boolean;
}

const SCALE = 0.98;

const PdfViewer = (props: Props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(-1);
    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(150);
    const inBrowser = useIsBrowser();
    const [overflowing, setOverflowing] = useState(false);
    React.useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);
    const ref = React.useRef<HTMLDivElement>(null);

    const onHeightChange = () => {
        if (!ref.current) {
            return;
        }
        const canv = ref.current.querySelector('canvas.react-pdf__Page__canvas');
        if (canv) {
            const h = canv.getBoundingClientRect().height;
            setHeight(h);
        }
    };

    const onResize = () => {
        if (!ref.current) {
            return;
        }
        const rect = ref.current.getBoundingClientRect();
        const maxWidth = rect.width * SCALE;
        onHeightChange();
        let newWidth = maxWidth;
        let overflow = false;
        if (props.width && props.scale) {
            newWidth = Math.min(props.width * props.scale, maxWidth);
        } else if (props.width) {
            newWidth = Math.min(props.width, maxWidth);
        } else if (props.scale) {
            newWidth = props.scale * maxWidth;
        }
        if (props.minWidth && newWidth < props.minWidth) {
            newWidth = props.minWidth;
            overflow = true;
        }
        if (overflow !== overflowing) {
            setOverflowing(overflow);
        }
        setWidth(newWidth);
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        if (pageNumber < 0) {
            setPageNumber(props.page || 1);
        }
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

    if (!inBrowser) {
        return <div>Loading...</div>;
    }

    return (
        <div
            className={clsx(
                styles.pdfWrapper,
                overflowing && styles.overflowing,
                props.scroll && styles.scroll,
                (numPages <= 1 || props.page !== undefined) && styles.singlepage
            )}
            ref={ref}
        >
            <div style={{ height: `${height + 8}px` }}>
                <Document
                    file={props.file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className={clsx(styles.doc)}
                    options={{
                        cMapUrl: 'cmaps/',
                        cMapPacked: true,
                    }}
                >
                    {props.scroll &&
                        Array.from({ length: numPages }, (_, idx) => (
                            <Page
                                className={clsx(styles.pdfPage)}
                                pageNumber={idx + 1}
                                width={width}
                                onLoadSuccess={onHeightChange}
                                key={idx}
                            />
                        ))}
                    {!props.scroll && pageNumber > 0 && (
                        <Page pageNumber={pageNumber} width={width} onLoadSuccess={onHeightChange} />
                    )}
                    {!props.noDownload && (
                        <a
                            href={props.file}
                            className={clsx(styles.download, 'button', 'button--secondary', 'button--sm')}
                            download={props.name}
                        >
                            <FontAwesomeIcon icon={faDownload as IconProp} />
                        </a>
                    )}
                </Document>
            </div>
            {!props.scroll && (
                <div className={clsx(styles.controls)}>
                    {numPages > 1 && props.page === undefined && (
                        <div className={clsx('button-group')}>
                            <button
                                className={clsx('button', 'button--secondary', 'button--sm')}
                                onClick={previousPage}
                            >
                                <FontAwesomeIcon icon={faArrowAltCircleLeft as IconProp} />
                            </button>
                            <button className={clsx('button', 'button--secondary', 'button--sm')} disabled>
                                {pageNumber || (numPages ? 1 : '--')} / {numPages || '--'}
                            </button>
                            <button
                                className={clsx('button', 'button--secondary', 'button--sm')}
                                onClick={nextPage}
                            >
                                <FontAwesomeIcon icon={faArrowAltCircleRight as IconProp} />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PdfViewer;
