import React from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type { WrapperProps } from '@docusaurus/types';
import { useComments } from '@site/src/stores/hooks';

// @ts-ignore
import useFrontMatter from '@theme/useFrontMatter';
import { observer } from 'mobx-react-lite';
import styles from './styles.module.scss';
import { PageStateSummary } from '@site/src/components/Answer/StateSummary';

type Props = WrapperProps<typeof ContentType>;

const ContentWrapper = observer((props: Props): JSX.Element => {
    const { sidebar_custom_props } = useFrontMatter();
    useComments(sidebar_custom_props.id);

    return (
        <div className={styles.content}>
            <PageStateSummary />
            <Content {...props} />
        </div>
    );
});

export default ContentWrapper;
