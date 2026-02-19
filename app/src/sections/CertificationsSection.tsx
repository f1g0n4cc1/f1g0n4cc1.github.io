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
      className="relative bg-cyber-black py-[8vh] px-[6vw]"
    >
      {/* Header */}
      <div ref={headerRef} className="mb-12">
        <h2 className="headline-display text-[clamp(32px,4vw,64px)] mb-3">
          Certifications
        </h2>
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-cyber-gray">
          Continuous learning and professional development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Earned Certifications */}
        <div ref={earnedRef}>
          <h3 className="font-display font-semibold text-lg text-cyber-white mb-4 flex items-center gap-2">
            <CheckCircle size={18} className="text-cyber-magenta" />
            Earned
          </h3>
          <div className="space-y-3">
            {certifications.earned.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/6 hover:border-cyber-magenta/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-cyber-magenta/20 flex items-center justify-center flex-shrink-0">
                  <cert.icon size={18} className="text-cyber-magenta" />
                </div>
                <div>
                  <span className="block font-display font-medium text-sm text-cyber-white">{cert.name}</span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-cyber-gray">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress */}
        <div ref={progressRef}>
          <h3 className="font-display font-semibold text-lg text-cyber-white mb-4 flex items-center gap-2">
            <Clock size={18} className="text-cyber-magenta" />
            In Progress
          </h3>
          <div className="space-y-3">
            {certifications.inProgress.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/6 hover:border-cyber-magenta/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <cert.icon size={18} className="text-cyber-gray" />
                </div>
                <div>
                  <span className="block font-display font-medium text-sm text-cyber-white">{cert.name}</span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-cyber-gray">{cert.issuer}</span>
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
