import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className="fixed w-full bg-dark/90 backdrop-blur-md z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold font-inter text-white">
          Kevin<span className="text-primary">George</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className={`nav-link text-text-light hover:text-white transition-colors ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
          <a href="#about" className={`nav-link text-text-light hover:text-white transition-colors ${activeSection === 'about' ? 'active' : ''}`}>About</a>
          <a href="#milestones" className={`nav-link text-text-light hover:text-white transition-colors ${activeSection === 'milestones' ? 'active' : ''}`}>Milestones</a>
          <a href="#strategy" className={`nav-link text-text-light hover:text-white transition-colors ${activeSection === 'strategy' ? 'active' : ''}`}>Strategy</a>
          <a href="#portfolio" className={`nav-link text-text-light hover:text-white transition-colors ${activeSection === 'portfolio' ? 'active' : ''}`}>Portfolio</a>
          <a href="#contact" className={`nav-link text-text-light hover:text-white transition-colors ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-light focus:outline-none" 
          onClick={toggleMobileMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-dark-light border-t border-gray-800`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a href="#home" className="py-2 text-text-light hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" className="py-2 text-text-light hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#milestones" className="py-2 text-text-light hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Milestones</a>
          <a href="#strategy" className="py-2 text-text-light hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Strategy</a>
          <a href="#portfolio" className="py-2 text-text-light hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
          <a href="#contact" className="py-2 text-text-light hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </div>
      
      <style jsx>{`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #3a86ff;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
}
