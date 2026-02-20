import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Github, ExternalLink, Calendar, MapPin, Phone } from 'lucide-react';
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
      className="relative min-h-screen"
    >
      {/* Background Image */}
      <img
        src="/night_city_contact.jpg"
        alt="Night City"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-cyber-black/78" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-[14vh] px-6">
        {/* Headline */}
        <div ref={headlineRef} className="text-center mb-12">
          <h2 className="headline-display text-[clamp(36px,5vw,80px)]">
            <span className="block">Let's Build</span>
            <span className="block">Something</span>
            <span className="block text-cyber-magenta">Secure.</span>
          </h2>
        </div>

        {/* Contact Block */}
        <div ref={contentRef} className="text-center">
          {/* Email */}
          {/* Email - Secure Modal */}
          <ContactModal 
            trigger={
              <button className="inline-flex items-center gap-3 text-cyber-magenta hover:text-cyber-white transition-colors mb-4 cursor-pointer">
                <Mail size={20} />
                <span className="font-mono text-lg">Initialize Secure Comms</span>
              </button>
            }
          />

          {/* Location & Phone */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-cyber-gray">
              <MapPin size={14} />
              <span className="font-mono text-xs uppercase tracking-[0.08em]">Helsinki, Finland</span>
            </div>
            <div className="flex items-center gap-2 text-cyber-gray">
              <Phone size={14} />
              <span className="font-mono text-xs uppercase tracking-[0.08em]">+358 4578332673</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-10">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyber-gray hover:text-cyber-white transition-colors"
              >
                <link.icon size={18} />
                <span className="font-mono text-xs uppercase tracking-[0.08em]">{link.label}</span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="btn-primary flex items-center gap-2 mx-auto">
            <Calendar size={14} />
            Schedule a Call
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-6 px-6 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-cyber-gray">
            © Jacopo Falcone. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="font-mono text-[10px] uppercase tracking-[0.08em] text-cyber-gray hover:text-cyber-white transition-colors">
              Privacy
            </a>
            <a href="#" className="font-mono text-[10px] uppercase tracking-[0.08em] text-cyber-gray hover:text-cyber-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
