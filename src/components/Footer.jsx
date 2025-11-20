import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Youtube,
  Code2,
  Mail,
  Phone,
  MapPin,
  Heart,
  Sparkles,
  Zap,
  Award,
  Star,
  ArrowRight,
  Send,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Why Choose Us", href: "#why-choose-us" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact", href: "#contact" },
    ],
    Services: [
      { name: "Assignments", href: "#services" },
      { name: "Projects", href: "#services" },
      { name: "Research Papers", href: "#services" },
      { name: "Coding Help", href: "#services" },
      { name: "Documentation", href: "#services" },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      color: "hover:bg-blue-600",
      label: "Facebook",
    },
    { icon: Twitter, href: "#", color: "hover:bg-sky-500", label: "Twitter" },
    {
      icon: Linkedin,
      href: "#",
      color: "hover:bg-blue-700",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "#",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600",
      label: "Instagram",
    },
    { icon: Github, href: "#", color: "hover:bg-gray-700", label: "GitHub" },
    { icon: Youtube, href: "#", color: "hover:bg-red-600", label: "YouTube" },
  ];

  const quickContact = [
    {
      icon: Mail,
      text: "thehelpingdude@gmail.com",
      href: "mailto:thehelpingdude@gmail.com",
    },
    { icon: Phone, text: "+91 9063603164", href: "tel:+919063603164" },
    { icon: MapPin, text: "Hyderabad, Telangana, India" },
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-blob animation-delay-4000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Floating Icons */}
        {[Code2, Sparkles, Star, Zap].map((Icon, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-5"
            style={{
              left: `${15 + i * 25}%`,
              top: `${20 + (i % 2) * 50}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${12 + i * 2}s`,
            }}
          >
            <Icon size={40} className="text-white" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* CHANGED:
            - Grid: from "lg:grid-cols-5" to "lg:grid-cols-4" for better balance
            - Removed "mb-12" as it's no longer needed
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section
              CHANGED:
              - Added "md:col-span-2" to make it full-width on medium screens
            */}
            <div className="lg:col-span-2 md:col-span-2 animate-slide-in-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50 animate-pulse" />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-xl">
                    <Code2 className="text-white" size={28} />
                  </div>
                </div>
                <span className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  TheHelpingDude
                </span>
              </div>

              {/* CHANGED: Added "text-base" */}
              <p className="text-gray-400 mb-6 leading-relaxed text-base">
                Empowering computer science students with expert academic
                assistance. Your success is our mission. We're here 24/7 to help
                you excel! 🚀
              </p>

              {/* Quick Contact */}
              <div className="space-y-3 mb-6">
                {quickContact.map((contact, i) => (
                  <div key={i} className="group">
                    {contact.href ? (
                      <a
                        href={contact.href}
                        /* CHANGED: from "text-sm" to "text-base" */
                        className="flex items-center space-x-3 text-base text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                          <contact.icon size={16} />
                        </div>
                        <span>{contact.text}</span>
                      </a>
                    ) : (
                      /* CHANGED: from "text-sm" to "text-base" */
                      <div className="flex items-center space-x-3 text-base text-gray-400">
                        <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                          <contact.icon size={16} />
                        </div>
                        <span>{contact.text}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], idx) => (
              <div
                key={category}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                {/* CHANGED: from "text-lg" to "text-xl" */}
                <h4 className="text-white font-bold text-xl mb-6 flex items-center space-x-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  <span>{category}</span>
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        /* CHANGED: from "text-sm" to "text-base" */
                        className="group text-base text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2"
                      >
                        <ArrowRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                        />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(30px, 10px) scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out both;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
