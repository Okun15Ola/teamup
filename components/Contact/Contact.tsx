"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    setLoading(false);

    if (res.ok) {
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.headingText}>Contact Us</h1>

      <p className={styles.subheadingText}>
        We're just a message away. Let us know how we can assist you.
      </p>

      <div className={styles.formCard}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>
              Name <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              Email <span>*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              Your Message <span>*</span>
            </label>
            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button className={styles.sendBtn} disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className={styles.contactDetails}>
          <p>📞 +234 8140255294</p>
          <p>📧 ogunyaleoluwabusayo@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
