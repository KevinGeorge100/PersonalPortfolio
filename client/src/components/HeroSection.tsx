import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark to-dark-light pt-16">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center">
          {/* Hero Text */}
          <div className="mb-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-inter mb-4">
              Hi, I'm <span className="text-primary">Kevin George</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-light mb-6 text-gray-400">
              Engineer | Developer | Problem Solver
            </h2>
            <p className="text-lg mb-8 mx-auto text-gray-300">
              Turning complex problems into elegant solutions through strategic thinking and innovative approaches.
            </p>
          </div>
          
          {/* Hero Image - Now below the headline */}
          <div className="mb-10">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-lg shadow-primary/20">
              <div className="absolute inset-1 rounded-full overflow-hidden bg-dark-light flex items-center justify-center">
                <img 
                  src="/assets/kevin_profile.jpg" 
                  alt="Kevin George" 
                  className="object-cover w-full h-full scale-110 object-center"
                  style={{ objectPosition: "center center" }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.log("Image failed to load, using fallback");
                    target.onerror = null; // prevent infinite loop
                    target.src = "https://via.placeholder.com/400x400?text=Kevin+George";
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Buttons - Now below the profile image */}
          <div className="flex flex-wrap gap-4 justify-center">
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
      </div>
    </section>
  );
}
