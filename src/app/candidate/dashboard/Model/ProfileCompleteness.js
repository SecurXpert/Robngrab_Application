"use client";

import React from 'react';
import { FiCheckCircle, FiClock } from 'react-icons/fi';

const ProfileCompleteness = () => {
  const sections = [
    { title: 'Basic Information', status: 'completed' },
    { title: 'Work Experience', status: 'completed' },
    { title: 'Skills & Certifications', status: 'pending' },
    { title: 'Portfolio Links', status: 'incomplete' },
    { title: 'Achievements', status: 'incomplete' },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <FiCheckCircle className="w-4 h-4 text-[#10B981]" />;
      case 'pending':
        return <FiClock className="w-4 h-4 text-[#F59E0B]" />;
      default:
        return <FiClock className="w-4 h-4 text-gray-300" />;
    }
  };

  return (
    <div className="rounded-xl border border-gray-200/80 p-5 shadow-sm flex flex-col justify-between h-[360px]" style={{ background: 'linear-gradient(180deg, rgba(1, 99, 213, 0.05) 0%, rgba(22, 43, 92, 0.05) 100%)' }}>
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-0.5">Profile Completeness</h2>
        <p className="text-[13px] text-gray-500 mb-3 font-medium">Complete your profile to get better job matches</p>

        <div className="mb-2">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-medium text-[rgba(10,10,10,1)]">Overall Progress</span>
            <span className="text-sm font-medium text-[rgba(10,10,10,1)]">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden shadow-inner">
            <div
              className="bg-[#0163D5] h-2.5 rounded-full transition-all duration-500"
              style={{ width: '85%' }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between py-1">
        {sections.map((section, index) => (
          <div key={index} className="flex items-center justify-between py-1.5 border-b border-gray-200/50 last:border-0">
            <span className="text-sm font-medium text-[rgba(10,10,10,1)]">{section.title}</span>
            {getStatusIcon(section.status)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCompleteness;
