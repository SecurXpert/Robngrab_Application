'use client';

import { useState } from 'react';
import RoleCard from '../roles/RoleCard';
import PermissionMatrix from '../roles/PermissionMatrix';
import PermissionModal from '../roles/PermissionModal';
import CreateRoleModal from '../roles/CreateRoleModal';

const rolesData = [
  {
    id: 1,
    title: 'Super Admin',
    description: 'Full system access and backend',
    usersAssigned: 1,
    iconColor: 'border-red-500',
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
    usersAssigned: 8,
    iconColor: 'border-blue-500',
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
    iconColor: 'border-green-500',
    protected: false,
    permissions: {
      userManagement: { create: false, edit: false, delete: false, view: false },
      vendorManagement: { create: false, edit: false, delete: false, fullAccess: false },
      financial: { viewData: true, manageSubscriptions: true, generateReports: true, approvePayments: true },
      system: { settings: false, securityLogs: false, technicalSupport: false }
    }
  },
  {
    id: 4,
    title: 'Prime IT Services',
    description: 'Technical support and maintenance',
    usersAssigned: 4,
    iconColor: 'border-purple-500',
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
    iconColor: 'border-orange-500',
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
    <div className="bg-gray-100 min-h-screen overflow-hidden">
      <main className="p-4 sm:p-6 bg-gray-50 min-h-screen overflow-x-hidden overflow-y-auto">
        {/* Header section */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2">Role & Permission Management</h1>
            <p className="text-gray-600 text-sm sm:text-base">Control access levels and permissions</p>
          </div>
          <button onClick={handleCreateRole} className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md hover:shadow-lg w-full sm:w-auto justify-center text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Role
          </button>
        </div>

        {/* Role cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {rolesData.map((role) => (
            <RoleCard 
              key={role.id} 
              role={role} 
              onViewPermissions={handleViewPermissions}
            />
          ))}
        </div>

        {/* Permission matrix with horizontal scroll */}
        <div className="w-full overflow-x-auto overflow-y-hidden">
          <PermissionMatrix roles={rolesData} />
        </div>
      </main>

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
