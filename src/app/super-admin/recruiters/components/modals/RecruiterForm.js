import { SUBSCRIPTION_PLANS, STATUS_OPTIONS } from '../../constants';

export default function RecruiterForm({ form, onChange, isEdit = false }) {
  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Recruiter Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          className="w-full rounded-lg border px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
        />
      </div>
      
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Company <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={onChange}
          className="w-full rounded-lg border px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
        />
      </div>
      
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          className="w-full rounded-lg border px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
        />
      </div>
      
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={onChange}
          className="w-full rounded-lg border px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
        />
      </div>
      
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Subscription Plan <span className="text-red-500">*</span>
        </label>
        <select
          name="plan"
          value={form.plan}
          onChange={onChange}
          className="w-full rounded-lg border px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
        >
          <option value="">Select a plan</option>
          {SUBSCRIPTION_PLANS.map(plan => (
            <option key={plan} value={plan}>{plan}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          {isEdit ? "Status" : "Initial Status"}
        </label>
        <select
          name="status"
          value={form.status}
          onChange={onChange}
          className="w-full rounded-lg border px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
        >
          {STATUS_OPTIONS.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>
      
      <div className="col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-gray-700">Notes</label>
        <textarea
          name="notes"
          value={form.notes || ""}
          onChange={onChange}
          rows={3}
          className="w-full rounded-lg border px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
          placeholder="Additional information about recruiter..."
        />
      </div>
    </div>
  );
}
