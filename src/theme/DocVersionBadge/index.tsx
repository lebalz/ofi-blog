import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
// @ts-ignore
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/DocVersionBadge';
import styles from './styles.module.scss';
import { useStore } from '@site/src/stores/hooks';
import { observer } from 'mobx-react-lite';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiClose } from '@mdi/js';

const DocVersionBadge = observer(({ className }: Props): JSX.Element | null => {
    const versionMetadata = useDocsVersion();
    const adminStore = useStore('adminStore');
    const userStore = useStore('userStore');
    if (versionMetadata.badge) {
        const groups = adminStore.isAdmin ? userStore.groupsByClass(versionMetadata.label) : [];
        return (
            <div className={clsx(styles.version, groups.length > 0 && styles.admin)}>
                <span
                    className={clsx(
                        className,
                        ThemeClassNames.docs.docVersionBadge,
                        'badge', 'badge--secondary',
                        styles.badge
                    )}
                >
                    {versionMetadata.label}
                </span>
                {groups.length > 0 && (
                    <div className={clsx('dropdown', 'dropdown--hoverable')}>
                        <span className={clsx('badge', 'badge--secondary', styles.options)}>
                            {adminStore.viewGroupFilter ? (
                                <>
                                    {adminStore.viewGroupFilter}
                                    <span 
                                        className={clsx(styles.clearFilter)}
                                        onClick={() => {
                                            adminStore.clearViewGroupFilter();
                                        }}
                                    >
                                        <Icon 
                                            path={mdiClose} 
                                            size={0.6}
                                            
                                        />
                                    </span>
                                </>
                            ) : (
                                <Icon path={mdiChevronRight} size={0.6} />
                            )}
                            <ul className={clsx('dropdown__menu', styles.menu)}>
                                {groups.map((grp, idx) => {
                                    return (
                                        <div
                                            className={clsx('badge', 'badge--secondary','dropdown__link','badge--sm', styles.item)}
                                            key={idx}
                                            onClick={() => {
                                                adminStore.setViewGroupFilter(grp);
                                            }}
                                        >
                                            {grp}
                                        </div>
                                    );
                                })}
                            </ul>
                        </span>
                    </div>
                )}
            </div>
        );
    }
    return null;
});

export default DocVersionBadge;