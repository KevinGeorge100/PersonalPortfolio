import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark to-dark-light pt-16">
      <div className="container mx-auto px-4 sm:px-6 py-16 flex flex-col md:flex-row items-center">
        {/* Hero Text */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-inter mb-4">
            Hi, I'm <span className="text-primary">Kevin George</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-light mb-6 text-gray-400">
            Innovator | Strategist | Visionary
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto md:mx-0 text-gray-300">
            Turning complex problems into elegant solutions through strategic thinking and innovative approaches.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-3 px-6 rounded-md transition-colors"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-lg shadow-primary/20">
            <div className="absolute inset-1 rounded-full overflow-hidden bg-dark-light flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bWFsZSxwcm9mZXNzaW9uYWwscG9ydHJhaXR8fHx8fHwxNjgxNjA1NjIw&ixlib=rb-4.0.3&q=80&w=400" 
                alt="Kevin George" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
