import BaseModal from './BaseModal';

export default function ShortlistedModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const candidates = [
    { name: 'John Doe', role: 'Senior Developer', status: 'Shortlisted', statusColor: 'blue', date: 'Jan 20, 2024', interviewer: 'Sarah Johnson', details: 'Skills: React, Node.js, MongoDB' },
    { name: 'Sarah Miller', role: 'Product Manager', status: 'Shortlisted', statusColor: 'blue', date: 'Jan 15, 2024', interviewer: 'Mike Davis', details: 'Skills: Agile, Scrum, JIRA' },
    { name: 'Mike Johnson', role: 'UX Designer', status: 'Shortlisted', statusColor: 'blue', date: 'Jan 10, 2024', interviewer: 'John Smith', details: 'Skills: Figma, Adobe XD, Prototyping' }
  ];

  return (
    <BaseModal
      title="Shortlisted Candidates"
      subtitle="Candidates who have been shortlisted for positions"
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
        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search candidates..."
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
          {candidates.map((item, index) => (
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
                  <p className="text-gray-600">Shortlisted By</p>
                  <p className="text-gray-900">{item.interviewer}</p>
                </div>
                <div>
                  <p className="text-gray-600">Date</p>
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
