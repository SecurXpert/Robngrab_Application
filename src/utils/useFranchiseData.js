import { useState, useEffect } from 'react';
import { validateForm, franchiseValidationSchema } from '@/utils/validation';
import { SAMPLE_FRANCHISES, SAMPLE_RECRUITERS, SAMPLE_ACTIVITIES, MODAL_CONFIG } from '@/utils/franchiseManagementConstants';

export const useFranchiseData = (franchiseId) => {
  // Modal states
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRecruitersModalOpen, setIsRecruitersModalOpen] = useState(false);
  const [isActiveRecruitersModalOpen, setIsActiveRecruitersModalOpen] = useState(false);
  const [isTotalCandidatesModalOpen, setIsTotalCandidatesModalOpen] = useState(false);
  const [isRevenueModalOpen, setIsRevenueModalOpen] = useState(false);
  const [isBalanceModalOpen, setIsBalanceModalOpen] = useState(false);
  const [isShortlistedModalOpen, setIsShortlistedModalOpen] = useState(false);
  const [isInterviewProcessModalOpen, setIsInterviewProcessModalOpen] = useState(false);
  const [isMetricsModalOpen, setIsMetricsModalOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);

  const [vendors, setVendors] = useState([]);
  const [editFormData, setEditFormData] = useState({});
  const [editFormErrors, setEditFormErrors] = useState({});
  const [realTimeErrors, setRealTimeErrors] = useState({});

  // Load franchises from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFranchises = localStorage.getItem('franchises');
      if (savedFranchises) {
        setVendors(JSON.parse(savedFranchises));
      } else {
        // Fallback to initial data if no saved data
        setVendors(SAMPLE_FRANCHISES);
      }
    }
  }, []);

  // Find the franchise by ID
  const franchise = vendors.find(v => v.id.toString() === franchiseId) || vendors[0];

  // Calculate dynamic metrics based on franchise data
  const metrics = {
    totalResumes: Math.floor(Math.random() * 1000) + 500,
    candidateInterviews: Math.floor(Math.random() * 100) + 50,
    totalResumeViews: Math.floor(Math.random() * 2000) + 1000,
    totalResumeDownloads: Math.floor(Math.random() * 500) + 200,
    totalInterviews: Math.floor(Math.random() * 150) + 50,
    totalBalanceRemaining: franchise?.balance || '$45,000'
  };

  // Real-time validation
  const handleRealTimeValidation = (fieldName, value) => {
    const errors = { ...realTimeErrors };

    // Clear previous error for this field
    delete errors[fieldName];

    // Validate name fields in real-time
    if (fieldName.includes('name') || fieldName === 'franchiseName' || fieldName === 'ownerName' || fieldName === 'regionState' || fieldName === 'city') {
      if (value && !/^[a-zA-Z\s\-\.'']*$/.test(value)) {
        errors[fieldName] = 'Only letters, spaces, hyphens, and apostrophes allowed';
      }
    }

    // Validate phone fields in real-time
    if (fieldName.includes('phone') || fieldName === 'phoneNumber') {
      if (value && !/^[\d]*$/.test(value)) {
        errors[fieldName] = 'Only numbers allowed';
      }
    }

    // Validate email fields in real-time
    if (fieldName.includes('email') || fieldName === 'ownerEmail') {
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors[fieldName] = 'Please enter a valid email address';
      }
    }

    setRealTimeErrors(errors);
  };

  // Update franchise
  const handleUpdateFranchise = (updatedFranchiseData) => {
    // Check for real-time errors first
    if (Object.keys(realTimeErrors).length > 0) {
      return; // Don't submit if there are real-time errors
    }

    // Validate form data
    const { errors, isValid } = validateForm(updatedFranchiseData, franchiseValidationSchema);

    if (!isValid) {
      setEditFormErrors(errors);
      return;
    }

    // Clear errors if valid
    setEditFormErrors({});
    setRealTimeErrors({});

    // Update localStorage with the new franchise data
    const savedFranchises = localStorage.getItem('franchises');
    if (savedFranchises) {
      const franchises = JSON.parse(savedFranchises);
      const updatedFranchises = franchises.map(franchise =>
        franchise.id.toString() === franchiseId
          ? { ...franchise, ...updatedFranchiseData }
          : franchise
      );
      localStorage.setItem('franchises', JSON.stringify(updatedFranchises));
      setVendors(updatedFranchises);
    }
    setIsEditModalOpen(false);
  };

  // Generic modal and card configuration
  const modalConfig = MODAL_CONFIG;

  // Generic data generator
  const generateModalData = (type) => {
    const baseData = [
      { name: 'John Doe', role: 'Senior Developer', status: 'Scheduled', statusColor: 'blue', date: 'Jan 20, 2024', interviewer: 'Sarah Johnson', details: '10:00 AM - Technical Round' },
      { name: 'Sarah Miller', role: 'Product Manager', status: 'Completed', statusColor: 'green', date: 'Jan 15, 2024', interviewer: 'Mike Davis', details: 'Score: 92/100 - Highly Recommended' },
      { name: 'Mike Johnson', role: 'UX Designer', status: 'Rejected', statusColor: 'red', date: 'Jan 10, 2024', interviewer: 'John Smith', details: 'Skills Mismatch' }
    ];

    const typeMap = {
      'interviewScheduled': { status: 'Scheduled', color: 'blue', details: ['10:00 AM - Technical Round', '2:00 PM - HR Round', '11:00 AM - Portfolio Review'] },
      'interviewCompleted': { status: 'Completed', color: 'green', details: ['Score: 85/100 - Recommended', 'Score: 92/100 - Highly Recommended', 'Score: 78/100 - Consider'] },
      'rejectedCandidates': { status: 'Rejected', color: 'red', details: ['Skills Mismatch', 'Experience Gap', 'Portfolio Weak'] },
      'selectedCandidates': { status: 'Selected', color: 'green', details: ['$120,000', '$110,000', '$95,000'] },
      'totalResumeViews': { status: 'Viewed', color: 'blue', details: ['Viewed by 5 different recruiters', 'Viewed by 4 different recruiters', 'Viewed by 3 different recruiters'] },
      'totalResumeDownloads': { status: 'Downloaded', color: 'green', details: ['Downloaded by 3 different recruiters', 'Downloaded by 2 different recruiters', 'Downloaded by 2 different recruiters'] },
      'totalBalanceRemaining': { status: 'Credit', color: 'green', details: ['Invoice #12345', 'Auto-renewal', 'Invoice #12344'] }
    };

    const config = typeMap[type] || typeMap['interviewScheduled'];
    return baseData.map((item, index) => ({
      ...item,
      status: config.status,
      statusColor: config.color,
      details: config.details[index],
      ...(type === 'totalBalanceRemaining' && {
        name: index === 0 ? 'Payment Received' : index === 1 ? 'Subscription Fee' : 'Payment Received',
        role: index === 0 ? 'Client ABC Corp' : index === 1 ? 'Monthly Plan' : 'Client XYZ Ltd',
        interviewer: index === 0 ? '+$5,000' : index === 1 ? '-$500' : '+$3,200',
        status: index === 1 ? 'Debit' : 'Credit',
        statusColor: index === 1 ? 'red' : 'green'
      })
    }));
  };

  const openMetricsModal = (metricType) => {
    setSelectedMetric(metricType);
    setIsMetricsModalOpen(true);
  };

  const openRecruiterModal = (recruiter) => {
    setSelectedRecruiter(recruiter);
    setIsRecruiterModalOpen(true);
  };

  return {
    // Data
    franchise,
    vendors,
    metrics,
    recruiters: SAMPLE_RECRUITERS,
    activities: SAMPLE_ACTIVITIES,
    modalConfig,

    // Modal states
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
    setSelectedMetric,
    selectedRecruiter,
    setSelectedRecruiter,

    // Form states
    editFormData,
    setEditFormData,
    editFormErrors,
    realTimeErrors,

    // Actions
    handleRealTimeValidation,
    handleUpdateFranchise,
    generateModalData,
    openMetricsModal,
    openRecruiterModal,
    setVendors
  };
};
