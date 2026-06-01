'use client';

import { FiShield, FiAlertTriangle, FiXCircle } from 'react-icons/fi';
import { HiOutlineCheckCircle } from "react-icons/hi";
import { IoWarningOutline } from "react-icons/io5";

export default function AuditLogs({ summary }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow p-6" style={{ border: '1px solid #F3F4F6' }}>
        <div className="flex items-center">
          <div className="p-3 rounded-2xl" style={{ backgroundColor: '#EFF6FF' }}>
            <FiShield className="w-6 h-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-gray-600">Total Events</p>
            <p className="text-2xl font-inter text-gray-900">{summary?.totalEvents?.toLocaleString() || 0}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6" style={{ border: '1px solid #F3F4F6' }}>
        <div className="flex items-center">
          <div className="p-3 rounded-2xl" style={{ backgroundColor: '#F0FDF4' }}>
            <HiOutlineCheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-gray-600">Successful Logins</p>
            <p className="text-2xl font-inter text-gray-900">{summary?.successfulLogins || 0}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6" style={{ border: '1px solid #F3F4F6' }}>
        <div className="flex items-center">
          <div className="p-3 rounded-2xl" style={{ backgroundColor: '#FFF7ED' }}>
            <FiAlertTriangle className="w-6 h-6 text-orange-600" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-gray-600">Warnings</p>
            <p className="text-2xl font-inter text-gray-900">{summary?.warnings || 0}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6" style={{ border: '1px solid #F3F4F6' }}>
        <div className="flex items-center">
          <div className="p-3 rounded-2xl" style={{ backgroundColor: '#FEF2F2' }}>
            <FiXCircle className="w-6 h-6 text-red-600" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-gray-600">Security Alerts</p>
            <p className="text-2xl font-inter text-gray-900">{summary?.securityAlerts || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
