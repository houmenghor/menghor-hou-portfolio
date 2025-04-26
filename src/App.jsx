import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutSection from './pages/AboutSection'
import HeroSection from './pages/HeroSection'
import Mainlayout from './layouts/Mainlayout'
import SkillsSection from './pages/SkillsSection'
import EducationSection from './pages/EducationSection'
import ProjectsSection from './pages/ProjectsSection'
import ContactSection from './pages/ContactSection'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Mainlayout/>}>
        {/* <Route index element={<HeroSection/>} /> */}
        {/* <Route path='/about' element={<AboutSection/>} />
        <Route path='/skills' element={<SkillsSection/>} />
        <Route path='/education' element={<EducationSection/>} />
        <Route path='/projects' element={<ProjectsSection/>} />
        <Route path='/contact' element={<ContactSection/>} /> */}
      </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
