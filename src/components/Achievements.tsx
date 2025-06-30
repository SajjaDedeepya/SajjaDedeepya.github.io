import React from 'react';
import { Star, Award, Heart, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Star,
      title: "Sparkling Star Award",
      description: "Honored for exceptional contributions on first project at Accenture",
      color: "#FFD700",
      bgColor: "#FFF9C4"
    },
    {
      icon: Award,
      title: "ACE Extra Mile Award",
      description: "Recognized for end-to-end regression testing during critical go-live",
      color: "#FF6D00",
      bgColor: "#FFF3E0"
    },
    {
      icon: Heart,
      title: "CSR Volunteer",
      description: "Monthly NGO visits supporting Accenture's community initiatives",
      color: "#E91E63",
      bgColor: "#FCE4EC"
    },
    {
      icon: TrendingUp,
      title: "Performance Excellence",
      description: "Consistently delivered high-quality results across multiple projects",
      color: "#28A745",
      bgColor: "#E8F5E8"
    }
  ];

  const stats = [
    { number: "2+", label: "Years Experience", color: "#1A73E8" },
    { number: "70%", label: "Test Execution Time Reduced", color: "#28A745" },
    { number: "100%", label: "Project Success Rate", color: "#FF6D00" },
    { number: "4+", label: "Automation Frameworks Built", color: "#9C27B0" }
  ];

  return (
    <section id="achievements" className="py-20 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E3338] mb-4">Achievements & Recognition</h2>
          <div className="w-20 h-1 bg-[#FF6D00] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#5A5F66] max-w-2xl mx-auto">
            Recognition for excellence in quality assurance and commitment to continuous improvement
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.number}
              </div>
              <div className="text-[#5A5F66] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div 
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: achievement.bgColor }}
                >
                  <achievement.icon 
                    size={28}
                    style={{ color: achievement.color }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#2E3338] mb-3">{achievement.title}</h3>
                  <p className="text-[#5A5F66] leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#2E3338] mb-4">Ready to Drive Quality Excellence</h3>
            <p className="text-[#5A5F66] mb-6">
              I'm passionate about creating robust testing frameworks and fostering quality-first cultures. 
              Let's discuss how I can contribute to your team's success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="mailto:dedeepyachowdary201@gmail.com"
                className="px-6 py-3 bg-[#FF6D00] text-white rounded-lg font-semibold hover:bg-[#E65A00] transition-all duration-200"
              >
                Start a Conversation
              </a>
              <a
                href="https://www.linkedin.com/in/SajjaDedeepya/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[#1A73E8] text-[#1A73E8] rounded-lg font-semibold hover:bg-[#1A73E8] hover:text-white transition-all duration-200"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
