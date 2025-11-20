/**
 * Application Constants
 */

// Contact Information
export const CONTACT_INFO = {
  email: "support@thehelpingdude.com",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  address: "Hyderabad, Telangana, India",
  workingHours: "24/7 Available",
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/thehelpingdude",
  twitter: "https://twitter.com/thehelpingdude",
  linkedin: "https://linkedin.com/company/thehelpingdude",
  instagram: "https://instagram.com/thehelpingdude",
  github: "https://github.com/thehelpingdude",
  youtube: "https://youtube.com/@thehelpingdude",
};

// Service Categories
export const SERVICE_CATEGORIES = [
  "Assignments",
  "Final Year Projects",
  "Mini Projects",
  "Research Papers",
  "Documentation",
  "Coding Help",
  "Web Development",
  "Mobile Development",
  "Machine Learning",
  "AI & Deep Learning",
  "Data Science",
  "Cloud Services",
  "Database Design",
  "API Development",
  "Code Review",
];

// Technologies
export const TECHNOLOGIES = {
  frontend: [
    "React.js",
    "Next.js",
    "Vue.js",
    "Angular",
    "Tailwind CSS",
    "Bootstrap",
    "Material-UI",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Python Django",
    "Flask",
    "FastAPI",
    "Java Spring Boot",
  ],
  mobile: ["React Native", "Flutter", "Android (Java/Kotlin)", "iOS (Swift)"],
  aiml: [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Keras",
    "OpenCV",
    "NLP Libraries",
  ],
  dataScience: [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Jupyter",
  ],
  databases: [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "Redis",
    "DynamoDB",
  ],
  cloud: ["AWS", "Google Cloud", "Azure", "Heroku", "Vercel", "Netlify"],
  tools: ["Git", "Docker", "Kubernetes", "Jenkins", "Postman", "VS Code"],
};

// Pricing Plans
export const PRICING_PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: 999,
    period: "month",
    popular: false,
    features: [
      "5 Small assignments/month",
      "Email support",
      "48-hour turnaround",
      "Basic documentation",
      "Code with comments",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 2499,
    period: "month",
    popular: true,
    features: [
      "10 Assignments/month",
      "1 Mini project included",
      "24/7 chat support",
      "24-hour turnaround",
      "Detailed documentation",
      "Free revisions (2x)",
      "Video explanations",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 4999,
    period: "month",
    popular: false,
    features: [
      "Unlimited assignments",
      "1 Major project included",
      "Priority 24/7 support",
      "Same-day turnaround",
      "Complete documentation",
      "Unlimited revisions",
      "1-on-1 video sessions",
      "Deployment assistance",
    ],
  },
];

// FAQ Data
export const FAQ_DATA = [
  {
    question: "How quickly can you deliver?",
    answer:
      "We offer same-day to 48-hour turnaround depending on project complexity and your chosen plan. Premium members get priority handling.",
  },
  {
    question: "Is the work original?",
    answer:
      "Absolutely! We write 100% original code and documentation. Plagiarism reports available on request.",
  },
  {
    question: "Can you help with urgent assignments?",
    answer:
      "Yes! We specialize in urgent deliveries. Premium plan members get same-day turnaround.",
  },
  {
    question: "Do you provide explanations?",
    answer:
      "Yes, all deliverables include detailed comments, documentation, and optional video explanations for Pro and Premium members.",
  },
  {
    question: "What if I need revisions?",
    answer:
      "Pro and Premium plans include free revisions. Basic plan revisions are charged separately but at minimal cost.",
  },
  {
    question: "Which technologies do you support?",
    answer:
      "We cover all major CS technologies including web development, mobile apps, AI/ML, data science, and cloud platforms.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Yes, complete confidentiality guaranteed. We never share your information or projects with anyone.",
  },
  {
    question: "Can you help during exams?",
    answer:
      "We provide conceptual guidance and study materials, but do not support academic dishonesty during exams.",
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "B.Tech CSE, Final Year",
    text: "TheHelpingDude saved my final year! They helped me build a complete ML-based recommendation system with flawless documentation. Got an A+ and learned so much in the process.",
    rating: 5,
    avatar: "/avatars/rahul.jpg",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "MCA Student",
    text: "Best decision I made was reaching out to them. The team explained every concept clearly and delivered my web app project before the deadline. Highly professional!",
    rating: 5,
    avatar: "/avatars/priya.jpg",
  },
  {
    id: 3,
    name: "Arjun Kumar",
    role: "M.Tech Student",
    text: "I was stuck on my thesis research paper for weeks. They helped me structure my ideas, conduct proper analysis, and format everything perfectly. Couldn't have done it without them!",
    rating: 5,
    avatar: "/avatars/arjun.jpg",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "B.Tech 3rd Year",
    text: "Needed urgent help with Python assignments. They delivered high-quality code with detailed comments within 24 hours. Definitely using their services again!",
    rating: 5,
    avatar: "/avatars/sneha.jpg",
  },
];

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

// Stats for Hero Section
export const STATS = [
  { label: "1000+ Students", value: "Helped", icon: "Users" },
  { label: "95% Success", value: "Rate", icon: "Award" },
  { label: "24/7", value: "Support", icon: "Clock" },
  { label: "100%", value: "Original Work", icon: "CheckCircle" },
];

// Scroll Animation Settings
export const SCROLL_ANIMATION_CONFIG = {
  threshold: 0.1,
  triggerOnce: true,
  rootMargin: "-50px",
};
