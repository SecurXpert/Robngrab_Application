"use client";

import { useState } from "react";
import { FiEye, FiEyeOff, FiUser, FiMail, FiLock, FiBriefcase, FiMapPin, FiArrowLeft, FiArrowRight, FiUpload } from "react-icons/fi";
import StepBar from '@/app/signup/Model/StepBar';

const experienceLevels = [
  { id: "entry", title: "Fresher", subtitle: "0-2 years", value: "entry" },
  { id: "experienced", title: "Experienced", subtitle: "2+ years", value: "experienced" }
];

export default function SignupSteps({
  currentStep,
  formData,
  handleChange,
  showPassword,
  setShowPassword,
  onExperienceLevelSelect,
  onNextStep,
  onPrevStep,
  onCompleteSetup
}) {
  const [verificationCode, setVerificationCode] = useState("");

  // Step 1: Basic Info
  if (currentStep === 1) {
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (!formData.fullName?.trim()) {
        alert("Please enter your full name");
        return;
      }
      
      if (!formData.email?.trim()) {
        alert("Please enter your email");
        return;
      }
      
      if (!formData.password?.trim()) {
        alert("Please enter a password");
        return;
      }
      
      if (!formData.confirmPassword?.trim()) {
        alert("Please confirm your password");
        return;
      }
      
      if (formData.password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      
      onNextStep();
    };

    return (
      <div>
        <StepBar currentStep={currentStep} totalSteps={2} />
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h1>
          <p className="text-gray-600">Let's get you started with the basics</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName || ""}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password || ""}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Create a strong password"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword || ""}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Step 2: Professional Info
  if (currentStep === 2) {
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Basic validation for required fields
      if (!formData.jobTitle?.trim()) {
        alert("Please enter your current role");
        return;
      }
      
      // Check if location is required for entry level
      if (formData.experienceLevel === "entry" && !formData.location?.trim()) {
        alert("Please enter your location");
        return;
      }
      
      // Check if resume is required for experienced level
      if (formData.experienceLevel === "experienced" && !formData.resume) {
        alert("Please upload your resume");
        return;
      }
      
      onCompleteSetup(); // This will trigger the verification stages
    };

    return (
      <div>
        <StepBar currentStep={currentStep} totalSteps={2} />
        <div className="mb-8">
          <div className="flex justify-left mb-2">
            <FiBriefcase className="h-10 w-11 text-blue-700 bg-blue-100 p-2 rounded-lg" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tell us about yourself</h1>
          <p className="text-gray-600">Help us personalize your experience</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Role</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiBriefcase className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle || ""}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g. Software Engineer"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Experience Level</label>
              <div className="grid grid-cols-2 gap-3">
                {experienceLevels.map((level) => (
                  <div key={level.id} className="relative">
                    <input
                      type="radio"
                      id={level.id}
                      name="experienceLevel"
                      value={level.value}
                      checked={formData.experienceLevel === level.value}
                      onChange={(e) => {
                        console.log("Experience level selected:", level.value);
                        handleChange(e);
                        onExperienceLevelSelect(level.value);
                      }}
                      className="sr-only"
                    />
                    <label
                      htmlFor={level.id}
                      className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
                        formData.experienceLevel === level.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-medium text-gray-900">{level.title}</div>
                      <div className="text-sm text-gray-600">{level.subtitle}</div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {formData.experienceLevel === "entry" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="location"
                    value={formData.location || ""}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="City, Country"
                  />
                </div>
              </div>
            )}

            {formData.experienceLevel === "experienced" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Resume/CV</label>
                
                {/* Advanced Resume Upload Section */}
                <div className="space-y-4">
                  {/* Hidden File Input */}
                  <input
                    id="resume-upload"
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />

                  {/* Drag and Drop Area */}
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors bg-gray-50 cursor-pointer"
                    onClick={() => document.getElementById('resume-upload').click()}
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.currentTarget.classList.add('border-blue-400', 'bg-blue-50');
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault();
                      e.currentTarget.classList.remove('border-blue-400', 'bg-blue-50');
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.currentTarget.classList.remove('border-blue-400', 'bg-blue-50');
                      const files = e.dataTransfer.files;
                      if (files.length > 0) {
                        const fileInput = document.getElementById('resume-upload');
                        fileInput.files = files;
                        const event = new Event('change', { bubbles: true });
                        fileInput.dispatchEvent(event);
                      }
                    }}
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-700">Drop your resume here</p>
                        <p className="text-sm text-gray-500">or click to browse</p>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                          PDF
                        </span>
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-1"></div>
                          DOC
                        </span>
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-1"></div>
                          DOCX
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* File Info Display */}
                  {formData.resume && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">
                              {formData.resume.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const fileInput = document.getElementById('resume-upload');
                            fileInput.value = '';
                            handleChange({ target: { name: 'resume', files: [] } });
                          }}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex gap-4">
            <button
              type="button"
              onClick={onPrevStep}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              <FiArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Complete Signup
              <FiArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </form>
      </div>
    );
  }

  return null;
}
