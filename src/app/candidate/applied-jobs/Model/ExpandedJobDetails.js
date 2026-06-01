import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FiClock, FiActivity, FiArrowRight } from 'react-icons/fi';
import { getStatusInfo } from '@/app/candidate/dashboard/Model/utils';
import { STATUS_DETAILS } from '@/utils/appliedJobsConstants';

export default function ExpandedJobDetails({ application, onRescheduleClick, onViewOfferClick, onViewInterviewDetailsClick }) {
  const details = STATUS_DETAILS[application.company] || STATUS_DETAILS['Airbnb'];
  const statusInfo = getStatusInfo(application.status);

  return (
    <td colSpan="5" className="px-6 py-6 bg-[#F9FAFB] border-b border-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        
        {/* CURRENT STATUS SUMMARY */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-5 flex justify-between items-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-[#8E939E] uppercase tracking-wider">CURRENT STATUS SUMMARY</span>
            <div>
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] text-[11px] font-semibold ${statusInfo.bg} ${statusInfo.text}`}>
                <img src={statusInfo.icon} alt="status" className="w-3.5 h-3.5" />
                <span>{application.status}</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[12px] text-[#6B7280]">
            <FiClock className="w-4 h-4 text-gray-400" />
            <span>Last Updated: <strong className="font-semibold text-[#364153]">{details.lastUpdated}</strong></span>
          </div>
        </div>

        {/* MIDDLE SECTION - TIMELINE & ACTIVITY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* APPLICATION TIMELINE */}
          <div className="lg:col-span-8 bg-white rounded-[12px] border border-gray-200 p-6 flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-bold text-[#8E939E] uppercase tracking-wider mb-6 block">APPLICATION TIMELINE</span>
            
            <div className="flex-1 flex flex-col gap-8">
              {details.timeline.map((item, index) => (
                <div key={index} className="flex items-start">
                  
                  {/* Left Track Column with perfectly centered line */}
                  <div className="w-6 flex flex-col items-center relative flex-shrink-0">
                    
                    {/* Circle Node */}
                    {item.completed ? (
                      <div className="w-6 h-6 rounded-full bg-[#0163D5] flex items-center justify-center border-2 border-white shadow-sm z-10">
                        <FaCheck className="text-white text-[8px]" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border-2 border-gray-300 z-10">
                        {/* Empty incomplete node */}
                      </div>
                    )}
                    
                    {/* Centered Segment Line to next node (solid blue if both current and next nodes are completed) */}
                    {index < details.timeline.length - 1 && (
                      <div className={`absolute top-6 w-0.5 h-[calc(100%+32px)] translate-y-1 ${
                        (item.completed && details.timeline[index + 1].completed) ? 'bg-[#0163D5]' : 'bg-gray-200'
                      }`} style={{ left: 'calc(50% - 1px)' }} />
                    )}
                  </div>

                  {/* Right Content Column */}
                  <div className="flex-1 flex items-start justify-between pl-4 mt-0.5">
                    <div className="flex flex-col">
                      <span 
                        className={`text-[13px] font-semibold ${item.completed ? 'text-[#111827]' : 'text-gray-400 font-normal'}`}
                        style={index === details.timeline.length - 1 ? { color: 'rgba(28, 57, 142, 1)' } : {}}
                      >
                        {item.stage}
                      </span>
                      {item.current && (
                        <span className="text-[11px] font-medium text-[#0163D5] mt-0.5">Current Stage</span>
                      )}
                    </div>
                    
                    <span className="text-[12px] text-[#6B7280]">{item.date}</span>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN - RECRUITER ACTIVITY & NEXT EXPECTED STEP */}
          <div className="lg:col-span-4 flex flex-col gap-4 justify-start">
            
            {/* RECRUITER ACTIVITY */}
            <div className="bg-white rounded-[12px] border border-gray-200 p-5 flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-2 mb-3 text-[#0163D5]">
                <FiActivity className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold text-[#8E939E] uppercase tracking-wider">RECRUITER ACTIVITY</span>
              </div>
              <ul className="space-y-2">
                {details.recruiterActivity.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[11.5px] text-[#444750] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0163D5] mt-1.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NEXT EXPECTED STEP */}
            <div className="bg-[#ECF2FF] rounded-[12px] p-5 flex flex-col justify-center border border-transparent shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
              <div className="flex items-center gap-2 mb-1.5 text-[#0163D5]">
                <FiArrowRight className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold text-[#0163D5] uppercase tracking-wider">NEXT EXPECTED STEP</span>
              </div>
              <p className="text-[11.5px] font-medium text-[#1447E6] leading-relaxed">
                {details.nextStep}
              </p>
            </div>

          </div>

        </div>

        {/* AVAILABLE ACTIONS */}
        {details.actions && details.actions.length > 0 && (
          <div className="bg-white rounded-[12px] border border-gray-200 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-bold text-[#8E939E] uppercase tracking-wider mb-4 block">AVAILABLE ACTIONS</span>
            <div className="flex gap-3">
              {details.actions.map((act, index) => {
                if (act.type === 'primary') {
                  return (
                    <button 
                      key={index} 
                      onClick={() => {
                        if (act.label === 'View Interview Details' && onViewInterviewDetailsClick) {
                          onViewInterviewDetailsClick();
                        }
                      }}
                      className="px-5 py-2.5 rounded-[8px] bg-[#0163D5] hover:bg-[#014fb5] text-white font-medium text-[13px] transition-colors shadow-sm cursor-pointer"
                    >
                      {act.label}
                    </button>
                  );
                }
                if (act.type === 'secondary') {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        if (act.label === 'Reschedule' && onRescheduleClick) {
                          onRescheduleClick();
                        } else if (act.label === 'View Offer Details' && onViewOfferClick) {
                          onViewOfferClick();
                        }
                      }}
                      className="px-5 py-2.5 rounded-[8px] border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-[13px] transition-colors shadow-sm cursor-pointer"
                    >
                      {act.label}
                    </button>
                  );
                }
                if (act.type === 'danger') {
                  return (
                    <button key={index} className="px-5 py-2.5 rounded-[8px] border border-[#FEE2E2] hover:border-red-500 text-[#DC2626] font-medium text-[13px] hover:bg-red-50 transition-colors cursor-pointer">
                      {act.label}
                    </button>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}

      </div>
    </td>
  );
}
