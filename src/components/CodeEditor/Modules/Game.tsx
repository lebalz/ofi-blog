const src = require('./game.raw.py');
import Module from './Module';
import * as React from 'react';


const GameModule = () => {
    return (<Module name='game' scriptSource={src} />);
}

export default GameModule;