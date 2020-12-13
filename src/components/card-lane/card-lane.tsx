import React from "react";
import styles from "./card-lane.module.scss";

export const CardLane: React.FC = ({ children }) => (
  <div className={styles.root}>{children}</div>
);
