import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Rocket,
  Zap,
  FileText,
  Code2,
  Laptop,
  Smartphone,
  Brain,
  Database,
  Cloud,
  GitBranch,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react";

const Services = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const services = [
    {
      icon: BookOpen,
      title: "Assignment Assistance",
      desc: "Expert help with programming assignments, algorithms, and data structures",
      category: "academic",
      color: "from-blue-500 to-cyan-500",
      popular: true,
    },
    {
      icon: Rocket,
      title: "Final Year Projects",
      desc: "Complete end-to-end project development with documentation and presentation",
      category: "academic",
      color: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      icon: Zap,
      title: "Mini Projects",
      desc: "Quick turnaround on semester projects with quality deliverables",
      category: "academic",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FileText,
      title: "Research Paper Writing",
      desc: "IEEE/ACM format research papers with proper citations and references",
      category: "academic",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FileText,
      title: "Documentation Services",
      desc: "SRS, project reports, technical documentation, and user manuals",
      category: "academic",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Code2,
      title: "Coding Help & Debugging",
      desc: "Real-time coding assistance, error resolution, and concept clarification",
      category: "development",
      color: "from-red-500 to-orange-500",
      popular: true,
    },
    {
      icon: Laptop,
      title: "Web App Development",
      desc: "Modern full-stack applications using React, Angular, Node.js, Django, Flask",
      category: "development",
      color: "from-blue-500 to-purple-500",
      popular: true,
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "Native Android/iOS and cross-platform apps with React Native, Flutter",
      category: "development",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Brain,
      title: "Machine Learning Projects",
      desc: "Custom ML models, training pipelines, and deployment solutions",
      category: "ai-ml",
      color: "from-cyan-500 to-blue-500",
      popular: true,
    },
    {
      icon: Brain,
      title: "AI & Deep Learning",
      desc: "Neural networks, CNNs, RNNs, computer vision, and NLP solutions",
      category: "ai-ml",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Database,
      title: "Data Science Solutions",
      desc: "Data analysis, visualization, predictive modeling, and statistical analysis",
      category: "ai-ml",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      desc: "AWS, Azure, GCP deployment with CI/CD pipelines and monitoring",
      category: "development",
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: Database,
      title: "Database Design",
      desc: "SQL/NoSQL design, optimization, indexing, and query performance tuning",
      category: "development",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: GitBranch,
      title: "API Development",
      desc: "RESTful APIs, GraphQL, microservices architecture, and integration",
      category: "development",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: CheckCircle,
      title: "Code Review & Optimization",
      desc: "Performance optimization, best practices, security audits, and refactoring",
      category: "development",
      color: "from-emerald-500 to-green-500",
    },
  ];

  const filters = [
    { id: "all", label: "All Services", count: services.length },
    {
      id: "academic",
      label: "Academic",
      count: services.filter((s) => s.category === "academic").length,
    },
    {
      id: "development",
      label: "Development",
      count: services.filter((s) => s.category === "development").length,
    },
    {
      id: "ai-ml",
      label: "AI & ML",
      count: services.filter((s) => s.category === "ai-ml").length,
    },
  ];

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((s) => s.category === activeFilter);

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

    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [activeFilter]);

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
      id="services"
      className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

        {/* Floating Icons */}
        {[Code2, Brain, Rocket, Database, Cloud, Zap].map((Icon, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i}s`,
            }}
          >
            <Icon size={64} className="text-blue-600" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6 animate-fade-in">
            <Sparkles className="text-blue-600 animate-spin-slow" size={20} />
            <span className="text-blue-700 font-semibold text-sm">
              15+ Premium Services
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 animate-fade-in-up">
            Comprehensive{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Tech Services
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-lg" />
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in-delay">
            Everything you need to excel in your computer science journey—from
            assignments to cutting-edge AI projects
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-delay-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/30 scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
                }`}
              >
                {activeFilter === filter.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                )}
                <span className="relative flex items-center space-x-2">
                  <span>{filter.label}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      activeFilter === filter.id ? "bg-white/20" : "bg-gray-200"
                    }`}
                  >
                    {filter.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, i) => (
            <div
              key={i}
              data-index={i}
              className={`service-card group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-3 cursor-pointer ${
                visibleCards.includes(i) ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i % 6) * 0.1}s` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1 animate-bounce-slow">
                  <Star size={14} fill="currentColor" />
                  <span>Popular</span>
                </div>
              )}

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500`}
              />

              {/* Icon Container */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <service.icon className="text-white" size={32} />
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {service.desc}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center space-x-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-sm">Learn more</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>

              {/* Corner Decoration */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-50 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 rounded-3xl shadow-2xl">
            <div className="bg-white rounded-3xl px-12 py-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <TrendingUp className="text-blue-600" size={32} />
                <h3 className="text-3xl font-black text-gray-900">
                  Don't See What You Need?
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                We offer custom solutions for unique requirements. Let's discuss
                your specific needs and create a tailored solution.
              </p>
              <button
                onClick={() => {
                  handleNavClick({ preventDefault: () => {} }, "#contact");
                }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto"
              >
                <span>Request Custom Service</span>
                <ArrowRight
                  className="group-hover:translate-x-2 transition-transform"
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
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
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
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out both;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;
