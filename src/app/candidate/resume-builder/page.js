"use client";

import React, { useState } from "react";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiDownload,
  FiUpload,
} from "react-icons/fi";
import Header from "../dashboard/components/Header";
import ResumeBuilder from "./[slug]/ResumeBuilder";
import "./resume-styles.css";
import "./resume-fix.css";

export default function ResumeBuilderPage() {
  const [activeTab, setActiveTab] = useState("personal");
  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: "",
      professionalTitle: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
      photo: null,
    },
    experience: [],
    education: [],
    skills: [],
  });

  const tabs = [
    { id: "personal", label: "Personal", icon: "👤" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "skills", label: "Skills", icon: "⚡" },
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
          proficiency: 50,
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

  return (
      <>
      {/* Global Header */}
      <Header />
      
      {/* Resume Builder Header */}
      <ResumeBuilder />

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #000000;
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #000000;
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Sidebar - Form */}
          <div className="w-full">
            {/* Single Tab Navigation */}
            <div className="bg-gradient-to-r from-[#EFF6FF] to-[#FAF5FF] p-4 sm:p-6 rounded-lg shadow-md mb-6">
              <div className="flex items-center space-x-2 mb-4 sm:mb-2">
                
                <img src="/assets/home/sparks.svg" alt="sparks" className="w-5 h-5" />
                <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
                  Build Your Resume
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-2">
                Fill in your details to create a professional resume
              </p>

              {/* Tabs */}
              <div className="flex space-x-1 bg-gray-100 gap-2 sm:gap-5 p-1 rounded-full">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center space-x-1 px-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200
                      ${activeTab === tab.id ? "bg-blue-600 text-white shadow" : "text-gray-700 hover:bg-gray-200"}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon && <span className="text-lg sm:text-xl">{tab.icon}</span>}
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className=" rounded-lg border border-gray-200">
              {activeTab === "personal" && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#EFF6FF] to-[#FAF5FF] px-4 py-2 rounded-t-lg flex items-center space-x-2 border-b border-gray-200">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-700">
                      Personal Information
                    </h3>
                  </div>
                  {/* Full Name - Full Width */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <label className="text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <span className="px-2 py-1 bg-[#ECEEF2] text-gray-700 font-semibold text-xs rounded-lg">
                        Required
                      </span>
                    </div>
                    <input
                      type="text"
                      value={resumeData.personal.fullName}
                      onChange={(e) =>
                        updatePersonalInfo("fullName", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Professional Title - Full Width */}
                  <div className="px-6">
                    <div className="flex items-center gap-2 mb-2">
                      <label className="text-sm font-medium text-gray-700">
                        Professional Title
                      </label>
                      <span className="px-2 py-1 bg-[#ECEEF2] text-gray-700 font-semibold text-xs rounded-lg">
                        Required
                      </span>
                    </div>
                    <input
                      type="text"
                      value={resumeData.personal.professionalTitle}
                      onChange={(e) =>
                        updatePersonalInfo("professionalTitle", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                      placeholder="e.g. Senior Software Engineer"
                    />
                  </div>

                  {/* Email and Phone - Same Row */}
                  <div className="px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Email
                        </label>
                        <input
                          type="email"
                          value={resumeData.personal.email}
                          onChange={(e) =>
                            updatePersonalInfo("email", e.target.value)
                          }
                          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={resumeData.personal.phone}
                          onChange={(e) =>
                            updatePersonalInfo("phone", e.target.value)
                          }
                          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location - Full Width */}
                  <div className="px-6">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Location
                    </label>
                    <input
                      type="text"
                      value={resumeData.personal.location}
                      onChange={(e) =>
                        updatePersonalInfo("location", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                      placeholder="City, State"
                    />
                  </div>

                  {/* Professional Summary - Textarea */}
                  <div className="px-6 pb-6">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Professional Summary
                    </label>
                    <textarea
                      value={resumeData.personal.summary}
                      onChange={(e) =>
                        updatePersonalInfo("summary", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500 resize-none"
                      rows="4"
                      placeholder="Brief description of your professional background and goals..."
                      maxLength="500"
                    />
                    <div className="text-right mt-1">
                      <span className="text-xs text-gray-500">
                        {resumeData.personal.summary.length}/500
                      </span>
                    </div>
                  </div>

                  {/* Upload Photo */}
                  <div className="px-6 pb-6">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Upload Photo
                    </label>
                    <div 
                      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
                      onClick={() => document.getElementById('photo-upload').click()}
                    >
                      <div className="flex items-center justify-center gap-4">
                        <svg
                          width="50"
                          height="50"
                          viewBox="0 0 76 76"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M37.8378 9.45703V47.2949"
                            stroke="#0163D5"
                            strokeWidth="3.86806"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M53.6036 25.2228L37.8378 9.45703L22.072 25.2228"
                            stroke="#0163D5"
                            strokeWidth="3.86806"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M66.2162 47.2949V59.9075C66.2162 61.5801 65.5518 63.1841 64.3692 64.3668C63.1865 65.5494 61.5825 66.2138 59.9099 66.2138H15.7658C14.0932 66.2138 12.4892 65.5494 11.3065 64.3668C10.1239 63.1841 9.45947 61.5801 9.45947 59.9075V47.2949"
                            stroke="#0163D5"
                            strokeWidth="3.86806"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="text-center">
                          <p className="text-gray-600 font-medium mb-2">
                            Drag & drop your photo here{" "}
                          </p>
                          <p className="text-gray-500 text-sm">(Max 10Mb)</p>
                        </div>
                      </div>
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            if (file.size > 10 * 1024 * 1024) {
                              alert('File size must be less than 10MB');
                              return;
                            }
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              updatePersonalInfo('photo', reader.result);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <>
                  {resumeData.experience.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <p>
                        No experience added yet. Click "Add Experience" to get
                        started.
                      </p>
                    </div>
                  ) : (
                    resumeData.experience.map((exp, index) => (
                      <div
                        key={exp.id}
                        className=" rounded-lg border border-gray-200 space-y-4 mb-6"
                      >
                        <div className="bg-gradient-to-r from-[#EFF6FF] to-[#FAF5FF] px-4 py-2 rounded-t-lg flex items-center justify-between border-b border-gray-200">
                          <div className="flex items-center space-x-2">
                            <svg
                              className="w-5 h-5 text-gray-700"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            <h3 className="text-lg font-semibold text-gray-700">
                              Experience {index + 1}
                            </h3>
                          </div>
                          <button
                            onClick={() => deleteItem("experience", exp.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Company and Position - Same Row */}
                        <div className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Company
                              </label>
                              <input
                                type="text"
                                value={exp.company}
                                onChange={(e) =>
                                  updateItem(
                                    "experience",
                                    exp.id,
                                    "company",
                                    e.target.value,
                                  )
                                }
                                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                                placeholder="Company name"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Position
                              </label>
                              <input
                                type="text"
                                value={exp.title}
                                onChange={(e) =>
                                  updateItem(
                                    "experience",
                                    exp.id,
                                    "title",
                                    e.target.value,
                                  )
                                }
                                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                                placeholder="Job title"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Start Date and End Date - Same Row */}
                        <div className="px-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Start Date
                              </label>
                              <input
                                type="month"
                                value={exp.startDate}
                                onChange={(e) =>
                                  updateItem(
                                    "experience",
                                    exp.id,
                                    "startDate",
                                    e.target.value,
                                  )
                                }
                                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-700 mb-2 block">
                                End Date
                              </label>
                              <input
                                type="month"
                                value={exp.endDate}
                                onChange={(e) =>
                                  updateItem(
                                    "experience",
                                    exp.id,
                                    "endDate",
                                    e.target.value,
                                  )
                                }
                                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                                disabled={exp.current}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Currently Working Here Toggle - Full Width Left Aligned */}
                        <div className="px-6">
                          <div className="flex items-start">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={exp.current}
                                onChange={(e) =>
                                  updateItem(
                                    "experience",
                                    exp.id,
                                    "current",
                                    e.target.checked,
                                  )
                                }
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                              <span className="ml-3 text-sm font-medium text-gray-700">
                                Currently working here
                              </span>
                            </label>
                          </div>
                        </div>

                        {/* Description - Textarea */}
                        <div className="px-6 pb-6">
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Description
                          </label>
                          <textarea
                            value={exp.description}
                            onChange={(e) =>
                              updateItem(
                                "experience",
                                exp.id,
                                "description",
                                e.target.value,
                              )
                            }
                            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500 resize-none"
                            rows="4"
                            placeholder="Describe your responsibilities and achievements..."
                          />
                        </div>
                      </div>
                    ))
                  )}
                  <button
                    onClick={addExperience}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <FiPlus className="w-4 h-4" />
                    <span>Add Experience</span>
                  </button>
                </>
              )}

              {activeTab === "education" && (
                <>
                  {resumeData.education.map((edu, index) => (
                    <div
                      key={edu.id}
                      className=" rounded-lg border border-gray-200 space-y-4 mb-6"
                    >
                      <div className="bg-gradient-to-r from-[#EFF6FF] to-[#FAF5FF] px-4 py-2 rounded-t-lg flex items-center justify-between border-b border-gray-200">
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-5 h-5 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                          </svg>
                          <h3 className="text-lg font-semibold text-gray-700">
                            Education {index + 1}
                          </h3>
                        </div>
                        <button
                          onClick={() => deleteItem("education", edu.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Institution - Full Width */}
                      <div className="p-6">
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Institution
                        </label>
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) =>
                            updateItem(
                              "education",
                              edu.id,
                              "institution",
                              e.target.value,
                            )
                          }
                          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                          placeholder="University name"
                        />
                      </div>

                      {/* Degree and Field of Study - Same Row */}
                      <div className="px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                              Degree
                            </label>
                            <input
                              type="text"
                              value={edu.degree}
                              onChange={(e) =>
                                updateItem(
                                  "education",
                                  edu.id,
                                  "degree",
                                  e.target.value,
                                )
                              }
                              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                              placeholder="e.g. Bachelor of Science"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                              Field of Study
                            </label>
                            <input
                              type="text"
                              value={edu.fieldOfStudy || ""}
                              onChange={(e) =>
                                updateItem(
                                  "education",
                                  edu.id,
                                  "fieldOfStudy",
                                  e.target.value,
                                )
                              }
                              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                              placeholder="e.g. Computer Science"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Start Date and End Date - Same Row */}
                      <div className="px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                              Start Date
                            </label>
                            <input
                              type="month"
                              value={edu.startDate}
                              onChange={(e) =>
                                updateItem(
                                  "education",
                                  edu.id,
                                  "startDate",
                                  e.target.value,
                                )
                              }
                              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                              End Date
                            </label>
                            <input
                              type="month"
                              value={edu.endDate}
                              onChange={(e) =>
                                updateItem(
                                  "education",
                                  edu.id,
                                  "endDate",
                                  e.target.value,
                                )
                              }
                              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                              disabled={edu.current}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Currently Studying Here Toggle - Full Width */}
                      <div className="px-6 pb-6">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={edu.current}
                            onChange={(e) =>
                              updateItem(
                                "education",
                                edu.id,
                                "current",
                                e.target.checked,
                              )
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                          <span className="ml-3 text-sm font-medium text-gray-700">
                            Currently studying here
                          </span>
                        </label>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={addEducation}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <FiPlus className="w-4 h-4" />
                    <span>Add Education</span>
                  </button>
                </>
              )}

              {activeTab === "skills" && (
                <>
                  {resumeData.skills.map((skill, index) => (
                    <div
                      key={skill.id}
                      className=" rounded-lg border border-gray-200 space-y-4 mb-6"
                    >
                      <div className="bg-gradient-to-r from-[#EFF6FF] to-[#FAF5FF] px-4 py-2 rounded-t-lg flex items-center justify-between border-b border-gray-200">
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-5 h-5 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          <h3 className="text-lg font-semibold text-gray-700">
                            Skill {index + 1}
                          </h3>
                        </div>
                        <button
                          onClick={() => deleteItem("skills", skill.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Skill Name - Full Width */}
                      <div className="p-6">
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Skill Name
                        </label>
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) =>
                            updateItem(
                              "skills",
                              skill.id,
                              "name",
                              e.target.value,
                            )
                          }
                          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                          placeholder="e.g. UI/UX Design"
                        />
                      </div>

                      {/* Proficiency Level - Full Width */}
                      <div className="px-6 pb-6">
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Proficiency Level
                        </label>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>Beginner</span>
                            <span>Intermediate</span>
                            <span>Expert</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex-1 relative">
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={skill.proficiency}
                                onChange={(e) =>
                                  updateItem(
                                    "skills",
                                    skill.id,
                                    "proficiency",
                                    parseInt(e.target.value),
                                  )
                                }
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                style={{
                                  background: `linear-gradient(to right, #000000 ${skill.proficiency}%, #e5e7eb ${skill.proficiency}%)`,
                                }}
                              />
                            </div>
                            <span className="text-sm font-medium text-gray-700 min-w-[3rem] text-right">
                              {skill.proficiency}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={addSkill}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <FiPlus className="w-4 h-4" />
                    <span>Add Skill</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Resume Preview */}
          <div className="w-full">
            <div id="resume-preview" className="bg-white rounded-lg sticky top-6">
              <div className="flex flex-col bg-white p-8">
                {/* Header Section */}
                <div className="flex flex-col mb-6">
                  <div className="flex items-start space-x-6">
                    {/* Photo Section */}
                    <div className="flex flex-row">
                      {resumeData.personal.photo ? (
                        <img
                          src={resumeData.personal.photo}
                          alt="Profile"
                          className="w-24 h-24 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                      )}
                      <div className="ml-6 flex-1">
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">
                          {resumeData.personal.fullName || "Your Name"}
                        </h1>
                      </div>
                    </div>                    
                  </div>

                  {/*Title Section */}
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-gray-600 mb-3">
                      {resumeData.personal.professionalTitle ||
                        "Professional Title"}
                    </p>

                    {/* Contact Info section */}
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span>
                        📧 {resumeData.personal.email || "email@example.com"}
                      </span>                      
                    </div>

                    <div  className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>
                        📱 {resumeData.personal.phone || "+1 (555) 123-4567"}
                      </span>
                      <span>
                        📍 {resumeData.personal.location || "City, State"}
                      </span>
                      
                    </div>
                  </div>
                </div>

                {/* Summary Section */}
                {resumeData.personal.summary && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-blue-600"></div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        PROFESSIONAL SUMMARY
                      </h2>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed ml-10">
                      {resumeData.personal.summary}
                    </p>
                  </div>
                )}

                {/* Experience Section */}
                {resumeData.experience.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-blue-600"></div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        PROFESSIONAL EXPERIENCE
                      </h2>
                    </div>
                    {resumeData.experience.map((exp, index) => (
                      <div key={exp.id} className="mb-4 ml-10 relative">
                        <div className="absolute -left-4 top-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-base font-semibold text-gray-900">
                            {exp.title || "Job Title"}
                          </h3>
                          <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-full flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {exp.startDate && formatDate(exp.startDate)} -{" "}
                            {exp.current
                              ? "Present"
                              : exp.endDate && formatDate(exp.endDate)}
                          </span>
                        </div>
                        <p className="text-sm text-blue-600 font-medium mb-2">
                          {exp.company || "Company Name"}
                        </p>
                        {exp.description && (
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {exp.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Education Section */}
                {resumeData.education.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-blue-600"></div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        EDUCATION
                      </h2>
                    </div>
                    {resumeData.education.map((edu, index) => (
                      <div key={edu.id} className="mb-4 ml-10 relative">
                        <div className="absolute -left-4 top-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-base font-semibold text-gray-900">
                            {edu.degree || "Degree"}
                          </h3>
                          <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-full flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {edu.startDate && formatDate(edu.startDate)} -{" "}
                            {edu.current
                              ? "Present"
                              : edu.endDate && formatDate(edu.endDate)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">
                          {edu.fieldOfStudy || "Field of Study"}
                        </p>
                        <p className="text-sm text-blue-600">
                          {edu.institution || "Institution Name"}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills Section */}
                {resumeData.skills.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-blue-600"></div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        SKILLS
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-10">
                      {resumeData.skills.map((skill, index) => (
                        <div key={skill.id} className="mb-3">
                          <div className="flex items-center justify-between w-3/4">
                            <span className="text-sm text-gray-700 font-medium">
                              {skill.name || "Skill Name"}
                            </span>
                            <span className="text-sm text-gray-700">
                              {skill.proficiency}%
                            </span>
                          </div>
                          <div className="w-3/4 h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                            <div
                              className="h-full bg-blue-600 rounded-full"
                              style={{ width: `${skill.proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Bars */}
                <div className="mt-8 pt-4 border-t border-gray-300">
                  <div className="flex space-x-1">
                    <div className="flex-1 h-1 bg-gray-800"></div>
                    <div className="flex-1 h-1 bg-gray-600"></div>
                    <div className="flex-1 h-1 bg-gray-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
