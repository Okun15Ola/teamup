
import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.headingText}>Contact Us</h1>

      <p className={styles.subheadingText}>
        We're just a message away. Let us know how we can assist you.
      </p>

      <div className={styles.formCard}>
        <form className={styles.form}>
        
          <div className={styles.inputGroup}>
            <label>Name <span>*</span></label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className={styles.inputGroup}>
            <label>Email <span>*</span></label>
            <input type="email" placeholder="Enter your email address" />
          </div>

          <div className={styles.inputGroup}>
            <label>Your Message <span>*</span></label>
            <textarea placeholder="Enter your message"></textarea>
          </div>

          <button className={styles.sendBtn}>Send Message</button>
        </form>

        <div className={styles.contactDetails}>
          <p>📞 +234 9023931025</p>
          <p>📧 okunolaolubanjo@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
