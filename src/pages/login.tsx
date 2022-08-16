import React from 'react';
import clsx from 'clsx';
import styles from './login.module.scss';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { default as indexStyles } from './index.module.css';
import { useStore } from '../stores/hooks';
import Link from '@docusaurus/Link';
import { observer } from 'mobx-react-lite';
import UserTable from './admin/UserTable';
import { data } from '../api/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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


const Login = observer(() => {
    const msalStore = useStore('msalStore');
    const userStore = useStore('userStore');
    const { account, loggedIn } = msalStore;
    const { current } = userStore;
    return (
        <Layout>
            <HomepageHeader />
            <main>
                <div className={styles.loginPage}>
                    {loggedIn ? (
                        <>
                            <h3>Eingeloggt als {account.username}</h3>
                            <button
                                className={clsx(
                                    'button',
                                    'button--primary'
                                )}
                                onClick={() => {
                                    data().then((res) => {
                                        const downloadLink = document.createElement("a");
                                        const file = new Blob([JSON.stringify(res.data)],    
                                                    {type: 'application/json;charset=utf-8'});
                                        downloadLink.href = URL.createObjectURL(file);
                                        downloadLink.download = `data-${account.username}.json`;
                                        document.body.appendChild(downloadLink);
                                        downloadLink.click();
                                        document.body.removeChild(downloadLink);
                                    })
                                }}
                                title="Download"
                            >
                                Alle Persönliche Daten herunterladen <FontAwesomeIcon icon={faDownload as IconProp} />
                            </button>
                            <div style={{height: '3em'}}></div>

                            <a className={clsx('button', 'button--secondary')} href={`mailto:balthasar.hofer@gbsl.ch?subject=[${window.location.hostname}]: Datenlöschung für ${account.username}&body=Guten Tag%0D%0A%0D%0A
Hiermit beantrage ich die vollständige und unwiderrufliche Löschung meiner Daten der Webseite ${window.location.hostname}.%0D%0A%0D%0A

E-Mail: ${account.username}%0D%0A
Account-ID: ${current?.id}%0D%0A%0D%0A

Bitte bestätigen Sie die Löschung meiner Daten.%0D%0A%0D%0A

Freundliche Grüsse,%0D%0A
${current?.firstName} ${current?.lastName}, ${current?.klasse ?? ''}&cc=${account.username}`}>
                                    Datenlöschung beantragen
                            </a>

                            <div style={{height: '3em'}}></div>

                            <button className="button button--danger" style={{color: 'black'}} onClick={() => msalStore.logout()}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/" onClick={() => msalStore.login()} className="button button--warning" style={{color: 'black'}}>
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
