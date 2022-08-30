import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
// @ts-ignore
import useFrontMatter from '@theme/useFrontMatter';
import { useStore } from '@site/src/stores/hooks';
import { LocatorType } from '@site/src/api/comment';
import { default as CommentModel } from '@site/src/models/Comment';
import { observer } from 'mobx-react-lite';
import QuillEditor from '../shared/QuillEditor';
import { action } from 'mobx';

interface Props {
    nr: number;
    type: LocatorType;
}

const getReferenceContainer = (el: HTMLElement) => {
    if (el.getAttribute('role') === 'tabpanel' || el.classList.contains('markdown') || !el.parentElement) {
        return el;
    }
    return getReferenceContainer(el.parentElement);
}

const reposition = (el: HTMLDivElement) => {
    if (el.classList.contains('table')) {
        el.style.right = '2px';
        return;
    }
    const md = getReferenceContainer(el.parentElement);
    if (md) {
        if (md.getAttribute('role') === 'tabpanel') {
            el.style.right = '2px';
            return;
        }
        const mdRight = md.getBoundingClientRect().right;
        const parentRight = el.parentElement.getBoundingClientRect().right;
        const offset = parentRight - mdRight - 10;
        el.style.right = `${offset}px`;
    }
};

const setColor = (model: CommentModel | undefined, color: 'red' | 'orange' | 'green' | 'blue' | 'yellow') => {
    if (!model) {
        return undefined;
    }
    return action((e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        model.color = color;
    });
};

const Comment = observer((props: Props) => {
    const store = useStore('commentStore');
    const { sidebar_custom_props } = useFrontMatter();

    const ref = React.useRef<HTMLDivElement>(null);
    const [promptDelete, setPromptDelete] = React.useState(false);
    const models = store.find(sidebar_custom_props.id, props.type, props.nr);
    const hasModels = models.length > 0;

    React.useEffect(() => {
        if (ref.current) {
            reposition(ref.current);
            const onResize = () => reposition(ref.current);
            window.addEventListener('resize', onResize);
            return () => window.removeEventListener('resize', onResize);
        }
    }, [ref]);

    React.useEffect(() => {
        store.notifyPresence(sidebar_custom_props.id, props.type, props.nr);
    }, [store]);

    return (
        <>
            <div
                className={clsx(
                    'notranslate',
                    styles.commentIcon,
                    props.type,
                    hasModels && styles.loaded,
                    models[0]?.open && styles.open
                )}
                ref={ref}
                onClick={() => {
                    if (hasModels) {
                        models.forEach((m) => m.toggleOpen());
                    } else {
                        if (store.isLoggedIn) {
                            store.openComment(sidebar_custom_props.id, props.type, props.nr);
                        } else {
                            window.alert('Melden Sie sich an, um Kommentare zu erfassen');
                        }
                    }
                }}
                style={{ ['--comment-color']: models[0]?.cssColor } as React.CSSProperties}
            >
                <div
                    className={clsx(styles.controls, models[0]?.showMenu && styles.active)}
                    onMouseLeave={() => {
                        models[0]?.setShowMenu(false);
                        setPromptDelete(false);
                    }}
                >
                    {models[0]?.showMenu && store.isMyView && (
                        <>
                            <span className={clsx(styles.delete)}>
                                <i
                                    className={clsx('mdi', 'mdi-trash-can', styles.icon)}
                                    style={{ color: 'var(--ifm-color-danger' }}
                                    data-toggle="dropdown"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        setPromptDelete(true);
                                    }}
                                ></i>
                                {promptDelete && (
                                    <div
                                        className={clsx(styles.button, 'button', 'button--danger')}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            models[models.length - 1].delete();
                                        }}
                                    >
                                        Ja, Löschen!
                                    </div>
                                )}
                            </span>
                            <div className={clsx(styles.colorPicker, 'dropdown', 'dropdown--hoverable')}>
                                <span className={clsx(styles.color)} onClick={(e) => {e.preventDefault();e.stopPropagation();}}></span>
                                <div className={'dropdown__menu'}>
                                    <span
                                        onClick={setColor(models[0], 'red')}
                                        className={clsx(
                                            'dropdown__link',
                                            styles.color,
                                            styles.red,
                                            models[0]?.color === 'red' && styles.active
                                        )}
                                    ></span>
                                    <span
                                        onClick={setColor(models[0], 'orange')}
                                        className={clsx(
                                            'dropdown__link',
                                            styles.color,
                                            styles.orange,
                                            models[0]?.color === 'orange' && styles.active
                                        )}
                                    ></span>
                                    <span
                                        onClick={setColor(models[0], 'green')}
                                        className={clsx(
                                            'dropdown__link',
                                            styles.color,
                                            styles.green,
                                            models[0]?.color === 'green' && styles.active
                                        )}
                                    ></span>
                                    <span
                                        onClick={setColor(models[0], 'blue')}
                                        className={clsx(
                                            'dropdown__link',
                                            styles.color,
                                            styles.blue,
                                            models[0]?.color === 'blue' && styles.active
                                        )}
                                    ></span>
                                    <span
                                        onClick={setColor(models[0], 'yellow')}
                                        className={clsx(
                                            'dropdown__link',
                                            styles.color,
                                            styles.yellow,
                                            models[0]?.color === 'yellow' && styles.active
                                        )}
                                    ></span>
                                </div>
                            </div>
                        </>
                    )}
                    <i
                        onMouseEnter={() => models[0]?.setShowMenu(true)}
                        className={clsx('mdi', 'mdi-comment-text-outline', styles.icon)}
                    ></i>
                </div>
            </div>
            {models[0]?.open && (
                <div
                    className={styles.comments}
                    style={{ ['--comment-color']: models[0]?.cssColor } as React.CSSProperties}
                >
                    {models.map((m, idx) => {
                        return (
                            <div
                                key={`${idx}@${m.initializedAt}`}
                                className={clsx(styles.comment)}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                            >
                                <QuillEditor model={m} theme={'bubble'} placeholder="💬 ..." />
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
});

export default Comment;
