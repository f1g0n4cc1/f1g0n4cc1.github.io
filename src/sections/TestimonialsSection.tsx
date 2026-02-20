import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.4,
          }
        }
      );

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 0.4,
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="testimonials"
      className="relative bg-cyber-navy py-[8vh] px-[6vw]"
    >
      {/* Header */}
      <div ref={headerRef} className="mb-12">
        <h2 className="headline-display text-[clamp(32px,4vw,64px)]">
          What People Say
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            ref={el => { cardsRef.current[idx] = el; }}
            className="testimonial-card"
          >
            {/* Quote Icon */}
            <Quote size={24} className="text-cyber-magenta mb-4 opacity-60" />

            {/* Quote Text */}
            <p className="text-sm text-cyber-gray leading-relaxed mb-6">
              "{testimonial.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyber-magenta/30 to-purple-500/30 flex items-center justify-center">
                <span className="font-mono text-xs text-cyber-white">{testimonial.avatar}</span>
              </div>
              <div>
                <span className="block font-display font-semibold text-sm text-cyber-white">
                  {testimonial.name}
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-cyber-gray">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
