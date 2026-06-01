import React from 'react';

export default function ProjectsForm() {
  return (
    <div className="space-y-6">
      {/* Projects & Portfolio Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6" style={{width: '100%', maxWidth: '1200px'}}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Projects & Portfolio</h3>
          <button className="px-4 py-2 text-white bg-[#0164D7] rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Project
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-start ">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
              <input
                type="text"
                placeholder="Enter project title"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
