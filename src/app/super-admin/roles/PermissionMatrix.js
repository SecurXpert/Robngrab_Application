'use client';

import React from 'react';
import { FaCheck, FaCircle } from 'react-icons/fa';

export default function PermissionMatrix({ roles }) {
  const permissionCategories = [
    {
      title: 'User Management',
      permissions: [
        { key: 'create', label: 'Create Users' },
        { key: 'edit', label: 'Edit Users' },
        { key: 'delete', label: 'Delete Users' },
        { key: 'view', label: 'View Users' }
      ]
    },
    {
      title: 'Vendor Management',
      permissions: [
        { key: 'create', label: 'Create Vendors' },
        { key: 'edit', label: 'Edit Vendors' },
        { key: 'delete', label: 'Delete Vendors' },
        { key: 'fullAccess', label: 'Full Vendor Access' }
      ]
    },
    {
      title: 'Financial',
      permissions: [
        { key: 'viewData', label: 'View Financial Data' },
        { key: 'manageSubscriptions', label: 'Manage Subscriptions' },
        { key: 'generateReports', label: 'Generate Reports' },
        { key: 'approvePayments', label: 'Approve Payments' }
      ]
    },
    {
      title: 'System',
      permissions: [
        { key: 'settings', label: 'System Settings' },
        { key: 'securityLogs', label: 'Security Logs' },
        { key: 'technicalSupport', label: 'Technical Support' }
      ]
    }
  ];

  const getPermissionValue = (role, category, permissionKey) => {
    return role.permissions[category.toLowerCase()]?.[permissionKey] || false;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Permission Matrix</h2>
      </div>
      
      <div className="overflow-x-auto">
        <div className="min-w-[600px] sm:min-w-full">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permission
                </th>
                {roles.map((role) => (
                  <th key={role.id} className="px-4 sm:px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    <div className="hidden sm:block">{role.title}</div>
                    <div className="sm:hidden">
                      {role.title.split(' ')[0]}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {permissionCategories.map((category) => (
                <React.Fragment key={category.title}>
                  {category.permissions.map((permission, index) => (
                    <tr key={`${category.title}-${permission.key}`} className={index === 0 ? 'bg-gray-50/50' : ''}>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-900">
                        <div className={index === 0 ? 'font-semibold' : ''}>
                          {index === 0 && (
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                              {category.title}
                            </div>
                          )}
                          <div className="hidden sm:block">{permission.label}</div>
                          <div className="sm:hidden text-xs">
                            {permission.label.replace('Create ', '').replace('Edit ', '').replace('Delete ', '').replace('View ', '').replace('Full ', '').replace('Manage ', '').replace('Generate ', '').replace('Approve ', '').replace('System ', '').replace('Security ', '').replace('Technical ', '')}
                          </div>
                        </div>
                      </td>
                      {roles.map((role) => {
                        const hasPermission = getPermissionValue(role, category.title.toLowerCase().replace(' ', ''), permission.key);
                        return (
                          <td key={role.id} className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                            {hasPermission ? (
                              <div className="flex justify-center">
                                <FaCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                              </div>
                            ) : (
                              <div className="flex justify-center">
                                <FaCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
