import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Github, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { ContactModal } from '@/components/ContactModal';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headlineRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.4,
          }
        }
      );

      gsap.fromTo(contentRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.4,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jacopo-falcone-5bb730158/' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/f1g0n4cc1' },
    { icon: ExternalLink, label: 'TryHackMe', href: 'https://tryhackme.com/p/jacopo.falcone' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="relative bg-background overflow-hidden"
    >
      <div className="absolute top-0 left-12 w-[1px] h-32 bg-border/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] py-24 lg:py-48 px-6">
        {/* Headline */}
        <div ref={headlineRef} className="text-center mb-16 max-w-4xl">
          <h2 className="headline-display text-[clamp(44px,8vw,120px)] text-[#000000] leading-[0.85] tracking-tight">
            <span className="block mb-2">Let's Build</span>
            <span className="block mb-4">Something</span>
            <span className="block text-primary italic">Secure.</span>
          </h2>
        </div>

        {/* Contact Block */}
        <div ref={contentRef} className="text-center flex flex-col items-center">
          {/* Email - Secure Modal */}
          <ContactModal 
            trigger={
              <button className="inline-flex items-center gap-4 text-foreground hover:text-primary transition-all duration-300 mb-12 group">
                <div className="w-12 h-12 rounded-full border border-border/10 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                  <Mail size={18} className="text-foreground/40 group-hover:text-primary" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold">Contact Me</span>
              </button>
            }
          />

          {/* Location */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
            <div className="flex items-center gap-4">
              <MapPin size={16} className="text-primary/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">Helsinki, Finland</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-10 mb-20">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-colors"
              >
                <div className="text-foreground/30 group-hover:text-primary transition-colors">
                  <link.icon size={20} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/20 group-hover:text-foreground/40 transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="info-card !p-0 overflow-hidden group">
            <div className="flex items-center gap-6 px-10 py-5 bg-background hover:bg-primary/5 transition-colors">
              <Calendar size={16} className="text-primary" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] font-bold text-[#000000]">Schedule a Call</span>
            </div>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full py-12 px-12 border-t border-border/10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-8 h-8 flex items-center justify-center border border-border/10 font-bold text-xs">JF</div>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/30">
              © 2024 Jacopo Falcone.
            </span>
          </div>
          <div className="flex items-center gap-10">
            <a href="#" className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/30 hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/30 hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
