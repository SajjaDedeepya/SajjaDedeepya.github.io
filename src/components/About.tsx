import React from 'react';
import { Quote, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Quality-First Mindset",
      description: "Architecting comprehensive test strategies that ensure flawless user experiences across healthcare and logistics domains."
    },
    {
      icon: Zap,
      title: "Automation Excellence",
      description: "Building robust automation frameworks with Playwright and RestAssured, reducing test execution time by 70%."
    },
    {
      icon: Users,
      title: "Collaborative Leadership",
      description: "Leading cross-functional teams in Agile environments, facilitating seamless developer-QA collaboration."
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
                "Quality isn't an act—it's a habit. I make it part of every sprint, every test case, and every deployment. 
                My mission is to bridge the gap between development velocity and product reliability."
              </p>
              <div className="mt-4 text-right">
                <span className="text-[#5A5F66] font-medium">— Dedeepya Sajja</span>
              </div>
            </div>

            <div className="prose prose-lg text-[#5A5F66]">
              <p className="mb-4">
                Hello! I'm a passionate <strong className="text-[#2E3338]">Quality Assurance Engineer</strong> with over 
                3 years of hands-on expertise in manual and automation testing. Currently at Accenture, I specialize in 
                creating robust test automation frameworks that scale with enterprise applications.
              </p>
              <p>
                My journey in QA has taken me through complex healthcare systems and logistics platforms, where I've 
                mastered the art of balancing comprehensive testing with rapid delivery cycles. I believe in proactive 
                quality assurance—catching issues before they reach production and optimizing processes for maximum efficiency.
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
