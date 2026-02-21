import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
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
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: 60, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
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
      id="projects"
      className="relative bg-background py-20 lg:py-40 px-6 lg:px-12"
    >
      {/* Header */}
      <div ref={headerRef} className="container mx-auto mb-20 md:mb-32">
        <h2 className="headline-display text-[clamp(44px,6vw,96px)] text-[#000000] mb-6">
          Selected Work
        </h2>
        <div className="shoji-line w-24 mb-6" />
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40 max-w-sm">
          A focused collection of digital builds, automated detections, and forensic investigations.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={el => { cardsRef.current[idx] = el; }}
            className="project-card group"
          >
            <div className="p-10 lg:p-12">
              {/* Category & Tag */}
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary font-bold">
                  {project.category}
                </span>
                <div className="w-8 h-[1px] bg-border/20" />
              </div>

              {/* Content */}
              <h3 className="headline-display text-4xl text-[#000000] mb-6 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm font-medium leading-relaxed text-foreground/60 mb-10 max-w-md">
                {project.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-4 mb-12">
                {project.tools.map((tool, toolIdx) => (
                  <span key={toolIdx} className="font-mono text-[9px] uppercase tracking-widest text-foreground/30 border border-border/10 px-3 py-1">
                    {tool}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="inline-flex items-center gap-4 text-primary group-hover:gap-6 transition-all duration-300">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Case Study</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
