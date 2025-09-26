import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import ServicesSection from "../../Components/ServicesOverview/Services";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import CaseStudies from "../../Components/CaseStudies/CaseStudies";
import HowWeWork from "../../Components/HowWeWork/HowWeWork";
import TechStack from "../../Components/TechStack/TechStack";
import BlogPreview from "../../Components/Blogs/Blog";
import Testimonials from "../../Components/Testimonials/Testimonial";
import TalkToExpert from "../../Components/TalkToExpert/TalkToExpert";
import WhyUs from "../../Components/WhyUs/WhyUs";
import RequestPricing from "../../Components/RequestPricing/RequestPricing";
import Map from "../../Components/Map/Map";
import CookieBanner from "@/Components/CookieBanner/CookieBanner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MATalogics | Home</title>
        <meta
          name="description"
          content="Welcome to MATalogics, your platform for innovative tech solutions and services."
        />
        <meta property="og:title" content="MATalogics | Home" />
        <meta
          property="og:description"
          content="Welcome to MATalogics, your platform for innovative tech solutions and services."
        />
        <meta
          property="og:image"
          content="https://matalogics.com/path/to/og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://matalogics.com/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MATalogics | Home" />
        <meta
          name="twitter:description"
          content="Welcome to MATalogics, your platform for innovative tech solutions and services."
        />
        <meta
          name="twitter:image"
          content="https://matalogics.com/path/to/og-image.jpg"
        />
      </Helmet>
      <div className="HomeComponent flex flex-col items-center justify-center w-full h-auto">
        <CookieBanner />
        <HeroSection />
        <WhyUs />
        <ServicesSection />
        <WhyChooseUs />
        <CaseStudies />
        <HowWeWork />
        <TechStack />
        <TalkToExpert />
        <BlogPreview />
        <Testimonials />
        <RequestPricing />
        <Map />
      </div>
    </>
  );
};

export default Home;
