import { FiX } from "react-icons/fi";

export default function BaseModal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <FiX size={22} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(100vh-200px)] no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}
