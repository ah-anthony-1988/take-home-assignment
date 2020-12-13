import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <div className={styles.content}>
        <Link to="/" className={styles.logo}>
          <h1>Amazing Cars</h1>
        </Link>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link to="/">Find car</Link>
          </li>
          <li className={styles.link}>
            <Link to="/add-car">Add Car</Link>
          </li>
          <li className={styles.link}>
            <Link to="/sign-up">Sign up</Link>
          </li>
          <li className={styles.link}>
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
