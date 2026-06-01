import { LuX, LuDownload, LuActivity, LuCircleCheckBig } from "react-icons/lu";
import { RxExit, RxEnter } from "react-icons/rx";

export default function ActivityHistoryModal({
  isOpen,
  setIsHistoryModalOpen,
  modalActivities,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-family-inter font-weight-500 text-[#0A0A0A]">
              Activity History
            </h3>
            <p className="text-md font-medium text-[#4A5565]">
              Complete log of all vendor activities and status changes
            </p>
          </div>
          <button
            onClick={() => setIsHistoryModalOpen(false)}
            className="p-2 transition-colors rounded-lg hover:bg-gray-100"
          >
            <LuX className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Modal Body - Activity Logs */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-2">
            {modalActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 bg-[#FFFFFF] rounded-lg transi tion-colors border-[1px] border-[#F3F4F6]"
                style={{
                  boxShadow:
                    "0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A",
                }}
              >
                {activity.action === "vendor logged in" ? (
                  <RxEnter className="w-4 h-4 mt-1 flex-shrink-0 text-[#00A63E]" />
                ) : activity.action === "Vendor logged out" ? (
                  <RxExit className="w-4 h-4 mt-1 flex-shrink-0 text-[#4A5565]" />
                ) : activity.action.includes("Status changed") ? (
                  <LuActivity
                    className="flex-shrink-0 w-4 h-4 mt-1"
                    style={{ color: "#155DFC" }}
                  />
                ) : activity.action === "Vendor enabled by Super Admin" ? (
                  <LuCircleCheckBig className="w-4 h-4 mt-1 flex-shrink-0 text-[#00A63E]" />
                ) : (
                  <LuActivity
                    className={`w-4 h-4 mt-1 flex-shrink-0 ${
                      activity.status === "success"
                        ? "text-green-500"
                        : activity.status === "warning"
                          ? "text-yellow-500"
                          : "text-blue-500"
                    }`}
                  />
                )}
                <div className="flex items-start justify-between flex-1">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {activity.date}
                    </p>
                  </div>
                  {activity.action === "vendor logged in" && (
                    <span className="text-xs text-[#008236] font-medium bg-[#F0FDF4] px-1 py-0.5 rounded-[8px]">
                      LOGIN
                    </span>
                  )}
                  {activity.action.includes("Status changed") && (
                    <span className="text-xs text-[#1447E6] font-medium bg-[#EFF6FF] px-1 py-0.5 rounded-[8px]">
                      STATUS CHANGE
                    </span>
                  )}
                  {activity.action === "Vendor logged out" && (
                    <span className="text-xs text-[#364153] font-medium bg-[#F9FAFB] px-1 py-0.5 rounded-[8px]">
                      LOGOUT
                    </span>
                  )}
                  {activity.action === "Vendor enabled by Super Admin" && (
                    <span className="text-xs text-[#008236] font-medium bg-[#F0FDF4] px-1 py-0.5 rounded-[8px]">
                      ENABLED
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">Showing {modalActivities.length} activity logs</p>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-white text-[#364153] text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center">
              <LuDownload className="w-4 h-4 mr-2" />
              Export History
            </button>
            <button
              onClick={() => setIsHistoryModalOpen(false)}
              className="px-4 py-2 bg-[#2563EB] text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
