import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    // Initialize GSAP Timeline to match the reference animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Reveal "It's me" Callout
    tl.to(".callout", {
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

    // Animate Name letters/words
    tl.fromTo(".letter", 
      { margin: "-6px", fontSize: "0", opacity: 0 },
      { margin: "0px", fontSize: "clamp(2.25rem, 6vw, 4rem)", opacity: 1, duration: 1, ease: "power4.out", stagger: 0.2 },
      "-=0.4"
    );

    // Reveal Description / Role (.des)
    tl.to(".des", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2
    }, "-=0.6");

    // Reveal Message
    tl.to(".message", {
      y: 0,
      opacity: 1,
      duration: 0.8
    }, "-=0.6");
    
    // Reveal Talk Button
    tl.to(".talk-wrapper", {
      opacity: 1,
      duration: 0.8
    }, "-=0.4");

    // Pulsing Animation loop for talk button
    gsap.to(".talk-pulse", {
      scale: 1,
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      ease: "power1.out"
    });

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      id="hero"
      className="mt-16 md:mt-24 relative"
    >
      {/* Callout */}
      <div className="callout top-right inline-block bg-black dark:bg-black border border-kjColorGray dark:border-white">
        <div className="font-bold flex items-center text-white dark:text-kjColorLight text-xs">
          <span>It's me</span>
        </div>
      </div>

      <div className="md:flex justify-between mt-6">
        {/* Main Text Area */}
        <div>
          <h1 className="text-4xl md:text-6xl letter font-black text-kjColorBlack dark:text-kjColorLight">JACOPO</h1>
          <h1 className="text-4xl md:text-6xl letter font-black text-kjColorBlack dark:text-kjColorLight">FALCONE</h1>
          
          <div className="text-sm tracking-widest des mt-3 text-kjColorGray dark:text-kjColorLight">
            <span className="font-bold">SECURITY</span> ENGINEER
          </div>
          
          <div className="max-w-lg mt-5 tracking-wider md:leading-8 message text-kjColorGray dark:text-kjColorLight">
            Driven cybersecurity professional focused on risk mitigation. I specialize in helping businesses protect their data and digital assets, implementing tailored security strategies to prevent cyber threats, ensure regulatory compliance, and strengthen overall security posture.
          </div>
          
          <div className="flex items-center justify-start mt-8 md:mt-16">
            <a href="mailto:jacopofalcone@proton.me" className="inline-block relative">
               <div className="talk-wrapper">
                 <div className="talk text-white font-bold text-center p-4">
                    <MessageCircle size={32} />
                 </div>
                 <div className="talk-pulse"></div>
               </div>
            </a>
          </div>
        </div>

        <div className="mt-8 md:-mt-8 des z-10 hidden md:block">
          <div className="bg-gray-100 dark:bg-kjColorDark rounded-full h-80 w-80 text-center flex justify-center shadow-lg relative cursor-pointer overflow-hidden items-center">
             <img src="/Gemini_Generated_Image_4axkoe4axkoe4axk.png" alt="Profile Picture" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
