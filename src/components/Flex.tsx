import React from "react";

export default class Flex extends React.Component {
  render() {
    return (
      <div 
      style={{
          display: 'flex',
          alignItems: 'stretch',
          alignContent: 'space-between'
      }}>
          {this.props.children}
      </div>
    );
  }
}
