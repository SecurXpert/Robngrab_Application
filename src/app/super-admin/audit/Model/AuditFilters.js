'use client';

import React from 'react';
import { FiSearch, FiChevronDown, FiDownload } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";

const AuditFilters = ({
  searchTerm,
  setSearchTerm,
  filterType,
  handleFilterSelect,
  showDropdown,
  setShowDropdown,
  filterOptions,
  handleExport
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by action, user, or IP address..."
            className="w-full pl-10 pr-4 py-3 border border-[#D1D5DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-3 relative">
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-black rounded-lg hover:bg-gray-50 font-inter transition-all duration-200 shadow-sm"
            >
              <CiFilter className="w-5 h-5 text-gray-400" />
              {filterType}
              <FiChevronDown className={`w-3 h-3 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleFilterSelect(option)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 text-[#0A0A0A] transition-colors duration-150 border-b border-gray-200 last:border-b-0"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#D1D5DC] text-[#0A0A0A] rounded-lg hover:bg-gray-50 font-inter transition-all duration-200 shadow-sm"
          >
            <FiDownload className="w-5 h-5" />
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuditFilters;
