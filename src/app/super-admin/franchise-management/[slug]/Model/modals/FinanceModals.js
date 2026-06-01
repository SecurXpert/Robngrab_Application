import { LuX, LuTrendingUp, LuDownload } from "react-icons/lu";
import { CircleCheckBig } from "lucide-react";

export function TotalRevenueModal({ isOpen, onClose, franchise, handleExportRevenue }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 leading-tight">
              Revenue Details
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Detailed breakdown and analytics
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg transition-colors mt-0.5"
          >
            <LuX className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs">
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="text-3xl font-bold text-[#008236] mt-2">
                {franchise?.revenue || "$128K"}
              </p>
            </div>
            <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs">
              <p className="text-sm font-medium text-gray-500">This Month</p>
              <p className="text-3xl font-bold text-[#1447E6] mt-2">
                $42K
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-base font-semibold text-gray-900 mb-2">
              Growth Rate
            </h4>
            <div className="flex items-center text-sm font-medium text-[#008236]">
              <LuTrendingUp className="w-4 h-4 mr-1.5 flex-shrink-0 stroke-[2.5]" />
              <span>+18% increase from last month</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-end items-center gap-3 bg-white">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleExportRevenue}
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-[#2563EB] rounded-xl hover:bg-blue-700 transition-colors"
          >
            <LuDownload className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
}

export function BalanceDetailsModal({ isOpen, onClose, franchise, handleExportBalance }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 leading-tight">
              Balance Details
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Detailed breakdown and analytics
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg transition-colors mt-0.5"
          >
            <LuX className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-[#FFFBEB] border border-[#FEF08A] rounded-2xl shadow-xs">
              <p className="text-sm font-medium text-gray-500">Current Balance</p>
              <p className="text-3xl font-bold text-[#B45309] mt-2">
                {franchise?.balance || "$45K"}
              </p>
            </div>
            <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs">
              <p className="text-sm font-medium text-gray-500">Available Credit</p>
              <p className="text-3xl font-bold text-[#008236] mt-2">
                $85K
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-base font-semibold text-gray-900 mb-2">
              Payment Status
            </h4>
            <div className="flex items-center text-sm font-medium text-[#008236]">
              <CircleCheckBig className="w-4 h-4 mr-1.5 flex-shrink-0 stroke-[2.5]" />
              <span>All payments up to date</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-end items-center gap-3 bg-white">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleExportBalance}
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-[#2563EB] rounded-xl hover:bg-blue-700 transition-colors"
          >
            <LuDownload className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
}
