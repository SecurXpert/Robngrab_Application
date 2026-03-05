'use client';

import { useState } from 'react';
import Link from 'next/link';
import FilterModal from '../../../components/FilterModal';
import Metrics from '../../../components/Metrics';
import CoreModules from '../../../components/CoreModules';
import RecentActivity from '../../../components/RecentActivity';
import QuickActions from '../../../components/QuickActions';

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
    <div className="pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key Metrics */}
        <Metrics />

          {/* Core Modules Grid */}
          <CoreModules />

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <RecentActivity />

            {/* Quick Actions */}
            <QuickActions />
          </div>
        </div>
      </div>
  );
}
