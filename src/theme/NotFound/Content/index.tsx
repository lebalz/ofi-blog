import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import type { Props } from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import Icon from '@mdi/react';
import { useLocation } from '@docusaurus/router';
import { mdiArrowRightBoldBox } from '@mdi/js';
import Link from '@docusaurus/Link';

const ARCHIVED_CLASSES = [
    { name: '24i', version: '24' },
    { name: '24f', version: '24' },
    { name: '24o', version: '24' },
    { name: '24L', version: '24' },
    { name: '24K', version: '24' },
    { name: '24w', version: '25' },
    { name: '25h', version: '25' },
];

const REGEX = new RegExp(`^\\/(${ARCHIVED_CLASSES.map((c) => c.name).join('|')})\\/`, 'i');

export default function NotFoundContent({ className }: Props): JSX.Element {
    const location = useLocation();

    if (REGEX.test(location.pathname)) {
        const klasse = location.pathname.split('/')[1];
        const version = ARCHIVED_CLASSES.find((c) => c.name === klasse.toLowerCase() || c.name === klasse.toUpperCase())?.version;
        if (version) {
            const baseUri = `https://ofi.${version}.gbsl.website`;
            const newUri = `${baseUri}${location.pathname}${location.hash}${location.search}`;
            return (    
                <>
                    <PageMetadata title="Seite archiviert" />
                    <main className="container margin-vert--xl">
                        <div className="row">
                            <div className="col col--6 col--offset-3">
                                <Heading as="h1" className="hero__title">
                                    Seite des Jahrgangs 20{version} archiviert
                                </Heading>
                                <a 
                                    href={newUri}
                                    className="button button--outline button--success margin--s"
                                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}
                                >
                                    <span>
                                        Weiter zum Artikel
                                    </span>
                                    <Icon
                                        path={mdiArrowRightBoldBox}
                                        size={1}
                                        style={{ marginLeft: '1em' }}
                                    />
                                </a>
                                <p>
                                    Die Kurse früherer Jahrgänge wurden <b>archiviert</b> und werden nicht weiter
                                    aktualisiert/verändert.
                                </p>
                                <p>
                                    Die archivierte Seite ist unter{' '}
                                    <a href={`${baseUri}/${klasse}/home`}>👉 {baseUri}</a> zu
                                    finden.
                                </p>
                                <p>
                                    Ihre persönlichen Daten wurden ebenfalls archiviert, können jedoch bis zum Ende der Schulzeit 
                                    auf dieser Seite im Login-Bereich heruntergeladen werden und auf der archivierten Seite weiterhin 
                                    (auch über die Schulzeit hinaus) angezeigt werden.
                                    <br />
                                    Nach der Schulzeit werden Ihre persönlichen Daten gelöscht.
                                    <br />
                                    <ul>
                                        <li><Link to="/login">👉 Persönliche Daten herunterladen</Link></li>
                                        <li><Link to="/login">👉 Löschung der persönlichen Daten jetzt anfordern</Link></li>
                                    </ul>
                                </p>
                                <a 
                                    href={newUri}
                                    className="button button--success margin--xs"
                                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}
                                >
                                    <span>
                                        Weiter zum archivierten Artikel
                                    </span>
                                    <Icon
                                        path={mdiArrowRightBoldBox}
                                        size={1}
                                        style={{ marginLeft: '1em' }}
                                    />
                                </a>
                            </div>
                        </div>
                    </main>
                </>
            );
        }
    }

    return (
        <main className={clsx('container margin-vert--xl', className)}>
            <div className="row">
                <div className="col col--6 col--offset-3">
                    <Heading as="h1" className="hero__title">
                        <Translate
                            id="theme.NotFound.title"
                            description="The title of the 404 page">
                            Page Not Found
                        </Translate>
                    </Heading>
                    <p>
                        <Translate
                            id="theme.NotFound.p1"
                            description="The first paragraph of the 404 page">
                            We could not find what you were looking for.
                        </Translate>
                    </p>
                    <p>
                        <Translate
                            id="theme.NotFound.p2"
                            description="The 2nd paragraph of the 404 page">
                            Please contact the owner of the site that linked you to the
                            original URL and let them know their link is broken.
                        </Translate>
                    </p>
                </div>
            </div>
        </main>
    );
}
