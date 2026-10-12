import React from 'react';
import { Quote, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Playwright Automation",
      description: "Developed and maintained scalable Playwright automation frameworks supporting web applications across healthcare and logistics domains."
    },
    {
      icon: Zap,
      title: "Mobile Web Automation",
      description: "Built and enhanced Appium-based Android mobile-web automation solutions, including framework migration and execution optimization."
    },
    {
      icon: Users,
      title: "CI/CD & Reporting",
      description: "Integrated automation into Azure DevOps pipelines and developed custom reporting solutions using HTML, CSS, and JavaScript."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E3338] mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#FF6D00] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-[#F5F6FA] p-8 rounded-2xl mb-8 relative">
              <Quote className="absolute top-4 left-4 text-[#1A73E8] opacity-20" size={40} />
              <p className="text-lg text-[#2E3338] leading-relaxed italic pl-8">
                "Automation isn't just about reducing manual effort. It's about building
                reliable feedback systems that help teams deliver quality software faster
                and with confidence."
              </p>
              <div className="mt-4 text-right">
                <span className="text-[#5A5F66] font-medium">— Dedeepya Sajja</span>
              </div>
            </div>

            <div className="prose prose-lg text-[#5A5F66]">
              <p className="mb-4">
                I'm a Software Development Engineer in Test (SDET) with 3+ years of experience
                building and maintaining automation solutions for enterprise healthcare and
                logistics applications.
              </p>
              <p>
                My expertise includes Playwright, JavaScript, Appium-based Android mobile-web
                automation, Azure DevOps CI/CD pipelines, API validation, and custom reporting
                solutions. I enjoy solving quality engineering challenges by improving test
                coverage, automating repetitive processes, and building scalable automation
                frameworks.
              </p>
              <p>
                Over the course of my career, I have developed automation covering hundreds of
                regression scenarios, contributed to large-scale mobile automation migrations,
                and created custom reporting and dashboard solutions that improve visibility
                for engineering and business teams.
              </p>
              <p>
                I believe quality engineering is more than finding defects—it's about enabling
                teams to deliver reliable software faster and with greater confidence.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#1A73E8]/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1A73E8]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1A73E8] transition-colors duration-300">
                    <highlight.icon
                      className="text-[#1A73E8] group-hover:text-white transition-colors duration-300"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2E3338] mb-2">{highlight.title}</h3>
                    <p className="text-[#5A5F66] leading-relaxed">{highlight.description}</p>
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

export default About;
