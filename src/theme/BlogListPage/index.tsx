import React from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import type BlogListPageType from '@theme/BlogListPage';
import type {WrapperProps} from '@docusaurus/types';
import { CommentProvider } from '../Root';

type Props = WrapperProps<typeof BlogListPageType>;

export default function BlogListPageWrapper(props: Props): JSX.Element {
  return (
    <CommentProvider value={false}>
      <BlogListPage {...props} />
    </CommentProvider>
  );
}
