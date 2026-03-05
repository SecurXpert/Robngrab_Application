import React from 'react';

export default function SearchAndFilterHeader({ searchTerm, onSearchChange, onFilterClick }) {
  return (
    <div className="mb-6">
      {/* First Row - Title */}
      <div className="mb-4">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Applied Jobs</h1>
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
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-900"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        <button
          onClick={onFilterClick}
          className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors min-w-[100px]"
        >
          <img src="/assets/home/Filtericon.svg" alt="filter" className="w-5 h-5" />
          <span className="hidden sm:inline">Filter</span>
        </button>
      </div>
    </div>
  );
}
