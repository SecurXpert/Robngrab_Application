'use client';

import { RiUserSettingsLine } from 'react-icons/ri';
import { FiPackage, FiActivity } from 'react-icons/fi';
import { LuBuilding2 } from 'react-icons/lu';
import { PiArrowRight } from 'react-icons/pi';

export default function QuickActions() {
  const actions = [
    {
      id: 1,
      icon: RiUserSettingsLine,
      iconColor: 'text-black',
      title: 'Role Management',
      description: 'Manage user roles and permissions'
    },
    {
      id: 2,
      icon: FiActivity,
      iconColor: 'text-purple-600',
      title: 'View Audit Logs',
      description: 'Check system activity and logs'
    },
    {
      id: 3,
      icon: FiPackage,
      iconColor: 'text-green-600',
      title: 'Create Subscription',
      description: 'Add new subscription plans'
    },
    {
      id: 4,
      icon: LuBuilding2,
      iconColor: 'text-orange-600',
      title: 'Add Vendor',
      description: 'Register new vendor accounts'
    }
  ];

  return (
    <div className="bg-white h-full overflow-y-auto rounded-xl shadow-sm p-6 border border-gray-200 text-left">
      <h3 className="text-lg font-family-inter font-weight-500 text-[#0A0A0A] mb-4">Quick Actions</h3>

      <div className="space-y-5">
        {actions.map((action) => (
          <button
            key={action.id}
            className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-lg ${action.id === 1 ? 'bg-gray-100' : action.iconColor.replace('text', 'bg').replace('600', '100')} flex items-center justify-center mr-3`}>
                <action.icon className={`w-5 h-5 ${action.iconColor}`} />
              </div>
              <div className="text-left">
                <div className="text-md font-family-inter font-weight-500 text-[#0A0A0A]">{action.title}</div>
              </div>
            </div>
            <PiArrowRight className="w-4 h-4 text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
}
