import { StateDoc } from '@site/src/models/Answer/State';
import { useStore } from '@site/src/stores/hooks';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import styles from './state.module.scss';
// @ts-ignore
import { useDoc } from '@docusaurus/theme-common/internal';
import { mdiBgColor, mdiIcon, mdiColor } from './StateAnswer';
import _ from 'lodash';

interface Props {
    webKey: string;
}
const baseUrl = '/';

export const StateSummary = observer((props: Props) => {
    const adminStore = useStore('adminStore');
    const { frontMatter } = useDoc();
    const { sidebar_custom_props } = frontMatter;
    const [klasse, setKlasse] = React.useState<string>();
    React.useEffect(() => {
        setKlasse(window.location.pathname.replace(baseUrl, '').split('/')[0]);
    }, []);
    return (
        <>
            {adminStore.isAdmin && adminStore.showTaskStates && klasse && (
                <div className={clsx(styles.admin)}>
                    {adminStore
                        .findByWebKey<StateDoc>(klasse, sidebar_custom_props.id, props.webKey)
                        .map((doc, idx) => (
                            <div className={clsx(styles.box)} key={idx}>
                                <div
                                    className={clsx(styles.state)}
                                    style={{ backgroundColor: `var(${mdiBgColor[doc.data.value]})` }}
                                >
                                    <i
                                        className={clsx('mdi', mdiIcon[doc.data.value])}
                                        style={{ color: `${mdiColor[doc.data.value]}` }}
                                    />
                                </div>
                                <div className={clsx(styles.nameWrapper)}>
                                    <div className={clsx(styles.name)}>
                                        {adminStore.getUser(doc.user_id)?.name || 'Name'}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </>
    );
});

export const PageStateSummary = observer(() => {
    const adminStore = useStore('adminStore');
    const { frontMatter } = useDoc();
    const { sidebar_custom_props } = frontMatter;
    const [klasse, setKlasse] = React.useState<string>();
    React.useEffect(() => {
        setKlasse(window.location.pathname.replace(baseUrl, '').split('/')[0]);
    }, []);
    return (
        <>
            {adminStore.isAdmin && adminStore.showTaskStateSummary && klasse &&  (
                <div className={clsx(styles.admin, styles.summary)}>
                    {Object.entries(
                        _.groupBy(
                            adminStore.filteredBy<StateDoc>(klasse, sidebar_custom_props.id, 'state'),
                            (doc) => doc.user_id
                        )
                    ).map(([userId, docs], idx) => (
                        <div className={clsx(styles.box, styles.overviewBox)} key={idx}>
                            {docs.map((doc, id) => {
                                return (
                                    <div
                                        key={id}
                                        title={doc.web_key}
                                        className={clsx(styles.state)}
                                        style={{ backgroundColor: `var(${mdiBgColor[doc.data.value]})` }}
                                    >
                                        <i
                                            className={clsx('mdi', mdiIcon[doc.data.value])}
                                            style={{ color: `${mdiColor[doc.data.value]}` }}
                                        />
                                    </div>
                                );
                            })}
                            <div className={clsx(styles.nameWrapper)}>
                                <div className={clsx(styles.name)}>
                                    {adminStore.getUser(Number.parseInt(userId, 10))?.name || 'Name'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
});
