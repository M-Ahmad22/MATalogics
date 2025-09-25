import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const NoAccess = () => {
  return (
    <div className="h-auto flex items-center justify-center my-[260px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 bg-white border border-[#e5e7eb] rounded-2xl shadow-lg max-w-md"
      >
        <Lock className="w-12 h-12 mx-auto text-[#dc2626] mb-4" />
        <h1 className="text-2xl font-bold text-[#1f2937] mb-2">
          Access Denied
        </h1>
        <p className="text-[#6b7280]">
          You don’t have permission to view this page.
        </p>
      </motion.div>
    </div>
  );
};

export default NoAccess;
