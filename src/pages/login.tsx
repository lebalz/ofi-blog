import React from 'react';
import clsx from 'clsx';
import styles from './login.module.scss';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { default as indexStyles } from './index.module.css';
import { useStore } from '../stores/hooks';
import { Link } from '@docusaurus/router';
import { observer } from 'mobx-react-lite';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', indexStyles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

const UserTable = observer(() => {
    const userStore = useStore('userStore');
    const { current } = userStore;
    return (
        <React.Fragment>
            {current && current.admin && (
                <div className={styles.users}>
                    <h3>Benutzer</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Email</th>
                                <th>Klasse</th>
                                <th>Admin?</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userStore.users.map((user, idx) => (
                                <tr key={idx}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.klasse}</td>
                                    <td>
                                        {user.admin && <span className="badge badge--primary">Admin</span>}
                                    </td>
                                    <td>{user.createdAt.toISOString().slice(0, 10)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </React.Fragment>
    );
});

const Login = observer(() => {
    const msalStore = useStore('msalStore');
    const { account, loggedIn } = msalStore;
    return (
        <Layout description="OF Informatik Website by B. Hofer">
            <HomepageHeader />
            <main>
                <div className={styles.loginPage}>
                    {loggedIn ? (
                        <>
                            <h3>Eingeloggt als {account.username}</h3>
                            <button className="button button--danger" onClick={() => msalStore.logout()}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/" onClick={() => msalStore.login()} className="button button--warning">
                            Login mit GBSL Account
                        </Link>
                    )}
                    <UserTable />
                </div>
            </main>
        </Layout>
    );
});
export default Login;
