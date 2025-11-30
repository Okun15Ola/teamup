'use client';
import React, { useState } from "react";
import styles from "./Faq.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Is your paper writing service legitimate?",
    answer:
      "Yes. We provide academic assistance to help students understand and complete their work. All materials are original and tailored to your instructions.",
  },
  {
    question: "Who are your paper writers?",
    answer:
      "Our writers are trained academic assistants with experience across a wide range of subjects including engineering, science, business, and humanities.",
  },
  {
    question: "Is my data safe when you write my paper for me?",
    answer:
      "Yes. All personal details, files, and project information are kept completely private and protected.",
  },
  {
    question: "Can I communicate with my paper writer?",
    answer:
      "Absolutely. You can communicate with your writer at any point during the project.",
  },
  {
    question: "Do you guarantee no plagiarism in the papers?",
    answer:
      "Yes — all papers are written from scratch and checked with plagiarism detection tools.",
  },
  {
    question: "What if I’m not satisfied with the paper help?",
    answer:
      "We offer revisions to ensure the final result meets your expectations.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.container}>
      <h1 className={styles.headingText}>Frequently Asked Questions</h1>

      <p className={styles.subheadingText}>
        Everything you need to know about our products and services.
      </p>

      <div className={styles.faqBox}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={`${styles.question} ${
                openIndex === index ? styles.activeQuestion : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>

              <span className={styles.icon}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`${styles.answerWrapper} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <p className={styles.answer}>{item.answer}</p>
            </div>

            {index !== faqData.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
