import React, { useState, useEffect } from "react";
import {
  Zap,
  ArrowRight,
  ChevronDown,
  Users,
  Award,
  Clock,
  CheckCircle,
  Sparkles,
  Code,
  BookOpen,
  Rocket,
} from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Assignments", "Projects", "Research", "Coding", "Success"];

  

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

    const handleNavClick = (e, href) => {
      e.preventDefault();
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px]" />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 text-blue-200 px-6 py-3 rounded-full mb-8 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 animate-slide-down">
          <Sparkles size={18} className="animate-spin-slow" />
          <span className="text-sm font-semibold">
            🎓 Trusted by 1000+ Students Worldwide
          </span>
          <Zap size={18} className="text-yellow-400 animate-pulse" />
        </div>

        {/* Main Heading with Rotating Words */}
        <h1
          className="
  text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
  font-black text-white 
  mb-6 sm:mb-8 
  leading-tight sm:leading-[1.1] 
  text-center
  animate-fade-in
"
        >
          <span className="block">Your Academic Success</span>

          <span
            className="
    block 
    bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
    bg-clip-text text-transparent 
    animate-gradient bg-[length:200%_auto]
    mt-1 sm:mt-2
  "
          >
            Partner for
          </span>

          <span
            className="
      block relative 
      min-h-[1.2em] 
      mt-2 sm:mt-3
      text-transparent bg-clip-text 
      bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
    "
          >
            <span
              key={currentWord}
              className="
        absolute inset-0 
        animate-text-shimmer bg-[length:200%_auto]
        transition-opacity duration-300
        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
        text-transparent bg-clip-text
        text-4xl sm:text-6xl md:text-7xl lg:text-8xl
        font-black
        text-center
        w-full
        px-2
      "
            >
              {words[currentWord]}
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
          Expert assistance for{" "}
          <span className="text-blue-400 font-semibold">
            B.Tech, M.Tech, MS, MCA & CSE
          </span>{" "}
          students.
          <br className="hidden sm:block" />
          From assignments to final-year projects, we deliver cutting-edge
          solutions with guaranteed results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 animate-fade-in-delay-2 w-full px-4">
          {/* Primary CTA */}
          <button
            onClick={() => {
              handleNavClick({ preventDefault: () => {} }, "#contact");
            }}
            className="
    group relative 
    bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
    text-white 
    w-full sm:w-auto 
    px-6 py-3 sm:px-10 sm:py-5 
    rounded-full text-base sm:text-lg font-bold 
    hover:shadow-2xl hover:shadow-purple-500/50 
    hover:scale-105 
    transition-all duration-300 
    flex items-center justify-center space-x-2 sm:space-x-3 
    overflow-hidden
  "
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            <Rocket className="relative z-10" size={20} />
            <span className="relative z-10">Get Started Free</span>
            <ArrowRight
              className="relative z-10 group-hover:translate-x-2 transition-transform"
              size={20}
            />
          </button>

          {/* Secondary CTA */}
          <button
            className="
    group relative 
    border-2 border-gray-600 text-gray-300 
    w-full sm:w-auto 
    px-6 py-3 sm:px-10 sm:py-5 
    rounded-full text-base sm:text-lg font-bold 
    hover:border-blue-500 hover:text-white 
    hover:bg-blue-500/10 
    backdrop-blur-sm 
    transition-all duration-300 
    flex items-center justify-center space-x-2 sm:space-x-3
  "
          >
            <BookOpen size={20} />
            <span>Explore Services</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in-delay-3">
          {[
            {
              icon: Users,
              label: "1000+",
              value: "Students Helped",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: Award,
              label: "95%",
              value: "Success Rate",
              color: "from-purple-500 to-pink-500",
            },
            {
              icon: Clock,
              label: "24/7",
              value: "Support",
              color: "from-orange-500 to-red-500",
            },
            {
              icon: CheckCircle,
              label: "100%",
              value: "Original Work",
              color: "from-green-500 to-emerald-500",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-300`}
              />

              <div className="relative">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-3xl font-black text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {stat.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <div className="mt-20 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto animate-fade-in-delay-4">
          {[
            "Python",
            "Java",
            "React",
            "AI/ML",
            "Cloud",
            "Blockchain",
            "IoT",
            "Data Science",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-sm font-semibold hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 cursor-pointer"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes text-shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }
        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 0.8s both;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-text-shimmer {
          animation: text-shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
