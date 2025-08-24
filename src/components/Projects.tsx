import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cross-Domain Healthcare Recommender",
      description: "Built a multi-LLM recommendation system linking nutrition and yoga using disease-specific embeddings. Generated synthetic session data with DistilGPT, LLaMA, and Nous Hermes, achieving high accuracy through similarity metrics.",
      tags: ["Python", "LLMs", "Healthcare", "Recommendation Systems", "DistilGPT", "LLaMA"],
      category: "Machine Learning",
      featured: true,
      links: {
        github: "https://github.com/Kshitizsikriwal/crossdomain-recommender",
        demo: "#"
      }
    },
    {
      id: 2, 
      title: "Sustainability Chatbot",
      description: "Developed a RAG chatbot with FastAPI, LangChain, and FAISS for sustainability research papers and reports using Sentence-Transformer embeddings. Integrated Ollama LLM Mistral 7B for context-aware responses.",
      tags: ["FastAPI", "LangChain", "FAISS", "NLP", "RAG", "Mistral"],
      category: "NLP & AI",
      featured: true,
      links: {
        github: "https://github.com/Kshitizsikriwal/sustainabot",
        demo: "#"
      }
    },
    {
      id: 3,
      title: "Hospital Readmission Analysis Dashboard",
      description: "Designed SQL queries to analyze structured datasets (retail, healthcare). Built Tableau dashboards to visualize KPIs like sales trends and customer segmentation with interactive filtering.",
      tags: ["SQL", "Tableau", "Data Visualization", "Healthcare Analytics", "Business Intelligence"],
      category: "Data Analytics",
      featured: false,
      links: {
        github: "https://github.com/Kshitizsikriwal/hospital-readmission-analysis",
        demo: "#"
      }
    },
    {
      id: 4,
      title: "trading-bot",
      description: "Developed a crypto trading bot with both CLI and Streamlit interfaces. The bot connects to Binance Testnet for safe strategy simulation, featuring real-time dashboards, configurable parameters, and performance monitoring.",
      tags: ["Python", "Streamlit", "Binance API", "Trading Strategies", "CLI"],
      category: "Algorithmic Trading",
      featured: false,
      links: {
        github: "https://github.com/Kshitizsikriwal/trading-bot",
        demo: "https://trading-bot-xjmzvnkhd2hfpnhe5waerg.streamlit.app/"
      }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg prose-custom max-w-3xl mx-auto">
            Explore my latest work in data science, machine learning, and healthcare analytics. 
            Each project demonstrates practical solutions to real-world challenges.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-elevated group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-8 w-8 p-0 hover:bg-primary/10"
                    >
                      <Github size={16} />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-8 w-8 p-0 hover:bg-primary/10"
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="prose-custom leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs border-primary/20 hover:border-primary/40"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-medium mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="card-elevated group animate-scale-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-1">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-6 w-6 p-0 hover:bg-primary/10"
                      >
                        <Github size={12} />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-6 w-6 p-0 hover:bg-primary/10"
                      >
                        <ExternalLink size={12} />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="prose-custom text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="outline" className="text-xs border-primary/20">
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
          >
            <Github size={16} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
