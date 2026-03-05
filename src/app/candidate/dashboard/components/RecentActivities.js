"use client";

import React from 'react';
import { FiClock, FiCheckCircle, FiXCircle, FiCalendar } from 'react-icons/fi';

const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      type: 'application',
      title: 'Applied to Senior Frontend Developer',
      company: 'Tech Corp',
      time: '2 hours ago',
      status: 'pending',
      icon: FiClock,
      color: 'text-blue-500',
    },
    {
      id: 2,
      type: 'interview',
      title: 'Interview scheduled',
      company: 'StartupXYZ',
      time: '1 day ago',
      status: 'confirmed',
      icon: FiCalendar,
      color: 'text-green-500',
    },
    {
      id: 3,
      type: 'response',
      title: 'Application rejected',
      company: 'Big Tech Inc',
      time: '3 days ago',
      status: 'rejected',
      icon: FiXCircle,
      color: 'text-red-500',
    },
    {
      id: 4,
      type: 'application',
      title: 'Applied to Full Stack Developer',
      company: 'Digital Agency',
      time: '5 days ago',
      status: 'viewed',
      icon: FiCheckCircle,
      color: 'text-purple-500',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'viewed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`p-2 rounded-lg bg-gray-50 ${activity.color}`}>
              <activity.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-600">{activity.company}</p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs text-gray-500">{activity.time}</span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(activity.status)}`}>
                  {activity.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
