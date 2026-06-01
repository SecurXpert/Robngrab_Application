"use client";

import React from "react";
import { LuChevronDown, LuFilter } from "react-icons/lu";

export default function FranchiseFilters({
  filters,
  setFilters,
  uniqueCategories,
  uniqueStatuses,
  uniquePlans,
  uniqueCountries,
  uniqueStates,
  totalFiltered,
  totalCount,
}) {
  return (
    <div className="p-6 mb-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center mb-6">
        <LuFilter className="h-5 w-5 text-[#4A5565] mr-2" />
        <h2 className="text-[18px] font-inter text-[#0A0A0A]">Filters</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        {/* Category */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Category
          </label>
          <div className="relative">
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
              className="w-full px-4 py-2 text-[#1A1A1A] text-sm border border-[#D1D5DC] rounded-lg focus:ring focus:ring-blue-500 focus:border-transparent appearance-none pr-10"
            >
              <option value="">All categories</option>
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <LuChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#000000] pointer-events-none" />
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Status
          </label>
          <div className="relative">
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
              className="w-full px-4 py-2 text-[#1A1A1A] text-sm border border-[#D1D5DC] rounded-lg focus:ring focus:ring-blue-500 focus:border-transparent appearance-none pr-10"
            >
              <option value="">All status</option>
              {uniqueStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <LuChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#000000] pointer-events-none" />
          </div>
        </div>

        {/* Subscription Plan */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Subscription Plan
          </label>
          <div className="relative">
            <select
              value={filters.subscriptionPlan}
              onChange={(e) =>
                setFilters({ ...filters, subscriptionPlan: e.target.value })
              }
              className="w-full px-4 py-2 text-[#1A1A1A] text-sm border border-[#D1D5DC] rounded-lg focus:ring focus:ring-blue-500 focus:border-transparent appearance-none pr-10"
            >
              <option value="">All Subscriptions</option>
              {uniquePlans.map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
            <LuChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#000000] pointer-events-none" />
          </div>
        </div>

        {/* Country */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Country
          </label>
          <div className="relative">
            <select
              value={filters.country}
              onChange={(e) =>
                setFilters({ ...filters, country: e.target.value })
              }
              className="w-full px-4 py-2 text-[#1A1A1A] text-sm border border-[#D1D5DC] rounded-lg focus:ring focus:ring-blue-500 focus:border-transparent appearance-none pr-10"
            >
              <option value="">All Countries</option>
              {uniqueCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <LuChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#000000] pointer-events-none" />
          </div>
        </div>

        {/* State/Region */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            State/Region
          </label>
          <div className="relative">
            <select
              value={filters.stateRegion}
              onChange={(e) =>
                setFilters({ ...filters, stateRegion: e.target.value })
              }
              className="w-full px-4 py-2 text-[#1A1A1A] text-sm border border-[#D1D5DC] rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none pr-10"
            >
              <option value="">All States/Regions</option>
              {uniqueStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <LuChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#000000] pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        Showing {totalFiltered} of {totalCount} franchises
      </div>
    </div>
  );
}
