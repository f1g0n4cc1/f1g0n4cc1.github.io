import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="md:w-24 hidden md:flex flex-col items-center min-h-[calc(100vh-4rem)] sticky top-0 py-10">
      <div>
        <Link to="/" aria-current="page" className="font-display font-bold text-3xl tracking-tight text-kjColorGray dark:text-kjColorLight cursor-pointer inline-block">
          JF.
        </Link>
      </div>
      
      <div className="flex flex-col gap-8 text-kjColorGray dark:text-kjColorLight mt-12 pb-10">
        <a href="https://www.linkedin.com/in/jacopo-falcone-5bb730158/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-xl text-kjColorGray dark:text-kjColorLight hover:text-kjColorPrime transition-colors w-5 h-5" />
        </a>
        <a href="https://github.com/f1g0n4cc1" target="_blank" rel="noopener noreferrer">
          <Github className="text-xl text-kjColorGray dark:text-kjColorLight hover:text-kjColorPrime transition-colors w-5 h-5" />
        </a>
        <a href="https://x.com/magreetti" target="_blank" rel="noopener noreferrer">
          <svg 
            viewBox="0 0 24 24" 
            className="w-5 h-5 fill-current text-kjColorGray dark:text-kjColorLight hover:text-kjColorPrime transition-colors"
            aria-label="X (formerly Twitter)"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.076H5.059z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
