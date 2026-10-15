"use client";
import { MotionConfig } from "framer-motion";
import { ContactSection } from "./ContactSection";

import Navbar from "../../Layouts/Navbar";
import { HeroSection } from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import Footer from "@/Layouts/Footer";

export default function HomePage() {
  return (
    // Respect the OS "reduce motion" setting for all framer-motion animations
    <MotionConfig reducedMotion="user">
      <div className="text-gray-100">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer Section */}
        <Footer />
      </div>
    </MotionConfig>
  );
}
