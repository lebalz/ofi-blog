import useIsBrowser from '@docusaurus/useIsBrowser';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useSolution, useStore } from '../../stores/hooks';
import Loader from '../shared/Loader';
import Details from '@docusaurus/theme-common/lib/components/Details';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
    webKey: string;
    title?: string;
    open?: boolean;
    children?: React.ReactNode;
}

const Icon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="26" viewBox="0 0 512 512">
            <path
                fillRule="evenodd"
                d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"
            />
        </svg>
    );
};

const Solution = observer((props: Props) => {
    const store = useStore('policyStore');
    const userStore = useStore('userStore');
    const inBrowser = useIsBrowser();
    useSolution(props.webKey);

    if (!inBrowser) {
        return <div>SSR</div>;
    }
    const model = store.find(props.webKey);

    if (!model) {
        return <Loader />;
    }
    return (
        <div data--web-key={props.webKey} className={clsx(styles.wrapper, 'solution-wrapper')}>
            {(model.show || userStore.current?.admin) ? (
                <Details
                    summary={<summary>{props.title || 'Lösung'} <Icon />{!model.show && <span className="badge badge--secondary">Hidden</span>}</summary>}
                    className={clsx('alert alert--success', styles.solution)}
                    open={props.open}
                >
                    {props.children}
                </Details>
            ) : (
                <div className={clsx('alert', styles.disabled)}>{props.title || 'Lösung'} (nicht freigeschaltet) <Icon /></div>
            )}
        </div>
    );
});

export default Solution;
