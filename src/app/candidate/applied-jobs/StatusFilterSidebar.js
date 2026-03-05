import React from 'react';
import { STATUS_FILTERS } from './constants';

export default function StatusFilterSidebar({ selectedStatus, onSelectStatus, applications, onMobileFilterClick }) {
  const getStatusCount = (statusKey) => {
    if (statusKey === 'all') return applications.length;
    return applications.filter(app => 
      statusKey === statusKey.toLowerCase() || 
      app.status.toLowerCase().includes(statusKey.toLowerCase())
    ).length;
  };

  return (
    <div className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">STATUS FILTERS</h3>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={onMobileFilterClick}
          >
            <img src="/assets/home/Filtericon.svg" alt="filter" className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-1 max-h-96 overflow-y-auto">
          {STATUS_FILTERS.map(filter => (
            <button
              key={filter.key}
              onClick={() => onSelectStatus(filter.key)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg font-medium transition-colors ${
                selectedStatus === filter.key 
                  ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 ${filter.color} rounded-full`}></div>
                <span>{filter.label}</span>
              </div>
              <span className="text-sm text-gray-500">{getStatusCount(filter.key)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
