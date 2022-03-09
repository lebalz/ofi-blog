import React from 'react';
import Tabs from '@theme/Tabs';

export default class TRTabs extends React.Component {
  render() {
    return (
      <Tabs
        groupId="taschenrechner"
        defaultValue="ti30"
        values={[
          { label: 'TI-30 eco RS', value: 'ti30' },
          { label: 'TI-30X IIS', value: 'ti30X' },
        ]
        }>
        {this.props.children as React.ReactElement[]}
      </Tabs>
    );
  }
}