import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

export default function RecruitersTable({ 
  filteredRecruiters, 
  getStatusColor, 
  onViewUser, 
  onEditRecruiter, 
  onDeleteRecruiter 
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-300 bg-white shadow-md">
      <table className="w-full min-w-[800px]">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">Recruiter Name</th>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">Company</th>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">Email</th>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">Subscription Plan</th>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">Status</th>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">Last Login</th>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">Active Jobs</th>
            <th className="text-right pr-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredRecruiters.map((recruiter) => (
            <tr key={recruiter.id} className="border-t">
              <td className="p-4 font-medium text-gray-700">{recruiter.name}</td>
              <td className="text-gray-700">{recruiter.company}</td>
              <td className="text-gray-700">{recruiter.email}</td>
              <td className="text-gray-700">{recruiter.plan}</td>
              <td>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(recruiter.status)}`}>
                  {recruiter.status}
                </span>
              </td>
              <td className="text-gray-700">{recruiter.lastLogin}</td>
              <td className="text-gray-700">{recruiter.jobs}</td>

              <td className="flex justify-end gap-3 p-4 text-gray-700">
                <button 
                  onClick={() => onViewUser(recruiter)} 
                  className="hover:text-blue-600"
                  title="View Details"
                >
                  <FiEye />
                </button>

                <button 
                  onClick={() => onEditRecruiter(recruiter)} 
                  className="hover:text-blue-600"
                  title="Edit"
                >
                  <FiEdit2 />
                </button>

                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => onDeleteRecruiter(recruiter.id)}
                  title="Delete"
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
