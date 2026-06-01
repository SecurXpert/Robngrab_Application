import { LuX, LuTrendingUp } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";

export function TotalRecruitersModal({ isOpen, onClose, franchise, handleExportRecruiters }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
      <div className="w-full max-w-xl mx-4 bg-white shadow-xl rounded-2xl">
        <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
          <div>
            <h3 className="text-[22px] font-inter text-[#0A0A0A]">
              Total Recruiters Details
            </h3>
            <p className="text-sm text-[#4A5565]">Detailed breakdown and analytics</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
            <LuX className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-lg p-4 text-left shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-2xl font-bold text-gray-600">{franchise?.recruiters || 0}</p>
            </div>
            <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-lg p-4 text-left shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
              <p className="text-sm text-gray-600">Active</p>
              <p className="text-2xl font-bold text-[#008236]">
                {Math.floor((franchise?.recruiters || 0) * 0.8)}
              </p>
            </div>
            <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-lg p-4 text-left shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
              <p className="text-sm text-gray-600">Inactive</p>
              <p className="text-2xl font-bold text-gray-600">
                {Math.floor((franchise?.recruiters || 0) * 0.2)}
              </p>
            </div>
          </div>
          <div className="p-0">
            <div>
              <h3 className="text-md text-[#0A0A0A] text-left mb-2">Performance Trend</h3>
              <p className="text-sm text-[#00A63E]">+12% increase from last month</p>
            </div>
            <div className="border-t border-[#E5E7EB] mt-4"></div>
            <div className="flex justify-end mt-4 space-x-3">
              <button onClick={onClose} className="px-5 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Close
              </button>
              <button onClick={handleExportRecruiters} className="px-5 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#2563EB] text-sm flex items-center">
                <MdOutlineFileDownload className="w-4 h-4 mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ActiveRecruitersModal({ isOpen, onClose, handleExportActiveRecruiters }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
      <div className="w-full max-w-xl mx-4 bg-white shadow-xl rounded-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-[22px] font-inter text-[#0A0A0A]">
              Active Recruiters Details
            </h3>
            <p className="text-sm text-gray-600">Detailed breakdown and analytics</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-lg p-4 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
              <p className="text-sm text-[#4A5565]">Currently Active</p>
              <p className="text-2xl font-bold text-[#008236]">42</p>
            </div>
            <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-lg p-4 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
              <p className="text-sm text-[#4A5565]">Avg. Active Hours</p>
              <p className="text-2xl font-bold text-[#1447E6]">7.2h</p>
            </div>
          </div>
          <div>
            <h3 className="text-md font-inter text-[#0A0A0A]">Top performance Today</h3>
            <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-lg p-2 mt-3">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-md font-inter text-[#0A0A0A]">John Doe</p>
                  <p className="font-medium text-[#4A5565] text-sm">Senior Recruiter</p>
                </div>
                <div className="text-right">
                  <p className="text-[#4A5565] text-sm">Active Time</p>
                  <p className="font-medium text-[#0A0A0A] text-sm">7h 32m</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-lg p-2 mt-3 mb-3">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-md font-inter text-[#0A0A0A]">Jane Smith</p>
                  <p className="font-medium text-[#4A5565] text-sm">Lead Recruiter</p>
                </div>
                <div className="text-right">
                  <p className="text-[#4A5565] text-sm">Active Time</p>
                  <p className="font-medium text-[#0A0A0A] text-sm">6h 45m</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3 p-3 border-t border-[#E5E7EB]">
            <button onClick={onClose} className="px-5 py-2 bg-white text-[#4A5565] border border-[#E5E7EB] rounded-lg hover:bg-gray-50 text-sm">
              Close
            </button>
            <button onClick={handleExportActiveRecruiters} className="px-5 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] text-sm flex items-center">
              <MdOutlineFileDownload className="w-4 h-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TotalCandidatesModal({ isOpen, onClose, handleExportTotalCandidates }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
      <div className="w-full max-w-xl mx-4 bg-white shadow-xl rounded-2xl">
        <div className="flex justify-between p-6 border-b border-gray-200 items-right">
          <div>
            <h3 className="text-[22px] font-inter text-[#0A0A0A] mb-2">
              Total Candidates Details
            </h3>
            <p className="text-sm text-[#4A5565]">Detailed breakdown and analytics</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
            <LuX className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-lg p-4 text-left shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-2xl font-bold text-purple-600">1,847</p>
            </div>
            <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-lg p-4 text-left shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
              <p className="text-sm text-gray-600">IT Category</p>
              <p className="text-2xl font-bold text-blue-600">1,234</p>
            </div>
            <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-lg p-4 text-left shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
              <p className="text-sm text-gray-600">Non-IT</p>
              <p className="text-2xl font-bold text-green-600">613</p>
            </div>
          </div>
          <div className="p-0">
            <h3 className="text-md font-inter text-[#0A0A0A] mb-1">Monthly Trend</h3>
            <div className="flex items-center">
              <LuTrendingUp className="w-4 h-4 mr-1 text-green-500" />
              <span className="text-sm font-medium text-green-600">+15% increase from last month</span>
            </div>
            <div className="mt-4 border-t border-gray-200"></div>
            <div className="flex justify-end space-x-3 p-3 border-t border-[#E5E7EB]">
              <button onClick={onClose} className="px-5 py-2 bg-white text-[#4A5565] border border-[#E5E7EB] rounded-lg hover:bg-gray-50 text-sm">
                Close
              </button>
              <button onClick={handleExportTotalCandidates} className="px-5 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] text-sm flex items-center">
                <MdOutlineFileDownload className="w-4 h-4 mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
