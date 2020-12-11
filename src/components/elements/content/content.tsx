import React from "react";
import styles from "./content.module.scss";

export const Content: React.FC = ({ children }) => (
  <main className={styles.root}>{children}</main>
);
