import React from 'react'
import styles from './Faq.module.css';

const Faq = () => {
  return (
    <section className={styles.container}>
        <h1 className={styles.headingText}>Frequently Asked Questions</h1>

      <p className={styles.subheadingText}>
       Everything you need to know about our services and how we assist students.
       
      </p>
    </section>
  )
}

export default Faq