"use client";

import React, { useState } from 'react';
import { FiCalendar, FiClock, FiVideo, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import InterviewModal from '@/app/candidate/interview-management/Model/InterviewModal';

const InterviewManagement = () => {
  const [selectedInterview, setSelectedInterview] = useState(null);

  const interviews = [
    {
      id: 1,
      role: 'Senior Frontend Engineer',
      company: 'TechCorp Inc.',
      round: 'Technical Round 1',
      fullDate: 'Sunday, February 15, 2026',
      date: 'Feb 15, 2026',
      time: '2:00 PM',
      timezone: 'IST (GMT+5:30)',
      status: 'Scheduled',
      statusBg: 'bg-[#DBEAFE] text-[#0163D5]',
      isRescheduled: false,
      meetingLink: 'https://meet.google.com/abc-defg-hij',
    },
    {
      id: 2,
      role: 'Senior Frontend Engineer',
      company: 'TechCorp Inc.',
      round: 'Technical Round 1',
      fullDate: 'Sunday, February 15, 2026',
      date: 'Feb 15, 2026',
      time: '2:00 PM',
      timezone: 'IST (GMT+5:30)',
      status: 'Scheduled',
      statusBg: 'bg-[#DBEAFE] text-[#0163D5]',
      isRescheduled: false,
      meetingLink: 'https://meet.google.com/abc-defg-hij',
    },
    {
      id: 3,
      role: 'Backend Engineer',
      company: 'CloudScale Systems',
      round: 'System Design',
      fullDate: 'Sunday, February 22, 2026',
      date: 'Feb 22, 2026',
      time: '11:00 AM',
      timezone: 'IST (GMT+5:30)',
      status: 'Rescheduled',
      statusBg: 'bg-[#FEF3C7] text-[#D97706]',
      isRescheduled: true,
      originalDate: 'Feb 21, 2026',
      updatedDate: 'Updated on Feb 13, 2026 · 4:30 PM',
      originalCardDate: 'Feb 21, 11:00 AM',
      updatedCardDate: 'Updated Feb 13',
      meetingLink: 'https://meet.google.com/abc-defg-hij',
    },
    {
      id: 4,
      role: 'Product Designer',
      company: 'DesignHub',
      round: 'Portfolio Review',
      fullDate: 'Sunday, February 18, 2026',
      date: 'Feb 18, 2026',
      time: '10:30 AM',
      timezone: 'IST (GMT+5:30)',
      status: 'Rescheduled',
      statusBg: 'bg-[#FEF3C7] text-[#D97706]',
      isRescheduled: true,
      originalDate: 'Feb 17, 2026',
      updatedDate: 'Updated on Feb 14, 2026 · 4:30 PM',
      originalCardDate: 'Feb 17, 10:30 AM',
      updatedCardDate: 'Updated Feb 14',
      meetingLink: 'https://meet.google.com/xyz-uvwx-rst',
    },
  ];

  return (
    <>
      <div className="rounded-xl border border-gray-200/80 px-3 pt-4 pb-3.5 shadow-sm" style={{ background: 'linear-gradient(180deg, rgba(1, 99, 213, 0.05) 0%, rgba(22, 43, 92, 0.05) 100%)' }}>
        <div className="flex justify-between items-center mb-3.5">
          <h2 className="text-xl font-bold text-[rgba(10,10,10,1)] ml-1">Interview Management</h2>
          <div className="flex items-center space-x-2 mr-1">
            <div className="flex items-center gap-1 bg-white border border-gray-200 text-gray-700 text-[11px] font-bold px-2.5 py-1 rounded shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
              <span>Today</span>
              <FiChevronDown className="w-3 h-3 text-gray-500" />
            </div>
            <div className="flex items-center gap-1 bg-[#0163D5] text-white text-[11px] font-semibold px-3 py-1.5 rounded shadow-sm cursor-pointer hover:bg-blue-700 transition-colors">
              <span>View all</span>
              <FiChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {interviews.map((interview) => (
            <div 
              key={interview.id} 
              onClick={() => setSelectedInterview(interview)}
              className="bg-white border border-gray-200/80 rounded-lg p-3.5 shadow-sm hover:shadow transition-shadow flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-sm text-gray-600 group-hover:text-[#0163D5] transition-colors">{interview.role}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${interview.statusBg}`}>
                    {interview.status}
                  </span>
                </div>
                <p className="text-xs font-medium text-gray-500 mb-2.5">{interview.company}</p>

                <div className="space-y-1 mb-2.5">
                  <div className="flex items-center space-x-2 text-xs font-medium text-gray-600">
                    <FiCalendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>{interview.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-medium text-gray-600">
                    <FiClock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{interview.time}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-medium text-gray-500 pt-1 group-hover:text-[#0163D5] transition-colors">
                  <div className="flex items-center space-x-2">
                    <FiVideo className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0163D5] transition-colors" />
                    <span>Video</span>
                  </div>
                  <FiChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0163D5] transition-colors" />
                </div>

                {interview.isRescheduled && (
                  <div className="flex items-center justify-between pt-2 mt-2 border-t border-gray-100 text-[11px] font-medium text-[#D97706]">
                    <div>
                      <p className="mb-0.5">Originally: {interview.originalCardDate}</p>
                      <p>{interview.updatedCardDate}</p>
                    </div>
                    <FiChevronRight className="w-4 h-4 text-[#D97706]/60" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <InterviewModal 
        interview={selectedInterview} 
        onClose={() => setSelectedInterview(null)} 
      />
    </>
  );
};

export default InterviewManagement;
