import { Code, PaintbrushVertical, Smartphone, Server } from "lucide-react";

// Skill type
interface Skill {
  name: string;
  percentage: number;
  colorClass: string;
}

// Skills data
const skills: Skill[] = [
  { name: "Mobile Development", percentage: 95, colorClass: "bg-primary" },
  { name: "Web Development", percentage: 90, colorClass: "bg-secondary" },
  { name: "UI/UX Design", percentage: 85, colorClass: "bg-accent" },
  { name: "Backend Development", percentage: 80, colorClass: "bg-green-500" }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* About Text */}
          <div className="w-full md:w-2/3">
            <p className="text-lg mb-6 text-gray-300">
              I'm a Mobile & Web Application developer with 3+ years of experience; I develop software using extraordinary abilities, strategy, and design to meet any obstacle.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              I have worked on a wide range of projects, from simple apps to complex enterprise-level solutions. I am constantly amazed by the power and flexibility of modern technologies, and I believe that they are the future of mobile app development.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              My approach combines technical expertise with strategic thinking. I don't just build solutions; I craft experiences that drive results and create lasting impact for my clients and their users.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-dark rounded-lg px-5 py-3 border border-gray-800">
                <span className="text-primary flex items-center">
                  <Code className="mr-2 h-4 w-4" /> Development
                </span>
              </div>
              <div className="bg-dark rounded-lg px-5 py-3 border border-gray-800">
                <span className="text-secondary flex items-center">
                  <PaintbrushVertical className="mr-2 h-4 w-4" /> UI/UX Design
                </span>
              </div>
              <div className="bg-dark rounded-lg px-5 py-3 border border-gray-800">
                <span className="text-accent flex items-center">
                  <Smartphone className="mr-2 h-4 w-4" /> Mobile Apps
                </span>
              </div>
              <div className="bg-dark rounded-lg px-5 py-3 border border-gray-800">
                <span className="text-green-500 flex items-center">
                  <Server className="mr-2 h-4 w-4" /> Backend Systems
                </span>
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className="w-full md:w-1/3 bg-dark p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-6 font-inter">Technical Expertise</h3>
            
            {/* Skill Bars */}
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`${skill.colorClass} h-2 rounded-full`} 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
