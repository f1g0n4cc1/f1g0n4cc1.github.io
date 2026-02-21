import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import DetectionSection from './sections/DetectionSection';
import OSINTSection from './sections/OSINTSection';
import AutomationSection from './sections/AutomationSection';
import ThreatHuntingSection from './sections/ThreatHuntingSection';
import TrainingSection from './sections/TrainingSection';
import ProjectsSection from './sections/ProjectsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);



  return (
    <div ref={mainRef} className="relative bg-cyber-black">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections */}
      <main className="relative">
        <HeroSection />
        <DetectionSection />
        <OSINTSection />
        <AutomationSection />
        <ThreatHuntingSection />
        <TrainingSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
