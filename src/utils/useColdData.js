import { useState, useMemo, useCallback } from 'react';
import { COLD_USERS, PRIORITY_COLORS, STATUS_COLORS } from '@/utils/coldDataConstants';

export const useColdData = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Cold Data');
  const [searchTerm, setSearchTerm] = useState('');
  const [userType, setUserType] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showBulkEmail, setShowBulkEmail] = useState(false);
  const [showBulkCall, setShowBulkCall] = useState(false);
  const [showSendEmail, setShowSendEmail] = useState(false);
  const [showCallUser, setShowCallUser] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showInternalNotes, setShowInternalNotes] = useState(false);
  const [showUpdateStatus, setShowUpdateStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const filteredUsers = useMemo(() => {
    return COLD_USERS.filter(user => {
      // Only show Franchise, Recruiter, and Vendor roles
      const allowedRoles = ['Franchise', 'Recruiter', 'Vendor'];
      const matchesRole = allowedRoles.includes(user.role);

      const matchesFilter = selectedFilter === 'All Cold Data' || user.issueType === selectedFilter;
      const matchesSearch = searchTerm === '' ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.issueDescription.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesUserType = userType === '' || user.role.toLowerCase() === userType.toLowerCase();
      const matchesCategory = category === '' || user.category === category;
      const matchesPriority = priority === '' || user.priority === priority;
      const matchesStatus = status === '' || user.status === status;

      return matchesRole && matchesFilter && matchesSearch && matchesUserType && matchesCategory && matchesPriority && matchesStatus;
    });
  }, [selectedFilter, searchTerm, userType, category, priority, status]);

  const handleSelectUser = useCallback((userId) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  }, []);

  const handleViewDetails = useCallback((user) => {
    setCurrentUser(user);
    setShowUserDetails(true);
  }, []);

  const handleSendEmail = useCallback((user) => {
    setCurrentUser(user);
    setShowSendEmail(true);
  }, []);

  const handleCallUser = useCallback((user) => {
    setCurrentUser(user);
    setShowCallUser(true);
  }, []);

  const getPriorityColor = useCallback((priority) => {
    return PRIORITY_COLORS[priority] || 'bg-gray-100 text-gray-800';
  }, []);

  const getStatusColor = useCallback((status) => {
    return STATUS_COLORS[status] || 'bg-gray-100 text-gray-800';
  }, []);

  return {
    // State
    selectedFilter,
    setSelectedFilter,
    searchTerm,
    setSearchTerm,
    userType,
    setUserType,
    category,
    setCategory,
    priority,
    setPriority,
    status,
    setStatus,
    selectedUsers,
    setSelectedUsers,
    showBulkEmail,
    setShowBulkEmail,
    showBulkCall,
    setShowBulkCall,
    showSendEmail,
    setShowSendEmail,
    showCallUser,
    setShowCallUser,
    showUserDetails,
    setShowUserDetails,
    showInternalNotes,
    setShowInternalNotes,
    showUpdateStatus,
    setShowUpdateStatus,
    currentUser,
    setCurrentUser,

    // Computed
    filteredUsers,

    // Methods
    handleSelectUser,
    handleViewDetails,
    handleSendEmail,
    handleCallUser,
    getPriorityColor,
    getStatusColor,

    // Data
    coldUsers: COLD_USERS
  };
};
