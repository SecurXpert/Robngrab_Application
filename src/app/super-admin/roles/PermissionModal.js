'use client';

import { useState } from 'react';
import { FaCheck, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

export default function PermissionModal({ role, isOpen, onClose, onSave }) {
  if (!isOpen) return null;

  const [permissions, setPermissions] = useState(role.permissions);

  const handlePermissionChange = (category, permission) => {
    setPermissions(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [permission]: !prev[category][permission]
      }
    }));
  };

  const getSelectedCount = () => {
    let count = 0;
    Object.values(permissions).forEach(category => {
      Object.values(category).forEach(value => {
        if (value) count++;
      });
    });
    return count;
  };

  const handleSave = () => {
    onSave(role.id, permissions);
    onClose();
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="max-w-xl bg-white rounded-xl shadow-xl  w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl border-2 ${role.iconColor} bg-white flex items-center justify-center shadow-sm`}>
                <FaShieldAlt className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{role.title}</h2>
                <p className="text-gray-600 text-sm">{role.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <FaUsers className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{role.usersAssigned} users assigned</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <IoMdClose className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Permissions Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Assigned Permissions</h3>
            <p className="text-sm text-gray-600">{getSelectedCount()} permissions selected</p>
          </div>

          <div className="space-y-6">
            {/* Row 1: User Management */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-sm">User Management</h4>
              <div className="grid grid-cols-2 gap-3 ">
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.userManagement.create}
                    onChange={() => handlePermissionChange('userManagement', 'create')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">Create Users</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.userManagement.edit}
                    onChange={() => handlePermissionChange('userManagement', 'edit')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">Edit Users</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.userManagement.delete}
                    onChange={() => handlePermissionChange('userManagement', 'delete')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">Delete Users</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.userManagement.view}
                    onChange={() => handlePermissionChange('userManagement', 'view')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">View Users</span>
                </label>
              </div>
            </div>

            {/* Row 2: Vendor Management */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-sm">Vendor Management</h4>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.vendorManagement.create}
                    onChange={() => handlePermissionChange('vendorManagement', 'create')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">Create Vendors</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.vendorManagement.edit}
                    onChange={() => handlePermissionChange('vendorManagement', 'edit')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">Edit Vendors</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.vendorManagement.delete}
                    onChange={() => handlePermissionChange('vendorManagement', 'delete')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">Delete Vendors</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.vendorManagement.fullAccess}
                    onChange={() => handlePermissionChange('vendorManagement', 'fullAccess')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">Full Access</span>
                </label>
              </div>
            </div>

            {/* Row 3: Financial */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-sm">Financial</h4>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.financial.viewData}
                    onChange={() => handlePermissionChange('financial', 'viewData')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">View Data</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.financial.manageSubscriptions}
                    onChange={() => handlePermissionChange('financial', 'manageSubscriptions')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">Manage Subs</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.financial.generateReports}
                    onChange={() => handlePermissionChange('financial', 'generateReports')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">Generate Reports</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.financial.approvePayments}
                    onChange={() => handlePermissionChange('financial', 'approvePayments')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">Approve Payments</span>
                </label>
              </div>
            </div>

            {/* Row 4: System */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-sm">System</h4>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.system.settings}
                    onChange={() => handlePermissionChange('system', 'settings')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">Settings</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.system.securityLogs}
                    onChange={() => handlePermissionChange('system', 'securityLogs')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">Security Logs</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={permissions.system.technicalSupport}
                    onChange={() => handlePermissionChange('system', 'technicalSupport')}
                    className="w-4 h-4 appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 peer"
                  />
                  <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
                  <span className="text-sm text-gray-700 ml-6">Tech Support</span>
                </label>
                <div></div> {/* Empty space for 2x2 grid */}
              </div>
            </div>
            <div className="mb-4">
            <p className="text-sm text-gray-600">
              Changes will affect all {role.usersAssigned} users currently assigned to this role.
            </p>
          </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-row gap-3 border-t border-gray-200 p-6 bg-gray-50">
          
          <div className="flex gap-3 w-full justify-center">
            <button
              onClick={onClose}
              className="flex-1 max-w-xs px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 max-w-xs px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
