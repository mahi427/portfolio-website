// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X, Code2, FileText } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // In Navbar.jsx, update navItems array:
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "/services" }, // Change this line
    { label: "Experience", href: "#experience" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ];

  const downloadResume = () => {
    // Replace with your actual resume file path
    const link = document.createElement("a");
    link.href = "/Mehak_Arora_resume.pdf";
    link.download = "Mehak_Arora_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom px-4 py-4">
        <div className="flex justify-between items-center">
          // Update the logo section in Navbar.jsx // Replace the logo section
          with this:
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">MA</span>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-50 blur-sm group-hover:opacity-70 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold heading-gradient">
                Mehak Arora
              </span>
              <span className="text-xs text-gray-500 -mt-1">
                Full Stack Developer
              </span>
            </div>
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 relative group text-sm"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button
              onClick={downloadResume}
              className="btn-primary flex items-center text-sm"
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </button>
            <a href="#contact" className="btn-secondary text-sm">
              Hire Me
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  downloadResume();
                  setIsOpen(false);
                }}
                className="btn-primary flex items-center justify-center"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </button>
              <a
                href="#contact"
                className="btn-secondary text-center"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
