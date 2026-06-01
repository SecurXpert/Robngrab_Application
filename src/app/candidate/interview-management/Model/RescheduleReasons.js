'use client';

import React from 'react';

export default function RescheduleReasons({ selectedReason, setSelectedReason }) {
  const reasons = [
    { key: 'conflict', title: 'Schedule conflict', desc: 'I have another commitment at this time' },
    { key: 'emergency', title: 'Personal emergency', desc: 'Unexpected personal matter' },
    { key: 'medical', title: 'Medical appointment', desc: 'Health-related conflict' },
    { key: 'travel', title: 'Travel conflict', desc: 'Unable to attend due to travel' },
    { key: 'preparation', title: 'Need more preparation time', desc: 'Would like additional time to prepare' },
    { key: 'other', title: 'Other reason', desc: 'Please specify in notes below' }
  ];

  return (
    <div className="flex flex-col gap-2.5">
      {reasons.map((r) => {
        const isSelected = selectedReason === r.key;
        return (
          <div
            key={r.key}
            onClick={() => setSelectedReason(r.key)}
            className={`p-2.5 border rounded-[8px] flex flex-col gap-0.5 cursor-pointer transition-all ${
              isSelected
                ? 'border-[#0163D5] bg-[#F0F7FF]'
                : 'border-gray-200 bg-white hover:bg-gray-50'
            }`}
          >
            <div className="pl-3">
              <span className={`text-[11.5px] font-bold block ${isSelected ? 'text-[#0163D5]' : 'text-[#111827]'}`}>
                {r.title}
              </span>
              <span className={`text-[10px] block ${isSelected ? 'text-[#1d4ed8] opacity-80' : 'text-[#6B7280]'}`}>
                {r.desc}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
