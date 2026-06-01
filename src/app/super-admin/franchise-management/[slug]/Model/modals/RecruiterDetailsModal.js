import GenericModal from '@/app/super-admin/franchise-management/[slug]/Model/modals/GenericModal';

export default function RecruiterDetailsModal({ isOpen, onClose, recruiter }) {
  if (!isOpen || !recruiter) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Recruiter Details</h3>
            <p className="text-sm text-gray-600">Complete recruiter information and performance metrics</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex-1 overflow-y-auto">
          {/* Recruiter Basic Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                {recruiter.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{recruiter.name}</h4>
                <p className="text-sm text-gray-600">{recruiter.role}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Email</p>
                <p className="text-gray-900">{recruiter.email}</p>
              </div>
              <div>
                <p className="text-gray-600">Phone</p>
                <p className="text-gray-900">{recruiter.phone}</p>
              </div>
              <div>
                <p className="text-gray-600">Recruiter ID</p>
                <p className="text-gray-900">{recruiter.recruiterId}</p>
              </div>
              <div>
                <p className="text-gray-600">Join Date</p>
                <p className="text-gray-900">{recruiter.joinDate}</p>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-6">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h5>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-600 mb-1">Candidates Handled</p>
                <p className="text-2xl font-bold text-blue-900">{recruiter.candidatesHandled}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-green-600 mb-1">Resume Views</p>
                <p className="text-2xl font-bold text-green-900">{recruiter.resumeViews}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-purple-600 mb-1">Interviews Scheduled</p>
                <p className="text-2xl font-bold text-purple-900">{recruiter.interviewsScheduled}</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-sm text-orange-600 mb-1">Successful Placements</p>
                <p className="text-2xl font-bold text-orange-900">{recruiter.successfulPlacements}</p>
              </div>
            </div>
          </div>

          {/* Activity Status */}
          <div>
            <h5 className="text-lg font-semibold text-gray-900 mb-4">Activity Status</h5>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Current Status</span>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  recruiter.status === 'Active' ? 'bg-green-100 text-green-800' :
                  recruiter.status === 'Idle' ? 'bg-yellow-100 text-yellow-800' :
                  recruiter.status === 'On Leave' ? 'bg-blue-100 text-blue-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {recruiter.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Active Time</span>
                <span className="text-sm font-medium text-gray-900">{recruiter.activeTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Inactive Time</span>
                <span className="text-sm font-medium text-gray-900">{recruiter.inactiveTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Last Action</span>
                <span className="text-sm font-medium text-gray-900">{recruiter.lastAction}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end p-6 border-t border-gray-200 space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
}
