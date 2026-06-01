import { useState, useMemo, useCallback } from 'react';
import { APPLICATIONS, INITIAL_FILTERS } from '@/utils/appliedJobsConstants';

export const useAppliedJobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [expandedRow, setExpandedRow] = useState(null);
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const filteredApplications = useMemo(() => {
    return APPLICATIONS.filter(app => {
      const matchesStatus = selectedStatus === 'all' || app.status.toLowerCase().includes(selectedStatus.toLowerCase());
      const matchesSearch = searchTerm === '' || 
        app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCompany = filters.companies.length === 0 || filters.companies.includes(app.company);
      const matchesStatusFilter = filters.statuses.length === 0 || filters.statuses.includes(app.status);
      
      let matchesDate = true;
      if (filters.dateRange !== 'all') {
        const appDate = new Date(app.appliedDate);
        const startDate = filters.customStartDate ? new Date(filters.customStartDate) : null;
        const endDate = filters.customEndDate ? new Date(filters.customEndDate) : null;
        if (startDate) startDate.setHours(0, 0, 0, 0);
        if (endDate) endDate.setHours(23, 59, 59, 999);
        matchesDate = (!startDate || appDate >= startDate) && (!endDate || appDate <= endDate);
      }
      
      return matchesStatus && matchesSearch && matchesCompany && matchesStatusFilter && matchesDate;
    }).sort((a, b) => {
      const { sortField, sortOrder } = filters;
      let aValue, bValue;
      
      switch (sortField) {
        case 'Date Applied':
          aValue = new Date(a.appliedDate);
          bValue = new Date(b.appliedDate);
          break;
        case 'Job Title':
          aValue = a.jobTitle;
          bValue = b.jobTitle;
          break;
        case 'Company':
          aValue = a.company;
          bValue = b.company;
          break;
        case 'Status':
          aValue = a.status;
          bValue = b.status;
          break;
        default:
          return 0;
      }
      
      const isDescending = sortOrder === 'Newest First' || sortOrder === 'Z-A' || sortOrder === 'Descending';
      if (isDescending) {
        return aValue < bValue ? 1 : -1;
      } else {
        return aValue > bValue ? 1 : -1;
      }
    });
  }, [searchTerm, selectedStatus, filters]);

  const [showReschedulePopup, setShowReschedulePopup] = useState(false);

  const toggleRow = useCallback((id) => {
    setExpandedRow(prev => prev === id ? null : id);
  }, []);

  const handleFilterReset = useCallback(() => {
    setFilters(INITIAL_FILTERS);
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    selectedStatus,
    setSelectedStatus,
    expandedRow,
    showFilterPopup,
    setShowFilterPopup,
    showReschedulePopup,
    setShowReschedulePopup,
    filters,
    setFilters,
    filteredApplications,
    toggleRow,
    handleFilterReset,
    applications: APPLICATIONS
  };
};
