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
        el.style.right = `${offset}px`;
    }
}

const Comment = observer((props: Props) => {
    const store = useStore('commentStore');
    const { sidebar_custom_props } = useFrontMatter();
    
    const ref = React.useRef<HTMLDivElement>(null);
    const model = store.find(sidebar_custom_props.id, props.type, props.nr);
    
    React.useEffect(() => {
        if (ref.current) {
            reposition(ref.current);
            const onResize = () => reposition(ref.current);
            window.addEventListener('resize', onResize);
            return () => window.removeEventListener('resize', onResize);
        }
    }, [ref])

    return (
        <div
            className={clsx(styles.comment,  model && styles.loaded)}
            ref={ref}
            onClick={() => {
                if (model) {
                    model.toggleOpen();
                } else {
                    store.openComment(sidebar_custom_props.id, props.type, props.nr);
                }
            }}
        >
            <div className={styles.commentRef}>
                <i className={clsx('mdi', 'mdi-comment-text-outline', styles.icon)}></i>
                {
                    model?.open && (
                        <div 
                            className={styles.quill}
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                            }}
                        >
                            <QuillEditor
                                model={model}
                                theme="bubble"
                                placeholder=''
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
});

export default Comment;
