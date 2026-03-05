import React from 'react';

export default function ColdDataHeader({ selectedUsers, onExportData, onShowBulkEmail, onShowBulkCall }) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Cold Data</h1>
              <p className="text-sm text-gray-600">Manage and follow up with inactive users</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button 
              onClick={onExportData}
              className="px-3 py-2 sm:px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="hidden sm:inline">Export Data</span>
              <span className="sm:hidden">Export</span>
            </button>
            <button 
              onClick={onShowBulkEmail}
              disabled={selectedUsers.length === 0}
              className={`px-3 py-2 sm:px-4 border rounded-lg flex items-center justify-center gap-2 text-sm ${
                selectedUsers.length === 0 
                  ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-white border-gray-300 hover:bg-gray-50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">Bulk Email ({selectedUsers.length})</span>
              <span className="sm:inline">Email ({selectedUsers.length})</span>
            </button>
            <button 
              onClick={onShowBulkCall}
              disabled={selectedUsers.length === 0}
              className={`px-3 py-2 sm:px-4 border rounded-lg flex items-center justify-center gap-2 text-sm ${
                selectedUsers.length === 0 
                  ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-white border-gray-300 hover:bg-gray-50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">Bulk Call ({selectedUsers.length})</span>
              <span className="sm:inline">Call ({selectedUsers.length})</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
