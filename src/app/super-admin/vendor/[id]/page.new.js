"use client";

import { useParams } from 'next/navigation';
import { useVendorData } from './useVendorData';
import LoadingState from './components/LoadingState';
import VendorHeader from './components/VendorHeader';
import VendorInfo from './components/VendorInfo';
import MetricsCards from './components/MetricsCards';
import HiringMetricsDashboard from './components/HiringMetricsDashboard';
import ActivityStatus from './components/ActivityStatus';
import RecruiterTable from './components/RecruiterTable';
import VendorActions from './components/VendorActions';
import HistoryModal from './components/modals/HistoryModal';
import EditVendorModal from './components/modals/EditVendorModal';
import ShortlistedModal from './components/modals/ShortlistedModal';
import InterviewProcessModal from './components/modals/InterviewProcessModal';
import GenericMetricsModal from './components/modals/GenericMetricsModal';
import RecruiterDetailsModal from './components/modals/RecruiterDetailsModal';
import { CARD_CONFIG } from './constants';

export default function VendorDetailPage() {
  const params = useParams();
  const vendorId = params.id;

  const {
    vendor,
    vendors,
    recruiters,
    activities,
    metrics,
    modalConfig,
    isHistoryModalOpen,
    setIsHistoryModalOpen,
    isEditModalOpen,
    setIsEditModalOpen,
    isShortlistedModalOpen,
    setIsShortlistedModalOpen,
    isInterviewProcessModalOpen,
    setIsInterviewProcessModalOpen,
    isMetricsModalOpen,
    setIsMetricsModalOpen,
    isRecruiterModalOpen,
    setIsRecruiterModalOpen,
    selectedMetric,
    selectedRecruiter,
    editFormErrors,
    realTimeErrors,
    handleRealTimeValidation,
    handleUpdateVendor,
    generateModalData,
    openMetricsModal,
    openRecruiterModal
  } = useVendorData(vendorId);

  // Show loading state if vendor data is not available yet
  if (!vendor || vendors.length === 0) {
    return <LoadingState />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <VendorHeader vendor={vendor} />

        {/* Vendor Information */}
        <VendorInfo vendor={vendor} />

        {/* Metrics Cards */}
        <MetricsCards vendor={vendor} metrics={metrics} />

        {/* Hiring Metrics Dashboard */}
        <HiringMetricsDashboard 
          cardConfig={CARD_CONFIG}
          onOpenShortlistedModal={() => setIsShortlistedModalOpen(true)}
          onOpenInterviewProcessModal={() => setIsInterviewProcessModalOpen(true)}
          onOpenMetricsModal={openMetricsModal}
        />

        {/* Franchise Activity Status and Activity Log */}
        <ActivityStatus vendor={vendor} activities={activities} />

        {/* Recruiter Activity Status */}
        <RecruiterTable 
          recruiters={recruiters}
          onOpenRecruiterModal={openRecruiterModal}
        />

        {/* Vendor-Level Actions */}
        <VendorActions 
          onOpenEditModal={() => setIsEditModalOpen(true)}
          onOpenHistoryModal={() => setIsHistoryModalOpen(true)}
        />

        {/* Activity History Modal */}
        <HistoryModal
          isOpen={isHistoryModalOpen}
          onClose={() => setIsHistoryModalOpen(false)}
          activities={activities}
        />

        {/* Edit Vendor Modal */}
        <EditVendorModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          vendor={vendor}
          vendorId={vendorId}
          vendors={vendors}
          setVendors={setVendors}
          editFormErrors={editFormErrors}
          realTimeErrors={realTimeErrors}
          handleRealTimeValidation={handleRealTimeValidation}
          handleUpdateVendor={handleUpdateVendor}
        />

        {/* Shortlisted Candidates Modal */}
        <ShortlistedModal
          isOpen={isShortlistedModalOpen}
          onClose={() => setIsShortlistedModalOpen(false)}
        />

        {/* Interview Process Modal */}
        <InterviewProcessModal
          isOpen={isInterviewProcessModalOpen}
          onClose={() => setIsInterviewProcessModalOpen(false)}
        />

        {/* Generic Metrics Modal */}
        <GenericMetricsModal
          isOpen={isMetricsModalOpen}
          onClose={() => setIsMetricsModalOpen(false)}
          selectedMetric={selectedMetric}
          modalConfig={modalConfig}
          metrics={metrics}
          generateModalData={generateModalData}
        />

        {/* Recruiter Details Modal */}
        <RecruiterDetailsModal
          isOpen={isRecruiterModalOpen}
          onClose={() => setIsRecruiterModalOpen(false)}
          selectedRecruiter={selectedRecruiter}
        />
      </div>
    </div>
  );
}
