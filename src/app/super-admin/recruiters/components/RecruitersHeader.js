import { FiPlus } from "react-icons/fi";

export default function RecruitersHeader({ onAddRecruiter }) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Recruiters</h1>
        <p className="mt-1 text-sm text-gray-600">
          Manage recruiter profiles and activity
        </p>
      </div>
      <button
        onClick={onAddRecruiter}
        className="flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 font-medium text-white shadow-sm hover:bg-indigo-700 active:bg-[#2563EB]"
      >
        <FiPlus size={18} /> Add Recruiter
      </button>
    </div>
  );
}
