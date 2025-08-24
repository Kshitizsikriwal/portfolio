import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock } from "lucide-react";

const Blog = () => {
  // Placeholder blog posts - in a real implementation, you'd fetch these from Medium API
  const blogPosts = [
    {
      id: 1,
      title: "Building Healthcare Recommendation Systems with LLMs",
      excerpt: "Exploring how large language models can transform personalized healthcare recommendations by connecting nutrition and physical activity data.",
      date: "2024-12-15",
      readTime: "8 min read",
      tags: ["Healthcare", "LLMs", "Machine Learning", "Recommendations"],
      link: "https://medium.com/@beyondtheboard",
      featured: true
    },
    {
      id: 2,
      title: "RAG Chatbots for Sustainability Research", 
      excerpt: "Deep dive into building context-aware chatbots using RAG architecture, FastAPI, and LangChain for environmental research applications.",
      date: "2024-11-28",
      readTime: "12 min read",
      tags: ["NLP", "RAG", "FastAPI", "Sustainability"],
      link: "https://medium.com/@beyondtheboard",
      featured: true
    },
    {
      id: 3,
      title: "Data Visualization Best Practices for Healthcare Analytics",
      excerpt: "Essential principles and techniques for creating compelling healthcare dashboards that drive actionable insights.",
      date: "2024-10-20",
      readTime: "6 min read", 
      tags: ["Data Visualization", "Healthcare", "Tableau", "Analytics"],
      link: "https://medium.com/@beyondtheboard",
      featured: false
    },
    {
      id: 4,
      title: "The Future of AI in Medical Diagnosis",
      excerpt: "Examining the potential and challenges of artificial intelligence in revolutionizing medical diagnosis and patient care.",
      date: "2024-09-15",
      readTime: "10 min read",
      tags: ["AI", "Healthcare", "Medical Technology", "Future Tech"],
      link: "https://medium.com/@beyondtheboard", 
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-lg prose-custom max-w-3xl mx-auto">
            Thoughts, tutorials, and insights on data science, machine learning, and healthcare technology. 
            Follow my journey and learnings in the rapidly evolving world of AI.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium mb-8 text-primary">Featured Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="card-elevated group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">Featured</Badge>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-8 w-8 p-0 hover:bg-primary/10"
                      onClick={() => window.open(post.link, '_blank')}
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <CardDescription className="prose-custom leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start p-0 h-auto text-primary hover:text-primary/80"
                    onClick={() => window.open(post.link, '_blank')}
                  >
                    Read full article →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-12">
          <h3 className="text-2xl font-medium mb-8 text-primary">Recent Posts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {recentPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="card-elevated group animate-scale-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-6 w-6 p-0 hover:bg-primary/10"
                      onClick={() => window.open(post.link, '_blank')}
                    >
                      <ExternalLink size={12} />
                    </Button>
                  </div>
                  
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  
                  <CardDescription className="prose-custom text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start p-0 h-auto text-sm text-primary hover:text-primary/80"
                    onClick={() => window.open(post.link, '_blank')}
                  >
                    Read more →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            onClick={() => window.open('https://medium.com/@beyondtheboard', '_blank')}
          >
            <ExternalLink size={16} className="mr-2" />
            View All Articles on Medium
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;