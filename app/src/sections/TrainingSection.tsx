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
        { y: '10vh', scale: 1.08, opacity: 0.7 },
        { y: 0, scale: 1, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(headlineRef.current,
        { y: '40vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(cardRef.current,
        { x: '-18vw', opacity: 0, rotate: -2 },
        { x: 0, opacity: 1, rotate: 0, ease: 'none' },
        0.08
      );

      // EXIT (60% - 100%)
      scrollTl.fromTo(headlineRef.current,
        { y: 0, opacity: 1 },
        { y: '16vh', opacity: 0, ease: 'power2.in' },
        0.6
      );

      scrollTl.fromTo(cardRef.current,
        { x: 0, opacity: 1 },
        { x: '-12vw', opacity: 0, ease: 'power2.in' },
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

      {/* Headline */}
      <div 
        ref={headlineRef}
        className="absolute left-[6vw] bottom-[10vh] w-[74vw]"
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
        className="absolute left-[4vw] top-[10vh] w-[26vw] min-w-[280px] info-card"
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
        <div className="flex items-center gap-4 pt-4 border-t border-white/8 mb-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-2">
              <metric.icon size={14} className="text-cyber-magenta" />
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
    </section>
  );
};

export default TrainingSection;
