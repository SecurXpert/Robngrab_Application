import { LuX, LuDownload } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";

export function ShortlistedModal({ isOpen, setIsShortlistedModalOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">
                Shortlisted Candidates
              </h3>
              <p className="text-sm text-gray-600">
                Detailed view of shortlisted candidates
              </p>
            </div>
            <button
              onClick={() => setIsShortlistedModalOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <LuX className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          {/* Search */}
          <div className="relative">
            <FiSearch className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="Search by name, role, or recruiter..."
              className="w-full pl-9 pr-3 py-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-[#0A0A0A80]"
            />
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 min-h-0 p-4 overflow-y-auto">
          {/* Export */}
          <div className="mb-4">
            <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center">
              <LuDownload className="w-4 h-4 mr-2" />
              Export Data
            </button>
          </div>

          {/* Data List */}
          <div className="space-y-4">
            {[
              {
                name: "John Doe",
                role: "Senior Developer",
                status: "Shortlisted",
                recruiter: "sara johnson",
                category: "IT",
                date: "Jan 20, 2024",
              },
              {
                name: "Sarah Miller",
                role: "Product Manager",
                status: "Shortlisted",
                statusColor: "#1447E6",
                recruiter: "mike davis",
                category: "IT",
                date: "Jan 15, 2024",
              },
              {
                name: "Mike Johnson",
                role: "UX Designer",
                status: "Shortlisted",
                statusColor: "#1447E6",
                recruiter: "john smith",
                category: "IT",
                date: "Jan 10, 2024",
              },
              {
                name: "Emily Davis",
                role: "Data Analyst",
                status: "Shortlisted",
                statusColor: "#1447E6",
                recruiter: "lisa anderson",
                category: "IT",
                date: "Jan 8, 2024",
              },
              {
                name: "David Wilson",
                role: "Marketing Specialist",
                status: "Shortlisted",
                statusColor: "#1447E6",
                recruiter: "david martinez",
                category: "Non-IT",
                date: "Jan 5, 2024",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border-[1px] border-[#F3F4F6]"
                style={{
                  boxShadow:
                    "0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-base font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                  <span
                    className={`px-3 py-1 bg-[#EFF6FF] text-[#1447E6] text-xs font-medium rounded-full`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                  <div>
                    <p className="text-gray-600">Category</p>
                    <p className="text-gray-900">{item.category}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Recruiter</p>
                    <p className="text-gray-900">{item.recruiter}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="text-gray-900">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function InterviewProcessModal({
  isOpen,
  setIsInterviewProcessModalOpen,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">
                Interview Process
              </h3>
              <p className="text-sm text-gray-600">
                Detailed view of interview process
              </p>
            </div>
            <button
              onClick={() => setIsInterviewProcessModalOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <LuX className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          {/* Search */}
          <div className="relative">
            <FiSearch className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="Search by name, role, or interviewer..."
              className="w-full pl-9 pr-3 py-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-[#0A0A0A80]"
            />
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 min-h-0 p-4 overflow-y-auto">
          {/* Export */}
          <div className="mb-4">
            <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center">
              <LuDownload className="w-4 h-4 mr-2" />
              Export Data
            </button>
          </div>

          {/* Data List */}
          <div className="space-y-4">
            {[
              {
                name: "Alice Brown",
                role: "Frontend Developer",
                status: "inprogress",
                recruiter: "sara johnson",
                category: "IT",
                date: "Jan 22, 2024",
              },
              {
                name: "Bob Wilson",
                role: "Backend Engineer",
                status: "inprogress",
                recruiter: "mike davis",
                category: "IT",
                date: "Jan 21, 2024",
              },
              {
                name: "Carol Davis",
                role: "DevOps Engineer",
                status: "inprogress",
                recruiter: "john smith",
                category: "IT",
                date: "Jan 20, 2024",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border-[1px] border-[#F3F4F6]"
                style={{
                  boxShadow:
                    "0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-base font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      item.status === "inprogress"
                        ? "bg-[#FEFCE8] text-[#A65F00]"
                        : "bg-[#EFF6FF] text-[#1447E6]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                  <div>
                    <p className="text-gray-600">Category</p>
                    <p className="text-gray-900">{item.category}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Recruiter</p>
                    <p className="text-gray-900">{item.recruiter}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="text-gray-900">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function GenericMetricsModal({
  isOpen,
  selectedMetric,
  setIsMetricsModalOpen,
  modalConfig,
  generateModalData,
}) {
  if (!isOpen || !selectedMetric) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">
                {modalConfig[selectedMetric].title}
              </h3>
              <p className="text-sm text-gray-600">
                {modalConfig[selectedMetric].description}
              </p>
            </div>
            <button
              onClick={() => setIsMetricsModalOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <LuX className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          {/* Search */}
          <div className="relative">
            <FiSearch className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder={modalConfig[selectedMetric].placeholder}
              className="w-full pl-9 pr-3 py-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-[#0A0A0A80]"
            />
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 min-h-0 p-4 overflow-y-auto">
          {/* Export */}
          <div className="mb-4">
            <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center">
              <LuDownload className="w-4 h-4 mr-2" />
              Export Data
            </button>
          </div>

          {/* Data List */}
          <div className="space-y-4">
            {generateModalData(selectedMetric).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border-[1px] border-[#F3F4F6]"
                style={{
                  boxShadow:
                    "0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-base font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      item.status === "Selected"
                        ? "bg-[#F0FDF4] text-[#008236]"
                        : item.status === "Rejected"
                          ? "bg-[#FEF2F2] text-[#C10007]"
                          : item.status === "Viewed" ||
                              item.status === "Downloaded" ||
                              item.status === "Scheduled" ||
                              item.status === "inprogress" ||
                              item.status === "Completed"
                            ? "bg-[#FEFCE8] text-[#A65F00]"
                            : "bg-[#EFF6FF] text-[#1447E6]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                  <div>
                    <p className="text-gray-600">Category</p>
                    <p className="text-gray-900">{item.category || "IT"}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Recruiter</p>
                    <p className="text-gray-900">{item.interviewer}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="text-gray-900">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
