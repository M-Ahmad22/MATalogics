import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../Components/admin/Header";
import Sidebar from "../Components/admin/Sidebar";
import InboxView from "../Components/admin/InboxView";
import DetailView from "../Components/admin/DetailView";
import Analytics from "../Components/admin/Analytics";
import axios from "axios";
import Register from "../Components/admin/Register";

const API_URL = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("analytics");
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const [submissions, setSubmissions] = useState({
    "request-pricing": [],
    "get-quote": [],
    consultations: [],
    "job-applications": [],
    internships: [],
  });

  // Reset selected item when section changes
  useEffect(() => {
    setSelectedItem(null);
  }, [activeSection]);

  // Auto-select first item when section changes
  useEffect(() => {
    if (activeSection !== "analytics") {
      const current = submissions[activeSection] || [];
      if (current.length > 0 && !selectedItem) {
        setSelectedItem(current[0]._id); // ✅ use _id
      }
    }
  }, [activeSection, selectedItem, submissions]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pricingRes = await axios.get(`${API_URL}/api/request-pricing`);
        const quoteRes = await axios.get(`${API_URL}/api/get-quote`);
        const jobsRes = await axios.get(
          `${API_URL}/api/applications/job-applications`
        );

        const consultRes = await axios.get(`${API_URL}/api/book-call`);

        const allApplications = jobsRes.data || [];

        // ✅ Split by jobId now
        const internships = allApplications.filter((app) => {
          const id = Number(app.jobId);
          return !isNaN(id) && id >= 100; // Internship
        });

        const jobs = allApplications.filter((app) => {
          const id = Number(app.jobId);
          return !isNaN(id) && id < 100; // Job
        });

        const addStatus = (arr) =>
          arr.map((s) => ({ ...s, status: s.status || "unread" }));

        setSubmissions({
          "request-pricing": addStatus(pricingRes.data),
          "get-quote": addStatus(quoteRes.data),
          "job-applications": addStatus(jobs),
          internships: addStatus(internships),
          consultations: addStatus(consultRes.data),
        });
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleItemSelect = async (itemId) => {
    setSelectedItem(itemId);

    setSubmissions((prev) => {
      const updated = { ...prev };
      updated[activeSection] = prev[activeSection].map((s) =>
        s._id === itemId ? { ...s, status: "read" } : s
      );
      return updated;
    });

    try {
      let patchUrl = "";

      if (activeSection === "job-applications") {
        patchUrl = `${API_URL}/api/applications/job-applications/${itemId}/read`;
      } else if (activeSection === "request-pricing") {
        patchUrl = `${API_URL}/api/request-pricing/${itemId}/read`;
      } else if (activeSection === "get-quote") {
        patchUrl = `${API_URL}/api/get-quote/${itemId}/read`;
      } else if (activeSection === "consultations") {
        patchUrl = `${API_URL}/api/book-call/${itemId}/read`;
      }

      if (patchUrl) {
        await axios.patch(patchUrl);
      }
    } catch (err) {
      console.error("Error updating status on backend:", err);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading dashboard data…</p>
      </div>
    );
  }

  if (activeSection === "analytics") {
    return (
      <div className="h-screen flex flex-col bg-[#ffffff]">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <Sidebar
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
            counts={{
              "request-pricing": submissions["request-pricing"].length,
              "get-quote": submissions["get-quote"].length,
              consultations: submissions.consultations.length,
              "job-applications": submissions["job-applications"].length,
              internships: submissions.internships.length,
            }}
          />
          <main className="flex-1 overflow-auto">
            <Analytics submissions={submissions} />
          </main>
        </div>
      </div>
    );
  }

  // Show register page
  if (activeSection === "register") {
    return (
      <div className="h-screen flex flex-col bg-[#ffffff]">
        <Header />
        <div className="flex-1 flex overflow-hidden z-50">
          <Sidebar
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
            counts={{
              "request-pricing": submissions["request-pricing"].length,
              "get-quote": submissions["get-quote"].length,
              consultations: submissions.consultations.length,
              "job-applications": submissions["job-applications"].length,
              internships: submissions.internships.length,
            }}
          />
          <main className="flex-1 overflow-auto z-10">
            <Register />
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-[#ffffff]">
      <Header />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          counts={{
            "request-pricing": submissions["request-pricing"].length,
            "get-quote": submissions["get-quote"].length,
            consultations: submissions.consultations.length,
            "job-applications": submissions["job-applications"].length,
            internships: submissions.internships.length,
          }}
        />

        <main className="flex-1 flex overflow-hidden ">
          <motion.div
            key={`inbox-${activeSection}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-96 flex-shrink-0 border-r border-[#e5e7eb] mobile:w-[50px] tablet:w-[50px]"
          >
            <InboxView
              activeSection={activeSection}
              selectedItem={selectedItem}
              onItemSelect={handleItemSelect}
              submissions={submissions[activeSection]}
            />
          </motion.div>

          <motion.div
            key={`detail-${selectedItem}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 mobile:w-[100%] "
          >
            <DetailView
              activeSection={activeSection}
              selectedItem={selectedItem}
              submissions={submissions[activeSection]}
            />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
