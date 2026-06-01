import React from 'react';
import { STATUS_FILTERS } from '@/utils/appliedJobsConstants';

export default function StatusFilterSidebar({ selectedStatus, onSelectStatus, applications, onMobileFilterClick }) {
  // Get unique statuses from applications and count them
  const getStatusCounts = () => {
    const statusCounts = {};
    applications.forEach(app => {
      const status = app.status.toLowerCase();
      statusCounts[status] = (statusCounts[status] || 0) + 1;
    });
    return statusCounts;
  };

  // Create dynamic filters based on actual application statuses
  const createDynamicFilters = () => {
    const statusCounts = getStatusCounts();
    const filters = [];
    
    // Always show "All" filter
    filters.push({ key: 'all', label: 'All', color: 'bg-[#4A72FF]', count: applications.length });
    
    // Add all filters from STATUS_FILTERS
    STATUS_FILTERS.filter(f => f.key !== 'all').forEach(config => {
      filters.push({
        ...config,
        count: statusCounts[config.key] || 0
      });
    });
    
    return filters;
  };

  const dynamicFilters = createDynamicFilters();

  return (
    <div className="w-full lg:w-60 flex-shrink-0 bg-white min-h-[65vh] pt-8 px-4 lg:px-6 border-r border-gray-100 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
      <div className="bg-transparent p-0">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">STATUS FILTERS</h3>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={onMobileFilterClick}
          >
            <img src="/Assets/Home/Filtericon.svg" alt="filter" className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-1">
          {dynamicFilters.map(filter => (
            <button
              key={filter.key}
              onClick={() => onSelectStatus(filter.key)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-medium transition-all border border-transparent hover:border-gray-200 hover:border-t-[1.26px] hover:border-t-[#BEDBFF] hover:shadow-sm cursor-pointer ${
                selectedStatus === filter.key 
                  ? 'bg-[#F0F5FF] text-[#0163D5]' 
                  : 'text-[#444750] hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 ${filter.color} rounded-full`}></div>
                <span>{filter.label}</span>
              </div>
              <span className={`text-[13px] ${selectedStatus === filter.key ? 'text-[#0163D5]' : 'text-[#364153]'}`}>{filter.count}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
