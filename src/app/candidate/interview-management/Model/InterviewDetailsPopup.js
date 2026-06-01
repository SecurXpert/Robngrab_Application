'use client';

import React, { useState } from 'react';
import { 
  FiX, 
  FiCalendar, 
  FiClock
} from 'react-icons/fi';
import InterviewDetailsContent from '@/app/candidate/interview-management/Model/InterviewDetailsContent';

export default function InterviewDetailsPopup({ isOpen, onClose, onRescheduleClick }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://meet.google.com/sjp-mcl-srd");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddToCalendar = () => {
    alert("Success! This interview has been added to your calendar.");
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[16px] shadow-2xl w-full max-w-[600px] h-[90vh] max-h-[780px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header - Gradient Blue Theme */}
        <div 
          style={{ background: 'linear-gradient(90deg, #155DFC 0%, #4F39F6 100%)' }}
          className="p-6 text-white flex flex-col gap-4 relative flex-shrink-0"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <FiX className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            {/* Left: Large Calendar Icon with Light Blue / Semi-transparent Background */}
            <div className="w-10 h-10 rounded-[10px] bg-white/20 flex items-center justify-center flex-shrink-0">
              <FiCalendar className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            
            {/* Right: Title & Subtitle with Decreased Font Sizes */}
            <div className="flex flex-col gap-0.5">
              <h2 className="text-[17px] font-semibold tracking-tight text-white leading-tight">Interview Schedule</h2>
              <span className="text-[12px] text-white/80 font-medium">Senior Product Designer at Stripe</span>
            </div>
          </div>

          {/* 3 equal length divs down - Smaller, Left Aligned with Horizonal Icon+Label and Vertical Value */}
          <div className="grid grid-cols-3 gap-2 mt-1">
            {/* Div 1 */}
            <div 
              style={{ background: 'rgba(255, 255, 255, 0.1)' }}
              className="rounded-[10px] p-3.5 flex flex-col items-start gap-1.5 border border-white/10"
            >
              <div className="flex items-center gap-1 text-white/80">
                <FiCalendar className="w-3.5 h-3.5 text-white flex-shrink-0" strokeWidth={2} />
                <span className="text-[9.5px] uppercase tracking-wider font-bold">Date</span>
              </div>
              <span className="text-[11px] font-bold text-white leading-tight mt-0.5">October 2, 2023</span>
            </div>
            {/* Div 2 */}
            <div 
              style={{ background: 'rgba(255, 255, 255, 0.1)' }}
              className="rounded-[10px] p-3.5 flex flex-col items-start gap-1.5 border border-white/10"
            >
              <div className="flex items-center gap-1 text-white/80">
                <FiClock className="w-3.5 h-3.5 text-white flex-shrink-0" strokeWidth={2} />
                <span className="text-[9.5px] uppercase tracking-wider font-bold">Time</span>
              </div>
              <span className="text-[11px] font-bold text-white leading-tight mt-0.5">2:00 PM - 3:30 PM EST</span>
            </div>
            {/* Div 3 */}
            <div 
              style={{ background: 'rgba(255, 255, 255, 0.1)' }}
              className="rounded-[10px] p-3.5 flex flex-col items-start gap-1.5 border border-white/10"
            >
              <div className="flex items-center gap-1 text-white/80">
                <FiClock className="w-3.5 h-3.5 text-white flex-shrink-0" strokeWidth={2} />
                <span className="text-[9.5px] uppercase tracking-wider font-bold">Duration</span>
              </div>
              <span className="text-[11px] font-bold text-white leading-tight mt-0.5">90 minutes</span>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <InterviewDetailsContent copied={copied} handleCopyLink={handleCopyLink} />

        {/* Footer */}
        <div 
          className="py-5 px-6 flex gap-3 bg-white flex-shrink-0"
          style={{ borderTop: '1px solid rgba(229, 231, 235, 1)' }}
        >
          <button
            onClick={handleAddToCalendar}
            className="flex-[2.2] py-2.5 px-3 rounded-[8px] hover:opacity-90 text-white font-semibold text-[13px] transition-all flex items-center justify-center h-11 cursor-pointer shadow-sm"
            style={{ background: 'rgba(21, 93, 252, 1)' }}
          >
            Add to Calendar
          </button>
          <button
            onClick={() => {
              onClose();
              if (onRescheduleClick) onRescheduleClick();
            }}
            className="flex-[2.2] py-2.5 px-3 rounded-[8px] border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold text-[13px] transition-all flex items-center justify-center h-11 cursor-pointer"
          >
            Reschedule Interview
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-3 rounded-[8px] border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-[13px] transition-all flex items-center justify-center h-11 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
