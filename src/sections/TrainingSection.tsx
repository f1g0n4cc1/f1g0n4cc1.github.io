import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Users, Award, TrendingUp, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);


const TrainingSection = () => {
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
    { icon: Calendar, text: '1:1 career roadmap sessions' },
    { icon: Award, text: 'Resume + interview prep' },
    { icon: Users, text: 'Hands-on labs & CTF strategy' },
    { icon: Globe, text: 'Multicultural team coaching' },
  ];

  const metrics = [
    { icon: TrendingUp, value: '+15%', label: 'Team Performance' },
    { icon: Users, value: '+20%', label: 'Operational Efficiency' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="training"
      className="relative w-full bg-background py-20 lg:py-40 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-24">
        
        {/* Visual Frame (Ma) */}
        <div className="relative w-full md:w-1/2 aspect-[4/5] md:aspect-square overflow-hidden border border-border/10">
          <img
            ref={bgRef}
            src="/team_training.jpg"
            alt="Team Training"
            className="w-full h-full object-cover transition-opacity duration-700"
          />
          <div className="absolute top-8 left-8">
            <div className="shoji-line w-12 mb-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">Section 05</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col">
          <div ref={headlineRef} className="mb-12">
            <h2 className="headline-display text-[clamp(44px,6vw,96px)] text-foreground tracking-tighter leading-[0.85]">
              Coaching<br />
              <span className="ml-[4vw]">& Guidance</span>
            </h2>
          </div>

          <div 
            ref={cardRef}
            className="info-card max-w-lg"
          >
            <h3 className="text-primary font-display font-bold text-xs uppercase tracking-[0.2em] mb-8">
              Mentorship
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

            <div className="flex flex-wrap gap-10 pt-10 border-t border-border/10 mb-10">
              {metrics.map((metric, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold tracking-tight">{metric.value}</span>
                    <metric.icon size={14} className="text-primary" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/40">{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <button className="w-full py-4 bg-foreground text-background font-bold text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-colors">
                Book a Session
              </button>
              <button className="w-full py-4 border border-foreground text-foreground font-bold text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors">
                Download PDF Roadmap
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
