'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';

const AuditLogDetailsPage = () => {
  const router = useRouter();
  const [selectedLog, setSelectedLog] = useState(null);

  useEffect(() => {
    // Get the log data from sessionStorage or fetch based on ID
    const storedLog = sessionStorage.getItem('selectedAuditLog');
    if (storedLog) {
      setSelectedLog(JSON.parse(storedLog));
    } else {
      // Fallback sample data if no stored data
      setSelectedLog({
        id: 1,
        status: 'success',
        timestamp: '2026-02-17 14:30:45',
        action: 'Login Successful',
        user: 'admin@robngrab.com',
        ipAddress: '192.168.1.100',
        device: 'Chrome on Windows',
        details: 'User logged in successfully from office network',
        eventType: 'Success',
        sessionDuration: '2 hours 15 minutes',
        location: 'New York, USA',
        browser: 'Chrome',
        operatingSystem: 'Windows'
      });
    }
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <FaCheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <FaExclamationTriangle className="w-5 h-5 text-yellow-500" />;
      case 'error':
        return <FaTimesCircle className="w-5 h-5 text-red-500" />;
      default:
        return <FaInfoCircle className="w-5 h-5 text-blue-500" />;
    }
  };

  const getActionBadgeColor = (action) => {
    const colors = {
      'Login Successful': 'bg-green-100 text-green-800',
      'Permission Updated': 'bg-blue-100 text-blue-800',
      'Failed Login Attempt': 'bg-red-100 text-red-800',
      'Vendor Created': 'bg-purple-100 text-purple-800',
      'Suspicious Activity Detected': 'bg-orange-100 text-orange-800'
    };
    return colors[action] || 'bg-gray-100 text-gray-800';
  };

  const getEventTypeColor = (eventType) => {
    const colors = {
      'Success': 'bg-green-100 text-green-800',
      'Info': 'bg-blue-100 text-blue-800',
      'Warning': 'bg-yellow-100 text-yellow-800',
      'Error': 'bg-red-100 text-red-800'
    };
    return colors[eventType] || 'bg-gray-100 text-gray-800';
  };

  const handleBack = () => {
    router.push('/super-admin/audit');
  };

  const handleSaveChanges = () => {
    console.log('Saving changes to log:', selectedLog);
    // Add save logic here
    router.push('/super-admin/audit');
  };

  if (!selectedLog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading audit log details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mr-6 transition-colors duration-200"
            >
              <IoMdArrowBack className="w-5 h-5" />
              <span className="font-medium">Back to Audit Logs</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Audit Log Details</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-8">
            {/* Event ID */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Event ID</p>
              <p className="text-xl font-bold text-gray-900 mt-2">#{selectedLog.id}</p>
            </div>

            {/* Action Badge */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Action</p>
              <div className={`inline-block px-6 py-3 rounded-lg text-sm font-bold ${getActionBadgeColor(selectedLog.action)}`}>
                {selectedLog.action}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Timestamp</p>
                <p className="text-lg font-medium text-gray-900 mt-2">{selectedLog.timestamp}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">User</p>
                <p className="text-lg font-medium text-gray-900 mt-2">{selectedLog.user}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">IP Address</p>
                <p className="text-lg font-medium text-gray-900 mt-2">{selectedLog.ipAddress}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Device</p>
                <p className="text-lg font-medium text-gray-900 mt-2">{selectedLog.device}</p>
              </div>
            </div>

            {/* Event Type */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Event Type</p>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                {getStatusIcon(selectedLog.status)}
                <span className={`px-4 py-2 rounded-lg text-sm font-bold ${getEventTypeColor(selectedLog.eventType)}`}>
                  {selectedLog.eventType}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Details</p>
              <p className="text-lg font-medium text-gray-900 bg-gray-50 p-4 rounded-lg border border-gray-200">
                {selectedLog.details}
              </p>
            </div>

            {/* Additional Information */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-xl font-bold text-gray-900 mb-6">Additional Information</p>
              <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm font-semibold text-gray-700">Session Duration</span>
                  <span className="text-lg font-bold text-gray-900">{selectedLog.sessionDuration}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm font-semibold text-gray-700">Location</span>
                  <span className="text-lg font-bold text-gray-900">{selectedLog.location}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm font-semibold text-gray-700">Browser</span>
                  <span className="text-lg font-bold text-gray-900">{selectedLog.browser}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm font-semibold text-gray-700">Operating System</span>
                  <span className="text-lg font-bold text-gray-900">{selectedLog.operatingSystem}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-10">
              <button
                onClick={handleBack}
                className="flex-1 px-8 py-4 border-2 border-gray-300 rounded-lg text-gray-700 font-bold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="flex-1 px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg text-lg"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLogDetailsPage;
