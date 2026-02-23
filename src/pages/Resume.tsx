const Resume = () => {
  const clientSide = [
    { name: 'React', slug: 'react' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'Vite', slug: 'vite' }
  ];

  const backend = [
    { name: 'Python', slug: 'python' },
    { name: 'Node.js', slug: 'nodedotjs' },
    { name: 'PostgreSQL', slug: 'postgresql' },
    { name: 'Docker', slug: 'docker' }
  ];

  const security = [
    { name: 'Splunk', slug: 'splunk', invertDark: true },
    { name: 'Wireshark', slug: 'wireshark' },
    { name: 'Bash', slug: 'gnubash', invertDark: true },
    { name: 'AWS', slug: 'amazonwebservices', customUrl: 'https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1653463600/kenjimmy.me/kisspng-logo-amazon-web-services-amazon-com-portable-netwo-5c57904c50a156.9772938415492424443303_rfhji1.png', invertDark: true }
  ];

  const renderTechCard = (tech: { name: string, slug: string, invertDark?: boolean, customUrl?: string }) => (
    <div key={tech.name} className="flex flex-col items-center justify-center gap-3 bg-kjColorLight dark:bg-kjColorDark rounded p-6 transition-all hover:border-kjColorPrime hover:shadow-md group cursor-default">
      <img 
        src={tech.customUrl || `https://cdn.simpleicons.org/${tech.slug}`}
        alt={tech.name} 
        className={`w-10 h-10 transition-transform group-hover:scale-110 ${tech.invertDark ? 'dark:invert' : ''}`} 
      />
      <span className="font-mono text-xs md:text-sm text-kjColorGray dark:text-kjColorLight/90 group-hover:text-kjColorPrime transition-colors text-center">
        {tech.name}
      </span>
    </div>
  );

  return (
    <div className="w-full relative py-4 px-6 md:px-10 z-50 mt-12 md:mt-24 text-kjColorGray dark:text-kjColorLight pb-24">
      <div className="flex items-center mb-16">
        <div className="uppercase text-4xl letter font-black text-kjColorBlack dark:text-kjColorLight">RESUME</div>
        <div className="ml-10 tracking-widest flex items-center md:pb-4 uppercase text-xs">
           <div className="h-px bg-kjColorGray w-24 md:w-64 ml-4 dark:bg-white opacity-20 hidden sm:block"></div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-kjColorBlack dark:text-white uppercase tracking-widest">Tech I Use</h2>
        
        <div className="mb-12">
          <h3 className="text-lg font-bold mb-6 text-kjColorSecondary uppercase tracking-widest">Client-Side Applications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clientSide.map(renderTechCard)}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-bold mb-6 text-kjColorSecondary uppercase tracking-widest">Fast & Scalable Backend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {backend.map(renderTechCard)}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-kjColorSecondary uppercase tracking-widest">Security & Automation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {security.map(renderTechCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
