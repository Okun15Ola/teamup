import React from 'react';
import styles from './TopSchools.module.css';

const universities = [
  { name: "Lautech University", img: "./images/career.jpg" },
  { name: "Univerity of Ibadan", img: "./images/assignment.jpg" },
  { name: "School Of Nursing UCH", img: "./images/thesis.jpg" },
  { name: "Leadcity University", img: "/images/tution.webp" },
  { name: "School of Midwifery", img: "./images/thesis.jpg" },
];

const TopSchools = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.headingText}>Trusted by Top University Students</h1>

      <p className={styles.subheadingText}>
        We have earned the trust of students from different corners of the world.
        <br />
        Over <strong>100,000+</strong> students from top universities have benefited from our services.
      </p>

      <div className={styles.cardWrapper}>
        {universities.map((u, i) => (
          <div className={styles.card} key={i}>
            <img src={u.img} className={styles.cardImg} alt={u.name} />
            <p className={styles.cardName}>{u.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSchools;
