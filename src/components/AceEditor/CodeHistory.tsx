import ReactDiffViewer from 'react-diff-viewer';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { useStore } from '../../stores/hooks';
import Script from '../../models/Script';
import Details from '@docusaurus/theme-common/lib/components/Details';
import DiffViewer from 'react-diff-viewer';
import { Prism } from 'prism-react-renderer';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import { Handle, SliderTooltip } from 'rc-slider';
import { reaction } from 'mobx';

interface Props {
    webKey: string;
}

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

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <SliderTooltip
            prefixCls="rc-slider-tooltip"
            overlay={`V${value}`}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </SliderTooltip>
    );
};

const CodeHistory = observer((props: Props) => {
    const store = useStore('documentStore');
    const userStore = useStore('userStore');
    const pyScript = store.find<Script>(props.webKey);
    const [version, setVersion] = React.useState(1);
    const [open, setOpen] = React.useState(true);
    React.useEffect(() => {
        return reaction(
            () => store.find<Script>(props.webKey)?.id,
            (id) => {
                if (id && id > 0) {
                    console.log(id, open)
                    setVersion(1);
                    if (open) {
                        store.find<Script>(props.webKey)?.loadVersions();
                        console.log('New V');
                    }
                }
            }
        );
    }, []);

    if (!pyScript.versioned || !userStore.current?.admin) {
        return null;
    }
    return (
        <div className={clsx(styles.codeHistory)}>
            <details
                open={open}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!open) {
                        pyScript.loadVersions();
                    }
                    setOpen(!open);
                }}
                className={clsx('alert alert--info', styles.historyDetails)}
            >
                <summary>
                    <span className="badge badge--secondary">
                        {pyScript.versionsLoaded ? `${pyScript.versions.length} Versions` : 'Load Versions'}
                    </span>
                </summary>
                <div
                    className={clsx(styles.content)}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                >
                    <div className={clsx(styles.versionControl)}>
                        <Slider
                            value={version}
                            handle={handle}
                            onChange={(c) => {
                                setVersion(c);
                            }}
                            min={1}
                            max={pyScript.versions.length - 1}
                            dots={pyScript.versions.length < 50}
                        />
                    </div>
                    <div className={clsx(styles.diffViewer)}>
                        {pyScript.versions.length > 1 && (
                            <DiffViewer
                                leftTitle={pyScript.versions[version - 1].version}
                                rightTitle={
                                    <div>
                                        {pyScript.versions[version].version}
                                        {pyScript.versions[version].pasted && (
                                            <span style={{ float: 'right' }} className="badge badge--danger">
                                                Pasted
                                            </span>
                                        )}
                                    </div>
                                }
                                splitView
                                oldValue={pyScript.versions[version - 1].data.code}
                                newValue={pyScript.versions[version].data.code}
                                renderContent={highlightSyntax}
                            />
                        )}
                    </div>
                </div>
            </details>
        </div>
    );
});

export default CodeHistory;
