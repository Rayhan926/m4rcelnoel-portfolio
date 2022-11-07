import Footer from "@components/Footer";
import React from "react";
import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <FaqSection />
      <Footer />
    </>
  );
};

export default Home;
