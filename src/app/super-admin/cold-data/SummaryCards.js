import React from 'react';
import { SUMMARY_CARDS } from './constants';

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
      {SUMMARY_CARDS.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          {/* Icon - First Row with colored background */}
          <div className={`${card.bgColor} rounded-lg p-2 flex justify-start mb-4 w-fit`}>
            <svg 
              className={`w-6 h-6 ${card.iconColor}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={card.icon}
              />
            </svg>
          </div>
          
          {/* Title - Second Row */}
          <p className="text-sm font-medium text-gray-600 text-start">{card.title}</p>
          
          {/* Value - Third Row */}
          <p className="text-2xl font-bold text-gray-900 mt-2 text-start">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
