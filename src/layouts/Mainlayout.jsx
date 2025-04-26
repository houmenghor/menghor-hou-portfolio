import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import HeroSection from '../pages/HeroSection'
import AboutSection from '../pages/AboutSection'
import SkillsSection from '../pages/SkillsSection'
import EducationSection from '../pages/EducationSection'
import ProjectsSection from '../pages/ProjectsSection'
import ContactSection from '../pages/ContactSection'

const Mainlayout = () => {
  return (
    <main>
      <Header />
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <EducationSection/>
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default Mainlayout
