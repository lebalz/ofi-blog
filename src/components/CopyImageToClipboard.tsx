import { faClipboard, faClipboardCheck, faCross, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { toBlob } from 'html-to-image';
import * as React from 'react';

interface Props {
    children: JSX.Element;
}

const CopyImageToClipboard = ({ children }: Props) => {
    const [showCopied, setShowCopied] = React.useState<'none' | 'copied' | 'error'>('none');
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (showCopied === 'none') {
            return;
        }
        const timeoutId = setTimeout(() => setShowCopied('none'), 2000);
        return () => clearTimeout(timeoutId);
    }, [showCopied]);

    return (
        <React.Fragment>
            <button
                className={clsx(
                    'button',
                    'button--outline',
                    'button--sm',
                    showCopied === 'none' && 'button--primary',
                    showCopied === 'error' && 'button--danger',
                    showCopied === 'copied' && 'button--success',
                )}
                style={{ float: 'right' }}
                onClick={() => {
                    if (ref.current === null) {
                        return;
                    }
                    toBlob(ref.current, {
                        backgroundColor: 'white',
                    })
                        .then((blob) => {
                            return navigator.clipboard.write([
                                new ClipboardItem({
                                    ['image/png']: blob as unknown as Promise<Blob>,
                                }),
                            ]);
                        })
                        .then(() => {
                            setShowCopied('copied');
                        })
                        .catch((err) => {
                            setShowCopied('error');
                            console.log(err);
                        });
                }}
            >
                {showCopied === 'none' && <FontAwesomeIcon icon={faClipboard} />}
                {showCopied === 'copied' && <FontAwesomeIcon icon={faClipboardCheck} />}
                {showCopied === 'error' && <FontAwesomeIcon icon={faTimesCircle} />}
            </button>
            <div ref={ref} style={{ overflow: 'auto', width: 'max(100%, 500px)' }}>
                {children}
            </div>
        </React.Fragment>
    );
};

export default CopyImageToClipboard;
