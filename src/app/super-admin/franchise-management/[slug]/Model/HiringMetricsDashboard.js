import { Activity, DollarSign, UserCheck } from "lucide-react";
import { CiCalendar } from "react-icons/ci";
import { CircleCheckBig } from "lucide-react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FiEye, FiDownload } from "react-icons/fi";

export default function HiringMetricsDashboard({
  cardConfig,
  setIsShortlistedModalOpen,
  setIsSelectedCandidatesModalOpen,
  setIsInterviewProcessModalOpen,
  openMetricsModal,
}) {
  return (
    <div className="mb-6">
      <h2 className="mb-4 text-xl font-normal text-gray-900">
        Hiring Metrics Dashboard
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(cardConfig).map(([key, config]) => (
          <div
            key={key}
            className="p-5 bg-white border border-gray-200 shadow-sm rounded-xl"
          >
            <div className="flex items-center justify-between mb-4">
              {config.icon === "UserCheck" ? (
                <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-[#155DFC]" />
                </div>
              ) : config.icon === "Activity" ? (
                <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#155DFC]" />
                </div>
              ) : config.icon === "CiCalendar" ? (
                <div className="w-10 h-10 bg-[#ECFEFF] rounded-lg flex items-center justify-center">
                  <CiCalendar className="w-5 h-5 text-[#0092B8]" />
                </div>
              ) : config.icon === "CircleCheckBig" ? (
                <div className="w-10 h-10 bg-[#F0FDF4] rounded-lg flex items-center justify-center">
                  <CircleCheckBig className="w-5 h-5 text-[#00A63E]" />
                </div>
              ) : config.icon === "FaRegCircleXmark" ? (
                <div className="w-10 h-10 bg-[#FEF2F2] rounded-lg flex items-center justify-center">
                  <FaRegCircleXmark className="w-5 h-5 text-[#E7000B]" />
                </div>
              ) : config.icon === "FiEye" ? (
                <div className="w-10 h-10 bg-[#EEF2FF] rounded-lg flex items-center justify-center">
                  <FiEye className="w-5 h-5 text-[#4F39F6]" />
                </div>
              ) : config.icon === "FiDownload" ? (
                <div className="w-10 h-10 bg-[#FFF7ED] rounded-lg flex items-center justify-center">
                  <FiDownload className="w-5 h-5 text-[#F54900]" />
                </div>
              ) : config.icon === "DollarSign" ? (
                <div className="w-10 h-10 bg-[#F0FDF4] rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#00A63E]" />
                </div>
              ) : null}
              <a
                onClick={() =>
                  key === "shortlisted"
                    ? setIsShortlistedModalOpen(true)
                    : key === "selectedCandidates"
                      ? setIsSelectedCandidatesModalOpen(true)
                      : key === "interviewProcess"
                        ? setIsInterviewProcessModalOpen(true)
                        : openMetricsModal(config.modal)
                }
                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-gray-800"
              >
                View{" "}
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <p className="mt-6 mb-3 text-3xl font-bold text-gray-900">
              {config.value}
            </p>
            <p className="text-sm text-gray-600">{config.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
