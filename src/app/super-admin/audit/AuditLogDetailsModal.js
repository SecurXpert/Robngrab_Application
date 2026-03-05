'use client';

import React from 'react';
import { IoMdClose } from 'react-icons/io';

const AuditLogDetailsModal = ({ 
  showModal, 
  selectedLog, 
  onClose, 
  onSaveChanges,
  getStatusIcon,
  getActionBadgeColor,
  getEventTypeColor 
}) => {
  if (!showModal || !selectedLog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 border border-gray-200">
        <div className="p-6">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-gray-900">Audit Log Details</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors duration-200"
            >
              <IoMdClose className="w-5 h-5" />
            </button>
          </div>

          {/* Event ID */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Event ID</p>
            <p className="text-lg font-medium text-gray-900 mt-1">#{selectedLog.id}</p>
          </div>

          {/* Action Badge */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Action</p>
            <div className={`inline-block px-4 py-2 rounded-lg text-sm font-bold ${getActionBadgeColor(selectedLog.action)}`}>
              {selectedLog.action}
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Timestamp</p>
              <p className="text-base font-medium text-gray-900 mt-1">{selectedLog.timestamp}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">User</p>
              <p className="text-base font-medium text-gray-900 mt-1">{selectedLog.user}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">IP Address</p>
              <p className="text-base font-medium text-gray-900 mt-1">{selectedLog.ipAddress}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Device</p>
              <p className="text-base font-medium text-gray-900 mt-1">{selectedLog.device}</p>
            </div>
          </div>

          {/* Event Type */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Event Type</p>
            <div className="flex items-center gap-3">
              {getStatusIcon(selectedLog.status)}
              <span className={`px-3 py-1 rounded-lg text-sm font-bold ${getEventTypeColor(selectedLog.eventType)}`}>
                {selectedLog.eventType}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Details</p>
            <p className="text-base font-medium text-gray-900 bg-gray-50 p-3 rounded-lg border border-gray-200">
              {selectedLog.details}
            </p>
          </div>

          {/* Additional Information */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-lg font-bold text-gray-900 mb-4">Additional Information</p>
            <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-700">Session Duration</span>
                <span className="text-base font-bold text-gray-900">{selectedLog.sessionDuration}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-700">Location</span>
                <span className="text-base font-bold text-gray-900">{selectedLog.location}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-700">Browser</span>
                <span className="text-base font-bold text-gray-900">{selectedLog.browser}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-semibold text-gray-700">Operating System</span>
                <span className="text-base font-bold text-gray-900">{selectedLog.operatingSystem}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-bold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              onClick={onSaveChanges}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLogDetailsModal;
