import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';



const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Load animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2 }
      );

      tl.fromTo(headlineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.8'
      );

      tl.fromTo(cardRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.7'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll animation (Entry/Exit)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Elements are handled in useEffect for initial load, 
      // but we can add secondary triggers here if needed for reveal.
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="hero"
      className="relative w-full bg-background overflow-hidden flex flex-col justify-center items-center py-20 lg:py-40"
    >
      <div 
        ref={containerRef}
        className="relative w-[90vw] lg:w-[85vw] max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end gap-12 lg:gap-20"
      >
        {/* Background Frame (Ma) */}
        <div className="absolute inset-0 z-0 opacity-[0.03] scale-110 pointer-events-none overflow-hidden">
           <img
            src="/hero_bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Headline - Asymmetric Placement */}
        <div 
          ref={headlineRef}
          className="relative z-10 flex-1 text-left md:pl-[4vw]"
        >
          <div className="shoji-line w-24 mb-12 opacity-40" />
          <h1 className="headline-display text-[clamp(44px,8vw,120px)] text-foreground tracking-tighter leading-[0.85]">
            <span className="block italic font-bold lowercase text-primary text-[0.45em] mb-4 font-display">specialist</span>
            <span className="block text-[#000000]">Security</span>
            <span className="block ml-[4vw] text-[#000000]">Engineer</span>
          </h1>
          <p className="mt-12 text-foreground/60 max-w-md text-sm lg:text-base leading-relaxed font-medium">
            Building resilient digital ecosystems through defensive strategy, OSINT, and minimalist security principles.
          </p>
          
          <div className="mt-12 flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Explore work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* Info Card - Minimalist Frame */}
        <div 
          ref={cardRef}
          className="relative z-10 w-full md:w-[28vw] md:min-w-[320px] info-card"
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-primary font-display font-bold text-xs uppercase tracking-[0.2em] mb-4">
                Profile
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-foreground/10 flex items-center justify-center grayscale text-foreground/40 text-[10px] font-mono">
                  [PHOTO]
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">Jacopo Falcone</h3>
                  <p className="text-xs text-foreground/40 font-mono">SOC • Engineering • Automation</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border/10">
              <h2 className="text-foreground/40 font-display font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                Core Competencies
              </h2>
              <ul className="grid grid-cols-1 gap-4">
                {['Detection Engineering', 'Threat Intelligence', 'SOAR Playbooks', 'Incident Response'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <span className="w-1 h-1 bg-primary group-hover:scale-x-4 transition-transform origin-left" />
                    <span className="text-xs font-semibold tracking-wide lowercase">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-border/10 flex justify-between items-center text-[10px] font-mono text-foreground/40 uppercase tracking-widest">
              <span>EST. 2024</span>
              <span>MILAN, IT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
