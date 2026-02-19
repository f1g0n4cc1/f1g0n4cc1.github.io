import { useEffect, useState } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyber-black/80 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-bold text-xl text-cyber-white tracking-tight hover:text-cyber-magenta transition-colors"
        >
          JF
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="nav-link">
            Work
          </a>
          <a href="#training" onClick={(e) => { e.preventDefault(); scrollToSection('training'); }} className="nav-link">
            Services
          </a>
          <a href="#detection" onClick={(e) => { e.preventDefault(); scrollToSection('detection'); }} className="nav-link">
            About
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
