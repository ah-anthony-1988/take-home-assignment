import React from "react";
import classnames from "classnames";
import styles from "./controlled-input.module.scss";

type Props = {
  direction?: "row" | "column";
  htmlFor: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  type: "text" | "number";
  value: string | number;
};

export const ControlledInput: React.FC<Props> = ({
  direction = "row",
  htmlFor,
  label,
  min,
  max,
  onChange,
  type,
  value,
}) => (
  <div className={classnames(styles.root, styles[direction])}>
    <label className={styles.label} htmlFor={htmlFor}>
      {label}:
    </label>
    <input
      type={type}
      id={htmlFor}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
    />
  </div>
);
