import React from 'react';

const DEFAULT_PERMISSIONS = [
  { key: 'createVendors', label: 'Create Vendors' },
  { key: 'editVendors', label: 'Edit Vendors' },
  { key: 'deleteVendors', label: 'Delete Vendors' },
  { key: 'manageSubscriptions', label: 'Manage Subscriptions' },
  { key: 'accessBilling', label: 'Access Billing' },
  { key: 'viewAuditLogs', label: 'View Audit Logs' },
  { key: 'manageFranchises', label: 'Manage Franchises' },
  { key: 'systemConfiguration', label: 'System Configuration' }
];

const DEFAULT_ROLES = [
  'Prime Creator',
  'Prime Accountant',
  'Prime IT Services'
];

export default function AdminForm({
  formData,
  handleChange,
  handleSubmit,
  permissions = DEFAULT_PERMISSIONS,
  roleOptions = DEFAULT_ROLES,
  isEdit = false,
  formId = isEdit ? 'editAdminForm' : 'createAdminForm'
}) {
  return (
    <form onSubmit={handleSubmit} className={isEdit ? "p-4 sm:p-8" : "p-6 sm:p-8"} id={formId}>
      {/* Full Name */}
      <div className="mb-6">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName || ""}
          onChange={handleChange}
          placeholder="e.g., John Doe"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
        />
      </div>

      {/* Email Address */}
      <div className="mb-6">
        <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={formData.emailAddress || formData.email || ""}
          onChange={handleChange}
          placeholder={isEdit ? "john@robngrab.com" : "Enter email address"}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
        />
      </div>

      {/* Role Type */}
      <div className="mb-6">
        <label htmlFor="roleType" className="block text-sm font-medium text-gray-700 mb-2">
          Role Type
        </label>
        <select
          id="roleType"
          name="roleType"
          value={formData.roleType || formData.role || "Prime Creator"}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
        >
          {roleOptions.map(role => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      {/* Permissions */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
        <div className={isEdit ? "grid grid-cols-1 sm:grid-cols-2 gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200" : "flex flex-col gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200"}>
          {permissions.map(permission => (
            <div key={permission.key} className="flex items-center gap-3">
              <input
                type="checkbox"
                id={`permission_${permission.key}`}
                name={`permission_${permission.key}`}
                checked={formData.permissions?.[permission.key] ?? false}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label 
                htmlFor={`permission_${permission.key}`} 
                className="text-sm text-gray-700 cursor-pointer select-none"
              >
                {permission.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Require Approval */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="requireApproval"
            name="requireApproval"
            checked={formData.requireApproval ?? false}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
          />
          <label 
            htmlFor="requireApproval" 
            className="text-sm text-gray-700 cursor-pointer select-none"
          >
            Require approval for critical actions
          </label>
        </div>
      </div>
    </form>
  );
}
