/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// @ts-ignore
import NavbarItem from '@theme-original/NavbarItem';
import { useStore } from '../../stores/hooks';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faSync, faTshirt, faBicycle } from '@fortawesome/free-solid-svg-icons';
import { runInAction } from 'mobx';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const currentVersion = (versions: typeof NavbarItem[]): typeof NavbarItem | undefined => {
    return versions.find((v) => v.path.length > 1 && window.location.pathname.startsWith(v.path));
};

const withLoginNavbar = (Component) => {
    const WrappedComponent = observer((props: typeof NavbarItem) => {
        const userStore = useStore('userStore');
        const adminStore = useStore('adminStore');
        const { globalData } = useDocusaurusContext();
        if (!ExecutionEnvironment.canUseDOM || props.to !== 'login' || !userStore.current) {
            return <Component {...props} />;
        }
        const versions = (globalData['docusaurus-plugin-content-docs']['default'] as { versions: string[] })
            .versions;
        const version = currentVersion(versions);
        if (userStore.current.admin) {
            return (
                <div className={clsx('button-group')} style={{marginRight: '1em'}}>
                    <button
                        className={clsx('badge', styles.badgeButton, 'badge--secondary', 'badge--sm')}
                        onClick={() => adminStore.toggleAdminElements()}
                    >
                        <FontAwesomeIcon icon={(adminStore.showAdminElements ? faTshirt : faBicycle) as IconProp} />
                    </button>
                    {adminStore.showAdminElements && (
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
                                <FontAwesomeIcon icon={faSync as IconProp} />
                            </button>
                            <button
                                className={clsx('badge', 'badge--secondary', 'badge--sm', styles.badgeButton)}
                                onClick={() => {
                                    const students = userStore.byClass(version?.name);
                                    const currentIdx = students.indexOf(userStore.currentView);
                                    if (currentIdx > 0) {
                                        userStore.setView(students[currentIdx - 1]);
                                    } else {
                                        userStore.setView(students[students.length - 1]);
                                    }
                                }}
                            >
                                <FontAwesomeIcon icon={faArrowAltCircleLeft as IconProp} />
                            </button>
                            <div className={clsx(styles.navBadge, 'dropdown', 'dropdown--hoverable')}>
                                <button
                                    className={clsx(
                                        'badge',
                                        styles.nameBadge,
                                        userStore.isMyView ? 'badge--primary' : 'badge--warning'
                                    )}
                                    style={{ textOverflow: 'ellipsis', width: '100px', whiteSpace: 'nowrap', overflow: 'hidden' }}
                                >
                                    {userStore.currentView.name}
                                </button>
                                <ul className="dropdown__menu">
                                    {userStore.byClass(version?.name).map((user, idx) => (
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
                                    ))}
                                </ul>
                            </div>
                            <button
                                className={clsx('badge', 'badge--secondary', 'badge--sm', styles.badgeButton)}
                                onClick={() => {
                                    const students = userStore.byClass(version?.name);
                                    const currentIdx = students.indexOf(userStore.currentView);
                                    if (currentIdx < students.length - 1) {
                                        userStore.setView(students[currentIdx + 1]);
                                    } else {
                                        userStore.setView(students[0]);
                                    }
                                }}
                            >
                                <FontAwesomeIcon icon={faArrowAltCircleRight as IconProp} />
                            </button>
                        </>
                    )}
                </div>
            );
        }
        return (
            <Link to={`/${props.to}`} className={clsx('badge', 'badge--primary', 'margin--xs', styles.nameBadge)}>
                <span>{userStore.current.name}</span>
            </Link>
        );
    });

    return WrappedComponent;
};

export default withLoginNavbar(NavbarItem);
