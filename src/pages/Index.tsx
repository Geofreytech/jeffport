
import { useState, useEffect } from "react";
import { Github, ExternalLink, Mail, MapPin, Code, Database, Server, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const featuredProjects = [
    {
      name: "WhatsApp Automation Bot",
      description: "Advanced WhatsApp automation system for business communication and customer service",
      language: "PHP",
      topics: ["automation", "whatsapp", "api"]
    },
    {
      name: "Student Management System",
      description: "Comprehensive student information management platform with Laravel backend",
      language: "PHP",
      topics: ["laravel", "education", "management"]
    },
    {
      name: "GlobalPay",
      description: "Worldwide payment platform with multi-currency support and secure transactions",
      language: "PHP",
      topics: ["payments", "fintech", "api"]
    },
    {
      name: "PM Construction Billing",
      description: "Project management and billing system for construction companies",
      language: "PHP",
      topics: ["billing", "construction", "management"]
    },
    {
      name: "E-commerce Billing API",
      description: "RESTful API for e-commerce billing and payment processing",
      language: "PHP",
      topics: ["ecommerce", "api", "billing"]
    }
  ];

  const skills = [
    { name: "Laravel", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "MySQL", category: "Database" },
    { name: "M-Pesa APIs", category: "Integration" },
    { name: "RESTful APIs", category: "Backend" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "Git", category: "Tools" },
    { name: "Linux", category: "DevOps" }
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Geofreytech/repos?sort=updated&per_page=10');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.log('Using featured projects as fallback');
        setRepos(featuredProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative text-center max-w-4xl mx-auto">
          <div className="inline-block p-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-6">
            <div className="bg-slate-900 rounded-full px-6 py-2">
              <span className="text-sm font-medium">Available for new opportunities</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Geofrey Mwas
          </h1>
          <h2 className="text-2xl md:text-3xl text-green-400 font-semibold mb-6">
            Full-Stack Developer
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building scalable systems, APIs, and automation tools using Laravel, PHP, and modern web technologies. 
            Specializing in payment integrations, WhatsApp automation, and enterprise solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg rounded-full transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate backend developer with expertise in building robust, scalable systems that solve real-world problems. 
                My journey in software development has led me to specialize in Laravel, PHP, and API integrations, particularly in the fintech space.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                From creating WhatsApp automation bots to developing comprehensive payment platforms like M-Pesa integrations, 
                I thrive on building solutions that make a difference. I believe in clean code, efficient architecture, and user-centered design.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-500/10 text-green-400 border-green-500/20">5+ Years Experience</Badge>
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Full-Stack Development</Badge>
                <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">Payment Systems</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6 text-center">
                  <Code className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg">Backend</h3>
                  <p className="text-gray-400 text-sm">Laravel, PHP, APIs</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6 text-center">
                  <Database className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg">Database</h3>
                  <p className="text-gray-400 text-sm">MySQL, PostgreSQL</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6 text-center">
                  <Server className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg">Integration</h3>
                  <p className="text-gray-400 text-sm">Payment APIs, M-Pesa</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6 text-center">
                  <Smartphone className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg">Automation</h3>
                  <p className="text-gray-400 text-sm">WhatsApp Bots, Scripts</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700"
              >
                <div className="text-sm text-gray-400 mb-1">{skill.category}</div>
                <div className="font-semibold text-white">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my expertise in backend development, 
              payment systems, and automation tools.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(repos.length > 0 ? repos.slice(0, 6) : featuredProjects).map((project: any, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-white group-hover:text-green-400 transition-colors">
                      {project.name}
                    </CardTitle>
                    <div className="flex gap-2">
                      {project.html_url && (
                        <Button size="sm" variant="ghost" className="p-2 hover:bg-slate-700" asChild>
                          <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.homepage && (
                        <Button size="sm" variant="ghost" className="p-2 hover:bg-slate-700" asChild>
                          <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-gray-400">
                    {project.description || "An innovative solution built with modern technologies"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.language && (
                      <Badge variant="outline" className="border-green-500/30 text-green-400">
                        {project.language}
                      </Badge>
                    )}
                    {project.topics?.slice(0, 2).map((topic: string, i: number) => (
                      <Badge key={i} variant="outline" className="border-blue-500/30 text-blue-400">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  {project.stargazers_count !== undefined && (
                    <div className="text-sm text-gray-500">
                      ⭐ {project.stargazers_count} stars
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
              <a href="https://github.com/Geofreytech" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you need a backend developer, API integration specialist, or automation expert, let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300" 
              asChild
            >
              <a href="mailto:geofrey@example.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg rounded-full transition-all duration-300" 
              asChild
            >
              <a href="https://github.com/Geofreytech" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-4 h-4" />
            <span>Kenya</span>
          </div>
          <p>&copy; 2025 Geofrey Mwas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
