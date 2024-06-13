/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';
import { useRootStore, useStore } from '../../stores/hooks';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faSync,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { runInAction } from 'mobx';
import { VIEW_ELEMENTS } from '@site/src/stores/AdminStore';
import siteConfig from '@generated/docusaurus.config';
const { OFFLINE_MODE } = siteConfig.customFields as { OFFLINE_MODE?: boolean };
import { FilePicker, LoadedOfflineFile } from '@site/src/pages/login';
import Icon from '@mdi/react';
import { mdiCheckboxBlankOutline, mdiCheckboxOutline } from '@mdi/js';

const currentVersion = (versions: typeof NavbarItem[]): typeof NavbarItem | undefined => {
    return versions.find((v) => v.path.length > 1 && window.location.pathname.startsWith(v.path));
};

const withLoginNavbar = (Component) => {
    const WrappedComponent = observer((props: typeof NavbarItem) => {
        const rootStore = useRootStore();
        const msalStore = useStore('msalStore');
        const userStore = useStore('userStore');
        const adminStore = useStore('adminStore');
        const { globalData } = useDocusaurusContext();
        if (props.to !== 'login') {
            return <Component {...props} />;
        }
        React.useEffect(() => {
            if (OFFLINE_MODE && (!userStore.current)) {
                import('./data.json').then((data) => {
                    if (data.default.user.id > 0) {
                        rootStore.loadOfflineData(data.default.user.email, data.default);
                    }
                }).catch((e) => {
                    console.error('error', e);
                });
            }
        }, [])
        if (OFFLINE_MODE) {
            return (<div style={{display: 'flex', flexWrap: 'wrap', maxWidth: '70vw'}}>
                <FilePicker /> <LoadedOfflineFile />
            </div>)
        }
        if (!ExecutionEnvironment.canUseDOM || !userStore.current) {
            return <Component {...props} />;
        }
        const versions = (globalData['docusaurus-plugin-content-docs']['default'] as { versions: string[] })
            .versions;
        const version = currentVersion(versions);
        if (userStore.current.admin && !msalStore.offlineMode) {
            return (
                <div className={clsx('button-group')} style={{ marginRight: '1em' }}>
                    <div className={clsx(styles.adminOptions, 'dropdown', 'dropdown--hoverable')}>
                        <span
                            className={clsx(styles.badgeButton)}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        >
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                        <div className={clsx(styles.dropdown, 'dropdown__menu')}>
                            {VIEW_ELEMENTS.map((toggle, idx) => {
                                const active = adminStore.showAdminElement(toggle);
                                return (
                                    <span
                                        key={idx}
                                        onClick={() => adminStore.toggleAdminElements(toggle)}
                                        className={clsx(
                                            'dropdown__link',
                                            styles.showElement,
                                            active && styles.active
                                        )}
                                    >
                                        <Icon 
                                            path={active ? mdiCheckboxOutline : mdiCheckboxBlankOutline} 
                                            size={0.8}
                                            className={clsx(styles.icon)}
                                        />
                                        {toggle}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    {adminStore.showViewSwitcher && (
                        <>
                            <button
                                className={clsx('badge', 'badge--secondary', 'badge--sm', styles.badgeButton)}
                                onClick={() => {
                                    runInAction(() => {
                                        if (userStore.isMyView) {
                                            userStore.reload();
                                        } else {
                                            userStore.setView(userStore.currentView?.clone());
                                        }
                                    });
                                }}
                            >
                                <FontAwesomeIcon icon={faSync} />
                            </button>
                            <button
                                className={clsx('badge', 'badge--secondary', 'badge--sm', styles.badgeButton)}
                                onClick={() => {
                                    const students = userStore.byClassAndGroup(version?.name, adminStore.viewGroupFilter);
                                    const currentIdx = students.indexOf(userStore.currentView);
                                    if (currentIdx > 0) {
                                        userStore.setView(students[currentIdx - 1]);
                                    } else {
                                        userStore.setView(students[students.length - 1]);
                                    }
                                }}
                            >
                                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                            </button>
                            <div className={clsx(styles.navBadge, 'dropdown', 'dropdown--hoverable')}>
                                <button
                                    className={clsx(
                                        'badge',
                                        styles.nameBadge,
                                        userStore.isMyView ? 'badge--primary' : 'badge--warning'
                                    )}
                                    style={{
                                        textOverflow: 'ellipsis',
                                        width: '100px',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {userStore.currentView.name}
                                </button>
                                <ul className="dropdown__menu">
                                    {userStore.byClassAndGroup(version?.name, adminStore.viewGroupFilter).map((user, idx) => {
                                        return (
                                            <li key={idx} onClick={() => userStore.setView(user)}>
                                                <div
                                                    className={clsx(
                                                        styles.userBadge,
                                                        'badge',
                                                        'badge--secondary',
                                                        'dropdown__link'
                                                    )}
                                                >
                                                    {user.name}
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <button
                                className={clsx('badge', 'badge--secondary', 'badge--sm', styles.badgeButton)}
                                onClick={() => {
                                    const students = userStore.byClassAndGroup(version?.name, adminStore.viewGroupFilter);
                                    const currentIdx = students.indexOf(userStore.currentView);
                                    if (currentIdx < students.length - 1) {
                                        userStore.setView(students[currentIdx + 1]);
                                    } else {
                                        userStore.setView(students[0]);
                                    }
                                }}
                            >
                                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </button>
                        </>
                    )}
                </div>
            );
        }
        return (
            <Link
                to={`/${props.to}`}
                className={clsx('badge', msalStore.offlineMode ? 'badge--secondary' : 'badge--primary', 'margin--xs', styles.nameBadge)}
            >
                <span>{msalStore.offlineMode ? `Offline: ${userStore.current?.name}` : userStore.current?.name}</span>
            </Link>
        );
    });

    return WrappedComponent;
};

export default withLoginNavbar(NavbarItem);
