import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "Certificates", href: "#certificates" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection
      
      // Find all sections and their positions
      const sectionPositions = sections
        .map(sectionId => {
          const element = document.getElementById(sectionId);
          return {
            id: sectionId,
            offsetTop: element ? element.offsetTop : Infinity,
            offsetBottom: element ? element.offsetTop + element.offsetHeight : Infinity
          };
        })
        .filter(section => section.offsetTop !== Infinity)
        .sort((a, b) => a.offsetTop - b.offsetTop); // Sort by position on page
      
      // Find the current section based on scroll position
      let currentSection = sectionPositions[0]?.id || 'about';
      
      for (let i = 0; i < sectionPositions.length; i++) {
        const section = sectionPositions[i];
        const nextSection = sectionPositions[i + 1];
        
        if (scrollPosition >= section.offsetTop) {
          if (!nextSection || scrollPosition < nextSection.offsetTop) {
            currentSection = section.id;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Initial call to set correct section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId.replace('#', ''));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setActiveSection("about");
  };

  // Custom hamburger menu component
  const HamburgerMenu = ({ isOpen }: { isOpen: boolean }) => (
    <div className="w-6 h-6 flex flex-col justify-center items-center cursor-pointer">
      <div
        className={`w-6 h-0.5 bg-current transition-all duration-300 transform origin-center ${
          isOpen ? 'rotate-45 translate-y-1.5' : ''
        }`}
      />
      <div
        className={`w-6 h-0.5 bg-current transition-all duration-300 transform origin-center my-1 ${
          isOpen ? 'opacity-0 scale-0' : ''
        }`}
      />
      <div
        className={`w-6 h-0.5 bg-current transition-all duration-300 transform origin-center ${
          isOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`}
      />
    </div>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border/20 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="text-xl font-light hover:text-primary transition-colors"
            >
              {/* <span className="gradient-text">Kshitiz</span> Sikriwal */}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                      isActive 
                        ? 'text-green-500' 
                        : 'text-muted-foreground hover:text-green-400'
                    }`}
                  >
                    {item.name}
                    {/* Active indicator */}
                    <div
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500 transition-all duration-300 transform origin-center ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                    {/* Hover effect */}
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400/50 transition-all duration-300 transform origin-center scale-x-0 hover:scale-x-100" />
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2 hover:bg-transparent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <HamburgerMenu isOpen={isMobileMenuOpen} />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 border-t border-border/20 bg-background/95 backdrop-blur-md">
              <div className="flex flex-col space-y-1">
                {navItems.map((item, index) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`relative text-left px-4 py-3 font-medium transition-all duration-300 transform hover:scale-[1.02] hover:bg-green-500/10 ${
                        isActive 
                          ? 'text-green-500 bg-green-500/5' 
                          : 'text-muted-foreground hover:text-green-400'
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-1 h-6 bg-green-500 transition-all duration-300 ${
                            isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                          }`}
                        />
                        <span>{item.name}</span>
                      </div>
                      
                      {/* Mobile active indicator */}
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1 bg-green-500 transition-all duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom CSS */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #10b981, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </>
  );
};

export default Navigation;