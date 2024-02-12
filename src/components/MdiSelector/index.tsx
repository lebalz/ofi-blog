import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import CopyBadge from '../VisualizationTools/ColorEncoding/CopyBadge';
import Icon from '@mdi/react';
import * as Mdi from '@mdi/js';
import _ from 'lodash';

export default function MdiSelector(): JSX.Element {
  const [showNr, setShowNr] = React.useState(300);
  const [icons, setIcons] = React.useState([]);
  const [filter, setFilter] = React.useState('');
  const [perfectMatch, setPerfectMatch] = React.useState(true);

  React.useEffect(() => {
    setShowNr(300)
    if (filter.trim() === '') {
      setIcons(Object.keys(Mdi));
      return;
    }
    const trm = new RegExp(`${filter}`,'i');
    const icos = Object.keys(Mdi).filter((ico) => trm.test(ico));
    // console.log(icos.length);
    setIcons(icos);
  }, [filter, perfectMatch]);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <input
          id="perfectMatch"
          type="checkbox"
          checked={perfectMatch}
          onChange={(e) => setPerfectMatch(!perfectMatch)}
        />
        <label htmlFor="perfectMatch">Tags durchsuchen?</label>
        <span style={{ flexGrow: 1 }}></span>
        <span className="badge badge--primary">{icons.length}</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5em' }}>
        {icons.slice(0, showNr).map((ico, idx) => {
          const dashed = _.startCase(ico).split(' ').slice(1).join('-')
          return (
            <div
              key={idx}
              className={clsx(styles.icon)}
            >
              <Icon path={Mdi[ico]} size={2} />
              <CopyBadge value={dashed.replace('-', ' ')} />
              <CopyBadge label={`mdi${dashed.charAt(0)}...`} value={ico} />
              <CopyBadge label={`:mdi[${dashed.charAt(0)}...]`} value={`:mdi[${dashed}]`.toLowerCase()} />
            </div>
          );
        })}
      </div>
      <div>
        <span
          className={clsx('badge', 'badge--secondary')}
        >
          {showNr}
        </span>
        {' '}
        <span 
          className={clsx('badge', 'badge--primary')}
          onClick={() => {
            setShowNr(showNr + 100)
          }}
          style={{cursor: 'pointer'}}
        >
          Show 100 More
        </span>
      </div>
    </div>
  );
}
