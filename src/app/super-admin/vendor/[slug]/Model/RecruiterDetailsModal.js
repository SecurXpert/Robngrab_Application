import { LuX, LuDownload, LuActivity, LuClock4, LuCoffee, LuBan } from "react-icons/lu";

export default function RecruiterDetailsModal({
  isOpen,
  setIsRecruiterModalOpen,
  selectedRecruiter,
}) {
  if (!isOpen || !selectedRecruiter) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl mx-auto max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-200">
          <div>
            <h3 className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">
              Recruiter Details
            </h3>
          </div>
          <button
            onClick={() => setIsRecruiterModalOpen(false)}
            className="p-2 transition-colors rounded-lg hover:bg-gray-100"
          >
            <LuX className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto sm:p-6 sm:space-y-4">
          {/* Recruiter Info & Contact - Combined Container */}
          <div className="border-t border-t-[#F3F4F6] p-3 sm:p-4 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] rounded-[16px]">
            {/* Recruiter Info Section */}
            <div className="flex flex-col items-center pb-4 text-left sm:flex-row sm:items-start">
              <div className="flex flex-col items-center">
                <div
                  className={`h-12 w-12 sm:h-16 sm:w-16 rounded-full flex-shrink-0 mb-3 flex items-center justify-center ${
                    selectedRecruiter.id === 1
                      ? "bg-blue-500"
                      : selectedRecruiter.id === 2
                        ? "bg-green-500"
                        : selectedRecruiter.id === 3
                          ? "bg-purple-500"
                          : selectedRecruiter.id === 4
                            ? "bg-orange-500"
                            : "bg-pink-500"
                  }`}
                >
                  <span className="text-sm font-semibold text-white sm:text-xl">
                    {selectedRecruiter.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </span>
                </div>
                <span
                  className={`inline-flex items-center px-4 py-1 text-base font-medium rounded-full border-f border-f-[#B9F8CF] ${
                    selectedRecruiter.status === "Active"
                      ? "bg-[#F0FDF4] text-[#008236] border border-[#FFC9C9]"
                      : selectedRecruiter.status === "Idle"
                        ? "bg-[#FEFCE8] text-[#A65F00] border border-[#FFF085]"
                        : selectedRecruiter.status === "on leave"
                          ? "bg-[#EFF6FF] text-[#1447E6] border border-[#BEDBFF]"
                          : selectedRecruiter.status === "Disabled"
                            ? "bg-[#FEF2F2] text-[#C10007] border border-[#FFC9C9]"
                            : "bg-red-100 text-red-800"
                  }`}
                >
                  {selectedRecruiter.status === "Active" && (
                    <LuActivity className="w-3 h-3 mr-1" />
                  )}
                  {selectedRecruiter.status === "Idle" && (
                    <LuClock4 className="w-3 h-3 mr-1" />
                  )}
                  {selectedRecruiter.status === "on leave" && (
                    <LuCoffee className="w-3 h-3 mr-1" />
                  )}
                  {selectedRecruiter.status === "Disabled" && (
                    <LuBan className="w-3 h-3 mr-1" />
                  )}
                  {selectedRecruiter.status}
                </span>
              </div>
              <div className="text-left sm:ml-0 ">
                <h4 className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">
                  {selectedRecruiter.name}
                </h4>
                <p className="text-md text-[#4A5565]">
                  {selectedRecruiter.role}
                </p>
              </div>
            </div>

            {/* Divider Border */}
            <div className="border-t border-t-[#E5E7EB] mb-4"></div>

            {/* Contact & ID Section */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <div>
                <p className="text-sm text-[#6A7282] mb-1">Email</p>
                <p className="font-medium text-[#0A0A0A] text-sm break-all">
                  {selectedRecruiter.email}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#6A7282] mb-1">Phone</p>
                <p className="font-medium text-[#0A0A0A] text-sm">
                  {selectedRecruiter.phone}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#6A7282] mb-1">Join Date</p>
                <p className="font-medium text-[#0A0A0A] text-sm">
                  {selectedRecruiter.joinDate}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#6A7282] mb-1">Recruiter ID</p>
                <p className="font-medium text-[#0A0A0A] text-sm">
                  {selectedRecruiter.recruiterId}
                </p>
              </div>
            </div>
          </div>

          {/* Third Row - Time Tracking */}
          <div className="border-t border-t-[#F3F4F6] p-3 sm:p-4 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] rounded-[16px]">
            <h4 className="text-base sm:text-lg font-family-inter font-weight-500 text-[#0A0A0A] mb-3 sm:mb-4">
              Time Tracking (Today)
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <p className="text-sm text-[#4A5565] mb-1 sm:mb-0">
                  Active Time
                </p>
                <p className="font-medium text-[#0A0A0A] text-sm">
                  {selectedRecruiter.activeTime}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <p className="text-sm text-[#4A5565] mb-1 sm:mb-0">
                  Inactive Time
                </p>
                <p className="font-medium text-[#0A0A0A] text-sm">
                  {selectedRecruiter.inactiveTime}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <p className="text-sm text-[#4A5565] mb-1 sm:mb-0">
                  Last Action
                </p>
                <p className="font-medium text-[#0A0A0A] text-sm">
                  {selectedRecruiter.lastAction}
                </p>
              </div>
            </div>
          </div>

          {/* Fourth Row - Performance Metrics */}
          <div className="border-t border-t-[#F3F4F6] p-3 sm:p-4 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] rounded-[16px]">
            <h4 className="text-base sm:text-lg font-family-inter font-weight-500 text-[#0A0A0A] mb-3 sm:mb-4">
              Performance Metrics
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="flex flex-col mb-2 sm:flex-row sm:justify-between sm:items-center">
                  <p className="text-sm text-[#4A5565] mb-1 sm:mb-0">
                    Candidates Handled
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {selectedRecruiter.candidatesHandled}
                  </p>
                </div>
                <div className="w-full bg-[#F3F4F6] rounded-full h-2">
                  <div
                    className="bg-[#2B7FFF] h-2 rounded-full"
                    style={{
                      width: `${Math.min(100, (selectedRecruiter.candidatesHandled / 100) * 100)}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex flex-col mb-2 sm:flex-row sm:justify-between sm:items-center">
                  <p className="text-sm text-[#4A5565] mb-1 sm:mb-0">
                    Resume Views
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {selectedRecruiter.resumeViews}
                  </p>
                </div>
                <div className="w-full bg-[#F3F4F6] rounded-full h-2">
                  <div
                    className="bg-[#AD46FF] h-2 rounded-full"
                    style={{
                      width: `${Math.min(100, (selectedRecruiter.resumeViews / 200) * 100)}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex flex-col mb-2 sm:flex-row sm:justify-between sm:items-center">
                  <p className="text-sm text-[#4A5565] mb-1 sm:mb-0">
                    Interviews Scheduled
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {selectedRecruiter.interviewsScheduled}
                  </p>
                </div>
                <div className="w-full bg-[#F3F4F6] rounded-full h-2">
                  <div
                    className="bg-[#00C950] h-2 rounded-full"
                    style={{
                      width: `${Math.min(100, (selectedRecruiter.interviewsScheduled / 50) * 100)}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex flex-col mb-2 sm:flex-row sm:justify-between sm:items-center">
                  <p className="text-sm text-[#4A5565] mb-1 sm:mb-0">
                    Successful Placements
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {selectedRecruiter.successfulPlacements}
                  </p>
                </div>
                <div className="w-full bg-[#F3F4F6] rounded-full h-2">
                  <div
                    className="bg-[#00BC7D] h-2 rounded-full"
                    style={{
                      width: `${Math.min(100, (selectedRecruiter.successfulPlacements / 30) * 100)}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Fifth Row - Assigned Job Roles */}
          <div className="border-t border-t-[#F3F4F6] p-3 sm:p-4 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] rounded-[16px]">
            <h4 className="text-base sm:text-lg font-family-inter font-weight-500 text-[#0A0A0A] mb-3 sm:mb-4">
              Assigned Job Roles
            </h4>
            <div className="space-y-3">
              {selectedRecruiter.assignedJobRole ? (
                selectedRecruiter.assignedJobRole
                  .split(",")
                  .map((role, index) => {
                    const roleData =
                      selectedRecruiter.roleCandidates &&
                      selectedRecruiter.roleCandidates[role.trim()]
                        ? selectedRecruiter.roleCandidates[role.trim()]
                        : { count: 0, category: "Non-IT" };
                    return (
                      <div key={index} className="flex items-start">
                        <div className="max-w-full bg-[#F9FAFB] text-md text-[#364153] px-3 py-2 rounded-lg flex justify-between items-center w-full">
                          <span>
                            {role.trim()}{" "}
                            <span className="text-sm text-gray-500">
                              ({roleData.count} candidates)
                            </span>
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              roleData.category === "IT"
                                ? " text-[#6A7282]"
                                : " text-[#6A7282]"
                            }`}
                          >
                            {roleData.category}
                          </span>
                        </div>
                      </div>
                    );
                  })
              ) : (
                <p className="text-sm text-gray-500">No job roles assigned</p>
              )}
            </div>
          </div>

          {/* Sixth Row - Recent Activity */}
          <div className="border-t border-t-[#F3F4F6] p-3 sm:p-4 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] rounded-[16px]">
            <h4 className="text-base sm:text-lg font-family-inter font-weight-500 text-[#0A0A0A] mb-3 sm:mb-4">
              Recent Activity
            </h4>
            <div className="space-y-5">
              {selectedRecruiter.recentActivity &&
                selectedRecruiter.recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className={`flex items-start ${index < selectedRecruiter.recentActivity.length - 1 ? "pb-2 border-b border-b-[#F3F4F6]" : ""}`}
                  >
                    <div className="flex-1">
                      <p className="px-6 text-sm font-family-inter font-weight-500 text-[#0A0A0A]">
                        {activity.action}
                      </p>
                      <p className="px-6 py-1 text-xs text-[#6A7282]">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
