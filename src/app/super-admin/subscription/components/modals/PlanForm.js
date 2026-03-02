import { ALL_FEATURES, BILLING_TYPES } from '../../constants';

export default function PlanForm({ form, errors, onChange }) {
  const getInputClassName = (fieldName) => {
    return `w-full rounded-lg border px-4 py-2.5 text-sm ${
      errors[fieldName]
        ? "border-red-400 focus:border-red-400 focus:ring-red-200"
        : "border-gray-300 focus:border-indigo-400 focus:ring-indigo-200"
    } outline-none focus:ring-2`;
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Plan Name <span className="text-red-500">*</span>
        </label>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          className={getInputClassName('name')}
        />
        {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={onChange}
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Price (USD) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              $
            </span>
            <input
              name="price"
              value={form.price}
              onChange={onChange}
              className={`w-full rounded-lg border pl-9 pr-4 py-2.5 text-sm ${
                errors.price
                  ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:border-indigo-400 focus:ring-indigo-200"
              } outline-none focus:ring-2`}
            />
          </div>
          {errors.price && <p className="mt-1.5 text-sm text-red-600">{errors.price}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
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
          <label className="mb-1.5 block text-sm font-medium text-gray-700">Billing Type</label>
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
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Credits <span className="text-red-500">*</span>
          </label>
          <input
            name="credits"
            value={form.credits}
            onChange={onChange}
            className={getInputClassName('credits')}
          />
          {errors.credits && <p className="mt-1.5 text-sm text-red-600">{errors.credits}</p>}
        </div>
      </div>

      {/* Features - disabled / read-only in this version */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">Included Features</label>
        <div className="grid grid-cols-1 gap-2.5 opacity-70">
          {ALL_FEATURES.map((feature) => (
            <label key={feature} className="flex items-center gap-2.5">
              <input
                type="checkbox"
                checked={form.features.includes(feature)}
                readOnly
                className="h-4 w-4 rounded border-gray-300 text-indigo-600"
              />
              <span className="text-sm text-gray-700">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-2 opacity-70">
        <label className="flex items-center gap-2.5">
          <input
            type="checkbox"
            name="status"
            checked={form.status}
            readOnly
            className="h-4 w-4 rounded border-gray-300 text-indigo-600"
          />
          <span className="text-sm font-medium text-gray-700">Active / Visible to users</span>
        </label>
      </div>
    </div>
  );
}
