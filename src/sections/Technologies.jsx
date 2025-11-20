import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Database,
  Smartphone,
  Brain,
  BarChart3,
  Cloud,
  Cpu,
  Zap,
  Sparkles,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react";

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const techCategories = [
    {
      name: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      techs: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 98 },
        { name: "Material-UI", level: 88 },
        { name: "Redux", level: 92 },
      ],
    },
    {
      name: "Backend Development",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      techs: [
        { name: "Node.js", level: 95 },
        { name: "Python Django", level: 90 },
        { name: "Flask", level: 88 },
        { name: "FastAPI", level: 92 },
        { name: "Spring Boot", level: 85 },
        { name: "Express.js", level: 94 },
      ],
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      techs: [
        { name: "React Native", level: 93 },
        { name: "Flutter", level: 90 },
        { name: "Android", level: 88 },
        { name: "iOS (Swift)", level: 85 },
        { name: "Kotlin", level: 87 },
      ],
    },
    {
      name: "AI & Machine Learning",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      techs: [
        { name: "TensorFlow", level: 92 },
        { name: "PyTorch", level: 90 },
        { name: "Scikit-learn", level: 95 },
        { name: "OpenCV", level: 88 },
        { name: "NLP", level: 89 },
        { name: "Keras", level: 91 },
      ],
    },
    {
      name: "Data Science & Analytics",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30",
      techs: [
        { name: "Pandas", level: 96 },
        { name: "NumPy", level: 95 },
        { name: "Matplotlib", level: 90 },
        { name: "Plotly", level: 88 },
        { name: "Jupyter", level: 93 },
        { name: "Seaborn", level: 89 },
      ],
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      techs: [
        { name: "AWS", level: 92 },
        { name: "Google Cloud", level: 88 },
        { name: "Azure", level: 85 },
        { name: "Docker", level: 94 },
        { name: "Kubernetes", level: 87 },
        { name: "CI/CD", level: 90 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".tech-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

        {/* Circuit Board Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="#60A5FA" />
              <path
                d="M50 0 L50 100 M0 50 L100 50"
                stroke="#60A5FA"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Floating Icons */}
        {[Code, Database, Brain, Cloud, Cpu, Zap].map((Icon, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${10 + i * 2}s`,
            }}
          >
            <Icon size={48} className="text-blue-400" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 px-6 py-3 rounded-full mb-6 animate-fade-in">
            <Sparkles className="text-blue-400 animate-spin-slow" size={20} />
            <span className="text-blue-200 font-semibold text-sm">
              50+ Technologies & Frameworks
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 animate-fade-in-up">
            Technologies We{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Master
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-lg" />
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-delay">
            Cutting-edge tech stack powering modern applications and innovative
            solutions
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { icon: Award, value: "50+", label: "Technologies" },
              { icon: TrendingUp, value: "100%", label: "Up-to-Date" },
              { icon: CheckCircle, value: "Expert", label: "Level Mastery" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <stat.icon className="text-white" size={20} />
                </div>
                <div className="text-left">
                  <div className="text-white font-black text-lg">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, i) => (
            <div
              key={i}
              data-index={i}
              className={`tech-card group relative ${
                visibleCards.includes(i) ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setActiveCategory(i)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-500`}
              />

              {/* Card */}
              <div
                className={`relative bg-white/5 backdrop-blur-xl border ${category.borderColor} rounded-3xl p-8 hover:bg-white/10 hover:border-opacity-60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {/* Header with Icon */}
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <category.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                      {category.name}
                    </h3>
                    <div className="text-gray-400 text-sm">
                      {category.techs.length} Technologies
                    </div>
                  </div>
                </div>

                {/* Tech Pills with Progress */}
                <div className="space-y-3">
                  {category.techs.map((tech, j) => (
                    <div key={j} className="group/tech">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-300 text-sm font-medium group-hover/tech:text-white transition-colors">
                          {tech.name}
                        </span>
                        <span className="text-gray-500 text-xs font-bold">
                          {tech.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${
                            category.color
                          } rounded-full transition-all duration-1000 ease-out ${
                            activeCategory === i ? "animate-progress" : ""
                          }`}
                          style={{
                            width:
                              activeCategory === i ? `${tech.level}%` : "0%",
                            transitionDelay: `${j * 0.1}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Badge */}
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                    Expert Level
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                          category.color
                        } ${
                          idx === 4 ? "opacity-100" : "opacity-40"
                        } group-hover:opacity-100 transition-opacity`}
                        style={{ transitionDelay: `${idx * 0.05}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 rounded-3xl shadow-2xl animate-fade-in-up">
            <div className="bg-slate-950 rounded-3xl px-12 py-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Cpu className="text-blue-400" size={32} />
                <h3 className="text-3xl font-black text-white">
                  Need a Different Technology?
                </h3>
              </div>
              <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
                We're constantly learning and adapting. If you need help with a
                technology not listed here, just ask—we're quick learners!
              </p>
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3">
                <span>Discuss Your Tech Stack</span>
                <Zap
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
            </div>
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
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes progress {
          from { width: 0%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 0.8s ease-out 0.3s both;
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out both;
        }
        .animate-progress {
          animation: progress 1s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Technologies;
