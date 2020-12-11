import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>logo</div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={styles.link}>
          <Link to="/sign-up">Sign up</Link>
        </li>
        <li className={styles.link}>
          <Link to="/login">Log in</Link>
        </li>
      </ul>
    </header>
  );
};
