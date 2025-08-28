import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  // --- Scroll detection ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      const sectionPositions = sections
        .map((sectionId) => {
          const element = document.getElementById(sectionId);
          return {
            id: sectionId,
            offsetTop: element ? element.offsetTop : Infinity,
            offsetBottom: element
              ? element.offsetTop + element.offsetHeight
              : Infinity,
          };
        })
        .filter((section) => section.offsetTop !== Infinity)
        .sort((a, b) => a.offsetTop - b.offsetTop);

      let currentSection = sectionPositions[0]?.id || "about";

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

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId.replace("#", ""));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
    setActiveSection("about");
  };

  // --- Hamburger Menu ---
  const HamburgerMenu = ({ isOpen }: { isOpen: boolean }) => (
    <motion.div
      className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.span
        className="block w-6 h-0.5 bg-current"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 6 },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block w-6 h-0.5 bg-current my-1"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block w-6 h-0.5 bg-current"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -6 },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/20 shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="text-xl font-light hover:text-primary transition-colors"
            >
              {/* <span className="gradient-text">Kshitiz</span> */}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                      isActive
                        ? "text-green-500"
                        : "text-muted-foreground hover:text-green-400"
                    }`}
                  >
                    {item.name}
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500"
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
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
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/20 shadow-lg"
            >
              <div className="flex flex-col py-4 space-y-2">
                {navItems.map((item, index) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`text-left px-6 py-3 font-medium rounded-lg transition-colors ${
                        isActive
                          ? "text-green-500 bg-green-500/10"
                          : "text-muted-foreground hover:bg-green-500/5 hover:text-green-400"
                      }`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.name}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Custom CSS */}
      <style>{`
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
