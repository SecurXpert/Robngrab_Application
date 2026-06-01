import { LuFileText } from "react-icons/lu";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { FiDownload } from "react-icons/fi";

export default function VendorActions({ setIsEditModalOpen, setIsHistoryModalOpen }) {
  return (
    <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
      <h2 className="text-xl font-family-inter font-weight-500 text-[#0A0A0A] mb-4">
        Vendor-Level Actions
      </h2>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        <button
          onClick={() => setIsEditModalOpen(true)}
          className="px-6 py-2.5 bg-white text-[#0A0A0A] border border-[#D1D5DC] rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center"
        >
          <LuFileText className="w-4 h-4 mr-2" />
          Edit Vendor
        </button>
        <button className="px-6 py-2.5 bg-white text-[#E7000B] border border-[#FFA2A2] rounded-lg hover:bg-red-50 transition-colors font-medium flex items-center">
          <MdOutlinePowerSettingsNew className="w-4 h-4 mr-2" />
          Disable Vendor
        </button>
        <button
          onClick={() => setIsHistoryModalOpen(true)}
          className="px-6 py-2.5 bg-white text-[#0A0A0A] border border-[#D1D5DC] rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center"
        >
          <GoClock className="w-4 h-4 mr-2" />
          View Full History
        </button>
        <button className="px-6 py-2.5 bg-[#2563EB] text-[#FFFFFF] rounded-lg hover:bg-[#1d4ed8] transition-colors font-medium flex items-center">
          <FiDownload className="w-4 h-4 mr-2" />
          Download Reports
        </button>
      </div>
    </div>
  );
}
