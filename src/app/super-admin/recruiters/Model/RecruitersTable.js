import { FiEye, FiEdit2, FiTrash2, FiUsers } from "react-icons/fi";

export default function RecruitersTable({ 
  filteredRecruiters, 
  getStatusColor, 
  onViewUser, 
  onEditRecruiter, 
  onDeleteRecruiter 
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#4A5565] tracking-wider">Recruiter Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#4A5565] tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#4A5565] tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#4A5565] tracking-wider">Subscription Plan</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#4A5565] tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#4A5565] tracking-wider">Last Login</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#4A5565] tracking-wider">Active Jobs</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#4A5565] tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRecruiters.map((recruiter) => (
              <tr key={recruiter.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-family-inter font-weight-400 text-[#0A0A0A] whitespace-nowrap">{recruiter.name}</div>
                  <div className="text-xs text-gray-500 whitespace-nowrap">ID: R00{recruiter.id}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{recruiter.company}</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{recruiter.email}</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  <span className="inline-flex items-center px-2 py-1 text-sm font-medium rounded-full">
                    {recruiter.plan}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  <span 
                    className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                      recruiter.status === 'Active' ? 'bg-[#B9F8CF] text-[#008236]' : 
                      recruiter.status === 'Inactive' ? 'bg-gray-100 text-gray-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}
                    style={recruiter.status === 'Active' ? { border: '2px solid #B9F8CF' } : {}}
                  >
                    {recruiter.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{recruiter.lastLogin}</td>
                <td className="px-6 py-4 text-sm text-[#364153] whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {recruiter.jobs}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => onViewUser(recruiter)} 
                      className="text-blue-600 hover:text-blue-900 p-1 hover:bg-blue-50 rounded" 
                      title="View Details"
                    >
                      <FiEye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onEditRecruiter(recruiter)} 
                      className="text-green-600 hover:text-green-900 p-1 hover:bg-green-50 rounded" 
                      title="Edit"
                    >
                      <FiEdit2 className="w-4 h-4" />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded" 
                      onClick={() => onDeleteRecruiter(recruiter.id)}
                      title="Delete"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
