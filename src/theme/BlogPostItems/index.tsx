import React from 'react';
import BlogPostItems from '@theme-original/BlogPostItems';
import type BlogPostItemsType from '@theme/BlogPostItems';
import type {WrapperProps} from '@docusaurus/types';
import styles from './index.module.scss';
import clsx from 'clsx';

type Props = WrapperProps<typeof BlogPostItemsType>;

export default function BlogPostItemsWrapper(props: Props): JSX.Element {
  return (
    <div className={clsx(styles.blogList)}>
      <BlogPostItems {...props} />
    </div>
  );
}
