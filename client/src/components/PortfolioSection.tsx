import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  bgColorClass: string;
  fullDescription?: string;
  technologies?: string[];
}

// Portfolio project data
const portfolioItems: ProjectItem[] = [
  {
    id: 1,
    title: "Fitness Tracking App",
    description: "A comprehensive mobile app for tracking workouts, nutrition, and health goals.",
    category: "mobile",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    bgColorClass: "bg-primary/80",
    fullDescription: "This fitness tracking application allows users to log workouts, track nutrition, set health goals, and monitor progress over time. The app features customizable workout plans, nutrition tracking with a food database, and detailed progress analytics.",
    technologies: ["React Native", "Firebase", "Redux", "Health API Integration"]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-featured online store with inventory management and payment processing.",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    bgColorClass: "bg-secondary/80",
    fullDescription: "A comprehensive e-commerce solution built for scalability and performance. Features include product management, inventory tracking, secure payment processing, user accounts, order management, and detailed analytics.",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe API", "AWS"]
  },
  {
    id: 3,
    title: "Banking Dashboard UI",
    description: "A modern, user-friendly interface design for a banking application dashboard.",
    category: "ui",
    imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    bgColorClass: "bg-accent/80",
    fullDescription: "A clean, intuitive banking dashboard UI designed to simplify complex financial data. The interface includes account overview, transaction history, budget tracking, bill payment, and investment monitoring features.",
    technologies: ["Figma", "Adobe XD", "Sketch", "UI/UX Principles", "User Testing"]
  },
  {
    id: 4,
    title: "Travel Planning App",
    description: "A comprehensive travel companion app for planning trips, booking accommodations, and discovering local attractions.",
    category: "mobile",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    bgColorClass: "bg-green-500/80",
    fullDescription: "A feature-rich travel planning application that helps users plan trips, book accommodations and activities, and discover local attractions. It includes itinerary building, offline maps, real-time flight tracking, and social sharing capabilities.",
    technologies: ["Flutter", "Firebase", "Google Maps API", "RESTful APIs"]
  },
  {
    id: 5,
    title: "Project Management System",
    description: "A collaborative platform for teams to manage projects, track tasks, and monitor progress.",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    bgColorClass: "bg-purple-500/80",
    fullDescription: "A comprehensive project management system that enables teams to collaborate effectively, manage tasks, track progress, and meet deadlines. Features include task assignment, progress tracking, document sharing, and integrated communication tools.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "Socket.io", "Docker"]
  },
  {
    id: 6,
    title: "Education Platform UI",
    description: "A comprehensive UI/UX design for an online learning platform with course management and student progress tracking.",
    category: "ui",
    imageUrl: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    bgColorClass: "bg-red-500/80",
    fullDescription: "A user-centered design for an educational platform that focuses on accessibility and engagement. The UI includes course browsing, video lessons, interactive quizzes, progress tracking, and social learning features.",
    technologies: ["Figma", "InVision", "User Research", "Usability Testing", "Information Architecture"]
  }
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(portfolioItems);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Filter projects when filter changes
  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(portfolioItems);
    } else {
      setFilteredProjects(portfolioItems.filter(item => item.category === filter));
    }
  }, [filter]);
  
  const handleFilterClick = (category: string) => {
    setFilter(category);
  };
  
  const handleProjectClick = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };
  
  return (
    <section id="portfolio" className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-300 max-w-3xl mx-auto mt-6">
            Explore a selection of my recent projects showcasing my expertise in mobile and web development.
          </p>
        </div>
        
        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button 
            onClick={() => handleFilterClick("all")} 
            variant={filter === "all" ? "default" : "outline"} 
            className={`px-5 py-2 rounded-md transition-colors ${filter === "all" ? "bg-primary" : "bg-dark-light hover:bg-primary"}`}
          >
            All Projects
          </Button>
          <Button 
            onClick={() => handleFilterClick("mobile")} 
            variant={filter === "mobile" ? "default" : "outline"} 
            className={`px-5 py-2 rounded-md transition-colors ${filter === "mobile" ? "bg-primary" : "bg-dark-light hover:bg-primary"}`}
          >
            Mobile Apps
          </Button>
          <Button 
            onClick={() => handleFilterClick("web")} 
            variant={filter === "web" ? "default" : "outline"} 
            className={`px-5 py-2 rounded-md transition-colors ${filter === "web" ? "bg-primary" : "bg-dark-light hover:bg-primary"}`}
          >
            Web Development
          </Button>
          <Button 
            onClick={() => handleFilterClick("ui")} 
            variant={filter === "ui" ? "default" : "outline"} 
            className={`px-5 py-2 rounded-md transition-colors ${filter === "ui" ? "bg-primary" : "bg-dark-light hover:bg-primary"}`}
          >
            UI/UX Design
          </Button>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card relative overflow-hidden rounded-xl group" data-category={project.category}>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className={`project-overlay absolute inset-0 ${project.bgColorClass} opacity-0 transition-opacity flex flex-col justify-center items-center p-6 text-center`}>
                <h3 className="text-xl font-bold mb-2 text-white font-inter">{project.title}</h3>
                <p className="text-white/90 mb-4">{project.description}</p>
                <Button 
                  onClick={() => handleProjectClick(project)} 
                  className="bg-white hover:bg-white/90 text-primary px-5 py-2 rounded-md font-medium transition-colors"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-dark-light max-w-4xl w-full m-4 rounded-xl overflow-hidden relative">
          <DialogClose className="absolute top-4 right-4 text-white hover:text-primary bg-dark/50 hover:bg-dark w-10 h-10 rounded-full flex items-center justify-center transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>
          
          {selectedProject && (
            <div className="project-details p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-gray-400">{selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)} Project</DialogDescription>
              </DialogHeader>
              
              <div className="mt-6">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-auto rounded-lg mb-6"
                />
                
                <h4 className="text-lg font-semibold text-white mb-2">Project Overview</h4>
                <p className="text-gray-300 mb-6">{selectedProject.fullDescription}</p>
                
                <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies?.map((tech, index) => (
                    <span key={index} className="bg-dark px-3 py-1 rounded-full text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <style jsx>{`
        .project-card:hover .project-overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
