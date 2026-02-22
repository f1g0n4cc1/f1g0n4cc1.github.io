import { BookOpen, MapPin, Briefcase } from 'lucide-react';

const ReadmeSection = () => {
  return (
    <div className="card mt-16 md:mt-24 p-5 md:p-8 dark:bg-kjColorDark bg-white kj-sh text-kjColorGray dark:text-kjColorLight md:flex">
      <div className="md:w-5/12 mr-12 hidden md:block pb-8 relative pr-8">
         <div className="w-full h-full min-h-[300px] bg-kjColorGray/10 dark:bg-black/30 rounded-lg flex items-center justify-center">
           <span className="font-mono text-xs opacity-50">[ACTION/LIFESTYLE IMG]</span>
         </div>
      </div>
      <div className="md:w-7/12 leading-loose pt-5 text-sm md:text-base pr-8">
        <div className="border-b pb-2 tracking-widest inline-block text-xs md:text-sm font-bold uppercase border-kjColorGray dark:border-kjColorGray/30 mb-8"> 
          <span className="flex items-center gap-2"><BookOpen size={16} className="text-kjColorPrime" /> README.MD</span>
        </div>
        <div className="space-y-4">
          <p>
            I am a cybersecurity professional with a focus on risk mitigation and threat analysis. My background is rooted in protecting digital assets and ensuring regulatory compliance across various infrastructures.
          </p>
          <p>
            Equipped with strong problem-solving skills and a proactive mindset, I enjoy diving deep into logs, building automated detection systems, and staying one step ahead of potential vulnerabilities.
          </p>
          <div className="pt-6 mt-4 border-t border-kjColorGray/20 dark:border-kjColorGray/10 flex flex-col gap-3 font-mono text-sm opacity-80">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-kjColorGold" /> Location: Remote / Europe</span>
            <span className="flex items-center gap-2"><Briefcase size={14} className="text-kjColorSecondary" /> Available for new opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadmeSection;
