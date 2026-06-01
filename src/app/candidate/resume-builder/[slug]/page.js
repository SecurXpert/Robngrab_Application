'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { FiUser, FiBriefcase } from 'react-icons/fi';
import { LuSparkles } from 'react-icons/lu';
import { RiGraduationCapLine } from 'react-icons/ri';

import Header from '@/app/candidate/dashboard/Model/Header';
import ResumeBuilderHeader from '@/app/candidate/resume-builder/Model/ResumeBuilderHeader';
import PersonalForm from '@/app/candidate/resume-builder/Model/PersonalForm';
import ExperienceForm from '@/app/candidate/resume-builder/Model/ExperienceForm';
import EducationForm from '@/app/candidate/resume-builder/Model/EducationForm';
import SkillsForm from '@/app/candidate/resume-builder/Model/SkillsForm';
import ResumePreview from '@/app/candidate/resume-builder/Model/ResumePreview';

export default function ResumeBuilderSlugPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState('personal');
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Pre-hydrated mock data based on slug (e.g. Alex Rivera)
  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: 'Alex Rivera',
      professionalTitle: 'Senior Frontend Engineer',
      email: 'alex.rivera@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      summary: 'Passionate frontend engineer with 5+ years of experience building scalable web applications. Expert in React, TypeScript, and modern CSS frameworks. Strong focus on user experience and performance optimization.',
      photo: null,
    },
    experience: [
      {
        id: 1,
        title: 'Senior Frontend Engineer',
        company: 'TechFlow Inc.',
        location: 'San Francisco, CA',
        startDate: '2025-01',
        endDate: '',
        current: true,
        description: 'Leading frontend development for enterprise applications using React and TypeScript. Mentoring junior developers and establishing best practices.'
      },
      {
        id: 2,
        title: 'Frontend Developer',
        company: 'Digital Solutions Ltd.',
        location: 'Remote',
        startDate: '2022-06',
        endDate: '2024-12',
        current: false,
        description: 'Developed responsive web applications and improved user experience across multiple projects. Reduced bundle size by 40% through optimization.'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of California, Berkeley',
        fieldOfStudy: 'Computer Science',
        location: 'Berkeley, CA',
        startDate: '2018-09',
        endDate: '2022-05',
        current: false,
        gpa: '3.8'
      }
    ],
    skills: [
      {
        id: 1,
        name: 'React',
        proficiency: 95
      },
      {
        id: 2,
        name: 'TypeScript',
        proficiency: 90
      },
      {
        id: 3,
        name: 'JavaScript',
        proficiency: 95
      },
      {
        id: 4,
        name: 'Node.js',
        proficiency: 75
      }
    ],
  });

  const tabs = [
    { id: "personal", label: "Personal", icon: <FiUser /> },
    { id: "experience", label: "Experience", icon: <FiBriefcase /> },
    { id: "education", label: "Education", icon: <RiGraduationCapLine /> },
    { id: "skills", label: "Skills", icon: <LuSparkles /> },
  ];

  const updatePersonalInfo = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        },
      ],
    }));
  };

  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now(),
          degree: "",
          institution: "",
          fieldOfStudy: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          gpa: "",
        },
      ],
    }));
  };

  const addSkill = () => {
    setResumeData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          id: Date.now(),
          name: "",
          proficiency: 80,
        },
      ],
    }));
  };

  const deleteItem = (section, id) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }));
  };

  const updateItem = (section, id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: prev[section].map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Resume saved successfully!');
    }, 1000);
  };

  const handleDownload = (format) => {
    alert(`Downloading resume as ${format.toUpperCase()}...`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Global Header */}
      <Header />

      {/* Resume Builder Actions Bar */}
      <ResumeBuilderHeader
        isPreviewMode={isPreviewMode}
        onTogglePreview={() => setIsPreviewMode(!isPreviewMode)}
        onSave={handleSave}
        onDownload={handleDownload}
        isSaving={isSaving}
        resumeTitle={`${resumeData.personal.fullName}'s Professional CV`}
      />

      <div className="py-4 sm:py-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Left Sidebar - Form Builder (Visible in edit mode or side-by-side) */}
            <div className={`w-full ${isPreviewMode ? 'hidden lg:block' : 'block'}`}>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-6">
                {/* Header info */}
                <div className="bg-white px-4 py-3 rounded-lg border border-gray-200 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <img src="/Assets/Home/Sparks.svg" alt="sparks" className="w-6 h-6" />
                    <h2 className="text-lg sm:text-xl font-medium text-gray-900">
                      Build Your Resume
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-gray-500 mb-7">
                    Fill in your details to create a professional resume
                  </p>

                  {/* Tab Selector */}
                  <div className="flex items-center bg-gray-100 rounded-full p-1 overflow-x-auto scrollbar-none">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        className={`flex flex-1 items-center justify-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                          ${activeTab === tab.id
                            ? "bg-blue-600 text-white shadow-sm"
                            : "text-gray-700 hover:bg-white/70"
                          }`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        {tab.icon && <span className="text-base flex items-center justify-center">{tab.icon}</span>}
                        <span>{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Forms Content */}
                <div className="rounded border border-[#E5E7EB] bg-white overflow-hidden" style={{ borderTop: '1.58px solid #E5E7EB' }}>
                  {activeTab === "personal" && (
                    <PersonalForm
                      resumeData={resumeData}
                      updatePersonalInfo={updatePersonalInfo}
                    />
                  )}

                  {activeTab === "experience" && (
                    <ExperienceForm
                      resumeData={resumeData}
                      updateItem={updateItem}
                      deleteItem={deleteItem}
                      addExperience={addExperience}
                    />
                  )}

                  {activeTab === "education" && (
                    <EducationForm
                      resumeData={resumeData}
                      updateItem={updateItem}
                      deleteItem={deleteItem}
                      addEducation={addEducation}
                    />
                  )}

                  {activeTab === "skills" && (
                    <SkillsForm
                      resumeData={resumeData}
                      updateItem={updateItem}
                      deleteItem={deleteItem}
                      addSkill={addSkill}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Real-time Resume Live Preview */}
            <div className={`w-full ${isPreviewMode ? 'block lg:col-span-2' : 'block'}`}>
              <ResumePreview resumeData={resumeData} formatDate={formatDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
