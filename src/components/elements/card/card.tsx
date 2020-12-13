import * as React from "react";
import styles from "./card.module.scss";

export const Card: React.FC = ({ children }) => (
  <div className={styles.root}>{children}</div>
);
