import clsx from 'clsx';
import containerStyle from '../../styles/container.module.scss';
import * as React from 'react';
import { fromUTF8 } from '../../helpers/binary';

interface Props {

}

const Bin2Text = (props: Props) => {
    const [bin, setBin] = React.useState('');
    const [text, setText] = React.useState('');

    React.useEffect(() => {
        const lines = bin.split('\n');
        const txt = lines.map((t) => fromUTF8(t)).join('\n');
        setText(txt);
    }, [bin]);
    return (
        <div className={clsx('hero', 'shadow--lw', containerStyle.container)}>
            <div className="container">
                <p className="hero__subtitle">Binär Decodierer</p>
                <div className={clsx()}>
                    <textarea
                        placeholder="Binäre Zeichenkette"
                        className={clsx(containerStyle.input)}
                        rows={bin.split('\n').length}
                        value={bin}
                        onChange={(e) => setBin(e.target.value)}
                    ></textarea>
                </div>
                <div className={clsx()}>
                    <textarea
                        placeholder="Text"
                        className={clsx(containerStyle.input)}
                        rows={text.split('\n').length}
                        value={text}
                        disabled
                    ></textarea>
                </div>
         </div>
        </div>
    )

}

export default Bin2Text;