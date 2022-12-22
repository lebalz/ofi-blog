const gridSrc = require('./grid.raw.py');

import * as React from 'react';


const GridModule = () => {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        if (!document.getElementById('grid')) {
            setShow(true);
        }
    }, [])
    if (!show) {
        return null;
    }
    return (
        <script
            id="grid"
            type="text/python"
        >
            {gridSrc}
        </script>
    )
}

export default GridModule;