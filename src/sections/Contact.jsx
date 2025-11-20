import React, { useState, useRef, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
  Clock,
  CheckCircle,
  Zap,
  Globe,
  Calendar,
} from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isEmailJsLoaded, setIsEmailJsLoaded] = useState(false);

  useEffect(() => {
    if (window.emailjs) {
      setIsEmailJsLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@latest/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      setIsEmailJsLoaded(true);
    };
    script.onerror = () => {
      console.error(
        "Contact form functionality failed to load. Please refresh."
      );
    };
    document.body.appendChild(script);

    return () => {};
  }, []);

  const handleChange = (e) => {
    if (submitted) {
      setSubmitted(false);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading || submitted || !isEmailJsLoaded) return;

    if (!window.emailjs) {
      console.error("EmailJS is not loaded.");
      alert("Failed to send message. Please try again in a moment.");
      return;
    }

    setLoading(true);

    window.emailjs
      .sendForm(
        "service_232k29d",
        "template_7pdtpzl",
        form.current,
        "AjnaU-BN1GOovAGwI"
      )
      .then(
        (result) => {
          console.log("EmailJS Success:", result.text);
          setSubmitted(true);
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log("EmailJS Error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "thehelpingdude@gmail.com",
      description: "Get response within 2 hours",
      color: "from-blue-500 to-cyan-500",
      link: "mailto:thehelpingdude@gmail.com",
      target: "_self",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 9063603164",
      description: "Mon-Sat, 9 AM - 9 PM IST",
      color: "from-green-500 to-emerald-500",
      link: "tel:+919063603164",
      target: "_self",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat Now",
      description: "Instant replies 24/7",
      color: "from-purple-500 to-pink-500",
      link: "https://wa.me/919063603164",
      target: "_blank",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, Telangana",
      description: "Serving students worldwide",
      color: "from-orange-500 to-red-500",
      link: "#",
      target: "_self",
    },
  ];

  const features = [
    { icon: Clock, text: "24/7 Available" },
    { icon: Zap, text: "Quick Response" },
    { icon: Globe, text: "Global Support" },
  ];

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-white/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        {[Mail, Phone, MessageCircle, Send].map((Icon, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10 hidden sm:block"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${10 + i * 2}s`,
            }}
          >
            <Icon size={56} className="text-white" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-xl border border-white/30 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 animate-fade-in">
            <Sparkles className="text-yellow-300 animate-spin-slow" size={16} />
            <span className="text-white font-semibold text-xs sm:text-sm">
              We're Here to Help You Succeed!
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 animate-fade-in-up px-2">
            Ready to Get{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Started?
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-yellow-300/30 via-pink-300/30 to-purple-300/30 blur-lg" />
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-delay px-4">
            Let's help you achieve academic excellence. Get in touch and start
            your success story today!
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 px-2">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center space-x-1.5 sm:space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <feature.icon className="text-yellow-300" size={16} />
                <span className="text-white font-semibold text-xs sm:text-sm">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 animate-slide-in-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 sm:mb-6 flex items-center space-x-2 sm:space-x-3">
                <MessageCircle className="text-yellow-300" size={24} />
                <span>Get in Touch</span>
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {contactMethods.map((method, i) => (
                  <a
                    key={i}
                    href={method.link}
                    target={method.target}
                    rel={
                      method.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group relative block"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-20 rounded-xl sm:rounded-2xl blur-xl transition-all duration-500`}
                    />

                    <div className="relative flex items-start space-x-3 sm:space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1">
                      <div
                        className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${method.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <method.icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1">
                          {method.title}
                        </h4>
                        <p className="text-blue-100 font-semibold text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1 break-all">
                          {method.value}
                        </p>
                        <p className="text-blue-200 text-xs sm:text-sm flex items-center space-x-1">
                          <CheckCircle size={12} />
                          <span>{method.description}</span>
                        </p>
                      </div>
                      <Send
                        className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0"
                        size={16}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 animate-fade-in-delay">
              {[
                { icon: Clock, value: "< 5min", label: "Response Time" },
                { icon: CheckCircle, value: "1000+", label: "Happy Students" },
                { icon: Calendar, value: "24/7", label: "Available" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <stat.icon
                    className="text-yellow-300 mx-auto mb-1 sm:mb-2"
                    size={18}
                  />
                  <div className="text-base sm:text-lg md:text-2xl font-black text-white mb-0.5 sm:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-[10px] sm:text-xs font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-tr-2xl sm:rounded-tr-3xl" />

              <div className="relative">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-1 sm:mb-2 flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Send className="text-white" size={16} />
                  </div>
                  <span>Send us a Message</span>
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
                  Fill out the form and we'll get back to you within 2 hours!
                </p>

                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 text-sm sm:text-base rounded-xl border-2 transition-all outline-none bg-white ${
                        focusedField === "name"
                          ? "border-blue-500 shadow-lg shadow-blue-500/20"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                    {focusedField === "name" && (
                      <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                        <Sparkles
                          className="text-blue-500 animate-pulse"
                          size={18}
                        />
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 text-sm sm:text-base rounded-xl border-2 transition-all outline-none bg-white ${
                        focusedField === "email"
                          ? "border-blue-500 shadow-lg shadow-blue-500/20"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                    {focusedField === "email" && (
                      <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                        <Sparkles
                          className="text-blue-500 animate-pulse"
                          size={18}
                        />
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (WhatsApp)"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 text-sm sm:text-base rounded-xl border-2 transition-all outline-none bg-white ${
                        focusedField === "phone"
                          ? "border-blue-500 shadow-lg shadow-blue-500/20"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                    {focusedField === "phone" && (
                      <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                        <Sparkles
                          className="text-blue-500 animate-pulse"
                          size={18}
                        />
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Tell us about your project or assignment..."
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 text-sm sm:text-base rounded-xl border-2 transition-all outline-none resize-none bg-white ${
                        focusedField === "message"
                          ? "border-blue-500 shadow-lg shadow-blue-500/20"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    ></textarea>
                    {focusedField === "message" && (
                      <div className="absolute right-3 sm:right-4 top-3 sm:top-4">
                        <Sparkles
                          className="text-blue-500 animate-pulse"
                          size={18}
                        />
                      </div>
                    )}
                  </div>

                  {submitted && (
                    <div className="flex items-center justify-center space-x-2 text-green-700 text-sm sm:text-base p-3 sm:p-4 bg-green-100 border border-green-300 rounded-xl">
                      <CheckCircle
                        className="text-green-600 flex-shrink-0"
                        size={18}
                      />
                      <span>Thank you! We'll be in touch soon.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || submitted || !isEmailJsLoaded}
                    className="group relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 sm:py-4 md:py-5 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    <span className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                      <span>
                        {loading
                          ? "Sending..."
                          : submitted
                          ? "Message Sent!"
                          : !isEmailJsLoaded
                          ? "Loading Form..."
                          : "Send Message"}
                      </span>
                      {!loading && !submitted && isEmailJsLoaded && (
                        <Send
                          className="group-hover:translate-x-1 transition-transform"
                          size={18}
                        />
                      )}
                      {submitted && <CheckCircle size={18} />}
                    </span>
                  </button>

                  {!submitted && (
                    <div className="flex items-center justify-center space-x-2 text-gray-600 text-xs sm:text-sm pt-3 sm:pt-4">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0"
                        size={14}
                      />
                      <span className="text-center">
                        Your information is 100% secure and confidential
                      </span>
                    </div>
                  )}
                </form>
              </div>
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
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
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
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
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

export default Contact;
