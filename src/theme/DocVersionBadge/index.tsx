import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
// @ts-ignore
import {useDocsVersion} from '@docusaurus/theme-common/internal';
import type {Props} from '@theme/DocVersionBadge';

export default function DocVersionBadge({
  className,
}: Props): JSX.Element | null {
  const versionMetadata = useDocsVersion();
  if (versionMetadata.badge) {
    return (
      <span
        className={clsx(
          className,
          ThemeClassNames.docs.docVersionBadge,
          'badge badge--secondary',
        )}>
          {versionMetadata.label}
      </span>
    );
  }
  return null;
}
