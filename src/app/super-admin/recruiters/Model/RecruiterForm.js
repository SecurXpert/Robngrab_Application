import { SUBSCRIPTION_PLANS, STATUS_OPTIONS } from '@/utils/recruitersConstants';
import { LuChevronDown } from "react-icons/lu";

export default function RecruiterForm({ form, onChange, isEdit = true }) {
  return (
    <div className="space-y-6">
      {/* First Row: Recruiter Name and Company */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium" style={{ color: '#0A0A0A' }}>
            Recruiter Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name || ''}
            onChange={onChange}
            placeholder="Enter recruiter name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium" style={{ color: '#0A0A0A' }}>
            Company <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={form.company || ''}
            onChange={onChange}
            placeholder="Enter company name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Second Row: Email Address and Subscription Plan */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium" style={{ color: '#0A0A0A' }}>
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email || ''}
            onChange={onChange}
            placeholder="Enter email address"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium" style={{ color: '#0A0A0A' }}>
            Subscription Plan
          </label>
          <div className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 h-[45px] flex items-center">

          </div>
        </div>
      </div>

      {/* Third Row: Status and Active Jobs */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium" style={{ color: '#0A0A0A' }}>
            Status
          </label>
          <div className="relative">
            <select
              name="status"
              value={form.status || ''}
              onChange={onChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white"
            >
              {STATUS_OPTIONS.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <LuChevronDown className="absolute right-3 top-4 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium" style={{ color: '#0A0A0A' }}>
            Active Jobs
          </label>
          <input
            type="number"
            name="activeJobs"
            value={form.activeJobs || ''}
            onChange={onChange}
            placeholder="Enter number of active jobs"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
}
