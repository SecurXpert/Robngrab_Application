"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  FiMapPin,
  FiDollarSign,
  FiBriefcase,
  FiClock,
  FiShare2,
  FiBookmark,
  FiExternalLink,
  FiUsers,
  FiCalendar,
} from "react-icons/fi";

export default function JobDetails({ jobId, job = {} }) {
  const [isSaved, setIsSaved] = useState(false);

  // Default job data if not provided
  const jobData = {
    id: job.id || 1,
    title: job.title || "Senior UI/UX Designer",
    company: job.company || "Tech Innovation Labs",
    location: job.location || "San Francisco, CA",
    type: job.type || "Full Time",
    salary: job.salary || "$80,000 - $120,000",
    category: job.category || "Design",
    time: job.time || "2 days ago",
    description:
      job.description ||
      `We are looking for a talented and experienced UI/UX Designer to join our dynamic team. The ideal candidate will be responsible for creating user-friendly interfaces and ensuring a seamless user experience across our digital products.

Key Responsibilities:
• Design and implement user interfaces for web and mobile applications
• Conduct user research and usability testing
• Create wireframes, prototypes, and high-fidelity mockups
• Collaborate with developers to ensure design implementation
• Stay updated with the latest design trends and technologies`,

    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work arrangements and remote options",
      "Professional development opportunities",
      "Generous paid time off and company holidays",
      "401(k) matching and retirement planning",
    ],
    skills: {
      experience: "5+ years of experience in UI/UX design",
      technical: [
        "Proficiency in Figma, Adobe Creative Suite, and prototyping tools",
        "Strong portfolio demonstrating design expertise",
        "Experience with design systems and responsive design"
      ],
      requirements: [
        "Excellent communication and collaboration skills",
        "Bachelor's degree in Design, HCI, or related field",
        "Ability to work in a fast-paced environment",
        "Strong problem-solving and analytical skills"
      ],
      desired: [
        "Working knowledge of eCommerce platforms, ideally Shopify but also others e.g. Magento, WooCommerce, Visualsoft to enable seamless migrations",
        "Working knowledge of payment gateways",
        "API platform experience / Building restful APIs"
      ]
    },
    companyInfo: {
      size: "100-500 employees",
      industry: "Technology",
      founded: "2015",
      website: "www.techinnovationlabs.com",
    },
    relatedJobs: [
      {
        id: 2,
        title: "Product Designer",
        company: "Creative Studio Inc",
        location: "New York, NY",
        type: "Full Time",
        salary: "$70,000 - $100,000",
        logoColor: "bg-blue-500",
      },
      {
        id: 3,
        title: "UX Researcher",
        company: "Design Agency",
        location: "Los Angeles, CA",
        type: "Full Time",
        salary: "$75,000 - $110,000",
        logoColor: "bg-green-500",
      },
      {
        id: 4,
        title: "Frontend Developer",
        company: "Tech Solutions",
        location: "Austin, TX",
        type: "Full Time",
        salary: "$85,000 - $125,000",
        logoColor: "bg-purple-500",
      },
    ],
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${jobData.title} at ${jobData.company}`,
        text: `Check out this job opportunity: ${jobData.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Job link copied to clipboard!");
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-4"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </button>
        {/* Header */}
        <div className="p-6 mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-16 h-16 ${job.logoColor || "bg-blue-500"} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white text-xl font-bold">
                      {jobData.company.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                      {jobData.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="font-medium text-gray-800">
                       at {jobData.company}
                      </span>
                      <span>{jobData.type}</span>
                      <span>Featured</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleSave}
                    className={`border ${isSaved ? "border-blue-500 text-blue-500" : "border-gray-300 text-gray-700"} px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center gap-2`}
                  >
                    <FiBookmark
                      className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`}
                    />
                    {/* {isSaved ? "Saved" : "Save Job"} */}
                  </button>
                  <button className="flex items-center gap-3 bg-[#0A65CC] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                    Apply Now
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              {/* Job Details */}
              {/* <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FiMapPin className="w-4 h-4" />
                  <span>{jobData.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FiDollarSign className="w-4 h-4" />
                  <span>{jobData.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FiClock className="w-4 h-4" />
                  <span>{jobData.category}</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Job Description */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Description */}
            <div className=" p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Job Description
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {jobData.description}
                </p>
              </div>
            </div>
            {/* Skills Required */}
            <div className=" p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Skills Required
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Experience</h3>
                  <p className="text-gray-700">{jobData.skills.experience}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Technical Skills</h3>
                  <ul className="space-y-2">
                    {jobData.skills.technical.map((skill, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Requirements</h3>
                  <ul className="space-y-2">
                    {jobData.skills.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Desired */}
            <div className=" p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Desired
              </h2>
              <ul className="space-y-2">
                {jobData.skills.desired.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className=" p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Benefits & Perks
              </h2>
              <ul className="space-y-2">
                {jobData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            
          </div>
          {/* Right Column - Company Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                {/* Salary Section */}
                <div className="flex-1 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Salary (USD)</h3>
                  <p className="text-md font-semibold text-green-600 mb-1">$100,000 - $120,000</p>
                  <p className="text-sm text-gray-500">Yearly salary</p>
                </div>
                
                {/* Vertical Divider */}
                <div className="h-16 w-px bg-gray-300 mx-6"></div>
                
                {/* Location Section */}
                <div className="flex-1 text-center">
                  <div className="flex flex-col items-center">
                    <img 
                      src="/assets/home/MapTrifold.svg" 
                      alt="Location" 
                      className="w-8 h-8 mb-2"
                    />
                    <h3 className="font-semibold text-gray-800 mb-1">Job Location</h3>
                    <p className="text-md text-gray-700">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Job Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Job Overview</h3>

              <div className="space-y-4">
                {/* First Row - 3 items */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Job Posted */}
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src="/assets/home/clock.svg" 
                      alt="Job Posted" 
                      className="w-6 h-6 mb-2"
                    />
                    <p className="text-sm text-gray-600">Job Posted</p>
                    <p className="text-sm font-medium text-gray-800">2 days ago</p>
                  </div>

                  {/* Job Expire In */}
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src="/assets/home/clock.svg" 
                      alt="Job Expire In" 
                      className="w-6 h-6 mb-2"
                    />
                    <p className="text-sm text-gray-600">Job Expire In</p>
                    <p className="text-sm font-medium text-gray-800">28 days</p>
                  </div>

                  {/* Job Level */}
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src="/assets/home/MapTrifold.svg" 
                      alt="Job Level" 
                      className="w-6 h-6 mb-2"
                    />
                    <p className="text-sm text-gray-600">Job Level</p>
                    <p className="text-sm font-medium text-gray-800">Senior</p>
                  </div>
                </div>

                {/* Second Row - 3 columns with 3rd empty */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Experience */}
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src="/assets/home/briefcase2.svg" 
                      alt="Experience" 
                      className="w-6 h-6 mb-2"
                    />
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="text-sm font-medium text-gray-800">5+ Years</p>
                  </div>

                  {/* Education */}
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src="/assets/home/wallet.svg" 
                      alt="Education" 
                      className="w-6 h-6 mb-2"
                    />
                    <p className="text-sm text-gray-600">Education</p>
                    <p className="text-sm font-medium text-gray-800">Bachelor Degree</p>
                  </div>

                  {/* Empty 3rd column */}
                  <div></div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Share this job
                </h4>
                <div className="flex items-center gap-3">
                  {/* Copy Links Button */}
                  <button className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Copy Links
                  </button>
                  
                  {/* Social Media Icons */}
                  <div className="flex gap-2">
                    {/* LinkedIn */}
                    <button className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </button>
                    
                    {/* Facebook */}
                    <button className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                    
                    {/* Twitter */}
                    <button className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </button>
                    
                    {/* Email */}
                    <button className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors">
                      <img 
                        src="/assets/home/MailIcon.svg" 
                        alt="Email" 
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Related Jobs */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Related Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobData.relatedJobs.map((relatedJob) => (
              <div
                key={relatedJob.id}
                className="bg-gradient-to-br from-[#E8F3FF] to-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="mb-4">
                  <h3 className="font-bold text-gray-800 mb-1">
                    {relatedJob.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {relatedJob.type}
                    </span>
                    <span className="text-sm text-gray-600">
                      {relatedJob.salary}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Company Logo */}
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-700">
                          {relatedJob.company.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {relatedJob.company}
                        </p>
                        <p className="text-sm text-gray-600">
                          {relatedJob.location}
                        </p>
                      </div>
                    </div>
                    
                    {/* Bookmark Icon */}
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <FiBookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
