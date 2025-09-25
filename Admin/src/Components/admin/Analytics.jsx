import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  MailOpen,
  TrendingUp,
  Users,
  Calendar,
  FileText,
  DollarSign,
  MessageSquare,
  GraduationCap,
  StickyNote,
  CheckSquare,
  PieChart,
  Plus,
  Trash2,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Pie as RechartsPie,
  Cell,
  PieChart as RechartsPieChart,
} from "recharts";

const Analytics = ({ submissions }) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  // const now = new Date();

  // ✅ derive arrays from props
  const getAQuoteSubmissions = submissions["get-quote"] || [];
  const requestPricingSubmissions = submissions["request-pricing"] || [];
  const consultationSubmissions = submissions.consultations || [];
  const jobApplicationSubmissions = submissions["job-applications"] || [];
  const internshipSubmissions = submissions.internships || [];

  const allSubmissions = [
    ...getAQuoteSubmissions,
    ...requestPricingSubmissions,
    ...consultationSubmissions,
    ...jobApplicationSubmissions,
    ...internshipSubmissions,
  ];

  const allYears = Array.from(
    new Set(
      allSubmissions
        .filter((s) => s.submittedAt)
        .map((s) => new Date(s.submittedAt).getFullYear())
    )
  ).sort((a, b) => b - a);

  const [selectedYear, setSelectedYear] = useState(
    allYears.includes(now.getFullYear())
      ? now.getFullYear()
      : allYears[0] || now.getFullYear()
  );

  // ✅ Notes state
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Review Q4 budget allocation",
      completed: false,
      priority: "high",
    },
    {
      id: 2,
      text: "Schedule team meeting for next week",
      completed: true,
      priority: "medium",
    },
    {
      id: 3,
      text: "Follow up with client regarding proposal",
      completed: false,
      priority: "high",
    },
  ]);
  const [newNote, setNewNote] = useState("");
  const [newNotePriority, setNewNotePriority] = useState("medium");

  const addNote = () => {
    if (newNote.trim()) {
      const note = {
        id: Date.now(),
        text: newNote.trim(),
        completed: false,
        priority: newNotePriority,
      };
      setNotes([...notes, note]);
      setNewNote("");
    }
  };
  const deleteNote = (id) => setNotes(notes.filter((n) => n.id !== id));
  const toggleNote = (id) =>
    setNotes(
      notes.map((n) => (n.id === id ? { ...n, completed: !n.completed } : n))
    );

  const unreadCount = allSubmissions.filter(
    (s) => s.status === "unread"
  ).length;
  const readCount = allSubmissions.filter((s) => s.status === "read").length;

  const stats = [
    {
      id: "total-submissions",
      title: "Total Submissions",
      value: allSubmissions.length,
      icon: Mail,
      textColor: "text-[#3b82f6]",
      bgLight: "bg-[#dbeafe]",
    },
    {
      id: "unread-mails",
      title: "Unread Mails",
      value: unreadCount,
      icon: Mail,
      textColor: "text-[#ef4444]",
      bgLight: "bg-[#fee2e2]",
    },
    // {
    //   id: "current-month",
    //   title: "This Month",
    //   value: currentMonthSubmissions.length,
    //   icon: TrendingUp,
    //   textColor: "text-[#10b981]",
    //   bgLight: "bg-[#d1fae5]",
    // },
    {
      id: "read-mails",
      title: "Read Mails",
      value: readCount,
      icon: MailOpen,
      textColor: "text-[#8b5cf6]",
      bgLight: "bg-[#ede9fe]",
    },
  ];

  const categoryStats = [
    {
      id: "get-quote",
      title: "Get Quote",
      count: getAQuoteSubmissions.length,
      unread: getAQuoteSubmissions.filter((s) => s.status === "unread").length,
      icon: FileText,
      color: "bg-[#f59e0b]",
    },
    {
      id: "request-pricing",
      title: "Request Pricing",
      count: requestPricingSubmissions.length,
      unread: requestPricingSubmissions.filter((s) => s.status === "unread")
        .length,
      icon: DollarSign,
      color: "bg-[#3b82f6]",
    },
    {
      id: "consultations",
      title: "Consultations",
      count: consultationSubmissions.length,
      unread: consultationSubmissions.filter((s) => s.status === "unread")
        .length,
      icon: Calendar,
      color: "bg-[#10b981]",
    },
    {
      id: "job-applications",
      title: "Job Applications",
      count: jobApplicationSubmissions.length,
      unread: jobApplicationSubmissions.filter((s) => s.status === "unread")
        .length,
      icon: Users,
      color: "bg-[#8b5cf6]",
    },
    {
      id: "internships",
      title: "Internships",
      count: internshipSubmissions.length,
      unread: internshipSubmissions.filter((s) => s.status === "unread").length,
      icon: GraduationCap,
      color: "bg-[#ef4444]",
    },
  ];

  const categoryDistribution = [
    { name: "Get Quote", value: getAQuoteSubmissions.length, color: "#f59e0b" },
    {
      name: "Pricing",
      value: requestPricingSubmissions.length,
      color: "#3b82f6",
    },
    {
      name: "Consultations",
      value: consultationSubmissions.length,
      color: "#10b981",
    },
    { name: "Jobs", value: jobApplicationSubmissions.length, color: "#8b5cf6" },
    {
      name: "Internships",
      value: internshipSubmissions.length,
      color: "#ef4444",
    },
  ];

  return (
    <div className="px-8 py-2 bg-[#ffffff] min-h-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-[#1f2937] mb-2 mt-2">
          Analytics Dashboard
        </h1>
        <p className="text-[#6b7280] text-lg">
          Overview of all form submissions and activities
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#ffffff] rounded-xl border border-[#e5e7eb] p-6 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 ${stat.bgLight} rounded-lg flex items-center justify-center`}
                >
                  <Icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
                <div className="text-right text-2xl font-bold text-[#1f2937]">
                  {stat.value}
                </div>
              </div>
              <h3 className="text-[#6b7280] font-medium">{stat.title}</h3>
            </motion.div>
          );
        })}
      </div>

      {/* Category & Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 ">
        {/* Category Breakdown */}
        <div className="bg-[#ffffff] rounded-xl border border-[#e5e7eb] p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#1f2937] mb-6 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-[#3b82f6]" /> Category
            Breakdown
          </h2>
          <div className="space-y-4">
            {categoryStats.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-[#f9fafb]"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 ${c.color} rounded-lg flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1f2937]">{c.title}</h4>
                      <p className="text-sm text-[#6b7280]">
                        {c.count} total submissions
                      </p>
                    </div>
                  </div>
                  {c.unread > 0 && (
                    <div className="bg-[#ef4444] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {c.unread} new
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* Charts */}

        <div className="bg-[#ffffff] rounded-xl border border-[#e5e7eb] p-6 shadow-sm mobile:h-[500px]  tablet:h-[500px]  ">
          <h2 className="text-xl font-semibold text-[#1f2937] mb-6 flex items-center">
            <PieChart className="w-5 h-5 mr-2 text-[#10b981]" /> Category
            Distribution
          </h2>
          <div className="h-full w-full justify-center items-center  mobile:overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <RechartsPie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={140}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </RechartsPie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
