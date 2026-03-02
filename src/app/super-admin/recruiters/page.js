"use client";

import { useRecruitersData } from './useRecruitersData';
import RecruitersHeader from './components/RecruitersHeader';
import StatsCards from './components/StatsCards';
import SearchAndFilter from './components/SearchAndFilter';
import RecruitersTable from './components/RecruitersTable';
import AddRecruiterModal from './components/modals/AddRecruiterModal';
import EditRecruiterModal from './components/modals/EditRecruiterModal';
import RecruiterDetailView from './components/modals/RecruiterDetailView';

export default function RecruitersPage() {
  const {
    recruiters,
    filteredRecruiters,
    form,
    viewUser,
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
    openView,
    closeView,
    suspendRecruiter
  } = useRecruitersData();

  // Handle view user actions
  const handleViewEdit = () => {
    openEdit(viewUser);
    closeView();
  };

  const handleViewDelete = () => {
    deleteRecruiter(viewUser.id);
    closeView();
  };

  const handleViewSuspend = () => {
    suspendRecruiter(viewUser.id);
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          onViewUser={openView}
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

        {/* VIEW MODAL */}
        <RecruiterDetailView
          recruiter={viewUser}
          onClose={closeView}
          getStatusColor={getStatusColor}
          onEdit={handleViewEdit}
          onDelete={handleViewDelete}
          onSuspend={handleViewSuspend}
        />
      </div>
    </div>
  );
}
