import React from "react";
import styles from "./sub-menu.module.scss";

export const SubMenu: React.FC = ({ children }) => (
  <div className={styles.root}>
    <div className={styles.content}>{children}</div>
  </div>
);
