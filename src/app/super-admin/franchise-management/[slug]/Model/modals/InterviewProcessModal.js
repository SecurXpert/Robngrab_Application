import { LuDownload } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import GenericModal from '@/app/super-admin/franchise-management/[slug]/Model/modals/GenericModal';

export default function InterviewProcessModal({
  isOpen,
  onClose,
  downloadCSV,
}) {
  if (!isOpen) return null;

  return (
    <GenericModal
      isOpen={isOpen}
      onClose={onClose}
      title="Interview Process Details"
      subtitle="Detailed view of interview process details"
      maxWidth="max-w-3xl"
    >
      {/* Search */}
      <div className="relative mt-1 mb-5">
        <FiSearch className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 left-3 top-1/2" />

        <input
          type="text"
          placeholder="Search candidates..."
          className="w-full h-11 pl-10 pr-4 border border-[#D1D5DB] rounded-xl text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Export */}
      <div className="mb-5">
        <button
          onClick={() => {
            const headers = [
              "Name",
              "Role",
              "Status",
              "Stage",
              "Interviewer",
              "Date",
            ];

            const rows = [
              [
                "John Doe",
                "Senior Developer",
                "In Progress",
                "Technical Interview",
                "Sarah Johnson",
                "January 15, 2024",
              ],
              [
                "Sarah Miller",
                "Product Manager",
                "Completed",
                "Final Round",
                "Mike Davis",
                "January 14, 2024",
              ],
              [
                "Mike Johnson",
                "UX Designer",
                "Scheduled",
                "Initial Screening",
                "John Smith",
                "January 13, 2024",
              ],
            ];

            downloadCSV("interview_process_details.csv", headers, rows);
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-xl text-[13px] font-medium hover:bg-blue-700 transition-colors"
        >
          <LuDownload className="w-4 h-4" />
          Export Data
        </button>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {[
          {
            name: "John Doe",
            role: "Senior Developer",
            status: "In Progress",
            stage: "Technical Interview",
            interviewer: "Sarah Johnson",
            date: "January 15, 2024",
          },
          {
            name: "Sarah Miller",
            role: "Product Manager",
            status: "Completed",
            stage: "Final Round",
            interviewer: "Mike Davis",
            date: "January 14, 2024",
          },
          {
            name: "Mike Johnson",
            role: "UX Designer",
            status: "Scheduled",
            stage: "Initial Screening",
            interviewer: "John Smith",
            date: "January 13, 2024",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border border-[#E5E7EB] rounded-2xl p-4 bg-white"
          >
            {/* Top */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-[16px] font-semibold text-[#111827]">
                  {item.name}
                </p>

                <p className="mt-0.5 text-[14px] text-[#6B7280]">
                  {item.role}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-[11px] font-medium ${
                  item.status === "Completed"
                    ? "bg-[#ECFDF3] text-[#16A34A]"
                    : item.status === "Scheduled"
                      ? "bg-[#EFF6FF] text-[#2563EB]"
                      : "bg-[#FEFCE8] text-[#A65F00]"
                }`}
              >
                {item.status}
              </span>
            </div>

            {/* Bottom */}
            <div className="grid grid-cols-2 gap-y-3">
              {/* Left */}
              <div>
                <div className="mb-4">
                  <p className="text-[12px] text-[#6B7280] mb-1">Stage</p>

                  <p className="text-[14px] font-medium text-[#111827]">
                    {item.stage}
                  </p>
                </div>

                <div>
                  <p className="text-[12px] text-[#6B7280] mb-1">Date</p>

                  <p className="text-[14px] font-medium text-[#111827]">
                    {item.date}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="pl-10">
                <div>
                  <p className="text-[12px] text-[#6B7280] mb-1">
                    Interviewer
                  </p>

                  <p className="text-[14px] font-medium text-[#111827]">
                    {item.interviewer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GenericModal>
  );
}
