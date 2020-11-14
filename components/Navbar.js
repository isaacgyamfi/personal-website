import React from 'react';
import styles from '../styles/Navigation.module.scss';

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>Meet me</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div className={styles.btngroup}>
          <button className={styles.primarybtn}>Study with me</button>
          <button className={styles.secondarybtn}>Download resume</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
