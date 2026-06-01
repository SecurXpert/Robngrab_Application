import React from 'react';

export default function JobPreferencesForm({ formData, handleInputChange, handleWorkModeToggle, handleEmploymentTypeToggle }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Job Preferences</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Desired Role</label>
            <input
              type="text"
              value={formData.desiredRole}
              onChange={(e) => handleInputChange('desiredRole', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
            <input
              type="text"
              value={formData.preferredLocation}
              onChange={(e) => handleInputChange('preferredLocation', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">Work Mode</label>
            <div className="space-y-3">
              {['remote', 'hybrid', 'onsite'].map((mode) => (
                <label key={mode} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.workModes.includes(mode)}
                    onChange={() => handleWorkModeToggle(mode)}
                    className="text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700 capitalize">{mode}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">Employment Type</label>
            <div className="space-y-3">
              {['full-time', 'part-time', 'contract'].map((type) => (
                <label key={type} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.employmentTypes.includes(type)}
                    onChange={() => handleEmploymentTypeToggle(type)}
                    className="text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700 capitalize">{type.replace('-', ' ')}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Salary</label>
              <input
                type="text"
                value={formData.salaryMin}
                onChange={(e) => handleInputChange('salaryMin', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Salary</label>
              <input
                type="text"
                value={formData.salaryMax}
                onChange={(e) => handleInputChange('salaryMax', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.relocate}
                onChange={(e) => handleInputChange('relocate', e.target.checked)}
                className="text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Willing to relocate</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
