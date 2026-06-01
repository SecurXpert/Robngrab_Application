import { useState, useEffect } from 'react';
import { MOCK_ADMIN_DATA } from '@/utils/primeAdminsConstants';

export function useAdminData(adminSlug) {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    roleType: 'Prime Creator',
    permissions: {
      createVendors: false,
      editVendors: false,
      deleteVendors: false,
      manageSubscriptions: false,
      accessBilling: false,
      viewAuditLogs: false,
      manageFranchises: false,
      systemConfiguration: false
    },
    requireApproval: false
  });

  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching admin data
  useEffect(() => {
    // In a real app, you would fetch data based on adminId
    setTimeout(() => {
      setFormData(MOCK_ADMIN_DATA);
      setIsLoading(false);
    }, 500);
  }, [adminSlug]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (name.startsWith('permission_')) {
        const permissionName = name.replace('permission_', '');
        setFormData(prev => ({
          ...prev,
          permissions: {
            ...prev.permissions,
            [permissionName]: checked
          }
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updating admin:', { adminSlug, ...formData });
    // Handle admin update logic here
  };

  return {
    formData,
    isLoading,
    handleChange,
    handleSubmit
  };
}
