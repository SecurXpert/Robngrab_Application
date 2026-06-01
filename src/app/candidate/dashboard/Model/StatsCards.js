"use client";

import React from 'react';
import { FiTrendingUp, FiChevronDown } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa';
import { LuListTodo, LuUserCheck } from 'react-icons/lu';

const StatsCards = ({ indices = [0, 1, 2, 3] }) => {
  const stats = [
    {
      title: 'Total Applications',
      value: '20',
      change: '+3 this week',
      icon: LuListTodo,
    },
    {
      title: 'Active job matches',
      value: '07',
      change: 'Ai-Powered Matches',
      icon: LuUserCheck,
    },
    {
      title: 'Profile Views',
      value: '20',
      change: 'By Recruiters',
      icon: FaEye,
    },
    {
      title: 'Response Rate',
      value: '75%',
      change: 'Above Average',
      icon: FiTrendingUp,
    },
  ];

  const filteredStats = stats.filter((_, index) => indices.includes(index));

  return (
    <div className={filteredStats.length === 2 ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "grid grid-cols-1 sm:grid-cols-4 gap-4"}>
      {filteredStats.map((stat, index) => (
        <div key={index} className="rounded-xl border border-gray-200/80 p-4 shadow-sm" style={{ background: 'linear-gradient(180deg, rgba(1, 99, 213, 0.05) 0%, rgba(22, 43, 92, 0.05) 100%)' }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2.5 overflow-hidden mr-1">
              <div className="w-7 h-7 bg-[#0163D5] rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                <stat.icon className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap truncate">{stat.title}</span>
            </div>
            <div className="flex items-center gap-1 bg-white border border-gray-200 text-gray-600 text-[11px] px-2 py-0.5 rounded font-semibold shadow-sm cursor-pointer hover:bg-gray-50 transition-colors flex-shrink-0">
              <span>Today</span>
              <FiChevronDown className="w-3 h-3 text-gray-500" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#0163D5] leading-tight mb-1">{stat.value}</h3>
            <p className="text-base font-medium text-[rgba(0,166,62,1)]">{stat.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
