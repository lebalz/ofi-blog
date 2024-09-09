import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import HomepageCourses from '../components/HomepageCourses';
import ImageGallery from 'react-image-gallery';
import { Content } from "@theme/BlogPostPage";

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
interface Props {
    readonly recentPosts: readonly { readonly content: Content }[];
}

export default function Home({ recentPosts }: Props) {

    return (
        <Layout>
            <HomepageHeader />
            <main>
                <div className="hero hero--primary" style={{height: '25rem'}}>
                    <div className="container">
                        <h1 className="hero__title">OFI ist umgezogen</h1>
                        <p className="hero__subtitle" style={{color: 'var(--ifm-heading-color)'}}>Danke für dein langfristiges Interesse an ofi.gbsl.website. Die aktuelle Seite findest du neu unter</p>
                        <div>
                            <a className="button button--secondary button--lg" href="https://inf.gbsl.website">👉 inf.gbsl.website</a>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
