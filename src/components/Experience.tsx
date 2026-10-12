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
        "Developed and maintained Appium - based mobile web automation for Android browser testing, improving validation coverage across critical user journeys.",
        "Developed and maintained a Playwright automation framework supporting 600 + regression scenarios for enterprise healthcare applications.",
        "Migrated 450 + automation scenarios to an Appium - based mobile automation framework, including framework setup, emulator / device configuration, and execution stabilization.",
        "Designed reusable automation components and improved framework reliability through optimized locator strategies and synchronization handling.",
        "Leveraged GitHub Copilot to accelerate test migration, framework development, and automation maintenance while ensuring code quality and stability.",
        "Implemented Azure DevOps YAML pipelines for automated smoke and regression execution with integrated reporting and artifact publishing.",
        "Implemented API validations using Swagger services to retrieve dynamic test data and prevent execution conflicts.",
        "Reduced manual validation effort by approximately 80 % through scheduled automation execution and CI / CD integration."
      ]
    },
    {
      title: "Custom Software Engineer Associate",
      company: "Accenture",
      location: "Hyderabad",
      period: "Dec 2022 – Oct 2024",
      current: false,
      achievements: [
        "Designed and executed manual and automated test scenarios for healthcare and logistics web applications.",
        "Developed and maintained Playwright automation scripts for functional, regression, and end-to-end testing.",
        "Performed API validation using Swagger by verifying request/response payloads, status codes, and business rule compliance.",
        "Managed test plans, execution cycles, defect tracking, and release validation using Azure DevOps Test Plans.",
        "Improved regression stability by implementing dynamic synchronization strategies and reducing flaky test failures.",
        "Collaborated with developers to debug issues, analyze logs, reproduce defects, and support faster resolution.",
        "Supported sprint releases, UAT validation, production sanity testing, and end-to-end quality assurance activities.",
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