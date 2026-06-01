"use client";

import { useState } from 'react';
import {
  FiClock,
  FiBriefcase,
  FiMapPin,
  FiChevronDown,
} from "react-icons/fi";
import { TfiWallet } from "react-icons/tfi";
import { CiBookmarkPlus } from "react-icons/ci";
import { BsBookmarkPlus } from "react-icons/bs";
import { VscBriefcase } from "react-icons/vsc";

import { useRouter } from 'next/navigation';

export default function RecentJobs({
  isJobsPage = false,
  searchTerm = '',
  setSearchTerm = () => { },
  selectedLocation = '',
  setSelectedLocation = () => { },
  selectedCategory = '',
  setSelectedCategory = () => { },
  selectedJobType = '',
  setSelectedJobType = () => { },
  selectedExperience = '',
  setSelectedExperience = () => { },
  selectedDate = '',
  setSelectedDate = () => { },
  selectedSalary = '',
  setSelectedSalary = () => { },
  selectedTags = [],
  setSelectedTags = () => { }
}) {
  const router = useRouter();
  const [sortBy, setSortBy] = useState('latest');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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
      icon: "/Assets/Job-logos/Colorful-globe-logo.svg",
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
      icon: "/Assets/Job-logos/Colorful-globe-logo-2.svg",
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
      icon: "/Assets/Job-logos/Colorful-globe-logo-3.svg",
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
      icon: "/Assets/Job-logos/Colorful-globe-logo-4.svg",
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
      icon: "/Assets/Job-logos/Colorful-globe-logo-5.svg",
    },
    {
      id: 6,
      time: "30 min ago",
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc",
      category: "Technology",
      type: "Full time",
      salary: "$70000-$90000",
      location: "San Francisco, USA",
      icon: "/Assets/Job-logos/Colorful-globe-logo.svg",
    },
    {
      id: 7,
      time: "35 min ago",
      title: "Marketing Manager",
      company: "Digital Marketing Pro",
      category: "Marketing",
      type: "Full time",
      salary: "$55000-$70000",
      location: "New York, USA",
      icon: "/Assets/Job-logos/Colorful-globe-logo-2.svg",
    },
    {
      id: 8,
      time: "40 min ago",
      title: "Data Analyst",
      company: "Analytics Solutions",
      category: "Data Science",
      type: "Full time",
      salary: "$50000-$65000",
      location: "Chicago, USA",
      icon: "/Assets/Job-logos/Colorful-globe-logo-3.svg",
    },
    {
      id: 9,
      time: "45 min ago",
      title: "UX Designer",
      company: "Design Studio",
      category: "Design",
      type: "Part time",
      salary: "$45000-$60000",
      location: "Seattle, USA",
      icon: "/Assets/Job-logos/Colorful-globe-logo-4.svg",
    },
    {
      id: 10,
      time: "50 min ago",
      title: "Project Manager",
      company: "Project Management Co",
      category: "Management",
      type: "Full time",
      salary: "$65000-$80000",
      location: "Austin, USA",
      icon: "/Assets/Job-logos/Colorful-globe-logo-5.svg",
    }
  ];

  // Filter jobs based on search and filters
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesCategory = !selectedCategory || job.category === selectedCategory;
    const matchesJobType = !selectedJobType || job.type === selectedJobType;

    return matchesSearch && matchesLocation && matchesCategory && matchesJobType;
  });

  // Sort jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return 0; // Keep original order (already sorted by time)
      case 'relevance':
        return b.title.length - a.title.length; // Simple relevance sort
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

  // Get jobs for current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleJobDetails = (job) => {
    router.push(`/jobs/${job.id}`);
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          {/* Results Text */}
          <span className="text-sm  text-gray-600">
            Showing {currentPage === 1 ? '1-6' : '7-10'} of {sortedJobs.length} results
          </span>

          <div className="flex items-center gap-8">
            {/* View All Option */}
            <button
              onClick={() => router.push('/jobs')}
              className="text-md font-medium hover:opacity-80 transition-opacity"
              style={{ borderBottom: '2px solid #0163D6', color: '#0163D6' }}
            >
              View All
            </button>

            {/* Sort Dropdown - Only on Jobs Page */}
            {isJobsPage && (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-500 hover:text-[#6C757D] font-medium text-sm sm:text-base flex items-center gap-2 bg-white border border-[#6C757D] rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors duration-200"
                >
                  Sort by: {sortBy === 'latest' ? 'Latest' : sortBy === 'relevance' ? 'Relevance' : 'Latest'}
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 w-40 bg-white border border-[#6C757D] rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => {
                        setSortBy('latest');
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-2 py-1 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg text-gray-900"
                    >
                      Latest
                    </button>
                    <button
                      onClick={() => {
                        setSortBy('relevance');
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-2 py-1 hover:bg-gray-50 transition-colors duration-200 text-gray-900"
                    >
                      Relevance
                    </button>
                    <button
                      onClick={() => {
                        setSortBy('salary-high');
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-2 py-1 hover:bg-gray-50 transition-colors duration-200 text-gray-900"
                    >
                      Salary: High to Low
                    </button>
                    <button
                      onClick={() => {
                        setSortBy('salary-low');
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-2 py-1 hover:bg-gray-50 transition-colors duration-200 last:rounded-b-lg text-gray-900"
                    >
                      Salary: Low to High
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Job Cards */}
        <div className="mt-15 space-y-3 sm:space-y-4">
          {currentJobs.map((job, index) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 sm:p-6 relative"
            >
              {/* Bookmark Icon - Top Right */}
              <button className="absolute top-4 right-4 p-2 transition-colors duration-200">
                <BsBookmarkPlus className="w-5 h-5 text-[#6C757D]" />
              </button>

              <div className="flex flex-col gap-4">
                {/* Time */}
                <div className="flex justify-between items-center">
                  <span className="text-[#0163D6] text-xs sm:text-sm bg-[#E7F0FA] px-2 py-1 rounded">{job.time}</span>
                </div>

                {/* Job Title and Company */}
                <div className="flex items-start space-x-3">
                  {/* profile image */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
                  >
                    {typeof job.icon === 'string' ? (
                      <img
                        src={job.icon}
                        alt="Company Logo"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <job.icon className="w-5 h-5 text-white" />
                    )}
                  </div>
                  {/* Company Details */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-xl font-semibold text-[#152A5B] mb-1 hover:text-blue-500 cursor-pointer transition-colors"
                      onClick={() => handleJobDetails(job)}
                    >
                      {job.title}
                    </h3>
                    <p className="text-sm text-[#152A5B]">{job.company}</p>
                  </div>
                </div>

                {/* Job Details Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-[#6C757D]">
                  <div className="flex flex-wrap items-center gap-4">
                    {/* Category */}
                    <div className="flex items-center gap-2">
                      <VscBriefcase className="w-6 h-6" style={{ color: '#0163D6' }} />
                      <span>{job.category}</span>
                    </div>

                    {/* Job Type */}
                    <div className="flex items-center gap-2">
                      <FiClock className="w-5 h-5" style={{ color: '#0163D6' }} />
                      <span>{job.type}</span>
                    </div>

                    {/* Salary */}
                    <div className="flex items-center gap-2">
                      <TfiWallet className="w-5 h-5" style={{ color: '#0163D6' }} />
                      <span>{job.salary}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2">
                      <FiMapPin className="w-5 h-5 " style={{ color: '#0163D6' }} />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Job Details Button */}
                  <button 
                    onClick={() => handleJobDetails(job)}
                    className="px-4 sm:px-4 py-2 bg-[#0163D6] text-white rounded-lg hover:bg-[#0152b8] transition-colors duration-200 font-medium text-sm sm:text-sm"
                  >
                    Job Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 gap-4">
          {/* Previous Button - Only show on page 2 */}
          {currentPage === 2 && (
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="px-4 py-2 rounded-lg font-medium transition-colors bg-white text-[#0163D6] border border-[#0163D6] hover:bg-blue-50"
            >
              Previous
            </button>
          )}

          {/* Page Numbers */}
          <div className="flex gap-2">
            {[1, 2].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === page
                    ? 'bg-[#0163D6] text-white'
                    : 'bg-white text-[#0163D6] border border-[#0163D6] hover:bg-blue-50'
                  }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button - Only show on page 1 */}
          {currentPage === 1 && (
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, 2))}
              className="px-4 py-2 rounded-lg font-medium transition-colors bg-white text-[#0163D6] border border-[#0163D6] hover:bg-blue-50"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
