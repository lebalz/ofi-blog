import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import rawIcons from './mdi-icons.json';
import CopyBadge from '../VisualizationTools/ColorEncoding/CopyBadge';

export default function MdiSelector(): JSX.Element {
  const [showNr, setShowNr] = React.useState(300);
  const [icons, setIcons] = React.useState([]);
  const [filter, setFilter] = React.useState('');
  const [perfectMatch, setPerfectMatch] = React.useState(true);

  React.useEffect(() => {
    setShowNr(300)
    if (filter.trim() === '') {
      setIcons(rawIcons);
      return;
    }
    const trm = filter.trim().toLowerCase().replace(/-/g, '');
    const icos = rawIcons.filter((ico) => {
      return (
        ico.name.replace(/-/g, '').includes(trm) ||
        (!perfectMatch && ico.tags.join(' ').toLowerCase().includes(trm))
      );
    });
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
          return (
            <div
              key={idx}
              className={clsx(styles.icon)}
            >
              <div style={{ fontSize: '3rem' }} className={`mdi-${ico.name} mdi`}></div>
              <CopyBadge value={ico.name} />
              <CopyBadge label="mdi-" value={`mdi-${ico.name}`} />
              <CopyBadge label=":mdi:" value={`:mdi-${ico.name}:`} />
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
