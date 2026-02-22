import { PenTool, ExternalLink } from 'lucide-react';

const WorksSection = () => {
  const works = [
    { 
      title: "The Polymorphic Protocol Challenge", 
      desc: "A Python-based cybersecurity challenge revolving around protocol analysis and polymorphic behavior.", 
      tag: "Security / Python",
      url: "https://github.com/f1g0n4cc1/The-Polymorphic-Protocol-Challenge"
    },
    { 
      title: "Virtual Filesystem Challenge", 
      desc: "Scenario: Develop an in-memory virtual filesystem that supports standard file operations while remaining independent of physical disk storage.", 
      tag: "Engineering / Python",
      url: "https://github.com/f1g0n4cc1/Virtual-Filesystem-Challenge"
    },
    { 
      title: "SuperDuperDashboard", 
      desc: "Full-stack productivity dashboard starter kit built with React 18, TypeScript, and Supabase.", 
      tag: "Full-Stack / TypeScript",
      url: "https://github.com/f1g0n4cc1/SuperDuperDashboard"
    },
    { 
      title: "Apache OpenServerless", 
      desc: "Apache OpenServerless (incubating) is an open source serverless platform.", 
      tag: "Cloud / Serverless",
      url: "https://github.com/apache/openserverless"
    }
  ];

  return (
    <div id="works" className="mt-8 md:mt-24 text-kjColorGray dark:text-kjColorLight">
      <div className="flex items-center">
        <div className="uppercase text-4xl letter font-black text-kjColorBlack dark:text-kjColorLight">MY<br /> WORKS</div>
        <div className="ml-10 tracking-widest flex items-center md:pb-4 uppercase text-xs">
           <div className="whitespace-nowrap flex items-center gap-2 font-bold"><PenTool size={14} className="text-kjColorSecondary" /> SELECTED WORKS</div>
           <div className="h-px bg-kjColorGray w-24 md:w-64 ml-4 dark:bg-white opacity-20 hidden sm:block"></div>
        </div>
      </div>
      
      <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-kjColorBlack dark:text-kjColorLight">
          {works.map((work, idx) => (
            <div key={idx} className="pf-card bg-kjColorLight dark:bg-kjColorDark rounded-lg overflow-hidden group cursor-pointer border border-kjColorGray/10 dark:border-white/5" onClick={() => work.url && window.open(work.url, '_blank')}>
              <div className="h-48 bg-black/5 dark:bg-black/40 flex items-center justify-center relative overflow-hidden">
                <span className="font-mono text-xs opacity-50 z-10 dark:text-white">[PROJECT PREVIEW]</span>
                <div className="absolute inset-0 bg-kjColorPrime opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-kjColorPrime tracking-widest uppercase mb-2">{work.tag}</div>
                <h4 className="text-xl font-bold mb-2 flex items-center justify-between group-hover:text-kjColorPrime transition-colors">
                  {work.title}
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-sm opacity-80 leading-relaxed text-kjColorGray dark:text-white/70">{work.desc}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorksSection;
