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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 0.4,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(bgRef.current,
        { x: '8vw', scale: 1.10, opacity: 0.6 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(headlineRef.current,
        { x: '-40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(cardRef.current,
        { x: '18vw', opacity: 0, rotate: 2 },
        { x: 0, opacity: 1, rotate: 0, ease: 'none' },
        0.08
      );

      // EXIT (60% - 100%)
      scrollTl.fromTo(headlineRef.current,
        { y: 0, opacity: 1 },
        { y: '18vh', opacity: 0, ease: 'power2.in' },
        0.6
      );

      scrollTl.fromTo(cardRef.current,
        { x: 0, opacity: 1 },
        { x: '12vw', opacity: 0, ease: 'power2.in' },
        0.6
      );

      scrollTl.fromTo(bgRef.current,
        { scale: 1, y: 0 },
        { scale: 1.06, y: '-3vh', ease: 'none' },
        0.6
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

      {/* Headline */}
      <div 
        ref={headlineRef}
        className="absolute left-[6vw] bottom-[10vh] w-[70vw]"
      >
        <h2 className="headline-display text-[clamp(40px,5.5vw,88px)]">
          <span className="block">Detection</span>
          <span className="block">Engineering</span>
        </h2>
      </div>

      {/* Info Card */}
      <div 
        ref={cardRef}
        className="absolute right-[4vw] top-[10vh] w-[26vw] min-w-[280px] info-card"
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
        <div className="flex items-center gap-4 pt-4 border-t border-white/8 mb-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-2">
              <metric.icon size={14} className="text-cyber-magenta" />
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
    </section>
  );
};

export default DetectionSection;
