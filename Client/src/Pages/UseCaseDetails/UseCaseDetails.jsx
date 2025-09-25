import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Building,
  Calendar,
  TrendingUp,
  Users,
  Clock,
  Target,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { SITE_DATA } from "../../Data/UseCases";
import TalkToExpert from "../../Components/TalkToExpert/TalkToExpert";
import RequestPricing from "../../Components/RequestPricing/RequestPricing";
import Map from "../../Components/Map/Map";

const UseCaseDetails = () => {
  const { id } = useParams();
  const useCase = SITE_DATA.useCases.find((u) => u.id === Number(id));
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  if (!useCase) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFFFFF] via-[#f8fafc] to-[#e2e8f0]">
        <div className="text-center w-[500px]">
          <h1 className="text-4xl font-bold text-[#1E1D28] mb-4">
            Use Case Not Found
          </h1>
          <Link to="/">
            <div className="flex w-[200px] h-[50px] bg-[#0045E6] justify-center items-center rounded-2xl text-[#ffffff] text-[19px] mx-auto cursor-pointer transition-colors duration-300">
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Home
            </div>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = useCase.icon;

  const nextImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % useCase.gallery.length);
  };

  const prevImage = () => {
    setCurrentGalleryIndex(
      (prev) => (prev - 1 + useCase.gallery.length) % useCase.gallery.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  React.useEffect(() => {
    document.title = `${useCase.title} - MATalogics Case Study`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", useCase.summary);
    }
  }, [useCase]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#f8fafc] to-[#e2e8f0]">
        {/* Hero Section */}
        <motion.section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0">
            <img
              src={useCase.heroImage}
              alt={useCase.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient opacity-90"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
            <motion.div variants={itemVariants} className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300 font-manrope"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back to Home
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mr-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-white/80 font-manrope text-sm">
                      Case Study
                    </div>
                    <div className="text-[#4299e1] font-semibold font-manrope">
                      {useCase.client}
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight font-outfit">
                  {useCase.title}
                </h1>

                <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed font-manrope">
                  {useCase.executiveSummary}
                </p>

                <div className="flex items-center gap-6 text-white/80 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-manrope">{useCase.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    <span className="font-manrope">Enterprise</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="card-modern p-8 backdrop-blur-xl bg-white/1 border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6 font-outfit">
                    Key Results
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl">
                      <span className="text-white/80 font-manrope">
                        Order Processing
                      </span>
                      <span className="text-2xl font-bold gradient-text-orange">
                        {useCase.outcome.orderProcessing}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl">
                      <span className="text-white/80 font-manrope">
                        Cost Savings
                      </span>
                      <span className="text-2xl font-bold gradient-text-orange">
                        {useCase.outcome.costSavings}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl">
                      <span className="text-white/80 font-manrope">
                        ROI Achieved
                      </span>
                      <span className="text-2xl font-bold gradient-text-orange">
                        {useCase.outcome.roi}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Client Background */}
        <motion.section
          className="py-24 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E1D28] mb-8 font-outfit">
                Client <span className=" text-[#0045E6]">Background</span>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
                <div className="card-modern p-6 text-center">
                  <Users className="w-10 h-10 text-[#0045E6] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[#1E1D28] mb-2 font-outfit">
                    15,000+
                  </div>
                  <div className="text-[#2d3748] font-manrope">Employees</div>
                </div>
                <div className="card-modern p-6 text-center">
                  <Building className="w-10 h-10 text-[#0045E6] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[#1E1D28] mb-2 font-outfit">
                    23
                  </div>
                  <div className="text-[#2d3748] font-manrope">
                    Global Facilities
                  </div>
                </div>
                <div className="card-modern p-6 text-center">
                  <TrendingUp className="w-10 h-10 text-[#0045E6] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[#1E1D28] mb-2 font-outfit">
                    Fortune 500
                  </div>
                  <div className="text-[#2d3748] font-manrope">
                    Company Status
                  </div>
                </div>
              </div>
              <p className="text-xl text-[#2d3748] leading-relaxed font-manrope">
                {useCase.clientBackground}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Challenge */}
        <motion.section
          className="py-24 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E1D28] mb-6 font-outfit">
                The <span className="gradient-text">Challenge</span>
              </h2>
              <p className="text-xl text-[#2d3748] max-w-3xl mx-auto font-manrope">
                Understanding the complex operational challenges that required
                innovative solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCase.challenge.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="card-modern p-8 group hover:scale-105 transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[#2d3748] leading-relaxed font-manrope text-lg">
                    {challenge}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Solution */}
        <motion.section
          className="py-24 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E1D28] mb-6 font-outfit">
                Our <span className="text-[#0045E6]">Solution</span>
              </h2>
              <p className="text-xl text-[#2d3748] max-w-3xl mx-auto font-manrope">
                A comprehensive approach delivered through strategic phases and
                innovative features.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div variants={itemVariants}>
                <h3 className="text-3xl font-bold text-[#1E1D28] mb-8 font-outfit">
                  Development Phases
                </h3>
                <div className="space-y-6">
                  {useCase.solution.phases.map((phase, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-6 p-6 bg-gradient-to-r from-[#f8fafc] to-white rounded-2xl border-l-4 border-[#0045E6] hover:shadow-card transition-all duration-300"
                      variants={itemVariants}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0045E6] to-[#4299e1] text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#1E1D28] mb-2 font-outfit">
                          {phase.title}
                        </h4>
                        <p className="text-[#2d3748] font-manrope leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-3xl font-bold text-[#1E1D28] mb-8 font-outfit">
                  Key Features
                </h3>
                <div className="space-y-4">
                  {useCase.solution.keyFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-6 bg-gradient-to-r from-white to-[#f8fafc] rounded-2xl hover:shadow-card transition-all duration-300"
                      variants={itemVariants}
                    >
                      <CheckCircle className="w-6 h-6 text-[#4299e1] flex-shrink-0 mt-1" />
                      <p className="text-[#2d3748] font-manrope leading-relaxed">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Outcome & Results */}
        <motion.section
          className="py-24 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E1D28] mb-6 font-outfit">
                Measurable <span className="text-[#0045E6]">Results</span>
              </h2>
              <p className="text-xl text-[#2d3748] max-w-3xl mx-auto font-manrope">
                Quantifiable improvements across all key performance indicators.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
              {Object.entries(useCase.outcome).map(([key, value], index) => (
                <motion.div
                  key={key}
                  className="card-modern p-8 text-center group hover:scale-105 transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0045E6] to-[#4299e1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold gradient-text mb-2 font-outfit">
                    {value}
                  </div>
                  <div className="text-[#2d3748] capitalize font-manrope">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Client Testimonial */}
            <motion.div
              variants={itemVariants}
              className="card-modern p-10 text-center relative overflow-hidden"
            >
              <Quote className="w-16 h-16 text-[#0045E6]/20 absolute top-6 left-6" />
              <Quote className="w-16 h-16 text-[#0045E6]/20 absolute bottom-6 right-6 transform rotate-180" />
              <div className="relative z-10">
                <p className="text-2xl text-[#1E1D28] mb-8 italic leading-relaxed font-manrope">
                  "{useCase.clientTestimonial}"
                </p>
                <div className="text-[#4299e1] font-semibold font-outfit">
                  — {useCase.client} Leadership Team
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          className="py-24 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E1D28] mb-6 font-outfit">
                Technology <span className="text-[#0045E6]">Stack</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap justify-center gap-10">
                {useCase.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="w-[150px] flex justify-center items-center py-3 bg-gradient-to-r from-[#0045E6]/10 to-[#4299e1]/10 text-[#0045E6] rounded-2xl font-semibold hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <TalkToExpert />
      <RequestPricing />
      <Map />
    </>
  );
};

export default UseCaseDetails;
