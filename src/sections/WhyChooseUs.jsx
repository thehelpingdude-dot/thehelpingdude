import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Clock,
  Award,
  CheckCircle,
  Rocket,
  Shield,
  Sparkles,
  Star,
  MessageCircle,
  ThumbsUp,
  Zap,
  Heart,
  TrendingUp,
} from "lucide-react";

const WhyChooseUs = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ students: 0, rating: 0, projects: 0 });
  const sectionRef = useRef(null);

  const reasons = [
    {
      icon: Users,
      title: "Expert Team of Professionals",
      desc: "Our team consists of industry veterans, PhD scholars, and certified professionals with 5+ years of real-world experience in software development, AI/ML, and academic research.",
      stat: "50+",
      statLabel: "Experts",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Industry Experience",
        "Academic Credentials",
        "Continuous Training",
      ],
    },
    {
      icon: Clock,
      title: "24/7 Round-the-Clock Support",
      desc: "Urgent deadline? Stuck at 3 AM? We're always available. Get instant responses on WhatsApp, email, or chat. Your success doesn't wait, and neither do we.",
      stat: "24/7",
      statLabel: "Available",
      color: "from-purple-500 to-pink-500",
      features: ["Instant Response", "Emergency Help", "Multiple Channels"],
    },
    {
      icon: Award,
      title: "100% Quality Guaranteed",
      desc: "Every project undergoes rigorous quality checks. We provide well-commented code, detailed documentation, and comprehensive explanations so you truly understand the concepts.",
      stat: "98%",
      statLabel: "Satisfaction",
      color: "from-orange-500 to-red-500",
      features: ["Quality Checks", "Detailed Comments", "Concept Explanations"],
    },
    {
      icon: CheckCircle,
      title: "Student-Friendly Pricing",
      desc: "We understand student budgets. Transparent pricing with no hidden costs, flexible payment options, and special discounts for bulk orders or repeat customers.",
      stat: "30%",
      statLabel: "Savings",
      color: "from-green-500 to-emerald-500",
      features: ["Transparent Pricing", "Flexible Payment", "Bulk Discounts"],
    },
    {
      icon: Rocket,
      title: "Lightning-Fast Delivery",
      desc: "Tight deadlines? No problem. We pride ourselves on delivering quality work on time, every time. Most projects completed 24-48 hours before deadline for your review.",
      stat: "99%",
      statLabel: "On-Time",
      color: "from-indigo-500 to-purple-500",
      features: ["Early Delivery", "Rush Available", "Progress Updates"],
    },
    {
      icon: Shield,
      title: "100% Confidential & Secure",
      desc: "Your privacy matters. We use encrypted communication, secure payment gateways, and never share your information. Your academic integrity is completely safe with us.",
      stat: "256-bit",
      statLabel: "Encryption",
      color: "from-pink-500 to-rose-500",
      features: ["Data Encryption", "Secure Payments", "Privacy Protected"],
    },
  ];

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
          rating: (4.9 * progress).toFixed(1),
          projects: Math.floor(500 * progress),
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section
      className="relative py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full mb-6 animate-fade-in">
            <Sparkles className="text-yellow-400 animate-spin-slow" size={20} />
            <span className="text-white font-semibold text-sm">
              Trusted by 1000+ Students
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 animate-fade-in-up">
            Why Students{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Choose Us
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 10C50 5 150 5 198 10"
                  stroke="url(#gradient2)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="gradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="50%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#F472B6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-delay">
            Join thousands of successful students who've transformed their
            academic journey with our expert guidance
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-500`}
              />

              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Icon with Badge */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <reason.icon className="text-white" size={32} />
                  </div>
                  {/* Stat Badge */}
                  <div className="absolute -top-2 -right-2 bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-black shadow-lg">
                    {reason.stat}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                  {reason.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {reason.desc}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {reason.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <CheckCircle
                        className={`text-green-400 flex-shrink-0 ${
                          activeCard === i ? "animate-bounce-slow" : ""
                        }`}
                        size={16}
                      />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stat Label */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-gray-500 text-sm font-medium">
                    {reason.statLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Testimonial Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-1 animate-fade-in-up">
          <div className="bg-slate-900 rounded-3xl p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 animate-bounce-slow"
                  size={32}
                  fill="currentColor"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-4xl mx-auto">
              "TheHelpingDude transformed my academic journey. Their experts
              explained complex ML concepts so clearly that I not only aced my
              project but also landed an internship at a top tech company!"
            </blockquote>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {[
                { icon: Shield, text: "Secure & Confidential" },
                { icon: Award, text: "Quality Guaranteed" },
                { icon: Heart, text: "Student First" },
                { icon: Zap, text: "Fast Delivery" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
                >
                  <badge.icon className="text-blue-400" size={20} />
                  <span className="text-white font-semibold text-sm">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-delay-2">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join 1000+ students who've achieved their academic goals with our
            expert support
          </p>
          <button className="group bg-white text-purple-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center space-x-3">
            <MessageCircle
              className="group-hover:scale-110 transition-transform"
              size={24}
            />
            <span>Chat with Us Now</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        .animate-fade-in-delay-2 {
          animation: fade-in-delay 0.8s ease-out 0.6s both;
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

export default WhyChooseUs;
