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
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-bold text-xl text-foreground tracking-tight hover:opacity-70 transition-opacity"
        >
          JF
        </button>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-foreground p-2 hover:opacity-70 transition-opacity"
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
        className={`fixed inset-0 z-[90] bg-background backdrop-blur-2xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-8">
          <a 
            href="#projects" 
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} 
            className="text-4xl font-display font-bold text-foreground tracking-tight hover:opacity-50 transition-opacity"
          >
            work
          </a>
          <a 
            href="#training" 
            onClick={(e) => { e.preventDefault(); scrollToSection('training'); }} 
            className="text-4xl font-display font-bold text-foreground tracking-tight hover:opacity-50 transition-opacity"
          >
            services
          </a>
          <a 
            href="#detection" 
            onClick={(e) => { e.preventDefault(); scrollToSection('detection'); }} 
            className="text-4xl font-display font-bold text-foreground tracking-tight hover:opacity-50 transition-opacity"
          >
            about
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
            className="text-4xl font-display font-bold text-foreground tracking-tight hover:opacity-50 transition-opacity"
          >
            contact
          </a>
          
          <div className="mt-8 pt-8 border-t border-border/10 w-40 flex flex-col items-center gap-2">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-primary">Jacopo Falcone</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Security Specialist</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
