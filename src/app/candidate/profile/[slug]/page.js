'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiEdit, FiMail, FiPhone, FiMapPin, FiGlobe, FiBriefcase, FiCalendar } from 'react-icons/fi';

export default function ProfileSlugPage({ params }) {
  const [activeTab, setActiveTab] = useState('overview');

  const profileData = {
    name: 'Alex Rivera',
    headline: 'Frontend Engineer | React & TypeScript',
    location: 'San Francisco, CA',
    email: 'alex.rivera@email.com',
    phone: '+1 (555) 123-4567',
    website: 'https://yourportfolio.com',
    availability: 'Open to work',
    experience: [
      {
        title: 'Senior Frontend Engineer',
        company: 'TechFlow Inc.',
        period: 'Jan 2025 - Present',
        description: 'Leading frontend development for enterprise applications using React and TypeScript.'
      },
      {
        title: 'Frontend Developer',
        company: 'Digital Solutions Ltd.',
        period: 'Jun 2022 - Dec 2024',
        description: 'Developed responsive web applications and improved user experience across multiple projects.'
      }
    ],
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 88 },
      { name: 'Node.js', level: 75 }
    ],
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with React and Node.js',
        technologies: ['React', 'Node.js', 'MongoDB']
      },
      {
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates',
        technologies: ['React', 'Firebase', 'Tailwind CSS']
      }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-semibold text-gray-900">Profile</h1>
            <button 
              onClick={() => window.location.href = `/candidate/profile/${params.slug}/edit`}
              className="flex items-center gap-2 px-4 py-2 bg-[#0164D7] text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FiEdit className="w-4 h-4" />
              Edit Profile
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start gap-6">
            <div className="relative">
              <Image
                src="/alex-rivera.png"
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full border-4 border-gray-200"
              />
              <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{profileData.name}</h2>
              <p className="text-lg text-gray-600 mb-4">{profileData.headline}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FiMapPin className="w-4 h-4" />
                  {profileData.location}
                </div>
                <div className="flex items-center gap-2">
                  <FiMail className="w-4 h-4" />
                  {profileData.email}
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone className="w-4 h-4" />
                  {profileData.phone}
                </div>
                <div className="flex items-center gap-2">
                  <FiGlobe className="w-4 h-4" />
                  <a href={profileData.website} className="text-blue-600 hover:underline">
                    Portfolio
                  </a>
                </div>
              </div>
              
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {profileData.availability}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#0164D7] text-[#0164D7]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
                  <p className="text-gray-600">
                    Passionate frontend engineer with expertise in React, TypeScript, and modern web technologies. 
                    I love creating intuitive user interfaces and solving complex problems with elegant solutions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">5+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">50+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">15+</div>
                      <div className="text-sm text-gray-600">Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Work Experience</h3>
                {profileData.experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-[#0164D7] pl-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">{exp.title}</h4>
                        <p className="text-gray-600">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FiCalendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Skills & Expertise</h3>
                <div className="space-y-4">
                  {profileData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-32 text-sm font-medium text-gray-700">{skill.name}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#0164D7] h-2 rounded-full" 
                          style={{width: `${skill.level}%`}}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 w-12 text-right">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Projects & Portfolio</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {profileData.projects.map((project, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">{project.title}</h4>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
