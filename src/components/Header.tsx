import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-[#2E3338]">
            Dedeepya Sajja
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Skills', 'Achievements', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#5A5F66] hover:text-[#1A73E8] transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="mailto:dedeepyachowdary201@gmail.com"
              className="flex items-center space-x-2 px-4 py-2 text-[#1A73E8] border border-[#1A73E8] rounded-lg hover:bg-[#1A73E8] hover:text-white transition-all duration-200"
            >
              <Mail size={16} />
              <span>Contact</span>
            </a>
            <button className="flex items-center space-x-2 px-4 py-2 bg-[#FF6D00] text-white rounded-lg hover:bg-[#E65A00] transition-all duration-200 shadow-sm">
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#2E3338]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              {['About', 'Experience', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-[#5A5F66] hover:text-[#1A73E8] transition-colors duration-200 font-medium py-2"
                >
                  {item}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <a
                  href="mailto:dedeepyachowdary201@gmail.com"
                  className="flex items-center space-x-2 px-4 py-2 text-[#1A73E8] border border-[#1A73E8] rounded-lg hover:bg-[#1A73E8] hover:text-white transition-all duration-200"
                >
                  <Mail size={16} />
                  <span>Contact</span>
                </a>
                <a href="/Dedeepya_Sajja.pdf"  download>

                  <button className="flex items-center space-x-2 px-4 py-2 bg-[#FF6D00] text-white rounded-lg hover:bg-[#E65A00] transition-all duration-200">
                    <Download size={16} />
                    <span>Resume</span>
                  </button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
