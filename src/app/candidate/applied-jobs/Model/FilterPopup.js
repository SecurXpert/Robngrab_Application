'use client';

import { useState, useEffect } from 'react';

export default function FilterPopup({ isOpen, onClose, onApply, onReset, filters, setFilters }) {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const companies = ['Facebook', 'Google', 'Tech Corp', 'Amazon', 'Microsoft', 'Apple', 'Adobe', 'Spotify', 'Netflix'];
  const statuses = ['Under Review', 'Interview Scheduled', 'Interview Completed', 'Offer Made', 'Rejected', 'Withdrawn', 'On Hold'];
  const sortFields = ['Date Applied', 'Job Title', 'Company', 'Status'];
  const sortOrders = ['Ascending', 'Descending'];

  const handleCompanyToggle = (company) => {
    setLocalFilters(prev => ({
      ...prev,
      companies: prev.companies.includes(company)
        ? prev.companies.filter(c => c !== company)
        : [...prev.companies, company]
    }));
  };

  const handleStatusToggle = (status) => {
    setLocalFilters(prev => ({
      ...prev,
      statuses: prev.statuses.includes(status)
        ? prev.statuses.filter(s => s !== status)
        : [...prev.statuses, status]
    }));
  };

  const handleSortFieldChange = (field) => {
    setLocalFilters(prev => ({ ...prev, sortField: field }));
  };

  const handleSortOrderChange = (order) => {
    setLocalFilters(prev => ({ ...prev, sortOrder: order }));
  };

  const handleDateRangeChange = (range) => {
    setLocalFilters(prev => ({ ...prev, dateRange: range }));
  };

  const handleApply = () => {
    setFilters(localFilters);
    onApply(localFilters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters = {
      companies: [],
      statuses: [],
      sortField: 'Date Applied',
      sortOrder: 'Descending',
      dateRange: 'all',
      customStartDate: '',
      customEndDate: ''
    };
    setLocalFilters(resetFilters);
    setFilters(resetFilters);
    onReset();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Filter Jobs</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Filter Options */}
        <div className="space-y-6 mb-8">
          {/* Companies */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              <span className="mr-2">🏢</span>
              Companies
            </label>
            <div className="grid grid-cols-2 gap-2">
              {companies.map(company => (
                <label key={company} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input
                    type="checkbox"
                    checked={localFilters.companies.includes(company)}
                    onChange={() => handleCompanyToggle(company)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{company}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Statuses */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              <span className="mr-2">📊</span>
              Status
            </label>
            <div className="grid grid-cols-2 gap-2">
              {statuses.map(status => (
                <label key={status} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input
                    type="checkbox"
                    checked={localFilters.statuses.includes(status)}
                    onChange={() => handleStatusToggle(status)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{status}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="mr-2">🔤</span>
                Sort By
              </label>
              <select
                value={localFilters.sortField}
                onChange={(e) => handleSortFieldChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {sortFields.map(field => (
                  <option key={field} value={field}>{field}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="mr-2">⬆️</span>
                Order
              </label>
              <select
                value={localFilters.sortOrder}
                onChange={(e) => handleSortOrderChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {sortOrders.map(order => (
                  <option key={order} value={order}>{order}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Date Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="mr-2">📅</span>
              Date Range
            </label>
            <select
              value={localFilters.dateRange}
              onChange={(e) => handleDateRangeChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="all">All Time</option>
              <option value="last7">Last 7 Days</option>
              <option value="last30">Last 30 Days</option>
              <option value="last90">Last 90 Days</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleReset}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Reset
          </button>
          <button
            onClick={handleApply}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
