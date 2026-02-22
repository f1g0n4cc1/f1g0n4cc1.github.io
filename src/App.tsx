import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Shelf from './pages/Shelf';
import Footer from './sections/Footer';
import Sidebar from './components/Sidebar';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Force dark mode on html for this build
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="md:bg-kjColorLight dark:bg-kjColorBlack md:py-16 min-h-screen transition-colors duration-300">
      <div className="bg-white dark:bg-kjColorBlack md:max-w-6xl md:m-auto sm:rounded-lg p-2 md:p-8 text-kjColorGray dark:text-kjColorLight md:shadow-2xl transition-colors duration-300">
        <div className="md:flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="md:flex-1">
            <Navigation />
            
            <main className="relative">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/shelf" element={<Shelf />} />
              </Routes>
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
