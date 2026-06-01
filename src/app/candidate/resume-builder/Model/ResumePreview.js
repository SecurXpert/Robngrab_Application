import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ResumePreview({ resumeData, formatDate }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-3">
        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
        <span>Live Preview - Modern Template</span>
      </div>

      <div id="resume-preview" className="bg-white rounded-lg sticky top-6 border border-gray-200 shadow-sm overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div className="flex flex-col bg-white p-8">
          {/* Header Section */}
          <div className="mb-10">
            {/* Row 1: Photo + Name only */}
            <div className="flex items-center gap-6">
              <div className="shrink-0">
                {resumeData.personal.photo ? (
                  <img
                    src={resumeData.personal.photo}
                    alt="Profile"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-4 ring-blue-100 shadow-sm"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 ring-4 ring-blue-100 flex items-center justify-center shadow-sm">
                    <svg
                      className="w-9 h-9 text-blue-600/60"
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
              </div>

              <h1 className="min-w-0 flex-1 text-5xl md:text-6xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900">
                {resumeData.personal.fullName || "Your Name"}
              </h1>
            </div>

            {/* Row 2+: everything after name (aligned with photo start) */}
            <div className="mt-2 pl-2 sm:pl-3">
              <p className="text-2xl font-bold text-blue-600">
                {resumeData.personal.professionalTitle || "Professional Title"}
              </p>

              <div className="mt-4 flex flex-col gap-3 text-base text-gray-600">
                {/* Email row */}
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                    <FiMail className="w-5 h-5" />
                  </span>
                  <span className="truncate">
                    {resumeData.personal.email || "email@example.com"}
                  </span>
                </div>

                {/* Phone + Location row (side-by-side) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-10 items-center min-w-0">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                      <FiPhone className="w-5 h-5" />
                    </span>
                    <span className="truncate">
                      {resumeData.personal.phone || "+1 (555) 123-4567"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600">
                      <FiMapPin className="w-5 h-5" />
                    </span>
                    <span className="truncate">
                      {resumeData.personal.location || "City, State"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          {resumeData.personal.summary && (
            <div className="mb-6 border-b-2 border-[#F3F4F6] pb-4">
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
            <div className="mb-6 border-b-2 border-[#F3F4F6] pb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-6 bg-blue-600"></div>
                <h2 className="text-lg font-semibold text-gray-900">
                  EXPERIENCE
                </h2>
              </div>
              {resumeData.experience.map((exp) => (
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
            <div className="mb-6 border-b-2 border-[#F3F4F6] pb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-6 bg-blue-600"></div>
                <h2 className="text-lg font-semibold text-gray-900">
                  EDUCATION
                </h2>
              </div>
              {resumeData.education.map((edu) => (
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
            <div className="mb-6 border-b-2 border-[#F3F4F6] pb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-6 bg-blue-600"></div>
                <h2 className="text-lg font-semibold text-gray-900">
                  SKILLS
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-1">
                {resumeData.skills.map((skill) => (
                  <div key={skill.id} className="mb-3">
                    <div className="flex items-center justify-between w-3/4">
                      <span className="text-xl text-gray-700 font-semibold">
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
        </div>
      </div>
    </div>
  );
}
