import * as React from 'react';
import { DOM_ELEMENT_IDS } from './constants';
import { sanitizePyScript } from '../../utils/sanitizers';
import { observer } from 'mobx-react-lite';
import { ScriptContext } from '.';
const run_template = require("./brython_runner.raw.py")

const PyScriptSrc = observer(() => {
  const pyScript = React.useContext(ScriptContext);
    return (
        <script id={DOM_ELEMENT_IDS.scriptSource(pyScript.codeId)} type="text/py_disabled" className="brython-script">
            {`${run_template}\nrun("""${sanitizePyScript(pyScript.pyDoc.data.code || '')}""", '${pyScript.codeId}')`}
        </script>
    )
})

export default PyScriptSrc;