import React from 'react';
import styles from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <header className={styles.header}>
      <NavLink
        to="/"
        className={styles.homeLink}
      >
        PHONEBOOK
      </NavLink>
      <ul className={styles.listLink}>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </header>
  );
}