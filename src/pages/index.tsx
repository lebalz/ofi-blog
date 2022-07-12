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
      original: './img/index/artificial-intelligence.jpg'
    },
    {
      original: './img/index/robot-hand.jpg'
    },
    {
      original: './img/index/security.jpg'
    },
    {
      original: './img/index/network.jpg'
    },
    {
      original: './img/index/computer.jpg'
    }
  ];

  return (
    <Layout
      description="OF Informatik Website by B. Hofer">
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
      </main>
    </Layout>
  );
}
