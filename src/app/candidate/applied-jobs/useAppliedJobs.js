import { useState, useMemo, useCallback } from 'react';
import { APPLICATIONS, INITIAL_FILTERS } from './constants';

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
      
      return matchesStatus && matchesSearch && matchesCompany && matchesStatusFilter;
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
      
      if (sortOrder === 'Ascending') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [searchTerm, selectedStatus, filters]);

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
    filters,
    setFilters,
    filteredApplications,
    toggleRow,
    handleFilterReset,
    applications: APPLICATIONS
  };
};
