'use client';

import React from 'react';

export default function PermissionMatrix({ roles }) {
  const CheckIcon = () => (
    <div className="flex justify-center">
      <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
        <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  );

  const CircleIcon = () => (
    <div className="flex justify-center">
      <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
    </div>
  );

  return (
    <div className=" p-6 border border-gray-100 rounded-2xl bg-White-50">
      {/* Title */}
      <h2 className="text-lg font-inter text-gray-900 mb-6">
        Permission Matrix
      </h2>

      <table className="w-full text-sm rounded-lg overflow-hidden">
        {/* Header */}
        <thead>
          <tr className="text-[#4A5565]">
            <th className="text-left px-6 py-3 font-bold text-md border-b border-gray-200">Permission</th>
            <th className="text-center px-6 py-3 font-bold text-md border-b border-gray-200">Super Admin</th>
            <th className="text-center px-6 py-3 font-bold text-md border-b border-gray-200">Prime Creator</th>
            <th className="text-center px-6 py-3 font-bold text-md border-b border-gray-200">Prime Accountant</th>
            <th className="text-center px-6 py-3 font-bold text-md border-b border-gray-200">Prime IT Services</th>
          </tr>
        </thead>

        <tbody className="text-gray-600">
          {/* USER MANAGEMENT */}
          <tr className="bg-[#F9FAFB] border-b-[#F3F4F6] border-b">
            <td className="px-6 py-3 font-inter text-gray-700">User Management</td>
            <td></td><td></td><td></td><td></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">Create Users</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">Edit Users</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">Delete Users</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">View Users</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
          </tr>

          {/* VENDOR MANAGEMENT */}
          <tr className="bg-[#F9FAFB] border-b-[#F3F4F6] border-b">
            <td className="px-6 py-3 font-inter text-gray-700">Vendor Management</td>
            <td></td><td></td><td></td><td></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">Create Vendors</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">Edit Vendors</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">Delete Vendors</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">Full Vendor Access</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
          </tr>

          {/* FINANCIAL */}
          <tr className="bg-[#F9FAFB] border-b-[#F3F4F6] border-b">
            <td className="px-6 py-3 font-inter text-gray-700">Financial</td>
            <td></td><td></td><td></td><td></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">View Financial Data</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">Manage Subscriptions</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">Generate Reports</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">Approve Payments</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
          </tr>

          {/* SYSTEM */}
          <tr className="bg-[#F9FAFB] border-b-[#F3F4F6] border-b">
            <td className="px-6 py-3 font-inter text-gray-700">System</td>
            <td></td><td></td><td></td><td></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">System Settings</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">Security Logs</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">Technical Support</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
          </tr>

          <tr className="border-b-[#F3F4F6] border-b">
            <td className="px-6 py-1">Backup & Restore</td>
            <td className="text-center px-6 py-3"><CheckIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
            <td className="text-center px-6 py-3"><CircleIcon /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
