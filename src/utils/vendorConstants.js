export const SAMPLE_VENDORS = [
  { 
    id: 1, 
    name: 'Tech Solutions Inc.', 
    description: 'Detailed analytics and performance insights',
    email: 'contact@techsolutionsinc.com', 
    category: 'IT',
    recruiters: 12,
    status: 'Active', 
    balance: '$24,500',
    location: 'Silicon Valley, CA, USA',
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
];

export const SAMPLE_RECRUITERS = [
  {
    id: 1,
    name: "sara johnson",
    role: "Senior Recruiter",
    status: "Active",
    activeTime: "7h 32m",
    inactiveTime: "25m",
    lastAction: "Reviewed resume - 5 min ago",
    email: "sarah.johnson@robnngrab.com",
    phone: "+1 (555) 234-5678",
    joinDate: "Jan 15, 2025",
    recruiterId: "R001",
    candidatesHandled: 127,
    resumeViews: 342,
    interviewsScheduled: 45,
    successfulPlacements: 23,
    assignedJobRole: "Software Engineer,Data Analyst,DevOps Engineer",
    candidates: 5,
    roleCandidates: {
      "Software Engineer": { count: 34, category: "IT" },
      "Data Analyst": { count: 28, category: "IT" },
      "DevOps Engineer": { count: 19, category: "IT" },
    },
    category: "IT",
    recentActivity: [
      { action: "Reviewed resume for John Smith", time: "5 min ago" },
      { action: "Scheduled interview with Emily Chen", time: "23 min ago" },
      { action: "Sent offer to James Wilson", time: "1h 23 min ago" },
      { action: "Contacted candidate Michael Brown", time: "2h 5 min ago" },
      {
        action: "Shortlisted candidate for Software Engineer",
        time: "3h 20 min ago",
      },
    ],
  },
  {
    id: 2,
    name: "mike davies",
    role: "Recruiter",
    status: "Idle",
    activeTime: "6h 15m",
    inactiveTime: "1h 45m",
    lastAction: "Scheduled interview - 45 min ago",
    email: "mike.davis@robnngrab.com",
    phone: "+1 (555) 345-6789",
    joinDate: "Mar 20, 2025",
    recruiterId: "R002",
    candidatesHandled: 89,
    resumeViews: 256,
    interviewsScheduled: 32,
    successfulPlacements: 15,
    assignedJobRole: "HR Manager,Sales Ececutive,Marketing Manager",
    candidates: 3,
    roleCandidates: {
      "HR Manager": { count: 22, category: "Non-IT" },
      "Sales Executive": { count: 18, category: "Non-IT" },
      "Marketing Manager": { count: 15, category: "Non-IT" },
    },
    category: "Non-IT",
    recentActivity: [
      { action: "Phone screen with Lisa Anderson", time: "10 min ago" },
      { action: "Background check for Robert Taylor", time: "45 min ago" },
      {
        action: "Initial interview with Jennifer White",
        time: "2h 15 min ago",
      },
      {
        action: "Followed up with HR Manager candidate",
        time: "3h 30 min ago",
      },
      {
        action: "Posted new Sales Executive position",
        time: "5h 10 min ago",
      },
    ],
  },
  {
    id: 3,
    name: "Lisa Anderson",
    role: "senior Recruiter",
    status: "Active",
    activeTime: "8h 10m",
    inactiveTime: "15m",
    lastAction: "Contacted candidate - 2 min ago",
    email: "lisa.anderson@robnngrab.com",
    phone: "+1 (555) 345-6389",
    joinDate: "2023-06-10",
    recruiterId: "R003",
    candidatesHandled: 18,
    resumeViews: 67,
    interviewsScheduled: 8,
    successfulPlacements: 4,
    assignedJobRole: "Product Owner,Scrum Master,Technical Writer",
    candidates: 3,
    roleCandidates: {
      "Product Owner": { count: 7, category: "IT" },
      "Scrum Master": { count: 11, category: "IT" },
      "Technical Writer": { count: 13, category: "IT" },
    },
    category: "IT",
    recentActivity: [
      {
        action: "Final round interview with David Martinez",
        time: "15 min ago",
      },
      {
        action: "Case study review for Amanda Foster",
        time: "1h 10 min ago",
      },
      {
        action: "Technical assessment for Chris Johnson",
        time: "2h 45 min ago",
      },
      { action: "Scrum ceremony planning session", time: "4h 20 min ago" },
      { action: "Updated Product Owner requirements", time: "6h 15 min ago" },
    ],
  },
  {
    id: 4,
    name: "David MartineZ",
    role: "recruiter",
    status: "on leave",
    activeTime: "8h 0m",
    inactiveTime: "2 days",
    lastAction: "On leave - Today",
    email: "david.martinez@robnngrab.com",
    phone: "+1 (555) 567-8901",
    joinDate: "2May 5, 2025",
    recruiterId: "R004",
    candidatesHandled: 0,
    resumeViews: 0,
    interviewsScheduled: 0,
    successfulPlacements: 0,
    assignedJobRole: "Operations Manager,Finanace Analyst",
    candidates: 0,
    roleCandidates: {
      "Operations Manager": { count: 0, category: "Non-IT" },
      "Finance Analyst": { count: 0, category: "Non-IT" },
    },
    category: "Non-IT",
    recentActivity: [
      { action: "On leave - No activity", time: "Today" },
      { action: "Handed over operations to team", time: "2 days ago" },
      { action: "Completed finance report review", time: "3 days ago" },
      { action: "Updated operational procedures", time: "1 week ago" },
      { action: "Quarterly planning meeting", time: "2 weeks ago" },
    ],
  },
  {
    id: 5,
    name: "Emma Wilson",
    role: "Junior Recruiter",
    status: "Disabled",
    activeTime: "oh om",
    inactiveTime: "8h 0m",
    lastAction: "Account disabled - Feb 15",
    email: "emma.wilson@robnngrab.com",
    phone: "+1 (555) 678-9012",
    joinDate: "Aug 12, 2025",
    recruiterId: "R005",
    candidatesHandled: 42,
    resumeViews: 128,
    interviewsScheduled: 18,
    successfulPlacements: 6,
    assignedJobRole: "Junior Developer,Custom Support",
    candidates: 3,
    roleCandidates: {
      "Junior Developer": { count: 12, category: "IT" },
      "Customer Support": { count: 10, category: "Non-IT" },
    },
    category: "IT",
    recentActivity: [
      { action: "Account disabled - No access", time: "Today" },
      { action: "Last login attempt recorded", time: "Feb 15" },
      { action: "Junior developer assessment completed", time: "Feb 10" },
      { action: "Customer support tickets reviewed", time: "Feb 5" },
      { action: "Training session conducted", time: "Feb 1" },
    ],
  },
];

export const SAMPLE_ACTIVITIES = [
  {
    date: "Feb 18, 2026 - 09:00 AM",
    action: "Status changed to Active",
    status: "success",
  },
  {
    date: "Feb 18, 2026 - 12:30 PM",
    action: "Status changed to Idle",
    status: "info",
  },
  {
    date: "Feb 18, 2026 - 01:00 pM",
    action: "Status changed to Active",
    status: "success",
  },
  {
    date: "Feb 18, 2026 - 02:15 PM",
    action: "Franchise logged out",
    status: "success",
  },
  {
    date: "Feb 17, 2026 - 06:00 pM",
    action: "Franchise enabled by Super Admin",
    status: "warning",
  },
];

export const MODAL_ACTIVITIES = [
  {
    date: "Feb 18, 2026 - 09:00 AM",
    action: "vendor logged in",
    status: "success",
  },
  {
    date: "Feb 18, 2026 - 12:30 PM",
    action: "Status changed to Active",
    status: "info",
  },
  {
    date: "Feb 18, 2026 - 01:00 pM",
    action: "Status changed to Idle",
    status: "success",
  },
  {
    date: "Feb 18, 2026 - 02:15 PM",
    action: "Status changed to Active",
    status: "success",
  },
  {
    date: "Feb 17, 2026 - 06:00 pM",
    action: "Vendor logged out",
    status: "warning",
  },
  {
    date: "Feb 17, 2026 - 09:00 AM",
    action: "Vendor enabled by Super Admin",
    status: "success",
  },
];

export const MODAL_CONFIG = {
  interviewScheduled: {
    title: "Interview Scheduled",
    description: "Detailed view of interview scheduled",
    placeholder: "Search candidates...",
    fields: ["Interview Date", "Interviewer"],
  },
  interviewCompleted: {
    title: "Interview Completed",
    description: "Detailed view of interview completed",
    placeholder: "Search candidates...",
    fields: ["Interview Date", "Interviewer"],
  },
  rejectedCandidates: {
    title: "Rejected Candidates",
    description: "Detailed view of rejected candidates",
    placeholder: "Search candidates...",
    fields: ["Rejection Reason", "Interviewer"],
  },
  selectedCandidates: {
    title: "Selected Candidates",
    description: "Detailed view of selected candidates",
    placeholder: "Search candidates...",
    fields: ["Offer Status", "Salary"],
  },
  totalResumeViews: {
    title: "Total Resume Views",
    description: "Detailed view of total resume views",
    placeholder: "Search candidates...",
    fields: ["View Count", "Last Viewed"],
  },
  totalResumeDownloads: {
    title: "Total Resume Downloads",
    description: "Detailed view of total resume downloads",
    placeholder: "Search candidates...",
    fields: ["Download Count", "Last Downloaded"],
  },
  totalBalanceRemaining: {
    title: "Total Balance Remaining",
    description: "Detailed view of total balance remaining",
    placeholder: "Search transactions...",
    fields: ["Amount", "Date"],
    showBalanceOverview: true,
  },
};

export const CARD_CONFIG = {
  shortlisted: {
    icon: "LuUserRoundCheck",
    color: "blue",
    value: 47,
    label: "Shortlisted Candidates",
    modal: "shortlisted",
  },
  interviewProcess: {
    icon: "LuActivity",
    color: "purple",
    value: 89,
    label: "Interview Process",
    modal: "interviewProcess",
  },
  interviewScheduled: {
    icon: "CiCalendar",
    color: "green",
    value: 23,
    label: "Interview Scheduled",
    modal: "interviewScheduled",
  },
  interviewCompleted: {
    icon: "LuCircleCheckBig",
    color: "red",
    value: 156,
    label: "Interview Completed",
    modal: "interviewCompleted",
  },
  rejectedCandidates: {
    icon: "FaRegCircleXmark",
    color: "orange",
    value: 67,
    label: "Rejected Candidates",
    modal: "rejectedCandidates",
  },
  selectedCandidates: {
    icon: "LuCircleCheckBig",
    color: "yellow",
    value: 34,
    label: "Selected Candidates",
    modal: "selectedCandidates",
  },
  totalResumeViews: {
    icon: "FiEye",
    color: "indigo",
    value: 45,
    label: "Total Resume Views",
    modal: "totalResumeViews",
  },
  totalResumeDownloads: {
    icon: "FiDownload",
    color: "pink",
    value: 38,
    label: "Total Resume Downloads",
    modal: "totalResumeDownloads",
  },
  totalBalanceRemaining: {
    icon: "LuDollarSign",
    color: "gray",
    value: 12,
    label: "Total Balance Remaining",
    modal: "totalBalanceRemaining",
  },
};

export const STATUS_COLORS = {
  'Active': 'bg-green-100 text-green-800',
  'Idle': 'bg-yellow-100 text-yellow-800',
  'On Leave': 'bg-blue-100 text-blue-800',
  'Offline': 'bg-red-100 text-red-800'
};

export const AVATAR_COLORS = {
  1: 'bg-blue-500',
  2: 'bg-green-500',
  3: 'bg-purple-500',
  4: 'bg-orange-500',
  5: 'bg-pink-500'
};
