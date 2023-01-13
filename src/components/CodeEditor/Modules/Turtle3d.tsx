const src = require('./turtle3d-v2.raw.py');
import Module from './Module';
import * as React from 'react';


const Turtle3dModule = () => {
    return (<Module name='turtle3d' scriptSource={src} />);
}

export default Turtle3dModule;