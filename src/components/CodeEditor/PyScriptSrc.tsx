import * as React from 'react';
import { DOM_ELEMENT_IDS } from './constants';
import { sanitizePyScript } from '../../utils/sanitizers';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/hooks';
import Script from '../../models/Script';
import GridModule from './Modules/Grid';
const run_template = require('./brython_runner.raw.py');

interface Props {
    webKey: string;
}
const PyScriptSrc = observer((props: Props) => {
    const store = useStore('documentStore');
    const pyScript = store.find<Script>(props.webKey);
    const code = `${pyScript.precode}\n${pyScript.code}`;
    const lineShift = pyScript.precode.split(/\n/).length;
    return (
        <React.Fragment>
            <script
                id={DOM_ELEMENT_IDS.scriptSource(pyScript.codeId)}
                type="text/py_disabled"
                className="brython-script"
            >
                {`${run_template}\nrun("""${sanitizePyScript(code || '')}""", '${
                    pyScript.codeId
                }', ${lineShift})`}
            </script>
            {
                pyScript.hasCanvasOutput && (
                    <GridModule />
                )
            }
        </React.Fragment>
    );
});

export default PyScriptSrc;
