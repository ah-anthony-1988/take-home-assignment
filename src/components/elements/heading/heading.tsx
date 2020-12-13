import React from "react";
import styles from "./heading.module.scss";

export const Heading: React.FC = ({ children }) => (
  <h2 className={styles.root}>{children}</h2>
);
