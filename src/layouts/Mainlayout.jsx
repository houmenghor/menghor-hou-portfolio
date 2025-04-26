import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLoading } from '../components/LoadingProvider';
import HeroSection from '../pages/HeroSection';
import AboutSection from '../pages/AboutSection';
import SkillsSection from '../pages/SkillsSection';
import EducationSection from '../pages/EducationSection';
import ProjectsSection from '../pages/ProjectsSection';
import ContactSection from '../pages/ContactSection';

const Mainlayout = () => {
  const { isLoading } = useLoading(); // 🆕 get loading state

  return (
    <main>
      <Header />

      {/* Show rest of page only if not loading */}
      {!isLoading && (
        <>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </main>
  );
};

export default Mainlayout;
