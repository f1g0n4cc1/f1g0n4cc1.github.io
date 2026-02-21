import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Search, Activity, Share2, FileOutput } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);


const ThreatHuntingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll animation (Entry/Exit)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entry Animation
      gsap.fromTo(headlineRef.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(cardRef.current,
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Search, text: 'Hypothesis-driven investigations' },
    { icon: Activity, text: 'Behavioral analytics & anomalies' },
    { icon: Share2, text: 'Lateral movement detection' },
    { icon: FileOutput, text: 'Hunt reporting + detection feedback' },
  ];

  const focusAreas = [
    'Atomic Red Team',
    'MITRE Caldera',
    'SCYTHE',
    'Cobalt Strike',
    'Sliver',
  ];

  return (
    <section 
      ref={sectionRef}
      id="threat-hunting"
      className="relative w-full bg-background py-20 lg:py-40 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative flex flex-col md:flex-row-reverse items-center md:items-start gap-12 lg:gap-24">
        
        {/* Visual Frame (Ma) */}
        <div className="relative w-full md:w-1/2 aspect-[4/5] md:aspect-square overflow-hidden border border-border/10">
          <img
            ref={bgRef}
            src="/dark_server_room.jpg"
            alt="Dark Server Room"
            className="w-full h-full object-cover transition-opacity duration-700"
          />
          <div className="absolute top-8 right-8 text-right">
            <div className="shoji-line w-12 ml-auto mb-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">Section 04</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col md:items-end md:text-right">
          <div ref={headlineRef} className="mb-12">
            <h2 className="headline-display text-[clamp(44px,6vw,96px)] text-foreground tracking-tighter leading-[0.85]">
              Threat<br />
              <span className="mr-[4vw]">Hunting</span>
            </h2>
          </div>

          <div 
            ref={cardRef}
            className="info-card max-w-lg md:text-left"
          >
            <h3 className="text-primary font-display font-bold text-xs uppercase tracking-[0.2em] mb-8">
              Active Defense
            </h3>
            
            <ul className="grid grid-cols-1 gap-6 mb-12">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1">
                    <feature.icon size={18} className="text-foreground/20 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm font-medium leading-relaxed">{feature.text}</span>
                </li>
              ))}
            </ul>

            <div className="pt-10 border-t border-border/10 mb-10">
              <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/40 block mb-4">Focus Areas</span>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area, index) => (
                  <span key={index} className="px-3 py-1.5 border border-border/10 text-[10px] text-foreground/60 font-mono lowercase">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="link-accent flex items-center gap-3"
            >
              investigate hunt hypothesis
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatHuntingSection;
