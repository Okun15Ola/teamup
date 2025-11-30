import React from 'react'
import styles from './StudentStories.module.css'

const testimonials = [
  {
    name: "Veronica Ogunyale",
    level: "Registerd Nursing • 300 Level",
    text: "Team-Up helped me finish my research project on time, and the explanation was so clear that I understood every part of it. I’m definitely using this service again!",
    img: "./images/womg.jpg"
  },
  {
    name: "Nabi",
    level: "Computer Science • 200 Level",
    text: "Their assignment support is fast and very reliable. The PowerPoint they created for my presentation was clean, professional, and easy to defend.",
    img: "/images/student1.jpg"
  },
  {
    name: "Emmanuel Musa",
    level: "Nursing Science • Final Year",
    text: "They handled my SPSS data analysis perfectly. The interpretation was detailed and accurate. I got great feedback from my supervisor!",
    img: "/images/student2.jpg"
  },
  {
    name: "Success Nairo",
    level: "Public Health • 400 Level",
    text: "I love how stress-free the whole process was. I submitted my term paper without any issues, and the originality was top-notch. Highly recommended!",
    img: "/images/student3.jpg"
  }
];


const StudentStories = () => {
  return (
    <section id='testimonial' className={styles.container}>

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
