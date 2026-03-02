"use client";

import { useState } from "react";
import HeroSection from "./components/Home/HeroSection";
import BrowseCategories from "./components/Home/BrowseCategories";
import RecentJobs from "./components/Home/RecentJobs";
import AboutJob from "./components/Home/AboutJob";
import CtaSection from "./components/Home/CtaSection";
import Testimonials from "./components/Home/Testimonials";
import FeaturedJobs from "./components/Home/FeaturedJobs";
import NewRegister from "./components/Home/NewRegister";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";

export default function Home() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  return (
    <>
      {/* Hero Section */}
      <Header/>
      <HeroSection />

      <BrowseCategories />
      <RecentJobs />
      <AboutJob />
      <CtaSection />
      <Testimonials />
      <FeaturedJobs />
      <NewRegister />
      <Footer />
    </>
  );
}
