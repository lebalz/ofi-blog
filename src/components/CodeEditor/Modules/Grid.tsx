const src = require('./grid.raw.py');
import Module from './Module';
import * as React from 'react';


const GridModule = () => {
    return (<Module name='grid' scriptSource={src} />);
}

export default GridModule;