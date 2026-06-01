"use client";

import React from "react";
import { useFranchiseManagement } from '@/utils/useFranchiseManagement';
import FranchiseHeader from '@/app/super-admin/franchise-management/Model/FranchiseHeader';
import FranchiseFilters from '@/app/super-admin/franchise-management/Model/FranchiseFilters';
import FranchiseTable from '@/app/super-admin/franchise-management/Model/FranchiseTable';
import AddFranchiseModal from '@/app/super-admin/franchise-management/Model/AddFranchiseModal';
import SuccessToast from '@/app/super-admin/franchise-management/Model/SuccessToast';
import HiringMetrics from '@/app/super-admin/franchise-management/Model/HiringMetrics';

export default function FranchiseManagement() {
  const {
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    isModalOpen,
    setIsModalOpen,
    formData,
    formErrors,
    realTimeErrors,
    franchises,
    uniqueCategories,
    uniqueStatuses,
    uniquePlans,
    uniqueCountries,
    uniqueStates,
    filteredFranchises,
    handleInputChange,
    handleSave,
    showSuccess,
    setShowSuccess,
    selectedMetricsModal,
    openMetricsModal,
  } = useFranchiseManagement();

  return (
    <div className="py-8 bg-[#F8F9FF]">
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-8">
        <FranchiseHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onAddClick={() => setIsModalOpen(true)}
        />
        
        {/* Uncomment this line if you want to include the Hiring Metrics Dashboard */}
        {/* <HiringMetrics onCardClick={openMetricsModal} /> */}

        <FranchiseFilters
          filters={filters}
          setFilters={setFilters}
          uniqueCategories={uniqueCategories}
          uniqueStatuses={uniqueStatuses}
          uniquePlans={uniquePlans}
          uniqueCountries={uniqueCountries}
          uniqueStates={uniqueStates}
          totalFiltered={filteredFranchises.length}
          totalCount={franchises.length}
        />
        
        <FranchiseTable 
          filteredFranchises={filteredFranchises} 
        />
      </div>

      <AddFranchiseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        formErrors={formErrors}
        realTimeErrors={realTimeErrors}
        handleInputChange={handleInputChange}
        handleSave={handleSave}
      />

      <SuccessToast
        show={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
}
