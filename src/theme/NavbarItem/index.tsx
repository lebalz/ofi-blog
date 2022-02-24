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
import { Link } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import styles from './index.module.scss';

const currentVersion = (versions: (typeof NavbarItem)[]): typeof NavbarItem | undefined => {
    return versions.find((v) => v.path.length > 1 && window.location.pathname.startsWith(v.path));
};

const withLoginNavbar = (Component) => {
    const WrappedComponent = observer((props: typeof NavbarItem) => {
        if (!ExecutionEnvironment.canUseDOM || props.to !== 'login') {
            return <Component {...props} />;
        }
        const userStore = useStore('userStore');
        if (!userStore.current) {
            return <Component {...props} />;
        }
        const { globalData } = useDocusaurusContext();
        const versions = globalData['docusaurus-plugin-content-docs']['default'].versions;
        const version = currentVersion(versions);
        if (userStore.current.admin) {
            return (
                <div className={clsx(styles.navBadge, 'dropdown', 'dropdown--hoverable')}>
                    <button
                        className={clsx(
                            'badge',
                            userStore.isMyView ? 'badge--primary' : 'badge--warning'
                        )}
                    >
                        {userStore.currentView.name}
                    </button>
                    <ul className="dropdown__menu">
                        {userStore.byClass(version?.name).map((user, idx) => (
                                <li key={idx} onClick={() => userStore.setView(user)}>
                                    <div className={clsx(styles.userBadge, 'badge', 'badge--secondary', 'dropdown__link')}>
                                        {user.name}
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            );
        }
        return (
            <Link to={`/${props.to}`} className="badge badge--primary margin--xs">
                <span>{userStore.current.name}</span>
            </Link>
        );
    });

    return WrappedComponent;
};

export default withLoginNavbar(NavbarItem);
