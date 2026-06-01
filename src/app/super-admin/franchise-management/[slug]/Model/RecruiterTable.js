import { LuActivity, LuBan, LuChevronRight, LuClock4, LuCoffee } from "react-icons/lu";

export default function RecruiterTable({ SAMPLE_RECRUITERS, openRecruiterModal }) {
  return (
    <>
      <h2 className="text-xl font-family-inter font-weight-500 text-[#0A0A0A] mb-4">
        Recruiter Activity Status
      </h2>
      <div className="p-0 mb-6 bg-white border border-gray-200 shadow-sm rounded-xl">
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-sm font-medium tracking-wider text-left text-gray-500">
                  Recruiter Name
                </th>
                <th className="px-6 py-4 text-sm font-medium tracking-wider text-left text-gray-500">
                  Role
                </th>
                <th className="px-6 py-4 text-sm font-medium tracking-wider text-left text-gray-500">
                  Current Status
                </th>
                <th className="px-6 py-4 text-sm font-medium tracking-wider text-left text-gray-500">
                  Active Time
                </th>
                <th className="px-6 py-4 text-sm font-medium tracking-wider text-left text-gray-500">
                  Inactive Time
                </th>
                <th className="px-6 py-4 text-sm font-medium tracking-wider text-left text-gray-500">
                  Last Action
                </th>
                <th className="px-6 py-4 text-sm font-medium tracking-wider text-left text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {SAMPLE_RECRUITERS.map((recruiter, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                    <span className="text-md font-family-inter font-weight-500 text-[#0A0A0A]">
                      {recruiter.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {recruiter.role}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2 py-1 text-sm font-medium rounded-full ${
                        recruiter.status === "Active"
                          ? "bg-[#F0FDF4] text-[#008236] border border-[#B9F8CF]"
                          : recruiter.status === "Idle"
                            ? "bg-[#FEFCE8] text-[#A65F00] border border-[#FFF085]"
                            : recruiter.status === "on leave"
                              ? "bg-[#EFF6FF] text-[#1447E6] border border-[#BEDBFF]"
                              : recruiter.status === "Disabled"
                                ? "bg-[#FEF2F2] text-[#C10007] border border-[#FFC9C9]"
                                : "bg-red-100 text-red-800"
                      }`}
                    >
                      {recruiter.status === "Active" && (
                        <LuActivity className="w-3 h-3 mr-1" />
                      )}
                      {recruiter.status === "Idle" && (
                        <LuClock4 className="w-3 h-3 mr-1" />
                      )}
                      {recruiter.status === "on leave" && (
                        <LuCoffee className="w-3 h-3 mr-1" />
                      )}
                      {recruiter.status === "Disabled" && (
                        <LuBan className="w-3 h-3 mr-1" />
                      )}
                      {recruiter.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {recruiter.activeTime}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {recruiter.inactiveTime}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {recruiter.lastAction}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                    <button
                      onClick={() => openRecruiterModal(recruiter)}
                      className="inline-flex items-center text-blue-600 hover:text-blue-900"
                    >
                      View
                      <LuChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
