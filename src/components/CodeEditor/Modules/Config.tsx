const configSrc = require('./config.raw.py');
import * as React from 'react';


const ConfigModule = () => {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        if (!document.getElementById('config')) {
            setShow(true);
        }
    }, [])
    if (!show) {
        return null;
    }
    return (
        <script
            id="config"
            type="text/python"
        >
            {configSrc}
        </script>
    )
}

export default ConfigModule;