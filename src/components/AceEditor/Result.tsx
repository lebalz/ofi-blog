import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { ScriptContext } from '.';
import styles from './styles.module.scss';

const Result = observer(() => {
  const pyScript = React.useContext(ScriptContext);
  return (
    <div className={styles.brythonOut}>
      {
        pyScript.logMessages.length > 0 && (
          <pre style={{overflowX: 'auto'}}>
            {pyScript.logMessages.map((msg, idx) => {
              return (
                <code
                  key={idx}
                  style={{
                    color: msg.type === 'stderr' ? 'var(--ifm-color-danger-darker)' : undefined
                  }}
                >
                  {msg.output}
                </code>)
            })}
          </pre>
        )
      }
    </div>
  )
});

export default Result;