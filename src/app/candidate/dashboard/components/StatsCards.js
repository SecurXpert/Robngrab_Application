"use client";

import React from 'react';
import { FiBriefcase, FiTrendingUp, FiEye, FiMessageCircle } from 'react-icons/fi';

const StatsCards = () => {
  const stats = [
    {
      title: 'Total Applications',
      value: '24',
      change: '+3 this week',
      changeType: 'positive',
      icon: FiBriefcase,
      color: 'bg-blue-500',
    },
    {
      title: 'Active job matches',
      value: '12',
      change: '+2 new matches',
      changeType: 'positive',
      icon: FiTrendingUp,
      color: 'bg-green-500',
    },
    {
      title: 'Profile Views',
      value: '89',
      change: '+15% this month',
      changeType: 'positive',
      icon: FiEye,
      color: 'bg-purple-500',
    },
    {
      title: 'Response Rate',
      value: '68%',
      change: '+5% improvement',
      changeType: 'positive',
      icon: FiMessageCircle,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 ${stat.color} rounded-lg`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <span className={`text-sm font-medium ${
              stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
          <p className="text-sm text-gray-600">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
