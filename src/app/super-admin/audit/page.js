'use client';

import React, { useState, useEffect } from 'react';
import AuditLogs from '@/app/super-admin/audit/Model/AuditLogs';
import AuditFilters from '@/app/super-admin/audit/Model/AuditFilters';
import AuditTable from '@/app/super-admin/audit/Model/AuditTable';
import AuditDetailsModal from '@/app/super-admin/audit/Model/AuditDetailsModal';

const AuditLogsPage = () => {
  const [logs, setLogs] = useState([]);
  const [selectedLog, setSelectedLog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All Events');
  const [showDropdown, setShowDropdown] = useState(false);
  const [summary, setSummary] = useState({
    totalEvents: 0,
    successfulLogins: 0,
    warnings: 0,
    securityAlerts: 0
  });

  const filterOptions = ['All Events', 'Success', 'Info', 'Warning', 'Error'];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [showModal]);

  // Mock API response
  useEffect(() => {
    const mockLogs = [
      {
        id: 1,
        status: 'success',
        timestamp: '2026-02-17 14:32:15',
        action: 'Login Successful',
        user: 'admin@robngrab.com',
        ipAddress: '192.168.1.105',
        device: 'Chrome on MacOS',
        details: 'Super Admin login from verified location',
        eventType: 'Success',
        sessionDuration: '45 minutes',
        location: 'New York, USA',
        browser: 'Chrome',
        operatingSystem: 'MacOS'
      },
      {
        id: 2,
        status: 'info',
        timestamp: '2026-02-17 14:15:42',
        action: 'Role Modified',
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
        status: 'info',
        timestamp: '2026-02-17 13:22:05',
        action: 'Subscription Updated',
        user: 'accountant@robngrab.com',
        ipAddress: '192.168.1.112',
        device: 'Edge on Windows',
        details: 'Global Staffing Ltd. upgraded to Premium plan',
        eventType: 'Info',
        sessionDuration: '45 minutes',
        location: 'New York, USA',
        browser: 'Edge',
        operatingSystem: 'Windows'
      },
      {
        id: 6,
        status: 'error',
        timestamp: '2026-02-17 12:58:47',
        action: 'Suspicious Activity Detected',
        user: 'system',
        ipAddress: '103.45.89.123',
        device: 'Unknown',
        details: 'Unusual access pattern from foreign IP address',
        eventType: 'Error',
        sessionDuration: '45 minutes',
        location: 'New York, USA',
        browser: 'Unknown',
        operatingSystem: 'Unknown'
      },
      {
        id: 7,
        status: 'success',
        timestamp: '2026-02-17 12:30:19',
        action: 'Prime Admin Created',
        user: 'admin@robngrab.com',
        ipAddress: '192.168.1.105',
        device: 'Chrome on MacOS',
        details: 'New Prime IT Services admin account created',
        eventType: 'Success',
        sessionDuration: '45 minutes',
        location: 'New York, USA',
        browser: 'Chrome',
        operatingSystem: 'MacOS'
      },
      {
        id: 8,
        status: 'info',
        timestamp: '2026-02-17 11:45:33',
        action: 'System Settings Changed',
        user: 'it@robngrab.com',
        ipAddress: '192.168.1.115',
        device: 'Chrome on Linux',
        details: 'Updated session timeout to 45 minutes',
        eventType: 'Info',
        sessionDuration: '45 minutes',
        location: 'New York, USA',
        browser: 'Chrome',
        operatingSystem: 'Linux'
      }
    ];

    setLogs(mockLogs);
    setSummary({
      totalEvents: 1247,
      successfulLogins: 842,
      warnings: 23,
      securityAlerts: 5
    });
  }, []);

  const handleFilterSelect = (filter) => {
    setFilterType(filter);
    setShowDropdown(false);
  };

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

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-inter text-gray-900 mb-1">Security & Audit Logs</h1>
        <p className="text-[#4A5565] mb-1">Monitor all system activities and security events</p>
      </div>

      {/* Summary Cards */}
      <AuditLogs summary={summary} />

      {/* Search and Filter Bar */}
      <AuditFilters 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterType={filterType}
        handleFilterSelect={handleFilterSelect}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        filterOptions={filterOptions}
        handleExport={handleExport}
      />

      {/* Audit Log Table */}
      <AuditTable 
        logs={logs}
        handlePreview={handlePreview}
      />

      {/* Audit Log Details Modal */}
      <AuditDetailsModal 
        showModal={showModal}
        setShowModal={setShowModal}
        selectedLog={selectedLog}
        handleSaveChanges={handleSaveChanges}
      />
    </div>
  );
};

export default AuditLogsPage;
