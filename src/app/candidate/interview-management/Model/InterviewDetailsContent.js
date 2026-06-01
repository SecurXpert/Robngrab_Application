'use client';

import React from 'react';
import { 
  FiVideo, 
  FiUser, 
  FiBriefcase, 
  FiFileText, 
  FiAlertCircle 
} from 'react-icons/fi';

export default function InterviewDetailsContent({ copied, handleCopyLink }) {
  return (
    <div className="flex-1 overflow-y-auto p-5 pb-8 flex flex-col gap-5 no-scrollbar bg-white">
      
      {/* Section: Interview Format */}
      <div 
        style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #EEF2FF 100%)' }}
        className="border border-[#BEDBFF] rounded-[12px] p-4 flex flex-col gap-3.5"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[10px] bg-[#155DFC] flex items-center justify-center text-white flex-shrink-0">
            <FiVideo className="w-5 h-5" strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <h4 className="text-[14.5px] font-bold text-black leading-tight">Interview Format</h4>
            <span className="text-[12.5px] text-[#6B7280] font-medium mt-0.5">Video Interview</span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 mt-1">
          <span className="text-[9.5px] font-bold text-[#8E939E] uppercase tracking-wider">VIDEO CONFERENCE LINK</span>
          <div className="flex items-center gap-2 w-full">
            <div className="flex-1 bg-white border border-[#BEDBFF] rounded-[8px] px-4 py-2.5 text-[12.5px] text-gray-600 font-medium select-all truncate">
              https://zoom.us/j/1234567890
            </div>
            <button
              onClick={handleCopyLink}
              className="h-[41px] px-5 rounded-[8px] bg-[#155DFC] hover:bg-[#004fb5] text-white font-semibold text-[13px] transition-all flex items-center justify-center flex-shrink-0 cursor-pointer shadow-sm"
            >
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-0.5 text-[#5A6376] text-[11.5px] font-medium">
          <svg className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]/20 flex-shrink-0" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
            <line x1="9" y1="18" x2="15" y2="18" />
            <line x1="10" y1="22" x2="14" y2="22" />
          </svg>
          <span>Join 5-10 minutes early to test your audio and video</span>
        </div>
      </div>

      {/* Section: Interview Panel */}
      <div className="flex flex-col gap-3 pt-1">
        <div className="flex items-center gap-1.5 text-gray-800">
          <FiUser className="w-4 h-4 text-gray-800" strokeWidth={1.67} />
          <h3 className="text-[13.5px] font-bold text-gray-800">Interview Panel</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Member 1 */}
          <div className="bg-[#F9FAFB] border border-gray-200 rounded-[12px] p-3.5 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#3B82F6] text-white font-bold text-[12.5px] flex items-center justify-center flex-shrink-0">
              SJ
            </div>
            <div className="flex flex-col">
              <span className="text-[13.5px] font-bold text-gray-800 leading-tight">Sarah Johnson</span>
              <span className="text-[11.5px] text-gray-500 font-medium mt-0.5">Senior Design Manager</span>
            </div>
          </div>
          {/* Member 2 */}
          <div className="bg-[#F9FAFB] border border-gray-200 rounded-[12px] p-3.5 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#3B82F6] text-white font-bold text-[12.5px] flex items-center justify-center flex-shrink-0">
              MC
            </div>
            <div className="flex flex-col">
              <span className="text-[13.5px] font-bold text-gray-800 leading-tight">Michael Chan</span>
              <span className="text-[11.5px] text-gray-500 font-medium mt-0.5">Lead Product Designer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Interview Round */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-gray-800">
          <FiBriefcase className="w-4 h-4 text-gray-800" strokeWidth={1.67} />
          <h3 className="text-[13.5px] font-bold text-gray-800">Interview Round</h3>
        </div>

        <div className="bg-[#F9FAFB] border border-gray-200 rounded-[12px] p-3.5 flex flex-col justify-center">
          <span className="text-[13px] font-semibold text-gray-700 leading-normal">
            Second Round - Design Portfolio Review & System Design
          </span>
        </div>
      </div>

      {/* Section: Topics to Cover */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-gray-800">
          <FiFileText className="w-4 h-4 text-gray-800" strokeWidth={1.67} />
          <h3 className="text-[13.5px] font-bold text-gray-800">Topics to Cover</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {/* Topic 1 */}
          <div className="bg-[#F0F7FF] border border-[#DBEAFE] rounded-[10px] p-2.5 px-3 flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#155DFC] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
              1
            </div>
            <span className="text-gray-700 text-[12px] font-normal leading-normal">Portfolio walkthrough</span>
          </div>
          {/* Topic 2 */}
          <div className="bg-[#F0F7FF] border border-[#DBEAFE] rounded-[10px] p-2.5 px-3 flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#155DFC] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
              2
            </div>
            <span className="text-gray-700 text-[12px] font-normal leading-normal">Design system architecture</span>
          </div>
          {/* Topic 3 */}
          <div className="bg-[#F0F7FF] border border-[#DBEAFE] rounded-[10px] p-2.5 px-3 flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#155DFC] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
              3
            </div>
            <span className="text-gray-700 text-[12px] font-normal leading-normal">Cross-functional collaboration</span>
          </div>
          {/* Topic 4 */}
          <div className="bg-[#F0F7FF] border border-[#DBEAFE] rounded-[10px] p-2.5 px-3 flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#155DFC] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
              4
            </div>
            <span className="text-gray-700 text-[12px] font-normal leading-normal">Problem-solving approach</span>
          </div>
        </div>
      </div>

      {/* Section: Preparation Tips */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-gray-800">
          <FiAlertCircle className="w-4 h-4 text-gray-800" strokeWidth={1.67} />
          <h3 className="text-[13.5px] font-bold text-gray-800">Preparation Tips</h3>
        </div>

        <div className="flex flex-col gap-2">
          {/* Tip 1 */}
          <div className="bg-[#F0FDF4] rounded-[10px] py-3.5 px-3 flex items-center gap-2.5">
            <div className="w-4.5 h-4.5 rounded-full bg-[#00A63E] flex items-center justify-center flex-shrink-0">
              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-gray-700 text-[12px] font-medium leading-normal">
              Prepare a 15-minute portfolio presentation highlighting 2-3 key projects
            </span>
          </div>
          {/* Tip 2 */}
          <div className="bg-[#F0FDF4] rounded-[10px] py-3.5 px-3 flex items-center gap-2.5">
            <div className="w-4.5 h-4.5 rounded-full bg-[#00A63E] flex items-center justify-center flex-shrink-0">
              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-gray-700 text-[12px] font-medium leading-normal">
              Be ready to discuss your design process from research to implementation
            </span>
          </div>
          {/* Tip 3 */}
          <div className="bg-[#F0FDF4] rounded-[10px] py-3.5 px-3 flex items-center gap-2.5">
            <div className="w-4.5 h-4.5 rounded-full bg-[#00A63E] flex items-center justify-center flex-shrink-0">
              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-gray-700 text-[12px] font-medium leading-normal">
              Review Stripe's design principles and product ecosystem
            </span>
          </div>
          {/* Tip 4 */}
          <div className="bg-[#F0FDF4] rounded-[10px] py-3.5 px-3 flex items-center gap-2.5">
            <div className="w-4.5 h-4.5 rounded-full bg-[#00A63E] flex items-center justify-center flex-shrink-0">
              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-gray-700 text-[12px] font-medium leading-normal">
              Prepare questions about the team structure and design culture
            </span>
          </div>
        </div>
      </div>

      {/* Section: Additional Notes */}
      <div 
        className="bg-[#FFFDF2] rounded-[12px] p-3.5 px-4 flex flex-col gap-1.5"
        style={{ border: '1px solid rgba(255, 240, 133, 1)' }}
      >
        <div className="flex items-center gap-2">
          <FiAlertCircle className="w-4 h-4 text-[#D97706]" strokeWidth={1.8} />
          <h3 className="text-[13px] font-bold text-gray-800">Additional Notes</h3>
        </div>
        <p className="text-gray-600 text-[12px] font-normal leading-normal pl-6">
          Please have your design files ready to share during the portfolio review.
        </p>
      </div>

    </div>
  );
}
