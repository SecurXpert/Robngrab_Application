import { FiPlus } from "react-icons/fi";

export default function SubscriptionHeader({ onAddPlan }) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-family-inter font-weight-500 text-[#0A0A0A] mb-1">
          Subscription Plans
        </h1>
        <p className="mt-1 text-sm text-[#4A5565]">
          Manage subscription tiers and pricing
        </p>
      </div>
      <button
        onClick={onAddPlan}
        className="flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 font-medium text-white shadow-sm hover:bg-indigo-700 active:bg-[#2563EB]"
      >
        <FiPlus size={18} /> Add Plan
      </button>
    </div>
  );
}
