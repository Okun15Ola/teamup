import AboutUs from "@/components/AboutUs/AboutUs";
import HeroSection from "@/components/hero/HeroSection";
import OurServices from "@/components/OurServices/OurServices";
import StudentStories from "@/components/StudentStories/StudentStories";
import TopSchools from "@/components/TopSchools/TopSchools";
import Image from "next/image";
import Order from "@/components/Order/Order";
import Faq from "@/components/FAQ/Faq";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <div >
      <HeroSection />
      <OurServices />
      <AboutUs />
      <StudentStories />
      <Order />
      <TopSchools />
      <Faq />
      <Contact />

    </div>
  );
}
