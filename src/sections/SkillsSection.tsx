import { Zap } from 'lucide-react';

const SkillsSection = () => {
  return (
    <section className="mt-16 md:mt-48 text-kjColorGray dark:text-kjColorLight">
      {/* My Top Skills Header */}
      <div className="md:flex justify-between items-end border-b pb-8 dark:border-kjColorDark border-kjColorGray/20">
        <div>
          <h3 className="text-3xl md:text-5xl font-black italic">MY <br/> TOP SKILLS</h3>
          <div className="mt-5 text-sm">
            <span className="font-bold flex items-center dark:text-kjColorLight text-xs">
              <span className="mr-2 text-kjColorGold"><Zap size={14} /></span>
              <span>My area of expertise</span>
            </span>
          </div>
        </div>
        
        {/* Skills List Titles */}
        <div className="mt-12 md:mt-0 font-bold max-w-lg md:text-xl flex flex-col gap-4">
          <div>
            <span className="mr-2 text-kjColorSecondary">—</span> Detection & Analysis
          </div>
          <div>
            <span className="mr-2 text-kjColorPrime">—</span> Security & Automation
          </div>
        </div>
      </div>

      {/* Expertise Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 pt-8 mb-5 md:mb-24">
        {/* Detection & Analysis Card */}
        <div>
          <div className="kj-border bg-kjColorSecondary w-full">
            <div className="kj-border__elips bg-kjColorDark dark:bg-white w-2 h-2 rounded-full hidden md:block"></div>
          </div>
          <div className="mt-4 font-bold tracking-widest text-sm">DETECTION & ANALYSIS</div>
          <p className="mt-4 text-sm leading-relaxed dark:text-white/70">
            Deep experience in network and endpoint monitoring. <br/><br/>
            <strong>Tools & Platforms:</strong> Splunk, Zeek, Suricata, Wireshark, Nmap
          </p>
        </div>

        {/* Security & Automation Card */}
        <div>
          <div className="kj-border bg-kjColorPrime w-full">
            <div className="kj-border__elips bg-kjColorDark dark:bg-white w-2 h-2 rounded-full hidden md:block"></div>
          </div>
          <div className="mt-4 font-bold tracking-widest text-sm">SECURITY & AUTOMATION</div>
          <p className="mt-4 text-sm leading-relaxed dark:text-white/70">
            Focused on streamlined threat detection workflows and automated response procedures. <br/><br/>
            <strong>Languages & Tools:</strong> SPL, Sigma, YARA, Python, Docker, PowerShell
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
