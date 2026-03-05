import BaseModal from './BaseModal';
import RecruiterForm from './RecruiterForm';

export default function EditRecruiterModal({ 
  isOpen, 
  onClose, 
  form, 
  onChange, 
  onSubmit 
}) {
  if (!isOpen) return null;

  return (
    <BaseModal title="Edit Recruiter" onClose={onClose} wide>
      <RecruiterForm form={form} onChange={onChange} />
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
          Update Recruiter
        </button>
      </div>
    </BaseModal>
  );
}
