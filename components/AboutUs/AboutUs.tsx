import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <section id='about' className={styles.container}>
      <div className={styles.innerContainer}>

        <div className={styles.leftContent}>
          <h1 className={styles.headingText}>About Us</h1>

          <p className={styles.description}>
            We are a team of dedicated academic support specialists passionate about 
            helping students improve their learning experience. Our mission is to make 
            academic tasks easier, clearer, and more effective by providing reliable 
            assistance whenever students need it.

            <br /><br />

            We believe that collaboration is the key to academic success. That’s why 
            we connect students with qualified experts who support them in completing 
            their projects, assignments, presentations, and research work with accuracy 
            and confidence.
          </p>

          <h2 className={styles.subHeading}>What we achieved so far</h2>

          <ul className={styles.achievementList}>
            <li><span>✓</span> Helped 200+ students with their works</li>
            <li><span>✓</span> Connected with 100+ verified experts</li>
            <li><span>✓</span> Delivered 500+ successful projects</li>
          </ul>

          <SocialLinks />
        </div>

        <div className={styles.imageGrid}>

          <div className={styles.leftCol}>
            <div className={styles.bigImage}>
              <img src="/images/career.jpg" alt="Team discussion" />
            </div>

            <div className={styles.mediumImage}>
              <img src="/images/assignment.jpg" alt="Student studying" />
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.tallImage}>
              <img src="/images/thesis.jpg" alt="Online learning" />
            </div>

            <div className={styles.smallImages}>
              <div>
                <img src="/images/tution.webp" alt="Tutoring session" />
              </div>
              <div>
                <img src="/images/assignment.jpg" alt="Student working" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
