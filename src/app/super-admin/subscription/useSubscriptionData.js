import { useState } from 'react';
import { SAMPLE_PLANS, EMPTY_FORM } from './constants';

export const useSubscriptionData = () => {
  const [plans, setPlans] = useState(SAMPLE_PLANS);
  const [form, setForm] = useState(EMPTY_FORM);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterType, setFilterType] = useState("All");

  // Calculate statistics
  const totalPlans = plans.length;
  const activePlans = plans.filter((p) => p.status).length;
  const totalSubscribers = plans.reduce((sum, p) => sum + p.subscribers, 0);

  const mrr = plans.reduce((sum, p) => {
    const monthlyPrice = p.type === "Annual" ? p.price / 12 : p.price;
    return sum + monthlyPrice * p.subscribers;
  }, 0);

  // Filter plans based on search and filters
  const filteredPlans = plans.filter((plan) => {
    const matchesStatus =
      filterStatus === "All" ||
      (filterStatus === "Active" ? plan.status : !plan.status);

    const matchesType = filterType === "All" || plan.type === filterType;

    const matchesSearch = plan.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesStatus && matchesType && matchesSearch;
  });

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Plan name is required";
    if (!form.price || isNaN(form.price) || Number(form.price) <= 0)
      newErrors.price = "Valid price required";
    if (!form.duration || isNaN(form.duration) || Number(form.duration) <= 0)
      newErrors.duration = "Valid duration required";
    if (!form.credits || isNaN(form.credits))
      newErrors.credits = "Credits required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Open add modal
  const openAdd = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setShowAdd(true);
  };

  // Open edit modal
  const openEdit = (plan) => {
    setForm({
      ...plan,
      price: String(plan.price),
      duration: String(plan.duration),
      credits: String(plan.credits),
    });
    setErrors({});
    setShowEdit(true);
  };

  // Save new plan
  const savePlan = () => {
    if (!validateForm()) return;
    setPlans((prev) => [
      ...prev,
      {
        ...form,
        id: Date.now(),
        subscribers: 0,
        price: Number(form.price),
        duration: Number(form.duration),
        credits: Number(form.credits),
      },
    ]);
    setShowAdd(false);
  };

  // Update existing plan
  const updatePlan = () => {
    if (!validateForm()) return;
    setPlans((prev) =>
      prev.map((p) =>
        p.id === form.id
          ? {
              ...form,
              price: Number(form.price),
              duration: Number(form.duration),
              credits: Number(form.credits),
            }
          : p
      )
    );
    setShowEdit(false);
  };

  // Delete plan
  const deletePlan = (id) => {
    if (!window.confirm("Delete this plan?")) return;
    setPlans((prev) => prev.filter((p) => p.id !== id));
  };

  // Close modals
  const closeAdd = () => setShowAdd(false);
  const closeEdit = () => setShowEdit(false);

  // Stats object
  const stats = {
    totalPlans,
    activePlans,
    totalSubscribers,
    mrr: Math.round(mrr)
  };

  return {
    // Data
    plans,
    filteredPlans,
    form,
    errors,
    stats,
    
    // Filters
    searchTerm,
    filterStatus,
    filterType,
    
    // Modal states
    showAdd,
    showEdit,
    
    // Actions
    setSearchTerm,
    setFilterStatus,
    setFilterType,
    handleChange,
    validateForm,
    openAdd,
    openEdit,
    savePlan,
    updatePlan,
    deletePlan,
    closeAdd,
    closeEdit
  };
};
