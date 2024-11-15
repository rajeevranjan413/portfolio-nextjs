"use client";
import { ContactSection } from "./ContactSection";

import Navbar from "../../Layouts/Navbar";
import { HeroSection } from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import Footer from "@/Layouts/Footer";

export default function HomePage() {
  return (
    <div className="bg-gray-100 text-gray-900">
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
  );
}
