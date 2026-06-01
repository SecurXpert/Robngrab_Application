"use client";

import React from "react";
import { LuSearch } from "react-icons/lu";

export default function FranchiseHeader({
  searchTerm,
  setSearchTerm,
  onAddClick,
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-inter text-[30px] text-[#0A0A0A]">
            Franchise Management
          </h1>
          <p className="text-[16px] text-[#666666] mt-1">
            Manage and monitor all franchises across locations
          </p>
        </div>
        <button
          onClick={onAddClick}
          className="bg-[#2563EB] text-white px-6 py-2 rounded-xl font-inter text-[16px] hover:bg-blue-700 transition-colors"
        >
          + Add Franchise
        </button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search franchises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-gray-600 pl-10 pr-4 py-2 border border-[#D1D5DC] rounded-lg focus:ring focus:ring-blue-500 focus:border-transparent bg-[#FFFFFF]"
          />
          <LuSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
