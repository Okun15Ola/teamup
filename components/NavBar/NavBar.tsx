"use client";

import React, { useState } from "react";
import styles from "./NavBar.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth" });

  // close menu on mobile
  setOpen(false);
};


  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Team-Up</div>

        {/* Hamburger Icon */}
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        {/* Menu */}
        <div className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
          <ul className={styles.navLinks}>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => scrollToSection("about")}>About Us</li>
            <li onClick={() => scrollToSection("testimonial")}>Testimonial</li>
            <li onClick={() => scrollToSection("order")}>How to Order</li>
            <li onClick={() => scrollToSection("contact")}>Contact Us</li>
            <li onClick={() => scrollToSection("faq")}>FAQ</li>
          </ul>

          <div className={styles.navButtons}>
            <PrimaryButton text="Sign In" type="secondary" />
            <PrimaryButton text="Order now" type="primary" />
          </div>
        </div>
      </nav>

      {/* 🔥 Mobile Background Overlay */}
      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
};

export default NavBar;
