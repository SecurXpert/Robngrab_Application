import { FiX } from "react-icons/fi";

export default function BaseModal({ children, onClose, title, wide = false }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-xl p-6 relative ${
        wide ? 'w-full max-w-5xl max-h-[85vh] overflow-y-auto' : 'w-full max-w-lg'
      }`}>
        <button
          className="absolute right-4 top-4 z-10"
          onClick={onClose}
        >
          <FiX />
        </button>
        {title && <h2 className="text-xl font-semibold mb-4 text-gray-700">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
