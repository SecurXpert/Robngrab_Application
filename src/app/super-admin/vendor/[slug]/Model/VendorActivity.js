import {
  LuActivity,
  LuPause,
} from "react-icons/lu";
import { MdOutlineAccessTime } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { FaPowerOff } from "react-icons/fa6";

export default function VendorActivity({ activities }) {
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
                6h 45m
              </p>
            </div>
          </div>
          <div className="bg-[#FEF2F2] rounded-lg p-4 flex items-center">
            <MdOutlineAccessTime className="w-6 h-6 mr-3 text-red-600" />
            <div>
              <p className="text-sm text-red-800">Inactive Time</p>
              <p className="text-lg font-family-inter font-weight-500 text-[#0A0A0A]">
                1h 15m
              </p>
            </div>
          </div>
          <div className="bg-[#FEFCE8] rounded-lg p-4 flex items-center">
            <LuPause className="w-6 h-6 mr-3 text-yellow-600" />
            <div>
              <p className="text-sm text-yellow-800">Idle Time</p>
              <p className="text-lg font-family-inter font-weight-500 text-[#0A0A0A]">
                45m
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Log */}
      <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
        <h2 className="text-xl font-famiy-inter font-weight-500 text-[#0A0A0A] mb-2">
          Activity Log
        </h2>
        <div className="space-y-0">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-start py-3 space-x-3"
              style={{ borderBottom: "1.32px solid #F3F4F6" }}
            >
              {index < 3 ? (
                <LuActivity
                  className="w-4 h-4 mt-1"
                  style={{ color: "#155DFC" }}
                />
              ) : index === 3 ? (
                <RxExit className="w-4 h-4 mt-1 text-red-500" />
              ) : index === 4 ? (
                <FaPowerOff className="w-4 h-4 mt-1 text-yellow-500" />
              ) : (
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === "success"
                      ? "bg-green-500"
                      : activity.status === "warning"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                  }`}
                ></div>
              )}
              <div className="flex-1">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
