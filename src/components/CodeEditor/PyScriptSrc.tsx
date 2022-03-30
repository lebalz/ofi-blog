import * as React from 'react';
import { DOM_ELEMENT_IDS } from './constants';
import { sanitizePyScript } from '../../utils/sanitizers';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/hooks';
import Script from '../../models/Script';
const run_template = require('./brython_runner.raw.py');

interface Props {
    webKey: string;
}
const PyScriptSrc = observer((props: Props) => {
    const store = useStore('documentStore');
    const pyScript = store.find<Script>(props.webKey);
    return (
        <script
            id={DOM_ELEMENT_IDS.scriptSource(pyScript.codeId)}
            type="text/py_disabled"
            className="brython-script"
        >
            {`${run_template}\nrun("""${sanitizePyScript(pyScript.code || '')}""", '${
                pyScript.codeId
            }')`}
        </script>
    );
});

export default PyScriptSrc;
