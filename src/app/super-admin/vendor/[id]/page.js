"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { validateForm, vendorValidationSchema, displayFieldError, getFieldClassName } from '../../../../utils/validation';

export default function VendorDetailPage() {
  const params = useParams();
  const vendorId = params.id;
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [vendors, setVendors] = useState([]);
  const [editFormErrors, setEditFormErrors] = useState({});
  const [realTimeErrors, setRealTimeErrors] = useState({});

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
        setVendors([
          { 
            id: 1, 
            name: 'TechCorp Solutions', 
            email: 'admin@techcorp.com', 
            category: 'IT',
            recruiters: 12,
            status: 'Active', 
            balance: '$24,500',
            location: 'San Francisco, CA',
            phone: '+1 (555) 123-4567',
            subscription: 'Premium Plan'
          },
          { 
            id: 2, 
            name: 'Global Logistics', 
            email: 'info@globallogistics.com', 
            category: 'Non - IT',
            recruiters: 8,
            status: 'Active', 
            balance: '$18,200',
            location: 'New York, NY',
            phone: '+1 (555) 987-6543',
            subscription: 'Standard Plan'
          }
        ]);
      }
    }
  }, []);

  // Find the vendor by ID
  const vendor = vendors.find(v => v.id.toString() === vendorId) || vendors[0];

  // Add modal state for hiring metrics
  const [isShortlistedModalOpen, setIsShortlistedModalOpen] = useState(false);
  const [isInterviewProcessModalOpen, setIsInterviewProcessModalOpen] = useState(false);
  const [isMetricsModalOpen, setIsMetricsModalOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(null);
  
  // Add modal state for recruiter details
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);

  // Show loading state if vendor data is not available yet
  if (!vendor || vendors.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading vendor details...</p>
        </div>
      </div>
    );
  }

  // Calculate dynamic metrics based on vendor data
  const metrics = {
    totalResumes: Math.floor(Math.random() * 1000) + 500,
    candidateInterviews: Math.floor(Math.random() * 100) + 50,
    totalResumeViews: Math.floor(Math.random() * 2000) + 1000,
    totalResumeDownloads: Math.floor(Math.random() * 500) + 200,
    totalInterviews: Math.floor(Math.random() * 150) + 50,
    totalBalanceRemaining: vendor?.balance || '$0'
  };

  const recruiters = [
    { 
      id: 1,
      name: 'John Smith', 
      role: 'Senior Recruiter', 
      status: 'Active', 
      activeTime: '180 days', 
      inactiveTime: '5 days', 
      lastAction: '2 hours ago',
      email: 'john.smith@techcorp.com',
      phone: '+1 (555) 123-4567',
      joinDate: '2023-01-15',
      recruiterId: 'RC001',
      candidatesHandled: 47,
      resumeViews: 156,
      interviewsScheduled: 23,
      successfulPlacements: 12
    },
    { 
      id: 2,
      name: 'Sarah Johnson', 
      role: 'Recruiter', 
      status: 'Idle', 
      activeTime: '120 days', 
      inactiveTime: '3 days', 
      lastAction: '1 hour ago',
      email: 'sarah.johnson@techcorp.com',
      phone: '+1 (555) 234-5678',
      joinDate: '2023-03-20',
      recruiterId: 'RC002',
      candidatesHandled: 32,
      resumeViews: 98,
      interviewsScheduled: 15,
      successfulPlacements: 8
    },
    { 
      id: 3,
      name: 'Mike Davis', 
      role: 'Junior Recruiter', 
      status: 'On Leave', 
      activeTime: '90 days', 
      inactiveTime: '15 days', 
      lastAction: '3 days ago',
      email: 'mike.davis@techcorp.com',
      phone: '+1 (555) 345-6789',
      joinDate: '2023-06-10',
      recruiterId: 'RC003',
      candidatesHandled: 18,
      resumeViews: 67,
      interviewsScheduled: 8,
      successfulPlacements: 3
    },
    { 
      id: 4,
      name: 'Emily Wilson', 
      role: 'Lead Recruiter', 
      status: 'Active', 
      activeTime: '200 days', 
      inactiveTime: '2 days', 
      lastAction: '30 minutes ago',
      email: 'emily.wilson@techcorp.com',
      phone: '+1 (555) 456-7890',
      joinDate: '2022-11-05',
      recruiterId: 'RC004',
      candidatesHandled: 64,
      resumeViews: 189,
      interviewsScheduled: 31,
      successfulPlacements: 19
    },
    { 
      id: 5,
      name: 'David Brown', 
      role: 'Recruiter', 
      status: 'Offline', 
      activeTime: '60 days', 
      inactiveTime: '30 days', 
      lastAction: '1 week ago',
      email: 'david.brown@techcorp.com',
      phone: '+1 (555) 567-8901',
      joinDate: '2023-08-15',
      recruiterId: 'RC005',
      candidatesHandled: 25,
      resumeViews: 78,
      interviewsScheduled: 12,
      successfulPlacements: 5
    }
  ];

  const activities = [
    { date: '2024-01-15 10:30 AM', action: 'Vendor profile updated', status: 'success' },
    { date: '2024-01-14 03:45 PM', action: 'New recruiter added: John Smith', status: 'info' },
    { date: '2024-01-13 11:20 AM', action: 'Subscription renewed', status: 'success' },
    { date: '2024-01-12 02:15 PM', action: 'Payment processed: $2,500', status: 'success' },
    { date: '2024-01-11 09:30 AM', action: 'Vendor status changed to Active', status: 'warning' }
  ];

  // Generic modal and card configuration
  const modalConfig = {
    'interviewScheduled': { title: 'Interview Scheduled Details', placeholder: 'Search candidates...', fields: ['Interview Date', 'Interviewer'] },
    'interviewCompleted': { title: 'Interview Completed Details', placeholder: 'Search candidates...', fields: ['Interview Date', 'Interviewer'] },
    'rejectedCandidates': { title: 'Rejected Candidates Details', placeholder: 'Search candidates...', fields: ['Rejection Reason', 'Interviewer'] },
    'selectedCandidates': { title: 'Selected Candidates Details', placeholder: 'Search candidates...', fields: ['Offer Status', 'Salary'] },
    'totalResumeViews': { title: 'Total Resume Views Details', placeholder: 'Search candidates...', fields: ['View Count', 'Last Viewed'] },
    'totalResumeDownloads': { title: 'Total Resume Downloads Details', placeholder: 'Search candidates...', fields: ['Download Count', 'Last Downloaded'] },
    'totalBalanceRemaining': { title: 'Total Balance Remaining Details', placeholder: 'Search transactions...', fields: ['Amount', 'Date'], showBalanceOverview: true }
  };

  const cardConfig = {
    shortlisted: { icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', color: 'blue', value: 47, label: 'Shortlisted Candidates', modal: 'shortlisted' },
    interviewProcess: { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: 'purple', value: 89, label: 'Interview Process', modal: 'interviewProcess' },
    interviewScheduled: { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'green', value: 23, label: 'Interview Scheduled', modal: 'interviewScheduled' },
    interviewCompleted: { icon: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6', color: 'red', value: 156, label: 'Interview Completed', modal: 'interviewCompleted' },
    rejectedCandidates: { icon: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'orange', value: 67, label: 'Rejected Candidates', modal: 'rejectedCandidates' },
    selectedCandidates: { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', color: 'yellow', value: 34, label: 'Selected Candidates', modal: 'selectedCandidates' },
    totalResumeViews: { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'indigo', value: 45, label: 'Total Resume Views', modal: 'totalResumeViews' },
    totalResumeDownloads: { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', color: 'pink', value: 38, label: 'Total Resume Downloads', modal: 'totalResumeDownloads' },
    totalBalanceRemaining: { icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636', color: 'gray', value: 12, label: 'Total Balance Remaining', modal: 'totalBalanceRemaining' }
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

  const openMetricsModal = (metricType) => {
    setSelectedMetric(metricType);
    setIsMetricsModalOpen(true);
  };

  const openRecruiterModal = (recruiter) => {
    setSelectedRecruiter(recruiter);
    setIsRecruiterModalOpen(true);
  };

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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/vendor" className="inline-flex items-center text-gray-900 hover:text-gray-700 mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Vendors/Teams
          </Link>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{vendor.name}</h1>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Active</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">IT</span>
            </div>
          </div>
        </div>

        {/* Vendor Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <div className="flex items-center mt-1">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-medium text-gray-900">{vendor.location}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Contact Email</p>
              <div className="flex items-center mt-1">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="font-medium text-gray-900">{vendor.email}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Contact Phone</p>
              <div className="flex items-center mt-1">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="font-medium text-gray-900">{vendor.phone}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Subscription Plan</p>
              <div className="flex items-center mt-1">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-medium text-gray-900">{vendor.subscription}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center mb-2">
              <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-2xl font-bold text-gray-900">{vendor.recruiters}</p>
            </div>
            <p className="text-xs text-gray-600">Total Recruiters</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center mb-2">
              <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <p className="text-2xl font-bold text-gray-900">{metrics.candidateInterviews}</p>
            </div>
            <p className="text-xs text-gray-600">Candidates Handled</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center mb-2">
              <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <p className="text-2xl font-bold text-gray-900">{metrics.totalResumeViews}</p>
            </div>
            <p className="text-xs text-gray-600">Resume Views</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center mb-2">
              <svg className="w-4 h-4 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-2xl font-bold text-gray-900">{metrics.totalResumeDownloads}</p>
            </div>
            <p className="text-xs text-gray-600">Resume Downloads</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center mb-2">
              <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-2xl font-bold text-gray-900">{metrics.totalInterviews}</p>
            </div>
            <p className="text-xs text-gray-600">Total Interviews</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center mb-2">
              <svg className="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-2xl font-bold text-gray-900">{metrics.totalBalanceRemaining}</p>
            </div>
            <p className="text-xs text-gray-600">Balance</p>
          </div>
        </div>

        {/* Hiring Metrics Dashboard */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Hiring Metrics Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(cardConfig).map(([key, config]) => (
              <div key={key} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <div className="flex justify-between items-center mb-4">
                  <svg className={`w-6 h-6 text-${config.color}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={config.icon} />
                  </svg>
                  <a 
                    onClick={() => key === 'shortlisted' ? setIsShortlistedModalOpen(true) : key === 'interviewProcess' ? setIsInterviewProcessModalOpen(true) : openMetricsModal(config.modal)}
                    className="text-sm text-gray-600 flex items-center cursor-pointer hover:text-gray-800"
                  >
                    View <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{config.value}</p>
                <p className="text-sm text-gray-600">{config.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Franchise Activity Status and Activity Log */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Franchise Activity Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Franchise Activity Status</h2>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-lg p-4 flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <div>
                  <p className="text-sm text-green-800">Total Active Time</p>
                  <p className="text-lg font-bold text-green-900">{vendor.activeTime}</p>
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-4 flex items-center">
                <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm text-red-800">Inactive Time</p>
                  <p className="text-lg font-bold text-red-900">{vendor.inactiveTime}</p>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 flex items-center">
                <svg className="w-6 h-6 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm text-yellow-800">Idle Time</p>
                  <p className="text-lg font-bold text-yellow-900">{vendor.idleTime}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Activity Log</h2>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recruiter Activity Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recruiter Activity Status</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recruiter Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inactive Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Action</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recruiters.map((recruiter, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <div className={`h-10 w-10 rounded-full flex-shrink-0 mr-3 flex items-center justify-center ${
                          recruiter.id === 1 ? 'bg-blue-500' : 
                          recruiter.id === 2 ? 'bg-green-500' : 
                          recruiter.id === 3 ? 'bg-purple-500' : 
                          recruiter.id === 4 ? 'bg-orange-500' : 'bg-pink-500'
                        }`}>
                          <span className="text-white font-semibold text-sm">
                            {recruiter.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{recruiter.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{recruiter.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                        recruiter.status === 'Active' ? 'bg-green-100 text-green-800' :
                        recruiter.status === 'Idle' ? 'bg-yellow-100 text-yellow-800' :
                        recruiter.status === 'On Leave' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {recruiter.status === 'Active' && (
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="3" />
                          </svg>
                        )}
                        {recruiter.status === 'Idle' && (
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                        )}
                        {recruiter.status === 'On Leave' && (
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        )}
                        {recruiter.status === 'Offline' && (
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        )}
                        {recruiter.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{recruiter.activeTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{recruiter.inactiveTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{recruiter.lastAction}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        onClick={() => openRecruiterModal(recruiter)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Vendor-Level Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Vendor-Level Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setIsEditModalOpen(true)}
              className="px-6 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit Vendor
            </button>
            <button className="px-6 py-2.5 bg-white text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors font-medium flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
              Disable Vendor
            </button>
            <button 
              onClick={() => setIsHistoryModalOpen(true)}
              className="px-6 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              View Full History
            </button>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Reports
            </button>
          </div>
        </div>

        {/* Activity History Modal */}
        {isHistoryModalOpen && (
          <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Vendor History</h3>
                <button
                  onClick={() => setIsHistoryModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body - Activity Logs */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-3">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        activity.status === 'success' ? 'bg-green-500' :
                        activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">Showing all activities</p>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    Export History
                  </button>
                  <button
                    onClick={() => setIsHistoryModalOpen(false)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Vendor Modal */}
        {isEditModalOpen && (
          <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Edit Vendor</h3>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body - Form */}
              <form 
                id="editVendorForm" 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  handleUpdateVendor({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    category: formData.get('category'),
                    location: formData.get('location'),
                    status: formData.get('status'),
                    subscription: formData.get('subscription')
                  });
                }}
                className="p-6 space-y-4"
              >
                {/* First Row: Vendor Name and Business Email */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Name</label>
                    <input
                      type="text"
                      defaultValue={vendor.name}
                      name="name"
                      maxLength="50"
                      pattern="[a-zA-Z\s\-\.']*"
                      title="Only letters, spaces, hyphens, and apostrophes allowed"
                      onChange={(e) => handleRealTimeValidation('name', e.target.value)}
                      className={getFieldClassName('name', {...editFormErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                    />
                    {displayFieldError('name', editFormErrors) || displayFieldError('name', realTimeErrors)}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
                    <input
                      type="email"
                      defaultValue={vendor.email}
                      name="email"
                      onChange={(e) => handleRealTimeValidation('email', e.target.value)}
                      className={getFieldClassName('email', {...editFormErrors, ...realTimeErrors}, 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900')}
                    />
                    {displayFieldError('email', editFormErrors) || displayFieldError('email', realTimeErrors)}
                  </div>
                </div>

                {/* Second Row: Phone and Category */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue={vendor.phone}
                      name="phone"
                      maxLength="10"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      title="Only numbers allowed"
                      onChange={(e) => handleRealTimeValidation('phone', e.target.value)}
                      className={getFieldClassName('phone', {...editFormErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                    />
                    {displayFieldError('phone', editFormErrors) || displayFieldError('phone', realTimeErrors)}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select 
                      name="category" 
                      value={vendor.category} 
                      onChange={(e) => {
                        // Update vendor state for controlled component
                        const updatedVendors = vendors.map(v => 
                          v.id.toString() === vendorId 
                            ? { ...v, category: e.target.value }
                            : v
                        );
                        setVendors(updatedVendors);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    >
                      <option value="IT">IT</option>
                      <option value="Non-IT">Non-IT</option>
                      <option value="Logistics">Logistics</option>
                    </select>
                  </div>
                </div>

                {/* Third Row: Address (Full Width) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    defaultValue={vendor.location}
                    name="location"
                    maxLength="50"
                    pattern="[a-zA-Z0-9\s\-\.\,\#\/]*"
                    title="Letters, numbers, spaces, and basic punctuation allowed"
                    onChange={(e) => handleRealTimeValidation('location', e.target.value)}
                    className={getFieldClassName('location', {...editFormErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                  />
                  {displayFieldError('location', editFormErrors) || displayFieldError('location', realTimeErrors)}
                </div>

                {/* Fourth Row: Status and Subscription */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select 
                      name="status" 
                      defaultValue={vendor.status}
                      onChange={(e) => {
                        // Update vendor state for controlled component
                        const updatedVendors = vendors.map(v => 
                          v.id.toString() === vendorId 
                            ? { ...v, status: e.target.value }
                            : v
                        );
                        setVendors(updatedVendors);
                      }}
                      className={getFieldClassName('status', editFormErrors, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                    >
                      <option value="">Select Status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Pending">Pending</option>
                    </select>
                    {displayFieldError('status', editFormErrors)}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subscription Plan</label>
                    <select 
                      name="subscription" 
                      value={vendor.subscription}
                      onChange={(e) => {
                        // Update vendor state for controlled component
                        const updatedVendors = vendors.map(v => 
                          v.id.toString() === vendorId 
                            ? { ...v, subscription: e.target.value }
                            : v
                        );
                        setVendors(updatedVendors);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    >
                      <option value="Standard Plan">Standard Plan</option>
                      <option value="Premium Plan">Premium Plan</option>
                      <option value="Basic Plan">Basic Plan</option>
                    </select>
                  </div>
                </div>
              </form>

              {/* Modal Footer */}
              <div className="flex items-center justify-end p-6 border-t border-gray-200 space-x-3">
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  form="editVendorForm"
                  disabled={Object.keys(realTimeErrors).length > 0}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    Object.keys(realTimeErrors).length > 0 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {Object.keys(realTimeErrors).length > 0 ? 'Fix Errors to Update' : 'Update Vendor'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Shortlisted Candidates Modal */}
        {isShortlistedModalOpen && (
          <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-[9999]">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Shortlisted Candidates</h3>
                  <p className="text-sm text-gray-600">Candidates who have been shortlisted for positions</p>
                </div>
                <button onClick={() => setIsShortlistedModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 overflow-y-auto">
                {/* Search */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search candidates..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>

                {/* Export */}
                <div className="mb-6">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Export Data
                  </button>
                </div>

                {/* Data List */}
                <div className="space-y-4">
                  {[
                    { name: 'John Doe', role: 'Senior Developer', status: 'Shortlisted', statusColor: 'blue', date: 'Jan 20, 2024', interviewer: 'Sarah Johnson', details: 'Skills: React, Node.js, MongoDB' },
                    { name: 'Sarah Miller', role: 'Product Manager', status: 'Shortlisted', statusColor: 'blue', date: 'Jan 15, 2024', interviewer: 'Mike Davis', details: 'Skills: Agile, Scrum, JIRA' },
                    { name: 'Mike Johnson', role: 'UX Designer', status: 'Shortlisted', statusColor: 'blue', date: 'Jan 10, 2024', interviewer: 'John Smith', details: 'Skills: Figma, Adobe XD, Prototyping' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-base font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.role}</p>
                        </div>
                        <span className={`px-3 py-1 bg-${item.statusColor}-100 text-${item.statusColor}-800 text-xs font-medium rounded-full`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div>
                          <p className="text-gray-600">Shortlisted By</p>
                          <p className="text-gray-900">{item.interviewer}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Date</p>
                          <p className="text-gray-900">{item.date}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p className="text-gray-900">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end p-6 border-t border-gray-200 space-x-3">
                <button onClick={() => setIsShortlistedModalOpen(false)} className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export Report
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Interview Process Modal */}
        {isInterviewProcessModalOpen && (
          <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-[9999]">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Interview Process</h3>
                  <p className="text-sm text-gray-600">Candidates currently in the interview pipeline</p>
                </div>
                <button onClick={() => setIsInterviewProcessModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 overflow-y-auto">
                {/* Search */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search candidates..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>

                {/* Export */}
                <div className="mb-6">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Export Data
                  </button>
                </div>

                {/* Data List */}
                <div className="space-y-4">
                  {[
                    { name: 'Alice Brown', role: 'Frontend Developer', status: 'Technical Round', statusColor: 'purple', date: 'Jan 22, 2024', interviewer: 'Sarah Johnson', details: 'Round 2 of 3 - Next: HR Round' },
                    { name: 'Bob Wilson', role: 'Backend Engineer', status: 'HR Round', statusColor: 'green', date: 'Jan 21, 2024', interviewer: 'Mike Davis', details: 'Final Round - Awaiting Decision' },
                    { name: 'Carol Davis', role: 'DevOps Engineer', status: 'Initial Screening', statusColor: 'yellow', date: 'Jan 20, 2024', interviewer: 'John Smith', details: 'Round 1 of 3 - Next: Technical Round' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-base font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.role}</p>
                        </div>
                        <span className={`px-3 py-1 bg-${item.statusColor}-100 text-${item.statusColor}-800 text-xs font-medium rounded-full`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div>
                          <p className="text-gray-600">Interviewer</p>
                          <p className="text-gray-900">{item.interviewer}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Date</p>
                          <p className="text-gray-900">{item.date}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p className="text-gray-900">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end p-6 border-t border-gray-200 space-x-3">
                <button onClick={() => setIsInterviewProcessModalOpen(false)} className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export Report
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Generic Modal */}
        {isMetricsModalOpen && selectedMetric && (
          <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-[9999]">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{modalConfig[selectedMetric].title}</h3>
                  <p className="text-sm text-gray-600">Detailed breakdown and analytics</p>
                </div>
                <button onClick={() => setIsMetricsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 overflow-y-auto">
                {/* Balance Overview */}
                {modalConfig[selectedMetric].showBalanceOverview && (
                  <div className="mb-6 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-2xl font-bold text-gray-900">{metrics.totalBalanceRemaining}</p>
                    </div>
                    <p className="text-xs text-gray-600">Balance Remaining</p>
                  </div>
                )}

                {/* Search */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder={modalConfig[selectedMetric].placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>

                {/* Export */}
                <div className="mb-6">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Export Data
                  </button>
                </div>

                {/* Data List */}
                <div className="space-y-4">
                  {generateModalData(selectedMetric).map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-base font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.role}</p>
                        </div>
                        <span className={`px-3 py-1 bg-${item.statusColor}-100 text-${item.statusColor}-800 text-xs font-medium rounded-full`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div>
                          <p className="text-gray-600">{modalConfig[selectedMetric].fields[0]}</p>
                          <p className="text-gray-900">{item.interviewer}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">{modalConfig[selectedMetric].fields[1]}</p>
                          <p className="text-gray-900">{item.date}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p className="text-gray-900">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end p-6 border-t border-gray-200 space-x-3">
                <button onClick={() => setIsMetricsModalOpen(false)} className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export Report
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Recruiter Details Modal */}
        {isRecruiterModalOpen && selectedRecruiter && (
          <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-[100] p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl mx-auto max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Recruiter Details</h3>
                  <p className="text-sm text-gray-600">Comprehensive information and performance metrics</p>
                </div>
                <button
                  onClick={() => setIsRecruiterModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
                {/* First Row - Recruiter Info */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                    <div className={`h-12 w-12 sm:h-16 sm:w-16 rounded-full flex-shrink-0 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center ${
                      selectedRecruiter.id === 1 ? 'bg-blue-500' : 
                      selectedRecruiter.id === 2 ? 'bg-green-500' : 
                      selectedRecruiter.id === 3 ? 'bg-purple-500' : 
                      selectedRecruiter.id === 4 ? 'bg-orange-500' : 'bg-pink-500'
                    }`}>
                      <span className="text-white font-semibold text-sm sm:text-xl">
                        {selectedRecruiter.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900">{selectedRecruiter.name}</h4>
                      <p className="text-sm text-gray-600">{selectedRecruiter.role}</p>
                    </div>
                  </div>
                </div>

                {/* Second Row - Contact & ID */}
                <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <p className="font-medium text-gray-900 text-sm break-all">{selectedRecruiter.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Join Date</p>
                      <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.joinDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Recruiter ID</p>
                      <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.recruiterId}</p>
                    </div>
                  </div>
                </div>

                {/* Third Row - Time Tracking */}
                <div className="bg-green-50 rounded-lg p-3 sm:p-4">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Time Tracking (Today)</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <p className="text-sm text-gray-600 mb-1 sm:mb-0">Active Time</p>
                      <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.activeTime}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <p className="text-sm text-gray-600 mb-1 sm:mb-0">Inactive Time</p>
                      <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.inactiveTime}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <p className="text-sm text-gray-600 mb-1 sm:mb-0">Last Action</p>
                      <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.lastAction}</p>
                    </div>
                  </div>
                </div>

                {/* Fourth Row - Performance Metrics */}
                <div className="bg-purple-50 rounded-lg p-3 sm:p-4">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Performance Metrics</h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <p className="text-sm text-gray-600 mb-1 sm:mb-0">Candidates Handled</p>
                        <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.candidatesHandled}</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${Math.min(100, (selectedRecruiter.candidatesHandled / 100) * 100)}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <p className="text-sm text-gray-600 mb-1 sm:mb-0">Resume Views</p>
                        <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.resumeViews}</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${Math.min(100, (selectedRecruiter.resumeViews / 200) * 100)}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <p className="text-sm text-gray-600 mb-1 sm:mb-0">Interviews Scheduled</p>
                        <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.interviewsScheduled}</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: `${Math.min(100, (selectedRecruiter.interviewsScheduled / 50) * 100)}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <p className="text-sm text-gray-600 mb-1 sm:mb-0">Successful Placements</p>
                        <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.successfulPlacements}</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full" style={{ width: `${Math.min(100, (selectedRecruiter.successfulPlacements / 30) * 100)}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 border-t border-gray-200 space-y-3 sm:space-y-0">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <button className="px-3 sm:px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span className="hidden sm:inline">Edit Profile</span>
                    <span className="sm:hidden">Edit</span>
                  </button>
                  <button className="px-3 sm:px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="hidden sm:inline">Download Report</span>
                    <span className="sm:hidden">Report</span>
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={() => setIsRecruiterModalOpen(false)}
                    className="px-3 sm:px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
                  >
                    Close
                  </button>
                  <button className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                    <span className="hidden sm:inline">Send Message</span>
                    <span className="sm:hidden">Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
