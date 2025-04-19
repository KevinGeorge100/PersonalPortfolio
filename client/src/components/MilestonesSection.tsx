import { useEffect, useState } from "react";

interface CounterItem {
  count: number;
  title: string;
  colorClass: string;
  borderClass: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  position: "left" | "right";
  colorClass: string;
  borderClass: string;
}

// Counter data
const counterItems: CounterItem[] = [
  { count: 3, title: "Years of Experience", colorClass: "text-primary", borderClass: "hover:border-primary/50" },
  { count: 15, title: "Projects Completed", colorClass: "text-secondary", borderClass: "hover:border-secondary/50" },
  { count: 7, title: "Worldwide Clients", colorClass: "text-accent", borderClass: "hover:border-accent/50" }
];

// Timeline data
const timelineItems: TimelineItem[] = [
  {
    year: "2022",
    title: "Started Enterprise Solutions",
    description: "Expanded services to offer comprehensive enterprise-level solutions for larger businesses, focusing on scalable architecture and integrated systems.",
    position: "left",
    colorClass: "bg-primary",
    borderClass: "hover:border-primary/50"
  },
  {
    year: "2021",
    title: "First International Client",
    description: "Expanded my client base globally, working with companies in Europe and Asia to deliver custom mobile applications and web solutions.",
    position: "right",
    colorClass: "bg-secondary",
    borderClass: "hover:border-secondary/50"
  },
  {
    year: "2020",
    title: "Started Development Journey",
    description: "Began my professional journey as a mobile and web application developer, focusing on creating intuitive and responsive user experiences.",
    position: "left",
    colorClass: "bg-accent",
    borderClass: "hover:border-accent/50"
  }
];

export default function MilestonesSection() {
  const [animatedCounters, setAnimatedCounters] = useState<number[]>(counterItems.map(() => 0));
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Start counter animation when section is visible
        counterItems.forEach((item, index) => {
          let currentCount = 0;
          const targetCount = item.count;
          const duration = 2000; // Animation duration in ms
          const increment = Math.ceil(targetCount / (duration / 50)); // Update every 50ms
          
          const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= targetCount) {
              currentCount = targetCount;
              clearInterval(timer);
            }
            
            setAnimatedCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = currentCount;
              return newCounters;
            });
          }, 50);
        });
      }
    }, { threshold: 0.2 });
    
    const section = document.getElementById('milestones');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section id="milestones" className="py-20 bg-dark relative">
      <div className="absolute inset-0 bg-primary/5 pattern-dots pattern-size-2 pattern-opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">Milestones & Achievements</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {counterItems.map((item, index) => (
            <div key={index} className={`counter-card bg-dark-light rounded-xl p-8 text-center border border-gray-800 ${item.borderClass} transition-colors shadow-lg`}>
              <div className={`text-4xl md:text-5xl font-bold ${item.colorClass} mb-2`}>+{animatedCounters[index]}</div>
              <div className="text-xl text-gray-300 uppercase font-inter tracking-wider">{item.title}</div>
            </div>
          ))}
        </div>
        
        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
          
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item relative md:mb-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                  {item.position === "left" ? (
                    <div className="md:text-right">
                      <div className={`bg-dark-light p-6 rounded-xl border border-gray-800 ${item.borderClass} transition-all hover:shadow-lg`}>
                        <span className={`inline-block px-3 py-1 text-xs font-medium ${item.colorClass} text-white rounded-full mb-3`}>{item.year}</span>
                        <h3 className="text-xl font-bold mb-3 font-inter">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ) : <div></div>}
                </div>
                
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-dark"></div>
                
                <div className="md:w-1/2 md:pl-12">
                  {item.position === "right" ? (
                    <div className={`bg-dark-light p-6 rounded-xl border border-gray-800 ${item.borderClass} transition-all hover:shadow-lg`}>
                      <span className={`inline-block px-3 py-1 text-xs font-medium ${item.colorClass} text-white rounded-full mb-3`}>{item.year}</span>
                      <h3 className="text-xl font-bold mb-3 font-inter">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  ) : <div></div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
