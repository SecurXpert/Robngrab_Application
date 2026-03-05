'use client';

import { FaCube, FaBuilding, FaChartLine, FaUserTie, FaUsers, FaCreditCard, FaSnowflake } from 'react-icons/fa';

export default function CoreModules() {
  const modules = [
    {
      id: 'subscription',
      label: 'Subscription Plans',
      icon: FaCube,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      description: 'Add, edit, and manage subscription tiers.',
      details: '4 Active Plans',
      action: 'Manage Plans'
    },
    {
      id: 'vendors',
      label: 'Vendors / Tenants',
      icon: FaBuilding,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      description: 'Create, update, and delete vendor accounts.',
      details: '156 Vendors',
      action: 'Manage Vendors'
    },
    {
      id: 'franchise',
      label: 'Franchise Management',
      icon: FaChartLine,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      description: 'Oversee franchise operations and requests.',
      details: '23 Franchises',
      action: 'Manage Franchises'
    },
    {
      id: 'prime-admins',
      label: 'Prime Admins',
      icon: FaUserTie,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      description: 'Creator, Accountant, IT Services management.',
      details: '3 Prime Admins',
      action: 'Manage Admins'
    },
    {
      id: 'recruiters',
      label: 'Recruiters',
      icon: FaUsers,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      description: 'Create, update, and delete recruiter profiles.',
      details: '3,421 Recruiters',
      action: 'Manage Recruiters'
    }
  ];

  return (
    <div>
      <h1 className='text-2xl  font-semibold text-gray-700 mb-3'>Core Modules</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {modules.map((module) => (
        <div key={module.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          {/* First Row - Icon */}
          <div className="flex flex-col items-left mb-4">
            <div className={`w-12 h-12 rounded-lg ${module.iconBg} flex items-center justify-center mr-3`}>
              <module.icon className={`w-6 h-6 ${module.iconColor}`} />
            </div>
            <div className="flex-1 mt-3">
              <h3 className="text-lg font-semibold text-gray-800">{module.label}</h3>
              <p className="text-sm text-gray-600">{module.description}</p>
            </div>
          </div>
          
          {/* Second Row - Details and Action */}
          <div className="flex items-center justify-between mt-10">
            <span className="text-sm text-gray-500">{module.details}</span>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
              {module.action}
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
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
