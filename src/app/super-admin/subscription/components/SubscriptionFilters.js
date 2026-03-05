import { FiSearch } from "react-icons/fi";
import { STATUS_FILTERS, TYPE_FILTERS } from '../constants';

export default function SubscriptionFilters({
  searchTerm,
  filterStatus,
  filterType,
  onSearchChange,
  onStatusFilterChange,
  onTypeFilterChange
}) {
  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="relative mb-5">
        <FiSearch className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search plans..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-gray-100 py-2.5 pl-11 pr-4 text-sm text-gray-700 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400/30"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <select
          value={filterStatus}
          onChange={(e) => onStatusFilterChange(e.target.value)}
          className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-700 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400/30"
        >
          {STATUS_FILTERS.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>

        <select
          value={filterType}
          onChange={(e) => onTypeFilterChange(e.target.value)}
          className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-700 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400/30"
        >
          {TYPE_FILTERS.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
