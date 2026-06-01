export const APPLICATIONS = [
  {
    id: 1,
    jobTitle: "Senior UX Designer",
    company: "Airbnb",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $140,000",
    appliedDate: "18 Sep 2023",
    status: "On Hold",
    logoColor: "bg-red-500",
  },
  {
    id: 2,
    jobTitle: "Senior Product Designer",
    company: "Stripe",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $150,000",
    appliedDate: "15 Sep 2023",
    status: "Interview Completed",
    logoColor: "bg-purple-500",
  },
  {
    id: 3,
    jobTitle: "UI/UX Designer",
    company: "Spotify",
    location: "Stockholm, Sweden",
    type: "Full-time",
    salary: "$110,000 - $130,000",
    appliedDate: "12 Sep 2023",
    status: "Under Review",
    logoColor: "bg-green-500",
  },
  {
    id: 4,
    jobTitle: "Frontend Engineer",
    company: "Figma",
    location: "London, UK",
    type: "Full-time",
    salary: "$100,000 - $120,000",
    appliedDate: "10 Sep 2023",
    status: "Offer Made",
    logoColor: "bg-orange-500",
  },
  {
    id: 5,
    jobTitle: "Creative Director",
    company: "Netflix",
    location: "Los Gatos, CA",
    type: "Full-time",
    salary: "$150,000 - $180,000",
    appliedDate: "08 Sep 2023",
    status: "Withdrawn",
    logoColor: "bg-red-600",
  },
  {
    id: 6,
    jobTitle: "UX Researcher",
    company: "Notion",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$95,000 - $115,000",
    appliedDate: "05 Sep 2023",
    status: "Under Review",
    logoColor: "bg-gray-800",
  },
  {
    id: 7,
    jobTitle: "Design Systems Lead",
    company: "Linear",
    location: "Remote",
    type: "Full-time",
    salary: "$115,000 - $135,000",
    appliedDate: "01 Sep 2023",
    status: "Interview Scheduled",
    logoColor: "bg-indigo-600",
  },
  {
    id: 8,
    jobTitle: "Product Designer",
    company: "Vercel",
    location: "Remote",
    type: "Full-time",
    salary: "$125,000 - $145,000",
    appliedDate: "22 Aug 2023",
    status: "Rejected",
    logoColor: "bg-black",
  },
];

export const STATUS_CONFIG = {
  "On Hold": {
    bg: "bg-[#FFF4E6]",
    text: "text-[#A65F00]",
    icon: "/Assets/Home/Pause.svg",
    color: "bg-yellow-400",
  },
  "Interview Completed": {
    bg: "bg-[#FFE5CC]",
    text: "text-[#CA3500]",
    icon: "/Assets/Home/Statustick.svg",
    color: "bg-green-400",
  },
  "Under Review": {
    bg: "bg-[#E6EFF9]",
    text: "text-[#1447E6]",
    icon: "/Assets/Home/Clock.svg",
    color: "bg-blue-400",
  },
  "Offer Made": {
    bg: "bg-[#E8F5E8]",
    text: "text-[#059669]",
    icon: "/Assets/Home/Statusoffer.svg",
    color: "bg-emerald-400",
  },
  Withdrawn: {
    bg: "bg-[#E8E8EB]",
    text: "text-[#364153]",
    icon: "/Assets/Home/Withdrawn.svg",
    color: "bg-gray-400",
  },
  "Interview Scheduled": {
    bg: "bg-[#FFE5CC]",
    text: "text-[#CA3500]",
    icon: "/Assets/Home/Statusschedule.svg",
    color: "bg-orange-400",
  },
  Rejected: {
    bg: "bg-[#FFE5E5]",
    text: "text-[#DC2626]",
    icon: "/Assets/Home/Statusreject.svg",
    color: "bg-red-400",
  },
};

export const INITIAL_FILTERS = {
  companies: [],
  statuses: [],
  sortField: "Date Applied",
  sortOrder: "Newest First",
  dateRange: "all",
  customStartDate: "2025-01-01",
  customEndDate: "2026-12-31",
};

export const STATUS_FILTERS = [
  { key: "all", label: "All", color: "bg-gray-400" },
  { key: "under review", label: "Under Review", color: "bg-blue-400" },
  {
    key: "interview scheduled",
    label: "Interview Scheduled",
    color: "bg-orange-400",
  },
  {
    key: "interview completed",
    label: "Interview Completed",
    color: "bg-green-400",
  },
  { key: "offer made", label: "Offer Made", color: "bg-emerald-400" },
  { key: "rejected", label: "Rejected", color: "bg-red-400" },
  { key: "withdrawn", label: "Withdrawn", color: "bg-gray-400" },
  { key: "on hold", label: "On Hold", color: "bg-yellow-400" },
];

export const STATUS_DETAILS = {
  'Airbnb': {
    lastUpdated: '26 Sep 2023, 11:20 AM',
    timeline: [
      { stage: 'Applied', date: '18 Sep 2023', completed: true },
      { stage: 'Under Review', date: '20 Sep 2023', completed: true },
      { stage: 'On Hold', date: '26 Sep 2023', completed: true, current: true }
    ],
    recruiterActivity: [
      'Hiring for this position has been temporarily paused',
      'Your application remains in our active pipeline',
      'We will reach out when the position reopens'
    ],
    nextStep: "No action needed at this time. We'll contact you with updates",
    actions: [
      { label: 'Withdraw Application', type: 'danger' }
    ]
  },
  'Stripe': {
    lastUpdated: '28 Sep 2023, 3:20 PM',
    timeline: [
      { stage: 'Applied', date: '15 Sep 2023', completed: true },
      { stage: 'Under Review', date: '17 Sep 2023', completed: true },
      { stage: 'Interview Scheduled', date: '20 Sep 2023', completed: true },
      { stage: 'Interview Completed', date: '28 Sep 2023', completed: true, current: true },
      { stage: 'Offer Decision', date: '', completed: false }
    ],
    recruiterActivity: [
      'Recruiter has reviewed your interview feedback',
      'Hiring manager is preparing final assessment',
      'Awaiting next round decision'
    ],
    nextStep: "You may receive an update within 3–5 working days",
    actions: [
      { label: 'View Interview Details', type: 'primary' },
      { label: 'Withdraw Application', type: 'danger' }
    ]
  },
  'Spotify': {
    lastUpdated: '14 Sep 2023, 1:15 PM',
    timeline: [
      { stage: 'Applied', date: '12 Sep 2023', completed: true },
      { stage: 'Under Review', date: '14 Sep 2023', completed: true, current: true },
      { stage: 'Screening', date: '', completed: false },
      { stage: 'Interview', date: '', completed: false },
      { stage: 'Decision', date: '', completed: false }
    ],
    recruiterActivity: [
      'Your application is being reviewed by the hiring team',
      'We received a high volume of applications'
    ],
    nextStep: "You should hear back within 2 weeks",
    actions: [
      { label: 'Withdraw Application', type: 'danger' }
    ]
  },
  'Figma': {
    lastUpdated: '29 Sep 2023, 10:15 AM',
    timeline: [
      { stage: 'Applied', date: '10 Sep 2023', completed: true },
      { stage: 'Under Review', date: '12 Sep 2023', completed: true },
      { stage: 'Interview Scheduled', date: '15 Sep 2023', completed: true },
      { stage: 'Interview Completed', date: '22 Sep 2023', completed: true },
      { stage: 'Offer Made', date: '29 Sep 2023', completed: true, current: true }
    ],
    recruiterActivity: [
      'Offer letter has been sent to your email',
      'Compensation package details available',
      'Recruiter is available for any questions'
    ],
    nextStep: "Please review the offer and respond within 7 days",
    actions: [
      { label: 'Accept Offer', type: 'primary' },
      { label: 'View Offer Details', type: 'secondary' },
      { label: 'Reject Offer', type: 'danger' }
    ]
  },
  'Netflix': {
    lastUpdated: '16 Sep 2023, 5:00 PM',
    timeline: [
      { stage: 'Applied', date: '08 Sep 2023', completed: true },
      { stage: 'Under Review', date: '10 Sep 2023', completed: true },
      { stage: 'Withdrawn', date: '16 Sep 2023', completed: true, current: true }
    ],
    recruiterActivity: [
      'You have withdrawn your application',
      'Application process has been closed'
    ],
    nextStep: "You are welcome to apply for other positions",
    actions: []
  },
  'Notion': {
    lastUpdated: '07 Sep 2023, 1:15 PM',
    timeline: [
      { stage: 'Applied', date: '05 Sep 2023', completed: true },
      { stage: 'Under Review', date: '07 Sep 2023', completed: true, current: true },
      { stage: 'Screening', date: '', completed: false },
      { stage: 'Interview', date: '', completed: false },
      { stage: 'Decision', date: '', completed: false }
    ],
    recruiterActivity: [
      'Your application is being reviewed by the hiring team',
      'We received a high volume of applications'
    ],
    nextStep: "You should hear back within 2 weeks",
    actions: [
      { label: 'Withdraw Application', type: 'danger' }
    ]
  },
  'Linear': {
    lastUpdated: '25 Sep 2023, 9:00 AM',
    timeline: [
      { stage: 'Applied', date: '01 Sep 2023', completed: true },
      { stage: 'Under Review', date: '03 Sep 2023', completed: true },
      { stage: 'Interview Scheduled', date: '25 Sep 2023', completed: true, current: true },
      { stage: 'Interview Rounds', date: '', completed: false },
      { stage: 'Offer Decision', date: '', completed: false }
    ],
    recruiterActivity: [
      'First round interview scheduled for Oct 2, 2023 at 2:00 PM',
      'Calendar invite sent to your email',
      'Interview will be with the Design Team Lead'
    ],
    nextStep: "Prepare for your upcoming interview on Oct 2, 2023",
    actions: [
      { label: 'View Interview Details', type: 'primary' },
      { label: 'Reschedule', type: 'secondary' },
      { label: 'Withdraw Application', type: 'danger' }
    ]
  },
  'Vercel': {
    lastUpdated: '30 Aug 2023, 4:30 PM',
    timeline: [
      { stage: 'Applied', date: '22 Aug 2023', completed: true },
      { stage: 'Under Review', date: '24 Aug 2023', completed: true },
      { stage: 'Application Review Complete', date: '30 Aug 2023', completed: true, current: true }
    ],
    recruiterActivity: [
      'Application has been carefully reviewed',
      'Team decided to move forward with other candidates'
    ],
    nextStep: "We encourage you to apply for future opportunities",
    actions: [
      { label: 'View Feedback', type: 'secondary' }
    ]
  }
};
