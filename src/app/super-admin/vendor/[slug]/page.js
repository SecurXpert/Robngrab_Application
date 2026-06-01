"use client";

import { useParams } from "next/navigation";
import {
  displayFieldError,
  getFieldClassName,
} from '@/utils/validation';

import { useVendorData } from '@/utils/useVendorData';

// Import forms from local forms directory
import VendorHeader from '@/app/super-admin/vendor/[slug]/Model/VendorHeader';
import VendorMetrics from '@/app/super-admin/vendor/[slug]/Model/VendorMetrics';
import VendorActivity from '@/app/super-admin/vendor/[slug]/Model/VendorActivity';
import VendorRecruiters from '@/app/super-admin/vendor/[slug]/Model/VendorRecruiters';
import VendorActions from '@/app/super-admin/vendor/[slug]/Model/VendorActions';
import ActivityHistoryModal from '@/app/super-admin/vendor/[slug]/Model/ActivityHistoryModal';
import EditVendorModal from '@/app/super-admin/vendor/[slug]/Model/EditVendorModal';
import RecruiterDetailsModal from '@/app/super-admin/vendor/[slug]/Model/RecruiterDetailsModal';
import {
  ShortlistedModal,
  InterviewProcessModal,
  GenericMetricsModal,
} from '@/app/super-admin/vendor/[slug]/Model/MetricsModals';

export default function VendorDetailPage() {
  const params = useParams();
  const vendorSlug = params.slug;

  const {
    vendor,
    vendors,
    setVendors,
    recruiters,
    activities,
    modalActivities,
    metrics,
    modalConfig,
    cardConfig,
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
    openRecruiterModal,
  } = useVendorData(vendorSlug);

  // Show loading state if vendor data is not available yet
  if (!vendor || vendors.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 border-b-2 border-blue-600 rounded-full animate-spin"></div>
          <p className="text-gray-600">Loading vendor details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 xl:px-12">
        <VendorHeader vendor={vendor} />
        <VendorMetrics
          vendor={vendor}
          metrics={metrics}
          cardConfig={cardConfig}
          setIsShortlistedModalOpen={setIsShortlistedModalOpen}
          setIsInterviewProcessModalOpen={setIsInterviewProcessModalOpen}
          openMetricsModal={openMetricsModal}
        />
        <VendorActivity activities={activities} />
        <VendorRecruiters
          recruiters={recruiters}
          openRecruiterModal={openRecruiterModal}
        />
        <VendorActions
          setIsEditModalOpen={setIsEditModalOpen}
          setIsHistoryModalOpen={setIsHistoryModalOpen}
        />

        {/* Modals */}
        <ActivityHistoryModal
          isOpen={isHistoryModalOpen}
          setIsHistoryModalOpen={setIsHistoryModalOpen}
          modalActivities={modalActivities}
        />

        <EditVendorModal
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          vendor={vendor}
          vendors={vendors}
          setVendors={setVendors}
          vendorId={vendorSlug}
          editFormErrors={editFormErrors}
          realTimeErrors={realTimeErrors}
          handleRealTimeValidation={handleRealTimeValidation}
          handleUpdateVendor={handleUpdateVendor}
          displayFieldError={displayFieldError}
          getFieldClassName={getFieldClassName}
        />

        <ShortlistedModal
          isOpen={isShortlistedModalOpen}
          setIsShortlistedModalOpen={setIsShortlistedModalOpen}
        />

        <InterviewProcessModal
          isOpen={isInterviewProcessModalOpen}
          setIsInterviewProcessModalOpen={setIsInterviewProcessModalOpen}
        />

        <GenericMetricsModal
          isOpen={isMetricsModalOpen}
          selectedMetric={selectedMetric}
          setIsMetricsModalOpen={setIsMetricsModalOpen}
          modalConfig={modalConfig}
          generateModalData={generateModalData}
        />

        <RecruiterDetailsModal
          isOpen={isRecruiterModalOpen}
          setIsRecruiterModalOpen={setIsRecruiterModalOpen}
          selectedRecruiter={selectedRecruiter}
        />
      </div>
    </div>
  );
}
