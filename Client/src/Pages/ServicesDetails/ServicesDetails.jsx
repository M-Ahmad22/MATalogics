import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Target,
  Code2,
  Zap,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Award,
  Shield,
  Sparkles,
  BarChart3,
  Rocket,
  Star,
  Eye,
  Settings,
  Database,
} from "lucide-react";
import { SITE_DATA } from "../../Data/ServiceDetails";
import TalkToExpert from "../../Components/TalkToExpert/TalkToExpert";
import RequestPricing from "../../Components/RequestPricing/RequestPricing";
import Map from "../../Components/Map/Map";

const ServicesDetails = () => {
  const { id } = useParams();
  const serviceId = Number(id); // convert to number
  const service = SITE_DATA.services.find((s) => s.id === serviceId);

  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  if (!service) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "var(--gradient-mesh)" }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1E1D28] mb-4">
            Service Not Found
          </h1>
          <Link to="/" className="btn-primary">
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  const nextImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % service.gallery.length);
  };

  const prevImage = () => {
    setCurrentGalleryIndex(
      (prev) => (prev - 1 + service.gallery.length) % service.gallery.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 2, 0, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    document.title = `${service.title} - MATalogics Premium Services`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", service.shortDescription);
    }
  }, [service]);

  const statsData = [
    {
      icon: Users,
      value: "500+",
      label: "Projects Delivered",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Success Rate",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Award,
      value: "24/7",
      label: "Premium Support",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Rocket,
      value: "50%",
      label: "Faster Delivery",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white overflow-hidden w-full ">
        {/* Animated Background */}
        <div
          className="fixed inset-0 z-0"
          // style={{ background: "var(--gradient-mesh)" }}
        />

        {/* Premium Hero Section */}
        <motion.section
          className="relative h-[750px] flex items-center overflow-hidden mobile:h-auto "
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <div className="absolute inset-0">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>
            <div
              className="absolute inset-0"
              style={{ background: "var(--gradient-premium)", opacity: 0.7 }}
            ></div>
          </div>

          <div className="relative z-20 w-[80%] mx-auto px-6 py-32 mt-[30px] mobile:mt-[10px] mobile:w-[90%]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 font-manrope"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Services
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={itemVariants}
                  className="flex items-center mb-8"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-600/40 blur-xl rounded-full" />
                    <div className="relative w-[70px] h-[70px] card-luxury flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-sm font-medium text-blue-300 font-manrope tracking-wider uppercase">
                      Premium Service
                    </div>
                    <div className="text-white/60 font-manrope">
                      Enterprise Solutions
                    </div>
                  </div>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-8 leading-tight font-outfit"
                >
                  {service.title}
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-xl md:text-1xl text-white/80 mb-12 leading-relaxed font-manrope"
                >
                  {service.shortDescription}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <Link to="/contact">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative flex items-center">
                        Start Your Project
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Premium Stats Card */}
              <motion.div variants={itemVariants} className="relative">
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="card-luxury p-7 backdrop-blur-2xl w-[700px] mobile:w-[100%] mobile:p-4"
                >
                  <div className="grid grid-cols-4 gap-14 mobile:grid-cols-2 mobile:gap-4">
                    {statsData.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 mobile:w-[60px] mobile:h-[60px]`}
                        >
                          <stat.icon className="w-8 h-8 text-white " />
                        </div>
                        <div className="text-3xl font-bold text-white font-outfit mb-1 mobile:text-[20px] mobile:mb-0">
                          {stat.value}
                        </div>
                        <div className="text-white/70 text-sm font-manrope mobile:text-[14px]">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Service Overview & Impact */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E1D28] mb-6 font-outfit">
                What We <span className="text-[#0045E6]">Deliver</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-[#2d3748] leading-relaxed font-montserrat mb-12 mobile:text-justify">
                  {service.detailedDescription}
                </p>
              </div>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              {[
                {
                  icon: TrendingUp,
                  title: "Revenue Growth",
                  desc: "Average 40% increase in operational efficiency",
                  value: "40%",
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  desc: "Bank-grade security for all implementations",
                  value: "99.9%",
                },
                {
                  icon: Rocket,
                  title: "Faster Deployment",
                  desc: "50% faster time-to-market vs traditional methods",
                  value: "50%",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-2xl border border-[#EAECF0] hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-[#0045E6] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E1D28] mb-2 font-outfit">
                    {item.title}
                  </h3>
                  <p className="text-[#2d3748] text-sm mb-3 font-montserrat">
                    {item.desc}
                  </p>
                  <div className="text-3xl font-bold text-[#0045E6] font-outfit">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Process & Deliverables */}
        <motion.section
          className="py-20 bg-[#F8F8F9]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Process Section */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#0045E6] rounded-xl flex items-center justify-center mr-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1E1D28] font-outfit">
                    Our <span className="text-[#0045E6]">Process</span>
                  </h3>
                </div>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      variants={itemVariants}
                    >
                      <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#EAECF0] hover:shadow-lg transition-all duration-300">
                        <div className="w-8 h-8 bg-[#0045E6] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-[#2d3748] font-montserrat leading-relaxed flex-1">
                          {step}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Deliverables Section */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#0045E6] rounded-xl flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1E1D28] font-outfit">
                    <span className="text-[#0045E6]">Deliverables</span>
                  </h3>
                </div>
                <div className="space-y-4">
                  {service.deliverables.map((deliverable, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      variants={itemVariants}
                    >
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#EAECF0] hover:shadow-lg transition-all duration-300">
                        <div className="w-8 h-8 bg-[#0045E6] rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-[#2d3748] font-montserrat flex-1">
                          {deliverable}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="w-[80%] mx-auto px-6">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h3 className="text-4xl font-bold text-[#1E1D28] mb-6 font-outfit">
                Technology <span className="text-[#0045E6]">Stack</span>
              </h3>
              <p className="text-lg text-[#2d3748] max-w-3xl mx-auto font-montserrat mobile:text-justify">
                Cutting-edge technologies and proven frameworks for robust,
                scalable solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="group"
                  variants={itemVariants}
                >
                  <div className="bg-white p-6 rounded-2xl border border-[#EAECF0] hover:shadow-lg transition-all duration-300 text-center">
                    <div className="w-12 h-12 bg-[#0045E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-[#1E1D28] mb-2 font-outfit">
                      {tech.name}
                    </h4>
                    <p className="text-[#2d3748] text-sm font-montserrat leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
      <TalkToExpert />
      <RequestPricing />
      <Map />
    </>
  );
};

export default ServicesDetails;
