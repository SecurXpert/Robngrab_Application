'use client';

import React, { useState } from 'react';
import { useAppliedJobs } from '@/utils/useAppliedJobs';
import StatusFilterSidebar from '@/app/candidate/applied-jobs/Model/StatusFilterSidebar';
import SearchAndFilterHeader from '@/app/candidate/applied-jobs/Model/SearchAndFilterHeader';
import JobTable from '@/app/candidate/applied-jobs/Model/JobTable';
import FilterPopup from '@/app/candidate/applied-jobs/Model/FilterPopup';
import ReschedulePopup from '@/app/candidate/interview-management/Model/ReschedulePopup';
import OfferDetailsPopup from '@/app/candidate/applied-jobs/Model/OfferDetailsPopup';
import InterviewDetailsPopup from '@/app/candidate/interview-management/Model/InterviewDetailsPopup';

export default function AppliedJobs() {
  const {
    searchTerm,
    setSearchTerm,
    selectedStatus,
    setSelectedStatus,
    expandedRow,
    showFilterPopup,
    setShowFilterPopup,
    showReschedulePopup,
    setShowReschedulePopup,
    filters,
    setFilters,
    filteredApplications,
    toggleRow,
    handleFilterReset,
    applications
  } = useAppliedJobs();

  const [showOfferPopup, setShowOfferPopup] = useState(false);
  const [showInterviewPopup, setShowInterviewPopup] = useState(false);

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
                onRescheduleClick={() => setShowReschedulePopup(true)}
                onViewOfferClick={() => setShowOfferPopup(true)}
                onViewInterviewClick={() => setShowInterviewPopup(true)}
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

      <ReschedulePopup
        isOpen={showReschedulePopup}
        onClose={() => setShowReschedulePopup(false)}
      />

      <OfferDetailsPopup
        isOpen={showOfferPopup}
        onClose={() => setShowOfferPopup(false)}
      />

      <InterviewDetailsPopup
        isOpen={showInterviewPopup}
        onClose={() => setShowInterviewPopup(false)}
        onRescheduleClick={() => setShowReschedulePopup(true)}
      />
    </div>
  );
}
