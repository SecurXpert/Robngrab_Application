'use client';

import { FaUserTag, FaClipboardList, FaPlusCircle, FaStore } from 'react-icons/fa';

export default function QuickActions() {
  const actions = [
    {
      id: 1,
      icon: FaUserTag,
      iconColor: 'text-blue-600',
      title: 'Role Management',
      description: 'Manage user roles and permissions'
    },
    {
      id: 2,
      icon: FaClipboardList,
      iconColor: 'text-green-600',
      title: 'View Audit Logs',
      description: 'Check system activity and logs'
    },
    {
      id: 3,
      icon: FaPlusCircle,
      iconColor: 'text-purple-600',
      title: 'Create Subscription',
      description: 'Add new subscription plans'
    },
    {
      id: 4,
      icon: FaStore,
      iconColor: 'text-orange-600',
      title: 'Add Vendor',
      description: 'Register new vendor accounts'
    }
  ];

  return (
    <div className="bg-white h-full overflow-y-auto rounded-xl shadow-sm p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
      
      <div className="space-y-5">
        {actions.map((action) => (
          <button
            key={action.id}
            className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-lg ${action.iconColor.replace('text', 'bg').replace('600', '100')} flex items-center justify-center mr-3`}>
                <action.icon className={`w-5 h-5 ${action.iconColor}`} />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-800">{action.title}</div>
              </div>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
