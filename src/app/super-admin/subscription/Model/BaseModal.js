import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { X } from 'lucide-react';

export default function BaseModal({ title, children, onClose }) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.classList.add('modal-open');
    // Add inline styles as backup
    document.body.style.setProperty('overflow', 'hidden', 'important');
    document.body.style.setProperty('position', 'fixed', 'important');
    document.body.style.setProperty('top', '0', 'important');
    document.body.style.setProperty('left', '0', 'important');
    document.body.style.setProperty('width', '100%', 'important');
    
    return () => {
      // Restore body scroll when modal is closed
      document.body.classList.remove('modal-open');
      // Remove inline styles
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('position');
      document.body.style.removeProperty('top');
      document.body.style.removeProperty('left');
      document.body.style.removeProperty('width');
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-xs p-4 overflow-hidden">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-6">
          <h2 className="text-xl font-medium text-[#0A0A0A]">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={25} />
          </button>
        </div>
        <div className="px-6 pb-1 pt-1 overflow-y-auto max-h-[calc(100vh-200px)] no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}
