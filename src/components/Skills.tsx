import React from 'react';
import { Code, Database, Settings, Users, BookOpen, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Test Automation",
      color: "#1A73E8",
      skills: ["Playwright", "RestAssured + TestNG", "JavaScript", "Java"]
    },
    {
      icon: Settings,
      title: "CI/CD & DevOps",
      color: "#FF6D00",
      skills: ["Azure Pipelines", "Git & GitHub", "Azure Repos", "YAML Configuration"]
    },
    {
      icon: Database,
      title: "API & Testing Tools",
      color: "#28A745",
      skills: ["Swagger", "Postman", "SQL", "REST APIs"]
    },
    {
      icon: BookOpen,
      title: "Testing Methodologies",
      color: "#FFC107",
      skills: ["Functional Testing", "Regression Testing", "Smoke Testing", "Integration Testing"]
    },
    {
      icon: Award,
      title: "Project Management",
      color: "#9C27B0",
      skills: ["Jira", "Azure DevOps", "Test Plans", "Defect Lifecycle"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "#FF5722",
      skills: ["Agile/Scrum", "Cross-functional Collaboration", "Problem Solving", "CSR Engagement"]
    }
  ];

  const technologies = [
    { name: "Playwright", level: 90, category: "automation" },
    { name: "RestAssured", level: 85, category: "automation" },
    { name: "JavaScript", level: 80, category: "programming" },
    { name: "Java", level: 75, category: "programming" },
    { name: "Azure DevOps", level: 85, category: "tools" },
    { name: "Jira", level: 90, category: "tools" },
    { name: "SQL", level: 70, category: "database" },
    { name: "Git", level: 80, category: "version-control" }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E3338] mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-[#FF6D00] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#5A5F66] max-w-2xl mx-auto">
            Comprehensive technical skills spanning automation, testing methodologies, and collaborative practices
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-[#F5F6FA] p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon 
                    size={24} 
                    style={{ color: category.color }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#2E3338]">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white text-[#5A5F66] rounded-full text-sm font-medium group-hover:bg-gray-50 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Proficiency */}
        <div className="bg-[#F5F6FA] p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-[#2E3338] mb-8 text-center">Technology Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#2E3338] font-medium">{tech.name}</span>
                  <span className="text-[#5A5F66] text-sm">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#1A73E8] h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;