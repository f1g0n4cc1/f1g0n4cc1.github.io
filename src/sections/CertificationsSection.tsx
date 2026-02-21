import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Clock, CheckCircle, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const certifications = {
  earned: [
    { name: 'Certified in Cybersecurity (CC)', issuer: 'ISC2', icon: Award },
    { name: 'NSE 1 & NSE 2', issuer: 'Fortinet', icon: CheckCircle },
    { name: 'SIEM Engineer Career Path', issuer: 'LetsDefend', icon: Award },
    { name: 'Deep - Cybersecurity Bootcamp', issuer: 'Talent Garden', icon: BookOpen },
    { name: 'Google IT Support Professional', issuer: 'Google', icon: CheckCircle },
    { name: 'IBM Cybersecurity Analyst', issuer: 'IBM', icon: CheckCircle },
    { name: 'Microsoft Security, Compliance & Identity', issuer: 'Microsoft', icon: CheckCircle },
  ],
  inProgress: [
    { name: 'CompTIA Security+', issuer: 'CompTIA', icon: Clock },
    { name: 'Splunk Core Certified User', issuer: 'Splunk', icon: Clock },
    { name: 'Linux LPI Essentials', issuer: 'LPI', icon: Clock },
    { name: 'AWS Cloud Practitioner', issuer: 'AWS', icon: Clock },
  ],
};

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const earnedRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(earnedRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: earnedRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.4,
          }
        }
      );

      gsap.fromTo(progressRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: progressRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.4,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="certifications"
      className="relative bg-background py-20 lg:py-40 px-6 lg:px-12"
    >
      {/* Header */}
      <div ref={headerRef} className="container mx-auto mb-20 md:mb-32">
        <h2 className="headline-display text-[clamp(44px,6vw,96px)] text-[#000000] mb-6">
          Certifications
        </h2>
        <div className="shoji-line w-24 mb-6" />
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40 max-w-sm">
          A commitment to continuous learning and professional excellence in cybersecurity.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Earned Certifications */}
        <div ref={earnedRef} className="flex flex-col">
          <div className="flex items-center gap-4 mb-10 pb-4 border-b border-border/10">
            <CheckCircle size={18} className="text-primary" />
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] font-bold text-foreground">
              Earned Awards
            </h3>
          </div>
          
          <div className="space-y-4">
            {certifications.earned.map((cert, index) => (
              <div 
                key={index}
                className="info-card flex items-center gap-6 !p-6 !shadow-none group hover:!border-primary transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 border border-border/10 bg-background group-hover:bg-primary/5 transition-colors">
                  <cert.icon size={20} className="text-foreground/30 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <span className="block font-display font-bold text-sm text-[#000000]">{cert.name}</span>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-foreground/40 mt-1">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress */}
        <div ref={progressRef} className="flex flex-col">
          <div className="flex items-center gap-4 mb-10 pb-4 border-b border-border/10">
            <Clock size={18} className="text-foreground/30" />
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] font-bold text-foreground/40">
              Active Pursuits
            </h3>
          </div>

          <div className="space-y-4">
            {certifications.inProgress.map((cert, index) => (
              <div 
                key={index}
                className="info-card flex items-center gap-6 !p-6 !shadow-none !border-dotted !border-border/20"
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 border border-border/5 bg-background">
                  <cert.icon size={20} className="text-foreground/10" />
                </div>
                <div>
                  <span className="block font-display font-medium text-sm text-foreground/40 italic">{cert.name}</span>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-foreground/20 mt-1">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
