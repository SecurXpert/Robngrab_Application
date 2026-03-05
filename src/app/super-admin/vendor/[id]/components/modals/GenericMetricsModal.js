import BaseModal from './BaseModal';

export default function GenericMetricsModal({ 
  isOpen, 
  onClose, 
  selectedMetric, 
  modalConfig, 
  metrics, 
  generateModalData 
}) {
  if (!isOpen || !selectedMetric) return null;

  const modalData = generateModalData(selectedMetric);

  return (
    <BaseModal
      title={modalConfig[selectedMetric].title}
      subtitle="Detailed breakdown and analytics"
      onClose={onClose}
      footerContent={
        <div className="flex space-x-3">
          <button onClick={onClose} className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
            Close
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export Report
          </button>
        </div>
      }
    >
      <div>
        {/* Balance Overview */}
        {modalConfig[selectedMetric].showBalanceOverview && (
          <div className="mb-6 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center mb-2">
              <svg className="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-2xl font-bold text-gray-900">{metrics.totalBalanceRemaining}</p>
            </div>
            <p className="text-xs text-gray-600">Balance Remaining</p>
          </div>
        )}

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder={modalConfig[selectedMetric].placeholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Export */}
        <div className="mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export Data
          </button>
        </div>

        {/* Data List */}
        <div className="space-y-4">
          {modalData.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.role}</p>
                </div>
                <span className={`px-3 py-1 bg-${item.statusColor}-100 text-${item.statusColor}-800 text-xs font-medium rounded-full`}>
                  {item.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                <div>
                  <p className="text-gray-600">{modalConfig[selectedMetric].fields[0]}</p>
                  <p className="text-gray-900">{item.interviewer}</p>
                </div>
                <div>
                  <p className="text-gray-600">{modalConfig[selectedMetric].fields[1]}</p>
                  <p className="text-gray-900">{item.date}</p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p className="text-gray-900">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseModal>
  );
}
