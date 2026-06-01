import {
  FiUsers,
  FiBriefcase,
  FiEye,
  FiDownload,
} from "react-icons/fi";
import {
  LuCalendar,
  LuDollarSign,
  LuActivity,
  LuCircleCheckBig,
  LuUserRoundCheck,
  LuChevronRight,
} from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function VendorMetrics({
  vendor,
  metrics,
  cardConfig,
  setIsShortlistedModalOpen,
  setIsInterviewProcessModalOpen,
  openMetricsModal,
}) {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <div className="p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 text-[#155DFC] mr-2 flex items-center justify-center flex-shrink-0">
              <FiUsers />
            </div>
            <p className="text-sm leading-tight text-gray-600 whitespace-nowrap">
              Total Recruiters
            </p>
          </div>
          <p className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">
            {vendor.recruiters}
          </p>
        </div>
        <div className="p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 text-[#9810FA] mr-2 flex items-center justify-center flex-shrink-0">
              <FiBriefcase />
            </div>
            <p className="text-sm leading-tight text-gray-600 whitespace-nowrap">
              Candidates Handled
            </p>
          </div>
          <p className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">
            {metrics.candidateInterviews}
          </p>
        </div>
        <div className="p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 text-[#4F39F6] mr-2 flex items-center justify-center flex-shrink-0">
              <FiEye />
            </div>
            <p className="text-sm leading-tight text-gray-600 whitespace-nowrap">
              Resume Views
            </p>
          </div>
          <p className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">
            {metrics.totalResumeViews}
          </p>
        </div>
        <div className="p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 text-[#F54900] mr-2 flex items-center justify-center flex-shrink-0">
              <FiDownload />
            </div>
            <p className="text-sm leading-tight text-gray-600 whitespace-nowrap">
              Resume Downloads
            </p>
          </div>
          <p className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">
            {metrics.totalResumeDownloads}
          </p>
        </div>
        <div className="p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 text-[#0092B8] mr-2 flex items-center justify-center flex-shrink-0">
              <LuCalendar />
            </div>
            <p className="text-sm leading-tight text-gray-600 whitespace-nowrap">
              Total Interviews
            </p>
          </div>
          <p className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">
            {metrics.totalInterviews}
          </p>
        </div>
        <div className="p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 text-[#009689] mr-2 flex items-center justify-center flex-shrink-0">
              <LuDollarSign />
            </div>
            <p className="text-sm leading-tight text-gray-600 whitespace-nowrap">
              Balance
            </p>
          </div>
          <p className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">
            {metrics.totalBalanceRemaining}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-family-inter font-weight-500 text-[#0A0A0A] mb-4">
          Hiring Metrics Dashboard
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(cardConfig).map(([key, config]) => (
            <div
              key={key}
              className="p-5 bg-white border border-gray-200 shadow-sm rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                {config.icon === "LuUserRoundCheck" ? (
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                    <LuUserRoundCheck className="w-5 h-5 text-[#155DFC]" />
                  </div>
                ) : config.icon === "LuActivity" ? (
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                    <LuActivity className="w-5 h-5 text-[#155DFC]" />
                  </div>
                ) : config.icon === "CiCalendar" ? (
                  <div className="w-10 h-10 bg-[#ECFEFF] rounded-lg flex items-center justify-center">
                    <CiCalendar className="w-5 h-5 text-[#0092B8]" />
                  </div>
                ) : config.icon === "LuCircleCheckBig" ? (
                  <div className="w-10 h-10 bg-[#F0FDF4] rounded-lg flex items-center justify-center">
                    <LuCircleCheckBig className="w-5 h-5 text-[#00A63E]" />
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
                ) : config.icon === "LuDollarSign" ? (
                  <div className="w-10 h-10 bg-[#FEFCE8] rounded-lg flex items-center justify-center">
                    <LuDollarSign className="w-5 h-5 text-[#D08700]" />
                  </div>
                ) : (
                  <svg
                    className={`w-6 h-6 text-${config.color}-500`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={config.icon}
                    />
                  </svg>
                )}
                <a
                  onClick={() =>
                    key === "shortlisted"
                      ? setIsShortlistedModalOpen(true)
                      : key === "interviewProcess"
                        ? setIsInterviewProcessModalOpen(true)
                        : openMetricsModal(config.modal)
                  }
                  className="text-sm text-[#0A0A0A] flex items-center cursor-pointer hover:text-gray-800"
                >
                  View{" "}
                  <LuChevronRight className="w-3.5 h-3.5 ml-1 text-[#0A0A0A]" />
                </a>
              </div>
              <p className="text-3xl font-family-inter font-weight-500 text-[#0A0A0A] mb-1">
                {config.value}
              </p>
              <p className="text-sm text-gray-600">{config.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
