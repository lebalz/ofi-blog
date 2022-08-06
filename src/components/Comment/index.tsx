import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import useFrontMatter from '@theme/useFrontMatter';
import { useStore } from '@site/src/stores/hooks';
import { LocatorType } from '@site/src/api/comment';
import { observer } from 'mobx-react-lite';
import QuillEditor from '../shared/QuillEditor';

interface Props {
    nr: number;
    type: LocatorType;
}

const reposition = (el: HTMLDivElement) => {
    const md = document.querySelector<HTMLDivElement>('.markdown');
    if (md) {
        const mdRight = md.getBoundingClientRect().right;
        const parentRight = el.parentElement.getBoundingClientRect().right;
        const offset = parentRight - mdRight - 10;
        if (el.classList.contains('table')) {
            el.style.right = '2px';
        } else {
            el.style.right = `${offset}px`;
        }
    }
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
            >
                <div
                    className={clsx(styles.controls, models[0]?.showMenu && styles.active)}
                    onMouseLeave={() => {
                        models[0]?.setShowMenu(false);
                        setPromptDelete(false);
                    }}
                >
                    {models[0]?.showMenu && store.isMyView && (
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
                    )}
                    <i
                        onMouseEnter={() => models[0]?.setShowMenu(true)}
                        className={clsx('mdi', 'mdi-comment-text-outline', styles.icon)}
                    ></i>
                </div>
            </div>
            {models[0]?.open && (
                <div className={styles.comments}>
                    {models.map((m, idx) => {
                        return (
                            <div
                                key={idx}
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
