import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
// @ts-ignore
import { useBlogPost } from '@docusaurus/theme-common/internal';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import type { Props } from '@theme/BlogPostItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

// apply a bottom margin in list view
function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}

export default function BlogPostItem({
  children,
  className,
}: Props): JSX.Element {
  const { isBlogPostPage, assets, frontMatter, metadata } = useBlogPost();
  const containerClassName = useContainerClassName();
  if (isBlogPostPage) {
    return (
      <BlogPostItemContainer className={clsx(containerClassName, className)}>
        <BlogPostItemHeader />
        <BlogPostItemContent>{children}</BlogPostItemContent>
        <BlogPostItemFooter />
      </BlogPostItemContainer>
    );
  }
  return (
      <div className="card" style={{color: frontMatter.sidebar_custom_props?.color, background: frontMatter.sidebar_custom_props?.background }}>
        <div className="card__image">
          <img
            src={useBaseUrl(assets.image || '/img/og-preview.png')}
            alt="Showcase Image" />
        </div>
        <div className="card__body">
          <h4>{metadata.title}</h4>
          <small className={styles.noImages}>
            {children}
          </small>
        </div>
        <div className="card__footer">
          <Link to={metadata.permalink} itemProp="url" className="button button--primary button--block">
            Mehr ...
          </Link>
        </div>
      </div>
  )
}
