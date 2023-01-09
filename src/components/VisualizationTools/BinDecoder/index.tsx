import clsx from 'clsx';
import * as React from 'react';
import styles from './BinDecoder.module.scss';
import containerStyle from '../../styles/container.module.scss';
import anime from 'animejs';
/** make sure to adapt the query selector when renaming the svg */
import Cable from './cable.svg';
import { pauseAnimations, removeAnimations, playAnimations } from '../../helpers/animeUtils';

const BUTTON_CLSX = ['button', 'button--sm', 'button--primary', 'button--outline'];

interface ProcessedPart {
    char: string;
    bin: string;
    ord: number;
    bytes: string;
}

const octaChunks = (octaText: string): string[] => {
    const chunks: string[] = [];
    let sanitized = octaText.replace(/\s+/g, '');
    if (sanitized.length % 8 !== 0) {
        sanitized = sanitized.padStart(sanitized.length + (sanitized.length % 8), '0');
    }
    while (sanitized.length > 0) {
        chunks.push(sanitized.slice(0, 8));
        sanitized = sanitized.slice(8);
    }
    return chunks;
};

const controlBits = (octet: string) => {
    const m = octet.match(/(?<control>1{0,4}0)/);
    if (!m) {
        return 0;
    }
    return m.groups.control.length;
};

type State = 'start' | 'running' | 'pause' | 'continue' | 'idle' | 'stop';

const BinDecoder = () => {
    const [state, setState] = React.useState<State>('idle');
    const prevStateRef = React.useRef<State>(null);
    const [mode, setMode] = React.useState<'latin1' | 'utf8'>('latin1');
    const itemsRef = React.useRef<Array<HTMLDivElement | null>>([]);
    const pathSvg = React.useRef<HTMLDivElement>(null);
    const [anims, setAnims] = React.useState<Array<anime.AnimeInstance>>([]);
    const [bin, setBin] = React.useState('01010010 01100101 01110100 01101111');
    const [out, setOut] = React.useState<ProcessedPart[]>([]);
    const [outPos, setOutPos] = React.useState({ top: 0, left: 0 });
    const [animBin, setAnimBin] = React.useState('');
    const [stack, setStack] = React.useState<string[]>([]);
    const [processedIdx, setProcessedIdx] = React.useState(-1);
    const [timer, setTimer] = React.useState<NodeJS.Timeout | null>(null);
    const [flushStack, setFlushStack] = React.useState(false);
    React.useEffect(() => {
        if (mode === 'latin1') {
            setBin('01010010 01100101 01110100 01101111');
        } else {
            setBin('11100010 10101101 10010000');
        }
    }, [mode]);

    React.useEffect(() => {
        if (prevStateRef.current === state) {
            return;
        }
        prevStateRef.current = state;
        if (timer && state !== 'running') {
            clearTimeout(timer);
        }
        switch (state) {
            case 'pause':
                pauseAnimations(anims);
                break;
            case 'continue':
                playAnimations(anims);
                setState('running');
                break;
            case 'running':
                if (flushStack) {
                    setFlushStack(false);
                    setStack([]);
                }
                break;
            case 'stop':
                removeAnimations(itemsRef.current);
                setOut([]);
                setAnimBin('');
                setStack([]);
                setState('idle');
                break;
            case 'start':
                removeAnimations(itemsRef.current);
                const chunks = octaChunks(bin);
                setBin(chunks.join(' '));
                setOut([]);
                setAnimBin('');
                setStack([]);
                setTimeout(() => {
                    setAnimBin(chunks.join(''));
                }, 0);
                setState('running');
                break;
        }
    }, [state, timer, flushStack]);

    React.useEffect(() => {
        if (pathSvg.current) {
            const out = pathSvg.current.querySelector('svg>circle.cable_svg__binDecoderOut');
            if (out) {
                const bbox = out.getBoundingClientRect();
                const container = pathSvg.current.getBoundingClientRect();
                setOutPos({ left: bbox.left - container.left, top: bbox.top - container.top });
            }
        }
    }, []);

    React.useEffect(() => {
        pauseAnimations(anims);
        removeAnimations(itemsRef.current);
        setOut([]);
        setAnimBin('');
        setStack([]);
        setState('idle');
        if (timer) {
            clearTimeout(timer);
        }
    }, [mode]);

    React.useEffect(() => {
        if (itemsRef.current && pathSvg.current) {
            const svgP = pathSvg.current.querySelector<SVGPathElement>('svg>path:last-of-type');
            const animPath = anime.path(svgP);
            setProcessedIdx(-1);
            const animations = itemsRef.current.map((r, idx) => {
                if (!r) {
                    return;
                }
                const animation = anime({
                    targets: [r],
                    translateX: animPath('x'),
                    translateY: animPath('y'),
                    rotate: animPath('angle'),
                    easing: 'linear',
                    duration: 4000,
                    delay: idx * 90 + Math.floor(idx / 8) * 100,
                    loop: false,
                    complete: (anim) => {
                        setProcessedIdx(idx);
                    },
                });
                return animation;
            });
            setAnims(animations);
        }
    }, [itemsRef, pathSvg, animBin]);

    React.useEffect(() => {
        const currentBin = animBin.substr(processedIdx, 1);
        if (!currentBin) {
            return;
        }
        const newStack = [...stack];
        if (itemsRef.current && itemsRef.current[processedIdx]) {
            itemsRef.current[processedIdx].style.display = 'none';
        }
        const makeBreak = stack.length > 0 && (processedIdx + 1) % 8 === 0;
        let parseStack = makeBreak;
        if (mode === 'latin1') {
            newStack.push(currentBin);
        } else {
            const chunkStart = Math.floor(processedIdx / 8) * 8;
            const ctrlBits = controlBits(animBin.substr(chunkStart, 8));
            const ctrlBitsNext = controlBits(animBin.substr(chunkStart + 8, 8));
            parseStack = parseStack && (ctrlBits === 1 || ctrlBitsNext !== 2);
            if (processedIdx % 8 >= ctrlBits) {
                newStack.push(currentBin);
            }
        }
        setStack(newStack);
        if (parseStack) {
            pauseAnimations(anims);
            const bin = newStack.join('');
            const ord = parseInt(bin, 2);
            let bytes = bin.padStart(bin.length + 6 - bin.length % 6, '0')
            if (bin.length > 7) {
                const chunks = bytes.split(/(.{6})/).filter(o => o)
                bytes = chunks.reduce((prev, curr, idx) => {
                    if (idx === 0) {
                        return `${'1'.repeat(chunks.length)}0${curr.substring(chunks.length - 2)}`
                    }
                    return `${prev} 10${curr}`;
                }, '')
            } else {
                bytes = `0${bin.padStart(7, '0')}`
            }
            const char: ProcessedPart = {
                bin: bin,
                ord: ord,
                char: String.fromCodePoint(ord),
                bytes: mode === 'utf8' ? bytes : ''
            };

            setOut([...out, char]);
            setFlushStack(true);
            setTimer(
                setTimeout(() => {
                    setStack([]);
                    playAnimations(anims.slice(processedIdx));
                    setFlushStack(false);
                }, 1000)
            );
        } else if (makeBreak) {
            pauseAnimations(anims);
            setTimer(
                setTimeout(() => {
                    playAnimations(anims.slice(processedIdx));
                }, 1000)
            );
        }
        if (processedIdx === anims.length - 1) {
            setState('idle');
        }
    }, [processedIdx, mode]);

    return (
        <div className={clsx('hero', 'shadow--lw', containerStyle.container, styles.container)}>
            <div className="container">
                <p className="hero__subtitle">Bin Decoder</p>
                <h4>Modus</h4>
                <div className={clsx('buttongroup', styles.modes)}>
                    <button
                        className={clsx(...BUTTON_CLSX, mode === 'latin1' && 'button--active')}
                        onClick={() => setMode('latin1')}
                    >
                        Latin1
                    </button>
                    <button
                        className={clsx(...BUTTON_CLSX, mode === 'utf8' && 'button--active')}
                        onClick={() => setMode('utf8')}
                    >
                        UTF-8
                    </button>
                </div>
                <div className={styles.inputContainer}>
                    <textarea
                        placeholder="Binäre Zeichenkette"
                        className={clsx(containerStyle.input)}
                        value={bin}
                        onChange={(e) => setBin(e.target.value.replace(/[^01\s]/g, '1'))}
                        rows={3}
                    ></textarea>
                    <div className={clsx('buttongroup', styles.modes)}>
                        {['start', 'idle'].includes(state) ? (
                            <button className={clsx(...BUTTON_CLSX)} onClick={() => setState('start')}>
                                Start
                            </button>
                        ) : (
                            <React.Fragment>
                                <button
                                    className={clsx(...BUTTON_CLSX)}
                                    onClick={() => setState(state === 'running' ? 'pause' : 'continue')}
                                >
                                    {state === 'running' ? 'Pause' : 'Fortsetzen'}
                                </button>
                                <button className={clsx(...BUTTON_CLSX)} onClick={() => setState('stop')}>
                                    Stop
                                </button>
                            </React.Fragment>
                        )}
                    </div>
                    <div className={clsx(styles.sentBits)}>
                        {animBin.split('').map((chr, idx) => {
                            const isFirstOfByte = idx > 0 && idx % 8 === 0;
                            return (
                                <div
                                    className={clsx(
                                        styles.bit,
                                        processedIdx >= idx && styles.processed,
                                        isFirstOfByte && styles.first,
                                        chr === '1' ? styles.on : styles.off
                                    )}
                                    key={idx}
                                >
                                    {chr}
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        {animBin.split('').map((chr, idx) => {
                            return (
                                <div
                                    key={idx}
                                    ref={(el) => (itemsRef.current[idx] = el)}
                                    className={clsx(styles.bitContainer)}
                                >
                                    <div className={clsx(styles.bit, chr === '1' ? styles.on : styles.off)}>
                                        <span className={clsx(styles.text)}>{chr}</span>
                                    </div>
                                </div>
                            );
                        })}
                        <div ref={pathSvg} className={clsx(styles.svgContainer)}>
                            {/* SVG */}
                            <Cable className={clsx(styles.cable)} />
                            {/* OUTPUT CONTAINER */}
                            <div className={clsx(styles.out)} style={{ top: outPos.top, left: outPos.left }}>
                                {/* OUTPUT VALUE */}
                                <textarea value={out.map((chr) => chr.char).join('')} disabled></textarea>
                                {/* CURRENT STACK */}
                                <div className={clsx(styles.octet)}>
                                    {stack.map((chr, idx) => {
                                        return (
                                            <div
                                                className={clsx(
                                                    styles.bit,
                                                    chr === '1' && styles.on,
                                                    chr === '0' && styles.off
                                                )}
                                                key={idx}
                                            >
                                                {chr}
                                            </div>
                                        );
                                    })}
                                </div>
                                {/* PROCESSED TABLE */}
                                <div className={clsx(styles.charHistory)}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Chr</th>
                                                <th>Dec</th>
                                                <th>Bin</th>
                                                {mode === 'utf8' && (
                                                    <th>Bytes</th>
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {out
                                                .slice()
                                                .reverse()
                                                .map((chr, idx) => {
                                                    return (
                                                        <tr key={idx}>
                                                            <td>{chr.char}</td>
                                                            <td>{chr.ord}</td>
                                                            <td>{chr.bin}</td>
                                                            {mode === 'utf8' && (
                                                                <th>{chr.bytes}</th>
                                                            )}
                                                        </tr>
                                                    );
                                                })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BinDecoder;
