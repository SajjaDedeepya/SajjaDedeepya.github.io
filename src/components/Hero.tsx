import React from 'react';
import { Code, Database, Shield, Award, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F5F6FA] to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <div className="w-2 h-2 bg-[#28A745] rounded-full animate-pulse"></div>
            <span className="text-[#5A5F66] text-sm font-medium">Available for opportunities</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2E3338] mb-6 leading-tight">
            Dedeepya Sajja
          </h1>
          
          <p className="text-xl md:text-2xl text-[#1A73E8] font-semibold mb-4">
            QA & Automation Engineer
          </p>
          
          <p className="text-lg text-[#5A5F66] max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate Quality Assurance Engineer with <strong>2+ years</strong> of expertise in manual and automation testing. 
            At Accenture, I drive quality across healthcare and logistics domains through innovative test automation and CI/CD integration.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-lg shadow-sm">
              <Shield className="text-[#1A73E8]" size={20} />
              <span className="text-[#2E3338] font-medium">Quality Assurance</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-lg shadow-sm">
              <Code className="text-[#1A73E8]" size={20} />
              <span className="text-[#2E3338] font-medium">Test Automation</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-lg shadow-sm">
              <Database className="text-[#1A73E8]" size={20} />
              <span className="text-[#2E3338] font-medium">API Testing</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-lg shadow-sm">
              <Award className="text-[#1A73E8]" size={20} />
              <span className="text-[#2E3338] font-medium">Agile/Scrum</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group px-8 py-4 bg-[#FF6D00] text-white rounded-lg font-semibold hover:bg-[#E65A00] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
              <span>Download Resume</span>
              <div className="group-hover:translate-x-1 transition-transform duration-200">→</div>
            </button>
            <a
              href="mailto:dedeepyachowdary201@gmail.com"
              className="px-8 py-4 border-2 border-[#1A73E8] text-[#1A73E8] rounded-lg font-semibold hover:bg-[#1A73E8] hover:text-white transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="animate-bounce">
          <button onClick={scrollToAbout} className="text-[#5A5F66] hover:text-[#1A73E8] transition-colors duration-200">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;