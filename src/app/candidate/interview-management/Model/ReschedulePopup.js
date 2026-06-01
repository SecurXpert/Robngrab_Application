'use client';

import { useState } from 'react';
import { FiX, FiCalendar, FiInfo } from 'react-icons/fi';
import RescheduleCalendar from '@/app/candidate/interview-management/Model/RescheduleCalendar';
import RescheduleReasons from '@/app/candidate/interview-management/Model/RescheduleReasons';

export default function ReschedulePopup({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState(12);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [selectedReason, setSelectedReason] = useState('other');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    alert(`Success! Interview rescheduled to Feb ${selectedDate}, 2026 at ${selectedTime}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#0F172A]/70 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
      <style>{`.no-Scrollbar::-Webkit-Scrollbar { display: none; }`}</style>

      {/* Modal Container - Curved corners enabled (rounded-[16px]) */}
      <div className="bg-white rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-full max-w-[620px] flex flex-col max-h-[90vh] overflow-hidden transform scale-100 transition-transform duration-300">
        
        {/* Header - White space with curved corners and decreased sizes */}
        <div className="p-5 border-b border-gray-100 flex flex-col gap-3 bg-white">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <h2 className="text-[17px] font-bold text-[#111827] tracking-tight">Reschedule Interview</h2>
              <span className="text-[11.5px] text-[#6B7280] mt-0.5 font-medium">Design Systems Lead at Linear</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-[#9CA3AF] hover:text-[#4B5563] hover:bg-gray-50 transition-all duration-200 cursor-pointer"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Compact Orange Current Interview Div - Placed in White Space, Decreased Size */}
          <div className="bg-[#FFF8F2] border border-[#FEEAD9] rounded-[8px] p-2.5 px-3 flex flex-col gap-1 shadow-sm flex-shrink-0">
            <div className="flex items-center gap-1.5 text-[#E26E1A] font-bold text-[9px] uppercase tracking-wider">
              <FiCalendar className="w-3 h-3" />
              <span>Current Interview</span>
            </div>
            <p className="text-[11px] font-bold text-[#374151]">
              October 5, 2023 at 10:00 AM - 11:00 AM PST
            </p>
          </div>
        </div>

        {/* Scrollable Content - Starts the grey bg */}
        <div className="flex-1 overflow-y-auto p-6 pb-10 flex flex-col gap-6 no-scrollbar bg-[#F9FAFB]">
          
          {/* STEP 1: Select New Date & Time - White background card, gray heading header */}
          <div className="bg-white border border-gray-200 rounded-[12px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex-shrink-0">
            <div className="bg-[#F3F4F6] border-b border-gray-200 py-3 px-4 flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#0163D5] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                1
              </span>
              <span className="text-[13px] font-bold text-[#374151]">Select New Date & Time</span>
            </div>
            <div className="p-4">
              <RescheduleCalendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
              />
            </div>
          </div>

          {/* STEP 2: Reason for Rescheduling - White background card, gray heading header */}
          <div className="bg-white border border-gray-200 rounded-[12px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex-shrink-0">
            <div className="bg-[#F3F4F6] border-b border-gray-200 py-3 px-4 flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#0163D5] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                2
              </span>
              <span className="text-[13px] font-bold text-[#374151]">Reason for Rescheduling</span>
            </div>
            <div className="p-4">
              <RescheduleReasons
                selectedReason={selectedReason}
                setSelectedReason={setSelectedReason}
              />
            </div>
          </div>

          {/* STEP 3: Additional Notes - White background card, gray heading header */}
          <div className="bg-white border border-gray-200 rounded-[12px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex-shrink-0">
            <div className="bg-[#F3F4F6] border-b border-gray-200 py-3 px-4 flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-gray-400 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                3
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-bold text-[#374151] leading-tight">
                  Additional Notes
                </span>
                <span className="text-gray-400 font-normal text-[9.5px] leading-tight">
                  (Optional)
                </span>
              </div>
            </div>
            <div className="p-2.5">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Provide any additional context or information that might be helpful..."
                className="w-full min-h-[90px] border border-gray-200 rounded-[8px] p-2 px-3 bg-white text-[11px] text-[#374151] font-medium outline-none focus:border-[#0163D5] transition-colors resize-none placeholder-gray-400 placeholder:text-[11px] shadow-sm"
              />
            </div>
          </div>

        </div>

        {/* Footer - Straight outer corners, rounded buttons */}
        <div className="p-4 pb-6 border-t border-gray-100 flex justify-between items-center bg-white rounded-none">
          <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-semibold">
            <FiInfo className="w-3.5 h-3.5 text-gray-400" />
            <span>Please complete all required fields</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-[6px] border border-gray-300 text-[#374151] hover:bg-gray-50 font-bold text-[11px] transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-3.5 py-1.5 rounded-[6px] hover:opacity-90 text-white font-bold text-[11px] transition-all shadow-sm flex items-center gap-1 cursor-pointer"
              style={{ background: 'rgba(21, 93, 252, 1)' }}
            >
              <span>Submit Request</span>
              <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
