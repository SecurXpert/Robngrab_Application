"use client";

import { useParams } from 'next/navigation';
import { useFranchiseData } from './useFranchiseData';
import FranchiseHeader from './components/FranchiseHeader';
import FranchiseInfo from './components/FranchiseInfo';
import MetricsCards from './components/MetricsCards';
import HiringMetricsDashboard from './components/HiringMetricsDashboard';
import ActivityStatus from './components/ActivityStatus';
import RecruiterTable from './components/RecruiterTable';
import FranchiseActions from './components/FranchiseActions';
import LoadingState from './components/LoadingState';
import InterviewProcessModal from './components/modals/InterviewProcessModal';
import ShortlistedModal from './components/modals/ShortlistedModal';
import MetricsModal from './components/modals/MetricsModal';
import RecruiterDetailsModal from './components/modals/RecruiterDetailsModal';

export default function FranchiseDetailPage() {
  const params = useParams();
  const franchiseId = params.id;

  const {
    franchise,
    vendors,
    metrics,
    recruiters,
    activities,
    modalConfig,
    isHistoryModalOpen,
    setIsHistoryModalOpen,
    isEditModalOpen,
    setIsEditModalOpen,
    isRecruitersModalOpen,
    setIsRecruitersModalOpen,
    isActiveRecruitersModalOpen,
    setIsActiveRecruitersModalOpen,
    isTotalCandidatesModalOpen,
    setIsTotalCandidatesModalOpen,
    isRevenueModalOpen,
    setIsRevenueModalOpen,
    isBalanceModalOpen,
    setIsBalanceModalOpen,
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
    handleUpdateFranchise,
    generateModalData,
    openMetricsModal,
    openRecruiterModal
  } = useFranchiseData(franchiseId);

  // Show loading state if franchise data is not available yet
  if (!franchise || vendors.length === 0) {
    return <LoadingState />;
  }

  // Handle modal opening
  const handleModalOpen = (modalType) => {
    switch (modalType) {
      case 'recruiters':
        setIsRecruitersModalOpen(true);
        break;
      case 'activeRecruiters':
        setIsActiveRecruitersModalOpen(true);
        break;
      case 'totalCandidates':
        setIsTotalCandidatesModalOpen(true);
        break;
      case 'revenue':
        setIsRevenueModalOpen(true);
        break;
      case 'balance':
        setIsBalanceModalOpen(true);
        break;
      case 'shortlisted':
        setIsShortlistedModalOpen(true);
        break;
      case 'interviewProcess':
        setIsInterviewProcessModalOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FranchiseHeader franchise={franchise} />

        {/* Franchise Information */}
        <FranchiseInfo franchise={franchise} />

        {/* Metrics Cards */}
        <MetricsCards 
          franchise={franchise} 
          metrics={metrics} 
          onModalOpen={handleModalOpen}
        />

        {/* Hiring Metrics Dashboard */}
        <HiringMetricsDashboard onModalOpen={openMetricsModal} />

        {/* Franchise Activity Status and Activity Log */}
        <ActivityStatus franchise={franchise} activities={activities} />

        {/* Recruiter Activity Status */}
        <RecruiterTable 
          recruiters={recruiters} 
          onRecruiterClick={openRecruiterModal}
        />

        {/* Franchise-Level Actions */}
        <FranchiseActions 
          onEdit={() => setIsEditModalOpen(true)}
          onViewHistory={() => setIsHistoryModalOpen(true)}
        />

        {/* Modals */}
        <InterviewProcessModal 
          isOpen={isInterviewProcessModalOpen}
          onClose={() => setIsInterviewProcessModalOpen(false)}
        />

        <ShortlistedModal 
          isOpen={isShortlistedModalOpen}
          onClose={() => setIsShortlistedModalOpen(false)}
        />

        <MetricsModal 
          isOpen={isMetricsModalOpen}
          onClose={() => setIsMetricsModalOpen(false)}
          modalConfig={modalConfig}
          selectedMetric={selectedMetric}
          generateModalData={generateModalData}
        />

        <RecruiterDetailsModal 
          isOpen={isRecruiterModalOpen}
          onClose={() => setIsRecruiterModalOpen(false)}
          recruiter={selectedRecruiter}
        />

        {/* Note: Edit Modal and other modals would need to be created as separate components */}
        {/* For now, they remain inline or can be added later */}
      </div>
    </div>
  );
}
