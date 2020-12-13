import React from "react";
import styles from "./page-content.module.scss";

export const PageContent: React.FC = ({ children }) => (
  <main className={styles.root}>
    <div className={styles.content}>{children}</div>
  </main>
);
