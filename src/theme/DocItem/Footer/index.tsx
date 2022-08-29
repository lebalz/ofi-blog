import React from 'react';
import Footer from '@theme/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type { WrapperProps } from '@docusaurus/types';
import styles from './style.module.scss';
// @ts-ignore
import { useDoc } from '@docusaurus/theme-common/internal';
import clsx from 'clsx';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
    const { frontMatter } = useDoc();
    const { sidebar_custom_props } = frontMatter;
    return (
        <div className={styles.footer}>
            <div className={styles.sources}>
                {sidebar_custom_props.source && (
                    <>
                        {sidebar_custom_props.source.name && (
                            <a
                                href={sidebar_custom_props.source.ref || '#'}
                                className={clsx(styles.copyright, 'badge', 'badge--primary')}
                            >
                                {sidebar_custom_props.source.name}
                                {sidebar_custom_props.source.ref && (
                                    <i className="mdi mdi-open-in-new" style={{ marginLeft: '0.3em' }}></i>
                                )}
                            </a>
                        )}
                        <i className={clsx(styles.copyright, 'badge', 'badge--primary')}>Bearbeitet</i>
                    </>
                )}
                <a
                    className={clsx(styles.copyright, 'badge', 'badge--primary')}
                    href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de"
                    target="_blank"
                >
                    CC 4.0
                    <i className="mdi mdi-open-in-new" style={{ marginLeft: '0.3em' }}></i>
                </a>
            </div>
            <Footer {...props} />
        </div>
    );
}
