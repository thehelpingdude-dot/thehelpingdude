import React, { useState } from "react";
import {
  Menu,
  X,
  Code2,
  Home,
  Info,
  Briefcase,
  HelpCircle,
  Mail,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Simulate scroll detection
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_LINKS = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: Info },
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "FAQ", href: "#faq", icon: HelpCircle },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const elementId = href.substring(1);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg blur-md opacity-50 animate-pulse" />
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Code2 className="text-white" size={20} />
                </div>
              </div>
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TheHelpingDude
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative ${
                    scrolled ? "text-gray-700" : "text-white"
                  } hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer group`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <button
                onClick={() => {
                  handleNavClick({ preventDefault: () => {} }, "#contact");
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200 font-medium flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 translate-x-[-50%] translate-y-[-50%]"
                      : "rotate-0 translate-x-[-50%] translate-y-[-8px]"
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen
                      ? "-rotate-45 translate-x-[-50%] translate-y-[-50%]"
                      : "rotate-0 translate-x-[-50%] translate-y-[6px]"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-16 sm:top-20 left-0 right-0 transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="mx-4 bg-gradient-to-br from-white via-white to-blue-50 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Decorative Header */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="relative flex items-center space-x-2 text-white">
                <Sparkles size={20} className="animate-pulse" />
                <span className="font-semibold">Quick Navigation</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="p-3">
              <div className="space-y-2">
                {NAV_LINKS.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="group block animate-slide-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative flex items-center space-x-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer">
                      {/* Icon Container */}
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <item.icon className="text-blue-600" size={20} />
                      </div>

                      {/* Text */}
                      <div className="flex-1">
                        <span className="block font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {item.name}
                        </span>
                      </div>

                      {/* Arrow */}
                      <ArrowRight
                        className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300"
                        size={18}
                      />

                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300" />
                    </div>
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  handleNavClick({ preventDefault: () => {} }, "#contact");
                }}
                className="w-full mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started Now</span>
                <Sparkles size={18} />
              </button>
            </div>

            {/* Footer Info */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-medium">Available 24/7</span>
                </div>
                <span>•</span>
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out both;
        }
      `}</style>
    </>
  );
};

export default Navbar;
