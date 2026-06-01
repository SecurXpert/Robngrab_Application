import React from 'react';
import { FiUsers } from "react-icons/fi";
import { LuDollarSign, LuCircleAlert, LuClock4, LuCircleCheckBig } from "react-icons/lu";
import { SUMMARY_CARDS } from '@/utils/coldDataConstants';

// Icon mapping object
const iconMap = {
  'FiUsers': FiUsers,
  'LuDollarSign': LuDollarSign,
  'LuCircleAlert': LuCircleAlert,
  'LuClock4': LuClock4,
  'LuCircleCheckBig': LuCircleCheckBig,
};

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-6 mt-0">
      {SUMMARY_CARDS.map((card, index) => {
        const IconComponent = iconMap[card.icon];
        return (
          <div key={index} className="bg-white rounded-xl shadow p-5">
            {/* Icon - First Row with colored background */}
            <div className={`${card.bgColor} rounded-lg p-2 flex justify-start mb-2 w-fit`}>
              {IconComponent && <IconComponent className={`w-6 h-6 ${card.iconColor}`} />}
            </div>

            {/* Title - Second Row */}
            <p className="text-sm font-medium text-[#6A7282] text-start">{card.title}</p>

            {/* Value - Third Row */}
            <p className="text-2xl font-semibold text-[#0A0A0A] mt-1 text-start">{card.value}</p>
          </div>
        );
      })}
    </div>
  );
}
