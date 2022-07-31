import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';

export default function NotFound(): JSX.Element {
    // React router provides the current component's route, even in SSR
    const location = useLocation();
    if (/^\/24(i|f|o|L|K)\//i.test(location.pathname)) {
        const newUri = `https://ofi.24.gbsl.website${location.pathname}${location.hash}${location.search}`;
        return (
            <>
                <PageMetadata title="Seite archiviert" />
                <Layout>
                    <main className="container margin-vert--xl">
                        <div className="row">
                            <div className="col col--6 col--offset-3">
                                <h1 className="hero__title">
                                  <a href={newUri} className="button hero__title button--outline button--success margin--xs">
                                      Weiter zum Artikel{' '}
                                      <i
                                          className="mdi mdi-arrow-right-bold-box"
                                          style={{ marginLeft: '0.1em'}}
                                      ></i>
                                  </a>
                                </h1>
                                <p>
                                    Die Kurse früherer Jahrgänge wurden <b>archiviert</b> und werden nicht weiter
                                    aktualisiert/verändert.
                                </p>
                                <p>
                                    Die archivierte Seite ist unter{' '}
                                    <a href="https://ofi.24.gbsl.website">https://ofi.24.gbsl.website</a> zu
                                    finden.
                                </p>
                                <p>
                                    Bis zum Ende Ihrer Schulzeit können Sie sich dort weiterhin mit Ihrem
                                    Schulaccount einloggen, ihre Daten bearbeiten, verändern oder aber auch
                                    die gespeicherten Daten{' '}
                                    <a href="https://ofi.24.gbsl.website/login">herunterladen</a> oder deren{' '}
                                    <a href="https://ofi.24.gbsl.website/login">Löschung</a> beantragen.
                                </p>

                                <a href={newUri} className="button button--success margin--xs">
                                    Weiter zum Artikel{' '}
                                    <i
                                        className="mdi mdi-arrow-right-bold-box"
                                        style={{ marginLeft: '1em', marginRight: '-1em' }}
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </main>
                </Layout>
            </>
        );
    }

    return (
        <>
            <PageMetadata
                title={translate({
                    id: 'theme.NotFound.title',
                    message: 'Page Not Found',
                })}
            />
            <Layout>
                <main className="container margin-vert--xl">
                    <div className="row">
                        <div className="col col--6 col--offset-3">
                            <h1 className="hero__title">
                                <Translate id="theme.NotFound.title" description="The title of the 404 page">
                                    Page Not Found
                                </Translate>
                            </h1>
                            <p>
                                <Translate
                                    id="theme.NotFound.p1"
                                    description="The first paragraph of the 404 page"
                                >
                                    We could not find what you were looking for.
                                </Translate>
                            </p>
                            <p>
                                <Translate
                                    id="theme.NotFound.p2"
                                    description="The 2nd paragraph of the 404 page"
                                >
                                    Please contact the owner of the site that linked you to the original URL
                                    and let them know their link is broken.
                                </Translate>
                            </p>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}
