import * as React from 'react';
import styles from './AsciiEncoding.module.scss';

const Encoding = [...Array(16)].map((_, i) => {
    return [...Array(16)].map((_, j) => {
        const p = (i)*16 + j + 1
        return {char: String.fromCharCode(p), code: p, x: i, y: j}
    })
})

const AsciiEncoding = () => {
  const [x, setX] = React.useState(-1);
  const [y, setY] = React.useState(-1);

  return (
    <table onMouseOut={() => {
      setX(-1);
      setY(-1);
    }}
      className={styles.asciiTable}
    >
      <tbody>
      {
        Encoding.map((row, i) => {
          return (
            <tr key={i}>
              {
                row.map((cell, j) => {
                  return (<td key={j} onMouseOver={() => {
                    setX(i);
                    setY(j);
                  }}>
                    {
                      (x===i && y===j) ? cell.code : cell.char
                    }
                  </td>);
                })
              }
            </tr>
          )
        })
      }
      </tbody>
    </table>
  );
};

export default AsciiEncoding;
