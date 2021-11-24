import * as React from 'react';
import Typed from 'typed.js';
import styles from '@docusaurus/theme-classic/lib/theme/Heading/styles.module.css'
import clsx from 'clsx'

interface Props {
    type: keyof React.ReactHTML;
    strings: string[];
}

class TypedText extends React.Component<Props> {
    typed: Typed;
    typedRef = React.createRef<HTMLElement>();
    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
          strings: strings,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.typedRef.current, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {
        const span = React.createElement('span', {ref: this.typedRef, style: {whiteSpace: 'pre'}, key: '1'})
        const cls = this.props.type === 'h1' ? clsx('type-wrap', styles.h1Heading) : 'type-wrap';
        const TypedElem = React.createElement(this.props.type, {className: cls, children: [span]})
      return (
        <div className="wrap">
            {TypedElem}
        </div>
      );
    }
  }
export default TypedText;