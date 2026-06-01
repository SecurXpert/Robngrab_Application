import { FiInfo } from "react-icons/fi";
import BaseModal from '@/app/super-admin/recruiters/Model/BaseModal';
import AddRecruiterForm from '@/app/super-admin/recruiters/Model/AddRecruiterForm';

export default function AddRecruiterModal({ 
  isOpen, 
  onClose, 
  form, 
  onChange, 
  onSubmit 
}) {
  if (!isOpen) return null;

  return (
    <BaseModal title="Add New Recruiter" onClose={onClose} wide={true}>
      <div className="space-y-3">
        <AddRecruiterForm form={form} onChange={onChange} />
        
        <div className="mt-3 bg-[#EFF6FF] text-[#1C398E] border border-[#BEDBFF] rounded-xl p-4 text-xs">
          📧 An invitation email will be sent to the recruiter's email address
          with login credentials.
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full px-6 py-2.5 text-[#0A0A0A] bg-white border border-gray-300 rounded-[14px] hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="w-full px-6 py-2.5 bg-[#2563EB] text-[#FFFFFF]  rounded-[14px] hover:bg-[#1d4ed8] transition-colors font-medium shadow-sm"
          > 
            Add Recruiter
          </button>
        </div>
      </div>
    </BaseModal>
  );
}
