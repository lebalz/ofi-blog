import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import useFrontMatter from '@theme/useFrontMatter';
import { useStore } from '@site/src/stores/hooks';
import { LocatorType } from '@site/src/api/comment';
import { observer } from 'mobx-react-lite';
import QuillEditor from '../shared/QuillEditor';
import { action } from 'mobx';

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
        el.style.right = `${offset}px`;
    }
};

const Comment = observer((props: Props) => {
    const store = useStore('commentStore');
    const { sidebar_custom_props } = useFrontMatter();

    const ref = React.useRef<HTMLDivElement>(null);
    const [promptDelete, setPromptDelete] = React.useState(false);
    const model = store.find(sidebar_custom_props.id, props.type, props.nr);

    React.useEffect(() => {
        if (ref.current) {
            reposition(ref.current);
            const onResize = () => reposition(ref.current);
            window.addEventListener('resize', onResize);
            return () => window.removeEventListener('resize', onResize);
        }
    }, [ref]);

    return (
        <>
            <div
                className={clsx(styles.commentIcon, model && styles.loaded, model?.open && styles.open)}
                ref={ref}
                onClick={() => {
                    if (model) {
                        model.toggleOpen();
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
                    className={clsx(styles.controls, model?.showMenu && styles.active)}
                    onMouseLeave={() => {
                        model?.setShowMenu(false);
                        setPromptDelete(false);
                    }}
                >
                    {model?.showMenu && (
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
                                        model?.delete();
                                    }}
                                >
                                    Ja, Löschen!
                                </div>
                            )}
                        </span>
                    )}
                    <i
                        onMouseEnter={() => model?.setShowMenu(true)}
                        className={clsx('mdi', 'mdi-comment-text-outline', styles.icon)}
                    ></i>
                </div>
            </div>
            {model?.open && (
                <div
                    className={clsx(styles.comment)}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                >
                    <QuillEditor model={model} theme={'bubble'} placeholder="💬 ..." />
                </div>
            )}
        </>
    );
});

export default Comment;
