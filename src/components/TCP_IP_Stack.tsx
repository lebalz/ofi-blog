import * as React from 'react';
import clsx from 'clsx';
import styles from './TCP_IP_Stack.module.scss';

const Stack = () => {
  return (
    <div>
      <div className={clsx(styles.level)}>
        <div className={clsx(styles.details, styles.data)}>
          <div>Anwendungsschicht</div>
        </div>
        <div className={clsx(styles.details)}>
          <div>Web, E-Mail</div>
        </div>
        <div className={clsx(styles.spacer)}></div>
        <div className={clsx(styles.highlight , styles.package , styles.data)}>Daten</div>
      </div>

      <div className={clsx(styles.level)}>
        <div className={clsx(styles.details , styles.tcp)}>
          <div>Transportschicht</div>
        </div>
        <div className={clsx(styles.details)}>
          <div>Über&shy;tragungs&shy;steuerungs&shy;protokoll &shy;(TCP)</div>
        </div>
        <div className={clsx(styles.spacer)}></div>
        <div className={clsx(styles.highlight , styles.package , styles.tcp)}>
          TCP+Port
          <div className={clsx(styles.package , styles.data)}>Daten</div>
        </div>
      </div>

      <div className={clsx(styles.level)}>
        <div className={clsx(styles.details , styles.ip)}>
          <div>Internetschicht</div>
        </div>
        <div className={clsx(styles.details)}>
          <div>Internet&shy;protokoll &shy;(IP)</div>
        </div>
        <div className={clsx(styles.spacer)}></div>
        <div className={clsx(styles.highlight , styles.package , styles.ip)}>
          IP-Adresse
          <div className={clsx(styles.package , styles.tcp)}>
            TCP+Port
            <div className={clsx(styles.package , styles.data)}>Daten</div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.level)}>
        <div className={clsx(styles.details , styles.mac)}>
          <div>Physikalische Schicht</div>
        </div>
        <div className={clsx(styles.details)}>
          <div>WLAN, Ethernet</div>
        </div>
        <div className={clsx(styles.spacer)}></div>
        <div className={clsx(styles.highlight , styles.package , styles.mac)}>
          MAC-Adresse
          <div className={clsx(styles.package , styles.ip)}>
            IP-Adresse
            <div className={clsx(styles.package , styles.tcp)}>
              TCP+Port
              <div className={clsx(styles.package , styles.data)}>Daten</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
