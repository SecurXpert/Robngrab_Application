'use client';

export default function CoreModules() {
  const modules = [
    { 
      id: 'subscription', 
      label: 'Subscription Plans', 
      icon: '💳', 
      description: 'Add, edit, and manage subscription tiers.', 
      details: '4 Active Plans', 
      action: 'Manage Plans' 
    },
    { 
      id: 'vendors', 
      label: 'Vendors / Tenants', 
      icon: '🏢', 
      description: 'Create, update, and delete vendor accounts.', 
      details: '156 Vendors', 
      action: 'Manage Vendors' 
    },
    { 
      id: 'franchise', 
      label: 'Franchise Management', 
      icon: '🌍', 
      description: 'Oversee franchise operations and requests.', 
      details: '23 Franchises', 
      action: 'Manage Franchises' 
    },
    { 
      id: 'prime-admins', 
      label: 'Prime Admins', 
      icon: '👔', 
      description: 'Creator, Accountant, IT Services management.', 
      details: '3 Prime Admins', 
      action: 'Manage Admins' 
    },
    { 
      id: 'recruiters', 
      label: 'Recruiters', 
      icon: '💼', 
      description: 'Create, update, and delete recruiter profiles.', 
      details: '3,421 Recruiters', 
      action: 'Manage Recruiters' 
    },
    { 
      id: 'payments', 
      label: 'Payments', 
      icon: '💰', 
      description: 'Track and manage payment transactions.', 
      details: '2,847 Transactions', 
      action: 'Manage Payments' 
    },
    { 
      id: 'cold-data', 
      label: 'Cold Data', 
      icon: '❄️', 
      description: 'Analyze and manage inactive data.', 
      details: '1,234 Records', 
      action: 'Manage Data' 
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {modules.slice(0, 4).map((module) => (
        <div key={module.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <span className="text-2xl mr-3">{module.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{module.label}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{module.details}</span>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              {module.action} →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
