// Franchise Management Constants

export const MODAL_CONFIG = {
  'interviewScheduled': { title: 'Interview Scheduled Details', placeholder: 'Search candidates...', fields: ['Interview Date', 'Interviewer'] },
  'interviewCompleted': { title: 'Interview Completed Details', placeholder: 'Search candidates...', fields: ['Interview Date', 'Interviewer'] },
  'rejectedCandidates': { title: 'Rejected Candidates Details', placeholder: 'Search candidates...', fields: ['Rejection Reason', 'Interviewer'] },
  'selectedCandidates': { title: 'Selected Candidates Details', placeholder: 'Search candidates...', fields: ['Offer Status', 'Salary'] },
  'totalResumeViews': { title: 'Total Resume Views Details', placeholder: 'Search candidates...', fields: ['View Count', 'Last Viewed'] },
  'totalResumeDownloads': { title: 'Total Resume Downloads Details', placeholder: 'Search candidates...', fields: ['Download Count', 'Last Downloaded'] },
  'totalBalanceRemaining': { title: 'Total Balance Remaining Details', placeholder: 'Search transactions...', fields: ['Amount', 'Date'], showBalanceOverview: true }
};

export const CARD_CONFIG = {
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

export const SAMPLE_RECRUITERS = [
  { 
    id: 1,
    name: 'John Smith', 
    role: 'Senior Recruiter', 
    status: 'Active', 
    activeTime: '180 days', 
    inactiveTime: '5 days', 
    lastAction: '2 hours ago',
    email: 'john.smith@techsolutions.com',
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
    email: 'sarah.johnson@techsolutions.com',
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
    email: 'mike.davis@techsolutions.com',
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
    email: 'emily.wilson@techsolutions.com',
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
    email: 'david.brown@techsolutions.com',
    phone: '+1 (555) 567-8901',
    joinDate: '2023-08-15',
    recruiterId: 'RC005',
    candidatesHandled: 25,
    resumeViews: 78,
    interviewsScheduled: 12,
    successfulPlacements: 5
  }
];

export const SAMPLE_ACTIVITIES = [
  { date: '2024-01-15 10:30 AM', action: 'Franchise profile updated', status: 'success' },
  { date: '2024-01-14 03:45 PM', action: 'New recruiter added: John Smith', status: 'info' },
  { date: '2024-01-13 11:20 AM', action: 'Subscription renewed', status: 'success' },
  { date: '2024-01-12 02:15 PM', action: 'Payment processed: $2,500', status: 'success' },
  { date: '2024-01-11 09:30 AM', action: 'Franchise status changed to Active', status: 'warning' }
];

export const SAMPLE_FRANCHISES = [
  { 
    id: 1, 
    name: 'Tech Solutions Inc.', 
    email: 'john@techsolutions.com', 
    category: 'Technology',
    recruiters: 5,
    status: 'Active', 
    balance: '$50,000',
    location: 'New York, USA',
    phone: '+1 (555) 123-4567',
    subscription: 'Premium Plan',
    candidates: 120,
    revenue: '$50,000',
    activeTime: '6h 45m',
    inactiveTime: '1h 15m',
    idleTime: '45m'
  },
  { 
    id: 2, 
    name: 'Healthcare Plus', 
    email: 'jane@healthcareplus.com', 
    category: 'Healthcare',
    recruiters: 3,
    status: 'Active', 
    balance: '$35,000',
    location: 'California, USA',
    phone: '+1 (555) 987-6543',
    subscription: 'Standard Plan',
    candidates: 85,
    revenue: '$35,000',
    activeTime: '5h 30m',
    inactiveTime: '2h 00m',
    idleTime: '30m'
  },
  { 
    id: 3, 
    name: 'EduTech Services', 
    email: 'mike@edutech.com', 
    category: 'Education',
    recruiters: 8,
    status: 'Inactive', 
    balance: '$75,000',
    location: 'Texas, USA',
    phone: '+1 (555) 456-7890',
    subscription: 'Premium Plan',
    candidates: 200,
    revenue: '$75,000',
    activeTime: '4h 15m',
    inactiveTime: '3h 30m',
    idleTime: '1h 15m'
  }
];
