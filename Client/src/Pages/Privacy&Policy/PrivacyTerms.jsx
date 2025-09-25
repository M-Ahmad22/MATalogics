import React from "react";
import { motion } from "framer-motion";
import { Shield, ScrollText, Cookie } from "lucide-react";
import { legalContent } from "../../Data/LegalContent";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SectionCard = ({ icon: Icon, title, sections, intro }) => (
  <motion.section
    variants={sectionVariants}
    initial="hidden"
    animate="visible"
    className="bg-white/5 rounded-2xl p-8 shadow-2xl backdrop-blur-xl "
  >
    <div className="flex items-center gap-3 mb-4 ">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
    {intro && <p className="text-white/80 mb-4">{intro}</p>}
    {sections.map((sec, idx) => (
      <div key={idx} className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">{sec.heading}</h3>
        <ul className="list-disc pl-6 space-y-1 text-white/80 leading-relaxed">
          {sec.content.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    ))}
  </motion.section>
);

const PrivacyTerms = () => {
  const { privacy, cookies, terms, effectiveDate } = legalContent;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-16 px-6 ">
      <div className="max-w-5xl mx-auto space-y-16 mt-[100px]">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            Privacy Policy, Cookies Policy & Terms
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            Effective Date: {effectiveDate}
          </p>
        </motion.div>

        {/* Sections */}
        <SectionCard
          icon={Shield}
          title={privacy.title}
          sections={privacy.sections}
          intro={privacy.intro}
        />
        <SectionCard
          icon={Cookie}
          title={cookies.title}
          sections={cookies.sections}
        />
        <SectionCard
          icon={ScrollText}
          title={terms.title}
          sections={terms.sections}
          intro={terms.intro}
        />
      </div>
    </div>
  );
};

export default PrivacyTerms;
