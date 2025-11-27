import React from "react";
import styles from "./FormBox.module.css";
import { FiCalendar, FiUpload } from "react-icons/fi";

export default function FormBox() {
  return (
    <div className={styles.formContainer}>
      <h3 className={styles.title}>Get instant help from Writing experts</h3>

      <form className={styles.form}>
        <input type="email" placeholder="Enter email" className={styles.input} />

        <div className={styles.row}>
          <select className={styles.select}>
            <option>NG(+234)</option>
            <option>US(+1)</option>
            <option>UK(+44)</option>
            <option>GH(+233)</option>
          </select>

          <input
            type="text"
            className={styles.input}
            placeholder="Enter phone number"
          />
        </div>

        <div className={styles.row}>
          <input
            type="text"
            placeholder="Subject/Course Code"
            className={styles.input}
          />

          <div className={styles.deadlineBox}>
            <FiCalendar className={styles.icon} />
            <select className={styles.deadlineSelect}>
              <option>10:00 PM</option>
              <option>11:00 PM</option>
              <option>12:00 AM</option>
            </select>
          </div>
        </div>

        <textarea
          className={styles.textarea}
          placeholder="Describe your project/assignment, or attach document (.pdf/.doc file)"
        />

        <label className={styles.attachLabel}>
          <FiUpload className={styles.attachIcon} /> Attach file
          <input type="file" className={styles.hiddenFile} />
        </label>

        <button type="submit" className={styles.submitBtn}>
          Do My Assignment
        </button>
      </form>
    </div>
  );
}
