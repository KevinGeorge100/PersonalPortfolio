import { Search, PaintbrushVertical, Code, Rocket } from "lucide-react";

interface StrategyItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  colorClass: string;
  bgColorClass: string;
  hoverBgColorClass: string;
  borderClass: string;
  hoverTextClass: string;
}

// Strategy items data
const strategyItems: StrategyItem[] = [
  {
    icon: <Search className="text-primary text-2xl" />,
    title: "Planning & Strategy",
    description: "I analyze your goals, target users, and key requirements to establish a solid foundation for the project. This initial phase includes competitive analysis, user journey mapping, and technical feasibility assessment.",
    points: [
      "Comprehensive needs analysis",
      "User experience mapping",
      "Technical scope definition"
    ],
    colorClass: "text-primary",
    bgColorClass: "bg-primary/20",
    hoverBgColorClass: "group-hover:bg-primary/30",
    borderClass: "hover:border-primary/50",
    hoverTextClass: "group-hover:text-primary"
  },
  {
    icon: <PaintbrushVertical className="text-secondary text-2xl" />,
    title: "Pixel-Perfect UI/UX Design",
    description: "I create intuitive, visually appealing, and accessible interfaces that engage users and drive conversions. My design process combines aesthetic appeal with functional usability.",
    points: [
      "Responsive wireframing",
      "Interactive prototyping",
      "Accessibility compliance"
    ],
    colorClass: "text-secondary",
    bgColorClass: "bg-secondary/20",
    hoverBgColorClass: "group-hover:bg-secondary/30",
    borderClass: "hover:border-secondary/50",
    hoverTextClass: "group-hover:text-secondary"
  },
  {
    icon: <Code className="text-accent text-2xl" />,
    title: "Agile Development",
    description: "I build scalable, maintainable code using modern technologies and best practices. My development process emphasizes regular iterations and continuous client feedback.",
    points: [
      "Iterative development cycles",
      "Clean, documented code",
      "Regular progress updates"
    ],
    colorClass: "text-accent",
    bgColorClass: "bg-accent/20",
    hoverBgColorClass: "group-hover:bg-accent/30",
    borderClass: "hover:border-accent/50",
    hoverTextClass: "group-hover:text-accent"
  },
  {
    icon: <Rocket className="text-green-500 text-2xl" />,
    title: "Launch & Optimization",
    description: "I ensure a smooth deployment and provide ongoing support to maximize the product's performance and user satisfaction over time.",
    points: [
      "Thorough testing",
      "Performance optimization",
      "Post-launch support"
    ],
    colorClass: "text-green-500",
    bgColorClass: "bg-green-500/20",
    hoverBgColorClass: "group-hover:bg-green-500/30",
    borderClass: "hover:border-green-500/50",
    hoverTextClass: "group-hover:text-green-500"
  }
];

export default function StrategySection() {
  return (
    <section id="strategy" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">Strategic Implementation Pathway</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-300 max-w-3xl mx-auto mt-6">
            My methodical approach to project implementation ensures consistent quality and exceptional results for every client.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Strategy Cards */}
          {strategyItems.map((item, index) => (
            <div key={index} className={`strategy-card bg-dark rounded-xl p-8 border border-gray-800 ${item.borderClass} transition-all hover:shadow-xl group`}>
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-14 h-14 ${item.bgColorClass} rounded-lg flex items-center justify-center mr-5 ${item.hoverBgColorClass} transition-colors`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-4 font-inter ${item.hoverTextClass} transition-colors`}>{item.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center">
                        <svg className={`mr-2 h-4 w-4 ${item.colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
