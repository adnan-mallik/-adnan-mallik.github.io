import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SectionDivider from './components/SectionDivider.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CvModal from './components/CvModal.jsx';
import ScrollProgressBar from './components/ScrollProgressBar.jsx';
import FloatingContactButton from './components/FloatingContactButton.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Top Navigation */}
      <Navbar onOpenCv={() => setIsCvOpen(true)} />

      {/* Main Content Sections with Animated Gradient Hairline Separators */}
      <main>
        <Hero onOpenCv={() => setIsCvOpen(true)} />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button (Visible after Hero) */}
      <FloatingContactButton />

      {/* WhatsApp Floating Action Button */}
      <WhatsAppButton />

      {/* Interactive CV Modal & Download */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}
