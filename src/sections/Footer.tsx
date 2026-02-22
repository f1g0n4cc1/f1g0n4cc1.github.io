const Footer = () => {
  return (
    <footer id="contact" className="mt-16 md:mt-24 text-kjColorGray dark:text-kjColorLight text-center pb-24 md:pb-0">
      <div className="md:w-6/12 m-auto">
        <div className="uppercase text-4xl md:text-5xl border-b pb-5 font-black italic dark:border-kjColorDark border-kjColorGray/20">Keep in <br/> Touch</div>
        <div className="mt-6 text-sm md:text-base opacity-80 max-w-sm mx-auto leading-relaxed">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </div>
        <div className="mt-6 md:mt-12 text-lg md:text-2xl font-mono hover:text-kjColorPrime transition-colors group cursor-pointer inline-block">
          <a href="mailto:jacopofalcone@proton.me" className="inline-block relative">
            jacopofalcone@proton.me
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-kjColorPrime transition-all group-hover:w-full"></span>
          </a>
        </div>
      </div>

      <div className="mt-16 md:mt-32">
        <div className="flex w-full overflow-hidden rounded-md">
           <div className="w-1/4 kj-border bg-kjColorPrime">
             <div className="kj-border__elips bg-white w-2 h-2 rounded-full hidden md:block"></div>
           </div>
           <div className="w-1/4 kj-border bg-kjColorGold">
             <div className="kj-border__elips bg-white w-2 h-2 rounded-full hidden md:block"></div>
           </div>
           <div className="w-1/4 kj-border bg-kjColorSecondary">
             <div className="kj-border__elips bg-white w-2 h-2 rounded-full hidden md:block"></div>
           </div>
           <div className="w-1/4 kj-border bg-kjColorDark">
             <div className="kj-border__elips bg-white w-2 h-2 rounded-full hidden md:block"></div>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
