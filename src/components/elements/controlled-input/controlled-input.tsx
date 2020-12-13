import React from "react";
import styles from "./controlled-input.module.scss";

type Props = {
  htmlFor: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  type: "text" | "number";
  value: string | number;
};

export const ControlledInput: React.FC<Props> = ({
  htmlFor,
  label,
  min,
  max,
  onChange,
  type,
  value,
}) => (
  <div className={styles.root}>
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
