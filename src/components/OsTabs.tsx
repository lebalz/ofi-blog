import React from 'react';
import Tabs from '@theme/Tabs';

type OsType = 'win10' | 'win11' | 'win' | 'mac';
interface Props {
  os?: (OsType)[];
  children: React.ReactElement[];
}

const OS_MAP: {[key in OsType]: string} = {
  mac: 'macOS',
  win: 'Windows',
  win10: 'Windows 10',
  win11: 'Windows 11',
}

const getValues = (os: OsType[]) => {
  return os.map((t) => ({label: OS_MAP[t], value: t}))
} 

const OsTabs = (props: Props) => {
    return (
        <Tabs
            groupId="operating-systems"
            defaultValue={props.os ? props.os[0] : 'win11'}
            values={getValues(props.os || ['win11', 'win10', 'mac'])}
        >
            {props.children}
        </Tabs>
    );
};

export default OsTabs;