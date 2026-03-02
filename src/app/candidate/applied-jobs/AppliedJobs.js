'use client';

import React from 'react';
import { useAppliedJobs } from './useAppliedJobs';
import StatusFilterSidebar from './StatusFilterSidebar';
import SearchAndFilterHeader from './SearchAndFilterHeader';
import JobTable from './JobTable';
import FilterPopup from '../../components/FilterPopup';

export default function AppliedJobs() {
  const {
    searchTerm,
    setSearchTerm,
    selectedStatus,
    setSelectedStatus,
    expandedRow,
    showFilterPopup,
    setShowFilterPopup,
    filters,
    setFilters,
    filteredApplications,
    toggleRow,
    handleFilterReset,
    applications
  } = useAppliedJobs();

  return (
    <div className="min-h-screen bg-gray-50">    
      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Status Filters Sidebar */}
            <StatusFilterSidebar
              selectedStatus={selectedStatus}
              onSelectStatus={setSelectedStatus}
              applications={applications}
              onMobileFilterClick={() => setShowFilterPopup(true)}
            />

            {/* Applications Table */}
            <div className="flex-1">
              <SearchAndFilterHeader
                searchTerm={searchTerm}
                onSearchChange={(e) => setSearchTerm(e.target.value)}
                onFilterClick={() => setShowFilterPopup(true)}
              />
              
              <JobTable
                applications={filteredApplications}
                expandedRow={expandedRow}
                onToggleRow={toggleRow}
              />
            </div>
          </div>
        </div>
      </main>
      
      <FilterPopup
        isOpen={showFilterPopup}
        onClose={() => setShowFilterPopup(false)}
        onApply={(newFilters) => setFilters(newFilters)}
        onReset={handleFilterReset}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}
