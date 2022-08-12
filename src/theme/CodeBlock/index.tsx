/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// @ts-ignore
import CodeBlock from '@theme-init/CodeBlock';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { sanitizedTitle, sanitizeId } from '../../utils/sanitizers';
import hashCode from '../../utils/hash_code';
// @ts-ignore
import PyAceEditor from '@site/src/components/CodeEditor';
import { v4 as uuidv4 } from 'uuid';

 // @ts-ignore
 import Playground from '@theme/Playground';
 // @ts-ignore
 import ReactLiveScope from '@theme/ReactLiveScope';

function pageId() {
  try {
    const pageId = sanitizeId(window.location.pathname.replace(/^\/|\/$/g, ''))
    return pageId
  } catch (e) {
    return `py`
  }
}

const CONSOLE_ENUMERATION_MAPPING = {}

const getCodeId = (title, children) => {
  const page = pageId();
  if (!CONSOLE_ENUMERATION_MAPPING[page]) {
    CONSOLE_ENUMERATION_MAPPING[page] = {}
  }

  const codeHash = hashCode(children)
  if (!CONSOLE_ENUMERATION_MAPPING[page][codeHash]) {
    CONSOLE_ENUMERATION_MAPPING[page][codeHash] = Object.keys(CONSOLE_ENUMERATION_MAPPING[page]).length + 1;
  }
  const codeId = title ? sanitizeId(title) : `${CONSOLE_ENUMERATION_MAPPING[page][codeHash]}`;
  return codeId;
}

const withLiveEditor = (Component) => {
  const WrappedComponent = function(props) {
    const langMatch = ((props.className || '') as string).match(/language-(?<lang>\w*)/);
    let lang = langMatch?.groups?.lang?.toLocaleLowerCase() ?? '';
    if (lang === 'py') {
      lang = 'python';
    }
    if (props.live_jsx) {
      return <Playground scope={ReactLiveScope} {...props} />;
    }
    if (props.live_py && ExecutionEnvironment.canUseDOM) {
      if (!props.id && !props.slim) {
        return <Component {...props} />
      }

      const code = props.children.replace(/\s*\n$/, '');
      const codeId = getCodeId(props.title, code);
      const [webKey] = React.useState(props.id || uuidv4());
      return <PyAceEditor
          {...props}
          webKey={webKey}
          code={code}
          codeId={codeId}
          readonly={!!props.readonly}
          lang={lang}
          resettable={!props.persist}
          download={!props.versioned && !props.noDownload}
          slim={!!props.slim}
          versioned={!!props.versioned}
          noCompare={!!props.noCompare}
          title={sanitizedTitle(props.title) || lang}
        />
      ;
    }
    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default withLiveEditor(CodeBlock);
