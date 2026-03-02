import React from 'react';
import { getStatusInfo } from './utils';
import ExpandedJobDetails from './ExpandedJobDetails';

export default function JobTable({ applications, expandedRow, onToggleRow }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Job Title
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="hidden md:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Applied
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current Status
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {applications.map((application) => (
              <React.Fragment key={application.id}>
                <tr 
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => onToggleRow(application.id)}
                >
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium text-gray-800 text-sm sm:text-base">{application.jobTitle}</div>
                      <div className="md:hidden text-xs text-gray-500 mt-1">{application.appliedDate}</div>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{application.company}</div>
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{application.appliedDate}</div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusInfo(application.status).bg} ${getStatusInfo(application.status).text}`}>
                      <img src={getStatusInfo(application.status).icon} alt="status" className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">{application.status}</span>
                      <span className="sm:hidden text-xs">{application.status.length > 15 ? application.status.substring(0, 15) + '...' : application.status}</span>
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <svg className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform ${expandedRow === application.id ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </td>
                </tr>
                {expandedRow === application.id && (
                  <tr>
                    <ExpandedJobDetails application={application} />
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
