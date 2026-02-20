import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Shield, FileCode, Filter, Target, TrendingDown, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface DetectionSectionProps {
  className?: string;
}

const DetectionSection = ({ className = '' }: DetectionSectionProps) => {
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
        { x: 60, opacity: 0 },
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
    { icon: Shield, text: 'SIEM rule design & tuning (SPL, KQL)' },
    { icon: FileCode, text: 'Sigma & YARA rule development' },
    { icon: Filter, text: 'False-positive reduction' },
    { icon: Target, text: 'MITRE ATT&CK mapping' },
  ];

  const metrics = [
    { icon: TrendingDown, value: '-30%', label: 'False Positives' },
    { icon: Clock, value: '-25%', label: 'Analyst Workload' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="detection"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <img
        ref={bgRef}
        src="/server_corridor.jpg"
        alt="Server Corridor"
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
            <span className="block">Detection</span>
            <span className="block">Engineering</span>
          </h2>
        </div>

        {/* Info Card */}
        <div 
          ref={cardRef}
          className="md:absolute md:right-[4vw] md:top-[10vh] w-full md:w-[26vw] md:min-w-[280px] info-card"
        >
          <h3 className="font-display font-bold text-lg text-cyber-white mb-4">
            Detection Engineering
          </h3>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <feature.icon size={16} className="text-cyber-magenta flex-shrink-0" />
                <span className="text-sm text-cyber-gray">{feature.text}</span>
              </li>
            ))}
          </ul>

          {/* Metrics */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/8 mb-4">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-center gap-2">
                <metric.icon size={14} className="text-cyber-magenta flex-shrink-0" />
                <span className="font-display font-bold text-lg text-cyber-white">{metric.value}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-cyber-gray">{metric.label}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="link-accent flex items-center gap-2"
          >
            See detection projects
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetectionSection;
