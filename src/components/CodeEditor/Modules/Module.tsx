import * as React from 'react';

interface Props {
    name: string;
    scriptSource: string;
}

const Module = (props: Props) => {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        if (!document.getElementById(props.name)) {
            setShow(true);
        }
    }, [])
    if (!show) {
        return null;
    }
    return (
        <script
            id={props.name}
            type="text/python"
        >
            {props.scriptSource}
        </script>
    )
}

export default Module;