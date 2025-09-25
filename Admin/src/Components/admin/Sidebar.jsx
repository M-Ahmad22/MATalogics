import { motion, AnimatePresence } from "framer-motion";
import {
  DollarSign,
  MessageSquare,
  Calendar,
  GraduationCap,
  Users,
  Menu,
  X,
  BarChart3,
  UserPlus,
} from "lucide-react";
import { useState } from "react";

const iconMap = {
  analytics: BarChart3,
  "request-pricing": DollarSign,
  "get-quote": MessageSquare,
  consultations: Calendar,
  internships: GraduationCap,
  "job-applications": Users,
  register: UserPlus,
};

const Sidebar = ({ activeSection, onSectionChange, counts }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { id: "analytics", name: "Analytics " },
    { id: "request-pricing", name: "Request Pricing" },
    { id: "get-quote", name: "Get Quote" },
    { id: "consultations", name: "Consultations" },
    { id: "job-applications", name: "Job Applications" },
    { id: "internships", name: "Internships" },
    { id: "register", name: "Register User" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="hidden mobile:fixed mobile:block   tablet:block top-[20px] left-7 z-50  tablet:fixed">
        <button
          onClick={() => setIsCollapsed(true)}
          className="p-2 rounded-md bg-white shadow-md focus:outline-none"
        >
          <Menu className="w-6 h-6 text-blue-700 " />
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(isCollapsed || window.innerWidth >= 1024) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="tablet:fixed mobile:fixed  inset-y-0 left-0 z-50 bg-white border-r w-64 large:w-80 h-full shadow-lg md:shadow-none overflow-y-auto "
          >
            <div className="p-6 flex flex-col h-full">
              {/* Close button for mobile */}
              <div className="lg:hidden flex justify-end mb-4">
                <button
                  onClick={() => setIsCollapsed(false)}
                  className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = iconMap[item.id];
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSectionChange(item.id);
                        if (window.innerWidth < 768) setIsCollapsed(false);
                      }}
                      className={`w-full flex justify-between items-center p-3 rounded-lg transition-colors duration-200 ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "hover:bg-gray-100 text-gray-800"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {Icon && <Icon className="w-5 h-5" />}
                        <span className="text-start">{item.name}</span>
                      </div>
                      <span
                        className={`text-xs rounded-full px-2 py-1 ${
                          isActive ? "bg-white/20" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {counts[item.id] || 0}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay for mobile */}
      {isCollapsed && window.innerWidth < 768 && (
        <div
          className="fixed inset-0 bg-black/30 z-30 large:hidden"
          onClick={() => setIsCollapsed(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
