import { STATUS_CONFIG } from '@/utils/appliedJobsConstants';

export const getStatusInfo = (status) => {
  return STATUS_CONFIG[status] || STATUS_CONFIG.default || {
    bg: 'bg-[#F3F4F6]',
    text: 'text-[#6B7280]',
    icon: '/Assets/Home/Statustick.svg'
  };
};
