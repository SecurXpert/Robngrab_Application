'use client';

import React from 'react';

export default function RescheduleCalendar({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime
}) {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  // February 2026 days array
  const feb2026Days = Array.from({ length: 28 }, (_, i) => i + 1);

  // Available days: weekdays from Feb 12th onwards
  const isAvailableDay = (day) => {
    if (day < 12) return false;
    const dayOfWeek = (day - 1) % 7; // Feb 1st is Sunday
    return dayOfWeek !== 0 && dayOfWeek !== 6; // Not weekend
  };

  const timeslots = [
    '9:00 AM', '9:30 AM',
    '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM'
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* 1st Div: Choose Date with gray bg */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[9.5px] font-bold text-gray-400 tracking-wider pl-0.5">Choose date</label>
        <div className="border border-gray-200 rounded-[12px] p-4 bg-[#F9FAFB] flex flex-col gap-3">
          
          {/* Calendar Month Header */}
          <div className="flex justify-between items-center px-1">
            <button type="button" className="text-gray-400 hover:text-gray-700 text-sm font-bold cursor-pointer">‹</button>
            <span className="text-[13px] font-bold text-[#111827]">February 2026</span>
            <button type="button" className="text-gray-400 hover:text-gray-700 text-sm font-bold cursor-pointer">›</button>
          </div>

          {/* Days of week */}
          <div className="grid grid-cols-7 gap-y-2 text-center">
            {daysOfWeek.map((day, idx) => (
              <span key={idx} className="text-[10px] font-bold text-gray-400">{day}</span>
            ))}
          </div>

          {/* Days grid - Custom rounded cards with dynamic backgrounds and no borders */}
          <div className="grid grid-cols-7 gap-1.5 text-center">
            {feb2026Days.map((day) => {
              const available = isAvailableDay(day);
              const isSelected = selectedDate === day;

              return (
                <button
                  key={day}
                  type="button"
                  disabled={!available}
                  onClick={() => setSelectedDate(day)}
                  className={`w-full h-9 rounded-[6px] text-[11px] flex items-center justify-center transition-all cursor-pointer disabled:cursor-not-allowed ${
                    isSelected
                      ? 'bg-[#155DFC] text-white font-bold shadow-sm'
                      : available
                      ? 'bg-white text-[#111827] font-bold hover:bg-gray-50'
                      : 'bg-[#F3F4F6] text-gray-300 font-normal'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <span className="text-[9.5px] text-gray-400 text-center block mt-1">Weekends are not available</span>
        </div>
      </div>

      {/* 2nd Div: Choose Time with gray bg & two-column curved elements */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[9.5px] font-bold text-gray-400 tracking-wider pl-0.5">Choose time</label>
        <div className="grid grid-cols-2 gap-1.5 border border-gray-200 rounded-[12px] p-2.5 bg-[#F9FAFB] h-[246px] overflow-y-auto no-scrollbar">
          {timeslots.map((time) => {
            const isSelected = selectedTime === time;
            return (
              <button
                key={time}
                type="button"
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-1.5 rounded-[6px] text-[11px] font-semibold text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#155DFC] text-white shadow-sm'
                    : 'bg-[#F3F4F6] text-[#8E9AA8] hover:bg-gray-200'
                }`}
              >
                {time}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
