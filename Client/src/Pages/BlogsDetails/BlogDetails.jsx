import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  User,
  Calendar,
  Clock,
  Tag,
  Share2,
  BookOpen,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SITE_DATA } from "../../Data/BlogsData";
import TalkToExpert from "../../Components/TalkToExpert/TalkToExpert";
import RequestPricing from "../../Components/RequestPricing/RequestPricing";
import Map from "../../Components/Map/Map";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = SITE_DATA.blogs.find((b) => b.id === parseInt(id));
  const [shareDropdownOpen, setShareDropdownOpen] = useState(false);

  if (!blog) {
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

  const IconComponent = blog.icon;

  // Get next/previous blog (for navigation)
  const currentIndex = SITE_DATA.blogs.findIndex((b) => b.id === blog.id);
  const nextBlog = SITE_DATA.blogs[currentIndex + 1];
  const prevBlog = SITE_DATA.blogs[currentIndex - 1];

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

  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(blog.title);

  const socialShareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`,
    linkedin: `https://linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    facebook: `https://facebook.com/sharer/sharer.php?u=${shareUrl}`,
  };

  const renderContent = (content) => {
    return content.map((section, index) => {
      switch (section.type) {
        case "heading":
          const HeadingTag = `h${section.level}`;
          const headingClasses = {
            2: "text-3xl md:text-4xl font-bold text-[#1E1D28] mb-8 mt-16 font-outfit",
            3: "text-2xl md:text-3xl font-bold text-[#1E1D28] mb-6 mt-12 font-outfit",
            4: "text-xl md:text-2xl font-bold text-[#1E1D28] mb-4 mt-8 font-outfit",
          };
          return (
            <HeadingTag
              key={index}
              className={headingClasses[section.level] || headingClasses[2]}
            >
              {section.text}
            </HeadingTag>
          );
        case "para":
          return (
            <p
              key={index}
              className="text-lg text-[#2d3748] mb-8 leading-relaxed font-manrope"
            >
              {section.text}
            </p>
          );
        case "list":
          return (
            <ul key={index} className="space-y-4 mb-8">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0045E6] rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg text-[#2d3748] leading-relaxed font-manrope">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  React.useEffect(() => {
    document.title = `${blog.title} - MATalogics Blog`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", blog.excerpt);
    }
  }, [blog]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#f8fafc] to-[#e2e8f0]">
        {/* Hero Section */}
        <motion.section
          className="relative bg-white pt-24 pb-16 mt-[50px]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Navigation */}
            <motion.div variants={itemVariants} className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center text-[#2d3748] hover:text-[#0045E6] transition-colors duration-300 font-montserrat"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back to Home
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div>
                <motion.div variants={itemVariants} className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-[#0045E6]/10 rounded-full mb-4">
                    <div className="w-8 h-8 bg-[#0045E6] rounded-lg flex items-center justify-center mr-3">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#0045E6] font-medium font-montserrat">
                      {blog.category}
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl font-bold text-[#1E1D28] mb-6 leading-tight font-outfit"
                  variants={itemVariants}
                >
                  {blog.title}
                </motion.h1>

                <motion.p
                  className="text-lg text-[#2d3748] mb-8 leading-relaxed font-montserrat"
                  variants={itemVariants}
                >
                  {blog.excerpt}
                </motion.p>

                {/* Meta Info */}
                <motion.div
                  className="flex flex-wrap items-center gap-6 text-[#2d3748] mb-8"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-[#0045E6]" />
                    <span className="font-montserrat">{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#0045E6]" />
                    <span className="font-montserrat">{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#0045E6]" />
                    <span className="font-montserrat">{blog.readTime}</span>
                  </div>
                </motion.div>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={itemVariants}
                >
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-[#EAECF0] text-[#2d3748] rounded-full text-sm font-medium font-montserrat hover:border-[#0045E6] transition-colors duration-300"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Image Side */}
              <motion.div variants={itemVariants} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={blog.heroImage}
                    alt={blog.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#0045E6]" />
                        <span className="text-sm font-medium text-[#1E1D28] font-montserrat">
                          Article
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Article Content */}
        <motion.section
          className="py-24 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.article
              variants={itemVariants}
              className="prose prose-lg max-w-none"
            >
              {/* Excerpt */}
              <div className="card-modern p-8 mb-16 border-l-4 border-[#ff8800]">
                <BookOpen className="w-8 h-8 text-[#ff8800] mb-4" />
                <p className="text-xl text-[#2d3748] leading-relaxed font-manrope italic">
                  {blog.excerpt}
                </p>
              </div>

              {/* Content Sections */}
              <div className="space-y-8 text-justify">
                {renderContent(blog.content)}
              </div>
            </motion.article>
          </div>
        </motion.section>

        {/* Share Section */}
        <motion.section
          className="py-7 bg-[#fff]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1E1D28] mb-8 font-outfit">
                Share This Article
              </h3>
              <div className="flex justify-center gap-4">
                <a
                  href={socialShareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary hover:bg-[#1da1f2] hover:text-white border-[#1da1f2]/20"
                >
                  Twitter
                </a>
                <a
                  href={socialShareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary hover:bg-[#0077b5] hover:text-white border-[#0077b5]/20"
                >
                  LinkedIn
                </a>
                <a
                  href={socialShareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary hover:bg-[#1877f2] hover:text-white border-[#1877f2]/20"
                >
                  Facebook
                </a>
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

export default BlogDetails;
