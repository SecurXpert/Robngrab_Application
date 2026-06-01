import React from 'react';
import { getStatusInfo } from '@/app/candidate/dashboard/Model/utils';
import ExpandedJobDetails from '@/app/candidate/applied-jobs/Model/ExpandedJobDetails';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';

export default function JobTable({ applications, expandedRow, onToggleRow, onRescheduleClick, onViewOfferClick, onViewInterviewClick }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="pl-18 pr-6 py-4 text-left text-[11px] font-bold text-[#6B7280] uppercase tracking-wider" style={{ borderBottom: '1.26px solid rgba(229, 231, 235, 1)' }}>
                JOB TITLE
              </th>
              <th className="px-6 py-4 text-left text-[11px] font-bold text-[#6B7280] uppercase tracking-wider" style={{ borderBottom: '1.26px solid rgba(229, 231, 235, 1)' }}>
                COMPANY
              </th>
              <th className="hidden md:table-cell px-6 py-4 text-left text-[11px] font-bold text-[#6B7280] uppercase tracking-wider" style={{ borderBottom: '1.26px solid rgba(229, 231, 235, 1)' }}>
                DATE APPLIED
              </th>
              <th className="px-6 py-4 text-left text-[11px] font-bold text-[#6B7280] uppercase tracking-wider" style={{ borderBottom: '1.26px solid rgba(229, 231, 235, 1)' }}>
                CURRENT STATUS
              </th>
              <th className="px-6 py-4 text-left text-[11px] font-bold text-[#6B7280] uppercase tracking-wider" style={{ borderBottom: '1.26px solid rgba(229, 231, 235, 1)' }}>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {applications.map((application, idx) => (
              <React.Fragment key={application.id}>
                <tr 
                  className={`hover:bg-gray-50 transition-colors cursor-pointer ${idx !== applications.length - 1 ? 'border-b border-gray-200' : ''}`}
                  onClick={() => onToggleRow(application.id)}
                >
                  <td className="pl-18 pr-6 py-3.5 whitespace-nowrap">
                    <div>
                      <div className="font-bold text-[#111827] text-[13px]">{application.jobTitle}</div>
                      <div className="md:hidden text-[13px] text-[#6B7280] mt-1">{application.appliedDate}</div>
                    </div>
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <div className="text-[13px] text-[#6B7280]">{application.company}</div>
                  </td>
                  <td className="hidden md:table-cell px-6 py-3.5 whitespace-nowrap">
                    <div className="text-[13px] text-[#6B7280]">{application.appliedDate}</div>
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] text-[11px] font-medium ${getStatusInfo(application.status).bg} ${getStatusInfo(application.status).text}`}>
                      <img src={getStatusInfo(application.status).icon} alt="status" className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{application.status}</span>
                      <span className="sm:hidden text-[11px]">{application.status.length > 15 ? application.status.substring(0, 15) + '...' : application.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap text-right">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                      {expandedRow === application.id ? (
                        <FiChevronDown className="w-5 h-5" />
                      ) : (
                        <FiChevronRight className="w-5 h-5" />
                      )}
                    </button>
                  </td>
                </tr>
                {expandedRow === application.id && (
                  <tr>
                    <ExpandedJobDetails 
                      application={application} 
                      onRescheduleClick={onRescheduleClick} 
                      onViewOfferClick={onViewOfferClick} 
                      onViewInterviewDetailsClick={onViewInterviewClick}
                    />
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
