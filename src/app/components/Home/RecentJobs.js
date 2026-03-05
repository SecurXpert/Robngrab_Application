"use client";

import { useState } from 'react';
import {
  FiBookmark,
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiBriefcase,
  FiChevronDown,
} from "react-icons/fi";
import { useRouter } from 'next/navigation';

export default function RecentJobs({ isJobsPage = false }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('latest');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const jobsPerPage = 6;

  const jobs = [
    {
      id: 1,
      time: "10 min ago",
      title: "Forward Security Director",
      company: "Bauch, Schuppe and Schulist Co",
      category: "Hotels & Tourism",
      type: "Full time",
      salary: "$40000-$42000",
      location: "New-York, USA",
      logoColor: "bg-blue-500",
      icon: FiMapPin,
    },
    {
      id: 2,
      time: "12 min ago",
      title: "Regional Creative Facilitator",
      company: "Wisozk - Becker Co",
      category: "Media",
      type: "Part time",
      salary: "$28000-$32000",
      location: "Los-Angeles, USA",
      logoColor: "bg-purple-500",
      icon: FiBookmark,
    },
    {
      id: 3,
      time: "15 min ago",
      title: "Internal Integration Planner",
      company: "Mraz, Quigley and Feest Inc.",
      category: "Construction",
      type: "Full time",
      salary: "$48000-$50000",
      location: "Texas, USA",
      logoColor: "bg-orange-500",
      icon: FiBriefcase,
    },
    {
      id: 4,
      time: "24 min ago",
      title: "District Intranet Director",
      company: "VonRueden - Weber Co",
      category: "Commerce",
      type: "Full time",
      salary: "$42000-$48000",
      location: "Florida, USA",
      logoColor: "bg-green-500",
      icon: FiDollarSign,
    },
    {
      id: 5,
      time: "26 min ago",
      title: "Corporate Tactics Facilitator",
      company: "Cormier, Turner and Flatley Inc",
      category: "Commerce",
      type: "Full time",
      salary: "$38000-$40000",
      location: "Boston, USA",
      logoColor: "bg-green-500",
      icon: FiDollarSign,
    },
    {
      id: 6,
      time: "28 min ago",
      title: "Technical Support Specialist",
      company: "Google Inc.",
      category: "Technology",
      type: "Part time",
      salary: "$20000-$25000",
      location: "Dhaka, Bangladesh",
      logoColor: "bg-blue-600",
      icon: FiClock,
    },
    {
      id: 7,
      time: "30 min ago",
      title: "Marketing Manager",
      company: "Meta Platforms",
      category: "Marketing",
      type: "Full time",
      salary: "$55000-$65000",
      location: "San Francisco, USA",
      logoColor: "bg-blue-700",
      icon: FiBookmark,
    },
    {
      id: 8,
      time: "32 min ago",
      title: "Data Analyst",
      company: "Amazon Web Services",
      category: "Data Science",
      type: "Full time",
      salary: "$70000-$80000",
      location: "Seattle, USA",
      logoColor: "bg-orange-600",
      icon: FiClock,
    },
    {
      id: 9,
      time: "34 min ago",
      title: "Product Designer",
      company: "Adobe Systems",
      category: "Design",
      type: "Full time",
      salary: "$45000-$55000",
      location: "San Jose, USA",
      logoColor: "bg-red-600",
      icon: FiBookmark,
    },
  ];

  const handleJobDetails = (job) => {
    router.push(`/jobs/jobdet?id=${job.id}`);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'salary-high', label: 'Salary (High to Low)' },
    { value: 'salary-low', label: 'Salary (Low to High)' },
  ];

  const sortedJobs = [...jobs].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return a.id - b.id;
      case 'oldest':
      case 'relevance':
        return b.id - a.id;
      case 'name-asc':
        return a.title.localeCompare(b.title);
      case 'name-desc':
        return b.title.localeCompare(a.title);
      case 'salary-high':
        const getSalaryHigh = (salary) => {
          const numbers = salary.match(/\d+/g);
          return numbers ? parseInt(numbers[numbers.length - 1]) * 1000 : 0;
        };
        return getSalaryHigh(b.salary) - getSalaryHigh(a.salary);
      case 'salary-low':
        const getSalaryLow = (salary) => {
          const numbers = salary.match(/\d+/g);
          return numbers ? parseInt(numbers[numbers.length - 1]) * 1000 : 0;
        };
        return getSalaryLow(a.salary) - getSalaryLow(b.salary);
      default:
        return 0;
    }
  });

  // Get current page jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#152A5B] mb-2">
              Recent Jobs Available
            </h2>
            <p className="text-sm sm:text-base text-gray-600">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</p>
          </div>
          
          {/* Conditional Header Content */}
          {isJobsPage ? (
            /* Sort Dropdown for Jobs Page */
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-900 hover:text-gray-900 font-medium text-sm sm:text-base flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors duration-200"
              >
                Sort by: {sortBy === 'latest' ? 'Latest' : sortBy === 'relevance' ? 'Relevance' : 'Latest'}
                <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <button
                    onClick={() => {
                      setSortBy('latest');
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg text-gray-900"
                  >
                    Latest
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('relevance');
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 last:rounded-b-lg text-gray-900"
                  >
                    Relevance
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* View All Link for Home Page */
            <div>
              <span 
                onClick={() => router.push('/jobs')}
                className="text-blue-500 hover:text-blue-600 font-medium underline cursor-pointer text-sm sm:text-base font-semibold"
              >
                View all
              </span>
            </div>
          )}
        </div>

        {/* Job Cards */}
        <div className="space-y-3 sm:space-y-4">
          {currentJobs.map((job, index) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                {/* Left Content */}
                <div className="flex-1 w-full">
                  {/* Time and Bookmark */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[#0163D6] text-xs sm:text-sm bg-[#E7F0FA] px-2 py-1 rounded">{job.time}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-500">#{(currentPage - 1) * jobsPerPage + index + 1}</span>
                      <img src="/assets/home/saveIcon.svg" alt="Save icon" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
                    </div>
                  </div>

                  {/* Job Title and Company */}
                  <div className="flex items-start sm:items-center space-x-3 mb-4">
                    {/* profile image */}
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 ${job.logoColor} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <job.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    {/* Company Details */}
                    <div className="flex-1">
                      <h3
                        className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 hover:text-blue-500 cursor-pointer transition-colors"
                        onClick={() => handleJobDetails(job)}
                      >
                        {job.title}
                      </h3>
                      <span className="text-sm sm:text-base text-gray-600">{job.company}</span>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div className="flex flex-wrap gap-10 text-xs sm:text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <img
                          src="/assets/home/briefcase2.svg"
                          alt="Briefcase icon"
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                        <span>{job.category}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <img
                          src="/assets/home/clock.svg"
                          alt="clock icon"
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <img
                          src="/assets/home/wallet.svg"
                          alt="wallet icon"
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <img
                          src="/assets/home/map-pin.svg"
                          alt="map pin icon"
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    {/* Right Button */}
                    <button
                      onClick={() => handleJobDetails(job)}
                      className="w-full sm:w-auto bg-[#0163D6] text-white px-4 sm:px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm sm:text-base"
                    >
                      Job Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7 7" />
            </svg>
            Previous
          </button>

          <div className="flex items-center gap-2">
            {[...Array(Math.ceil(jobs.length / jobsPerPage))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                  currentPage === index + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(jobs.length / jobsPerPage)}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
