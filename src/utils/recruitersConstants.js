// Recruiters Management Constants

export const SAMPLE_RECRUITERS = [
  {
    id: 1,
    name: "John Smith",
    company: "TechCorp Inc.",
    email: "john@techcorp.com",
    phone: "+1 (555) 123-4567",
    plan: "Professional Plan",
    status: "Active",
    jobs: 8,
    lastLogin: "2 hours ago",
    totalPlacements: 24,
    revenue: "$124,500",
    joinedDate: "Jan 15, 2024",
    totalJobPosts: 35,
    successfulPlacements: 24,
    placementRate: "69%",
    avgTimeToFill: "18 days",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Global Staffing Ltd.",
    email: "sarah@globaltalent.com",
    phone: "+1 (555) 234-5678",
    plan: "Enterprise Plan",
    status: "Active",
    jobs: 12,
    lastLogin: "1 day ago",
    totalPlacements: 42,
    revenue: "$215,000",
    joinedDate: "Dec 10, 2023",
    totalJobPosts: 58,
    successfulPlacements: 42,
    placementRate: "72%",
    avgTimeToFill: "15 days",
  },
  {
    id: 3,
    name: "Michael Davis",
    company: "HireSmart Solutions",
    email: "michael@hiresmart.com",
    phone: "+1 (555) 345-6789",
    plan: "Basic Plan",
    status: "Pending",
    jobs: 3,
    lastLogin: "3 days ago",
    totalPlacements: 8,
    revenue: "$32,000",
    joinedDate: "Nov 10, 2023",
    totalJobPosts: 12,
    successfulPlacements: 8,
    placementRate: "67%",
    avgTimeToFill: "22 days",
  },
  {
    id: 4,
    name: "Emily Chen",
    company: "Talent Finders Ltd.",
    email: "emily@talentfinders.com",
    phone: "+1 (555) 456-7890",
    plan: "Professional Plan",
    status: "Suspended",
    jobs: 0,
    lastLogin: "30 min ago",
    totalPlacements: 15,
    revenue: "$78,500",
    joinedDate: "Aug 05, 2023",
    totalJobPosts: 28,
    successfulPlacements: 15,
    placementRate: "54%",
    avgTimeToFill: "19 days",
  },
];

export const EMPTY_FORM = {
  name: "",
  company: "",
  email: "",
  phone: "",
  plan: "",
  status: "Pending",
  jobs: 0,
  notes: "",
};

export const SUBSCRIPTION_PLANS = [
  "Basic Plan",
  "Professional Plan", 
  "Enterprise Plan"
];

export const STATUS_OPTIONS = [
  "Pending",
  "Active", 
  "Suspended"
];

export const STATUS_COLORS = {
  "Active": "bg-green-100 text-green-700",
  "Pending": "bg-orange-100 text-orange-700",
  "Suspended": "bg-red-100 text-red-700",
  "default": "bg-gray-100 text-gray-700"
};
