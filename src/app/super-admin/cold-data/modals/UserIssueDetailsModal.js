import React from 'react';
import { FaTimes } from 'react-icons/fa';

export default function UserIssueDetailsModal({ onClose, user, onSendEmail, onCallUser, onAddNotes, onUpdateStatus }) {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8 transform transition-all">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">User Issue Details</h2>
          <button onClick={onClose} className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-md transition-colors">
            <FaTimes size={16} className="text-gray-600" />
          </button>
        </div>
        
        <div className="p-6">
          {/* User Information */}
          <div className="mb-6 border border-gray-200 bg-white rounded-lg p-2 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
              User Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-500">Name</span>
                <p className="font-medium text-gray-900">{user?.name}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Email</span>
                <p className="font-medium text-gray-900">{user?.email}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Organization</span>
                <p className="font-medium text-gray-900">{user?.organization}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Role</span>
                <p className="font-medium text-gray-900">{user?.role}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Phone</span>
                <p className="font-medium text-gray-900">{user?.phone}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Category</span>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {user?.category}
                </span>
              </div>
            </div>
          </div>

          {/* Issue Summary */}
          <div className="mb-6 border border-gray-200 bg-white rounded-lg p-2 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Issue Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-500">Issue Type</span>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                  {user?.issueType}
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Description</span>
                <p className="font-medium text-gray-900">{user?.issueDescription}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Last Activity</span>
                <p className="font-medium text-gray-900">{user?.lastActivity}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Priority</span>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                  {user?.priority}
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Status</span>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  {user?.status}
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Assigned To</span>
                <p className="font-medium text-gray-900">{user?.assignedTo}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Actions</h3>
            <div className="flex gap-3">
              <button
                onClick={onCallUser}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call User
              </button>
              <button
                onClick={onSendEmail}
                className="px-4 py-2 bg-white border text-gray-900 border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </button>
              <button
                onClick={onAddNotes}
                className="px-4 py-2 bg-white border text-gray-900 border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Add Notes
              </button>
              <button
                onClick={onUpdateStatus}
                className="px-4 py-2 bg-white border text-gray-900 border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Update Status
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
