import { FaTimes } from "react-icons/fa";
import BaseModal from './BaseModal';

export default function RecruiterDetailView({ 
  recruiter, 
  onClose, 
  getStatusColor, 
  onEdit, 
  onDelete, 
  onSuspend 
}) {
  if (!recruiter) {
    return null;
  }

  return (
    <BaseModal onClose={onClose} wide showCloseButton={false}>
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Recruiter Details</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium text-gray-900">{recruiter.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Company</p>
              <p className="font-medium text-gray-900">{recruiter.company}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-900">{recruiter.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium text-gray-900">{recruiter.phone}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Subscription Plan</p>
              <p className="font-medium text-gray-900">{recruiter.plan}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(recruiter.status)}`}>
                {recruiter.status}
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Login</p>
              <p className="font-medium text-gray-900">{recruiter.lastLogin}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Jobs</p>
              <p className="font-medium text-gray-900">{recruiter.jobs}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6">
          <div className="flex gap-3">
            <button
              onClick={onEdit}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Edit Recruiter
            </button>
            <button
              onClick={onSuspend}
              className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700"
            >
              Suspend
            </button>
            <button
              onClick={onDelete}
              className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </BaseModal>
  );
}
