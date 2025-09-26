import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  BookOpen,
  Users,
  Award,
  Clock,
  Star,
  CheckCircle,
  XCircle,
  Code,
  Database,
  Smartphone,
  Bot,
  Target,
  Lightbulb,
  Shield,
  Zap,
  TrendingUp,
  MessageSquare,
  Calendar,
  Play,
  X,
  Workflow,
} from "lucide-react";
import heroImage from "../../assets/EDUBanner.jpg";
import SocialPost from "../../assets/socialMediaPosts.jpg";
import CEOVision from "../../assets/CEOVision.jpg";
import WebCourse from "../../assets/WebCourse.jpg";
import AiCourse from "../../assets/AICourse.jpg";
import AgenticCourse from "../../assets/AgenticAiCourse.jpg";
import { Helmet } from "react-helmet-async";

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Master modern web development with React, Node.js, and cloud deployment strategies.",
    price: "27000 RS",
    originalPrice: "35000 RS",
    duration: "12 weeks",
    level: "Advanced",
    students: "2,847",
    rating: 4.9,
    image: WebCourse,
    features: [
      "React mastery",
      "Node.js & Express backend development",
      "Database design & optimization",
      "Cloud deployment with AWS & Vercel",
      "Build a real-world project portfolio",
      "1-on-1 mentorship & career guidance",
      "Real World Project",
    ],
    syllabus: [
      "Frontend Fundamentals (HTML, CSS, JavaScript)",
      "React Advanced Patterns & State Management",
      "Node.js & Express Backend Architecture",
      "Database Management (SQL/NoSQL)",
      "REST & GraphQL API Development",
      "DevOps, Testing & Cloud Deployment",
    ],
  },
  {
    id: 2,
    title: "AI & Machine Learning Specialist",
    description:
      "Dive deep into AI algorithms, neural networks, and practical ML implementations.",
    price: "26000 RS",
    originalPrice: "35000 RS",
    duration: "12 weeks",
    level: "Advanced",
    students: "1,243",
    rating: 4.8,
    image: AiCourse,
    features: [
      "Python & TensorFlow mastery",
      "Deep learning architectures",
      "Computer vision projects",
      "NLP & language models",
      "MLOps & model deployment",
      "Industry case studies",
    ],
    syllabus: [
      "Data Analysis & Preprocessing",
      "ML Fundamentals",
      "Neural Networks",
      "Model Deployment",
      "Gen AI, Hugging Face",
      "AI Ethics & Governance",
      "Capstone Project: Build Your Own AI Ecosystem",
    ],
  },
  {
    id: 3,
    title: "Agentic Ai Specialist",
    description:
      "Build cross-platform mobile applications with React Native and Flutter.",
    price: "25000 RS",
    originalPrice: "35000 RS",
    duration: "10 weeks",
    level: "Advance",
    students: "3,156",
    rating: 4.7,
    image: AgenticCourse,
    features: [
      "Hands-on training with n8n, Zapier, Voxiqo & Vapi",
      "Build AI Calling Agents & Chatbots",
      "End-to-end Integrations across platforms",
      "Prompt Engineering & Model Fine-tuning",
      "Automation for Web, Mobile & APIs",
      "Real-world Projects & Case Studies",
    ],
    syllabus: [
      "Introduction to Agentic AI & Intelligent Automation",
      "n8n Workflow Automation – Triggers, Actions & Webhooks",
      "Zapier Integrations for Cross-Platform Automation",
      "Building AI Calling Agents with Voxiqo & Vapi",
      "Chatbots & Conversational Interfaces",
      "Prompt Engineering & Model Selection",
      "Connecting AI to APIs, CRMs, and Databases",
      "Deployment & Scaling of Agents",
      "Security, Privacy & Compliance in AI Agents",
      "Capstone Project: Build Your Own AI Automation Ecosystem",
    ],
  },
];

const testimonials = [
  {
    name: "Mahnoor Imran",
    role: "Full Stack Developer at Google",
    content:
      "The strategic approach at MATalogics transformed my career. The hands-on projects and mentorship were invaluable.",
    rating: 5,
  },
  {
    name: "Hamza Tahir",
    role: "AI Engineer ",
    content:
      "Unlike other programs, MATalogics focuses on real-world applications. I landed my dream job within 3 months of graduation.",
    rating: 5,
  },
  {
    name: "Muhammad",
    role: "Mobile App Founder",
    content:
      "The comprehensive curriculum and industry connections helped me launch my own successful app startup.",
    rating: 5,
  },
];

const AnimatedSection = ({ children, className = "" }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const CounterAnimation = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <span
      ref={ref}
      className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#4299e1] to-[#63b3ed] bg-clip-text text-transparent"
    >
      {count}
      {suffix}
    </span>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative z-10 bg-[#1a202c]/90 backdrop-blur-md border border-gray-600 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <>
      {" "}
      <Helmet>
        <title>
          MATalogics | Full Stack Web, AI & Agentic AI Courses in Pakistan
        </title>
        <meta
          name="description"
          content="Join MATalogics and master Full Stack Web Development, AI & Machine Learning, and Agentic AI. Industry-led curriculum, real projects, mentorship, and career growth."
        />
        <meta
          name="keywords"
          content="Full Stack Web Development, AI Courses, Agentic AI, Online Courses, Programming Bootcamp, React, Node.js, AI ML, Agentic AI Pakistan"
        />
        <link rel="canonical" href="https://matalogics.com/courses" />

        {/* Open Graph */}
        <meta property="og:title" content="MATalogics | Courses" />
        <meta
          property="og:description"
          content="Join MATalogics to master Full Stack Web Development, AI & ML, and Agentic AI with hands-on projects and mentorship."
        />
        <meta
          property="og:image"
          content="https://matalogics.com/path/to/courses-og-image.jpg"
        />
        <meta property="og:url" content="https://matalogics.com/courses" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MATalogics | Courses" />
        <meta
          name="twitter:description"
          content="Master Full Stack, AI & ML, and Agentic AI at MATalogics. Industry-led curriculum and mentorship."
        />
        <meta
          name="twitter:image"
          content="https://matalogics.com/path/to/courses-og-image.jpg"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "MATalogics",
        "url": "https://matalogics.com",
        "logo": "https://matalogics.com/path/to/logo.png",
        "sameAs": [
          "https://www.facebook.com/matalogics",
          "https://twitter.com/matalogics",
          "https://www.linkedin.com/company/matalogics/"
        ],
        "hasCourse": ${JSON.stringify(
          courses.map((course) => ({
            "@type": "Course",
            name: course.title,
            description: course.description,
            provider: {
              "@type": "Organization",
              name: "MATalogics",
              sameAs: "https://matalogics.com",
            },
            educationalCredentialAwarded: "Certificate of Completion",
          }))
        )}
      }
    `}
        </script>
      </Helmet>
      <div className="h-auto bg-[#1a202c] overflow-hidden relative mobile:w-[100%]">
        {/* Hero Section */}
        <section className="relative h-[100vh] mobile:h-auto flex items-center justify-center overflow-hidden mobile:w-full">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Futuristic technology background"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#000]/90 via-[#000]/50 to-[#000]/70"></div>
          </div>

          <div className="relative z-10 h-auto  mx-auto px-6 text-center mobile:w-[80%] mobile:px-0 mobile:mx-0 mobile:mt-[130px] mobile:mb-[40px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1
                className="text-4xl md:text-7xl font-bold text-white font-Satoshi"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Strategic Learning, MATalogics Way
              </motion.h1>

              <motion.p
                className="text-md md:text-2xl text-gray-100 max-w-4xl mx-auto font-inter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Master Cutting Edge Technologies with our Industry Leading
                courses. From AI to Full Stack development, we engineer your
                success.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="https://wa.me/923096311196?text=Hi%20I%20want%20to%20enroll%20in%20your%20course"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-8 py-4 bg-transparent backdrop-blur-xl border border-gray-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-[#4299e1]/30 w-[250px] mobile:w-[220px]">
                    <BookOpen className="mr-2 h-5 w-5 inline" />
                    Enroll Now
                  </button>
                </a>

                <a
                  href="https://wa.me/923096311196?text=Hi%20I%20want%20a%20free%20demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-8 py-4 bg-transparent border border-gray-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform backdrop-blur-xl shadow-lg shadow-[#4299e1]/30 w-[250px] mobile:w-[220px]">
                    <Play className="mr-2 h-5 w-5 inline" />
                    Get Free Demo
                  </button>
                </a>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="bg-[#2d3748]/20 backdrop-blur-md border border-gray-600 rounded-lg p-6 text-center shadow-lg ">
                  <CounterAnimation target={150} suffix="+" />
                  <p className="text-gray-400 mt-2">Projects Delivered</p>
                </div>
                <div className="bg-[#2d3748]/20 backdrop-blur-md border border-gray-600 rounded-lg p-6 text-center shadow-lg">
                  <CounterAnimation target={500} suffix="+" />
                  <p className="text-gray-400 mt-2">Students Trained</p>
                </div>
                <div className="bg-[#2d3748]/20 backdrop-blur-md border border-gray-600 rounded-lg p-6 text-center shadow-lg">
                  <CounterAnimation target={98} suffix="%" />
                  <p className="text-gray-400 mt-2">Job Placement Rate</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <AnimatedSection className="py-20 relative z-10">
          <div className="w-[90%] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Who We Are & What We Offer
                </h2>
                <p className="text-lg text-gray-400">
                  MATalogics is a premium technology education platform that
                  specializes in strategic learning methodologies. We don't just
                  teach we engineer careers through comprehensive, industry
                  Aligned courses designed by experts.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#2d3748]/80 backdrop-blur-md border border-gray-600 rounded-lg p-4 text-center">
                    <Code className="h-8 w-8 text-[#4299e1] mx-auto mb-2" />
                    <p className="font-semibold text-white">Development</p>
                  </div>
                  <div className="bg-[#2d3748]/80 backdrop-blur-md border border-gray-600 rounded-lg p-4 text-center">
                    <Bot className="h-8 w-8 text-[#ff8800] mx-auto mb-2" />
                    <p className="font-semibold text-white">AI & ML</p>
                  </div>
                  <div className="bg-[#2d3748]/80 backdrop-blur-md border border-gray-600 rounded-lg p-4 text-center">
                    <Smartphone className="h-8 w-8 text-[#4299e1] mx-auto mb-2" />
                    <p className="font-semibold text-white">Mobile Apps</p>
                  </div>
                  <div className="bg-[#2d3748]/80 backdrop-blur-md border border-gray-600 rounded-lg p-4 text-center">
                    <Workflow className="h-8 w-8 text-[#ff8800] mx-auto mb-2" />
                    <p className="font-semibold text-white">AI Automation</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#2d3748]/80 backdrop-blur-md border border-gray-600 rounded-lg p-1 flex mobile:flex-col">
                <img
                  src={SocialPost}
                  alt="Modern learning environment"
                  className="w-[50%] h-[100%] object-cover rounded-lg mobile:w-full"
                />
                <img
                  src={CEOVision}
                  alt="Modern learning environment"
                  className="w-[50%] h-[100%] object-cover rounded-lg mobile:w-full"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Courses Section */}
        <AnimatedSection className="py-20 bg-[#2d3748]/20 relative z-10 w-full">
          <div className="w-full flex justify-center items-center flex-col px-0 ">
            <div className="text-center mb-16 w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Featured Courses
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Industry-leading curriculum designed to transform you into a
                tech professional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] w-[90%]">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-[#1a202c]/90 backdrop-blur-md border border-gray-600 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-[#4299e1]/30 h-full w-[90%] mobile:w-[100%]">
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-auto object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{course.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.students}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-[#ff8800] text-[#ff8800]" />
                          {course.rating}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-[#4299e1]">
                            {course.price}
                          </span>
                          <span className="text-gray-400 line-through ml-2">
                            {course.originalPrice}
                          </span>
                        </div>
                      </div>
                      <button
                        className="w-full px-6 py-3 bg-[#4299e1] text-white rounded-lg font-semibold hover:bg-[#3182ce] transition-colors"
                        onClick={() => openModal(course)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Course Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {selectedCourse && (
            <div className="p-6 mobile:h-[600px]">
              <h2 className="text-2xl font-bold text-white mb-4">
                {selectedCourse.title}
              </h2>
              <p className="text-gray-400 mb-6">{selectedCourse.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                    Course Features:
                  </h4>
                  <ul className="space-y-1">
                    {selectedCourse.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <CheckCircle className="h-4 w-4 text-[#4299e1]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">Syllabus:</h4>
                  <ul className="space-y-1">
                    {selectedCourse.syllabus.map((topic, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <BookOpen className="h-4 w-4 text-[#ff8800]" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-gray-600 mt-6">
                <div>
                  <span className="text-3xl font-bold text-[#4299e1]">
                    {selectedCourse.price}
                  </span>
                  <span className="text-gray-400 line-through ml-2">
                    {selectedCourse.originalPrice}
                  </span>
                </div>
                {/* <button className="px-8 py-3 bg-[#4299e1] text-white rounded-lg font-semibold hover:bg-[#3182ce] transition-colors shadow-lg shadow-[#4299e1]/30">
                Enroll Now
              </button> */}
              </div>
            </div>
          )}
        </Modal>

        {/* Why Choose Us Section */}
        <AnimatedSection className="py-20 relative z-10">
          <div className="w-[90%] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why Choose MATalogics?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We don't just follow trends we set them. Here's what makes us
                different.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Strategic Approach",
                  description:
                    "Every lesson is strategically designed to build upon previous knowledge while preparing you for real-world challenges.",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation First",
                  description:
                    "We stay ahead of industry trends, ensuring you learn the most current and in-demand technologies.",
                },
                {
                  icon: Users,
                  title: "Expert Mentorship",
                  description:
                    "Learn from industry veterans who have built products for Fortune 500 companies and successful startups.",
                },
                {
                  icon: Award,
                  title: "Certification",
                  description:
                    "Earn industry-recognized certifications that employers actively seek when hiring.",
                },
                {
                  icon: TrendingUp,
                  title: "Career Growth",
                  description:
                    "98% of our graduates see significant salary increases within 6 months of completing their courses.",
                },
                {
                  icon: Zap,
                  title: "Hands-on Projects",
                  description:
                    "Build a portfolio of real-world projects that demonstrate your expertise to potential employers.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#2d3748]/80 backdrop-blur-md border border-gray-600 rounded-lg p-6 text-center hover:scale-105 transition-transform shadow-lg"
                >
                  <item.icon className="h-12 w-12 text-[#4299e1] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Our Strategy Section */}
        <AnimatedSection className="py-20 bg-[#2d3748]/20 relative z-10">
          <div className="w-[90%] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our Strategic Methodology
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A proven 6-step approach that transforms beginners into industry
                professionals
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#4299e1] to-[#ff8800]"></div>

              {[
                {
                  title: "Assessment & Goal Setting",
                  description:
                    "We evaluate your current skills and define clear learning objectives.",
                },
                {
                  title: "Foundation Building",
                  description:
                    "Establish strong fundamentals before diving into advanced concepts.",
                },
                {
                  title: "Hands-on Practice",
                  description:
                    "Apply knowledge through guided projects and real-world scenarios.",
                },
                {
                  title: "Mentorship & Feedback",
                  description:
                    "Receive personalized guidance from industry experts.",
                },
                {
                  title: "Portfolio Development",
                  description:
                    "Build impressive projects that showcase your newfound expertise.",
                },
                {
                  title: "Career Placement",
                  description:
                    "Get connected with our network of hiring partners and land your dream job.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-[#2d3748]/80 backdrop-blur-md border border-gray-600 rounded-lg p-6 shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-[#4299e1] rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-[#ff8800] rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* What Others Don't Do Section */}
        <AnimatedSection className="py-20 relative z-10">
          <div className="w-[90%] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                What Others Don't Do,{" "}
                <span className="bg-gradient-to-r from-[#4299e1] to-[#63b3ed] bg-clip-text text-transparent">
                  But We Do
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Here's why MATalogics stands apart from traditional education
                platforms
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  feature: "1-on-1 Mentorship Sessions",
                  us: true,
                  others: false,
                },
                {
                  feature: "Real Company Project Experience",
                  us: true,
                  others: false,
                },
                { feature: "Job Placement Guarantee", us: true, others: false },
                {
                  feature: "Industry-Current Curriculum",
                  us: true,
                  others: true,
                },
                { feature: "Lifetime Course Access", us: true, others: false },
                {
                  feature: "Networking with Tech Leaders",
                  us: true,
                  others: false,
                },
                { feature: "Basic Video Lessons", us: true, others: true },
                {
                  feature: "Career Transition Support",
                  us: true,
                  others: false,
                },
                {
                  feature: "Live Code ",
                  us: true,
                  others: false,
                },
                {
                  feature: "Developing Problem Solving Skills",
                  us: true,
                  others: false,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#2d3748]/80 backdrop-blur-md border border-gray-600 rounded-lg p-6 flex items-center justify-between shadow-lg"
                >
                  <span className="font-medium text-white">{item.feature}</span>
                  <div className="flex gap-8">
                    <div className="text-center">
                      <p className="text-sm text-gray-400 mb-1">MATalogics</p>
                      {item.us ? (
                        <CheckCircle className="h-6 w-6 text-[#4299e1] mx-auto" />
                      ) : (
                        <XCircle className="h-6 w-6 text-gray-400 mx-auto" />
                      )}
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-400 mb-1">Others</p>
                      {item.others ? (
                        <CheckCircle className="h-6 w-6 text-[#4299e1] mx-auto" />
                      ) : (
                        <XCircle className="h-6 w-6 text-gray-400 mx-auto" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Enroll Now & Discount Section */}
        <AnimatedSection className="py-20  relative z-10  bg-[#2d3748]/20 ">
          <div className="mobile:w-[90%] w-[50%] mx-auto px-6 text-center mobile:px-1">
            <div className="bg-[#2d3748]/80 backdrop-blur-md border border-gray-600 rounded-lg p-12 max-w-4xl mx-auto shadow-lg mobile:p-4 ">
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-white">
                Limited Time:{" "}
                <span className="bg-gradient-to-r from-[#4299e1] to-[#63b3ed] bg-clip-text text-transparent">
                  25% Off
                </span>{" "}
                Early Bird Special
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the next cohort starting in 2 weeks. Only 20 spots
                remaining!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
                <a
                  href="https://wa.me/923096311196?text=Hi%20I%20want%20to%20enroll%20in%20your%20course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-8 py-3 bg-[#4299e1] text-white rounded-lg font-semibold hover:bg-[#3182ce] transition-colors shadow-lg shadow-[#4299e1]/30 text-center"
                >
                  Get 25% Off Now
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Calendar className="h-8 w-8 text-[#4299e1] mx-auto mb-2" />
                  <p className="font-semibold text-white">Next Cohort</p>
                  <p className="text-gray-400">October 6, 2025</p>
                </div>
                <div>
                  <Users className="h-8 w-8 text-[#ff8800] mx-auto mb-2" />
                  <p className="font-semibold text-white">Spots Left</p>
                  <p className="text-gray-400">20 / 50</p>
                </div>
                <div>
                  <Clock className="h-8 w-8 text-[#4299e1] mx-auto mb-2" />
                  <p className="font-semibold text-white">Offer Expires</p>
                  <p className="text-gray-400">7 days</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Certification Details */}
        <AnimatedSection className="py-20  relative z-10">
          <div className="w-[90%] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Industry Recognized Certifications
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Earn credentials that employers actively seek when hiring
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "MATalogics Certified",
                  description: "Professional Developer",
                },
                {
                  icon: Lightbulb,
                  title: "Full Stack Web Development",
                  description: "MERN Stack Mastery",
                },
                {
                  icon: Smartphone,
                  title: "Full Stack Flutter Development",
                  description: "Mobile App Development",
                },
                {
                  icon: Bot,
                  title: "Agentic AI ",
                  description: "No Code Automation",
                },
                {
                  icon: Shield,
                  title: "Security Professional",
                  description: "Cybersecurity Specialist",
                },
                {
                  icon: Bot,
                  title: "AI Practitioner",
                  description: "Machine Learning / Deep Learning Expert",
                },
                {
                  icon: Lightbulb,
                  title: "Digital Media Marketing",
                  description: "Social Media Marketing",
                },
                {
                  icon: Bot,
                  title: "Freelancing",
                  description: "Fiverr/Upwork",
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#2d3748]/80 backdrop-blur-md border border-gray-600 rounded-lg p-6 text-center shadow-lg"
                >
                  <cert.icon className="h-16 w-16 text-[#4299e1] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Student Reviews */}
        <AnimatedSection className="py-20 relative z-10">
          <div className="w-[90%] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                What Our Students Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real feedback from real students who transformed their careers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-[#2d3748]/80 backdrop-blur-md border border-gray-600 rounded-lg p-6 shadow-lg"
                >
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#ff8800] text-[#ff8800]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-400 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default CoursesPage;
