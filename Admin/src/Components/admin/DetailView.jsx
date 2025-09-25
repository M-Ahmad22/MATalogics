import { Copy, Download, Mail, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const DetailView = ({ activeSection, selectedItem, submissions }) => {
  const [copiedField, setCopiedField] = useState(null);

  const submission = submissions.find((s) => s._id === selectedItem);

  const copyToClipboard = async (text, fieldName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (!submission) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#f9fafb]">
        <div className="text-center text-[#6b7280]">
          <Mail className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <h3 className="text-xl font-medium mb-2 text-[#374151]">
            Select a submission
          </h3>
          <p>Choose a submission from the list to view details</p>
        </div>
      </div>
    );
  }

  const renderField = (label, value, copyKey) => {
    if (!value) return null;
    return (
      <div
        className="bg-[#f9fafb] rounded-lg py-1 px-4 mobile:w-[100%] mobile:px-0 "
        key={copyKey}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start justify-center p-2">
            <div className="flex-1 w-[150px] mobile:w-[55px]">
              <h4 className="text-sm font-medium text-[#0045E6] mb-1 mobile:text-[12px]">
                {label}
              </h4>
            </div>
            <p className="text-[#1f2937] text-sm leading-relaxed mobile:text-[12px]">
              {value}
            </p>
          </div>
          <button
            onClick={() => copyToClipboard(value, copyKey)}
            className="ml-2 p-2 text-[#6b7280] hover:text-[#0045E6] hover:bg-[#ffffff] rounded-lg transition-all duration-200 flex-shrink-0 mobile:ml-0 mobile:p-1 "
            title="Copy to clipboard"
          >
            {copiedField === copyKey ? (
              <CheckCircle className="w-4 h-4 mobile:w-3 mobile:h-3 text-[#10b981]" />
            ) : (
              <Copy className="w-4 h-4 mobile:w-3 mobile:h-3" />
            )}
          </button>
        </div>
      </div>
    );
  };

  const renderAttachmentField = (label, filePath, copyKey) => {
    if (!filePath) return null;
    const fileName = filePath.split("\\").pop();

    return (
      <div
        className="bg-[#f9fafb] rounded-lg p-4 mobile:w-[100%]"
        key={copyKey}
      >
        <div className="flex items-center justify-between mobile:w-[100%]">
          <div className="flex items-center space-x-3 flex-1">
            <div className="w-8 h-8 bg-[#0045E6] rounded-lg flex items-center justify-center flex-shrink-0">
              <Download className="w-4 h-4 text-[#ffffff] " />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-[#374151] mb-1 mobile:text-[12px]">
                {label}
              </h4>
              <p className="text-[#1f2937] text-sm mobile:text-[12px]">
                {fileName}
              </p>
            </div>
          </div>
          <a
            href={`/${filePath}`}
            download={fileName}
            className="ml-2 px-3 py-1 mobile:ml-0 mobile:px-1 bg-[#0045E6] hover:bg-[#0039c7] text-[#ffffff] text-xs rounded-lg transition-colors duration-200 flex items-center space-x-1"
          >
            <Download className="w-3 h-3" />
            <span className="mobile:hidden">Download</span>
          </a>
        </div>
      </div>
    );
  };

  const entries = Object.entries(submission).filter(
    ([key]) =>
      !["_id", "__v", "submittedAt", "createdAt", "updatedAt"].includes(key)
  );

  return (
    <div className="flex-1 overflow-hidden mobile:w-[100%]">
      {/* Header */}
      <div className="p-6 border-b border-[#e5e7eb] bg-[#ffffff]">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl mobile:text-[14px] font-bold text-[#1f2937] mb-2">
              {submission.fullName || submission.name}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-[#6b7280]  mobile:text-[12px] mobile:flex-col">
              <div className="flex items-center space-x-1 ">
                <Mail className="w-4 h-4 mobile:w-3" />
                <span>{submission.email}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>
                  {submission.createdAt
                    ? new Date(submission.createdAt).toLocaleDateString()
                    : ""}
                </span>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              submission.status === "unread"
                ? "bg-[#fee2e2] text-[#dc2626]"
                : "bg-[#dcfce7] text-[#16a34a]"
            }`}
          >
            {submission.status === "unread" ? "New" : "Read"}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 overflow-y-auto h-[calc(100vh-12rem)] space-y-3">
        {entries.map(([key, value]) => {
          if (
            key.toLowerCase().includes("resume") ||
            key.toLowerCase().includes("cover") ||
            key.toLowerCase().includes("document")
          ) {
            return renderAttachmentField(key, value, key);
          } else {
            return renderField(key, value, key);
          }
        })}
      </div>
    </div>
  );
};

export default DetailView;
