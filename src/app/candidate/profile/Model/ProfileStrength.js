import React from 'react';

export default function ProfileStrength() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Profile Strength</h3>
      <img src="/Assets/Home/Profilestrength.svg" alt="sparks" className="w-full h-full" />
      
      <div className="space-y-6">
        {/* Skills */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Skills</span>
            <span className="text-sm text-gray-500">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-[#00BC7D] to-[#00BC7D] h-2 rounded-full" style={{width: '80%'}}></div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Experience</span>
            <span className="text-sm text-gray-500">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-[#00BC7D] to-[#00BC7D] h-2 rounded-full" style={{width: '90%'}}></div>
          </div>
        </div>

        {/* Resume */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Resume</span>
            <span className="text-sm text-gray-500">70%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-[#00BC7D] to-[#00BC7D] h-2 rounded-full" style={{width: '70%'}}></div>
          </div>
        </div>

        {/* Preferences */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Preferences</span>
            <span className="text-sm text-gray-500">60%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-[#FFB900] to-[#FFB900] h-2 rounded-full" style={{width: '60%'}}></div>
          </div>
        </div>
        <button className="w-full px-4 py-2 bg-[#01BCA433] text-[#007A55] rounded-lg font-semibold hover:bg-green-300 transition-colors">
          Excellent Profile
        </button>
      </div>
    </div>
  );
}
