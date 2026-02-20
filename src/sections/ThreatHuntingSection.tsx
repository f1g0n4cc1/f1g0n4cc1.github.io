import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Search, Activity, Share2, FileOutput } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ThreatHuntingSectionProps {
  className?: string;
}

const ThreatHuntingSection = ({ className = '' }: ThreatHuntingSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll animation (Entry/Exit)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entry Animation
      gsap.fromTo(headlineRef.current,
        { x: -60, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(cardRef.current,
        { x: -60, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8,
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

  const tools = [
    'Atomic Red Team',
    'MITRE Caldera',
    'SCYTHE',
    'Cobalt Strike',
    'Sliver',
  ];

  return (
    <section 
      ref={sectionRef}
      id="hunting"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <img
        ref={bgRef}
        src="/analyst_desk.jpg"
        alt="Analyst Desk"
        className="section-bg"
      />
      
      {/* Overlay */}
      <div className="section-overlay" />

      {/* Content Container */}
      <div className="relative min-h-[100vh] flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start p-[6vw] md:p-0">
        
        {/* Headline */}
        <div 
          ref={headlineRef}
          className="md:absolute md:left-[6vw] md:bottom-[10vh] w-full md:w-[70vw] mb-12 md:mb-0"
        >
          <h2 className="headline-display text-[clamp(40px,5.5vw,88px)]">
            <span className="block">Threat</span>
            <span className="block">Hunting</span>
          </h2>
        </div>

        {/* Info Card - Top Left */}
        <div 
          ref={cardRef}
          className="md:absolute md:left-[4vw] md:top-[10vh] w-full md:w-[26vw] md:min-w-[280px] info-card"
        >
          <h3 className="font-display font-bold text-lg text-cyber-white mb-4">
            Threat Hunting
          </h3>
          <ul className="space-y-3 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <feature.icon size={16} className="text-cyber-magenta flex-shrink-0" />
                <span className="text-sm text-cyber-gray">{feature.text}</span>
              </li>
            ))}
          </ul>

          {/* Tools */}
          <div className="pt-4 border-t border-white/8 mb-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-cyber-gray block mb-2">Adversary Emulation</span>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span key={index} className="px-2 py-1 bg-white/5 rounded text-[10px] text-cyber-white font-mono">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="link-accent flex items-center gap-2"
          >
            Read hunt reports
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThreatHuntingSection;
