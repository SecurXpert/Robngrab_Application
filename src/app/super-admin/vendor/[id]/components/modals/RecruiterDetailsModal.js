import { AVATAR_COLORS } from '../../constants';
import BaseModal from './BaseModal';

export default function RecruiterDetailsModal({ 
  isOpen, 
  onClose, 
  selectedRecruiter 
}) {
  if (!isOpen || !selectedRecruiter) return null;

  const getAvatarColor = (id) => AVATAR_COLORS[id] || 'bg-gray-500';

  return (
    <BaseModal
      title="Recruiter Details"
      subtitle="Comprehensive information and performance metrics"
      onClose={onClose}
      maxWidth="max-w-4xl"
      footerContent={
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button className="px-3 sm:px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span className="hidden sm:inline">Edit Profile</span>
              <span className="sm:hidden">Edit</span>
            </button>
            <button className="px-3 sm:px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="hidden sm:inline">Download Report</span>
              <span className="sm:hidden">Report</span>
            </button>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button
              onClick={onClose}
              className="px-3 sm:px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
            >
              Close
            </button>
            <button className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
              <span className="hidden sm:inline">Send Message</span>
              <span className="sm:hidden">Message</span>
            </button>
          </div>
        </div>
      }
    >
      <div className="space-y-3 sm:space-y-4">
        {/* First Row - Recruiter Info */}
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className={`h-12 w-12 sm:h-16 sm:w-16 rounded-full flex-shrink-0 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center ${getAvatarColor(selectedRecruiter.id)}`}>
              <span className="text-white font-semibold text-sm sm:text-xl">
                {selectedRecruiter.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </span>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900">{selectedRecruiter.name}</h4>
              <p className="text-sm text-gray-600">{selectedRecruiter.role}</p>
            </div>
          </div>
        </div>

        {/* Second Row - Contact & ID */}
        <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <p className="font-medium text-gray-900 text-sm break-all">{selectedRecruiter.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Phone</p>
              <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Join Date</p>
              <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.joinDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Recruiter ID</p>
              <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.recruiterId}</p>
            </div>
          </div>
        </div>

        {/* Third Row - Time Tracking */}
        <div className="bg-green-50 rounded-lg p-3 sm:p-4">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Time Tracking (Today)</h4>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <p className="text-sm text-gray-600 mb-1 sm:mb-0">Active Time</p>
              <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.activeTime}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <p className="text-sm text-gray-600 mb-1 sm:mb-0">Inactive Time</p>
              <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.inactiveTime}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <p className="text-sm text-gray-600 mb-1 sm:mb-0">Last Action</p>
              <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.lastAction}</p>
            </div>
          </div>
        </div>

        {/* Fourth Row - Performance Metrics */}
        <div className="bg-purple-50 rounded-lg p-3 sm:p-4">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Performance Metrics</h4>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <p className="text-sm text-gray-600 mb-1 sm:mb-0">Candidates Handled</p>
                <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.candidatesHandled}</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${Math.min(100, (selectedRecruiter.candidatesHandled / 100) * 100)}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <p className="text-sm text-gray-600 mb-1 sm:mb-0">Resume Views</p>
                <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.resumeViews}</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${Math.min(100, (selectedRecruiter.resumeViews / 200) * 100)}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <p className="text-sm text-gray-600 mb-1 sm:mb-0">Interviews Scheduled</p>
                <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.interviewsScheduled}</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: `${Math.min(100, (selectedRecruiter.interviewsScheduled / 50) * 100)}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <p className="text-sm text-gray-600 mb-1 sm:mb-0">Successful Placements</p>
                <p className="font-medium text-gray-900 text-sm">{selectedRecruiter.successfulPlacements}</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: `${Math.min(100, (selectedRecruiter.successfulPlacements / 30) * 100)}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  );
}
