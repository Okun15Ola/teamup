import React from 'react';
import styles from './Order.module.css';

const steps = [
  {
    id: 1,
    title: "Share your instructions",
    text: "Fill out the order form and give clear instructions for your paper writer.",
    btn: "Start Here",
    icon: "/images/icon-mail.png"
  },
  {
    id: 2,
    title: "Confirm order details",
    text: "Review all order details and pay for paper samples safely and easily.",
    btn: null,
    icon: "/images/icon-calculator.png"
  },
  {
    id: 3,
    title: "Get your paper",
    text: "Download professionally written papers from expert writers, ready to submit.",
    btn: null,
    icon: "/images/icon-docs.png"
  }
];

const Order = () => {
  return (
    <section className={styles.container}>
      
      <h1 className={styles.headingText}>How to Order</h1>
      <p className={styles.subheadingText}>
        Place your order in minutes with our simple 3-step process.
      </p>

      <img src="/images/path-dots.svg" className={styles.pathImg} alt="" />

      <div className={styles.cardWrapper}>
        {steps.map(step => (
          <div className={styles.card} key={step.id}>
            
            <img src={step.icon} alt="" className={styles.icon} />
            
            <h3 className={styles.cardTitle}>
              {step.id}. {step.title}
            </h3>

            <p className={styles.cardText}>{step.text}</p>

            {step.btn && (
              <button className={styles.startBtn}>{step.btn}</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Order;
