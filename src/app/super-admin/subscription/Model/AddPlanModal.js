import BaseModal from '@/app/super-admin/subscription/Model/BaseModal';
import PlanForm from '@/app/super-admin/subscription/Model/PlanForm';

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
    <BaseModal title="Add Subscription Plan" onClose={onClose}>
      <PlanForm
        form={form}
        errors={errors}
        onChange={onChange}
      />
      <div className="mt-4 flex gap-2 pt-5 pb-4">
        <button
          onClick={onClose}
          className="flex-1 rounded-lg border border-gray-300 py-2 font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={onSubmit}
          className="flex-1 rounded-lg py-3 font-medium text-white hover:bg-blue-700"
          style={{ backgroundColor: '#2563EB' }}
        >
          Save Plan
        </button>
      </div>
    </BaseModal>
  );
}
