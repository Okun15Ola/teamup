import React from "react";
import styles from "./Footer.module.css";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.logo}>Team-Up</h2>

          <div className={styles.policyLinks}>
            <a href="#">Privacy policy</a>
            <a href="#">Terms of use</a>
          </div>
        </div>
        <nav className={styles.navLinks}>
          <a href="#services">Services</a>
          <a href="#about">About us</a>
          <a href="#testimonials">Testimonial</a>
          <a href="#team">Our team</a>
          <a href="#order">How to order</a>
          <a href="#contact">Contact us</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className={styles.right}>
          <SocialLinks />

          <p className={styles.copy}>© 2025, YSD. All rights reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
