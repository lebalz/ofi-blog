import React from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type { WrapperProps } from '@docusaurus/types';
import { useComments } from '@site/src/stores/hooks';
import {useDoc} from '@docusaurus/theme-common/internal';

import { observer } from 'mobx-react-lite';
import styles from './styles.module.scss';
import { PageStateSummary } from '@site/src/components/Answer/StateSummary';

type Props = WrapperProps<typeof ContentType>;

const ContentWrapper = observer((props: Props): JSX.Element => {
    const { frontMatter } = useDoc();
    const { sidebar_custom_props } = frontMatter as { sidebar_custom_props: { id: string } };
    const pageId = (sidebar_custom_props as {id: string}).id;
    useComments(pageId);

    return (
        <div className={styles.content}>
            <PageStateSummary  pageId={pageId}/>
            <Content {...props} />
        </div>
    );
});

export default ContentWrapper;
