"use client";

import { useState, useEffect, useCallback } from "react";

export function useFranchiseManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    status: "",
    subscriptionPlan: "",
    country: "",
    stateRegion: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    franchiseName: "",
    regionState: "",
    ownerName: "",
    ownerEmail: "",
    phoneNumber: "",
    city: "",
    completeAddress: "",
    initialStatus: "Pending Approval",
    expectedLaunchDate: "",
    businessPlanNotes: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [realTimeErrors, setRealTimeErrors] = useState({});
  const [franchises, setFranchises] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedMetricsModal, setSelectedMetricsModal] = useState(null);

  const openMetricsModal = (modalType) => {
    setSelectedMetricsModal(modalType);
  };

  const enrichFranchise = useCallback((f) => ({
    ...f,
    location: f.location || (f.city && f.state ? `${f.city}, ${f.state}` : "Not available"),
    subscription: f.subscription || (f.plan ? (f.plan.toLowerCase().includes("plan") ? f.plan : `${f.plan} Plan`) : "Not available"),
    plan:
      f.plan === "Premium"
        ? "Enterprise"
        : f.plan === "Standard"
          ? "Professional"
          : f.plan === "Basic"
            ? "Basic"
            : f.plan,
  }), []);

  const loadInitial = useCallback(() => {
    const initialFranchises = [
      {
        id: 1,
        logo: "T",
        name: "Tech Solutions Inc.",
        joined: "Joined Jan 15, 2025",
        category: "IT",
        city: "Silicon Valley",
        state: "California, USA",
        location: "Silicon Valley, California, USA",
        email: "contact@techsolutionsinc.com",
        phone: "+1 800 555 1234",
        recruiters: "48",
        active: "42 active",
        candidates: "1,847",
        revenue: "$128K",
        balance: "$45K bal.",
        plan: "Enterprise",
        status: "Active",
        subscription: "Enterprise Plan",
      },
      {
        id: 2,
        logo: "G",
        name: "Global Staffing Ltd.",
        joined: "Joined Dec 10, 2024",
        category: "Non-IT",
        city: "New York",
        state: "New York, USA",
        location: "New York, New York, USA",
        email: "info@globalstaffing.com",
        phone: "+1 800 555 2345",
        recruiters: "62",
        active: "58 active",
        candidates: "2,134",
        revenue: "$185K",
        balance: "$62K bal.",
        plan: "Enterprise",
        status: "Active",
        subscription: "Enterprise Plan",
      },
      {
        id: 3,
        logo: "E",
        name: "Elite Recruiters Co.",
        joined: "Joined Feb 01, 2025",
        category: "IT",
        city: "Austin",
        state: "Texas, USA",
        location: "Austin, Texas, USA",
        email: "hello@eliterecruiter.com",
        phone: "+1 800 555 3456",
        recruiters: "35",
        active: "32 active",
        candidates: "1,523",
        revenue: "$95K",
        balance: "$38K bal.",
        plan: "Professional",
        status: "Active",
        subscription: "Professional Plan",
      },
      {
        id: 4,
        logo: "T",
        name: "Talent Bridge Agency",
        joined: "Joined Jan 20, 2025",
        category: "Non-IT",
        city: "London",
        state: "England, UK",
        location: "London, England, UK",
        email: "contact@talentbridge.com",
        phone: "+44 20 7946 0958",
        recruiters: "28",
        active: "25 active",
        candidates: "1,098",
        revenue: "$72K",
        balance: "$28K bal.",
        plan: "Professional",
        status: "Active",
        subscription: "Professional Plan",
      },
      {
        id: 5,
        logo: "P",
        name: "ProStaff International",
        joined: "Joined Nov 25, 2024",
        category: "IT",
        city: "Toronto",
        state: "Ontario, Canada",
        location: "Toronto, Ontario, Canada",
        email: "info@prostaff.com",
        phone: "+1 416 555 5678",
        recruiters: "41",
        active: "38 active",
        candidates: "1,672",
        revenue: "$112K",
        balance: "$41K bal.",
        plan: "Enterprise",
        status: "Active",
        subscription: "Enterprise Plan",
      },
      {
        id: 6,
        logo: "C",
        name: "Career Connect Solutions",
        joined: "Joined Dec 05, 2024",
        category: "Non-IT",
        city: "Mumbai",
        state: "Maharashtra, India",
        location: "Mumbai, Maharashtra, India",
        email: "support@careerconnect.com",
        phone: "+91 22 6789 1234",
        recruiters: "19",
        active: "15 active",
        candidates: "734",
        revenue: "$48K",
        balance: "$18K bal.",
        plan: "Basic",
        status: "Inactive",
        subscription: "Basic Plan",
      },
      {
        id: 7,
        logo: "S",
        name: "Staffing Solutions Pro",
        joined: "Joined Mar 10, 2025",
        category: "IT",
        city: "Chicago",
        state: "Illinois, USA",
        location: "Chicago, Illinois, USA",
        email: "info@staffingsolutions.com",
        phone: "+1 800 555 6789",
        recruiters: "53",
        active: "48 active",
        candidates: "2,341",
        revenue: "$156K",
        balance: "$67K bal.",
        plan: "Enterprise",
        status: "Active",
        subscription: "Enterprise Plan",
      },
      {
        id: 8,
        logo: "H",
        name: "HireRight Partners",
        joined: "Joined Feb 28, 2025",
        category: "Non-IT",
        city: "Boston",
        state: "Massachusetts, USA",
        location: "Boston, Massachusetts, USA",
        email: "contact@hireright.com",
        phone: "+1 800 555 7890",
        recruiters: "37",
        active: "33 active",
        candidates: "1,445",
        revenue: "$87K",
        balance: "$35K bal.",
        plan: "Professional",
        status: "Active",
        subscription: "Professional Plan",
      },
    ];
    setFranchises(initialFranchises);
    localStorage.setItem("franchises", JSON.stringify(initialFranchises));
  }, []);

  // Initial Load from LocalStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFranchises = localStorage.getItem("franchises");
      if (savedFranchises) {
        let parsed = JSON.parse(savedFranchises);
        if (parsed.length > 0 && parsed[0].logo) {
          setFranchises(parsed.map(enrichFranchise));
        } else {
          localStorage.removeItem("franchises");
          loadInitial();
        }
      } else {
        loadInitial();
      }
    }
  }, [enrichFranchise, loadInitial]);


  const uniqueCategories = [...new Set(franchises.map((f) => f.category))];
  const uniqueStatuses = [...new Set(franchises.map((f) => f.status))];
  const uniquePlans = [...new Set(franchises.map((f) => f.plan))];
  const uniqueCountries = [
    ...new Set(franchises.map((f) => f.state?.split(", ").pop()).filter(Boolean)),
  ];
  const uniqueStates = [
    ...new Set(franchises.map((f) => f.state?.split(", ")[0]).filter(Boolean)),
  ];

  const filteredFranchises = franchises.filter((franchise) => {
    const matchesSearch =
      franchise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      franchise.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      franchise.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      franchise.state.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = !filters.category || franchise.category === filters.category;
    const matchesStatus = !filters.status || franchise.status === filters.status;
    const matchesPlan = !filters.subscriptionPlan || franchise.plan === filters.subscriptionPlan;

    return matchesSearch && matchesCategory && matchesStatus && matchesPlan;
  });

  const handleRealTimeValidation = (fieldName, value) => {
    const errors = { ...realTimeErrors };
    delete errors[fieldName];

    if (
      fieldName.includes("name") ||
      fieldName === "franchiseName" ||
      fieldName === "ownerName" ||
      fieldName === "regionState" ||
      fieldName === "city"
    ) {
      if (value && !/^[a-zA-Z\s\-\.'']*$/.test(value)) {
        errors[fieldName] = "Only letters, spaces, hyphens, and apostrophes allowed";
      }
    }

    if (fieldName.includes("phone") || fieldName === "phoneNumber") {
      if (value && !/^[\d]*$/.test(value)) {
        errors[fieldName] = "Only numbers allowed";
      }
    }

    if (fieldName.includes("email") || fieldName === "ownerEmail") {
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors[fieldName] = "Please enter a valid email address";
      }
    }

    setRealTimeErrors(errors);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "expectedLaunchDate" && value) {
      const year = value.split("-")[0];
      if (year.length > 4) return;
    }
    handleRealTimeValidation(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (Object.keys(realTimeErrors).length > 0) return;

    const requiredFields = {
      franchiseName: "Franchise Name",
      regionState: "Region/State",
      ownerName: "Owner Name",
      ownerEmail: "Owner Email",
      phoneNumber: "Phone Number",
      city: "City",
      completeAddress: "Complete Address",
    };

    const newErrors = {};
    Object.entries(requiredFields).forEach(([field, label]) => {
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = `${label} is required`;
      }
    });

    if (formData.ownerEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.ownerEmail)) {
      newErrors.ownerEmail = "Please enter a valid email address";
    }

    if (formData.phoneNumber && formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      return;
    }

    setFormErrors({});
    setRealTimeErrors({});

    const newFranchise = {
      id: franchises.length > 0 ? Math.max(...franchises.map((f) => f.id)) + 1 : 1,
      logo: formData.franchiseName?.charAt(0).toUpperCase() || "F",
      name: formData.franchiseName,
      joined: `Joined ${new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })}`,
      category: formData.regionState || "General",
      city: formData.city,
      state: `${formData.regionState}`,
      location: `${formData.city}, ${formData.completeAddress}`,
      contact: `${formData.ownerName} - ${formData.ownerEmail}`,
      email: formData.ownerEmail,
      phone: formData.phoneNumber,
      recruiters: "0",
      active: "0 active",
      candidates: "0",
      revenue: "$0K",
      balance: "$0K bal.",
      plan:
        formData.initialStatus === "Active"
          ? "Enterprise"
          : formData.initialStatus === "Pending Approval"
            ? "Professional"
            : "Basic",
      status: formData.initialStatus,
      subscription:
        formData.initialStatus === "Active"
          ? "Enterprise Plan"
          : formData.initialStatus === "Pending Approval"
            ? "Professional Plan"
            : "Basic Plan",
    };

    setFranchises((prev) => [...prev, newFranchise]);

    setFormData({
      franchiseName: "",
      regionState: "",
      ownerName: "",
      ownerEmail: "",
      phoneNumber: "",
      city: "",
      completeAddress: "",
      initialStatus: "Pending Approval",
      expectedLaunchDate: "",
      businessPlanNotes: "",
    });

    setIsModalOpen(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return {
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    isModalOpen,
    setIsModalOpen,
    formData,
    setFormData,
    formErrors,
    realTimeErrors,
    franchises,
    uniqueCategories,
    uniqueStatuses,
    uniquePlans,
    uniqueCountries,
    uniqueStates,
    filteredFranchises,
    handleInputChange,
    handleSave,
    showSuccess,
    setShowSuccess,
    selectedMetricsModal,
    openMetricsModal,
  };
}
