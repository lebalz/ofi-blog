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
      original: './img/index/robot_thinking.jpg',
      description: <span>© Mike McKenzie - <a href="https://creativecommons.org/licenses/by/2.0/" style={{ color: 'white' }} >CC 2.0</a></span>
    },
    {
      original: './img/index/coding.jpeg',
      description: <span>Bild von <a href="https://www.information-age.com/software-123466740/">Information-Age</a></span>
    },
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
