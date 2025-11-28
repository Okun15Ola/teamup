import AboutUs from "@/components/AboutUs/AboutUs";
import HeroSection from "@/components/hero/HeroSection";
import OurServices from "@/components/OurServices/OurServices";
import StudentStories from "@/components/StudentStories/StudentStories";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <OurServices />
      <AboutUs />
      <StudentStories />
    </div>
  );
}
