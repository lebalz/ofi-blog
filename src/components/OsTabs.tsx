import React from 'react';
import Tabs from '@theme/Tabs';

export default class OsTabs extends React.Component {
  render() {
    return (
      <Tabs
        groupId="operating-systems"
        defaultValue="win"
        values={[
          { label: 'Windows', value: 'win' },
          { label: 'macOS', value: 'mac' },
        ]
        }>
        {this.props.children as React.ReactElement[]}
      </Tabs>
    );
  }
}