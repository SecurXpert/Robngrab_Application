import { STATUS_CONFIG } from './constants';

export const getStatusInfo = (status) => {
  return STATUS_CONFIG[status] || STATUS_CONFIG.default || {
    bg: 'bg-[#F3F4F6]',
    text: 'text-[#6B7280]',
    icon: '/assets/home/statustick.svg'
  };
};
