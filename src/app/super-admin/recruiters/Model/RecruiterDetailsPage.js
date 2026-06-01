import React from "react";
import { LuArrowLeft, LuPen, LuPower, LuPhone, LuBuilding2, LuUsers, LuDollarSign, LuCalendar } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FiBriefcase } from "react-icons/fi";

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white shadow-sm rounded-xl p-4 w-full">
    <div className="flex items-center gap-2 mb-2">
      {icon && <span className="text-[#99A1AF]">{icon}</span>}
      <p className="text-[#4A5565] text-sm">{title}</p>
    </div>
    <h2 className="text-xl font-family-inter font-weight-500 text-[#0A0A0A]">{value}</h2>
  </div>
);

const InfoCard = ({ icon, title, value }) => (
  <div className="bg-white shadow-sm rounded-xl p-4 flex items-center gap-4 w-full">
    <div className="bg-[#EFF6FF] p-2 rounded-lg text-xl">{icon}</div>
    <div>
      <p className="text-[#4A5565] text-sm">{title}</p>
      <p className="font-family-inter font-weight-500 text-[#0A0A0A]">{value}</p>
    </div>
  </div>
);

const RecruiterDetailsPage = ({ recruiter, onBack, onEdit, onSuspend, onDelete }) => {
  return (
    <div style={{ background: 'linear-gradient(180deg, #F8F9FF 0%, #FCFCFF 100%)' }}>
      <div className="p-6 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <button 
            onClick={onBack}
            className="text-[#4A5565] mb-2 hover:text-gray-700 transition-colors flex items-center gap-2"
          >
            <LuArrowLeft />
            Back to Recruiters
          </button>
          <h1 className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">{recruiter.name}</h1>
          <p className="text-[#4A5565]">{recruiter.company}</p>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#F0FDF4] text-[#008236]">
            Active
          </span>
          
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <button 
            onClick={onEdit}
            className="px-5 py-2 border border-[#D1D5DC] text-[#0A0A0A] rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <LuPen />
            Edit
          </button>
          <button 
            onClick={onSuspend}
            className="px-5 py-2 border border-[#D1D5DC] text-[#0A0A0A] rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <LuPower />
            Suspend
          </button>
          <button 
            onClick={onDelete}
            className="px-5 py-2 border border-[#FFA2A2] text-[#FF6B6B] rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2"
          >
            <RiDeleteBinLine />
            Delete
          </button>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <InfoCard title="Email" value={recruiter.email} icon={<HiOutlineMail style={{ color: '#2563EB' }} />} />
        <InfoCard title="Phone" value={recruiter.phone || "Not provided"} icon={<LuPhone style={{ color: '#00A63E' }} />} />
        <InfoCard title="Subscription" value={recruiter.plan} icon={<LuBuilding2 style={{ color: '#9810FA' }} />} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Active Jobs" value={recruiter.activeJobs || "0"} icon={<FiBriefcase />} />
        <StatCard title="Total Placements" value={recruiter.totalPlacements || "0"} icon={<LuUsers />} />
        <StatCard title="Revenue Generated" value={recruiter.revenue || "$0"} icon={<LuDollarSign />} />
        <StatCard title="Joined Date" value={recruiter.joinedDate || "N/A"} icon={<LuCalendar />} />
      </div>

      {/* Prior Info */}
      <h2 className="text-lg font-family-inter font-weight-600 text-[#0A0A0A] mb-2">Prior Information</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Job Posts" value={recruiter.totalJobPosts || "0"} />
        <StatCard title="Successful Placements" value={recruiter.successfulPlacements || "0"} />
        <StatCard title="Placement Rate" value={recruiter.placementRate || "0%"} />
        <StatCard title="Average Time to Fill" value={recruiter.avgTimeToFill || "N/A"} />
      </div>

      {/* Table */}
      <h2 className="text-lg font-family-inter font-weight-600 text-[#0A0A0A] mb-2">Hiring Activity</h2>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
        <table className="w-full">
          <thead className="bg-[#F8F9FB] border-b border-[#E5E7EB]">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-medium text-[#0A0A0A] font-family-inter font-weight-500 tracking-wider">Position</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-[#0A0A0A] font-family-inter font-weight-500  tracking-wider">Company</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-[#0A0A0A] font-family-inter font-weight-500  tracking-wider">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-[#0A0A0A] font-family-inter font-weight-500  tracking-wider">Applications</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-[#E5E7EB]">
            <tr className="hover:bg-[#F9FAFB] transition-colors">
              <td className="py-4 px-4 text-sm text-[#0A0A0A]">Senior React Developer</td>
              <td className="py-4 px-4 text-sm text-[#4A5565]">TechCorp </td>
              <td className="py-4 px-4">
                <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-[#D1FAE5] text-[#065F46]">
                  Active
                </span>
              </td>
              <td className="py-4 px-4 text-sm text-[#4A5565]">45</td>
            </tr>
            <tr className="hover:bg-[#F9FAFB] transition-colors">
              <td className="py-4 px-4 text-sm text-[#0A0A0A]">UX Designer</td>
              <td className="py-4 px-4 text-sm text-[#4A5565]">TechCorp</td>
              <td className="py-4 px-4">
                <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-[#F3F4F6] text-[#6B7280]">
                  Closed
                </span>
              </td>
              <td className="py-4 px-4 text-sm text-[#4A5565]">23</td>
            </tr>
            <tr className="hover:bg-[#F9FAFB] transition-colors">
              <td className="py-4 px-4 text-sm text-[#0A0A0A]">Product Manager</td>
              <td className="py-4 px-4 text-sm text-[#4A5565]"> TechCorp</td>
              <td className="py-4 px-4">
                <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-[#D1FAE5] text-[#065F46]">
                  Active
                </span>
              </td>
              <td className="py-4 px-4 text-sm text-[#4A5565]">67</td>
            </tr>
            <tr className="hover:bg-[#F9FAFB] transition-colors">
              <td className="py-4 px-4 text-sm text-[#0A0A0A]">DevOps Engineer</td>
              <td className="py-4 px-4 text-sm text-[#4A5565]">TechCorp</td>
              <td className="py-4 px-4">
                <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-[#D1FAE5] text-[#065F46]">
                  Active
                </span>
              </td>
              <td className="py-4 px-4 text-sm text-[#4A5565]">52</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Sections */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Billing */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h2 className="text-lg font-family-inter font-weight-600 text-[#0A0A0A] mb-4">Billing History</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-[#E5E7EB]">
              <div>
                <p className="text-sm font-medium text-[#0A0A0A]">Professional Plan</p>
                <p className="text-xs text-[#6B7280]">Jan 15, 2024</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-[#0A0A0A]">$299.00</p>
                <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-[#D1FAE5] text-[#065F46]">Paid</span>
              </div>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-[#E5E7EB]">
              <div>
                <p className="text-sm font-medium text-[#0A0A0A]">Professional Plan</p>
                <p className="text-xs text-[#6B7280]">Dec 15, 2023</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-[#0A0A0A]">$299.00</p>
                <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-[#D1FAE5] text-[#065F46]">Paid</span>
              </div>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-[#E5E7EB]">
              <div>
                <p className="text-sm font-medium text-[#0A0A0A]">Professional Plan</p>
                <p className="text-xs text-[#6B7280]">Nov 15, 2023</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-[#0A0A0A]">$299.00</p>
                <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-[#D1FAE5] text-[#065F46]">Paid</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-[#0A0A0A]">Professional Plan</p>
                <p className="text-xs text-[#6B7280]">Oct 15, 2023</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-[#0A0A0A]">$299.00</p>
                <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-[#D1FAE5] text-[#065F46]">Paid</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h2 className="text-lg font-family-inter font-weight-600 text-[#0A0A0A] mb-6">Activity Logs</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className=" mb-1 text-sm font-medium text-[#0A0A0A]">New job posted</p>
                  <p className="text-xs text-[#6B7280]">Senior React Developer</p>
                </div>
              </div>
              <p className="text-xs text-[#6B7280]">2 hours ago</p>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="mb-1 text-sm font-medium text-[#0A0A0A]">Candidate shortlisted</p>
                  <p className="text-xs text-[#6B7280]">Product Manager position</p>
                </div>
              </div>
              <p className="text-xs text-[#6B7280]">5 hours ago</p>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="mb-1 text-sm font-medium text-[#0A0A0A]">Profile updated</p>
                  <p className="text-xs text-[#6B7280]">Contact information</p>
                </div>
              </div>
              <p className="text-xs text-[#6B7280]">1 day ago</p>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="mb-1 text-sm font-medium text-[#0A0A0A]">Interview scheduled</p>
                  <p className="text-xs text-[#6B7280]">UX Designer candidate</p>
                </div>
              </div>
              <p className="text-xs text-[#6B7280]">2 days ago</p>
            </div>
                      </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RecruiterDetailsPage;
