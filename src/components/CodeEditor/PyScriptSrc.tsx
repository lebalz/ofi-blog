import * as React from 'react';
import { DOM_ELEMENT_IDS, TURTLE3D_IMPORTS_TESTER } from './constants';
import { sanitizePyScript } from '../../utils/sanitizers';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/hooks';
import Script from '../../models/Script';
import GridModule from './Modules/Grid';
import ConfigModule from './Modules/Config';
import GameModule from './Modules/Game';
import Turtle3dModule from './Modules/Turtle3d';
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
            <ConfigModule />
            <GameModule />
            {
                TURTLE3D_IMPORTS_TESTER.test(code) && (
                    <Turtle3dModule />
                )
            }
            {
                pyScript.hasCanvasOutput && (
                    <GridModule />
                )
            }
            <script
                id={DOM_ELEMENT_IDS.scriptSource(pyScript.codeId)}
                type="text/py_disabled"
                className="brython-script"
            >
                {`${run_template}\nrun("""${sanitizePyScript(code || '')}""", '${
                    pyScript.codeId
                }', ${lineShift})`}
            </script>
        </React.Fragment>
    );
});

export default PyScriptSrc;
