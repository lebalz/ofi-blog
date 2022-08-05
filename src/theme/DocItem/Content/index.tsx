import React from 'react';
import Content from '@theme-original/DocItem/Content';
// @ts-ignore
import type ContentType from '@theme/DocItem/Content';
import type { WrapperProps } from '@docusaurus/types';
import { useStore } from '@site/src/stores/hooks';
import useFrontMatter from '@theme/useFrontMatter';
import { observer } from 'mobx-react-lite';

type Props = WrapperProps<typeof ContentType>;

const ContentWrapper = observer((props: Props): JSX.Element => {
    const store = useStore('commentStore');
    const { sidebar_custom_props } = useFrontMatter();
    React.useEffect(() => {
      if (sidebar_custom_props.id && store && store.isLoggedIn) {
        store.loadComments(sidebar_custom_props.id).catch(() => 'ignore load errors here');
      }
    }, [store]);

    return (
        <>
            <Content {...props} />
        </>
    );
});

export default ContentWrapper;