import * as React from "react";
import styles from "./Answer.module.scss";
const OPTIONS_REGEX = /--(?<klass>\w+)$/;

const getDataAttr = (value: string) => {
  if (OPTIONS_REGEX.test(value)) {
    return value.match(OPTIONS_REGEX).groups!.klass;
  }
  return undefined;
};

const Option = ({ value }) => {
  let val = value;
  let klass: string | undefined = undefined;
  if (OPTIONS_REGEX.test(value)) {
    const data = getDataAttr(value);
    klass = styles[data];
    val = `${value.replace(OPTIONS_REGEX, "")}`;
  }
  return (
    <option value={value} className={klass}>
      {val}
    </option>
  );
};

export default Option;
