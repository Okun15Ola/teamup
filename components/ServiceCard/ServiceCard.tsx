import React from "react";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
    image: string;
    title: string;
    subtitle: string;
    gradient: "blue" | "teal" | "green" | "purple";
}

const ServiceCard = ({ image, title, subtitle, gradient }: ServiceCardProps) => {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.image} alt={title} />

      <div className={`${styles.overlay} ${styles[gradient]}`}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
