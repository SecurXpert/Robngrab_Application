"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { FiUsers, FiShield } from "react-icons/fi";
import PermissionSection from '@/app/super-admin/roles/Model/PermissionSection';

export default function PermissionModal({ role, isOpen, onClose, onSave }) {
  const defaultPermissions = {
    userManagement: { create: false, edit: false, delete: false, view: false },
    vendorManagement: { create: false, edit: false, delete: false, fullAccess: false },
    financial: { viewData: false, manageSubscriptions: false, generateReports: false, approvePayments: false },
    system: { settings: false, securityLogs: false, technicalSupport: false, backupRestore: false }
  };

  const [permissions, setPermissions] = useState(role?.permissions || defaultPermissions);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !role) return null;

  const getShieldColor = (title) => {
    if (title.includes('Super Admin')) return { bg: 'bg-[#FEF2F2]', icon: '#E7000B' };
    if (title.includes('Prime Creator')) return { bg: 'bg-[#EFF6FF]', icon: '#155DFC' };
    if (title.includes('Prime Accountant')) return { bg: 'bg-[#F0FDF4]', icon: '#00A63E' };
    if (title.includes('Prime IT Services')) return { bg: 'bg-[#FAF5FF]', icon: '#9810FA' };
    if (title.includes('Vendor Manager')) return { bg: 'bg-[#FFF7ED]', icon: '#F54900' };
    return { bg: 'bg-gray-100', icon: '#4B5563' };
  };

  const handlePermissionChange = (category, permission) => {
    setPermissions(prev => ({
      ...prev,
      [category]: { ...prev[category], [permission]: !prev[category][permission] }
    }));
  };

  const getSelectedCount = () => {
    let count = 0;
    Object.values(permissions).forEach(cat => {
      if (typeof cat === 'object') Object.values(cat).forEach(v => { if (v) count++; });
    });
    return count;
  };

  const shield = getShieldColor(role.title);

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 z-50 flex items-center justify-center p-4">
      <div className="max-w-xl bg-white rounded-xl shadow-xl w-full max-h-[95vh] flex flex-col">
        <div className="p-6 flex items-start justify-between border-b">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${shield.bg}`}>
              <FiShield className="w-6 h-6" style={{ color: shield.icon }} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{role.title}</h2>
              <p className="text-gray-600 text-sm">{role.description}</p>
              <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
                <FiUsers className="w-4 h-4" />
                <span>{role.usersAssigned} users assigned</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
        </div>

        <div className="px-6 py-4 overflow-y-auto flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Assigned Permissions</h3>
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{getSelectedCount()} selected</span>
          </div>

          <div className="space-y-4">
            <PermissionSection title="User Management" category="userManagement" permissions={permissions.userManagement} onChange={handlePermissionChange} />
            <PermissionSection title="Vendor Management" category="vendorManagement" permissions={permissions.vendorManagement} onChange={handlePermissionChange} />
            <PermissionSection title="Financial" category="financial" permissions={permissions.financial} onChange={handlePermissionChange} />
            <PermissionSection title="System" category="system" permissions={permissions.system} onChange={handlePermissionChange} />
          </div>

          <div className="p-3 rounded-lg flex items-center gap-2 border bg-blue-50 border-blue-100">
            <span className="text-sm text-blue-800 italic">
              💡 Changes will affect all {role.usersAssigned} users currently assigned to this role.
            </span>
          </div>
        </div>

        <div className="flex gap-3 border-t p-6 bg-gray-50 rounded-b-xl">
          <button onClick={onClose} className="flex-1 h-12 bg-white border rounded-xl font-medium">Cancel</button>
          <button onClick={() => { onSave(role.id, permissions); onClose(); }} className="flex-1 h-12 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
