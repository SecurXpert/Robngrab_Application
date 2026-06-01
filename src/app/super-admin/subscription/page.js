"use client";

import { useSubscriptionData } from '@/utils/useSubscriptionData';
import SubscriptionHeader from '@/app/super-admin/subscription/Model/SubscriptionHeader';
import StatsCards from '@/app/super-admin/subscription/Model/StatsCards';
import SubscriptionFilters from '@/app/super-admin/subscription/Model/SubscriptionFilters';
import SubscriptionTable from '@/app/super-admin/subscription/Model/SubscriptionTable';
import AddPlanModal from '@/app/super-admin/subscription/Model/AddPlanModal';
import EditPlanModal from '@/app/super-admin/subscription/Model/EditPlanModal';

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
    <div className="py-8" style={{ background: 'linear-gradient(180deg, #F8F9FF 0%, #FCFCFF 100%)' }}>
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
