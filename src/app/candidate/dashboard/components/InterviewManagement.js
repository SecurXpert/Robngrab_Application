"use client";

import React from 'react';
import { FiVideo, FiCalendar, FiClock } from 'react-icons/fi';

const InterviewManagement = () => {
  const interviews = [
    {
      id: 1,
      jobTitle: 'Frontend Developer',
      company: 'Tech Corp',
      date: '2024-03-15',
      time: '10:00 AM',
      type: 'Video',
      status: 'scheduled',
    },
    {
      id: 2,
      jobTitle: 'Full Stack Developer',
      company: 'StartupXYZ',
      date: '2024-03-16',
      time: '2:00 PM',
      type: 'Video',
      status: 'rescheduled',
    },
    {
      id: 3,
      jobTitle: 'UI/UX Designer',
      company: 'Digital Agency',
      date: '2024-03-17',
      time: '11:30 AM',
      type: 'Video',
      status: 'scheduled',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled':
        return 'bg-green-100 text-green-800';
      case 'rescheduled':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Interview Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {interviews.map((interview) => (
          <div key={interview.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <FiVideo className="w-4 h-4" />
              </div>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(interview.status)}`}>
                {interview.status}
              </span>
            </div>
            
            <h3 className="text-sm font-semibold text-gray-900 mb-1">{interview.jobTitle}</h3>
            <p className="text-xs text-gray-600 mb-3">{interview.company}</p>
            
            <div className="space-y-1">
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <FiCalendar className="w-3 h-3" />
                <span>{interview.date}</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <FiClock className="w-3 h-3" />
                <span>{interview.time}</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <FiVideo className="w-3 h-3" />
                <span>{interview.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewManagement;
