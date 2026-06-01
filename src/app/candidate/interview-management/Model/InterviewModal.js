"use client";

import React, { useState } from 'react';
import { FiCalendar, FiClock, FiVideo, FiX, FiCopy, FiCheck, FiAlertCircle } from 'react-icons/fi';

const InterviewModal = ({ interview, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!interview) return null;

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-200">
      <div className="bg-white rounded-none w-full max-w-md shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-6 pb-4 flex justify-between items-start border-b border-gray-100">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-0.5">Interview Details</h2>
            <p className="text-xs text-gray-500">View and manage your interview</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body without scrollbars */}
        <div className="p-6 overflow-y-auto space-y-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {/* Role & Company Section */}
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-base font-bold text-gray-900">{interview.role}</h3>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold flex-shrink-0 ml-2 ${
                interview.status === 'Scheduled' ? 'bg-[#DBEAFE] text-[#0163D5]' : 'bg-[#FEF3C7] text-[#D97706]'
              }`}>
                {interview.status}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-500 mb-3">{interview.company}</p>
            <span className="inline-block bg-[#F1F5F9] text-gray-700 px-3 py-1 rounded text-xs font-medium">
              {interview.round}
            </span>
          </div>

          <div className="border-t border-gray-100 pt-5">
            <h4 className="text-sm font-medium text-[rgba(15,23,43,1)] mb-3">Schedule</h4>
            <div className="bg-[#F8FAFC] p-3.5 rounded-xl flex items-center space-x-3.5 mb-3 border border-gray-100/80 shadow-sm">
              <FiCalendar className="w-4.5 h-4.5 text-gray-600 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm text-[rgba(15,23,43,1)]">{interview.fullDate}</p>
                <p className="font-medium text-xs text-gray-400 mt-0.5">Date</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-3.5 rounded-xl flex items-center space-x-3.5 border border-gray-100/80 shadow-sm">
              <FiClock className="w-4.5 h-4.5 text-gray-600 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm text-[rgba(15,23,43,1)]">{interview.time}</p>
                <p className="font-medium text-xs text-gray-400 mt-0.5">{interview.timezone}</p>
              </div>
            </div>

            {/* Rescheduled Alert Box */}
            {interview.isRescheduled && (
              <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-3.5 mt-3 flex items-start space-x-3 shadow-sm">
                <FiAlertCircle className="w-4.5 h-4.5 text-[#D97706] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-[#D97706] mb-1">Rescheduled</p>
                  <p className="text-xs text-[#D97706]/90 mb-0.5">Previously: {interview.originalDate}</p>
                  <p className="text-xs text-[#D97706]/90">{interview.updatedDate}</p>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-gray-100 pt-5">
            <h4 className="text-sm font-medium text-[rgba(15,23,43,1)] mb-3">Interview Mode</h4>
            <div className="bg-[#F8FAFC] p-3.5 rounded-xl flex items-center space-x-3.5 border border-gray-100/80 shadow-sm">
              <FiVideo className="w-4.5 h-4.5 text-[#0163D5] flex-shrink-0" />
              <div>
                <p className="font-medium text-sm text-[rgba(15,23,43,1)]">Video</p>
                <p className="font-medium text-xs text-gray-400 mt-0.5">Video call</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-5">
            <h4 className="text-xs font-medium text-[rgba(15,23,43,1)] mb-2">Meeting Link</h4>
            <div className="flex items-center justify-between border border-gray-200 rounded-xl pl-3 pr-1.5 py-1.5 bg-white shadow-sm">
              <span className="text-xs text-[rgba(15,23,43,1)] truncate mr-2 font-mono">{interview.meetingLink}</span>
              <button 
                onClick={() => handleCopy(interview.meetingLink)}
                className="border border-gray-200 p-2 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0"
                title="Copy Link"
              >
                {copied ? <FiCheck className="w-3.5 h-3.5 text-green-600" /> : <FiCopy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 pt-4 border-t border-gray-100 space-y-2.5 bg-gray-50/50">
          <button 
            onClick={onClose}
            className="w-full bg-[#0163D5] text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 active:scale-[0.99]"
          >
            Reschedule Interview
          </button>
          <button 
            onClick={onClose}
            className="w-full bg-white border border-red-200 text-[#DC2626] py-3 rounded-xl font-bold text-sm hover:bg-red-50 hover:border-red-300 transition-colors active:scale-[0.99]"
          >
            Cancel Interview
          </button>
        </div>

      </div>
    </div>
  );
};

export default InterviewModal;
