import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
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
      className="relative bg-cyber-black py-[8vh] px-[6vw]"
    >
      {/* Header */}
      <div ref={headerRef} className="mb-12">
        <h2 className="headline-display text-[clamp(32px,4vw,64px)] mb-3">
          Selected Work
        </h2>
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-cyber-gray">
          A few builds, detections, and investigations.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={el => { cardsRef.current[idx] = el; }}
            className="project-card group cursor-pointer"
          >
            <div className="p-6">
              {/* Icon & Category */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <project.icon size={24} className="text-cyber-white" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-cyber-magenta">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-cyber-white mb-2 group-hover:text-cyber-magenta transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-cyber-gray leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, toolIdx) => (
                  <span key={toolIdx} className="px-2 py-1 bg-white/5 rounded text-[10px] text-cyber-gray font-mono">
                    {tool}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="flex items-center gap-2 text-cyber-magenta opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em]">View Project</span>
                <ExternalLink size={12} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
