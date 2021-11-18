import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Props } from '.';
import { IModel } from '../../models/iModel';
import { useStore } from '../../stores/hooks';
import ArrayAnswer from './ArrayAnswer';
import StringAnswer from './StringAnswer';
import TextAnswer from './TextAnswer';

/** Legacy Resolver Local Storage Test Data:
 * --> /Programmieren-1/Algorithmen/Uebungen/robozzle
 * localStorage.setItem('programmieren_1_algorithmen_uebungen_robozzle', '{"expiry":1760275631656,"robozzle_a1":{"value":["↑","↑","↰","↑"],"type":"array"}}')
 * 
 * --> /playground
 * localStorage.setItem('playground', '{"expiry":1760275631656,"python__playground_py":{"code":"print(\'fucker\')","type":"code"}}')
 * 
 */

const resolveLegacyDoc = (action: 'use_legacy' | 'use_current', model: IModel) => {
    if (model.type === 'code') {
        return;
    }
    if (action === 'use_legacy') {
        model.setData(model.legacyData as any);
        model.saveService.saveNow()
            .then((res) => {
                if (res.data && res.data.state === 'ok') {
                runInAction(() => {
                    model.legacyData = undefined;
                    if (model.legacyCleanup) {
                        model.legacyCleanup();
                    }
                });
            }
        });
    } else {
        runInAction(() => {
            model.legacyData = undefined;
            if (model.legacyCleanup) {
                model.legacyCleanup();
            }
        });
    }
}
const LegacyResolver = observer((props: Props) => {
    const store = useStore('documentStore');
    const model = store.find(props.webKey);
    if (!model.legacyData) {
        return null;
    }
    return (
        <div className="alert alert--primary" role="alert">
            Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?
            <br />
            (⚠️ Die andere Version wird verworfen!)
            <div>
                {model.type === 'text' && <TextAnswer type="text" webKey={model.webKey} isLegacy={true} />}
                {model.type === 'string' && <StringAnswer type="string" webKey={props.webKey} isLegacy={true} />}
                {model.type === 'array' && (
                    <ArrayAnswer type="array" webKey={props.webKey} size={model.size} isLegacy={true} />
                )}
            </div>
            <div>
                <button className="button button--primary" onClick={() => resolveLegacyDoc('use_legacy', model)}>
                    Ja
                </button>
                <button className="button button--info" onClick={() => resolveLegacyDoc('use_current', model)}>
                    Nein (verwerfen)
                </button>
            </div>
        </div>
    );
});

export default LegacyResolver;
