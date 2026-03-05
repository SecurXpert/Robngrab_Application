'use client';

import React from 'react';
import { FiMapPin, FiClock, FiBriefcase, FiCpu, FiTrendingUp, FiSettings, FiMonitor, FiBarChart } from 'react-icons/fi';

export default function FeaturedJobs() {
  const getIcon = (iconName) => {
    const icons = {
      FiBriefcase,
      FiCpu,
      FiTrendingUp,
      FiSettings,
      FiMonitor,
      FiBarChart
    };
    return icons[iconName] || FiBriefcase;
  };

  const featuredJobs = [
    {
      id: 1,
      title: 'UI/UX Designer',
      company: 'Creative Agency',
      location: 'New York, USA',
      type: 'Full Time',
      icon: 'FiBriefcase',
      logoColor: 'bg-purple-500',
      description: 'We are looking for a talented UI/UX Designer to join our team and help create amazing user experiences.',
      tags: ['Design', 'Figma', 'Adobe XD']
    },
    {
      id: 2,
      title: 'Software Developer',
      company: 'Tech Corp',
      location: 'San Francisco, USA',
      type: 'Full Time',
      icon: 'FiCpu',
      logoColor: 'bg-blue-500',
      description: 'Join our development team to build innovative software solutions for clients worldwide.',
      tags: ['JavaScript', 'React', 'Node.js']
    },
    {
      id: 3,
      title: 'Marketing Manager',
      company: 'Digital Solutions',
      location: 'Los Angeles, USA',
      type: 'Full Time',
      icon: 'FiTrendingUp',
      logoColor: 'bg-green-500',
      description: 'Lead our marketing efforts and develop strategies to promote our products and services.',
      tags: ['Marketing', 'SEO', 'Content']
    },
    {
      id: 4,
      title: 'Product Designer',
      company: 'Innovation Labs',
      location: 'Seattle, USA',
      type: 'Full Time',
      icon: 'FiSettings',
      logoColor: 'bg-orange-500',
      description: 'Create beautiful and functional product designs that delight our users.',
      tags: ['Product Design', 'Sketch', 'Prototyping']
    },
    {
      id: 5,
      title: 'Data Analyst',
      company: 'Analytics Pro',
      location: 'Boston, USA',
      type: 'Full Time',
      icon: 'FiBarChart',
      logoColor: 'bg-red-500',
      description: 'Analyze complex data sets and provide insights to drive business decisions.',
      tags: ['Data Analysis', 'SQL', 'Python']
    },
    {
      id: 6,
      title: 'Project Manager',
      company: 'Global Tech',
      location: 'Chicago, USA',
      type: 'Full Time',
      icon: 'FiBriefcase',
      logoColor: 'bg-indigo-500',
      description: 'Manage projects and coordinate with cross-functional teams to deliver results.',
      tags: ['Project Management', 'Agile', 'Scrum']
    },
    {
      id: 7,
      title: 'Frontend Developer',
      company: 'Web Studio',
      location: 'Austin, USA',
      type: 'Full Time',
      icon: 'FiMonitor',
      logoColor: 'bg-pink-500',
      description: 'Build responsive and interactive web applications using modern frontend technologies.',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 8,
      title: 'Business Analyst',
      company: 'Consulting Group',
      location: 'Miami, USA',
      type: 'Full Time',
      icon: 'FiTrendingUp',
      logoColor: 'bg-teal-500',
      description: 'Analyze business processes and recommend solutions to improve efficiency and productivity.',
      tags: ['Business Analysis', 'Requirements', 'Documentation']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Featured Jobs
            </h2>
            
          </div>
          <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
            Show all jobs
          </a>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              {/* Header with Logo and Job Type */}
              <div className="flex justify-between items-start mb-4">
                {/* Company Logo */}
                <div className={`w-12 h-12 rounded-full ${job.logoColor} flex items-center justify-center`}>
                  {React.createElement(getIcon(job.icon), { 
                    className: "w-6 h-6 text-white" 
                  })}
                </div>

                {/* Job Type Badge */}
                <span className="border border-[#0163D6] text-[#0163D6] text-xs font-medium px-2 py-1 flex items-center">
                  <FiClock className="w-3 h-3 mr-1" /> {job.type}
                </span>
              </div>

              {/* Job Title and Company */}
              <div className="mb-3">
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-500 transition-colors mb-1">
                  {job.title}
                </h3>
                <p className="text-[#515B6F] text-sm">{job.company} - {job.location}</p>
              </div>

              {/* Location */}
              <div className="flex items-center text-gray-500 text-sm mb-3">
                {/* <FiMapPin className="w-4 h-4 mr-1" /> */}
                
              </div>

              {/* Description */}
              <p className="text-[#7C8493] text-sm mb-4 line-clamp-2">
                {job.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, index) => {
                  const tagColors = [
                    'bg-blue-100 text-blue-700',
                    'bg-green-100 text-green-700', 
                    'bg-purple-100 text-purple-700',
                    'bg-orange-100 text-orange-700',
                    'bg-pink-100 text-pink-700'
                  ];
                  const colorClass = tagColors[index % tagColors.length];
                  return (
                    <span
                      key={index}
                      className={`${colorClass} text-xs px-2 py-1 rounded-full`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}