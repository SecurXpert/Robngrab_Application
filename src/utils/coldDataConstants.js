export const SUMMARY_CARDS = [
  { title: 'Total Cold Users', value: '10', icon: 'FiUsers', bgColor: 'bg-[#EFF6FF]', iconColor: 'text-[#155DFC]' },
  { title: 'Payment Pending', value: '2', icon: 'LuDollarSign', bgColor: 'bg-[#FEF2F2]', iconColor: 'text-[#E7000B]' },
  { title: 'Registration Failed', value: '3', icon: 'LuCircleAlert', bgColor: 'bg-[#FFF7ED]', iconColor: 'text-[#F54900]' },
  { title: 'Inactive (7+ Days)', value: '2', icon: 'LuClock4', bgColor: 'bg-[#FEFCE8]', iconColor: 'text-[#D08700]' },
  { title: 'Resolved Today', value: '1', icon: 'LuCircleCheckBig', bgColor: 'bg-[#F0FDF4]', iconColor: 'text-[#00A63E]' }
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
    firstDetected: 'Feb 5,2026',
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
    name: 'David Chen',
    email: 'david.chen@starfranchise.com',
    role: 'Franchise',
    issueType: 'Email/OTP Failure',
    issueDescription: 'Not receiving verification emails',
    firstDetected: 'Feb 3,2026',
    lastActivity: 'Feb 8,2026',
    priority: 'High',
    status: 'Open',
    phone: '+1 (555) 345-6789',
    organization: 'Star Franchise Co',
    category: 'Finance',
    assignedTo: 'Sarah Admin'
  },
  
  {
    id: 3,
    name: 'Robert Johnson',
    email: 'r.johnson@cloudtech.net',
    role: 'Recruiter',
    issueType: 'Inactive Users',
    issueDescription: 'User inactive for more than 30 days',
    firstDetected: 'Feb 1,2026',
    lastActivity: 'Feb 6,2026',
    priority: 'Medium',
    status: 'Escalated',
    phone: '+1 (555) 567-8901',
    organization: 'CloudTech Systems',
    category: 'Cloud Services',
    assignedTo: 'Lisa Admin'
  },
  {
    id: 4,
    name: 'Sarah Thompson',
    email: 'sarah.thompson@innovatecorp.com',
    role: 'Franchise',
    issueType: 'Payment Pending',
    issueDescription: 'Subscription payment failed',
    firstDetected: 'Jan 31,2026',
    lastActivity: 'Feb 5,2026',
    priority: 'High',
    status: 'Open',
    phone: '+1 (555) 678-9012',
    organization: 'Innovate Corp',
    category: 'Finance',
    assignedTo: 'John Admin'
  },

  {
    id: 5,
    name: 'Maria Garcia',
    email: 'maria.garcia@globalconnect.net',
    role: 'Recruiter',
    issueType: 'Email/OTP Failure',
    issueDescription: 'OTP not received on mobile',
    firstDetected: 'Jan 29,2026',
    lastActivity: 'Feb 3,2026',
    priority: 'Medium',
    status: 'In Progress',
    phone: '+1 (555) 890-1234',
    organization: 'Global Connect',
    category: 'Technology',
    assignedTo: 'Mike Admin'
  },
  {
    id: 6,
    name: 'Daniel Lee',
    email: 'daniel.lee@cloudservices.com',
    role: 'Franchise',
    issueType: 'Profile Incomplete',
    issueDescription: 'Missing business documentation',
    firstDetected: 'Jan 28,2026',
    lastActivity: 'Feb 2,2026',
    priority: 'High',
    status: 'Open',
    phone: '+1 (555) 901-2345',
    organization: 'Cloud Services Ltd',
    category: 'Finance',
    assignedTo: 'Lisa Admin'
  },

  {
    id: 7,
    name: 'Thomas Brown',
    email: 'thomas.brown@vendorsupply.net',
    role: 'Vendor',
    issueType: 'Payment Pending',
    issueDescription: 'Invoice payment overdue',
    lastActivity: 'Jan 31,2026',
    priority: 'High',
    status: 'Open',
    phone: '+1 (555) 123-7890',
    organization: 'Vendor Supply Co',
    category: 'Finance',
    assignedTo: 'Sarah Admin'
  },
  {
    id: 8,
    name: 'Amanda White',
    email: 'amanda.white@techvendors.com',
    role: 'Vendor',
    issueType: 'Registration Issues',
    issueDescription: 'Vendor account verification pending',
    lastActivity: 'Jan 30,2026',
    priority: 'Medium',
    status: 'In Progress',
    phone: '+1 (555) 234-8901',
    organization: 'Tech Vendors Inc',
    category: 'IT',
    assignedTo: 'Mike Admin'
  },
  {
    id: 9,
    name: 'Christopher Lee',
    email: 'chris.lee@globalvendor.com',
    role: 'Vendor',
    issueType: 'Email/OTP Failure',
    issueDescription: 'Not receiving vendor notifications',
    lastActivity: 'Jan 29,2026',
    priority: 'Low',
    status: 'Open',
    phone: '+1 (555) 345-9012',
    organization: 'Global Vendor Solutions',
    category: 'Technology',
    assignedTo: 'Lisa Admin'
  },
  {
    id: 10,
    name: 'Michelle Davis',
    email: 'michelle.davis@supplychain.io',
    role: 'Vendor',
    issueType: 'Profile Incomplete',
    issueDescription: 'Missing vendor documentation',
    lastActivity: 'Jan 28,2026',
    priority: 'Medium',
    status: 'Resolved',
    phone: '+1 (555) 456-0123',
    organization: 'Supply Chain Solutions',
    category: 'Finance',
    assignedTo: 'John Admin'
  }
];

export const PRIORITY_COLORS = {
  'High': 'bg-[#FEF2F2] text-[#C10007] border border-[#FFC9C9] rounded-full',
  'Medium': 'bg-[#FFF7ED] text-[#CA3500] border border-[#FFD6A8] rounded-full',
  'Low': 'bg-[#EFF6FF] text-[#1447E6] border border-[#BEDBFF] rounded-full'
};

export const STATUS_COLORS = {
  'Open': 'bg-[#FEFCE8] text-[#A65F00] border border-[#FFF085] rounded-full',
  'In Progress': 'bg-[#EFF6FF] text-[#1447E6] border border-[#BEDBFF] rounded-full',
  'Escalated': 'bg-[#FEF2F2] text-[#C10007] border border-[#FFC9C9] rounded-full',
  'Resolved': 'bg-[#F0FDF4] text-[#008236] border border-[#B9F8CF] rounded-full'
};
