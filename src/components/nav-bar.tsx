"use client";

import * as React from 'react';
import styles from '../styles/nav-bar.module.css';

interface Props {
  // Add props if needed
}

const NavBar: React.FC<Props> = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);


  return (
    <nav className={styles.NavBar}>
      <div className={styles.TopBar} />
      <ul className={styles.LinkList}>
        <li className={styles.LinkItem}>
          <a href="#" className={`${styles.Link} ${styles.HomeLink}`}>
            Home
          </a>
        </li>
        <li className={styles.LinkItem}>
          <a href="#" className={styles.Link}>
            Events
          </a>
        </li>
        <li className={styles.LinkItem}>
          <a href="#" className={styles.Link}>
            Mentors
          </a>
        </li>
        <li className={styles.LinkItem}>
          <a href="#" className={styles.Link}>
            Pages
          </a>
        </li>
        <li className={styles.LinkItem}>
          <a href="#" className={styles.Link}>
            About
          </a>
        </li>
        <li className={styles.LinkItem}>
          {!isLoggedIn ? (
            <React.Fragment>
              <a href="/signup" className={styles.LinkSignUp}>
                Sign up
              </a>
              <button className={styles.LoginButton}>
                Login
              </button>
            </React.Fragment>
          ) : (
            <div className={styles.LoggedInContainer}>
              <button className={styles.BellButton}>
                <i className="fas fa-bell" />
              </button>
              <div className={styles.UserIconContainer}>
                <div className={styles.UserIcon}>
                  <i className="fas fa-user" />
                </div>
                <div className={styles.DropDownMenu}>
                  <button className={styles.DropDownButton}>
                    <i className="fas fa-caret-down" />
                  </button>
                  <ul className={styles.DropDownList}>
                    <li>
                      <a href="#" className={styles.DropDownLink}>
                        Edit profile
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.DropDownLink}>
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;