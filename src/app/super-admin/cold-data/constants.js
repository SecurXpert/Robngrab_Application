export const SUMMARY_CARDS = [
  { title: 'Total Cold Users', value: '10', change: '+12.5%', color: 'blue' },
  { title: 'Payment Pending', value: '2', change: '+8.2%', color: 'orange' },
  { title: 'Registration Failed', value: '3', change: '-3.1%', color: 'red' },
  { title: 'Inactive (7+ Days)', value: '2', change: '+15.7%', color: 'gray' },
  { title: 'Resolved Today', value: '1', change: '+23.4%', color: 'green' }
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
    role: 'Vendor',
    issueType: 'Payment Pending',
    issueDescription: 'Invoice #INV-2453 overdue by 15 days - $2,500 payment pending',
    lastActivity: '2025-02-10',
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
    issueDescription: 'Account registration incomplete - missing verification documents',
    lastActivity: '2025-02-09',
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
    role: 'Partner',
    issueType: 'Email/OTP Failure',
    issueDescription: 'Not receiving verification emails - spam filter issue',
    lastActivity: '2025-02-08',
    priority: 'High',
    status: 'Open',
    phone: '+1 (555) 345-6789',
    organization: 'Star Franchise Co',
    category: 'Finance',
    assignedTo: 'Sarah Admin'
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
