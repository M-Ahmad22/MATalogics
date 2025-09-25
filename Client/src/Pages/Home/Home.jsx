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

const Home = () => {
  return (
    <>
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
