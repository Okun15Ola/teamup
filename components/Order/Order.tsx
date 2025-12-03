import React from 'react';
import styles from './Order.module.css';

const steps = [
  {
    id: 1,
    title: "Send your instructions on WhatsApp",
    text: "Click the button to message us on WhatsApp. Share your requirements and our team will guide you instantly.",
    btn: "Start Here",
    link: "https://wa.me/2348140255294?text=Hi%20I%20want%20to%20place%20an%20order"
  },
  {
    id: 2,
    title: "Confirm your order",
    text: "We'll review your instructions together on WhatsApp and share the price. Once confirmed, you can complete a secure payment.",
    btn: null
  },
  {
    id: 3,
    title: "Receive your completed paper",
    text: "Your expert-written paper will be delivered on time, ready for download and submission.",
    btn: null
  }
];


const Order = () => {
  return (
    <section id='order' className={styles.container}>
      
      <h1 className={styles.headingText}>How to Order</h1>
      <p className={styles.subheadingText}>
        Place your order in minutes with our simple 3-step process.
      </p>

      <img src="/images/path-dots.svg" className={styles.pathImg} alt="" />

      <div className={styles.cardWrapper}>
        {steps.map(step => (
          <div className={styles.card} key={step.id}>
            
            {/* <img src={step.icon} alt="" className={styles.icon} /> */}
            
            <h3 className={styles.cardTitle}>
              {step.id}. {step.title}
            </h3>

            <p className={styles.cardText}>{step.text}</p>

           {step.btn && (
            <a href={step.link} target="_blank" rel="noopener noreferrer">
              <button className={styles.startBtn}>{step.btn}</button>
            </a>
          )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Order;
