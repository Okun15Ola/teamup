'use client';

import React, { useState } from 'react';
import styles from './NavBar.module.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        
        <div className={styles.logo}>Team-Up</div>

        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        <div className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
          <ul className={styles.navLinks}>
            <li>Services</li>
            <li>About Us</li>
            <li>Testimonial</li>
            <li>Our Team</li>
            <li>How to Order</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>

          <div className={styles.navButtons}>
            <PrimaryButton text='Sign In' type='secondary' />
            <PrimaryButton text='Order now' type='primary' />
          </div>
        </div>

      </nav>
    </header>
  );
};

export default NavBar;
