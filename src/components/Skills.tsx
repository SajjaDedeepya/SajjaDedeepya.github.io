import React from 'react';
import {
  Code2,
  Smartphone,
  Workflow,
  Database,
  ClipboardCheck,
  BarChart3,
  GitBranch,
  Bug,
  Users,
  BookOpen
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Automation Frameworks',
      color: '#1A73E8',
      description:
        'Building maintainable and reusable UI automation frameworks.',
      skills: [
        'Playwright',
        'JavaScript',
        'Page Object Model',
        'Reusable Components',
        'Locator Strategies'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Automation',
      color: '#7C3AED',
      description:
        'Automating mobile application and browser-based user journeys.',
      skills: [
        'Appium',
        'Android Mobile Web',
        'Native iOS Testing',
        'Device & Emulator Testing'
      ]
    },
    {
      icon: Workflow,
      title: 'CI/CD & DevOps',
      color: '#FF6D00',
      description:
        'Integrating automated tests into continuous testing pipelines.',
      skills: [
        'Azure DevOps',
        'Azure Pipelines',
        'YAML Configuration',
        'Git',
        'GitHub',
        'Scheduled Test Execution'
      ]
    },
    {
      icon: Database,
      title: 'API & Backend Testing',
      color: '#28A745',
      description:
        'Validating APIs, backend responses, and business rules.',
      skills: [
        'REST Assured',
        'Java',
        'TestNG',
        'Postman',
        'Swagger',
        'REST APIs',
        'SQL'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Engineering',
      color: '#D97706',
      description:
        'Validating application quality throughout the release lifecycle.',
      skills: [
        'Functional Testing',
        'Regression Testing',
        'Smoke Testing',
        'End-to-End Testing',
        'Cross-Browser Testing',
        'Integration Testing',
        'UAT'
      ]
    },
    {
      icon: BarChart3,
      title: 'Reporting & Test Management',
      color: '#DB2777',
      description:
        'Making test execution results visible and actionable.',
      skills: [
        'Azure DevOps Test Plans',
        'Custom HTML Reports',
        'Azure Dashboards',
        'Execution Analytics',
        'Screenshot & Artifact Publishing',
        'Defect Tracking'
      ]
    },
    {
      icon: Bug,
      title: 'Debugging & Reliability',
      color: '#0891B2',
      description:
        'Investigating failures and improving automation stability.',
      skills: [
        'Root Cause Analysis',
        'Defect Investigation',
        'Test Stabilization',
        'Synchronization',
        'Test Data Validation'
      ]
    },
    {
      icon: GitBranch,
      title: 'Test Engineering Practices',
      color: '#4F46E5',
      description:
        'Designing effective coverage for complex business workflows.',
      skills: [
        'Test Scenario Design',
        'Test Planning',
        'Regression Strategy',
        'Release Validation',
        'Agile / Scrum'
      ]
    },
    {
      icon: Users,
      title: 'Collaboration & Delivery',
      color: '#EA580C',
      description:
        'Working with cross-functional teams to deliver reliable software.',
      skills: [
        'Cross-Functional Collaboration',
        'Sprint Support',
        'Defect Triage',
        'Stakeholder Reporting',
        'Continuous Improvement'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1A73E8] mb-3">
            Technical Capabilities
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#2E3338] mb-4">
            Skills & Expertise
          </h2>

          <div className="w-20 h-1 bg-[#FF6D00] mx-auto rounded-full mb-6" />

          <p className="text-lg text-[#5A5F66] max-w-3xl mx-auto leading-relaxed">
            Specializing in test automation, API validation, mobile testing,
            and continuous quality engineering for enterprise applications.
          </p>
        </div>

        {/* Skills categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group bg-[#F7F8FC] p-6 rounded-2xl
                  border border-gray-100
                  hover:bg-white hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${category.color}15`
                    }}
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      style={{ color: category.color }}
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#2E3338] mb-1">
                      {category.title}
                    </h3>

                    <p className="text-sm text-[#69717D] leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white
                        border border-gray-200 rounded-full
                        text-sm text-[#4B5563] font-medium
                        group-hover:border-gray-300
                        transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Expertise highlight */}
        <div className="mt-14 bg-[#F5F6FA] rounded-2xl p-7 md:p-9">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#2E3338] mb-3">
              Engineering Impact
            </h3>

            <p className="text-[#5A5F66] max-w-2xl mx-auto">
              Applying automation engineering to improve test coverage,
              execution reliability, and release confidence.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <Code2
                size={28}
                className="mx-auto mb-3 text-[#1A73E8]"
              />
              <h4 className="font-bold text-[#2E3338] mb-2">
                Framework Engineering
              </h4>
              <p className="text-sm text-[#69717D] leading-relaxed">
                Reusable automation components and maintainable test frameworks.
              </p>
            </div>

            <div className="p-4">
              <Workflow
                size={28}
                className="mx-auto mb-3 text-[#FF6D00]"
              />
              <h4 className="font-bold text-[#2E3338] mb-2">
                Continuous Testing
              </h4>
              <p className="text-sm text-[#69717D] leading-relaxed">
                Automated pipeline execution and integrated test reporting.
              </p>
            </div>

            <div className="p-4">
              <BookOpen
                size={28}
                className="mx-auto mb-3 text-[#28A745]"
              />
              <h4 className="font-bold text-[#2E3338] mb-2">
                Quality Improvement
              </h4>
              <p className="text-sm text-[#69717D] leading-relaxed">
                Structured testing, defect analysis, and reliable releases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;