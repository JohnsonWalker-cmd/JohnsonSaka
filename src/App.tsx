import React from 'react'

import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Progress } from "./components/ui/progress";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Smartphone, 
  Database,
  GitBranch,
  Terminal,
  Users,
  MessageSquare,
  Target,
  Send
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A modern admin dashboard for managing products, orders, and analytics with real-time updates.",
      image: "https://images.unsplash.com/photo-1563486299190-d415ab26e837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYwNDYyMjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with drag-and-drop functionality and team collaboration features.",
      image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwNDMzMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Redux", "CSS3", "Node.js"]
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with smooth animations and modern UI design principles.",
      image: "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc2MDM2MzI1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"]
    },
    {
      title: "Weather App",
      description: "Clean weather application with location-based forecasts and beautiful weather visualizations.",
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwNDM4NTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "API Integration", "Tailwind CSS"]
    }
  ];

  const skills = [
    { name: "HTML/CSS", level: 90, icon: Code2, category: "frontend" },
    { name: "JavaScript", level: 85, icon: Terminal, category: "frontend" },
    { name: "React", level: 80, icon: Code2, category: "frontend" },
    { name: "TypeScript", level: 75, icon: Code2, category: "frontend" },
    { name: "Tailwind CSS", level: 85, icon: Palette, category: "frontend" },
    { name: "Git & GitHub", level: 80, icon: GitBranch, category: "tools" },
    { name: "Responsive Design", level: 90, icon: Smartphone, category: "frontend" },
    { name: "Problem Solving", level: 85, icon: Target, category: "soft" }
  ];

  const technologies = [
    "HTML5", "CSS3", "JavaScript", "React", "TypeScript", 
    "Tailwind CSS", "Git", "Responsive Design", "REST APIs", "npm"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-purple-600">
              <Code2 className="h-8 w-8" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-purple-600 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                  Available for Work
                </Badge>
              </div>
              <h1 className="mb-4">
                Hi, I'm <span className="text-purple-600">Johnson Saka</span>
              </h1>
              <h2 className="text-gray-600 mb-6">Junior Frontend Developer</h2>
              <p className="text-gray-600 mb-8 max-w-lg">
                Passionate about creating beautiful, user-friendly web experiences with clean code and modern technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-purple-400 to-blue-500 rounded-full blur-3xl opacity-20"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white h-32 flex items-center justify-center">
                  <Code2 className="h-12 w-12" />
                </div>
                <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white h-32 flex items-center justify-center mt-8">
                  <Palette className="h-12 w-12" />
                </div>
                <div className="bg-linear-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white h-32 flex items-center justify-center -mt-8">
                  <Smartphone className="h-12 w-12" />
                </div>
                <div className="bg-linear-to-br from-violet-500 to-violet-600 rounded-2xl p-6 text-white h-32 flex items-center justify-center">
                  <Database className="h-12 w-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">About Me</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-600 shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white rounded-full p-3">
                  <Code2 className="h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700 mb-4">
                Hello! I'm Johnson, a passionate junior frontend developer based in Accra. I recently completed 
                my journey into web development and I'm excited to build my career creating amazing digital experiences. 
                My journey began when I discovered the power of turning ideas into interactive websites.
              </p>
              <p className="text-gray-700 mb-4">
                I specialize in building responsive, user-friendly web applications using modern technologies. 
                I'm constantly learning and staying up-to-date with the latest web development trends and best practices. 
                I believe in writing clean, maintainable code and creating interfaces that users love.
              </p>
              <p className="text-gray-700 mb-6">
                When I'm not coding, you can find me exploring new technologies, listening to EDMs, 
                or solving math problems.
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary"
                    className="bg-white border border-purple-200 text-purple-700 hover:bg-purple-50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Projects</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in frontend development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-purple-50 text-purple-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 group"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Skills</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise across different areas of frontend development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <span className="text-gray-800">{skill.name}</span>
                    </div>
                    <span className="text-purple-600">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mb-2">Frontend Technologies</h3>
              <p className="text-gray-600">
                Expert in HTML, CSS, JavaScript, React, and modern frontend frameworks
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GitBranch className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2">Tools & Workflow</h3>
              <p className="text-gray-600">
                Proficient with Git, npm, VS Code, and modern development tools
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2">Soft Skills</h3>
              <p className="text-gray-600">
                Strong communication, teamwork, problem-solving, and continuous learning
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              feel free to reach out!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:johnsonsaka121@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-50 transition-colors group"
                >
                  <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-gray-600">Email</div>
                    <div className="text-gray-800">johnsonsaka121@gmail.com</div>
                  </div>
                </a>
                <a 
                  href="https://github.com/JohnsonWalker-cmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-50 transition-colors group"
                >
                  <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <Github className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-gray-600">GitHub</div>
                    <div className="text-gray-800">@JohnsonWalker-cmd</div>
                  </div>
                </a>
                <a 
                  href="https://www.linkedin.com/in/johnson-saka-968052268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-50 transition-colors group"
                >
                  <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <Linkedin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-gray-600">LinkedIn</div>
                    <div className="text-gray-800">/in/JohnsonSaka</div>
                  </div>
                </a>
              </div>
            </div>
            
            <Card className="p-6">
              <h3 className="mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                  />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-6 w-6 text-purple-400" />
                <span>Johnson Saka</span>
              </div>
              <p className="text-gray-400">
                Junior Frontend Developer passionate about creating beautiful web experiences.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-purple-400 transition-colors">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-purple-400 transition-colors">About</a>
                <a href="#projects" className="block text-gray-400 hover:text-purple-400 transition-colors">Projects</a>
                <a href="#skills" className="block text-gray-400 hover:text-purple-400 transition-colors">Skills</a>
              </div>
            </div>
            <div>
              <h4 className="mb-4">Connect</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/JohnsonWalker-cmd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/johnson-saka-968052268/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:johnsonsaka121@gmail.com"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Saka Johnson. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
