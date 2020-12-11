import React from "react";
import styles from "./page.module.scss";

export const Page: React.FC = ({ children }) => (
  <div className={styles.root}>{children}</div>
);
