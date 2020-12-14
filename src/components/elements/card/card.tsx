import * as React from "react";
import classnames from "classnames";
import styles from "./card.module.scss";

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => <div className={classnames(styles.root, className)}>{children}</div>;
