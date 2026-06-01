import React from 'react';

export default function SearchAndFilterHeader({ searchTerm, onSearchChange, onFilterClick }) {
  return (
    <div className="mb-6">
      {/* First Row - Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#111827]">Applied Jobs</h1>
      </div>
      
      {/* Second Row - Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by job title or company..."
              value={searchTerm}
              onChange={onSearchChange}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-100 rounded-[10px] focus:outline-none focus:ring-1 focus:ring-gray-200 placeholder-gray-400 text-sm text-gray-900 shadow-sm"
            />
            <svg
              className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400"
              width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        <button
          onClick={onFilterClick}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-100 rounded-[10px] text-sm font-medium text-[#444750] hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-200 transition-colors shadow-sm min-w-[100px] cursor-pointer"
        >
          <img src="/Assets/Home/Filtericon.svg" alt="filter" className="w-4 h-4" />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>
    </div>
  );
}
