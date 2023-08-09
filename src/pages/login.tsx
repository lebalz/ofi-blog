import React from 'react';
import clsx from 'clsx';
import styles from './login.module.scss';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { default as indexStyles } from './index.module.scss';
import { useRootStore, useStore } from '../stores/hooks';
import Link from '@docusaurus/Link';
import { observer } from 'mobx-react-lite';
import UserTable from './admin/UserTable';
import { User, data } from '../api/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Document } from '../api/document';
import { TimedTopic } from '../api/timed_topic';
import { Comment } from '../api/comment';
import { action } from 'mobx';

const SHOW_OFFLINE_MODE = false;

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
    const rootStore = useRootStore();
    const { account, loggedIn, offlineMode } = msalStore;
    const { current } = userStore;
    return (
        <Layout>
            <HomepageHeader />
            <main>
                <div className={styles.loginPage}>
                    {(loggedIn && !offlineMode) ? (
                        <>
                            <h3>Eingeloggt als {account.username}</h3>
                            <button
                                className={clsx(
                                    'button',
                                    'button--success'
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
                                Alle Persönliche Daten herunterladen <FontAwesomeIcon icon={faDownload} />
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
                        <>
                            <Link to="/" onClick={() => msalStore.login()} className="button button--warning" style={{color: 'black'}}>
                                Login mit GBSL Account
                            </Link>
                        </>
                    )}
                    {(SHOW_OFFLINE_MODE || current?.admin) && (
                        <div style={{marginTop: '1em', marginBottom: '1em'}}>
                            <h4>{offlineMode ? ( 
                                <span>Offline Modus: "{rootStore.loadedFileName}" <FontAwesomeIcon icon={faCheckCircle} color='green' /></span> 
                                ) : (
                                    <span>Offline-Daten verwenden <FontAwesomeIcon icon={faUpload} /></span>
                                )}
                            </h4>
                            <div>
                                <input
                                    className={clsx(
                                        'button',
                                        'button--secondary'
                                    )}
                                    type="file"
                                    accept='.json'
                                    onChange={(e) => {
                                        let fileReader = new FileReader();
                                        fileReader.onload = action((fe) => {
                                            const data = JSON.parse(fileReader.result as string) as { documents: Document<any>[], comments: Comment[], timed_topics: TimedTopic[], user: User };
                                            rootStore.loadOfflineData(e.target.files[0].name, data);
                                        });
                                        fileReader.readAsText(e.target.files[0]);
                                        fileReader.onerror = () => {
                                            window.alert('Fehler beim Lesen der Datei');
                                        }
                                    }}
                                    title="Upload"
                                />
                            </div>
                            
                        </div>
                    )}
                    <UserTable />
                </div>
            </main>
        </Layout>
    );
});
export default Login;
