'use client';

import React from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { getStatusIcon, getActionBadgeColor } from '@/app/super-admin/audit/Model/AuditUtils';

const AuditTable = ({ logs, handlePreview }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-md text-[#4A5565] tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-sm font-md text-[#4A5565] tracking-wider">Timestamp</th>
              <th className="px-6 py-4 text-left text-sm font-md text-[#4A5565] tracking-wider pl-6">Action</th>
              <th className="px-6 py-4 text-left text-sm font-md text-[#4A5565] tracking-wider">User</th>
              <th className="px-6 py-4 text-left text-sm font-md text-[#4A5565] tracking-wider">IP Address</th>
              <th className="px-6 py-4 text-left text-sm font-md text-[#4A5565] tracking-wider">Device</th>
              <th className="px-6 py-4 text-left text-sm font-md text-[#4A5565] tracking-wider">Preview</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusIcon(log.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {log.timestamp}
                </td>
                <td className="px-4 py-3">
                  <span className={`
                    inline-block
                    px-3 py-1.5
                    rounded-md
                    text-xs
                    font-medium
                    transition-all duration-200
                    hover:shadow-md
                    shadow-sm
                    ${getActionBadgeColor(log.action)}
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
                    {log.action}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {log.user}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {log.ipAddress}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700" style={{ maxWidth: '150px', lineHeight: '1.4', wordWrap: 'break-word' }}>
                  {log.device}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => handlePreview(log)}
                    className="flex items-center gap-2 px-3 py-2 text-white hover:bg-blue-700 transition-colors duration-200"
                    style={{ backgroundColor: '#0163D7', borderRadius: '13.49px' }}
                  >
                    <IoEyeOutline className="w-4 h-4" />
                    Preview
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="px-4 py-4 flex items-center justify-between border-t border-gray-200" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="text-sm text-gray-700">
          Showing {logs.length} of {logs.length} logs
        </div>
        <div className="flex gap-5">
          <button
            className="border border-[#D1D5DC] text-sm hover:bg-gray-100 flex items-center justify-center"
            style={{
              width: '100px',
              height: '40.27px',
              borderRadius: '13.49px',
              borderWidth: '1.35px'
            }}
          >
            Previous
          </button>
          <button
            className="border border-gray-100 text-sm text-[#0163D7] bg-[#EFF6FF] flex items-center justify-center"
            style={{
              width: '85.44px',
              height: '40.27px',
              borderRadius: '13.49px'
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuditTable;
