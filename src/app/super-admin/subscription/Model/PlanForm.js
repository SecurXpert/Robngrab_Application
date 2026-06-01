import { ALL_FEATURES, BILLING_TYPES } from '@/utils/subscriptionConstants';

export default function PlanForm({ form, errors, onChange }) {
  const getInputClassName = (fieldName) => {
    return `w-full rounded-lg border px-4 py-2.5 text-sm ${errors[fieldName]
        ? "border-red-400 focus:border-red-400 focus:ring-red-200"
        : "border-gray-300 focus:border-indigo-400 focus:ring-indigo-200"
      } outline-none focus:ring-2`;
  };

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">
          Plan Name <span className="text-red-500">*</span>
        </label>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="e.g., Professional Plan"
          className={getInputClassName('name')}
        />
        {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Describe the plan benefits..."
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">
            Price<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              $79
            </span>
            <input
              name="price"
              value={form.price}
              onChange={onChange}
              className={`w-full rounded-lg border pl-9 pr-4 py-2.5 text-sm ${errors.price
                  ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:border-indigo-400 focus:ring-indigo-200"
                } outline-none focus:ring-2`}
            />
          </div>
          {errors.price && <p className="mt-1.5 text-sm text-red-600">{errors.price}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">
            Duration (days) <span className="text-red-500">*</span>
          </label>
          <input
            name="duration"
            value={form.duration}
            onChange={onChange}
            className={getInputClassName('duration')}
          />
          {errors.duration && (
            <p className="mt-1.5 text-sm text-red-600">{errors.duration}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">Type</label>
          <select
            name="type"
            value={form.type}
            onChange={onChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            {BILLING_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#0A0A0A]">
            Credits Offered <span className="text-red-500">*</span>
          </label>
          <input
            name="credits"
            value={form.credits}
            onChange={onChange}
            placeholder='e.g., 500'
            className={getInputClassName('credits')}
          />
          {errors.credits && <p className="mt-1.5 text-sm text-red-600">{errors.credits}</p>}
        </div>
      </div>

      {/* Features - disabled / read-only in this version */}
      <div>
        <label className="mb-2 block text-sm font-medium text-[#0A0A0A]">Features</label>
        <div className="grid grid-cols-1 gap-2.5 opacity-70">
          {ALL_FEATURES.map((feature) => (
            <label key={feature} className="flex items-center gap-2.5">
              <input
                type="checkbox"
                checked={form.features.includes(feature)}
                readOnly
                className="h-3.5 w-3.5 rounded border-gray-300 text-indigo-600"
              />
              <span className="text-sm text-[#364153]">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-2 opacity-70">
        <label className="flex items-center gap-2.5">
          <input
            type="checkbox"
            name="status"
            checked={false}
            readOnly
            className="h-3.5 w-3.5 rounded border-gray-300 text-indigo-600 "
          />
          <span className="text-sm font-medium text-[#0A0A0A]">Set as Active</span>
        </label>
      </div>
    </div>
  );
}
