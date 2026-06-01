import { SUBSCRIPTION_PLANS, STATUS_OPTIONS } from '@/utils/recruitersConstants';
import { LuChevronDown } from "react-icons/lu";

export default function AddRecruiterForm({ form, onChange }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">
            Recruiter Name <span className="text-[#0A0A0A]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="e.g., John Smith"
            className="w-full rounded-lg border border-[#D1D5DC] px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">
            Company <span className="text-[#0A0A0A]">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={onChange}
            placeholder="e.g., TechCorp Inc."
            className="w-full rounded-lg border border-[#D1D5DC] px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">
            Email Address <span className="text-[#0A0A0A]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="email@company.com"
            className="w-full rounded-lg border border-[#D1D5DC] px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="+1 (555) 000-0000"
            className="w-full rounded-lg border border-[#D1D5DC] px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">
            Subscription Plan <span className="text-[#0A0A0A]">*</span>
          </label>
          <div className="relative">
            <select
              name="plan"
              value={form.plan}
              onChange={onChange}
              className="w-full rounded-lg border border-[#D1D5DC] px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30 appearance-none"
            >
              <option value="">Select a plan</option>
              {SUBSCRIPTION_PLANS.map(plan => (
                <option key={plan} value={plan}>{plan}</option>
              ))}
            </select>
            <LuChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-[#000000] pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">
            Initial Status
          </label>
          <div className="relative">
            <select
              name="status"
              value={form.status}
              onChange={onChange}
              className="w-full rounded-lg border border-[#D1D5DC] px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30 appearance-none"
            >
              {STATUS_OPTIONS.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <LuChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-[#000000] pointer-events-none" />
          </div>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">Notes</label>
        <textarea
          name="notes"
          value={form.notes || ""}
          onChange={onChange}
          rows={3}
          className="w-full rounded-lg border border-[#D1D5DC] px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
          placeholder="Additional information about recruiter..."
        />
      </div>
    </div>
  );
}
