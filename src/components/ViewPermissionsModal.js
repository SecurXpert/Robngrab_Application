'use client';

import { useState } from 'react';

export default function ViewPermissionsModal({ isOpen, onClose, role }) {
  const [activeTab, setActiveTab] = useState('permissions');

  if (!isOpen || !role) return null;

  const permissionDetails = {
    'User Management': {
      description: 'Manage user accounts, roles, and access control',
      features: [
        'Create and delete user accounts',
        'Assign roles and permissions',
        'Manage user profiles',
        'Reset user passwords',
        'View user activity logs'
      ]
    },
    'Vendor Management': {
      description: 'Oversee vendor relationships and operations',
      features: [
        'Create and update vendor profiles',
        'Approve vendor applications',
        'Manage vendor contracts',
        'Monitor vendor performance',
        'Generate vendor reports'
      ]
    },
    'Financial': {
      description: 'Handle financial operations and reporting',
      features: [
        'Process payments and transactions',
        'Generate financial reports',
        'Manage billing cycles',
        'Track revenue and expenses',
        'Audit financial records'
      ]
    },
    'System': {
      description: 'Manage IT infrastructure and system settings',
      features: [
        'Configure system settings',
        'Manage database operations',
        'Monitor system performance',
        'Handle backup and recovery',
        'Manage API integrations'
      ]
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">{role.name}</h2>
            <p className="text-sm text-gray-600">{role.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Role Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600">{role.users}</div>
            <div className="text-sm text-blue-700">Users Assigned</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600">{role.permissions.length}</div>
            <div className="text-sm text-green-700">Permissions</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-600">
              {role.protected ? 'Protected' : 'Editable'}
            </div>
            <div className="text-sm text-purple-700">Role Status</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 border-b">
          <button
            onClick={() => setActiveTab('permissions')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'permissions'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Permissions
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'users'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Assigned Users
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'activity'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Activity Log
          </button>
        </div>

        {/* Permissions Tab */}
        {activeTab === 'permissions' && (
          <div className="space-y-4">
            {role.permissions.map((permission, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{permission}</h3>
                    <p className="text-sm text-gray-600">{permissionDetails[permission]?.description}</p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                    Active
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700 mb-2">Features:</div>
                  <ul className="space-y-1">
                    {permissionDetails[permission]?.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">👥</div>
              <div className="text-lg font-medium mb-1">No users assigned yet</div>
              <div className="text-sm">Users with this role will appear here</div>
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">📋</div>
              <div className="text-lg font-medium mb-1">No recent activity</div>
              <div className="text-sm">Recent actions for this role will appear here</div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          {!role.protected && (
            <>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Edit Role
              </button>
              <button className="px-6 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium">
                Delete Role
              </button>
            </>
          )}
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
