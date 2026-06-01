"use client";

import React from 'react';
import { FiClock, FiCheckCircle, FiEye } from 'react-icons/fi';

const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      title: 'Applied to Senior Software Engineer',
      company: 'TechCorp Inc.',
      time: '2 hours ago',
      status: 'pending',
      badgeColor: 'bg-[#FEF3C7] text-[#D97706]',
      icon: FiClock,
      iconColor: 'text-[#D97706]',
    },
    {
      id: 2,
      title: 'Shortlisted for Frontend Developer',
      company: 'StartupXYZ',
      time: '1 day ago',
      status: 'positive',
      badgeColor: 'bg-[#D1FAE5] text-[#059669]',
      icon: FiCheckCircle,
      iconColor: 'text-[#059669]',
    },
    {
      id: 3,
      title: 'Profile viewed by recruiter',
      company: 'Enterprise Solutions',
      time: '2 days ago',
      status: 'neutral',
      badgeColor: 'bg-[#DBEAFE] text-[#2563EB]',
      icon: FiEye,
      iconColor: 'text-[#2563EB]',
    },
    {
      id: 4,
      title: 'Application status updated',
      company: 'InnovateLab',
      time: '3 days ago',
      status: 'negative',
      badgeColor: 'bg-[#FEE2E2] text-[#DC2626]',
      icon: FiClock,
      iconColor: 'text-[#DC2626]',
    },
  ];

  return (
    <div className="rounded-xl border border-gray-200/80 p-5 shadow-sm flex flex-col justify-between h-[360px]" style={{ background: 'linear-gradient(180deg, rgba(1, 99, 213, 0.05) 0%, rgba(22, 43, 92, 0.05) 100%)' }}>
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-0.5">Recent Activity</h2>
        <p className="text-[13px] text-gray-500 mb-2 font-medium">Your latest job search activities</p>
      </div>

      <div className="flex-1 flex flex-col justify-between py-1">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="mt-0.5 flex-shrink-0">
                <activity.icon className={`w-3.5 h-3.5 ${activity.iconColor}`} />
              </div>
              <div className="leading-tight ">
                <p className="text-[13px] font-semibold text-[rgba(10,10,10,1)]">{activity.title}</p>
                <p className="text-[11px] font-medium text-gray-500 mt-1.5">{activity.company}</p>
                <p className="text-[10px] text-gray-400 mt-1.5 mb-2.5">{activity.time}</p>
              </div>
            </div>
            <span className={`text-[9px] px-2.5 py-1 rounded-md font-semibold flex-shrink-0 ${activity.badgeColor}`}>
              {activity.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
