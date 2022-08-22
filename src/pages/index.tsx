import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageCourses from '../components/HomepageCourses';
import ImageGallery from 'react-image-gallery';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary index-page', styles.heroBanner)}>
            <div className="container index-page-title">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

export default function Home() {
    const images = [
        {
            original: './img/index/artificial-intelligence.jpg',
        },
        {
            original: './img/index/robot-hand.jpg',
        },
        {
            original: './img/index/security.jpg',
        },
        {
            original: './img/index/network.jpg',
        },
        {
            original: './img/index/computer.jpg',
        },
    ];

    return (
        <Layout>
            <HomepageHeader />
            <main>
                <div className="gallery-wrapper">
                    <ImageGallery
                        items={images}
                        infinite
                        lazyLoad
                        showNav={false}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showBullets
                        slideDuration={2000}
                        slideInterval={8000}
                        autoPlay
                    />
                </div>
                <HomepageCourses />
                <div className="card" style={{ maxWidth: 'var(--ifm-container-width)', marginRight: 'auto', marginLeft: 'auto', marginBottom: '2em', background: '#d7ff00', color: 'black' }}>
                    <div className="card__header">
                        <h3>🚀 Wettbewerb: Informatik-Olympiade 15.9-30.11.2022 🚀</h3>
                    </div>
                    <div className="card__body">
                        <p>
                            Programmierwettbewerb für Jugendliche. Die Erste Runde findet vom <b>16.9-30.11.2022</b> online statt.
                        </p>
                        <div className="card__image">
                            <a href="https://soi.ch" target="_blank">
                                <img
                                    src={require('./images/soi-2022.png').default}
                                    alt="SOI"
                                    title="Informatik-Olympiade"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="card__footer">
                        <a className="button button--secondary button--block" href='https://soi.ch'>Mehr Informationen auf soi.ch</a>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
