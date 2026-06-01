import React from 'react';
import { LuFilter, LuSearch, LuChevronDown } from "react-icons/lu";
import { FILTERS } from '@/utils/coldDataConstants';

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
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
          <LuFilter className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A0A0A]" />
        </div>
        <h2 className="text-lg font-family-inter font-[500] text-[#0A0A0A]">Filters & Search</h2>
      </div>

      {/* ISSUE TYPE BUTTONS */}
      <p className="text-sm text-gray-600 mb-3">Issue Type</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-3 mb-6">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-2 py-2 rounded-lg text-sm shadow ${selectedFilter === filter
                ? 'bg-[#2563EB] text-[#FFFFFF]'
                : 'bg-[#F3F4F6] text-[#364153]'
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
          <label className="text-sm text-[#4A5565] mb-1 block">Search</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Name, email, issue..."
              value={searchTerm}
              className="w-full pl-8 pr-1 py-2 px-3 rounded-xl border border-[#D1D5DC] focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#0A0A0A80] text-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <LuSearch className="w-3.5 h-3.5 absolute left-3 top-3 text-[#0A0A0A80]" />
          </div>
        </div>

        {/* USER TYPE */}
        <div>
          <label className="text-sm text-[#4A5565] mb-1 block">User Type</label>
          <div className="relative">
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full py-2 px-3 pr-8 rounded-xl border border-[#D1D5DC] focus:ring-2 focus:ring-blue-500 text-[#1A1A1A] text-sm appearance-none"
            >
              <option value="" className="text-[#4A5565] text-xs">All Types</option>
              <option value="client" className="text-[#4A5565] text-xs">Client</option>
              <option value="vendor" className="text-[#4A5565] text-xs">Vendor</option>
              <option value="partner" className="text-[#4A5565] text-xs">Partner</option>
            </select>
            <LuChevronDown className="w-4 h-4 absolute right-2 top-3 text-[#000000] pointer-events-none" />
          </div>
        </div>

        {/* CATEGORY */}
        <div>
          <label className="text-sm text-[#4A5565] mb-1 block">Category</label>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full py-2 px-3 pr-8 rounded-xl border border-[#D1D5DC] focus:ring-2 focus:ring-blue-500 text-[#1A1A1A] text-sm appearance-none"
            >
              <option value="" className="text-[#4A5565] text-sm">All categories</option>
              <option value="IT" className="text-[#4A5565] text-sm">IT</option>
              <option value="HR" className="text-[#4A5565] text-sm">HR</option>
              <option value="Finance" className="text-[#4A5565] text-sm">Finance</option>
            </select>
            <LuChevronDown className="w-4 h-4 absolute right-2 top-3 text-[#000000] pointer-events-none" />
          </div>
        </div>

        {/* PRIORITY */}
        <div>
          <label className="text-sm text-[#4A5565] mb-1 block">Priority</label>
          <div className="relative">
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full py-2 px-3 pr-8 rounded-xl border border-[#D1D5DC] focus:ring-2 focus:ring-blue-500 text-[#1A1A1A] text-sm appearance-none"
            >
              <option value="" className="text-[#4A5565] text-sm">All Priorities</option>
              <option value="High" className="text-[#4A5565] text-sm">High</option>
              <option value="Medium" className="text-[#4A5565] text-sm">Medium</option>
              <option value="Low" className="text-[#4A5565] text-sm">Low</option>
            </select>
            <LuChevronDown className="w-4 h-4 absolute right-2 top-3 text-[#000000] pointer-events-none" />
          </div>
        </div>

        {/* STATUS */}
        <div>
          <label className="text-sm text-[#4A5565] mb-1 block">Status</label>
          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full py-2 px-3 pr-8 rounded-xl border border-[#D1D5DC] focus:ring-2 focus:ring-blue-500 text-[#1A1A1A] text-sm appearance-none"
            >
              <option value="" className="text-[#4A5565]">All Status</option>
              <option value="Open" className="text-[#4A5565] ">Open</option>
              <option value="In Progress" className="text-[#4A5565] ">In Progress</option>
              <option value="Escalated" className="text-[#4A5565] ">Escalated</option>
              <option value="Resolved" className="text-[#4A5565]">Resolved</option>
            </select>
            <LuChevronDown className="w-4 h-4 absolute right-2 top-3 text-[#000000] pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
