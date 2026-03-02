import { FiInfo } from "react-icons/fi";
import BaseModal from './BaseModal';
import RecruiterForm from './RecruiterForm';

export default function AddRecruiterModal({ 
  isOpen, 
  onClose, 
  form, 
  onChange, 
  onSubmit 
}) {
  if (!isOpen) return null;

  return (
    <BaseModal title="Add New Recruiter" onClose={onClose}>
      <RecruiterForm form={form} onChange={onChange} />
      <div className="bg-blue-50 border border-gray-200 rounded-lg p-3 mb-4 flex items-start gap-2">
        <FiInfo className="text-blue-600 mt-0.5" />
        <p className="text-sm text-blue-800">
          An invitation email will be sent to recruiter&apos;s email address with login credentials.
        </p>
      </div>
      <div className="flex gap-3 mt-6">
        <button
          onClick={onClose}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={onSubmit}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Recruiter
        </button>
      </div>
    </BaseModal>
  );
}
