'use client';

import { useState } from 'react';
import Header from '@/app/candidate/dashboard/Model/Header';
import ProfileSidebar from '@/app/candidate/profile/Model/ProfileSidebar';
import SmartHighlights from '@/app/candidate/profile/Model/SmartHighlights';
import CareerTimeline from '@/app/candidate/profile/Model/CareerTimeline';
import FeaturedProjects from '@/app/candidate/profile/Model/FeaturedProjects';
import Certifications from '@/app/candidate/profile/Model/Certifications';
import ProfileStrength from '@/app/candidate/profile/Model/ProfileStrength';
import JobPreferences from '@/app/candidate/profile/Model/JobPreferences';
import RecentApplications from '@/app/candidate/profile/[slug]/Model/RecentApplications';
import PrivacySettings from '@/app/candidate/settings/Model/PrivacySettings';

import PersonalInfoForm from '@/app/candidate/profile/Model/PersonalInfoForm';
import ExperienceForm from '@/app/candidate/resume-builder/Model/ExperienceForm';
import SkillsForm from '@/app/candidate/resume-builder/Model/SkillsForm';
import ProjectsForm from '@/app/candidate/resume-builder/Model/ProjectsForm';
import JobPreferencesForm from '@/app/candidate/profile/Model/JobPreferencesForm';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState('personal-info');

  const [formData, setFormData] = useState({
    firstName: 'Alex',
    lastName: 'Rivera',
    headline: 'Frontend Engineer | React & TypeScript',
    location: 'San Francisco, CA',
    email: 'alex.rivera@email.com',
    phone: '+1 (555) 123-4567',
    website: 'https://yourportfolio.com',
    availability: 'open-to-work',
    desiredRole: 'Senior Frontend Engineer',
    preferredLocation: 'Remote / San Francisco Bay Area',
    workModes: ['remote', 'hybrid', 'onsite'],
    employmentTypes: ['full-time', 'part-time', 'contract'],
    salaryMin: '120000',
    salaryMax: '160000',
    relocate: false,
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWorkModeToggle = (mode) => {
    setFormData(prev => ({
      ...prev,
      workModes: prev.workModes.includes(mode)
        ? prev.workModes.filter(m => m !== mode)
        : [...prev.workModes, mode]
    }));
  };

  const handleEmploymentTypeToggle = (type) => {
    setFormData(prev => ({
      ...prev,
      employmentTypes: prev.employmentTypes.includes(type)
        ? prev.employmentTypes.filter(t => t !== type)
        : [...prev.employmentTypes, type]
    }));
  };

  const handleAvailabilityChange = (status) => {
    setFormData(prev => ({ ...prev, availability: status }));
  };

  const menuItems = [
    {
      id: 'personal-info',
      label: 'Personal Info',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    },
    {
      id: 'job-preferences',
      label: 'Job Preferences',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
  ];

  if (isEditing) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50">
          <header className="border-gray-200 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="p-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h1 className="text-xl font-semibold text-gray-900">Edit Profile</h1>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-white bg-[#0164D7] rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </header>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <nav className="bg-white rounded-lg shadow-sm border border-gray-200 p-2">
                  <ul className="space-y-1">
                    {menuItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => setActiveSection(item.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeSection === item.id
                            ? 'bg-[#0164D7] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-sm font-medium">{item.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="lg:col-span-3">
                <div className="rounded-lg ">
                  {activeSection === 'personal-info' && (
                    <PersonalInfoForm
                      formData={formData}
                      handleInputChange={handleInputChange}
                      handleAvailabilityChange={handleAvailabilityChange}
                    />
                  )}
                  {activeSection === 'experience' && <ExperienceForm />}
                  {activeSection === 'skills' && <SkillsForm />}
                  {activeSection === 'projects' && <ProjectsForm />}
                  {activeSection === 'job-preferences' && (
                    <JobPreferencesForm
                      formData={formData}
                      handleInputChange={handleInputChange}
                      handleWorkModeToggle={handleWorkModeToggle}
                      handleEmploymentTypeToggle={handleEmploymentTypeToggle}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-gray-50 py-8 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-1 rounded-lg">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
            </div>
            <p className="text-gray-600 mt-1">Turn your experience into opportunity.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-3">
              <ProfileSidebar onEditClick={() => setIsEditing(true)} />
            </div>

            {/* Middle Content */}
            <div className="lg:col-span-6">
              <div className="space-y-8">
                <SmartHighlights />
                <CareerTimeline />
                <FeaturedProjects />
                <Certifications />
                <JobPreferences />
                <RecentApplications />
                <PrivacySettings />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                <ProfileStrength />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
