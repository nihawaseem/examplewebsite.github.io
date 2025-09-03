import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Calendar, Award, GraduationCap } from "lucide-react";

const About = () => {
  const skills = [
    "Pure Mathematics", "Applied Mathematics", "Statistical Analysis", 
    "Mathematical Modeling", "Differential Equations", "Linear Algebra",
    "Complex Analysis", "Number Theory", "Topology", "Abstract Algebra"
  ];

  const education = [
    {
      institution: "University Name",
      degree: "Ph.D. in Mathematics",
      period: "2020 - 2024",
      focus: "Focus: Algebraic Topology and Category Theory"
    },
    {
      institution: "University Name",
      degree: "M.S. in Applied Mathematics",
      period: "2018 - 2020",
      focus: "Thesis: Differential Geometry Applications"
    },
    {
      institution: "University Name",
      degree: "B.S. in Mathematics",
      period: "2014 - 2018",
      focus: "Magna Cum Laude, Phi Beta Kappa"
    }
  ];

  const experience = [
    {
      role: "Research Mathematician",
      company: "Research Institute",
      period: "2024 - Present",
      description: "Leading research in advanced mathematical theories with applications to quantum computing and cryptography."
    },
    {
      role: "Graduate Teaching Assistant",
      company: "University Name",
      period: "2020 - 2024",
      description: "Taught undergraduate mathematics courses including Calculus, Linear Algebra, and Differential Equations."
    },
    {
      role: "Mathematical Consultant",
      company: "Tech Company",
      period: "2019 - 2020",
      description: "Developed mathematical models for machine learning algorithms and optimization problems."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-theorem shadow-theorem flex items-center justify-center">
              <span className="text-4xl font-bold text-white">∑</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate mathematician exploring the intersection of pure theory and practical applications, 
              always seeking elegant solutions to complex problems.
            </p>
          </div>

          {/* Bio Section */}
          <Card className="p-8 mb-8 bg-card/50 backdrop-blur-sm border-primary/10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
              <span className="text-primary">∫</span>
              <span>Mathematical Journey</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My fascination with mathematics began in childhood when I discovered that numbers could tell stories 
              as compelling as any novel. This curiosity evolved into a deep appreciation for the elegance of 
              mathematical proofs and the beauty hidden within abstract concepts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, I work at the intersection of pure mathematics and practical applications, finding joy in 
              both the theoretical beauty of advanced mathematical concepts and their real-world implementations 
              in technology, science, and beyond.
            </p>
          </Card>

          {/* Contact Info */}
          <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm border-theorem-pink/20">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-theorem-pink" />
                <span className="text-sm">your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-theorem-pink" />
                <span className="text-sm">Your City, Country</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-theorem-pink" />
                <span className="text-sm">Available for collaboration</span>
              </div>
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-8 mb-8 bg-card/50 backdrop-blur-sm border-accent/20">
            <h2 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
              <span className="text-accent">∇</span>
              <span>Mathematical Expertise</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-accent/10 text-accent-foreground border-accent/20 hover:bg-accent/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Education */}
          <Card className="p-8 mb-8 bg-card/50 backdrop-blur-sm border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span>Education</span>
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.focus}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Experience */}
          <Card className="p-8 mb-8 bg-card/50 backdrop-blur-sm border-theorem-pink/20">
            <h2 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
              <Award className="w-6 h-6 text-theorem-pink" />
              <span>Professional Experience</span>
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-theorem-pink/20 pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <Badge variant="outline" className="border-theorem-pink/30 text-theorem-pink">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-theorem">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;