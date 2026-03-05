'use client';

import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle, FaDownload, FaFilter, FaEye, FaSearch, FaChevronDown } from 'react-icons/fa';
import { IoMdClose, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import AuditLogs from './AuditLogs';

const AuditLogsPage = () => {
  const [logs, setLogs] = useState([]);
  const [selectedLog, setSelectedLog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All Events');
  const [showDropdown, setShowDropdown] = useState(false);
  
  const filterOptions = ['All Events', 'Success', 'Info', 'Warning', 'Error'];
  
  const handleFilterSelect = (filter) => {
    setFilterType(filter);
    setShowDropdown(false);
  };
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
              <div className="flex gap-3 relative">
                <div className="relative">
                  <button 
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-black rounded-lg hover:bg-gray-50 font-bold transition-all duration-200 shadow-sm"
                  >
                    <FaFilter className="w-4 h-4" />
                    {filterType}
                    <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {showDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden">
                      {filterOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleFilterSelect(option)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 text-black transition-colors duration-150 border-b border-gray-200 last:border-b-0"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button 
                  onClick={handleExport}
                  className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-black rounded-lg hover:bg-gray-50 font-bold transition-all duration-200 shadow-sm"
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
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-start justify-center z-50 p-2 sm:p-4 pt-16">
              <div className="bg-white rounded-xl shadow-2xl w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:max-w-4xl mx-auto overflow-hidden border border-blue-200 max-h-[95vh] flex flex-col mt-2">
                {/* Modal Header */}
                <div className="bg-blue-600 px-3 sm:px-6 py-2 sm:py-4 flex justify-between items-center flex-shrink-0">
                  <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                    <span className="bg-white rounded-full p-1 sm:p-2 flex-shrink-0">
                      <IoMdCheckmarkCircleOutline className="w-3 h-3 sm:w-6 sm:h-6 text-green-500" />
                    </span>
                    <h2 className="text-sm sm:text-xl font-bold text-white truncate">Audit Log Details</h2>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-white hover:text-blue-100 transition-colors duration-200 p-1 flex-shrink-0"
                  >
                    <IoMdClose className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                </div>

                <div className="p-3 sm:p-6 space-y-3 sm:space-y-5 overflow-y-auto flex-1">
                  {/* Event ID */}
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <span className="font-semibold mr-2">Event ID:</span>
                    <span className="truncate">{selectedLog.id}</span>
                  </div>

                  {/* Action Badge */}
                  <div className={`inline-block px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold ${getActionBadgeColor(selectedLog.action)} shadow-sm`}>
                    {selectedLog.action}
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border border-gray-200">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Timestamp</p>
                      <p className="text-xs sm:text-sm font-medium text-gray-900 break-words">{selectedLog.timestamp}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border border-gray-200">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">User</p>
                      <p className="text-xs sm:text-sm font-medium text-gray-900 break-words">{selectedLog.user}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border border-gray-200">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">IP Address</p>
                      <p className="text-xs sm:text-sm font-medium text-gray-900 break-words">{selectedLog.ipAddress}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border border-gray-200">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Device</p>
                      <p className="text-xs sm:text-sm font-medium text-gray-900 break-words">{selectedLog.device}</p>
                    </div>
                  </div>

                  {/* Event Type */}
                  <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 sm:mb-2">Event Type</p>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(selectedLog.status)}
                      <span className={`px-1 sm:px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(selectedLog.eventType)}`}>
                        {selectedLog.eventType}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 sm:mb-2">Details</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 break-words">{selectedLog.details}</p>
                  </div>

                  {/* Additional Information */}
                  <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border border-gray-200">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-4">Additional Information</p>
                    <div className="space-y-1 sm:space-y-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 sm:py-2 border-b border-gray-200">
                        <span className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-0">Session Duration</span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-900">{selectedLog.sessionDuration}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 sm:py-2 border-b border-gray-200">
                        <span className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-0">Location</span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-900">{selectedLog.location}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 sm:py-2 border-b border-gray-200">
                        <span className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-0">Browser</span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-900">{selectedLog.browser}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 sm:py-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-0">Operating System</span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-900">{selectedLog.operatingSystem}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-4 flex-shrink-0">
                    <button
                      onClick={() => setShowModal(false)}
                      className="flex-1 px-3 sm:px-6 py-2 sm:py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg font-bold hover:bg-gray-50 transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 text-xs sm:text-base"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveChanges}
                      className="flex-1 px-3 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 text-xs sm:text-base"
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
