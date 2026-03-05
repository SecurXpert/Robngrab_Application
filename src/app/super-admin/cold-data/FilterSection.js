import React from 'react';
import { FILTERS } from './constants';

export default function FilterSection({
  selectedFilter,
  setSelectedFilter,
  searchTerm,
  setSearchTerm,
  userType,
  setUserType,
  category,
  setCategory,
  priority,
  setPriority,
  status,
  setStatus
}) {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 p-6 mb-6">
      {/* HEADER */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-200 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 01.8 1.6L14 13v5l-4 2v-7L3.2 4.6A1 1 0 013 4z"/>
          </svg>
        </div>
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">Filters & Search</h2>
      </div>

      {/* ISSUE TYPE BUTTONS */}
      <p className="text-sm text-gray-600 mb-3">Issue Type</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-3 mb-6">
        {FILTERS.map((filter) => (
          <button 
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-2 py-2 rounded-lg text-sm shadow ${
              selectedFilter === filter
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* INPUT SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* SEARCH */}
        <div>
          <label className="text-sm text-gray-600 mb-1 block">Search</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Name, email, issue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
            <svg className="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="11" cy="11" r="8" strokeWidth="2"/>
              <path d="M21 21l-4.3-4.3" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* USER TYPE */}
        <div>
          <label className="text-sm text-gray-600 mb-1 block">User Type</label>
          <select 
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full py-2 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-900"
          >
            <option value="" className="text-gray-900">All Types</option>
            <option value="client" className="text-gray-900">Client</option>
            <option value="vendor" className="text-gray-900">Vendor</option>
            <option value="partner" className="text-gray-900">Partner</option>
          </select>
        </div>

        {/* CATEGORY */}
        <div>
          <label className="text-sm text-gray-600 mb-1 block">Category</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full py-2 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-900"
          >
            <option value="" className="text-gray-900">All categories</option>
            <option value="IT" className="text-gray-900">IT</option>
            <option value="HR" className="text-gray-900">HR</option>
            <option value="Finance" className="text-gray-900">Finance</option>
          </select>
        </div>

        {/* PRIORITY */}
        <div>
          <label className="text-sm text-gray-600 mb-1 block">Priority</label>
          <select 
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full py-2 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-900"
          >
            <option value="" className="text-gray-900">All Priorities</option>
            <option value="High" className="text-gray-900">High</option>
            <option value="Medium" className="text-gray-900">Medium</option>
            <option value="Low" className="text-gray-900">Low</option>
          </select>
        </div>

        {/* STATUS */}
        <div>
          <label className="text-sm text-gray-600 mb-1 block">Status</label>
          <select 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full py-2 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-900"
          >
            <option value="" className="text-gray-900">All Status</option>
            <option value="Open" className="text-gray-900">Open</option>
            <option value="In Progress" className="text-gray-900">In Progress</option>
            <option value="Escalated" className="text-gray-900">Escalated</option>
            <option value="Resolved" className="text-gray-900">Resolved</option>
          </select>
        </div>
      </div>
    </div>
  );
}
