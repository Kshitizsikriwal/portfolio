import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter, FileText, Play } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const playVideoOnce = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 30%, transparent 70%),
                      linear-gradient(135deg, #000000 0%, #111111 50%, #1a1a1a 100%)`,
        }}
      />

      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal lines */}
        <div 
          className="absolute w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-line-flow"
          style={{
            height: '200vh',
            left: '10%',
            top: '-50vh',
            transform: `rotate(15deg) translateY(${mousePosition.y * 0.5}px)`,
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-px bg-gradient-to-b from-transparent via-green-500/15 to-transparent animate-line-flow"
          style={{
            height: '200vh',
            left: '30%',
            top: '-50vh',
            transform: `rotate(-20deg) translateY(${mousePosition.y * 0.3}px)`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-line-flow"
          style={{
            height: '200vh',
            right: '20%',
            top: '-50vh',
            transform: `rotate(25deg) translateY(${mousePosition.y * 0.4}px)`,
            animationDelay: '2s'
          }}
        />
        
        {/* Horizontal flowing lines */}
        <div 
          className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-horizontal-flow"
          style={{
            width: '150%',
            top: '20%',
            left: '-25%',
            transform: `translateX(${mousePosition.x * 0.2}px)`
          }}
        />
        <div 
          className="absolute h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-horizontal-flow"
          style={{
            width: '120%',
            top: '60%',
            left: '-10%',
            animationDelay: '3s',
            transform: `translateX(${mousePosition.x * -0.15}px)`
          }}
        />
        
        {/* Geometric shapes */}
        <div 
          className="absolute w-32 h-32 border border-blue-500/10 rotate-45 animate-rotate-slow"
          style={{
            top: '15%',
            right: '10%',
            transform: `rotate(45deg) translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        />
        <div 
          className="absolute w-20 h-20 border border-green-500/15 animate-rotate-reverse"
          style={{
            bottom: '20%',
            left: '15%',
            transform: `rotate(-45deg) translate(${mousePosition.x * -0.08}px, ${mousePosition.y * 0.06}px)`
          }}
        />
        
        {/* Connected dots */}
        <div className="absolute top-1/4 left-1/4">
          <div className="relative">
            <div className="w-2 h-2 bg-blue-400/40 rounded-full animate-pulse" />
            <div 
              className="absolute top-1 left-1 w-px bg-gradient-to-br from-blue-400/40 to-transparent animate-line-draw"
              style={{ height: '80px', transform: 'rotate(45deg)' }}
            />
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float transition-transform duration-1000 shadow-lg shadow-blue-400/20"
          style={{
            top: `${25 + (mousePosition.y - 50) * 0.3}%`,
            left: `${25 + (mousePosition.x - 50) * 0.2}%`,
            transform: `translate(${(mousePosition.x - 50) * 0.8}px, ${(mousePosition.y - 50) * 0.6}px)`,
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-float transition-transform duration-1200 shadow-md shadow-purple-400/30"
          style={{
            top: `${75 + (mousePosition.y - 50) * 0.25}%`,
            right: `${25 + (mousePosition.x - 50) * 0.15}%`,
            animationDelay: "1s",
            transform: `translate(${(mousePosition.x - 50) * -0.7}px, ${(mousePosition.y - 50) * 0.5}px)`,
          }}
        />
        <div
          className="absolute w-3 h-3 bg-blue-400/20 rounded-full animate-pulse transition-transform duration-1500 shadow-xl shadow-blue-400/10"
          style={{
            top: `${40 + (mousePosition.y - 50) * 0.4}%`,
            left: `${60 + (mousePosition.x - 50) * 0.3}%`,
            transform: `translate(${(mousePosition.x - 50) * -1.2}px, ${(mousePosition.y - 50) * 0.8}px)`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className="space-y-8 transition-transform duration-300 relative"
            style={{
              transform: `translate(${(mousePosition.x - 50) * 0.04}px, ${(mousePosition.y - 50) * 0.02}px)`,
            }}
          >
            {/* Decorative line for title */}
            <div className="absolute -left-6 top-0 w-1 h-24 bg-gradient-to-b from-green-400 to-blue-500 animate-height-grow" />
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-tight relative">
                <span>
                  <span className="text-green-400">Kshitiz</span>{" "}
                  <span className="text-white">Sikriwal</span>
                </span>
                {/* Underline animation */}
                <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-green-400 via-blue-500 to-transparent animate-width-grow" />
              </h1>
              
              <div className="relative">
                <p className="text-xl lg:text-2xl text-gray-300 font-light">Data Scientist</p>
                {/* Side accent line */}
                <div className="absolute -right-8 top-1/2 w-6 h-px bg-green-400/60 animate-pulse" />
              </div>

              {/* Skills with connecting lines */}
              <div className="flex items-center space-x-6 py-4 relative">
                {/* Connecting line between skills */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600/30 to-transparent animate-line-flow" />
                
                <div className="flex items-center space-x-2 text-sm text-gray-400 relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-500/30">
                    ML
                  </div>
                  <span>Machine Learning</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400 relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-md flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-green-500/30">
                    NLP
                  </div>
                  <span>NLP</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400 relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-md flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-red-500/30">
                    AI
                  </div>
                  <span>Healthcare AI</span>
                </div>
              </div>

              <div className="space-y-6 max-w-xl relative">
                {/* Quote-like decorative lines */}
                <div className="absolute -left-4 top-2 w-1 h-8 bg-gradient-to-b from-green-400/60 to-transparent" />
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hello there! My name is Kshitiz and I'm a Data Scientist Research Intern at{" "}
                  <strong className="text-white">NIT Kkr</strong>, living in Gurugram. I grew up fascinated by data and love computers and artificial intelligence.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Transforming healthcare through intelligent data analysis, NLP, and machine learning. Currently pursuing B.Tech in Computer Science while building innovative solutions at the intersection of technology and healthcare.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 relative">
              {/* Background accent line */}
              <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-green-400/30 via-transparent to-blue-400/30 animate-pulse" />
              
              <Button variant="outline" className="bg-gray-800/50 border-gray-600 hover:bg-gray-700 hover:border-gray-500 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300" asChild>
                <a href="mailto:kshitizsikriwal16@gmail.com" className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>Email</span>
                </a>
              </Button>
              <Button variant="outline" className="bg-gray-800/50 border-gray-600 hover:bg-gray-700 hover:border-gray-500 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300" asChild>
                <a href="https://x.com/kshitiz856" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <Twitter size={16} />
                  <span>Twitter</span>
                </a>
              </Button>
              <Button variant="outline" className="bg-gray-800/50 border-gray-600 hover:bg-gray-700 hover:border-gray-500 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300" asChild>
                <a href="https://linkedin.com/in/kshitizsikriwal" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" className="bg-gray-800/50 border-gray-600 hover:bg-gray-700 hover:border-gray-500 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300" asChild>
                <a href="https://drive.google.com/file/d/1jlxntWpGyXSSMojmGgwQYBkhliTBg6oZ/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <FileText size={16} />
                  <span>Resume</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Video Section */}
          <div
            className="relative flex justify-center lg:justify-end transition-transform duration-500"
            style={{
              transform: `translate(${(mousePosition.x - 50) * -0.03}px, ${(mousePosition.y - 50) * -0.02}px)`,
            }}
          >
            <div className="relative">
              {/* Orbital rings */}
              <div className="absolute -inset-8 opacity-30">
                <div className="absolute inset-0 rounded-full border border-dashed border-blue-400/20 animate-rotate-slow" />
              </div>
              <div className="absolute -inset-12 opacity-20">
                <div className="absolute inset-0 rounded-full border border-dotted border-green-400/15 animate-rotate-reverse" />
              </div>

              {/* Animated border */}
              <div className="absolute -inset-4 opacity-60">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, rgba(255,255,255,0.8), transparent, rgba(255,255,255,0.4), transparent)`,
                    animation: "spin 8s linear infinite",
                  }}
                />
                <div className="absolute inset-2 bg-black rounded-full" />
              </div>

              {/* Video container */}
              <div
                className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-white/20 cursor-pointer shadow-2xl shadow-blue-500/10"
                onClick={playVideoOnce}
              >
                <video
                  ref={videoRef}
                  src="/assets/Avatar IV Video.mp4"
                  className="w-full h-full object-cover"
                  muted={false}
                  loop={false}
                  playsInline
                />
                {/* Play overlay button */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <button
                    className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      playVideoOnce();
                    }}
                    aria-label="Play video"
                  >
                    <Play size={28} className="text-black ml-1" />
                  </button>
                </div>
              </div>

              {/* Connecting lines to video */}
              <div className="absolute -top-4 -left-4 w-8 h-8">
                <div className="w-full h-px bg-gradient-to-r from-green-400/60 to-transparent animate-pulse" />
                <div className="w-px h-full bg-gradient-to-b from-green-400/60 to-transparent animate-pulse" />
              </div>

              {/* Handwritten-style text */}
              <div className="absolute -bottom-8 -left-12 transform rotate-12">
                <p className="text-white/70 font-handwriting text-lg" style={{ fontFamily: "cursive" }}>
                  Let me introduce
                </p>
                <p className="text-white/70 font-handwriting text-lg ml-4" style={{ fontFamily: "cursive" }}>
                  myself
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce hover:scale-110 duration-300"
        style={{
          transform: `translate(calc(-50% + ${(mousePosition.x - 50) * 0.1}px), ${(mousePosition.y - 50) * 0.05}px)`,
        }}
      >
        <ArrowDown size={24} />
      </button>

      {/* Enhanced Animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes line-flow {
          0% { opacity: 0; transform: translateY(-100px); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(100px); }
        }
        @keyframes horizontal-flow {
          0% { opacity: 0; transform: translateX(-100px); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateX(100px); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes width-grow {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes height-grow {
          from { height: 0px; }
          to { height: 96px; }
        }
        @keyframes line-draw {
          from { height: 0px; opacity: 0; }
          to { height: 80px; opacity: 1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-line-flow {
          animation: line-flow 6s ease-in-out infinite;
        }
        .animate-horizontal-flow {
          animation: horizontal-flow 8s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        .animate-rotate-reverse {
          animation: rotate-reverse 15s linear infinite;
        }
        .animate-width-grow {
          animation: width-grow 2s ease-out 0.5s both;
        }
        .animate-height-grow {
          animation: height-grow 1.5s ease-out 0.3s both;
        }
        .animate-line-draw {
          animation: line-draw 2s ease-out 1s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;