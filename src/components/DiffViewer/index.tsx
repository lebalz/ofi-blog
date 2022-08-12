import * as React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { Prism } from 'prism-react-renderer';
import { default as ReactDiffViewer } from 'react-diff-viewer';


const highlightSyntax = (str: string) => {
    if (!str) {
        return;
    }
    return (
        <span
            dangerouslySetInnerHTML={{
                __html: Prism.highlight(str, Prism.languages.python, 'python'),
            }}
        />
    );
};

interface Props {
    children: JSX.Element[];
    titles: string[];
}
const SPACER = ' ';

const DiffViewer = (props: Props) => {    
    const refLeft = React.useRef<HTMLDivElement>(null);
    const refRight = React.useRef<HTMLDivElement>(null);
    const [l, setL] = React.useState<string>();
    const [r, setR] = React.useState<string>();

    React.useEffect(() => {
        if (refLeft.current && !l) {
            setL(refLeft.current.innerText.replace(/ /g, SPACER));
        }
    }, [refLeft])
    React.useEffect(() => {
        if (refRight.current && !r) {
            setR(refRight.current.innerText.replace(/ /g, SPACER));
        }
    }, [refRight])

    if (props.children.length < 2) {
        return (<div>Please provide two children with code blocks!</div>)
    }
    return (
        <div className={clsx(styles.diffViewer)}>
            {l && r && (
                <ReactDiffViewer
                    leftTitle={props.titles[0]}
                    rightTitle={props.titles[1]}
                    splitView
                    oldValue={l}
                    newValue={r}
                    renderContent={highlightSyntax}
                />
            )}
            {!l && (
                <div ref={refLeft} className={styles.codeRaw}>
                    {props.children[0]}
                </div>
            )}
            {!r && (
                <div ref={refRight} className={styles.codeRaw}>
                    {props.children[1]}
                </div>
            )}
        </div>
    );
};

export default DiffViewer;
