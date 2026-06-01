'use client';

import { FiPackage, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { LuBuilding2 } from 'react-icons/lu';
import { RiUserSettingsLine } from 'react-icons/ri';
import { PiArrowRight } from 'react-icons/pi';

export default function CoreModules() {
  const modules = [
    {
      id: 'subscription',
      label: 'Subscription Plans',
      icon: FiPackage,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      description: 'Add, edit, and manage subscription tiers.',
      details: '4 Active Plans',
      action: 'Manage Plans'
    },
    {
      id: 'vendors',
      label: 'Vendors / Tenants',
      icon: LuBuilding2,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      description: 'Create, update, and delete vendor accounts.',
      details: '156 Vendors',
      action: 'Manage Vendors'
    },
    {
      id: 'franchise',
      label: 'Franchise Management',
      icon: FiTrendingUp,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      description: 'Oversee franchise operations and requests.',
      details: '23 Franchises',
      action: 'Manage Franchises'
    },
    {
      id: 'prime-admins',
      label: 'Prime Admins',
      icon: RiUserSettingsLine,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      description: 'Creator, Accountant, IT Services management.',
      details: '3 Prime Admins',
      action: 'Manage Admins'
    },
    {
      id: 'recruiters',
      label: 'Recruiters',
      icon: FiUsers,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      description: 'Create, update, and delete recruiter profiles.',
      details: '3,421 Recruiters',
      action: 'Manage Recruiters'
    }
  ];

  return (
    <div>
      <h1 className='text-2xl font-family-inter font-weight-500 text-[#0A0A0A] mb-3'>Core Modules</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {modules.map((module) => (
          <div key={module.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 text-left">
            {/* First Row - Icon */}
            <div className="flex flex-col items-start mb-4">
              <div className={`w-12 h-12 rounded-lg ${module.iconBg} flex items-center justify-center mr-3`}>
                <module.icon className={`w-6 h-6 ${module.iconColor}`} />
              </div>
              <div className="flex flex-col mt-3 gap-2">
                <h3 className="text-lg font-family-inter font-weight-500 text-[#0A0A0A]">{module.label}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
              </div>
            </div>
            <div className='border-t border-gray-200 flex-1 '></div>

            {/* Second Row - Details and Action */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-500">{module.details}</span>
              <button className="text-black hover:text-blue-700 font-medium text-sm flex items-center">
                {module.action}
                <PiArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        {/* Empty grid items for proper spacing */}
        <div className="hidden lg:block"></div>
        <div className="hidden lg:block"></div>
        <div className="hidden lg:block"></div>
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
}
