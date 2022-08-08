import React from 'react';
import Tabs from '@theme/Tabs';

export default class OsTabs extends React.Component {
  render() {
    return (
      <Tabs
        groupId="operating-systems"
        defaultValue="win10"
        values={[
          { label: 'Windows 11', value: 'win11' },
          { label: 'Windows 10', value: 'win10' },
          { label: 'macOS', value: 'mac' },
        ]
        }>
        {this.props.children as React.ReactElement[]}
      </Tabs>
    );
  }
}