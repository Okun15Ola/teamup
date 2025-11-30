import React from 'react'
import styles from './OurServices.module.css'
import ServiceCard from '../ServiceCard/ServiceCard'

type Gradient = "blue" | "teal" | "green" | "purple";

const services: {
  image: string;
  title: string;
  subtitle: string;
  gradient: Gradient;
}[] = [
  {
    image: "./images/tution.webp",
    title: "Research Projects",
    subtitle: "Comprehensive guidance for detailed academic research",
    gradient: "blue",
  },
  {
    image: "./images/thesis.jpg",
    title: "Term Papers",
    subtitle: "High-quality, well-structured term paper writing support",
    gradient: "teal",
  },
  {
    image: "./images/career.jpg",
    title: "Data Analysis / SPSS",
    subtitle: "Expert statistical analysis for academic research",
    gradient: "green",
  },
  {
    image: "./images/assignment.jpg",
    title: "Assignments / PowerPoint",
    subtitle: "Clean, clear, and professionally crafted presentations & tasks",
    gradient: "purple",
  }
];

const OurServices = () => {
  return (
    <section id='services'>
        <div className={styles.container}>
            <h1 className={styles.headingText}>Our Services</h1>
            <p className={styles.subheadingText}>Explore our wide range of services tailored to your unique needs</p>
            <div className={styles.cardGrid}>
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
            </div>
        </div>
    </section>
  )
}

export default OurServices