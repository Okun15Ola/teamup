"use client";

import React, { useState } from "react";
import styles from "./FormBox.module.css";
import { FiCalendar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FormBox() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("NG(+234)");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [deadline, setDeadline] = useState("");
  const [details, setDetails] = useState("");

  const whatsappNumber = "2348140255294"; // No "+" sign

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
Hello, I want help with my assignment:

📧 Email: ${email}
📞 Phone: ${code} ${phone}
📘 Subject: ${subject}
⏰ Deadline: ${deadline}
📝 Details: ${details}
    `;

    const url =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank");
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.title}>Get instant help from Writing experts</h3>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className={styles.row}>
          <select
            className={styles.select}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          >
            <option>NG(+234)</option>
            <option>US(+1)</option>
            <option>UK(+44)</option>
            <option>GH(+233)</option>
          </select>

          <input
            type="text"
            className={styles.input}
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className={styles.row}>
          <input
            type="text"
            placeholder="Subject / Course Code"
            className={styles.input}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          
        </div>

        <textarea
          className={styles.textarea}
          placeholder="Describe your project/assignment..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />

        <button type="submit" className={styles.submitBtn}>
          <FaWhatsapp size={18} style={{ marginRight: "6px" }} />
          Do My Assignment
        </button>
      </form>
    </div>
  );
}
