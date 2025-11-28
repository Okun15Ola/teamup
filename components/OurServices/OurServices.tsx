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
    title: "Tuition",
    subtitle: "Personalized Learning Support",
    gradient: "blue",
  },
  {
    image: "./images/thesis.jpg",
    title: "Thesis Report Writing",
    subtitle: "Thesis & Dissertation Assistance",
    gradient: "teal",
  },
  {
    image: "./images/career.jpg",
    title: "Career Counseling",
    subtitle: "Career Pathway Guidance",
    gradient: "green",
  },
  {
    image: "./images/assignment.jpg",
    title: "Assignment Completion",
    subtitle: "Effortless Assignment Solutions",
    gradient: "purple",
  }
];

const OurServices = () => {
  return (
    <section>
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