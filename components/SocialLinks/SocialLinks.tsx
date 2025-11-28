import React from "react";
import styles from "./SocialLinks.module.css";

import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  const socials = [
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaXTwitter />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaYoutube />, url: "#" },
  ];

  return (
    <div className={styles.container}>
      {socials.map((item, i) => (
        <a key={i} href={item.url} className={styles.iconWrapper}>
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
