import { FiSearch, FiChevronDown } from "react-icons/fi";

export default function SearchAndFilter({ 
  searchTerm, 
  statusFilter, 
  onSearchChange, 
  onStatusFilterChange 
}) {
  return (
    <div className="flex gap-4 mb-6 rounded-xl bg-white p-5 shadow-md">
      <div className="flex-1 relative">
        <FiSearch className="absolute left-3 top-3 text-gray-700" />
        <input
          type="text"
          placeholder="Search recruiters..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 px-3 py-2.5 text-sm text-gray-700 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400/30"
        />
      </div>
      <div className="relative">
        <select
          value={statusFilter}
          onChange={(e) => onStatusFilterChange(e.target.value)}
          className="appearance-none pr-10 pl-4 py-2 shadow-md rounded-lg bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400/30"
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Suspended</option>
        </select>
        <FiChevronDown className="absolute right-3 top-3 text-gray-700 pointer-events-none" />
      </div>
    </div>
  );
}
