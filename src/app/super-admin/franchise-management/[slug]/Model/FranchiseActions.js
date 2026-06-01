import { Power } from "lucide-react";

export default function FranchiseActions({
  setEditFormData,
  setEditFormErrors,
  setRealTimeErrors,
  setIsEditModalOpen,
  setIsHistoryModalOpen,
  handleDownloadReports,
  handleDisableFranchise,
}) {
  return (
    <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Franchise-Level Actions
      </h2>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => {
            setEditFormData({});
            setEditFormErrors({});
            setRealTimeErrors({});
            setIsEditModalOpen(true);
          }}
          className="px-6 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Edit Franchise
        </button>
        <button
          onClick={handleDisableFranchise}
          className="px-6 py-2.5 bg-white text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors font-medium flex items-center"
        >
          <Power className="w-4 h-4 mr-2" />
          Disable Franchise
        </button>

        <button
          onClick={() => setIsHistoryModalOpen(true)}
          className="px-6 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          View Full History
        </button>

        <button
          onClick={handleDownloadReports}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Reports
        </button>
      </div>
    </div>
  );
}
