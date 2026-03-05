import GenericModal from './GenericModal';

export default function InterviewProcessModal({ isOpen, onClose }) {
  const candidates = [
    {
      name: 'John Doe',
      role: 'Senior Developer',
      status: 'In Progress',
      statusColor: 'yellow',
      stage: 'Technical Interview',
      interviewer: 'Sarah Johnson',
      date: 'January 15, 2024'
    },
    {
      name: 'Sarah Miller',
      role: 'Product Manager',
      status: 'Completed',
      statusColor: 'green',
      stage: 'Final Round',
      interviewer: 'Mike Davis',
      date: 'January 14, 2024'
    },
    {
      name: 'Mike Johnson',
      role: 'UX Designer',
      status: 'Scheduled',
      statusColor: 'blue',
      stage: 'Initial Screening',
      interviewer: 'John Smith',
      date: 'January 13, 2024'
    }
  ];

  return (
    <GenericModal 
      isOpen={isOpen} 
      onClose={onClose}
      title="Interview Process Details"
      subtitle="Detailed breakdown and analytics"
    >
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search candidates..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
        />
      </div>

      {/* Export Button */}
      <div className="mb-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export Data
        </button>
      </div>

      {/* Candidate List */}
      <div className="space-y-4">
        {candidates.map((candidate, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-base font-medium text-gray-900">{candidate.name}</p>
                <p className="text-sm text-gray-600">{candidate.role}</p>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 bg-${candidate.statusColor}-100 text-${candidate.statusColor}-800 text-xs font-medium rounded-full`}>
                  {candidate.status}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm mb-3">
              <div>
                <p className="text-gray-600">Stage</p>
                <p className="text-gray-900">{candidate.stage}</p>
              </div>
              <div>
                <p className="text-gray-600">Interviewer</p>
                <p className="text-gray-900">{candidate.interviewer}</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p className="text-gray-900">{candidate.date}</p>
            </div>
          </div>
        ))}
      </div>
    </GenericModal>
  );
}
