export const INITIAL_ADMIN_DATA = {
  "Prime Creator": [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@robngrab.com",
      role: "Prime Creator",
      status: "Active",
      createdDate: "Jan 15, 2025",
      lastLogin: "2 hours ago",
    },
    {
      id: 2,
      name: "Robert Williams",
      email: "robert@robngrab.com",
      role: "Prime Creator",
      status: "Active",
      createdDate: "Feb 5, 2025",
      lastLogin: "1 day ago",
    },
  ],
  "Prime Accountant": [
    {
      id: 3,
      name: "Michael Chen",
      email: "michael@robngrab.com",
      role: "Prime Accountant",
      status: "Active",
      createdDate: "Jan 12, 2025",
      lastLogin: "1 day ago",
    },
  ],
  "Prime IT Services": [
    {
      id: 4,
      name: "David Kumar",
      email: "david@robngrab.com",
      role: "Prime IT Services",
      status: "Active",
      createdDate: "Jan 8, 2025",
      lastLogin: "30 min ago",
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      email: "emily@robngrab.com",
      role: "Prime IT Services",
      status: "Active",
      createdDate: "Feb 1, 2025",
      lastLogin: "3 hours ago",
    },
  ],
};

export const EMPTY_FORM = {
  fullName: "",
  email: "",
  roleType: "Prime Creator",
  permissions: {
    createVendors: false,
    editVendors: false,
    deleteVendors: false,
    manageSubscriptions: false,
    accessBilling: false,
    viewAuditLogs: false,
    manageFranchises: false,
    systemConfiguration: false,
  },
  requireApproval: false,
};

export const PERMISSIONS_LIST = [
  { key: "createVendors", label: "Create Vendors" },
  { key: "editVendors", label: "Edit Vendors" },
  { key: "deleteVendors", label: "Delete Vendors" },
  { key: "manageSubscriptions", label: "Manage Subscriptions" },
  { key: "accessBilling", label: "Access Billing" },
  { key: "viewAuditLogs", label: "View Audit Logs" },
  { key: "manageFranchises", label: "Manage Franchises" },
  { key: "systemConfiguration", label: "System Configuration" },
];

export const TABS = ["Prime Creator", "Prime Accountant", "Prime IT Services"];

// For backward compatibility (if needed)
export const MOCK_ADMIN_DATA = {
  fullName: 'Sarah Johnson',
  emailAddress: 'sarah@robngrab.com',
  roleType: 'Prime Creator',
  permissions: {
    createVendors: true,
    editVendors: true,
    deleteVendors: false,
    manageSubscriptions: true,
    accessBilling: true,
    viewAuditLogs: true,
    manageFranchises: false,
    systemConfiguration: true
  },
  requireApproval: true
};

export const ROLE_OPTIONS = TABS;
