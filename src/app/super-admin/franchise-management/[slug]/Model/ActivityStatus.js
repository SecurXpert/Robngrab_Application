import { LuActivity, LuPause } from "react-icons/lu";
import { MdOutlineAccessTime } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { Power } from "lucide-react";

export default function ActivityStatus({ franchise, activities }) {
  return (
    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
      {/* Franchise Activity Status */}
      <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
        <h2 className="text-xl font-family-inter font-weight-500 text-[#0A0A0A] mb-4">
          Franchise Activity Status
        </h2>
        <div className="space-y-3">
          <div className="bg-[#F0FDF4] rounded-lg p-4 flex items-center">
            <LuActivity className="w-6 h-6 mr-3 text-green-600" />
            <div>
              <p className="text-sm text-green-800">Total Active Time</p>
              <p className="text-lg font-family-inter font-weight-500 text-[#0A0A0A]">
                {franchise.activeTime}
              </p>
            </div>
          </div>
          <div className="bg-[#FEF2F2] rounded-lg p-4 flex items-center">
            <MdOutlineAccessTime className="w-6 h-6 mr-3 text-red-600" />
            <div>
              <p className="text-sm text-red-800">Inactive Time</p>
              <p className="text-lg font-family-inter font-weight-500 text-[#0A0A0A]">
                {franchise.inactiveTime}
              </p>
            </div>
          </div>
          <div className="bg-[#FEFCE8] rounded-lg p-4 flex items-center">
            <LuPause className="w-6 h-6 mr-3 text-yellow-600" />
            <div>
              <p className="text-sm text-yellow-800">Idle Time</p>
              <p className="text-lg font-family-inter font-weight-500 text-[#0A0A0A]">
                {franchise.idleTime}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Log */}
      <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
        <h2 className="text-xl font-family-inter font-weight-500 text-[#0A0A0A] mb-1">
          Activity Log
        </h2>
        <div className="mt-1 space-y-0">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 py-4 ${
                index !== activities.length - 1
                  ? "border-b border-[#E5E7EB]"
                  : ""
              }`}
            >
              {/* Icons */}
              <div className="mt-0.5">
                {activity.type === "active" || activity.type === "idle" ? (
                  <LuActivity className="w-5 h-5 text-[#2563EB]" />
                ) : activity.type === "logout" ? (
                  <RxExit className="w-5 h-5 text-[#475467]" />
                ) : (
                  <Power className="w-5 h-5 text-[#16A34A]" />
                )}
              </div>

              {/* Content */}
              <div>
                <p className="text-[15px] font-medium text-[#111827]">
                  {activity.action}
                </p>

                <p className="mt-0.5 text-[13px] text-[#6B7280]">
                  {activity.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
