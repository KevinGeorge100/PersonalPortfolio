import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MilestonesSection from "@/components/MilestonesSection";
import StrategySection from "@/components/StrategySection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Smooth scroll for navigation links
    const handleNavLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleNavLinkClick);
    
    return () => {
      document.removeEventListener('click', handleNavLinkClick);
    };
  }, []);
  
  return (
    <div className="bg-dark text-text-light font-roboto">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MilestonesSection />
      <StrategySection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
