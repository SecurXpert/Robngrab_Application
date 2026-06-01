export default function HiringMetricsDashboard({ cardConfig, onOpenShortlistedModal, onOpenInterviewProcessModal, onOpenMetricsModal }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-medium text-gray-900 mb-4">Hiring Metrics Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(cardConfig).map(([key, config]) => (
          <div key={key} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <svg className={`w-6 h-6 text-${config.color}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={config.icon} />
              </svg>
              <a 
                onClick={() => key === 'shortlisted' ? onOpenShortlistedModal() : key === 'interviewProcess' ? onOpenInterviewProcessModal() : onOpenMetricsModal(config.modal)}
                className="text-sm text-gray-600 flex items-center cursor-pointer hover:text-gray-800"
              >
                View <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{config.value}</p>
            <p className="text-sm text-gray-600">{config.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
