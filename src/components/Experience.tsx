import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Data Science Research Intern",
      company: "National Institute of Technology (NIT), Kurukshetra",
      location: "Kurukshetra, India",
      period: "June 2025 - Present",
      type: "Research Internship",
      description: "Leading development of LLM-based recommendation systems for healthcare applications.",
      achievements: [
        "Developed LLM-based recommendation systems for healthcare using Mistral-7B and Nous-Hermes-2",
        "Generated synthetic meal and activity data for patients with diabetes, cholesterol, and asthma",
        "Applied BERT embeddings and cosine similarity for personalized recommendations",
        "Conducted latent space analysis to connect nutrition and physical activity domains"
      ],
      skills: ["Python", "LLMs", "Healthcare Analytics", "BERT", "Recommendation Systems", "Research"]
    },
    {
  id: 2,
  role: "Data Science Intern",
  company: "Cognifyz Technologies",
  location: "Remote",
  period: "April 2025 - May 2025",
  type: "Internship",
  description: "Worked on diverse data science projects, applying statistical methods and analytical tools to extract insights and support data-driven decision-making.",
  achievements: [
    "Collected, cleaned, and preprocessed large datasets for analysis and model building",
    "Applied Python libraries (Pandas, Seaborn) for exploratory data analysis and visualization",
    "Developed data-driven solutions to business problems through statistical analysis",
    "Contributed to building Flask-based prototypes for deploying models and insights",
    "Collaborated with the team to transform raw data into actionable insights"
  ],
  skills: ["Python", "Pandas", "Seaborn", "Flask", "Data Analysis", "Big Data Analytics", "Business Analytics"]
},

    {
      id: 3,
      role: "Frontend Web Developer Intern",
      company: "Urja Mobility, Delhi",
      location: "Delhi, India", 
      period: "July 2024 - September 2024",
      type: "Development Internship",
      description: "Enhanced user experience and optimized web applications for the mobility platform.",
      achievements: [
        "Conducted user research and improved features for the landing page, improving user engagement",
        "Led A/B testing of UI components, increasing conversion rates",
        "Developed an internal admin portal to streamline operations and reduce processing time",
        "Collaborated with cross-functional teams to align product roadmap with business goals"
      ],
      skills: ["JavaScript", "React", "UI/UX", "A/B Testing", "Frontend Development", "User Research"]
    },
    {
  id: 4,
  role: "Business Development Assistant",
  company: "SolutionGraph",
  location: "Delhi, India · Remote",
  period: "July 2023 - August 2023",
  type: "Internship",
  description: "Supported business development initiatives through data-driven insights and market analysis.",
  achievements: [
    "collaborated with team to identify potential client opportunities",
    "Assisted in market research to support business strategy",
    "Collaborated with the team to streamline lead generation and outreach processes"
  ],
  skills: ["Team work", "Business Development", "Market Research"]
},
{
  id: 4,
  role: "Student Ambassador",
  company: "Indian Institute of Technology, Kharagpur",
  location: "Gurugram · Remote",
  period: "August 2023 - Present",
  type: "Part-time",
  description: "Represented IIT Kharagpur as a Student Ambassador for NSSC'23, serving as a bridge between the institute and students to promote engagement and participation.",
  achievements: [
    "Promoted IIT Kharagpur’s NSSC’23 initiatives within local institutions",
    "Acted as the primary liaison to strengthen communication and collaboration",
    "Facilitated outreach efforts to expand student participation in national-level programs",
    "Contributed to go-to-market strategies and student engagement campaigns"
  ],
  skills: ["Customer Relationship Management (CRM)", "Teamwork", "IT Business Analysis", "Wireframing", "Go-to-Market Strategy"]
}

  ];

  const education = {
    degree: "B.Tech, Computer Science & Technology",
    institution: "Central University of Haryana",
    location: "Mahendergarh, India",
    period: "Nov 2022 - Dec 2025",
    description: "Focused on machine learning, data science, and software engineering with specialization in healthcare applications."
  };

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-card/10 to-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg prose-custom max-w-3xl mx-auto">
            My journey through research, development, and continuous learning in data science and technology.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-medium mb-8 text-primary">Professional Experience</h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.id} 
                className="card-elevated animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {exp.role}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <div className="flex items-center text-muted-foreground">
                          <Building size={16} className="mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-3">
                        <CalendarDays size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge variant="secondary" className="mb-4">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardDescription className="prose-custom leading-relaxed">
                    {exp.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-medium mb-3 text-accent">Key Achievements</h4>
                    <ul className="space-y-2 prose-custom">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 text-accent">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="text-xs border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-medium mb-8 text-primary">Education</h3>
          
          <Card className="card-elevated animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    {education.degree}
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <div className="flex items-center text-muted-foreground">
                      <Building size={16} className="mr-2" />
                      <span className="font-medium">{education.institution}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin size={16} className="mr-2" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <CalendarDays size={16} className="mr-2" />
                    <span>{education.period}</span>
                  </div>
                  <Badge variant="secondary">
                    Undergraduate
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <CardDescription className="prose-custom leading-relaxed">
                {education.description}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;