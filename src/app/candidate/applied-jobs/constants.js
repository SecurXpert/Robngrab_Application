export const APPLICATIONS = [
  {
    id: 1,
    jobTitle: 'Senior UX Designer',
    company: 'Facebook',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    salary: '$100,000 - $120,000',
    appliedDate: '2024-02-15',
    status: 'Offer Made',
    logoColor: 'bg-blue-500'
  },
  {
    id: 2,
    jobTitle: 'Product Manager',
    company: 'Google',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$130,000 - $150,000',
    appliedDate: '2024-02-10',
    status: 'Under Review',
    logoColor: 'bg-red-500'
  },
  {
    id: 3,
    jobTitle: 'Frontend Developer',
    company: 'Tech Corp',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90,000 - $110,000',
    appliedDate: '2024-02-05',
    status: 'Rejected',
    logoColor: 'bg-green-500'
  },
  {
    id: 4,
    jobTitle: 'Data Analyst',
    company: 'Amazon',
    location: 'Seattle, WA',
    type: 'Part-time',
    salary: '$85,000 - $95,000',
    appliedDate: '2024-01-28',
    status: 'Offer Made',
    logoColor: 'bg-orange-500'
  },
  {
    id: 5,
    jobTitle: 'Marketing Specialist',
    company: 'Microsoft',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$75,000 - $90,000',
    appliedDate: '2024-01-20',
    status: 'On Hold',
    logoColor: 'bg-purple-500'
  },
  {
    id: 6,
    jobTitle: 'Backend Engineer',
    company: 'Apple',
    location: 'Cupertino, CA',
    type: 'Full-time',
    salary: '$120,000 - $140,000',
    appliedDate: '2024-01-15',
    status: 'Interview Completed',
    logoColor: 'bg-gray-500'
  },
  {
    id: 7,
    jobTitle: 'UI Designer',
    company: 'Adobe',
    location: 'San Jose, CA',
    type: 'Full-time',
    salary: '$95,000 - $115,000',
    appliedDate: '2024-01-10',
    status: 'Withdrawn',
    logoColor: 'bg-pink-500'
  },
  {
    id: 8,
    jobTitle: 'Full Stack Developer',
    company: 'Spotify',
    location: 'Stockholm, Sweden',
    type: 'Full-time',
    salary: '$110,000 - $130,000',
    appliedDate: '2024-01-05',
    status: 'Interview Scheduled',
    logoColor: 'bg-green-600'
  },
  {
    id: 9,
    jobTitle: 'DevOps Engineer',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    type: 'Full-time',
    salary: '$125,000 - $145,000',
    appliedDate: '2024-01-01',
    status: 'Rejected',
    logoColor: 'bg-red-600'
  }
];

export const STATUS_CONFIG = {
  'On Hold': { bg: 'bg-[#FFF4E6]', text: 'text-[#A65F00]', icon: '/assets/home/pause.svg', color: 'bg-yellow-400' },
  'Interview Completed': { bg: 'bg-[#FFE5CC]', text: 'text-[#CA3500]', icon: '/assets/home/statustick.svg', color: 'bg-green-400' },
  'Under Review': { bg: 'bg-[#E6EFF9]', text: 'text-[#1447E6]', icon: '/assets/home/clock.svg', color: 'bg-blue-400' },
  'Offer Made': { bg: 'bg-[#E8F5E8]', text: 'text-[#059669]', icon: '/assets/home/statusoffer.svg', color: 'bg-emerald-400' },
  'Withdrawn': { bg: 'bg-[#E8E8EB]', text: 'text-[#364153]', icon: '/assets/home/withdrawn.svg', color: 'bg-gray-400' },
  'Interview Scheduled': { bg: 'bg-[#FFE5CC]', text: 'text-[#CA3500]', icon: '/assets/home/statusschedule.svg', color: 'bg-orange-400' },
  'Rejected': { bg: 'bg-[#FFE5E5]', text: 'text-[#DC2626]', icon: '/assets/home/statusreject.svg', color: 'bg-red-400' }
};

export const INITIAL_FILTERS = {
  companies: [],
  statuses: [],
  sortField: 'Date Applied',
  sortOrder: 'Descending',
  dateRange: 'all',
  customStartDate: '',
  customEndDate: ''
};

export const STATUS_FILTERS = [
  { key: 'all', label: 'All', color: 'bg-gray-400' },
  { key: 'under review', label: 'Under Review', color: 'bg-blue-400' },
  { key: 'interview scheduled', label: 'Interview Scheduled', color: 'bg-orange-400' },
  { key: 'interview completed', label: 'Interview Completed', color: 'bg-green-400' },
  { key: 'offer made', label: 'Offer Made', color: 'bg-emerald-400' },
  { key: 'rejected', label: 'Rejected', color: 'bg-red-400' },
  { key: 'withdrawn', label: 'Withdrawn', color: 'bg-gray-400' },
  { key: 'on hold', label: 'On Hold', color: 'bg-yellow-400' }
];
