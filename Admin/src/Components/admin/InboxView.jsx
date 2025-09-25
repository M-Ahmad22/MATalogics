import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MailOpen, Clock } from "lucide-react";

const InboxView = ({
  activeSection,
  selectedItem,
  onItemSelect,
  submissions = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getSubmissionTitle = (submission) =>
    submission.fullName || submission.name;

  return (
    <>
      {/* Mobile open button */}
      <div className="lg:hidden fixed top-[100px] left-1 z-30">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md bg-white shadow-md"
        >
          <Mail className="w-6 h-6 text-blue-700" />
        </button>
      </div>

      {/* Slide-out panel */}
      <AnimatePresence>
        {(isOpen || window.innerWidth >= 1024) && (
          <motion.div
            initial={{ x: window.innerWidth < 1024 ? "-100%" : 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed lg:static left-0 top-0 z-50 bg-white lg:w-96 w-[90%] h-full shadow-xl border-l"
          >
            {/* Close button mobile */}
            <div className="lg:hidden flex justify-end p-4 border-b">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
              >
                ✕
              </button>
            </div>

            {/* Header */}
            <div className="p-4 border-b bg-[#f9fafb]">
              <h2 className="text-lg font-semibold text-[#1f2937] capitalize">
                {activeSection.replace("-", " ")} ({submissions.length})
              </h2>
            </div>

            {/* List */}
            <div className="overflow-y-auto h-[calc(100%-5rem)] ">
              {(!submissions || submissions.length === 0) && (
                <div className="flex flex-col items-center justify-center p-8 text-[#6b7280]">
                  <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-medium mb-2 text-[#374151]">
                    No submissions yet
                  </h3>
                  <p className="text-sm">
                    New {activeSection.replace("-", " ")} submissions will
                    appear here.
                  </p>
                </div>
              )}

              {submissions.map((submission, index) => {
                const isSelected = selectedItem === submission._id;
                const isUnread = submission.status !== "read";
                return (
                  <motion.div
                    key={submission._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      onItemSelect(submission._id);
                      if (window.innerWidth < 1024) setIsOpen(false);
                    }}
                    className={`p-4 border-b cursor-pointer transition-all hover:bg-[#f9fafb] ${
                      isSelected
                        ? "bg-[#eff6ff] border-l-4 border-l-[#0045E6]"
                        : ""
                    } ${isUnread ? "bg-[#ffffff] font-medium" : ""}`}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isUnread
                            ? "bg-[#dbeafe] text-[#0045E6]"
                            : "bg-[#f3f4f6] text-[#6b7280]"
                        }`}
                      >
                        {isUnread ? (
                          <Mail className="w-5 h-5" />
                        ) : (
                          <MailOpen className="w-5 h-5" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3
                            className={`text-sm truncate ${
                              isUnread
                                ? "font-semibold text-[#1f2937]"
                                : "font-medium text-[#374151]"
                            }`}
                          >
                            {getSubmissionTitle(submission)}
                          </h3>
                          {isUnread && (
                            <span className="text-xs bg-[#0045E6] text-white px-2 py-1 rounded-full font-medium ml-2 flex-shrink-0">
                              New
                            </span>
                          )}
                        </div>
                        <div className="flex items-center text-xs text-[#6b7280]">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>
                            {new Date(
                              submission.createdAt
                            ).toLocaleDateString()}{" "}
                            at{" "}
                            {new Date(submission.createdAt).toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dark overlay mobile */}
      {isOpen && window.innerWidth < 1024 && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default InboxView;
