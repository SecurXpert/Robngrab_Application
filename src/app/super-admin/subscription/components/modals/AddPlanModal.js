import BaseModal from './BaseModal';
import PlanForm from './PlanForm';

export default function AddPlanModal({ 
  isOpen, 
  onClose, 
  form, 
  errors, 
  onChange, 
  onSubmit 
}) {
  if (!isOpen) return null;

  return (
    <BaseModal title="Create New Plan" onClose={onClose}>
      <PlanForm
        form={form}
        errors={errors}
        onChange={onChange}
      />
      <div className="mt-8 flex gap-3 border-t pt-5">
        <button
          onClick={onClose}
          className="flex-1 rounded-lg border border-gray-300 py-2.5 font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={onSubmit}
          className="flex-1 rounded-lg bg-indigo-600 py-2.5 font-medium text-white hover:bg-indigo-700"
        >
          Save Plan
        </button>
      </div>
    </BaseModal>
  );
}
