import { LuX } from "react-icons/lu";

export default function BaseModal({ children, title, wide = false, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-xl p-6 relative ${
        wide ? 'w-full max-w-xl max-h-[85vh] overflow-y-auto' : 'w-full max-w-lg'
      }`}>
        <div className="flex items-center justify-between mb-4">
          {title && <h2 className="text-xl font-semibold text-gray-700">{title}</h2>}
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LuX className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
