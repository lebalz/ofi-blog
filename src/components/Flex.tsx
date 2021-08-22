import React from "react";

interface Props {
  display?: string;
  alignItems?: string;
  alignContent?: string;
  justifyContent?: string;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}
export default class Flex extends React.Component<Props> {
  render() {
    return (
      <div 
      style={{
          display: this.props.display || 'flex',
          alignItems: this.props.alignItems || 'stretch',
          alignContent: this.props.alignContent || 'space-between',
          justifyContent: this.props.justifyContent || 'space-between',
          flexWrap: this.props.flexWrap || 'wrap',
          flexDirection: this.props.flexDirection || 'row'
      }}>
          {this.props.children}
      </div>
    );
  }
}
