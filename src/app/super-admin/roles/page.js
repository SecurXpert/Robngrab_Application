'use client';

import { useState } from 'react';
import RoleCard from '@/app/super-admin/roles/Model/RoleCard';
import PermissionMatrix from '@/app/super-admin/roles/Model/PermissionMatrix';
import PermissionModal from '@/app/super-admin/roles/Model/PermissionModal';
import CreateRoleModal from '@/app/super-admin/roles/Model/CreateRoleModal';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaPlus } from "react-icons/fa";
import { Plus } from 'lucide-react';

const rolesData = [
  {
    id: 1,
    title: 'Super Admin',
    description: 'Full system access and control',
    usersAssigned: 1,
    iconColor: 'border-[#FFC9C9]',
    protected: true,
    permissions: {
      userManagement: { create: true, edit: true, delete: true, view: true },
      vendorManagement: { create: true, edit: true, delete: true, fullAccess: true },
      financial: { viewData: true, manageSubscriptions: true, generateReports: true, approvePayments: true },
      system: { settings: true, securityLogs: true, technicalSupport: true }
    }
  },
  {
    id: 2,
    title: 'Prime Creator',
    description: 'Content and user management',
    usersAssigned: 5,
    iconColor: 'border-[#F3F4F6]',
    protected: false,
    permissions: {
      userManagement: { create: true, edit: false, delete: false, view: false },
      vendorManagement: { create: false, edit: false, delete: false, fullAccess: false },
      financial: { viewData: false, manageSubscriptions: false, generateReports: false, approvePayments: false },
      system: { settings: false, securityLogs: false, technicalSupport: false }
    }
  },
  {
    id: 3,
    title: 'Prime Accountant',
    description: 'Financial oversight and reporting',
    usersAssigned: 3,
    iconColor: 'border-[#B9F8CF]',
    protected: false,
    permissions: {
      userManagement: { create: false, edit: false, delete: false, view: false },
      vendorManagement: { create: false, edit: false, delete: false, fullAccess: false },
      financial: { viewData: true, manageSubscriptions: true, generateReports: true, approvePayments: false },
      system: { settings: false, securityLogs: false, technicalSupport: false }
    }
  },
  {
    id: 4,
    title: 'Prime IT Services',
    description: 'Technical support and maintenance',
    usersAssigned: 4,
    iconColor: 'border-[#E9D4FF]',
    protected: false,
    permissions: {
      userManagement: { create: false, edit: false, delete: false, view: false },
      vendorManagement: { create: false, edit: false, delete: false, fullAccess: true },
      financial: { viewData: false, manageSubscriptions: false, generateReports: false, approvePayments: false },
      system: { settings: false, securityLogs: false, technicalSupport: true }
    }
  },
  {
    id: 5,
    title: 'Vendor Manager',
    description: 'Vendor account management',
    usersAssigned: 12,
    iconColor: 'border-[#FFD6A8]',
    protected: false,
    permissions: {
      userManagement: { create: false, edit: false, delete: false, view: false },
      vendorManagement: { create: true, edit: true, delete: true, fullAccess: false },
      financial: { viewData: false, manageSubscriptions: false, generateReports: false, approvePayments: false },
      system: { settings: false, securityLogs: false, technicalSupport: false }
    }
  },

];

export default function RolesAndPermissions() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleViewPermissions = (role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRole(null);
  };

  const handleSavePermissions = (roleId, updatedPermissions) => {
    // Update the roles data with new permissions
    const roleIndex = rolesData.findIndex(role => role.id === roleId);
    if (roleIndex !== -1) {
      rolesData[roleIndex].permissions = updatedPermissions;
    }
  };

  const handleCreateRole = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleSaveRole = (newRole) => {
    // Add new role to the roles data
    const newId = Math.max(...rolesData.map(role => role.id)) + 1;
    rolesData.push({
      id: newId,
      title: newRole.name,
      description: newRole.description,
      usersAssigned: 0,
      iconColor: 'border-blue-500',
      protected: false,
      permissions: newRole.permissions
    });
    setIsCreateModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-8 bg-[#F8F9FF]">
      {/* Header section */}
      <header className="flex items-center justify-between mb-7">
        <div>
          <h1 className="text-3xl font-roboto mb-1">Role & Permission Management</h1>
          <p className="text-[#4A5565]">Control access levels and permissions</p>
        </div>
        <button onClick={handleCreateRole} className="bg-[#0163D7] text-[#F8F9FF] text-lg px-3 py-2 hover:bg-[#0152b8] transition-colors flex items-center gap-2" style={{ borderRadius: '18px' }}>
          <Plus className="w-5 h-5 text-xs" /> Create Role
        </button>
      </header>

      {/* Role cards grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {rolesData.map((role) => (
          <RoleCard
            key={role.id}
            role={role}
            onViewPermissions={handleViewPermissions}
          />
        ))}
      </div>

      {/* Permission matrix */}
      <div className=" bg-white">
        <PermissionMatrix roles={rolesData} />
      </div>

      {/* Permission Modal */}
      <PermissionModal
        role={selectedRole}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSavePermissions}
      />

      {/* Create Role Modal */}
      <CreateRoleModal
        isOpen={isCreateModalOpen}
        onClose={handleCloseCreateModal}
        onSave={handleSaveRole}
      />
    </div>
  );
}
