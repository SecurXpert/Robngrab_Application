"use client";

import React, { useState } from 'react';
import { FiCheck, FiX, FiBell } from 'react-icons/fi';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('All');

  const notifications = [
    {
      id: 1,
      title: 'Application Approved',
      status: 'Approved',
      statusBg: 'bg-[#D1FAE5] text-[#059669]',
      icon: FiCheck,
      iconWrapper: 'w-5 h-5 rounded-full border-2 border-[#059669] text-[#059669] flex items-center justify-center flex-shrink-0 mt-0.5',
      company: 'Senior Software Engineer at TechCorp Inc.',
      message: 'Your application for Senior Software Engineer has been approved for the next round.',
      time: '2 hours ago',
      hasReason: false,
    },
    {
      id: 2,
      title: 'Application Update',
      status: 'Rejected',
      statusBg: 'bg-[#FEE2E2] text-[#DC2626]',
      icon: FiX,
      iconWrapper: 'w-5 h-5 rounded-full border-2 border-[#DC2626] text-[#DC2626] flex items-center justify-center flex-shrink-0 mt-0.5',
      company: 'Software Developer at InnovateLab',
      message: 'Thank you for your interest. We have decided to move forward with other candidates.',
      time: '5 hours ago',
      hasReason: true,
      reason: 'Experience level did not match requirements',
    },
    {
      id: 3,
      title: 'New job Match',
      status: 'New Match',
      statusBg: 'bg-[#F3E8FF] text-[#9333EA]',
      icon: FiBell,
      iconWrapper: 'w-5 h-5 text-[#9333EA] flex items-center justify-center flex-shrink-0 mt-0.5',
      company: 'Senior Software Engineer at TechCorp Inc.',
      message: 'Your application for Senior Software Engineer has been approved for the next round.',
      time: '1 day ago',
      hasReason: false,
    },
    {
      id: 4,
      title: 'New job Match',
      status: 'New Match',
      statusBg: 'bg-[#F3E8FF] text-[#9333EA]',
      icon: FiBell,
      iconWrapper: 'w-5 h-5 text-[#9333EA] flex items-center justify-center flex-shrink-0 mt-0.5',
      company: 'Senior Software Engineer at TechCorp Inc.',
      message: 'Your application for Senior Software Engineer has been approved for the next round.',
      time: '1 day ago',
      hasReason: false,
    },
  ];

  return (
    <div className="rounded-xl border border-gray-200/80 p-5 shadow-sm flex-1 flex flex-col justify-between" style={{ background: 'linear-gradient(180deg, rgba(1, 99, 213, 0.05) 0%, rgba(22, 43, 92, 0.05) 100%)' }}>
      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center space-x-2 mb-0.5">
              <FiBell className="w-4.5 h-4.5 text-gray-600 flex-shrink-0" />
              <h2 className="text-sm font-semibold text-gray-600">Notifications</h2>
              <span className="bg-[#DC2626] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold ml-0.5">
                2
              </span>
            </div>
            <p className="text-[13px] text-gray-500 font-medium ml-6 mt-1.5">Stay updated on your job applications</p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('All')}
              className={`text-xs px-3 py-1 rounded font-semibold transition-colors shadow-sm ${activeTab === 'All' ? 'bg-[#0163D5] text-white border border-[#0163D5]' : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900'
                }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('Unread')}
              className={`text-xs px-3 py-1 rounded font-semibold transition-colors shadow-sm ${activeTab === 'Unread' ? 'bg-[#0163D5] text-white border border-[#0163D5]' : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900'
                }`}
            >
              Unread (2)
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {notifications.map((notif) => (
            <div key={notif.id} className="bg-white border border-gray-200/80 p-3.5 shadow-sm hover:shadow transition-shadow flex items-start space-x-3.5">
              <div className={notif.iconWrapper}>
                <notif.icon className={notif.id >= 3 ? "w-5 h-5 stroke-[2.2]" : "w-3 h-3 stroke-[3]"} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-sm text-gray-900 truncate">{notif.title}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ml-2 ${notif.statusBg}`}>
                    {notif.status}
                  </span>
                </div>

                <span className="text-xs font-normal text-gray-500 mb-1 block">{notif.company}</span>
                <p className="text-xs font-normal text-gray-500 mb-2.5 leading-relaxed">{notif.message}</p>

                {notif.hasReason && (
                  <div className="bg-[#FEF2F2] border border-red-100 rounded p-2.5 mb-2.5 text-xs text-[#DC2626] font-medium leading-normal">
                    <span className="font-bold">Reason: </span>
                    <span>{notif.reason}</span>
                  </div>
                )}

                <div className="flex justify-between items-center pt-1">
                  <span className="text-xs font-normal text-[#0163D5]">{notif.time}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0163D5]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
