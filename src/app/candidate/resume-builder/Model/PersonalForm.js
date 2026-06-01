import React from "react";
import { FiUser, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function PersonalForm({ resumeData, updatePersonalInfo }) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-6 flex items-center gap-3 border-b border-gray-200">
        <FiUser className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-normal text-[#0A0A0A]">
          Personal Information
        </h3>
      </div>
      
      <div className="px-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-semibold text-gray-700">
            Full Name
          </label>
          <span className="px-2 py-2 bg-gray-100 text-gray-700 font-semibold text-xs rounded-lg">
            Required
          </span>
        </div>
        <input
          type="text"
          value={resumeData.personal.fullName}
          onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
          placeholder="Enter your full name"
        />
      </div>

      <div className="px-6">
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-gray-700">
            Professional Title
          </label>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 font-semibold text-xs rounded-lg">
            Required
          </span>
        </div>
        <input
          type="text"
          value={resumeData.personal.professionalTitle}
          onChange={(e) => updatePersonalInfo("professionalTitle", e.target.value)}
          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
          placeholder="e.g. Senior Software Engineer"
        />
      </div>

      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block flex items-center gap-2">
              <FiMail className="w-4 h-4 text-[#6A7282]" />
              Email
            </label>
            <input
              type="email"
              value={resumeData.personal.email}
              onChange={(e) => updatePersonalInfo("email", e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block flex items-center gap-2">
              <FiPhone className="w-4 h-4 text-[#6A7282]" />
              Phone
            </label>
            <input
              type="tel"
              value={resumeData.personal.phone}
              onChange={(e) => updatePersonalInfo("phone", e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>
      </div>

      <div className="px-6">
        <label className="text-sm font-semibold text-gray-700 mb-2 block flex items-center gap-2">
          <FiMapPin className="w-4 h-4 text-[#6A7282]" />
          Location
        </label>
        <input
          type="text"
          value={resumeData.personal.location}
          onChange={(e) => updatePersonalInfo("location", e.target.value)}
          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
          placeholder="City, State"
        />
      </div>

      <div className="px-6 pb-">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">
          Professional Summary
        </label>
        <textarea
          value={resumeData.personal.summary}
          onChange={(e) => updatePersonalInfo("summary", e.target.value)}
          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500 resize-none"
          rows="4"
          placeholder="Brief overview of your professional background..."
          maxLength="240"
        />
        <div className="text-left mt-1">
          <span className="text-sm text-gray-500">240 characters</span>
        </div>
      </div>

      <div className="px-6 pb-6">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">
          Upload Photo
        </label>
        <div 
          className="w-full px-4 py-5 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500 cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-center"
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
              <p className="text-gray-500 font-medium mb-2">
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
  );
}
