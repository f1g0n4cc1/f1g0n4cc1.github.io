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
      className="relative bg-background py-20 lg:py-40 px-6 lg:px-12"
    >
      {/* Header */}
      <div ref={headerRef} className="container mx-auto mb-20 md:mb-32">
        <h2 className="headline-display text-[clamp(44px,6vw,96px)] text-[#000000] mb-6">
          What People Say
        </h2>
        <div className="shoji-line w-24 mb-6" />
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40 max-w-sm">
          Feedback from collaborators and industry peers.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            ref={el => { cardsRef.current[idx] = el; }}
            className="testimonial-card flex flex-col justify-between"
          >
            <div>
              {/* Quote Icon */}
              <Quote size={24} className="text-primary mb-8" strokeWidth={1} />

              {/* Quote Text */}
              <p className="text-base font-medium leading-relaxed text-foreground/70 mb-10 italic">
                "{testimonial.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 pt-8 border-t border-border/10">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                <span className="font-mono text-[10px] text-primary font-bold">{testimonial.avatar}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm text-[#000000]">
                  {testimonial.name}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/40">
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
