'use client';

import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { getStatusIcon, getActionBadgeColor } from '@/app/super-admin/audit/Model/AuditUtils';

const AuditDetailsModal = ({ 
  showModal, 
  setShowModal, 
  selectedLog, 
  handleSaveChanges 
}) => {
  if (!showModal || !selectedLog) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur- flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl mx-auto overflow-hidden border border-blue-200 flex flex-col w-full max-w-lg sm:max-w-xl md:max-w-2xl max-h-[90vh] md:max-h-[85vh]">
        {/* Modal Header */}
        <div className="px-3 sm:px-6 py-2 sm:py-4 flex justify-between items-center flex-shrink-0">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
            <div className="p-3 rounded-2xl" style={{ backgroundColor: '#F3F4F6' }}>
              {getStatusIcon(selectedLog.status)}
            </div>
            <div className="flex items-center space-x-2">
              <div>
                <h2 className="text-xl lg:text-2xl font-base text-gray-900 truncate">Audit Log Details</h2>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <span className="font-inter mr-2">Event ID:</span>
                  <span className="truncate">{selectedLog.id}</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-1 flex-shrink-0"
          >
            <IoMdClose className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>
        <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 md:space-y-5 overflow-y-auto flex-1">
          {/* Action Badge */}
          <div className="w-fit max-w-full">
            <span className={`
              inline-block
              px-3 py-1.5
              rounded-md
              text-xs
              font-medium
              transition-all duration-200
              hover:shadow-md
              shadow-sm
              ${getActionBadgeColor(selectedLog.action)}
            `} style={{
              border: '0.5px solid rgba(0,0,0,0.1)',
              fontWeight: '500',
              lineHeight: '1.3',
              maxWidth: '150px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              display: 'inline-block'
            }}>
              {selectedLog.action}
            </span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border-gray">
              <p className="text-sm font-inter text-gray-500 tracking-wide mb-1">Timestamp</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 break-words">{selectedLog.timestamp}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border-gray">
              <p className="text-sm font-inter text-gray-500 tracking-wide mb-1">User</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 break-words">{selectedLog.user}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border-gray">
              <p className="text-sm font-inter text-gray-500 tracking-wide mb-1">IP Address</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 break-words">{selectedLog.ipAddress}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border-gray">
              <p className="text-sm font-inter text-gray-500 tracking-wide mb-1">Device</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 break-words">{selectedLog.device}</p>
            </div>
          </div>

          {/* Event Type */}
          <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border-gray">
            <p className="text-sm font-inter text-gray-500 tracking-wide mb-1 sm:mb-2">Event Type</p>
            <div className="flex items-center gap-2">
              {getStatusIcon(selectedLog.status)}
              <span className="text-medium font-semibold text-gray-900">
                {selectedLog.eventType}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border-gray">
            <p className="text-sm font-inter text-gray-500 tracking-wide mb-1 sm:mb-2">Details</p>
            <p className="text-xs sm:text-sm font-medium text-gray-900 break-words">{selectedLog.details}</p>
          </div>

          {/* Additional Information */}
          <div className="p-2 sm:p-4 border-t-2" style={{ borderTopColor: '#E5E7EB' }}>
            <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-4">Additional Information</p>
            <div className="space-y-1 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1">
                <span className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-0">Session Duration:</span>
                <span className="text-xs sm:text-sm font-inter text-gray-900">{selectedLog.sessionDuration}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1">
                <span className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-0">Location:</span>
                <span className="text-xs sm:text-sm font-inter text-gray-900">{selectedLog.location}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1">
                <span className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-0">Browser:</span>
                <span className="text-xs sm:text-sm font-inter text-gray-900">{selectedLog.browser}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1">
                <span className="text-xs sm:text-sm font-base text-gray-600 mb-1 sm:mb-0">Operating System:</span>
                <span className="text-xs sm:text-sm font-inter text-gray-900">{selectedLog.operatingSystem}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 sm:gap-3 pt-4 sm:pt-7 flex-shrink-0 border-t-2" style={{ borderTopColor: '#E5E7EB' }}>
            <button
              onClick={() => setShowModal(false)}
              className="flex-1 px-3 sm:px-6 py-2 sm:py-3 bg-[#F8F6F6] text-gray-700 border-gray- font-bold transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 text-xs sm:text-base"
              style={{ borderRadius: '14px' }}
            >
              Cancel
            </button>
            <button
              onClick={handleSaveChanges}
              className="flex-1 px-3 sm:px-6 py-2 sm:py-3 bg-[#0163D7] text-white rounded-lg font-bold hover:bg-blue-700 transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 text-xs sm:text-base"
              style={{ borderRadius: '14px' }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditDetailsModal;
