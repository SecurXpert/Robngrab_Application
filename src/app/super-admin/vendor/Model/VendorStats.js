import { FiBriefcase, FiTrendingUp, FiUsers } from "react-icons/fi";
import { LuDollarSign } from "react-icons/lu";

export default function VendorStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
      {/* Total Vendors Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:h-24">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
              <FiBriefcase className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600 truncate">Total Vendors</p>
            <p className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">6</p>
          </div>
        </div>
      </div>

      {/* Active Vendors Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:h-24">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-[#F0FDF4] rounded-lg flex items-center justify-center">
              <FiTrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600 truncate">Active Vendors</p>
            <p className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">4</p>
          </div>
        </div>
      </div>

      {/* Inactive Vendors Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:h-24">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-[#FEFCE8] rounded-lg flex items-center justify-center">
              <FiUsers className="w-6 h-6 text-[#00A63E]" />
            </div>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600 truncate">Inactive Vendors</p>
            <p className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">1</p>
          </div>
        </div>
      </div>

      {/* Total Balance Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:h-24">
        <div className="flex items-center">
          <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#ECFDF5] rounded-lg flex items-center justify-center">
              <LuDollarSign className="w-6 h-6 text-[#009966]" />
            </div>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600 truncate">Total Balance</p>
            <p className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">$104.4k</p>
          </div>
        </div>
      </div>
    </div>
  );
}
