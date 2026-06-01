import { FiEdit2 } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

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
              <th className="px-5 py-4 text-left text-sm font-medium tracking-wider text-[#4A5565]">
                Plan Name
              </th>
              <th className="px-5 py-4 text-left text-sm font-medium tracking-wider text-[#4A5565]">
                Type
              </th>
              <th className="px-5 py-4 text-left text-sm font-medium tracking-wider text-[#4A5565]">
                Price
              </th>
              <th className="px-5 py-4 text-left text-sm font-medium tracking-wider text-[#4A5565]">
                Duration
              </th>
              <th className="px-3 py-3 text-left text-sm font-medium tracking-wider text-[#4A5565] whitespace-nowrap">
                Credits Offered
              </th>
              <th className="px-5 py-4 text-left text-sm font-medium tracking-wider text-[#4A5565]">
                Features
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium tracking-wider text-[#4A5565]">
                Subscribers
              </th>
              <th className="px-5 py-4 text-left text-sm font-medium tracking-wider text-[#4A5565]">
                Status
              </th>
              <th className="px-5 py-4 text-left text-sm font-medium tracking-wider text-[#4A5565]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredPlans.map((plan) => (
              <tr key={plan.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-[#0A0A0A]">
                  {plan.name}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-[#4A5565]">
                  {plan.type}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-[#0A0A0A]">
                  ${plan.price}
                </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-[#4A5565]">
                  {plan.duration} days
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-[#364153]">
                  {plan.credits.toLocaleString()} credits
                </td>
                  <td className="px-5 py-4 text-sm text-[#364153">
                  <div className="flex flex-nowrap gap-1 overflow-x-auto">
                    {plan.features.slice(0, 2).map((f, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full px-2 py-1 text-md font-medium text-[#4A5565] whitespace-nowrap"
                      >
                        {f}
                      </span>
                    ))}
                    {plan.features.length > 2 && (
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-md font-medium text-[#4A5565]">
                        +{plan.features.length - 2}
                      </span>
                    )}
                  </div>
                </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-[#4A5565]">
                  {plan.subscribers.toLocaleString()}
                </td>
                <td className="whitespace-nowrap px-5 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                      plan.status
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {plan.status ? "Active" : "Disabled"}
                  </span>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onEditPlan(plan)}
                      className="text-[#4A5565] hover:text-[#4A5565]"
                      title="Edit"
                    >
                      <FiEdit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDeletePlan(plan.id)}
                      className="text-[#4A5565] hover:text-[#4A5565]"
                      title="Delete"
                    >
                      <FontAwesomeIcon icon={faPowerOff} />
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
