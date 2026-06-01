'use client';

import { useState, useEffect } from "react";
import { IoMdClose } from 'react-icons/io';
import PermissionSection from '@/app/super-admin/roles/Model/PermissionSection';
import { FaCheck } from 'react-icons/fa';

export default function CreateRoleModal({ isOpen, onClose, onSave }) {
  const [roleName, setRoleName] = useState('');
  const [description, setDescription] = useState('');
  const [permissions, setPermissions] = useState({
    userManagement: { create: false, edit: false, delete: false, view: false },
    vendorManagement: { create: false, edit: false, delete: false, fullAccess: false },
    financial: { viewData: false, manageSubscriptions: false, generateReports: false, approvePayments: false },
    system: { settings: false, securityLogs: false, technicalSupport: false, backupRestore: false }
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handlePermissionChange = (category, permission) => {
    setPermissions(prev => ({
      ...prev,
      [category]: { ...prev[category], [permission]: !prev[category][permission] }
    }));
  };

  const handleSave = () => {
    if (roleName.trim()) {
      onSave({ name: roleName.trim(), description: description.trim(), permissions });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="max-w-xl bg-white rounded-xl shadow-xl w-full max-h-[90vh] flex flex-col">
        <div className="p-4 flex items-start justify-between border-b">
          <h2 className="text-2xl font-semibold text-gray-900">Create New Role</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <IoMdClose className="w-5 h-5 text-[#364153]" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role Name</label>
              <input value={roleName} onChange={(e) => setRoleName(e.target.value)} placeholder="e.g., Content Manager" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Responsibilities..." rows={3} className="w-full px-4 py-2 border rounded-lg resize-none" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Assign Permissions</h3>
            <PermissionSection title="User Management" category="userManagement" permissions={permissions.userManagement} onChange={handlePermissionChange} />
            <PermissionSection title="Vendor Management" category="vendorManagement" permissions={permissions.vendorManagement} onChange={handlePermissionChange} />
            <PermissionSection title="Financial" category="financial" permissions={permissions.financial} onChange={handlePermissionChange} />
            <PermissionSection title="System" category="system" permissions={permissions.system} onChange={handlePermissionChange} />

            <div className="border rounded-lg p-4 bg-blue-50/50">
              <label className="flex items-center gap-2 cursor-pointer relative">
                <input
                  type="checkbox"
                  checked={permissions.requireApproval || false}
                  onChange={() => setPermissions(prev => ({ ...prev, requireApproval: !prev.requireApproval }))}
                  className="appearance-none rounded border-2 border-blue-200 focus:ring-blue-500 peer checked:bg-blue-600 checked:border-blue-600 transition-colors h-4 w-4"
                />
                <FaCheck className="w-3 h-3 absolute left-0.5 pointer-events-none hidden peer-checked:block text-white" />
                <span className="text-sm font-medium text-blue-900">Require Approval for critical actions</span>
              </label>
            </div>
          </div>
        </div>

        <div className="border-t p-6 bg-gray-50 rounded-b-xl flex gap-3">
          <button onClick={onClose} className="flex-1 py-2.5 bg-white border rounded-lg font-medium">Cancel</button>
          <button onClick={handleSave} className="flex-1 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
