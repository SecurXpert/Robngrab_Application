'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import AdminForm from '@/app/super-admin/prime-admins/Model/AdminForm';
import { PERMISSIONS_LIST, ROLE_OPTIONS, EMPTY_FORM } from '@/utils/primeAdminsConstants';

function ManageAdminForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode') || 'create';
  const id = searchParams.get('id');
  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';
  const role = searchParams.get('role') || 'Prime Creator';

  const [formData, setFormData] = useState(EMPTY_FORM);

  useEffect(() => {
    if (mode === 'edit') {
      setFormData({
        fullName: name,
        emailAddress: email,
        roleType: role,
        permissions: {
          createVendors: true,
          editVendors: true,
          deleteVendors: false,
          manageSubscriptions: true,
          accessBilling: true,
          viewAuditLogs: true,
          manageFranchises: false,
          systemConfiguration: true
        },
        requireApproval: true
      });
    } else {
      setFormData(EMPTY_FORM);
    }
  }, [mode, name, email, role]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name.startsWith('permission_')) {
        const permissionName = name.replace('permission_', '');
        setFormData(prev => ({
          ...prev,
          permissions: {
            ...prev.permissions,
            [permissionName]: checked
          }
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(mode === 'edit' ? 'Admin updated successfully!' : 'Admin created successfully!');
    router.push('/super-admin/prime-admins');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-3 sm:p-6 lg:p-8">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8 flex justify-between items-start">
          <div>
            <Link href="/super-admin/prime-admins" className="inline-flex items-center text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors mb-4">
              ← Back to Prime Admins
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">
              {mode === 'edit' ? 'Edit Prime Admin' : 'Create Prime Admin'}
            </h1>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md">
            <span className="text-sm font-medium">Super Admin</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <AdminForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            permissions={PERMISSIONS_LIST}
            roleOptions={ROLE_OPTIONS}
            isEdit={mode === 'edit'}
          />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 p-6 sm:p-8 pt-0 border-t border-gray-200">
            <Link
              href="/super-admin/prime-admins"
              className="flex-1 px-6 py-3 border border-gray-300 bg-white text-gray-700 text-center text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all"
            >
              Cancel
            </Link>
            <button
              type="submit"
              form={mode === 'edit' ? 'editAdminForm' : 'createAdminForm'}
              className="flex-1 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 active:translate-y-px transition-all"
            >
              {mode === 'edit' ? 'Save changes' : 'Create Admin'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ManageAdminPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    }>
      <ManageAdminForm />
    </Suspense>
  );
}
