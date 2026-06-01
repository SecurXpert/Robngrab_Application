"use client";

import React from "react";
import {
  UserCheck,
  Activity,
  CircleCheckBig,
  DollarSign,
} from "lucide-react";
import { FiEye, FiDownload } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { FaRegCircleXmark } from "react-icons/fa6";

const iconMap = {
  UserCheck: UserCheck,
  Activity: Activity,
  CiCalendar: CiCalendar,
  CircleCheckBig: CircleCheckBig,
  FaRegCircleXmark: FaRegCircleXmark,
  FiEye: FiEye,
  FiDownload: FiDownload,
  DollarSign: DollarSign,
};

export default function HiringMetrics({ onCardClick }) {
  const cardConfig = {
    shortlisted: {
      icon: "UserCheck",
      color: "blue",
      value: 47,
      label: "Shortlisted Candidates",
      modal: "shortlisted",
    },
    interviewProcess: {
      icon: "Activity",
      color: "purple",
      value: 89,
      label: "Interview Process",
      modal: "interviewProcess",
    },
    interviewScheduled: {
      icon: "CiCalendar",
      color: "green",
      value: 23,
      label: "Interview Scheduled",
      modal: "interviewScheduled",
    },
    interviewCompleted: {
      icon: "CircleCheckBig",
      color: "red",
      value: 156,
      label: "Interview Completed",
      modal: "interviewCompleted",
    },
    rejectedCandidates: {
      icon: "FaRegCircleXmark",
      color: "orange",
      value: 67,
      label: "Rejected Candidates",
      modal: "rejectedCandidates",
    },
    selectedCandidates: {
      icon: "CircleCheckBig",
      color: "yellow",
      value: 34,
      label: "Selected Candidates",
      modal: "selectedCandidates",
    },
    totalResumeViews: {
      icon: "FiEye",
      color: "indigo",
      value: 45,
      label: "Total Resume Views",
      modal: "totalResumeViews",
    },
    totalResumeDownloads: {
      icon: "FiDownload",
      color: "pink",
      value: 38,
      label: "Total Resume Downloads",
      modal: "totalResumeDownloads",
    },
    totalBalanceRemaining: {
      icon: "DollarSign",
      color: "gray",
      value: 12,
      label: "Total Balance Remaining",
      modal: "totalBalanceRemaining",
    },
  };

  const colorStyles = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-100" },
    red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-100" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-100" },
    yellow: { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-100" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" },
    pink: { bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-100" },
    gray: { bg: "bg-gray-50", text: "text-gray-600", border: "border-gray-100" },
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Hiring Metrics Dashboard
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(cardConfig).map(([key, card]) => {
          const IconComponent = iconMap[card.icon];
          const style = colorStyles[card.color];
          return (
            <div
              key={key}
              onClick={() => onCardClick(card.modal)}
              className={`p-6 bg-white border ${style.border} rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-between group`}
            >
              <div>
                <span className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {card.value}
                </span>
                <p className="text-sm font-medium text-gray-500 mt-1">
                  {card.label}
                </p>
              </div>
              <div className={`p-4 rounded-xl ${style.bg} ${style.text}`}>
                <IconComponent className="w-6 h-6" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
