'use client';

import { useState } from 'react';
import Link from 'next/link';
import FilterModal from '@/app/super-admin/dashboard/Model/FilterModal';
import Metrics from '@/app/super-admin/dashboard/Model/Metrics';
import CoreModules from '@/app/super-admin/dashboard/Model/CoreModules';
import RecentActivity from '@/app/super-admin/dashboard/Model/RecentActivity';
import QuickActions from '@/app/super-admin/dashboard/Model/QuickActions';

export default function SuperAdminDashboard() {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});

  const handleFilterApply = (filters) => {
    setAppliedFilters(filters);
    console.log('Applied filters:', filters);
    // Here you would typically filter your data based on the selected filters
  };

  const handleFilterReset = () => {
    setAppliedFilters({});
    console.log('Filters reset');
    // Here you would reset your data to show all results
  };

  return (
    <div className="pt-4 min-h-screen" style={{ background: 'linear-gradient(180deg, #F8F9FF 0%, #FCFCFF 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1">
            <Metrics />
          </div>

          {/* Core Modules Grid */}
          <div className="grid grid-cols-1">
            <CoreModules />
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-5">
            {/* Recent Activity */}
            <RecentActivity />

            {/* Quick Actions */}
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}
