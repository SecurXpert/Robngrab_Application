import React from "react";
import { FiTrash2, FiPlus } from "react-icons/fi";
import { RiGraduationCapLine } from "react-icons/ri";

export default function EducationForm({ resumeData, updateItem, deleteItem, addEducation }) {
  return (
    <>
      {resumeData.education.map((edu, index) => (
        <div key={edu.id} className="rounded-lg border border-gray-200 space-y-4 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-8 rounded-t-lg flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center gap-3">
              <RiGraduationCapLine className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-medium text-gray-900">
                {index === 0 ? "Graduation" : index === 1 ? "Intermediate" : "Higher Education"}
              </h3>
            </div>
            <button
              onClick={() => deleteItem("education", edu.id)}
              className="text-red-600 hover:text-red-700"
            >
              <FiTrash2 className="w-4 h-4" />
            </button>
          </div>

          <div className="px-6">
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Institution
            </label>
            <input
              type="text"
              value={edu.institution}
              onChange={(e) => updateItem("education", edu.id, "institution", e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              placeholder="University name"
            />
          </div>

          <div className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Degree
                </label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => updateItem("education", edu.id, "degree", e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="e.g. Bachelor of Science"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Field of Study
                </label>
                <input
                  type="text"
                  value={edu.fieldOfStudy || ""}
                  onChange={(e) => updateItem("education", edu.id, "fieldOfStudy", e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="e.g. Computer Science"
                />
              </div>
            </div>
          </div>

          <div className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Start Date
                </label>
                <input
                  type="month"
                  value={edu.startDate}
                  onChange={(e) => updateItem("education", edu.id, "startDate", e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  End Date
                </label>
                <input
                  type="month"
                  value={edu.endDate}
                  onChange={(e) => updateItem("education", edu.id, "endDate", e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  disabled={edu.current}
                />
              </div>
            </div>
          </div>

          <div className="px-6 pb-6">
            <div className="rounded-lg bg-gray-100 px-2 py-2" style={{ backgroundColor: '#EFF6FF' }}>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={edu.current}
                  onChange={(e) => updateItem("education", edu.id, "current", e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full relative peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 peer-checked:bg-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                <span className="ml-3 text-sm font-semibold text-gray-700">
                  Currently studying here
                </span>
              </label>
            </div>
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
  );
}
