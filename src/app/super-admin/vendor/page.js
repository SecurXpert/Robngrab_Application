"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { validateForm, vendorValidationSchema, displayFieldError, getFieldClassName } from '../../../utils/validation';


export default function VendorPage() {
  const [vendors, setVendors] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [editFormErrors, setEditFormErrors] = useState({});
  const [realTimeErrors, setRealTimeErrors] = useState({});
  const [realTimeEditErrors, setRealTimeEditErrors] = useState({});
  const editFormRef = useRef(null);
  const addFormRef = useRef(null);

  // Load vendors from localStorage only on client side
  useEffect(() => {
    setIsClient(true);
    const savedVendors = localStorage.getItem('vendors');
    if (savedVendors) {
      let vendors = JSON.parse(savedVendors);
      
      // Fix existing vendors with missing data
      vendors = vendors.map(vendor => ({
        ...vendor,
        location: vendor.location || 'Not specified',
        phone: vendor.phone || 'Not specified', 
        subscription: vendor.subscription || 'Standard Plan'
      }));
      
      // Save the fixed vendors back to localStorage
      localStorage.setItem('vendors', JSON.stringify(vendors));
      setVendors(vendors);
    } else {
      // Fallback to initial data if no saved data
      setVendors([
        { 
          id: 1, 
          name: 'TechCorp Solutions', 
          email: 'admin@techcorp.com', 
          category: 'IT',
          recruiters: 12,
          status: 'Active', 
          balance: '$24,500',
          location: 'San Francisco, CA',
          phone: '+1 (555) 123-4567',
          subscription: 'Premium Plan'
        },
        { 
          id: 2, 
          name: 'Global Logistics', 
          email: 'info@globallogistics.com', 
          category: 'Non - IT',
          recruiters: 8,
          status: 'Active', 
          balance: '$18,200',
          location: 'New York, NY',
          phone: '+1 (555) 987-6543',
          subscription: 'Standard Plan'
        }
      ]);
    }
  }, []);

  // Save vendors to localStorage whenever they change
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('vendors', JSON.stringify(vendors));
    }
  }, [vendors, isClient]);

  const handleRealTimeValidation = (fieldName, value, isEdit = false) => {
    const errors = isEdit ? { ...realTimeEditErrors } : { ...realTimeErrors };
    const setErrors = isEdit ? setRealTimeEditErrors : setRealTimeErrors;
    
    // Clear previous error for this field
    delete errors[fieldName];
    
    // Validate name fields in real-time
    if (fieldName.includes('name') || fieldName === 'franchiseName' || fieldName === 'ownerName' || fieldName === 'regionState' || fieldName === 'city') {
      if (value && !/^[a-zA-Z\s\-\.'']*$/.test(value)) {
        errors[fieldName] = 'Only letters, spaces, hyphens, and apostrophes allowed';
      }
    }
    
    // Validate phone fields in real-time
    if (fieldName.includes('phone') || fieldName === 'phoneNumber') {
      if (value && !/^[\d]*$/.test(value)) {
        errors[fieldName] = 'Only numbers allowed';
      }
    }
    
    // Validate email fields in real-time
    if (fieldName.includes('email') || fieldName === 'ownerEmail') {
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors[fieldName] = 'Please enter a valid email address';
      }
    }
    
    setErrors(errors);
  };

  const handleAddVendor = (newVendorData) => {
    // Check for real-time errors first
    if (Object.keys(realTimeErrors).length > 0) {
      return; // Don't submit if there are real-time errors
    }
    
    // Validate form data
    const { errors, isValid } = validateForm(newVendorData, vendorValidationSchema);
    
    if (!isValid) {
      setFormErrors(errors);
      return;
    }
    
    // Clear errors if valid
    setFormErrors({});
    setRealTimeErrors({});
    
    const newVendor = {
      id: vendors.length + 1,
      name: newVendorData.name,
      email: newVendorData.email,
      category: newVendorData.category,
      recruiters: Math.floor(Math.random() * 20) + 5,
      status: newVendorData.status || 'Active',
      balance: '$' + (Math.floor(Math.random() * 50) + 10) + ',500',
      location: newVendorData.location || 'Not specified',
      phone: newVendorData.phone || 'Not specified',
      subscription: newVendorData.subscription || 'Standard Plan'
    };
    setVendors([...vendors, newVendor]);
    setIsAddModalOpen(false);
  };

  const handleUpdateVendor = (updatedVendorData) => {
    // Check for real-time errors first
    if (Object.keys(realTimeEditErrors).length > 0) {
      return; // Don't submit if there are real-time errors
    }
    
    // Validate form data
    const { errors, isValid } = validateForm(updatedVendorData, vendorValidationSchema);
    
    if (!isValid) {
      setEditFormErrors(errors);
      return;
    }
    
    // Clear errors if valid
    setEditFormErrors({});
    setRealTimeEditErrors({});
    
    setVendors(vendors.map(vendor => 
      vendor.id === selectedVendor.id 
        ? { 
            ...vendor, 
            ...updatedVendorData,
            // Ensure required fields are preserved
            location: updatedVendorData.location || vendor.location || 'Not specified',
            phone: updatedVendorData.phone || vendor.phone || 'Not specified',
            subscription: updatedVendorData.subscription || vendor.subscription || 'Standard Plan'
          }
        : vendor
    ));
    setIsEditModalOpen(false);
  };

  const handleDeleteVendor = (vendorId) => {
    if (window.confirm('Are you sure you want to delete this vendor? This action cannot be undone.')) {
      setVendors(vendors.filter(vendor => vendor.id !== vendorId));
    }
  };

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || vendor.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Vendors / Tenants Management</h1>
            <p className="text-gray-600">Complete operational, hiring, and activity visibility for all vendors</p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#2563EB] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              className="-ml-1 mr-3 h-5 w-5" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add Vendor
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Vendors Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Vendors</p>
                <p className="text-2xl font-bold text-gray-900">6</p>
              </div>
            </div>
          </div>

          {/* Active Vendors Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Vendors</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
            </div>
          </div>

          {/* Inactive Vendors Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Inactive Vendors</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
            </div>
          </div>

          {/* Total Balance Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Balance</p>
                <p className="text-2xl font-bold text-gray-900">$104.4k</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          {/* Filters Header */}
          <div className="flex items-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
            </svg>
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          </div>

          {/* Filter Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Vendor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search Vendor</label>
              <input
                type="text"
                placeholder="Search vendors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={statusFilter === 'all' ? '' : statusFilter}
                onChange={(e) => setStatusFilter(e.target.value || 'all')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              >
                <option value="">All Categories</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Vendor Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Job Professions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Professions</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              >
                <option value="">All Professions</option>
                <option value="construction">Construction</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
              </select>
            </div>
          </div>
        </div>

        {/* Vendors Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recruiters</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {isClient && filteredVendors.map((vendor) => (
                  <tr key={vendor.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{vendor.name}</div>
                      <div className="text-xs text-gray-500">ID: V00{vendor.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vendor.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                        vendor.category === 'IT' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {vendor.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vendor.recruiters}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                        vendor.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {vendor.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vendor.balance || '$' + (Math.floor(Math.random() * 50) + 10) + ',500'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-3">
                        <Link href={`/super-admin/vendor/${vendor.id}`} className="text-blue-600 hover:text-blue-900 p-1 hover:bg-blue-50 rounded" title="View">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </Link>
                        <button 
                          onClick={() => {
                            setSelectedVendor(vendor);
                            setIsEditModalOpen(true);
                          }}
                          className="text-green-600 hover:text-green-900 p-1 hover:bg-green-50 rounded" title="Edit"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button 
                            onClick={() => handleDeleteVendor(vendor.id)}
                            className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded" title="Delete"
                          >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!isClient && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-500">Loading vendor data...</p>
            </div>
          )}

          {isClient && filteredVendors.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No vendors found</p>
            </div>
          )}
        </div>

        {/* Edit Vendor Modal */}
        {isEditModalOpen && selectedVendor && (
          <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-4 mx-4">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Edit Vendor</h3>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form ref={editFormRef} onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(editFormRef.current);
                handleUpdateVendor({
                  name: formData.get('name'),
                  email: formData.get('email'),
                  category: formData.get('category'),
                  status: formData.get('status'),
                  phone: formData.get('phone'),
                  location: formData.get('address')
                });
              }}>
                {/* First Row: Vendor Name and Business Email */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Name</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={selectedVendor.name}
                      maxLength="50"
                      pattern="[a-zA-Z\s\-\.']*"
                      title="Only letters, spaces, hyphens, and apostrophes allowed"
                      onChange={(e) => handleRealTimeValidation('name', e.target.value, true)}
                      className={getFieldClassName('name', {...editFormErrors, ...realTimeEditErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                    />
                    {displayFieldError('name', editFormErrors) || displayFieldError('name', realTimeEditErrors)}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={selectedVendor.email}
                      onChange={(e) => handleRealTimeValidation('email', e.target.value, true)}
                      className={getFieldClassName('email', {...editFormErrors, ...realTimeEditErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                    />
                    {displayFieldError('email', editFormErrors) || displayFieldError('email', realTimeEditErrors)}
                  </div>
                </div>

                {/* Second Row: Phone and Category */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      defaultValue={selectedVendor.phone}
                      maxLength="10"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      title="Only numbers allowed"
                      onChange={(e) => handleRealTimeValidation('phone', e.target.value, true)}
                      className={getFieldClassName('phone', {...editFormErrors, ...realTimeEditErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                    />
                    {displayFieldError('phone', editFormErrors) || displayFieldError('phone', realTimeEditErrors)}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select 
                      name="category" 
                      defaultValue={selectedVendor.category}
                      className={getFieldClassName('category', editFormErrors, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                    >
                      <option value="IT">IT</option>
                      <option value="Non-IT">Non-IT</option>
                      <option value="Logistics">Logistics</option>
                    </select>
                    {displayFieldError('category', editFormErrors)}
                  </div>
                </div>

                {/* Third Row: Address (Full Width) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    defaultValue={selectedVendor.location}
                    maxLength="50"
                    pattern="[a-zA-Z0-9\s\-\.\,\#\/]*"
                    title="Letters, numbers, spaces, and basic punctuation allowed"
                    onChange={(e) => handleRealTimeValidation('location', e.target.value, true)}
                    className={getFieldClassName('location', {...editFormErrors, ...realTimeEditErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                  />
                  {displayFieldError('location', editFormErrors) || displayFieldError('location', realTimeEditErrors)}
                </div>

                {/* Fourth Row: Status (Full Width) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select 
                    name="status" 
                    defaultValue={selectedVendor.status}
                    className={getFieldClassName('status', editFormErrors, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                  </select>
                  {displayFieldError('status', editFormErrors)}
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-end p-6 border-t border-gray-200 space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    disabled={Object.keys(realTimeEditErrors).length > 0}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      Object.keys(realTimeEditErrors).length > 0 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {Object.keys(realTimeEditErrors).length > 0 ? 'Fix Errors to Update' : 'Update Vendor'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Add Vendor Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Add Vendor</h3>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body - Form */}
              <form ref={addFormRef} onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                handleAddVendor({
                  name: formData.get('name'),
                  email: formData.get('email'),
                  category: formData.get('category'),
                  status: formData.get('status'),
                  phone: formData.get('phone'),
                  location: formData.get('location'),
                  subscription: formData.get('subscription') || 'Standard Plan'
                });
              }}>
                <div className="p-6 space-y-4">
                  {/* First Row: Vendor Name and Business Email */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        maxLength="50"
                        pattern="[a-zA-Z\s\-\.']*"
                        title="Only letters, spaces, hyphens, and apostrophes allowed"
                        onChange={(e) => handleRealTimeValidation('name', e.target.value, false)}
                        className={getFieldClassName('name', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                      />
                      {displayFieldError('name', formErrors) || displayFieldError('name', realTimeErrors)}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        onChange={(e) => handleRealTimeValidation('email', e.target.value, false)}
                        className={getFieldClassName('email', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                      />
                      {displayFieldError('email', formErrors) || displayFieldError('email', realTimeErrors)}
                    </div>
                  </div>

                  {/* Second Row: Phone and Category */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        maxLength="10"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        title="Only numbers allowed"
                        onChange={(e) => handleRealTimeValidation('phone', e.target.value, false)}
                        className={getFieldClassName('phone', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                      />
                      {displayFieldError('phone', formErrors) || displayFieldError('phone', realTimeErrors)}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <select name="category" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900">
                        <option value="">Select Category</option>
                        <option value="IT">IT</option>
                        <option value="Non-IT">Non-IT</option>
                        <option value="Logistics">Logistics</option>
                      </select>
                    </div>
                  </div>

                  {/* Third Row: Address (Full Width) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input
                      type="text"
                      name="location"
                      required
                      maxLength="50"
                      pattern="[a-zA-Z0-9\s\-\.\,\#\/]*"
                      title="Letters, numbers, spaces, and basic punctuation allowed"
                      onChange={(e) => handleRealTimeValidation('location', e.target.value, false)}
                      className={getFieldClassName('location', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                    />
                    {displayFieldError('location', formErrors) || displayFieldError('location', realTimeErrors)}
                  </div>

                  {/* Fourth Row: Status and Subscription */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select name="status" required className={getFieldClassName('status', formErrors, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}>
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Pending">Pending</option>
                      </select>
                      {displayFieldError('status', formErrors)}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subscription Plan</label>
                      <select name="subscription" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900">
                        <option value="Standard Plan">Standard Plan</option>
                        <option value="Premium Plan">Premium Plan</option>
                        <option value="Basic Plan">Basic Plan</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-end p-6 border-t border-gray-200 space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={Object.keys(realTimeErrors).length > 0}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      Object.keys(realTimeErrors).length > 0 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {Object.keys(realTimeErrors).length > 0 ? 'Fix Errors to Add Vendor' : 'Add Vendor'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
