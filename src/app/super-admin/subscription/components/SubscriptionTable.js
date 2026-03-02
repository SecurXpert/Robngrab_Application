import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function SubscriptionTable({ 
  filteredPlans, 
  onEditPlan, 
  onDeletePlan 
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Plan
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Type
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Price
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Duration
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Credits
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Features
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Subs
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Status
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredPlans.map((plan) => (
              <tr key={plan.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-gray-900">
                  {plan.name}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                  {plan.type}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-gray-900">
                  ${plan.price}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                  {plan.duration} days
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                  {plan.credits.toLocaleString()}
                </td>
                <td className="px-5 py-4 text-sm text-gray-600">
                  <div className="flex flex-wrap gap-1.5">
                    {plan.features.slice(0, 2).map((f, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-gray-700"
                      >
                        {f}
                      </span>
                    ))}
                    {plan.features.length > 2 && (
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                        +{plan.features.length - 2}
                      </span>
                    )}
                  </div>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-700">
                  {plan.subscribers.toLocaleString()}
                </td>
                <td className="whitespace-nowrap px-5 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      plan.status
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {plan.status ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onEditPlan(plan)}
                      className="text-indigo-600 hover:text-indigo-800"
                      title="Edit"
                    >
                      <FiEdit2 size={18} />
                    </button>
                    <button
                      onClick={() => onDeletePlan(plan.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <FiTrash2 size={18} />
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
