import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter, FileText, Mail, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/kshitizsikriwal",
      icon: Github,
      description: "View my projects and contributions"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/kshitizsikriwal",
      icon: Linkedin,
      description: "Connect with me professionally"
    },
    {
      name: "Twitter",
      url: "https://x.com/kshitiz856",
      icon: Twitter,
      description: "Follow my thoughts and updates"
    },
    {
      name: "Medium",
      url: "https://medium.com/@beyondtheboard",
      icon: FileText,
      description: "Read my latest articles and insights"
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_gbopqrn", // ✅ your service ID
        "template_utq0dj", // ✅ your template ID
        e.currentTarget,
        "GAVgvcI6zjQZ0GiTR" // ✅ your public key
      )

      .then(
        () => {
          setLoading(false);
          alert("✅ Message sent successfully!");
          e.currentTarget.reset();
        },
        (err) => {
          setLoading(false);
          alert("❌ Failed to send message. " + JSON.stringify(err));
        }
      );
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-card/10">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg prose-custom max-w-3xl mx-auto">
            Interested in collaborating on data science projects, discussing research opportunities,
            or just want to chat about the future of AI in healthcare? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT SIDE */}
            <div className="animate-slide-up">
              {/* Contact Info */}
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-6 text-primary">Get in Touch</h3>
                <div className="space-y-4 prose-custom">
                  <div className="flex items-center">
                    <MapPin size={20} className="text-primary mr-3" />
                    <span>Gurugram, Haryana, India</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={20} className="text-primary mr-3" />
                    <a
                      href="mailto:kshitizsikriwal16@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      kshitizsikriwal16@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={20} className="text-primary mr-3" />
                    <span>Available for opportunities and collaborations</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h4 className="text-xl font-medium mb-6 text-primary">Connect Online</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <Card
                        key={link.name}
                        className="card-elevated cursor-pointer group animate-scale-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => window.open(link.url, "_blank")}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <IconComponent
                              size={24}
                              className="text-primary group-hover:scale-110 transition-transform"
                            />
                            <div>
                              <h5 className="font-medium group-hover:text-primary transition-colors">
                                {link.name}
                              </h5>
                              <p className="text-xs text-muted-foreground">{link.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (Form) */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription className="prose-custom">
                    Drop me a line and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium mb-2 block">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium mb-2 block">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me more about your project or how we can collaborate..."
                        rows={6}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary resize-none"
                      />
                    </div>

                    <Button type="submit" className="btn-primary w-full" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
