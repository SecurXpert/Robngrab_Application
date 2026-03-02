'use client';

import { useState } from 'react';

export default function AddRoleModal({ isOpen, onClose, onAddRole }) {
  const [formData, setFormData] = useState({
    roleName: '',
    description: '',
    permissions: {
      userManagement: false,
      vendorManagement: false,
      financial: false,
      system: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePermissionChange = (permission) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permission]: !prev.permissions[permission]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.roleName.trim()) {
      onAddRole({
        id: formData.roleName.toLowerCase().replace(/\s+/g, '-'),
        name: formData.roleName,
        description: formData.description,
        users: 0,
        protected: false,
        permissions: Object.keys(formData.permissions)
          .filter(key => formData.permissions[key])
          .map(key => {
            const permissionMap = {
              userManagement: 'User Management',
              vendorManagement: 'Vendor Management',
              financial: 'Financial',
              system: 'System'
            };
            return permissionMap[key];
          })
      });
      
      // Reset form
      setFormData({
        roleName: '',
        description: '',
        permissions: {
          userManagement: false,
          vendorManagement: false,
          financial: false,
          system: false
        }
      });
      
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Add New Role</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Role Information */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role Name
            </label>
            <input
              type="text"
              name="roleName"
              value={formData.roleName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              placeholder="Enter role name"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              placeholder="Enter role description"
              rows="3"
              required
            />
          </div>

          {/* Permissions */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Permissions</h3>
            <div className="space-y-3">
              <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={formData.permissions.userManagement}
                  onChange={() => handlePermissionChange('userManagement')}
                  className="w-4 h-4 mr-3 accent-blue-500"
                />
                <div>
                  <div className="font-medium text-gray-800">User Management</div>
                  <div className="text-sm text-gray-500">Manage user accounts and permissions</div>
                </div>
              </label>

              <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={formData.permissions.vendorManagement}
                  onChange={() => handlePermissionChange('vendorManagement')}
                  className="w-4 h-4 mr-3 accent-blue-500"
                />
                <div>
                  <div className="font-medium text-gray-800">Vendor Management</div>
                  <div className="text-sm text-gray-500">Manage vendor relationships and operations</div>
                </div>
              </label>

              <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={formData.permissions.financial}
                  onChange={() => handlePermissionChange('financial')}
                  className="w-4 h-4 mr-3 accent-blue-500"
                />
                <div>
                  <div className="font-medium text-gray-800">Financial</div>
                  <div className="text-sm text-gray-500">Handle financial operations and reporting</div>
                </div>
              </label>

              <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={formData.permissions.system}
                  onChange={() => handlePermissionChange('system')}
                  className="w-4 h-4 mr-3 accent-blue-500"
                />
                <div>
                  <div className="font-medium text-gray-800">System</div>
                  <div className="text-sm text-gray-500">Manage IT infrastructure and system settings</div>
                </div>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Add Role
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
