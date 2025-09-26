import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import ContactPage from "./Pages/Contact/ContactPage";
import GetAQuote from "./Pages/GetAQuote/GetAQuote";
import ServicesPage from "./Pages/ServicePage/ServicesPage";
import JoinUs from "./Pages/Careers/JoinUs";
import Internships from "./Pages/Careers/Interships";
import JobDetails from "./Pages/Careers/JobDetails";
import Form from "./Pages/Careers/Form";
import Portfolio from "./Pages/Portfolio/Portfolio";
import About from "./Pages/About/About";
import SuccessPage from "./Pages/Careers/SuccessPage";
import ScrollToTop from "./ScrollToTop";
import { useEffect } from "react";
import CoursesPage from "./Pages/Courses/CoursesPage";
import NotFound from "./Pages/NotFound/NotFound";
import ServicesDetails from "./Pages/ServicesDetails/ServicesDetails";
import UseCaseDetails from "./Pages/UseCaseDetails/UseCaseDetails";
import BlogDetails from "./Pages/BlogsDetails/BlogDetails";
import PrivacyTerms from "./Pages/Privacy&Policy/PrivacyTerms";
import usePageViews from "./hooks/usePageViews";

const AppRoutes = () => {
  usePageViews(); // ✅ now inside Router
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/quote" element={<GetAQuote />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServicesDetails />} />
        <Route path="/About" element={<About />} />
        <Route path="/careers/join-us" element={<JoinUs />} />
        <Route path="/careers/internships" element={<Internships />} />
        <Route path="/careers/job/:id" element={<JobDetails />} />
        <Route path="/careers/apply/:id" element={<Form />} />
        <Route path="/SuccessPage" element={<SuccessPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/usecases/:id" element={<UseCaseDetails />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/Courses" element={<CoursesPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/privacy" element={<PrivacyTerms />} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  useEffect(() => {
    document.documentElement.style.colorScheme = "only light";
    document.documentElement.style.forcedColorAdjust = "none";
    document.documentElement.style.backgroundColor = "#ffffff";
    document.documentElement.style.color = "#000000";
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AppRoutes /> {/* ✅ GA tracking is called here */}
    </Router>
  );
};

export default App;
