"use client";

import React from 'react';
import { FiUser, FiFileText, FiBriefcase, FiAward, FiCheck } from 'react-icons/fi';

const ProfileCompleteness = () => {
  const profileSections = [
    {
      title: 'Personal Information',
      completed: true,
      icon: FiUser,
    },
    {
      title: 'Resume/CV',
      completed: true,
      icon: FiFileText,
    },
    {
      title: 'Work Experience',
      completed: true,
      icon: FiBriefcase,
    },
    {
      title: 'Skills & Certifications',
      completed: false,
      icon: FiAward,
    },
  ];

  const completedSections = profileSections.filter(section => section.completed).length;
  const totalSections = profileSections.length;
  const completenessPercentage = Math.round((completedSections / totalSections) * 100);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Completeness</h2>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Profile Strength</span>
          <span className="text-sm font-medium text-gray-900">{completenessPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${completenessPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {profileSections.map((section, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${
              section.completed ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-400'
            }`}>
              {section.completed ? (
                <FiCheck className="w-4 h-4" />
              ) : (
                <section.icon className="w-4 h-4" />
              )}
            </div>
            <span className={`text-sm font-medium ${
              section.completed ? 'text-gray-900' : 'text-gray-500'
            }`}>
              {section.title}
            </span>
          </div>
        ))}
      </div>

      {completenessPercentage < 100 && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            Complete your profile to increase visibility to recruiters by up to 80%
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileCompleteness;
