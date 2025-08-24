import { Github, Linkedin, Twitter, FileText, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/kshitizsikriwal", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/kshitizsikriwal", icon: Linkedin },
    { name: "Twitter", url: "https://x.com/kshitiz856", icon: Twitter },
    { name: "Medium", url: "https://medium.com/@beyondtheboard", icon: FileText }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/20 border-t border-border/20 py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <div className="text-center">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-light hover:text-primary transition-colors cursor-pointer"
            >
              <span className="gradient-text">Kshitiz</span> Sikriwal
            </button>
            <p className="text-muted-foreground mt-2">Data Scientist & ML Engineer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 duration-300"
                  aria-label={link.name}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground text-sm">
            <p className="flex items-center justify-center space-x-1">
              <span>© {currentYear} Kshitiz Sikriwal. Built with</span>
              <Heart size={14} className="text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </p>
            <p className="mt-1">
              Transforming healthcare through intelligent data analysis
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;