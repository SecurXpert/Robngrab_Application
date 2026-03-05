'use client';

import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle, FaDownload, FaFilter, FaEye, FaSearch } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import AuditLogs from './AuditLogs';

const AuditLogsPage = () => {
  const [logs, setLogs] = useState([]);
  const [selectedLog, setSelectedLog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All Events');
  const [summary, setSummary] = useState({
    totalEvents: 0,
    successfulLogins: 0,
    warnings: 0,
    securityAlerts: 0
  });

  // Mock API response
  useEffect(() => {
    const mockLogs = [
      {
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
      },
      {
        id: 2,
        status: 'info',
        timestamp: '2026-02-17 14:15:23',
        action: 'Permission Updated',
        user: 'admin@robngrab.com',
        ipAddress: '192.168.1.105',
        device: 'Chrome on MacOS',
        details: 'Updated permissions for "Vendor Manager" role',
        eventType: 'Info',
        sessionDuration: '45 minutes',
        location: 'New York, USA',
        browser: 'Chrome',
        operatingSystem: 'MacOS'
      },
      {
        id: 3,
        status: 'warning',
        timestamp: '2026-02-17 13:58:23',
        action: 'Failed Login Attempt',
        user: 'unknown@email.com',
        ipAddress: '45.123.67.89',
        device: 'Firefox on Windows',
        details: 'Multiple failed login attempts detected',
        eventType: 'Warning',
        sessionDuration: '45 minutes',
        location: 'New York, USA',
        browser: 'Firefox',
        operatingSystem: 'Windows'
      },
      {
        id: 4,
        status: 'success',
        timestamp: '2026-02-17 13:45:11',
        action: 'Vendor Created',
        user: 'creator@robngrab.com',
        ipAddress: '192.168.1.108',
        device: 'Safari on iOS',
        details: 'New vendor account: TechCorp Inc.',
        eventType: 'Success',
        sessionDuration: '45 minutes',
        location: 'New York, USA',
        browser: 'Safari',
        operatingSystem: 'iOS'
      },
      {
        id: 5,
        status: 'error',
        timestamp: '2026-02-17 13:30:45',
        action: 'Suspicious Activity Detected',
        user: 'unknown@email.com',
        ipAddress: '45.123.67.89',
        device: 'Firefox on Windows',
        details: 'Unusual access pattern detected from IP address',
        eventType: 'Error',
        sessionDuration: '45 minutes',
        location: 'New York, USA',
        browser: 'Firefox',
        operatingSystem: 'Windows'
      }
    ];

    setLogs(mockLogs);
    setSummary({
      totalEvents: mockLogs.length,
      successfulLogins: mockLogs.filter(log => log.status === 'success').length,
      warnings: mockLogs.filter(log => log.status === 'warning').length,
      securityAlerts: mockLogs.filter(log => log.status === 'error').length
    });
  }, []);

  const handlePreview = (log) => {
    setSelectedLog(log);
    setShowModal(true);
  };

  const handleExport = () => {
    console.log('Exporting audit logs...');
  };

  const handleSaveChanges = () => {
    console.log('Saving changes to log:', selectedLog);
    setShowModal(false);
    setSelectedLog(null);
  };

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

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Security & Audit Logs</h1>
        <p className="text-gray-600">Monitor all system activities and security events</p>
      </div>

      {/* Summary Cards */}
      <AuditLogs summary={summary} />

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
                  type="text"
                  placeholder="Search by action, user, or IP address..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <FaFilter className="w-4 h-4" />
                  {filterType}
                </button>
                <button 
                  onClick={handleExport}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <FaDownload className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Audit Log Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preview</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {logs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusIcon(log.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.timestamp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getActionBadgeColor(log.action)}`}>
                          {log.action}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.user}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.ipAddress}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.device}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => handlePreview(log)}
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                        >
                          <FaEye className="w-4 h-4" />
                          Preview
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
              <div className="text-sm text-gray-700">
                Showing {logs.length} of {logs.length} logs
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100">
                  Previous
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100">
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Audit Log Details Modal */}
          {showModal && selectedLog && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
                <div className="p-6">
                  {/* Modal Header */}
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Audit Log Details</h2>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <IoMdClose className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Event ID */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Event ID: {selectedLog.id}</p>
                  </div>

                  {/* Action Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getActionBadgeColor(selectedLog.action)}`}>
                    {selectedLog.action}
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Timestamp</p>
                      <p className="font-medium">{selectedLog.timestamp}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">User</p>
                      <p className="font-medium">{selectedLog.user}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">IP Address</p>
                      <p className="font-medium">{selectedLog.ipAddress}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Device</p>
                      <p className="font-medium">{selectedLog.device}</p>
                    </div>
                  </div>

                  {/* Event Type */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Event Type</p>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(selectedLog.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(selectedLog.eventType)}`}>
                        {selectedLog.eventType}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Details</p>
                    <p className="font-medium">{selectedLog.details}</p>
                  </div>

                  {/* Additional Information */}
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium text-gray-900 mb-3">Additional Information</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Session Duration</span>
                        <span className="text-sm font-medium">{selectedLog.sessionDuration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Location</span>
                        <span className="text-sm font-medium">{selectedLog.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Browser</span>
                        <span className="text-sm font-medium">{selectedLog.browser}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Operating System</span>
                        <span className="text-sm font-medium">{selectedLog.operatingSystem}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setShowModal(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveChanges}
                      className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

  );
};

export default AuditLogsPage;
