import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  // Load animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Background fade in
      tl.fromTo(bgRef.current,
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: 0.8 }
      );

      // Headline stagger
      const headlineLines = headlineRef.current?.querySelectorAll('.headline-line');
      if (headlineLines) {
        tl.fromTo(headlineLines,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
          '-=0.4'
        );
      }

      // Subheadline + CTAs
      tl.fromTo(subRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.3'
      );

      // Info card
      tl.fromTo(cardRef.current,
        { x: '10vw', opacity: 0, rotate: 1 },
        { x: 0, opacity: 1, rotate: 0, duration: 0.7 },
        '-=0.5'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 0.4,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.set([headlineRef.current, subRef.current, cardRef.current], {
              opacity: 1, x: 0, y: 0
            });
            gsap.set(bgRef.current, { scale: 1, x: 0 });
          }
        }
      });

      // EXIT phase (60% - 100%) - faster exit
      scrollTl.fromTo(headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.6
      );

      scrollTl.fromTo(subRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.62
      );

      scrollTl.fromTo(cardRef.current,
        { x: 0, opacity: 1 },
        { x: '10vw', opacity: 0, ease: 'power2.in' },
        0.6
      );

      scrollTl.fromTo(bgRef.current,
        { scale: 1, x: 0 },
        { scale: 1.08, x: '-4vw', ease: 'none' },
        0.6
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTraining = () => {
    const element = document.getElementById('training');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="hero"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <img
        ref={bgRef}
        src="/hero_hooded_city.jpg"
        alt="Cybersecurity"
        className="section-bg"
      />
      
      {/* Overlay */}
      <div className="section-overlay" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end pb-[10vh] px-[6vw]">
        {/* Headline Block */}
        <div className="w-full max-w-[70vw]">
          <div ref={headlineRef} className="mb-6">
            <h1 className="headline-display text-[clamp(36px,5.2vw,84px)]">
              <span className="headline-line block">Security Engineer</span>
              <span className="headline-line block">OSINT Ninja</span>
              <span className="headline-line block">Pragmatic Optimist</span>
            </h1>
          </div>

          <div ref={subRef}>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-cyber-gray mb-6">
              Detection • Automation • Threat Hunting • Career Coaching
            </p>

            <div className="flex items-center gap-4">
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToProjects(); }} className="btn-primary flex items-center gap-2">
                View Projects
                <ArrowRight size={14} />
              </a>
              <a href="#training" onClick={(e) => { e.preventDefault(); scrollToTraining(); }} className="btn-ghost flex items-center gap-2">
                <Calendar size={14} />
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div 
        ref={cardRef}
        className="absolute right-[4vw] top-[10vh] w-[26vw] min-w-[280px] info-card"
      >
        <h2 className="font-display font-bold text-lg text-cyber-white mb-1">
          Jacopo Falcone
        </h2>
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-cyber-magenta mb-4">
          Security Engineer · OSINT Specialist · Coach
        </p>
        <p className="text-sm text-cyber-gray leading-relaxed mb-4">
          Focused on understanding how systems behave, how attackers think, and how defenses can be engineered to be resilient.
        </p>
        <div className="flex items-center gap-4 pt-4 border-t border-white/8">
          <div>
            <span className="font-display font-bold text-xl text-cyber-white">Top 5%</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-cyber-gray">TryHackMe Global</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div>
            <span className="font-display font-bold text-xl text-cyber-white">Top 3</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-cyber-gray">LetsDefend Finland</span>
          </div>
        </div>
        <div className="flex items-center gap-4 pt-3 mt-3 border-t border-white/8">
          <div>
            <span className="font-display font-bold text-xl text-cyber-white">20+</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-cyber-gray">Detection Rules</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div>
            <span className="font-display font-bold text-xl text-cyber-white">10+</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-cyber-gray">Yrs Leadership</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
