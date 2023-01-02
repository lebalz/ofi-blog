const src = require('./config.raw.py');
import Module from './Module';
import * as React from 'react';


const GameloopModule = () => {
    return (<Module name='config' scriptSource={src} />);
}

export default GameloopModule;