import React, { useState, useEffect, useRef } from "react";
import {
  Target,
  Shield,
  TrendingUp,
  Users,
  Code,
  Award,
  Zap,
  Heart,
  CheckCircle,
  Star,
  Sparkles,
  Trophy,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    projects: 0,
    satisfaction: 0,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounts({
          students: Math.floor(1000 * progress),
          projects: Math.floor(500 * progress),
          satisfaction: Math.floor(98 * progress),
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-blue-50 overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-40 left-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6 animate-fade-in">
            <Sparkles className="text-blue-600" size={20} />
            <span className="text-blue-700 font-semibold text-sm">
              About TheHelpingDude
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 animate-fade-in-up">
            Empowering Students to{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Excel & Succeed
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 10C50 5 150 5 198 10"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
            Your trusted partner in academic excellence, combining industry
            expertise with genuine care for student success
          </p>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
          {[
            {
              value: counts.students,
              suffix: "+",
              label: "Happy Students",
              icon: Users,
              color: "from-blue-500 to-cyan-500",
            },
            {
              value: counts.projects,
              suffix: "+",
              label: "Projects Delivered",
              icon: Trophy,
              color: "from-purple-500 to-pink-500",
            },
            {
              value: counts.satisfaction,
              suffix: "%",
              label: "Satisfaction Rate",
              icon: Star,
              color: "from-orange-500 to-red-500",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Built by Students, for Students
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We've been in your shoes. TheHelpingDude was born from the
                    struggles we faced during our own academic journey. We know
                    the stress of tight deadlines, complex projects, and the
                    pressure to excel while juggling multiple responsibilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Industry Experts at Your Service
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our team consists of seasoned software engineers, data
                    scientists, and AI specialists working at top tech
                    companies. We bring real-world experience and cutting-edge
                    knowledge to every project, ensuring you learn
                    industry-standard practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    More Than Just Solutions
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We don't just deliver assignments—we provide detailed
                    explanations, code walkthroughs, and concept clarifications.
                    Our goal is to make you confident and competent, ready to
                    ace your exams and interviews.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                "Plagiarism-Free",
                "On-Time Delivery",
                "24/7 Support",
                "Revision Guarantee",
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full border border-blue-200 hover:border-blue-400 transition-all duration-300"
                >
                  <CheckCircle className="text-green-500" size={18} />
                  <span className="text-gray-800 font-medium text-sm">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Value Props */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              <Target
                className="text-blue-600 mb-4 group-hover:scale-110 transition-transform"
                size={40}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Mission-Driven Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every project is treated with the utmost care. Your academic
                success isn't just our business—it's our passion. We celebrate
                every A+ grade and successful project defense with you.
              </p>
              <div className="flex items-center space-x-2 text-blue-600 font-semibold">
                <span>Learn more</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white to-purple-50 p-8 rounded-3xl shadow-xl border border-purple-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              <Shield
                className="text-purple-600 mb-4 group-hover:scale-110 transition-transform"
                size={40}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Your Privacy, Our Priority
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Complete confidentiality guaranteed. We use secure communication
                channels, encrypted data storage, and never share your
                information. Your academic integrity is safe with us.
              </p>
              <div className="flex items-center space-x-2 text-purple-600 font-semibold">
                <span>Security details</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white to-green-50 p-8 rounded-3xl shadow-xl border border-green-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              <Award
                className="text-green-600 mb-4 group-hover:scale-110 transition-transform"
                size={40}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Premium Quality, Always
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Well-commented code, detailed documentation, and industry-best
                practices. Every deliverable goes through rigorous quality
                checks to ensure you receive nothing but excellence.
              </p>
              <div className="flex items-center space-x-2 text-green-600 font-semibold">
                <span>Quality standards</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
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
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default About;
