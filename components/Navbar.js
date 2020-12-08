import Image from 'next/image';
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
            <Image
              src="/assets/images/personal-image.jpeg"
              width={50}
              height={50}
              alt="me"
            />
            <h4>ISAAC GYAMFI</h4>
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
                style={{ color: '#ffffff', fontSize: 28 }}
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
          <ul>
            <li>Meet me</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <div className={styles.btngroup}>
            <a href="#" className={`${styles.btn} ${styles.primarybtn}`}>
              Study with me
            </a>
            <a
              href="/assets/files/resume.pdf"
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
