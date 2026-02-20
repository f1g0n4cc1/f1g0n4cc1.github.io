import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Fingerprint, Network, Brain, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface OSINTSectionProps {
  className?: string;
}

const OSINTSection = ({ className = '' }: OSINTSectionProps) => {
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
        { x: '-8vw', scale: 1.08, opacity: 0.7 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(headlineRef.current,
        { x: '-45vw', opacity: 0 },
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
        { x: 0, opacity: 1 },
        { x: '-16vw', opacity: 0, ease: 'power2.in' },
        0.6
      );

      scrollTl.fromTo(cardRef.current,
        { x: 0, opacity: 1 },
        { x: '12vw', opacity: 0, ease: 'power2.in' },
        0.6
      );

      scrollTl.fromTo(bgRef.current,
        { scale: 1, x: 0 },
        { scale: 1.07, x: '3vw', ease: 'none' },
        0.6
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Fingerprint, text: 'Digital footprint mapping' },
    { icon: Network, text: 'Infrastructure enumeration' },
    { icon: Brain, text: 'Threat intelligence feeds' },
    { icon: Shield, text: 'Attack surface analysis' },
  ];

  const tools = [
    'MITRE ATT&CK Framework',
    'Threat Intelligence Feeds',
    'Impacket',
    'Metasploit',
  ];

  return (
    <section 
      ref={sectionRef}
      id="osint"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <img
        ref={bgRef}
        src="/control_room_screens.jpg"
        alt="Control Room"
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
          <span className="block">OSINT</span>
          <span className="block">& Recon</span>
        </h2>
      </div>

      {/* Info Card */}
      <div 
        ref={cardRef}
        className="absolute right-[4vw] top-[10vh] w-[26vw] min-w-[280px] info-card"
      >
        <h3 className="font-display font-bold text-lg text-cyber-white mb-4">
          OSINT & Reconnaissance
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
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-cyber-gray block mb-2">Tools</span>
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
          Explore OSINT projects
          <ArrowRight size={12} />
        </button>
      </div>
    </section>
  );
};

export default OSINTSection;
