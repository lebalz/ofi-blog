import { StateDoc } from '@site/src/models/Answer/State';
import { useStore } from '@site/src/stores/hooks';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import styles from './state.module.scss';
// @ts-ignore
import useFrontMatter from '@theme/useFrontMatter';
import { mdiBgColor, mdiIcon, mdiColor } from './StateAnswer';
import _ from 'lodash';

interface Props {
    webKey: string;
}
const baseUrl = '/';

export const StateSummary = observer((props: Props) => {
    const adminStore = useStore('adminStore');
    const { sidebar_custom_props } = useFrontMatter();
    const [klasse, setKlasse] = React.useState<string>();
    React.useEffect(() => {
        setKlasse(window.location.pathname.replace(baseUrl, '').split('/')[0]);
    }, []);
    const {viewGroupFilter} = adminStore;
    return (
        <>
            {adminStore.isAdmin && adminStore.showTaskStates && klasse && (
                <div className={clsx(styles.admin)}>
                    {adminStore
                        .findByWebKey<StateDoc>(klasse, sidebar_custom_props?.id, props.webKey)
                        .map((doc, idx) => {
                            const user = adminStore.getUser(doc.user_id);
                            if (!user || viewGroupFilter && !user.groups.includes(viewGroupFilter)) {
                                return null;
                            }
                            return (<div className={clsx(styles.box)} key={idx}>
                                <div
                                    className={clsx(styles.state)}
                                    style={{ backgroundColor: `var(${mdiBgColor[doc.data.value]})` }}
                                    onClick={() => {
                                        adminStore.setView(doc.user_id);
                                    }}
                                >
                                    <i
                                        className={clsx('mdi', mdiIcon[doc.data.value])}
                                        style={{ color: `${mdiColor[doc.data.value]}` }}
                                    />
                                </div>
                                <div className={clsx(styles.nameWrapper)}>
                                    <div className={clsx(styles.name)}>
                                        {user.name || 'Name'}
                                    </div>
                                </div>
                            </div>
                        )})}
                </div>
            )}
        </>
    );
});

export const PageStateSummary = observer(() => {
    const adminStore = useStore('adminStore');
    const { sidebar_custom_props } = useFrontMatter();
    const [klasse, setKlasse] = React.useState<string>();
    const {viewGroupFilter} = adminStore;
    React.useEffect(() => {
        setKlasse(window.location.pathname.replace(baseUrl, '').split('/')[0]);
    }, []);
    let rawDocs = adminStore.filteredBy<StateDoc>(klasse, sidebar_custom_props?.id, 'state');
    if (viewGroupFilter) {
        rawDocs = rawDocs.filter((doc) => {
            const user = adminStore.getUser(doc.user_id);
            return user?.groups.includes(viewGroupFilter);
        })
    }
    const docs = _.groupBy(
        rawDocs,
        (doc) => adminStore.getUser(doc.user_id)?.name || 'Name'
    );
    return (
        <>
            {adminStore.isAdmin && adminStore.showTaskStateSummary && klasse && (
                <div className={clsx(styles.admin, styles.summary)}>
                    {Object.keys(docs)
                        .sort()
                        .map((name, idx) => (
                            <div className={clsx(styles.box, styles.overviewBox)} key={idx}>
                                {docs[name].map((doc, id) => {
                                    return (
                                        <div
                                            key={id}
                                            className={clsx(styles.state)}
                                            style={{ backgroundColor: `var(${mdiBgColor[doc.data.value]})` }}
                                        >
                                            <a
                                                className={clsx('mdi', mdiIcon[doc.data.value])}
                                                style={{ color: `${mdiColor[doc.data.value]}` }}
                                                href={`#state-${doc.web_key}`}
                                                onClick={() => {
                                                    setTimeout(() => {
                                                        adminStore.setView(doc.user_id);
                                                        if (!adminStore.showTaskStates) {
                                                            adminStore.toggleAdminElements('task_state');
                                                        }
                                                    }, 0);
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                                <div className={clsx(styles.nameWrapper)}>
                                    <div className={clsx(styles.name)}>{name}</div>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </>
    );
});
