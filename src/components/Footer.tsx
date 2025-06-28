import React from 'react';
import { Heart, Mail, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2E3338] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Dedeepya Sajja</h3>
            <p className="text-gray-300 mb-4">
              QA & Automation Engineer passionate about building quality into every line of code.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:dedeepyachowdary201@gmail.com"
                className="w-10 h-10 bg-[#1A73E8] rounded-lg flex items-center justify-center hover:bg-[#1557B0] transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/SajjaDedeepya/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1A73E8] rounded-lg flex items-center justify-center hover:bg-[#1557B0] transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="tel:+917989013720"
                className="w-10 h-10 bg-[#1A73E8] rounded-lg flex items-center justify-center hover:bg-[#1557B0] transition-colors duration-200"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Specializations</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Test Automation</li>
              <li>CI/CD Integration</li>
              <li>API Testing</li>
              <li>Agile Methodologies</li>
              <li>Quality Assurance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} Dedeepya Sajja. </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
