"use client";

import { useSubscriptionData } from './useSubscriptionData';
import SubscriptionHeader from './components/SubscriptionHeader';
import StatsCards from './components/StatsCards';
import SubscriptionFilters from './components/SubscriptionFilters';
import SubscriptionTable from './components/SubscriptionTable';
import AddPlanModal from './components/modals/AddPlanModal';
import EditPlanModal from './components/modals/EditPlanModal';

export default function SubscriptionPlans() {
  const {
    filteredPlans,
    form,
    errors,
    stats,
    searchTerm,
    filterStatus,
    filterType,
    showAdd,
    showEdit,
    setSearchTerm,
    setFilterStatus,
    setFilterType,
    handleChange,
    openAdd,
    openEdit,
    savePlan,
    updatePlan,
    deletePlan,
    closeAdd,
    closeEdit
  } = useSubscriptionData();

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SubscriptionHeader onAddPlan={openAdd} />

        {/* Stats */}
        <StatsCards stats={stats} />

        {/* Filters */}
        <SubscriptionFilters
          searchTerm={searchTerm}
          filterStatus={filterStatus}
          filterType={filterType}
          onSearchChange={setSearchTerm}
          onStatusFilterChange={setFilterStatus}
          onTypeFilterChange={setFilterType}
        />

        {/* Table */}
        <SubscriptionTable
          filteredPlans={filteredPlans}
          onEditPlan={openEdit}
          onDeletePlan={deletePlan}
        />

        {/* Add Modal */}
        <AddPlanModal
          isOpen={showAdd}
          onClose={closeAdd}
          form={form}
          errors={errors}
          onChange={handleChange}
          onSubmit={savePlan}
        />

        {/* Edit Modal */}
        <EditPlanModal
          isOpen={showEdit}
          onClose={closeEdit}
          form={form}
          errors={errors}
          onChange={handleChange}
          onSubmit={updatePlan}
        />
      </div>
    </div>
  );
}
