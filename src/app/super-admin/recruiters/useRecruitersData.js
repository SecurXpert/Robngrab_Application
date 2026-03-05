import { useState } from 'react';
import { SAMPLE_RECRUITERS, EMPTY_FORM, STATUS_COLORS } from './constants';

export const useRecruitersData = () => {
  const [recruiters, setRecruiters] = useState(SAMPLE_RECRUITERS);
  const [form, setForm] = useState(EMPTY_FORM);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [viewUser, setViewUser] = useState(null);

  // Filter recruiters based on search and status
  const filteredRecruiters = recruiters.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All Status" || r.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Get status color
  const getStatusColor = (status) => {
    return STATUS_COLORS[status] || STATUS_COLORS.default;
  };

  // Handle form changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add new recruiter
  const addRecruiter = () => {
    setRecruiters([
      ...recruiters,
      { ...form, id: Date.now(), jobs: Number(form.jobs || 0) },
    ]);
    setShowAdd(false);
    setForm(EMPTY_FORM);
  };

  // Open edit modal
  const openEdit = (recruiter) => {
    setForm(recruiter);
    setShowEdit(true);
  };

  // Update recruiter
  const updateRecruiter = () => {
    setRecruiters(
      recruiters.map((r) => (r.id === form.id ? form : r))
    );
    setShowEdit(false);
    setForm(EMPTY_FORM);
  };

  // Delete recruiter
  const deleteRecruiter = (id) => {
    setRecruiters(recruiters.filter((r) => r.id !== id));
  };

  // Open add modal
  const openAdd = () => {
    setForm(EMPTY_FORM);
    setShowAdd(true);
  };

  // Close add modal
  const closeAdd = () => {
    setShowAdd(false);
    setForm(EMPTY_FORM);
  };

  // Close edit modal
  const closeEdit = () => {
    setShowEdit(false);
    setForm(EMPTY_FORM);
  };

  // Open view modal
  const openView = (recruiter) => {
    setViewUser(recruiter);
  };

  // Close view modal
  const closeView = () => {
    setViewUser(null);
  };

  // Handle suspend recruiter
  const suspendRecruiter = (id) => {
    setRecruiters(recruiters.map(r =>
      r.id === id ? { ...r, status: 'Suspended' } : r
    ));
    setViewUser(null);
  };

  // Calculate stats
  const stats = {
    total: recruiters.length,
    active: recruiters.filter((r) => r.status === "Active").length,
    pending: recruiters.filter((r) => r.status === "Pending").length,
    totalActiveJobs: recruiters.reduce((a, b) => a + Number(b.jobs), 0)
  };

  return {
    // Data
    recruiters,
    filteredRecruiters,
    form,
    viewUser,
    stats,
    
    // Filters
    searchTerm,
    statusFilter,
    
    // Modal states
    showAdd,
    showEdit,
    
    // Actions
    setSearchTerm,
    setStatusFilter,
    handleChange,
    getStatusColor,
    addRecruiter,
    openEdit,
    updateRecruiter,
    deleteRecruiter,
    openAdd,
    closeAdd,
    closeEdit,
    openView,
    closeView,
    suspendRecruiter
  };
};
