import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Navigation.module.scss';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleNav = () => setNavOpen(!navOpen);
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <h4>i</h4>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div onClick={handleNav}>
              <i
                style={{ color: '#000000', fontSize: 28 }}
                className={navOpen ? 'fas fa-times' : 'fas fa-bars'}
              ></i>
            </div>
          </div>
        </div>
        <div
          className={
            navOpen
              ? `${styles.navitems} ${styles.active}`
              : `${styles.navitems}`
          }
        >
          <div>
            <a href="#about">Meet me</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.btngroup}>
            <a href="#" className={`${styles.btn} ${styles.primarybtn}`}>
              Study with me
            </a>
            <a
              href="/files/CV-ISAAC-FRIMPONG-GYAMFI.pdf"
              className={`${styles.btn} ${styles.secondarybtn}`}
            >
              Download resume
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
