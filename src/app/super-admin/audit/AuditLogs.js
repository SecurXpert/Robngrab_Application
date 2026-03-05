'use client';

import { FaShieldAlt, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

export default function AuditLogs({ summary }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 bg-blue-100 rounded-lg">
            <FaShieldAlt className="w-6 h-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Total Events</p>
            <p className="text-2xl font-bold text-gray-900">{summary?.totalEvents || 0}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 bg-green-100 rounded-lg">
            <FaCheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Successful Logins</p>
            <p className="text-2xl font-bold text-gray-900">{summary?.successfulLogins || 0}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 bg-yellow-100 rounded-lg">
            <FaExclamationTriangle className="w-6 h-6 text-yellow-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Failed Attempts</p>
            <p className="text-2xl font-bold text-gray-900">{summary?.failedAttempts || 0}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 bg-red-100 rounded-lg">
            <FaTimesCircle className="w-6 h-6 text-red-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Security Alerts</p>
            <p className="text-2xl font-bold text-gray-900">{summary?.securityAlerts || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
}