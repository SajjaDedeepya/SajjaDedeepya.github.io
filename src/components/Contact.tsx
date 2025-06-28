import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, Download } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:dedeepyachowdary201@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dedeepyachowdary201@gmail.com",
      href: "mailto:dedeepyachowdary201@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 79890 13720",
      href: "tel:+917989013720"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/dedeepya-chowdary",
      href: "https://linkedin.com/in/dedeepya-chowdary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E3338] mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#FF6D00] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#5A5F66] max-w-2xl mx-auto">
            Ready to discuss how I can contribute to your team's quality assurance goals? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#2E3338] mb-8">Let's Start a Conversation</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#1A73E8]/10 rounded-lg flex items-center justify-center">
                    <info.icon className="text-[#1A73E8]" size={20} />
                  </div>
                  <div>
                    <p className="text-[#5A5F66] text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[#2E3338] font-medium hover:text-[#1A73E8] transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#2E3338] font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F5F6FA] p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-[#2E3338] mb-4">Open to Opportunities</h4>
              <p className="text-[#5A5F66] mb-4">
                I'm actively seeking roles where I can leverage my automation expertise and contribute to 
                high-impact quality assurance initiatives. Interested in:
              </p>
              <ul className="space-y-2">
                {[
                  "Senior QA Engineer positions",
                  "Test Automation Lead roles",
                  "Quality Engineering consulting",
                  "Agile team collaboration opportunities"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#1A73E8] rounded-full"></div>
                    <span className="text-[#5A5F66]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[#2E3338] font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#2E3338] font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#2E3338] font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent transition-all duration-200"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#2E3338] font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent transition-all duration-200 resize-vertical"
                  placeholder="Tell me about your project, team, or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6D00] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#E65A00] transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <button className="w-full bg-[#1A73E8] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#1557B0] transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <Download size={20} />
                <span>Download My Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;