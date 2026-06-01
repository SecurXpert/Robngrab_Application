"use client";

import { useState } from "react";
import HeroSection from '@/app/Model/HeroSection';
import BrowseCategories from '@/app/Model/BrowseCategories';
import RecentJobs from '@/app/jobs/Model/RecentJobs';
import AboutJob from '@/app/Model/AboutJob';
import CtaSection from '@/app/Model/CtaSection';
import Testimonials from '@/app/Model/Testimonials';
import FeaturedJobs from '@/app/Model/FeaturedJobs';
import NewRegister from '@/app/Model/NewRegister';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  return (
    <>
      {/* Hero Section */}
      <Header />
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
