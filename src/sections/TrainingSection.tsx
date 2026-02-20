import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Users, Award, Download, TrendingUp, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TrainingSectionProps {
  className?: string;
}

const TrainingSection = ({ className = '' }: TrainingSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll animation (Entry/Exit)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entry Animation
      gsap.fromTo(headlineRef.current,
        { y: 60, opacity: 0 },
        { 
          y: 0, 
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
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <img
        ref={bgRef}
        src="/team_training.jpg"
        alt="Team Training"
        className="section-bg"
      />
      
      {/* Overlay */}
      <div className="section-overlay" />

      {/* Content Container */}
      <div className="relative min-h-[100vh] flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start p-[6vw] md:p-0">
        
        {/* Headline */}
        <div 
          ref={headlineRef}
          className="md:absolute md:left-[6vw] md:bottom-[10vh] w-full md:w-[74vw] mb-12 md:mb-0"
        >
          <h2 className="headline-display text-[clamp(36px,5vw,80px)]">
            <span className="block">Training</span>
            <span className="block">& Career</span>
            <span className="block">Guidance</span>
          </h2>
        </div>

        {/* Info Card - Top Left */}
        <div 
          ref={cardRef}
          className="md:absolute md:left-[4vw] md:top-[10vh] w-full md:w-[26vw] md:min-w-[280px] info-card"
        >
          <h3 className="font-display font-bold text-lg text-cyber-white mb-4">
            Coaching & Training
          </h3>
          <ul className="space-y-3 mb-4">
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

          <div className="flex flex-col gap-3">
            <button className="btn-primary flex items-center justify-center gap-2">
              <Calendar size={14} />
              Book a Session
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2">
              <Download size={14} />
              Download Coaching PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
