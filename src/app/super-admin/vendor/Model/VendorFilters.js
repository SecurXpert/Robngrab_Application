import { FiFilter } from "react-icons/fi";
import { LuChevronDown } from "react-icons/lu";

export default function VendorFilters({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      {/* Filters Header */}
      <div className="flex items-center gap-2 mb-4">
        <FiFilter className="w-4 h-4 text-[#99A1AF]" />
        <h2 className="text-md font-family-inter font-weight-500 text-[#0A0A0A]">Filters</h2>
      </div>

      {/* Filter Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {/* Search Vendor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Search Vendor</label>
          <input
            type="text"
            placeholder="Search vendors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <div className="relative">
            <select
              value={statusFilter === 'all' ? '' : statusFilter}
              onChange={(e) => setStatusFilter(e.target.value || 'all')}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 appearance-none"
            >
              <option value="" className="text-sm">All Categories</option>
              <option value="Active" className="text-sm">Active</option>
              <option value="Pending" className="text-sm">Pending</option>
              <option value="Inactive" className="text-sm">Inactive</option>
            </select>
            <LuChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0A0A0A] w-4 h-4 pointer-events-none" />
          </div>
        </div>

        {/* Vendor Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Status</label>
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 appearance-none"
            >
              <option value="all" className="text-sm">All Status</option>
              <option value="Active" className="text-sm">Active</option>
              <option value="Pending" className="text-sm">Pending</option>
              <option value="Inactive" className="text-sm">Inactive</option>
            </select>
            <LuChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0A0A0A] w-4 h-4 pointer-events-none" />
          </div>
        </div>

        {/* Job Professions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Professions</label>
          <div className="relative">
            <select
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 appearance-none"
            >
              <option value="" className="text-sm">All Professions</option>
              <option value="construction" className="text-sm">Construction</option>
              <option value="technology" className="text-sm">Technology</option>
              <option value="healthcare" className="text-sm">Healthcare</option>
              <option value="education" className="text-sm">Education</option>
            </select>
            <LuChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0A0A0A] w-4 h-4 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
