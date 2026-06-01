import { HiOutlineCheckCircle } from "react-icons/hi";
import { FiAlertTriangle, FiXCircle, FiInfo } from "react-icons/fi";

export const getStatusIcon = (status) => {
  switch (status) {
    case 'success':
      return <HiOutlineCheckCircle className="w-5 h-5 text-green-500" />;
    case 'warning':
      return <FiAlertTriangle className="w-5 h-5 text-orange-500" />;
    case 'error':
      return <FiXCircle className="w-5 h-5 text-red-500" />;
    default:
      return <FiInfo className="w-5 h-5 text-blue-500" />;
  }
};

export const getActionBadgeColor = (action) => {
  const colors = {
    'Login Successful': 'bg-[#F0FDF4] text-[#008236]',
    'Role Modified': 'bg-[#EFF6FF] text-[#1447E6]',
    'Failed Login Attempt': 'bg-[#FFF7ED] text-[#FF6B35]',
    'Vendor Created': 'bg-[#F0FDF4] text-[#008236]',
    'Subscription Updated': 'bg-[#EFF6FF] text-[#1447E6]',
    'Suspicious Activity Detected': 'bg-[#FEF2F2] text-[#C10007]',
    'Prime Admin Created': 'bg-[#F0FDF4] text-[#008236]',
    'System Settings Changed': 'bg-[#EFF6FF] text-[#1447E6]'
  };
  return colors[action] || 'bg-gray-100 text-gray-800';
};

export const getEventTypeColor = (eventType) => {
  const colors = {
    'Success': 'bg-green-100 text-green-800',
    'Info': 'bg-blue-100 text-blue-800',
    'Warning': 'bg-yellow-100 text-yellow-800',
    'Error': 'bg-red-100 text-red-800'
  };
  return colors[eventType] || 'bg-gray-100 text-gray-800';
};
