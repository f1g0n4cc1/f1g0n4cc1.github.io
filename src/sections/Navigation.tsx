import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = 'auto';
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

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-cyber-white p-2 hover:text-cyber-magenta transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Links (Desktop) */}
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

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[90] bg-cyber-black/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-10">
          <a 
            href="#projects" 
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} 
            className="text-3xl font-display font-medium text-cyber-white tracking-widest uppercase hover:text-cyber-magenta transition-colors"
          >
            Work
          </a>
          <a 
            href="#training" 
            onClick={(e) => { e.preventDefault(); scrollToSection('training'); }} 
            className="text-3xl font-display font-medium text-cyber-white tracking-widest uppercase hover:text-cyber-magenta transition-colors"
          >
            Services
          </a>
          <a 
            href="#detection" 
            onClick={(e) => { e.preventDefault(); scrollToSection('detection'); }} 
            className="text-3xl font-display font-medium text-cyber-white tracking-widest uppercase hover:text-cyber-magenta transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
            className="text-3xl font-display font-medium text-cyber-white tracking-widest uppercase hover:text-cyber-magenta transition-colors"
          >
            Contact
          </a>
          
          <div className="mt-8 pt-8 border-t border-white/10 w-40 flex flex-col items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyber-magenta">Jacopo Falcone</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyber-gray">Security Specialist</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
