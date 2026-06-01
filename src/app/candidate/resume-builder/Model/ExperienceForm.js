import React from "react";
import { FiBriefcase, FiTrash2, FiPlus } from "react-icons/fi";

export default function ExperienceForm({ resumeData, updateItem, deleteItem, addExperience }) {
  return (
    <>
      {resumeData.experience.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>
            No experience added yet. Click "Add Experience" to get started.
          </p>
        </div>
      ) : (
        resumeData.experience.map((exp, index) => (
          <div key={exp.id} className="rounded-lg border border-gray-200 space-y-4 mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-5 rounded-t-lg flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <FiBriefcase className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-medium text-gray-900">
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

            <div className="pt-6 px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Company
                  </label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateItem("experience", exp.id, "company", e.target.value)}
                    className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Position
                  </label>
                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) => updateItem("experience", exp.id, "title", e.target.value)}
                    className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                    placeholder="Job title"
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
                    value={exp.startDate}
                    onChange={(e) => updateItem("experience", exp.id, "startDate", e.target.value)}
                    className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    End Date
                  </label>
                  <input
                    type="month"
                    value={exp.endDate}
                    onChange={(e) => updateItem("experience", exp.id, "endDate", e.target.value)}
                    className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    disabled={exp.current}
                  />
                </div>
              </div>
            </div>

            <div className="px-6 pb-2">
              <div className="rounded-lg bg-gray-100 px-2 py-2" style={{ backgroundColor: '#EFF6FF' }}>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={exp.current}
                    onChange={(e) => updateItem("experience", exp.id, "current", e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full relative peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 peer-checked:bg-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                  <span className="ml-3 text-sm font-family-inter font-weight-500 text-[#0A0A0A]">
                    Currently working here
                  </span>
                </label>
              </div>
            </div>

            <div className="px-6 pb-6" style={{ borderTop: '1.35px solid #E5E7EB', paddingTop: '16px' }}>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Description
              </label>
              <textarea
                value={exp.description}
                onChange={(e) => updateItem("experience", exp.id, "description", e.target.value)}
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
  );
}
