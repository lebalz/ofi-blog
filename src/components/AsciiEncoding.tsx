import * as React from "react";
import styles from "./AsciiEncoding.module.scss";

const arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const AsciiEncoding = () => {
  const [x, setX] = React.useState(-1);
  const [y, setY] = React.useState(-1);

  return (
    <table
      onMouseOut={() => {
        setX(-1);
        setY(-1);
      }}
      className={styles.asciiTable}
    >
      {arr16.map((_, i) => {
        return (
          <tr key={i}>
            {arr16.map((_, j) => {
              const p = i * 16 + j + 1;
              return (
                <td
                  key={p}
                  onMouseOver={() => {
                    setX(i);
                    setY(j);
                  }}
                >
                  {x === i && y === j ? p : String.fromCharCode(p)}
                </td>
              );
            })}
          </tr>
        );
      })}
    </table>
  );
};

export default AsciiEncoding;
