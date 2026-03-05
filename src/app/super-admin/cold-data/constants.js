export const SUMMARY_CARDS = [
  { title: 'Total Cold Users', value: '10', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
  { title: 'Payment Pending', value: '2', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', bgColor: 'bg-orange-50', iconColor: 'text-orange-600' },
  { title: 'Registration Failed', value: '3', icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', bgColor: 'bg-red-50', iconColor: 'text-red-600' },
  { title: 'Inactive (7+ Days)', value: '2', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', bgColor: 'bg-gray-50', iconColor: 'text-gray-600' },
  { title: 'Resolved Today', value: '1', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', bgColor: 'bg-green-50', iconColor: 'text-green-600' }
];

export const FILTERS = [
  'All Cold Data',
  'Payment Pending',
  'Registration Issues',
  'Email/OTP Failure',
  'Profile Incomplete',
  'Inactive Users',
  'Subscription Expired',
  'System Errors'
];

export const COLD_USERS = [
  {
    id: 1,
    name: 'Michael Roberts',
    email: 'michael.roberts@techvision.com',
    role: 'Franchise',
    issueType: 'Payment Pending',
    issueDescription: 'Invoice #INV-2453',
    lastActivity: 'Feb 10,2026',
    priority: 'High',
    status: 'Open',
    phone: '+1 (555) 123-4567',
    organization: 'TechVision Solutions',
    category: 'IT',
    assignedTo: 'Sarah Admin'
  },
  {
    id: 2,
    name: 'Jennifer Martinez',
    email: 'jennifer.m@globalrecruit.com',
    role: 'Client',
    issueType: 'Registration Issues',
    issueDescription: 'Account registration incomplete ',
    lastActivity: 'Feb 9,2026',
    priority: 'Medium',
    status: 'Pending',
    phone: '+1 (555) 234-5678',
    organization: 'Global Recruit Inc',
    category: 'HR',
    assignedTo: 'John Admin'
  },
  {
    id: 3,
    name: 'David Chen',
    email: 'david.chen@starfranchise.com',
    role: 'Franchise',
    issueType: 'Email/OTP Failure',
    issueDescription: 'Not receiving verification emails',
    lastActivity: 'Feb 8,2026',
    priority: 'High',
    status: 'Open',
    phone: '+1 (555) 345-6789',
    organization: 'Star Franchise Co',
    category: 'Finance',
    assignedTo: 'Sarah Admin'
  },
  {
    id: 4,
    name: 'Emily Watson',
    email: 'emily.watson@datasync.io',
    role: 'Client',
    issueType: 'Profile Incomplete',
    issueDescription: 'Profile information missing for 7 days',
    lastActivity: 'Feb 7,2026',
    priority: 'High',
    status: 'In Progress',
    phone: '+1 (555) 456-7890',
    organization: 'DataSync Solutions',
    category: 'Technology',
    assignedTo: 'Mike Admin'
  },
  {
    id: 5,
    name: 'Robert Johnson',
    email: 'r.johnson@cloudtech.net',
    role: 'Recruiter',
    issueType: 'Inactive Users',
    issueDescription: 'User inactive for more than 30 days',
    lastActivity: 'Feb 6,2026',
    priority: 'Medium',
    status: 'Escalated',
    phone: '+1 (555) 567-8901',
    organization: 'CloudTech Systems',
    category: 'Cloud Services',
    assignedTo: 'Lisa Admin'
  }
];

export const PRIORITY_COLORS = {
  'High': 'bg-red-100 text-red-800',
  'Medium': 'bg-yellow-100 text-yellow-800',
  'Low': 'bg-green-100 text-green-800'
};

export const STATUS_COLORS = {
  'Open': 'bg-yellow-100 text-yellow-800',
  'In Progress': 'bg-blue-100 text-blue-800',
  'Escalated': 'bg-red-100 text-red-800',
  'Resolved': 'bg-green-100 text-green-800'
};
