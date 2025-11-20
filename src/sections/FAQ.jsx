import React, { useState } from "react";
import {
  ChevronDown,
  Sparkles,
  Clock,
  Shield,
  Zap,
  MessageCircle,
  RefreshCw,
  Code,
  HelpCircle,
  CheckCircle,
} from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const faqs = [
    {
      icon: Clock,
      q: "How quickly can you deliver my project?",
      a: "We offer flexible turnaround times based on your urgency. Standard delivery is 2-3 days, express delivery is 24-48 hours, and rush delivery is same-day for urgent assignments. Premium members always get priority handling and faster response times!",
      color: "from-blue-500 to-cyan-500",
      popular: true,
    },
    {
      icon: Shield,
      q: "Is the work 100% original and plagiarism-free?",
      a: "Absolutely! Every line of code and documentation is written from scratch by our expert team. We provide free plagiarism reports using industry-standard tools like Turnitin and Copyscape. Your academic integrity is our top priority.",
      color: "from-green-500 to-emerald-500",
      popular: true,
    },
    {
      icon: Zap,
      q: "Can you help with urgent last-minute assignments?",
      a: "Yes, we specialize in urgent deliveries! We have a dedicated team for rush orders. Even if your deadline is just a few hours away, we'll do our best to help. Contact us immediately and we'll assess if we can meet your timeline.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: MessageCircle,
      q: "Do you provide detailed explanations and support?",
      a: "Yes! All deliverables include comprehensive comments in the code, detailed documentation explaining the logic, and architecture diagrams where applicable. Pro and Premium members also get optional video walkthroughs and live Q&A sessions to ensure you fully understand the solution.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: RefreshCw,
      q: "What if I need revisions or modifications?",
      a: "Pro and Premium plans include unlimited free revisions within 7 days of delivery. Basic plan members get 1 free revision, with additional revisions available at minimal cost. We're committed to your satisfaction and will work with you until you're completely happy with the result.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Code,
      q: "Which technologies and subjects do you support?",
      a: "We cover the entire computer science spectrum! Web development (React, Angular, Node.js), Mobile apps (iOS, Android, Flutter), AI/ML (TensorFlow, PyTorch), Data Science (Python, R), Cloud platforms (AWS, Azure, GCP), Databases (SQL, MongoDB), and much more. If it's CS-related, we can help!",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: CheckCircle,
      q: "How do I ensure quality before making payment?",
      a: "We offer a clear milestone-based payment system. You can review partial work or demos before final payment. We also maintain transparent communication throughout the project. Check our reviews and testimonials from 1000+ satisfied students!",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: HelpCircle,
      q: "Is my information kept confidential?",
      a: "100% confidential! We use encrypted communication channels, secure payment gateways, and strict data privacy protocols. Your personal information, project details, and academic records are never shared with third parties. We take your privacy as seriously as you do.",
      color: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <section
      id="faq"
      className="relative py-32 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Question Mark Pattern */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl font-black text-blue-200/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            ?
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6 animate-fade-in">
            <Sparkles className="text-blue-600 animate-spin-slow" size={20} />
            <span className="text-blue-700 font-semibold text-sm">
              Got Questions? We've Got Answers!
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 animate-fade-in-up">
            Frequently Asked{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Questions
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 10C50 5 150 5 198 10"
                  stroke="url(#gradient3)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="gradient3"
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

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
            Everything you need to know about our services, processes, and
            guarantees
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${faq.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500`}
              />

              {/* Card */}
              <div
                className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 transition-all duration-500 overflow-hidden ${
                  openIndex === i
                    ? "border-blue-500 shadow-2xl shadow-blue-500/20"
                    : "border-gray-200 hover:border-blue-300 hover:shadow-xl"
                }`}
              >
                {/* Popular Badge */}
                {faq.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-bl-2xl rounded-tr-3xl">
                    Most Asked
                  </div>
                )}

                {/* Question Button */}
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between group/button transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${faq.color} rounded-xl flex items-center justify-center shadow-lg group-hover/button:scale-110 group-hover/button:rotate-6 transition-all duration-300`}
                    >
                      <faq.icon className="text-white" size={24} />
                    </div>

                    {/* Question Text */}
                    <span className="font-bold text-gray-900 text-lg md:text-xl group-hover/button:text-transparent group-hover/button:bg-gradient-to-r group-hover/button:from-blue-600 group-hover/button:to-purple-600 group-hover/button:bg-clip-text transition-all">
                      {faq.q}
                    </span>
                  </div>

                  {/* Chevron */}
                  <div
                    className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full bg-gradient-to-br ${
                      faq.color
                    } flex items-center justify-center transition-all duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="text-white" size={20} />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === i
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div
                      className={`p-6 bg-gradient-to-r ${faq.color} bg-opacity-5 rounded-2xl border-l-4 border-gradient`}
                      style={{
                        borderImageSource: `linear-gradient(to bottom, var(--tw-gradient-stops))`,
                      }}
                    >
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float ease-in-out infinite;
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
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
