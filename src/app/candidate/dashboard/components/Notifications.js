"use client";

import React from 'react';
import { FiBell, FiCheckCircle, FiBriefcase, FiTrendingUp } from 'react-icons/fi';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: 'Application Updateee',
      message: 'Your application for Frontend Developer at Tech Corp has been approved.',
      time: '2 hours ago',
      type: 'success',
      icon: FiCheckCircle,
    },
    {
      id: 2,
      title: 'New Job Match',
      message: 'Based on your profile, we found 3 new job matches for you.',
      time: '5 hours ago',
      type: 'info',
      icon: FiBriefcase,
    },
    {
      id: 3,
      title: 'Profile Viewed',
      message: 'A recruiter from Digital Agency viewed your profile.',
      time: '1 day ago',
      type: 'info',
      icon: FiTrendingUp,
    },
    {
      id: 4,
      title: 'Interview Reminder',
      message: 'You have an interview scheduled tomorrow at 10:00 AM.',
      time: '1 day ago',
      type: 'warning',
      icon: FiBell,
    },
  ];

  const getNotificationColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 text-green-600';
      case 'warning':
        return 'bg-yellow-50 text-yellow-600';
      case 'error':
        return 'bg-red-50 text-red-600';
      default:
        return 'bg-blue-50 text-blue-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`p-2 rounded-lg ${getNotificationColor(notification.type)}`}>
              <notification.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{notification.title}</p>
              <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
              <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
