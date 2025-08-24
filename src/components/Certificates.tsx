import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "IWMI Innovation Challenge",
      issuer: "IWMI (International Water Management Institute)",
      year: "2024",
      description: "Developed an application under the circular bio-economy theme for efficient collection of agricultural waste.",
      link: "https://drive.google.com/file/d/1BJDh2YjsdSuqVRWmW9BDJ5bRorwRnkqM/view?usp=sharing",
      tags: ["Innovation", "Sustainability", "Bio-economy"]
    },
    {
      id: 2,
      title: "Asteroid Venture – NSSC",
      issuer: "Indian Institute of Technology, Kharagpur",
      year: "2023",
      description: "Studied asteroid compositions, built mineral-based visualizations, and proposed a framework for potential asteroid mining.",
      link: "https://drive.google.com/file/d/1tZr1d0MhcPVj4R-0xUUXhprD6W8q5aO5/view?usp=sharing",
      tags: ["Space Research", "Visualization", "Mining"]
    },
    {
      id: 3,
      title: "Google Jam – AI Study",
      issuer: "Google",
      year: "2023",
      description: "Explored AI concepts through Google Jam study program and built a practical AI component.",
      link: "https://drive.google.com/file/d/1Qfz5JiuJFhjnLGpyGXCXBRkJTHw3X-cf/view?usp=sharing",
      tags: ["AI", "Google Jam", "Applied Learning"]
    }
  ];

  return (
    <section id="certificates" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Certificates & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg prose-custom max-w-3xl mx-auto">
            Recognitions and certifications earned through innovation challenges, competitions, and applied learning programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.id} 
              className="card-elevated group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary">{cert.issuer}</Badge>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="h-8 w-8 p-0 hover:bg-primary/10"
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <ExternalLink size={16} />
                  </Button>
                </div>

                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </CardTitle>

                <div className="flex items-center text-sm text-muted-foreground mt-2">
                  <Calendar size={14} className="mr-1" />
                  {cert.year}
                </div>

                <CardDescription className="prose-custom leading-relaxed mt-3">
                  {cert.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
