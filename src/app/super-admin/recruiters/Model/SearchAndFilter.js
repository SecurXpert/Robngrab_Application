import { FiSearch, FiChevronDown } from "react-icons/fi";
import { LuFilter } from "react-icons/lu";

export default function SearchAndFilter({ 
  searchTerm, 
  statusFilter, 
  onSearchChange, 
  onStatusFilterChange 
}) {
  return (
    <div className="mb-6 flex gap-4">
      {/* Search Section */}
      <div className="flex-1 rounded-xl bg-white p-3 shadow-md">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-3 text-[#99A1AF]" />
          <input
            type="text"
            placeholder="Search recruiters by name, company, or email..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg px-3 py-2.5 text-sm text-[#0A0A0A80] focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400/30"
          />
        </div>
      </div>

      {/* Status Filter Section */}
      <div className="rounded-xl bg-white p-3 shadow-md w-100">
        <div className="flex items-center gap-2">
          <LuFilter className="w-4 h-4 text-[#99A1AF]" />
          <div className="relative flex-1">
            <select
              value={statusFilter}
              onChange={(e) => onStatusFilterChange(e.target.value)}
              className="appearance-none pr-10 pl-4 py-2 shadow-md rounded-lg px-3 py-2.5 text-sm text-gray-700 w-full"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
            </select>
            <FiChevronDown className="absolute right-3 top-3 text-gray-700 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
