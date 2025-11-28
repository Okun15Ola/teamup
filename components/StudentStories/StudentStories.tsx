import React from 'react'
import styles from './StudentStories.module.css'

const testimonials = [
  {
    name: "Olivia Watson",
    level: "CS • 4th year student",
    text: "Fast, reliable, and exactly what I needed. The quality exceeded my expectation! I'll definitely use this service again.",
    img: "./images/womg.jpg"
  },
  {
    name: "Olivia Watson",
    level: "CS • 4th year student",
    text: "Fast, reliable, and exactly what I needed. The quality exceeded my expectation! I'll definitely use this service again.",
    img: "/images/student1.jpg"
  },
  {
    name: "Olivia Watson",
    level: "CS • 4th year student",
    text: "Fast, reliable, and exactly what I needed. The quality exceeded my expectation! I'll definitely use this service again.",
    img: "/images/student1.jpg"
  },
  {
    name: "Olivia Watson",
    level: "CS • 4th year student",
    text: "Fast, reliable, and exactly what I needed. The quality exceeded my expectation! I'll definitely use this service again.",
    img: "/images/student1.jpg"
  }
]

const StudentStories = () => {
  return (
    <section className={styles.container}>

      <div className={styles.header}>
        <h1 className={styles.headingText}>Student Stories</h1>
        <p className={styles.subheadingText}>
          We received 100+ positive student ratings from students studying in different countries.
        </p>
      </div>

      <div className={styles.blueBlock}>
        <div className={styles.testimonialWrapper}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                {/* <img src={t.img} alt="student" /> */}
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.level}</span>
                </div>
              </div>

              <div className={styles.stars}>★★★★★☆</div>
              <p className={styles.cardText}>{t.text}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default StudentStories
