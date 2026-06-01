"use client";

import { useRecruitersData } from '@/utils/useRecruitersData';
import RecruitersHeader from '@/app/super-admin/recruiters/Model/RecruitersHeader';
import StatsCards from '@/app/super-admin/recruiters/Model/StatsCards';
import SearchAndFilter from '@/app/super-admin/recruiters/Model/SearchAndFilter';
import RecruitersTable from '@/app/super-admin/recruiters/Model/RecruitersTable';
import AddRecruiterModal from '@/app/super-admin/recruiters/Model/AddRecruiterModal';
import EditRecruiterModal from '@/app/super-admin/recruiters/Model/EditRecruiterModal';
import RecruiterDetailsPage from '@/app/super-admin/recruiters/Model/RecruiterDetailsPage';
import { useState } from 'react';

export default function RecruitersPage() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);

  const {
    recruiters,
    filteredRecruiters,
    form,
    stats,
    searchTerm,
    statusFilter,
    showAdd,
    showEdit,
    setSearchTerm,
    setStatusFilter,
    handleChange,
    getStatusColor,
    addRecruiter,
    openEdit,
    updateRecruiter,
    deleteRecruiter,
    openAdd,
    closeAdd,
    closeEdit,
    suspendRecruiter
  } = useRecruitersData();

  // Handle details page navigation
  const handleViewDetails = (recruiter) => {
    setSelectedRecruiter(recruiter);
    setShowDetails(true);
  };

  const handleBackToList = () => {
    setShowDetails(false);
    setSelectedRecruiter(null);
  };

  // Handle details page actions
  const handleDetailsEdit = () => {
    if (selectedRecruiter) {
      openEdit(selectedRecruiter);
      setShowDetails(false);
    }
  };

  const handleDetailsDelete = () => {
    if (selectedRecruiter && selectedRecruiter.id) {
      deleteRecruiter(selectedRecruiter.id);
      setShowDetails(false);
    }
  };

  const handleDetailsSuspend = () => {
    if (selectedRecruiter && selectedRecruiter.id) {
      suspendRecruiter(selectedRecruiter.id);
    }
  };

  return (
    <div className="py-8">
      {showDetails ? (
        /* DETAILS PAGE */
        <RecruiterDetailsPage
          recruiter={selectedRecruiter}
          onBack={handleBackToList}
          onEdit={handleDetailsEdit}
          onSuspend={handleDetailsSuspend}
          onDelete={handleDetailsDelete}
        />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <>
            {/* HEADER */}
            <RecruitersHeader onAddRecruiter={openAdd} />

            {/* STATS */}
            <StatsCards stats={stats} />

            {/* SEARCH AND FILTER */}
            <SearchAndFilter
              searchTerm={searchTerm}
              statusFilter={statusFilter}
              onSearchChange={setSearchTerm}
              onStatusFilterChange={setStatusFilter}
            />

            {/* TABLE */}
            <RecruitersTable
              filteredRecruiters={filteredRecruiters}
              getStatusColor={getStatusColor}
              onViewUser={handleViewDetails}
              onEditRecruiter={openEdit}
              onDeleteRecruiter={deleteRecruiter}
            />

            {/* ADD MODAL */}
            <AddRecruiterModal
              isOpen={showAdd}
              onClose={closeAdd}
              form={form}
              onChange={handleChange}
              onSubmit={addRecruiter}
            />

            {/* EDIT MODAL */}
            <EditRecruiterModal
              isOpen={showEdit}
              onClose={closeEdit}
              form={form}
              onChange={handleChange}
              onSubmit={updateRecruiter}
            />
          </>
        </div>
      )}
    </div>
  );
}
