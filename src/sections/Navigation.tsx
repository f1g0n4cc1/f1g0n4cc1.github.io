import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Mail, Sun, Moon, FileText, User, Book } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggleDarkMode = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      setIsDark(true);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleWorksClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('works');
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById('works');
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  const handleNavRoute = (path: string) => {
    navigate(path);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className="relative z-[100]">
      {/* Desktop Links */}
      <div className="hidden md:flex">
        <div className="text-kjColorGray dark:text-kjColorLight text-sm md:flex-1">
          <div className="font-bold md:ml-4 inline-block py-1 px-2 f-link rounded">
            <a href="mailto:jacopofalcone@proton.me" className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              jacopofalcone@proton.me
            </a>
          </div>
          <span 
            className="cursor-pointer ml-10 dark:text-kjColorLight inline-block transition-transform hover:scale-110" 
            onClick={toggleDarkMode}
          >
            {isDark ? <Sun className="w-5 h-5 ml-1" /> : <Moon className="w-5 h-5 ml-1" />}
          </span>
        </div>
        
        <div className="flex gap-2 text-kjColorGray dark:text-kjColorLight">
          <button onClick={handleWorksClick} className="focus:outline-none py-1 px-2 capitalize f-link rounded flex items-center">
            <FileText className="w-4 h-4 mr-1" /> works
          </button>
          <button onClick={() => handleNavRoute('/resume')} className="focus:outline-none py-1 px-2 capitalize f-link rounded flex items-center">
            <User className="w-4 h-4 mr-1" /> resume
          </button>
          <button onClick={() => handleNavRoute('/shelf')} className="focus:outline-none py-1 px-2 capitalize f-link rounded flex items-center">
            <Book className="w-4 h-4 mr-1" /> shelf
          </button>
        </div>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden absolute right-0 top-0 text-kjColorGray dark:text-kjColorLight p-2 hover:opacity-70 transition-opacity z-[101]"
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-kjColorLight dark:bg-kjColorBlack transition-all duration-500 md:hidden flex flex-col items-center justify-center min-h-screen gap-8 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex gap-6 mb-8 text-kjColorGray dark:text-kjColorLight">
          <span className="cursor-pointer" onClick={toggleDarkMode}>
            {isDark ? <Sun className="w-8 h-8" /> : <Moon className="w-8 h-8" />}
          </span>
        </div>
        <button onClick={handleWorksClick} className="text-3xl font-display font-bold text-kjColorGray dark:text-kjColorLight capitalize tracking-tight hover:opacity-50 transition-opacity">
          works
        </button>
        <button onClick={() => handleNavRoute('/resume')} className="text-3xl font-display font-bold text-kjColorGray dark:text-kjColorLight capitalize tracking-tight hover:opacity-50 transition-opacity">
          resume
        </button>
        <button onClick={() => handleNavRoute('/shelf')} className="text-3xl font-display font-bold text-kjColorGray dark:text-kjColorLight capitalize tracking-tight hover:opacity-50 transition-opacity">
          shelf
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
