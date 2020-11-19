import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../styles/Navigation.module.scss';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
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
          <div>
            <button>close</button>
          </div>
        </div>
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
