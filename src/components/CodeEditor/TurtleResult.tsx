import * as React from 'react';
import styles from './styles.module.scss';
import { DOM_ELEMENT_IDS } from './constants';
import Draggable from 'react-draggable';
import { checkForButtonClick } from '../../utils/check_for_button_click';
import { saveSvg } from '../../utils/save_svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTimes, faRunning } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/hooks';
import Script from '../../models/Script';
interface Props {
    webKey: string;
}
const TurtleResult = observer((props: Props) => {
  const store = useStore('documentStore');
  const pyScript = store.find<Script>(props.webKey);
    const documentStore = useStore("documentStore");
    return (
        <Draggable
            onStop={checkForButtonClick}
            positionOffset={{x: 0, y: '-50%'}}
        >
            <div className={styles.brythonTurtleResult}>
                <div className={styles.brythonTurtleResultHead}>
                    <span>Output</span>
                    <span className={styles.spacer} ></span>
                    <button
                        aria-label="Download Animated SVG"
                        type="button"
                        className={styles.slimStrippedButton}
                        style={{ zIndex: 1000 }}
                        onClick={() => {
                            const turtleResult = (document.getElementById(DOM_ELEMENT_IDS.turtleSvgContainer(pyScript.codeId)) as any) as SVGSVGElement;
                            if (turtleResult) {
                                saveSvg(turtleResult, `${pyScript.codeId}`, pyScript.executedScriptSource, true)
                            }
                        }}>
                        <span aria-hidden="true"><FontAwesomeIcon icon={faRunning} /></span>
                    </button>
                    <button
                        aria-label="Download SVG"
                        type="button"
                        className={styles.slimStrippedButton}
                        style={{ zIndex: 1000 }}
                        onClick={() => {
                            const turtleResult = (document.getElementById(DOM_ELEMENT_IDS.turtleSvgContainer(pyScript.codeId)) as any) as SVGSVGElement;
                            if (turtleResult) {
                                saveSvg(turtleResult, `${pyScript.codeId}`, pyScript.executedScriptSource)
                            }
                        }}>
                        <span aria-hidden="true"><FontAwesomeIcon icon={faDownload} /></span>
                    </button>
                    <button
                        aria-label="Close"
                        type="button"
                        style={{ zIndex: 1000 }}
                        className={styles.slimStrippedButton}
                        onClick={() => documentStore.setOpendTurtleModal(undefined)}>
                        <span aria-hidden="true"><FontAwesomeIcon icon={faTimes} /></span>
                    </button>
                </div>
                <div
                    id={DOM_ELEMENT_IDS.turtleResult(pyScript.codeId)}
                    className="brython-turtle-result"
                >
                </div>
            </div>
        </Draggable>
    )
})

export default TurtleResult;