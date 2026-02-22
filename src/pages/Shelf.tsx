const Shelf = () => {
  const posts = [
    {
      id: 1,
      date: "Nov 15, 2024",
      text: "Just published a new write-up on analyzing polymorphic malware behavior using Python. It's fascinating how much these variants change to evade detection while keeping their core execution intact."
    },
    {
      id: 2,
      date: "Oct 28, 2024",
      text: "Really enjoyed the Virtual Filesystem Challenge! Building an in-memory FS from scratch that supports standard file ops without persistence was a great exercise in understanding lower-level OS concepts."
    },
    {
      id: 3,
      date: "Sep 12, 2024",
      text: "Apache OpenServerless is shaping up nicely. The community is pushing hard to implement better cold-start mitigations. Excited to see where this incubating project goes by the end of the year."
    },
    {
      id: 4,
      date: "Aug 05, 2024",
      text: "Nothing beats the feeling of finally getting a stubborn CI/CD pipeline to turn green. Refactoring those GitHub Actions for SuperDuperDashboard took some time, but the deployment speed is unmatched now."
    },
    {
      id: 5,
      date: "Jul 19, 2024",
      text: "Currently diving deep into advanced Splunk SPL queries for anomaly detection in our network traffic logs. The amount of noise is incredible, but finding that one signal makes it all worth it."
    }
  ];

  return (
    <div className="w-full relative py-4 px-6 md:px-10 z-50 mt-12 md:mt-24 text-kjColorGray dark:text-kjColorLight pb-24">
      <div className="flex items-center mb-16">
        <div className="uppercase text-4xl letter font-black text-kjColorBlack dark:text-kjColorLight">SHELF</div>
        <div className="ml-10 tracking-widest flex items-center md:pb-4 uppercase text-xs">
           <div className="whitespace-nowrap flex items-center gap-2 font-bold">MY THOUGHTS & POSTS</div>
           <div className="h-px bg-kjColorGray w-24 md:w-64 ml-4 dark:bg-white opacity-20 hidden sm:block"></div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-kjColorBlack dark:text-white uppercase tracking-widest">Latest Updates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {posts.map((post) => (
            <div key={post.id} className="p-6 md:p-8 flex flex-col bg-white dark:bg-kjColorDark rounded-lg shadow-sm transition-transform hover:-translate-y-1">
              <div className="text-xs font-mono text-kjColorPrime mb-4">{post.date}</div>
              <p className="text-sm md:text-base leading-relaxed text-kjColorBlack dark:text-kjColorLight/90 flex-grow">
                {post.text}
              </p>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shelf;
