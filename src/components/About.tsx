import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "Python", "PyTorch", "Transformers", "Scikit-learn", "Pandas", "NumPy",
    "SQL", "Tableau", "Excel", "Matplotlib", "Seaborn", "Git",
    "FastAPI", "LangChain", "Hugging Face", "Streamlit", "JavaScript", "React"
  ];

  const categories = [
    {
      title: "Machine Learning & AI",
      items: ["Deep Learning", "NLP", "Computer Vision", "Recommendation Systems", "LLMs", "Chatbots"]
    },
    {
      title: "Data Analysis & Visualization", 
      items: ["Statistical Analysis", "Data Mining", "Dashboard Creation", "KPI Analysis", "Predictive Modeling"]
    },
    {
      title: "Healthcare Analytics",
      items: ["Medical Data Analysis", "Patient Analytics", "Healthcare ML", "Clinical Research", "Biostatistics"]
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-card/10">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg prose-custom max-w-3xl mx-auto">
              I'm a passionate data scientist currently pursuing my B.Tech in Computer Science & Technology 
              at Central University of Haryana. My journey combines academic excellence with hands-on experience 
              in transforming complex healthcare data into actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-medium mb-6 text-primary">Current Focus</h3>
              <div className="space-y-4 prose-custom">
                <p>
                  🎓 <strong>Education:</strong> Final year B.Tech student (Nov 2022 - Dec 2025) with a focus on 
                  machine learning and data science applications in healthcare.
                </p>
                <p>
                  🔬 <strong>Research:</strong> Currently working as a Data Science Research Intern at NIT Kurukshetra, 
                  developing LLM-based recommendation systems for healthcare using advanced models like Mistral-7B and Nous-Hermes-2.
                </p>
                <p>
                  💡 <strong>Innovation:</strong> Building intelligent chatbots and recommendation systems that bridge 
                  the gap between complex medical data and user-friendly healthcare solutions.
                </p>
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-medium mb-6 text-primary">Expertise Areas</h3>
              <div className="space-y-6">
                {categories.map((category, index) => (
                  <div key={index} className="card-elevated p-4 rounded-lg">
                    <h4 className="font-medium mb-3 text-accent">{category.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-medium mb-8 text-center text-primary">Technical Skills</h3>
            <div className="card-elevated p-8 rounded-xl">
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="px-4 py-2 text-sm border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;