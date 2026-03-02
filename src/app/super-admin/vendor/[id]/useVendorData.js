import { useState, useEffect } from 'react';
import { validateForm, vendorValidationSchema } from '../../../utils/validation';
import { SAMPLE_VENDORS, SAMPLE_RECRUITERS, SAMPLE_ACTIVITIES, MODAL_CONFIG } from './constants';

export const useVendorData = (vendorId) => {
  // State management
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [vendors, setVendors] = useState([]);
  const [editFormErrors, setEditFormErrors] = useState({});
  const [realTimeErrors, setRealTimeErrors] = useState({});

  // Modal states for hiring metrics
  const [isShortlistedModalOpen, setIsShortlistedModalOpen] = useState(false);
  const [isInterviewProcessModalOpen, setIsInterviewProcessModalOpen] = useState(false);
  const [isMetricsModalOpen, setIsMetricsModalOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(null);
  
  // Modal state for recruiter details
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);

  // Load vendors from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedVendors = localStorage.getItem('vendors');
      if (savedVendors) {
        let vendors = JSON.parse(savedVendors);
        
        // Fix existing vendors with missing data
        vendors = vendors.map(vendor => ({
          ...vendor,
          location: vendor.location || 'Not specified',
          phone: vendor.phone || 'Not specified', 
          subscription: vendor.subscription || 'Standard Plan'
        }));
        
        // Save the fixed vendors back to localStorage
        localStorage.setItem('vendors', JSON.stringify(vendors));
        setVendors(vendors);
      } else {
        // Fallback to initial data if no saved data
        setVendors(SAMPLE_VENDORS);
      }
    }
  }, []);

  // Find the vendor by ID
  const vendor = vendors.find(v => v.id.toString() === vendorId) || vendors[0];

  // Calculate dynamic metrics based on vendor data
  const metrics = {
    totalResumes: Math.floor(Math.random() * 1000) + 500,
    candidateInterviews: Math.floor(Math.random() * 100) + 50,
    totalResumeViews: Math.floor(Math.random() * 2000) + 1000,
    totalResumeDownloads: Math.floor(Math.random() * 500) + 200,
    totalInterviews: Math.floor(Math.random() * 150) + 50,
    totalBalanceRemaining: vendor?.balance || '$0'
  };

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

  // Update vendor
  const handleUpdateVendor = (updatedVendorData) => {
    // Check for real-time errors first
    if (Object.keys(realTimeErrors).length > 0) {
      return; // Don't submit if there are real-time errors
    }
    
    // Validate form data
    const { errors, isValid } = validateForm(updatedVendorData, vendorValidationSchema);
    
    if (!isValid) {
      setEditFormErrors(errors);
      return;
    }
    
    // Clear errors if valid
    setEditFormErrors({});
    setRealTimeErrors({});
    
    // Update localStorage with the new vendor data
    const savedVendors = localStorage.getItem('vendors');
    if (savedVendors) {
      const vendors = JSON.parse(savedVendors);
      const updatedVendors = vendors.map(vendor => 
        vendor.id.toString() === vendorId 
          ? { ...vendor, ...updatedVendorData }
          : vendor
      );
      localStorage.setItem('vendors', JSON.stringify(updatedVendors));
      setVendors(updatedVendors);
    }
    setIsEditModalOpen(false);
  };

  // Modal handlers
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
    vendor,
    vendors,
    recruiters: SAMPLE_RECRUITERS,
    activities: SAMPLE_ACTIVITIES,
    metrics,
    modalConfig: MODAL_CONFIG,
    
    // Modal states
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
    
    // Form errors
    editFormErrors,
    realTimeErrors,
    
    // Actions
    handleRealTimeValidation,
    handleUpdateVendor,
    generateModalData,
    openMetricsModal,
    openRecruiterModal
  };
};
