import React from 'react';
import { FiDownload, FiCalendar, FiUser, FiBriefcase, FiUserCheck, FiEye, FiPhone } from 'react-icons/fi';
import { LuBuilding2, LuUser, LuMail } from 'react-icons/lu';

// Function to get issue type color
const getIssueTypeColor = (issueType) => {
  const colors = {
    'All Cold Data': 'bg-blue-100 text-blue-800',
    'Payment Pending': 'bg-[#FEF2F2] text-[#C10007] border border-[#FFE2E2] rounded-full font-medium text-xs',
    'Registration Issues': 'bg-[#FFF7ED] text-[#CA3500] border border-[#FFEDD4] rounded-full font-medium text-xs',
    'Email/OTP Failure': 'bg-[#FEFCE8] text-[#A65F00] border border-[#FEF9C2] rounded-full font-medium text-xs',
    'Profile Incomplete': 'bg-[#EFF6FF] text-[#1447E6] border border-[#DBEAFE] rounded-full font-medium text-xs',
    'Inactive Users': 'bg-[#F9FAFB] text-[#364153] border border-[#F3F4F6] rounded-full font-medium text-xs',
    'Subscription Expired': 'bg-[#FAF5FF] text-[#8200DB] border border-[#F3E8FF] rounded-full font-medium text-xs',
    'System Errors': 'bg-[#FDF2F8] text-[#C6005C]'
  };
  return colors[issueType] || 'bg-gray-100 text-gray-800';
};

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

export default function ColdDataTable({
  filteredUsers,
  coldUsers,
  selectedUsers,
  handleSelectUser,
  handleViewDetails,
  handleSendEmail,
  handleCallUser,
  getPriorityColor,
  getStatusColor,
  onExportResults
}) {
  return (
    <>
      {/* Table Section */}
      <div className="w-full px-0 py-4 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing <span className="font-medium">{filteredUsers.length}</span> of
          <span className="font-medium"> {coldUsers.length}</span> cold users
        </p>
        <button
          onClick={onExportResults}
          className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition"
        >
          <FiDownload className="w-4 h-4" />
          Export Results
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow p-0 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="pl-4 pr-1 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleSelectAll(coldUsers.map(u => u.id));
                      } else {
                        handleSelectAll([]);
                      }
                    }}
                    className="rounded border-gray-300"
                  />
                </th>
                <th className="px-1 py-1 text-left text-xs font-medium text-[#4A5565] uppercase tracking-wider whitespace-nowrap">
                  User Name
                </th>
                <th className="px-1 py-1 text-left text-xs font-medium text-[#4A5565] uppercase tracking-wider whitespace-nowrap">
                  Role
                </th>
                <th className="px-1 py-1 text-left text-xs font-medium text-[#4A5565] uppercase tracking-wider">
                  Issue Type
                </th>
                <th className="px-1 py-1 text-left text-xs font-medium text-[#4A5565] uppercase tracking-wider">
                  Issue Description
                </th>
                <th className="px-1 py-1 text-left text-xs font-medium text-[#4A5565] uppercase tracking-wider whitespace-nowrap">
                  Last Activity
                </th>
                <th className="px-1 py-1 text-left text-xs font-medium text-[#4A5565] uppercase tracking-wider whitespace-nowrap">
                  Priority
                </th>
                <th className="px-1 py-1 text-left text-xs font-medium text-[#4A5565] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-3 py-1 text-left text-xs font-medium text-[#4A5565] uppercase tracking-wider whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 align-middle">
                  <td className="pl-4 pr-1 py-1 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-1 py-1 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-1 py-1 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      {(() => {
                        const roleConfig = getRoleIcon(user.role);
                        const Icon = roleConfig.icon;
                        return (
                          <Icon className={`w-8 h-8 ${roleConfig.color} ${roleConfig.bgColor} p-2 rounded-lg`} />
                        );
                      })()}
                      <div className="flex flex-col">
                        <span>{user.role}</span>
                        <span className="text-xs text-gray-500">
                          {user.category === 'IT' || user.category === 'Technology' || user.category === 'Cloud Services' ? 'IT' : 'Non-IT'}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-1 py-1">
                    <div className="max-w-xs">
                      <span className={`px-2 py-1 text-xs font-medium rounded-lg ${getIssueTypeColor(user.issueType)} inline-flex flex-col items-center text-center min-w-[80px] min-h-[40px] justify-center`}>
                        {user.issueType.split(' ').map((word, index) => (
                          <span key={index}>{word}</span>
                        ))}
                      </span>
                    </div>
                  </td>
                  <td className="px-1 py-1 text-sm text-gray-900 align-middle">
                    <div className="max-w-xs flex items-center justify-center">
                      <span className="inline-flex flex-col items-center text-center text-sm">
                        {user.issueDescription.split(' ').slice(0, 2).map((word, index) => (
                          <span key={index}>{word}</span>
                        ))}
                        {user.issueDescription.split(' ').length > 2 && <span>...</span>}
                      </span>
                    </div>
                  </td>
                  <td className="px-1 py-1 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-4 h-4 text-gray-600" />
                      <span>{user.lastActivity}</span>
                    </div>
                  </td>
                  <td className="px-1 py-1 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium ${getPriorityColor(user.priority)}`}>
                      {user.priority}
                    </span>
                  </td>
                  <td className="px-1 py-1">
                    <div className="max-w-xs">
                      <span className={`px-2 py-1 text-xs font-medium ${getStatusColor(user.status)} inline-block`}>
                        {user.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-1 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-1 sm:gap-2">
                      <button
                        onClick={() => handleViewDetails(user)}
                        className="text-blue-600 hover:text-blue-900 p-1"
                        title="View Details"
                      >
                        <FiEye className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <button
                        onClick={() => handleSendEmail(user)}
                        className="text-green-600 hover:text-green-900 p-1"
                        title="Send Email"
                      >
                        <LuMail className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <button
                        onClick={() => handleCallUser(user)}
                        className="text-purple-600 hover:text-purple-900 p-1"
                        title="Make Call"
                      >
                        <FiPhone className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </>
  );
}
