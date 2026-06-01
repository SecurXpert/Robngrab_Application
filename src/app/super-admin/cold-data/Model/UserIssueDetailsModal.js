import React from 'react';
import { LuX, LuBuilding2, LuUser, LuMail, LuPen, LuUserCheck } from 'react-icons/lu';
import { FiUser, FiBriefcase, FiUsers, FiUserCheck, FiPhone } from 'react-icons/fi';
import { PRIORITY_COLORS, STATUS_COLORS } from '@/utils/coldDataConstants';

// Function to get role icon and color
const getRoleIcon = (role) => {
  const roles = {
    'Client': { icon: FiUser, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    'Recruiter': { icon: LuUser, color: 'text-green-600', bgColor: 'bg-green-100' },
    'Franchise': { icon: LuUser, color: 'text-[#155DFC]', bgColor: 'bg-[#EFF6FF]' },
    'Vendor': { icon: LuBuilding2, color: 'text-[#9810FA]', bgColor: 'bg-[#FAF5FF]' }
  };
  return roles[role] || { icon: FiUserCheck, color: 'text-gray-600', bgColor: 'bg-gray-100' };
};

export default function UserIssueDetailsModal({ onClose, user, onSendEmail, onCallUser, onAddNotes, onUpdateStatus }) {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8 transform transition-all">
        <div className="flex justify-between items-center  p-2 border-b border-[#E5E7EB]">
          <h2 className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">User Issue Details</h2>
          <button onClick={onClose} className=" transition-colors">
            <LuX size={25} className="text-[#0A0A0A]" />
          </button>
        </div>

        <div className="p-6">
          {/* User Information */}
          <div className="mb-5 border border-[#F3F4F6] bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-inter font-weight-500  mb-4 flex items-center gap-2 text-[#0A0A0A] ">
              User Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-[#6A7282]">Name</span>
                <p className="font-medium text-[#0A0A0A]">{user?.name}</p>
              </div>
              <div>
                <span className="text-sm text-[#6A7282]">Role</span>
                <div className="flex items-center gap-2">
                  {(() => {
                    const roleConfig = getRoleIcon(user?.role);
                    const Icon = roleConfig.icon;
                    return (
                      <>
                        <Icon className="w-5 h-5 text-[#0A0A0A]" />
                        <p className="font-medium text-[#0A0A0A]">{user?.role}</p>
                      </>
                    );
                  })()}
                </div>
              </div>


              <div>
                <span className="text-sm text-[#6A7282]">Email</span>
                <p className="font-medium text-[#0A0A0A]">{user?.email}</p>
              </div>
              <div>
                <span className="text-sm text-[#6A7282]">Phone</span>
                <p className="font-medium text-[#0A0A0A]">{user?.phone}</p>
              </div>
              <div>
                <span className="text-sm text-[#6A7282]">Organization</span>
                <p className="font-medium text-[#0A0A0A]">{user?.organization}</p>
              </div>
              <div>
                <span className="text-sm text-[#6A7282]">Category</span><br />
                <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {user?.category}
                </span>
              </div>
            </div>
          </div>

          {/* Issue Summary */}
          <div className="mb-6 border border-gray-200 bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-family-Inter font-weight-500 mb-4 text-[#0A0A0A]">Issue Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-[#6A7282]">Issue Type</span><br />
                <span className="inline-block px-2 py-1 text-sm font-medium bg-[#FEF2F2] text-[#C10007] rounded-full">
                  {user?.issueType}
                </span>
              </div>
              <br />
              <div>
                <span className="text-sm text-[#6A7282]">Description</span>
                <p className="font-medium text-[#0A0A0A]">{user?.issueDescription}</p>
              </div>
              <br />
              <div>
                <span className="text-sm text-[#6A7282]">First Detected</span>
                <p className="font-medium text-[#0A0A0A]">{user?.firstDetected}</p>
              </div>
              <div>
                <span className="text-sm text-[#6A7282]">Last Activity</span>
                <p className="font-medium text-[#0A0A0A]">{user?.lastActivity}</p>
              </div>
              <div>
                <span className="text-sm text-[#6A7282]">Priority</span><br />
                <span className={`inline-block px-2 py-1 text-xs font-medium ${PRIORITY_COLORS[user?.priority] || 'bg-gray-100 text-gray-800'}`}>
                  {user?.priority}
                </span>
              </div>
              <div>
                <span className="text-sm text-[#6A7282]">Status</span><br />
                <span className={`inline-block px-2 py-1 text-xs font-medium ${STATUS_COLORS[user?.status] || 'bg-gray-100 text-gray-800'}`}>
                  {user?.status}
                </span>
              </div>
              <div>
                <span className="text-sm text-[#6A7282]">Assigned To</span>
                <p className="font-medium text-[#0A0A0A]">{user?.assignedTo}</p>
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="mb-6 border border-gray-200 bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-family-Inter font-weight-500 mb-4 text-[#0A0A0A]">Activity Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-[#0A0A0A]">Issue Detected</span>
                  <p className="text-sm text-[#6A7282] mt-1">{user?.firstDetected}</p>
                  <p className="text-sm text-[#6A7282] mt-1">{user?.issueType} - {user?.issueDescription}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-[#0A0A0A]">Assigned to {user?.assignedTo}</span>
                  <p className="text-sm text-[#6A7282] mt-1">{user?.firstDetected}</p>

                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-[#0A0A0A]">Last Activity</span>
                  <p className="text-sm text-[#6A7282] mt-1">{user?.lastActivity}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mb-0 border border-gray-200 bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-family-Inter font-weight-500 mb-4 text-[#0A0A0A]">Actions</h3>
            <div className="flex gap-3">
              <button
                onClick={onCallUser}
                className="flex-1 px-4 py-2 bg-[#2563EB] text-[#FFFFFF] rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
              >
                <FiPhone className="w-4 h-4" />
                Call User
              </button>
              <button
                onClick={onSendEmail}
                className="flex-1 px-4 py-2 bg-[#FFFFFF] border text-[#0A0A0A]] border-[#D1D5DC] rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                <LuMail className="w-4 h-4" />
                Send Email
              </button>
            </div>
            <div className="flex gap-3 mt-3">
              <button
                onClick={onAddNotes}
                className="flex-1 px-4 py-2 bg-[#FFFFFF] border text-[#0A0A0A]] border-[#D1D5DC] rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                <LuPen className="w-4 h-4" />
                Add Notes
              </button>
              <button
                onClick={onUpdateStatus}
                className="flex-1 px-4 py-2 bg-[#FFFFFF] border text-[#0A0A0A]] border-[#D1D5DC] rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                <LuUserCheck className="w-4 h-4" />
                Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
