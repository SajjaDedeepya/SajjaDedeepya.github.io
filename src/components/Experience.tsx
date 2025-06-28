import React from 'react';
import { Calendar, MapPin, ChevronRight, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Custom Software Engineer Analyst",
      company: "Accenture",
      location: "Hyderabad",
      period: "Nov 2024 – Present",
      current: true,
      achievements: [
        "Designed and implemented end-to-end smoke tests from scratch using Playwright (JavaScript)",
        "Authored Azure Pipeline YAML to trigger smoke tests automatically on code pushes",
        "Enabled headless execution via MFA workaround for seamless CI/CD integration",
        "Scheduled automated smoke executions at client-requested intervals",
        "Active contributor in sprint planning, daily stand-ups, and retrospective reviews"
      ]
    },
    {
      title: "Custom Software Engineer Associate",
      company: "Accenture",
      location: "Hyderabad",
      period: "Dec 2022 – Oct 2024",
      current: false,
      achievements: [
        "Led test scenario design, execution, and defect reporting for logistics platform using Azure DevOps and Jira",
        "Built comprehensive API tests with RestAssured + TestNG framework",
        "Developed cross-browser UI automation scripts with Playwright",
        "Managed test scripts and pipelines in Azure Repos and Git for version control",
        "Streamlined bug lifecycle with clear validation docs and developer workshops"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E3338] mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-[#FF6D00] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#5A5F66] max-w-2xl mx-auto">
            Building quality into enterprise applications across healthcare and logistics domains
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-[#1A73E8]/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 md:-ml-3 w-6 h-6 bg-[#1A73E8] rounded-full border-4 border-white shadow-lg z-10">
                  {exp.current && (
                    <div className="absolute inset-1 bg-[#FF6D00] rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-2 mb-4">
                      {exp.current && (
                        <div className="inline-flex items-center space-x-1 bg-[#28A745]/10 text-[#28A745] px-3 py-1 rounded-full text-sm font-medium">
                          <div className="w-2 h-2 bg-[#28A745] rounded-full"></div>
                          <span>Current</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-2 text-[#5A5F66] text-sm">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#2E3338] mb-2">{exp.title}</h3>
                    
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-xl font-semibold text-[#1A73E8]">{exp.company}</span>
                      <div className="flex items-center space-x-1 text-[#5A5F66]">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <CheckCircle className="flex-shrink-0 w-5 h-5 text-[#28A745] mt-0.5" />
                          <span className="text-[#5A5F66] leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;