"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { validateForm, franchiseValidationSchema, displayFieldError, getFieldClassName } from '../../../utils/validation';


export default function FranchiseManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    status: '',
    subscriptionPlan: '',
    country: '',
    stateRegion: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    franchiseName: '',
    regionState: '',
    ownerName: '',
    ownerEmail: '',
    phoneNumber: '',
    city: '',
    completeAddress: '',
    initialStatus: 'Pending Approval',
    expectedLaunchDate: '',
    businessPlanNotes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [realTimeErrors, setRealTimeErrors] = useState({});
  const [franchises, setFranchises] = useState([]);

  // Load franchises from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFranchises = localStorage.getItem('franchises');
      if (savedFranchises) {
        setFranchises(JSON.parse(savedFranchises));
      } else {
        // Fallback to initial data if no saved data
        const initialFranchises = [
          {
            id: 1,
            name: "Tech Solutions Inc.",
            category: "Technology",
            location: "New York, USA",
            contact: "John Doe - john@techsolutions.com",
            email: "john@techsolutions.com",
            phone: "+1 (555) 123-4567",
            subscription: "Premium Plan",
            recruiters: 5,
            candidates: 120,
            revenue: "$50,000",
            plan: "Premium",
            status: "Active"
          },
          {
            id: 2,
            name: "Healthcare Plus",
            category: "Healthcare",
            location: "California, USA",
            contact: "Jane Smith - jane@healthcareplus.com",
            email: "jane@healthcareplus.com",
            phone: "+1 (555) 987-6543",
            subscription: "Standard Plan",
            recruiters: 3,
            candidates: 85,
            revenue: "$35,000",
            plan: "Standard",
            status: "Active"
          },
          {
            id: 3,
            name: "EduTech Services",
            category: "Education",
            location: "Texas, USA",
            contact: "Mike Johnson - mike@edutech.com",
            email: "mike@edutech.com",
            phone: "+1 (555) 456-7890",
            subscription: "Premium Plan",
            recruiters: 8,
            candidates: 200,
            revenue: "$75,000",
            plan: "Premium",
            status: "Inactive"
          }
        ];
        setFranchises(initialFranchises);
        localStorage.setItem('franchises', JSON.stringify(initialFranchises));
      }
    }
  }, []);

  // Save franchises to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined' && franchises.length > 0) {
      localStorage.setItem('franchises', JSON.stringify(franchises));
    }
  }, [franchises]);

  const filteredFranchises = franchises.filter(franchise => {
    const matchesSearch = franchise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         franchise.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         franchise.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !filters.category || franchise.category === filters.category;
    const matchesStatus = !filters.status || franchise.status === filters.status;
    const matchesPlan = !filters.subscriptionPlan || franchise.plan === filters.subscriptionPlan;
    
    return matchesSearch && matchesCategory && matchesStatus && matchesPlan;
  });

  const handleRealTimeValidation = (fieldName, value) => {
    const errors = { ...realTimeErrors };
    
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
    
    setRealTimeErrors(errors);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Perform real-time validation
    handleRealTimeValidation(name, value);
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Check for real-time errors first
    if (Object.keys(realTimeErrors).length > 0) {
      return; // Don't submit if there are real-time errors
    }
    
    // Validate form data
    const { errors, isValid } = validateForm(formData, franchiseValidationSchema);
    
    if (!isValid) {
      setFormErrors(errors);
      return;
    }
    
    // Clear errors if valid
    setFormErrors({});
    setRealTimeErrors({});
    
    // Create new franchise object from form data
    const newFranchise = {
      id: franchises.length > 0 ? Math.max(...franchises.map(f => f.id)) + 1 : 1,
      name: formData.franchiseName,
      category: formData.regionState || 'Technology', // Map regionState to category
      location: `${formData.city}, ${formData.completeAddress}`,
      contact: `${formData.ownerName} - ${formData.ownerEmail}`,
      email: formData.ownerEmail, // Add separate email field
      phone: formData.phoneNumber, // Add separate phone field
      recruiters: Math.floor(Math.random() * 10) + 1, // Random number 1-10
      candidates: Math.floor(Math.random() * 100) + 50, // Random number 50-150
      revenue: `$${Math.floor(Math.random() * 50) + 10}000`, // Random revenue
      plan: formData.initialStatus === 'Active' ? 'Premium' : 'Standard',
      status: formData.initialStatus,
      subscription: formData.initialStatus === 'Active' ? 'Premium Plan' : 'Standard Plan' // Add subscription field
    };
    
    // Add new franchise to the list
    const updatedFranchises = [...franchises, newFranchise];
    setFranchises(updatedFranchises);
    
    // Reset form and close modal
    setFormData({
      franchiseName: '',
      regionState: '',
      ownerName: '',
      ownerEmail: '',
      phoneNumber: '',
      city: '',
      completeAddress: '',
      initialStatus: 'Pending Approval',
      expectedLaunchDate: '',
      businessPlanNotes: ''
    });
    setFormErrors({});
    setIsModalOpen(false);
  };

  return (
      <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Franchise Management</h1>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              + Add Franchise
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search franchises..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-gray-600 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          {/* Filters Header */}
          <div className="flex items-center mb-6">
            <svg
              className="h-5 w-5 text-gray-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
                className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All</option>
                <option value="Technology">Technology</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({...filters, status: e.target.value})}
                className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subscription Plan</label>
              <select
                value={filters.subscriptionPlan}
                onChange={(e) => setFilters({...filters, subscriptionPlan: e.target.value})}
                className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <select
                value={filters.country}
                onChange={(e) => setFilters({...filters, country: e.target.value})}
                className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State/Region</label>
              <select
                value={filters.stateRegion}
                onChange={(e) => setFilters({...filters, stateRegion: e.target.value})}
                className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All</option>
                <option value="New York">New York</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-sm text-gray-600">
            Showing {filteredFranchises.length} of {franchises.length} franchises
          </div>
        </div>

        {/* Franchise Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Franchise Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recruiters
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Candidates
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredFranchises.map((franchise) => (
                  <tr key={franchise.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`h-10 w-10 rounded-full flex-shrink-0 mr-3 flex items-center justify-center ${
                          franchise.id === 1 ? 'bg-blue-500' : 
                          franchise.id === 2 ? 'bg-green-500' : 
                          franchise.id === 3 ? 'bg-purple-500' : 'bg-orange-500'
                        }`}>
                          <span className="text-white font-semibold text-sm">
                            {franchise.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{franchise.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {franchise.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {franchise.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {franchise.contact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {franchise.recruiters}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {franchise.candidates}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {franchise.revenue}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        franchise.plan === 'Premium' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {franchise.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        franchise.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {franchise.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Link href={`/franchise-management/${franchise.id}`} className="text-gray-600 hover:text-gray-900 flex items-center">
                        View
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Franchise Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center max-w-2xl mx-auto">
            {/* Overlay */}
            <div 
              className="fixed inset-0 backdrop-blur-xs transition-opacity"
              onClick={() => setIsModalOpen(false)}
            ></div>

            {/* Modal Content */}
            <div className="relative inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg z-50">
              <div className="px-6 py-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Add New Franchise</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-500 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  {/* Row 1: Franchise Name and Region/State */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">
                        Franchise Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="franchiseName"
                        value={formData.franchiseName}
                        onChange={handleInputChange}
                        placeholder="e.g., West Coast Branch"
                        maxLength="50"
                        pattern="[a-zA-Z\s\-\.']*"
                        title="Only letters, spaces, hyphens, and apostrophes allowed"
                        className={getFieldClassName('franchiseName', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent text-gray-900')}
                      />
                      {displayFieldError('franchiseName', formErrors) || displayFieldError('franchiseName', realTimeErrors)}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">
                        Region/State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="regionState"
                        value={formData.regionState}
                        onChange={handleInputChange}
                        placeholder="e.g., California"
                        maxLength="50"
                        pattern="[a-zA-Z\s\-\.']*"
                        title="Only letters, spaces, hyphens, and apostrophes allowed"
                        className={getFieldClassName('regionState', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent text-gray-900')}
                      />
                      {displayFieldError('regionState', formErrors) || displayFieldError('regionState', realTimeErrors)}
                    </div>
                  </div>

                  {/* Row 2: Owner Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">
                        Owner Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleInputChange}
                        placeholder="e.g., Michael Anderson"
                        maxLength="50"
                        pattern="[a-zA-Z\s\-\.']*"
                        title="Only letters, spaces, hyphens, and apostrophes allowed"
                        className={getFieldClassName('ownerName', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent text-gray-900')}
                      />
                      {displayFieldError('ownerName', formErrors) || displayFieldError('ownerName', realTimeErrors)}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">
                        Owner Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="ownerEmail"
                        value={formData.ownerEmail}
                        onChange={handleInputChange}
                        placeholder="owner@email.com"
                        className={getFieldClassName('ownerEmail', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent text-gray-900')}
                      />
                      {displayFieldError('ownerEmail', formErrors) || displayFieldError('ownerEmail', realTimeErrors)}
                    </div>
                  </div>

                  {/* Row 3: Phone and City */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="5550000000"
                        maxLength="10"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        title="Only numbers allowed"
                        className={getFieldClassName('phoneNumber', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent text-gray-900')}
                      />
                      {displayFieldError('phoneNumber', formErrors) || displayFieldError('phoneNumber', realTimeErrors)}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="e.g., Los Angeles"
                        maxLength="50"
                        pattern="[a-zA-Z\s\-\.']*"
                        title="Only letters, spaces, hyphens, and apostrophes allowed"
                        className={getFieldClassName('city', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent text-gray-900')}
                      />
                      {displayFieldError('city', formErrors) || displayFieldError('city', realTimeErrors)}
                    </div>
                  </div>

                  {/* Row 4: Complete Address (Full Width) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Complete Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="completeAddress"
                      value={formData.completeAddress}
                      onChange={handleInputChange}
                      placeholder="Street address, Suite/Unit, ZIP code"
                      rows={3}
                      maxLength="50"
                      pattern="[a-zA-Z0-9\s\-\.\,\#\/]*"
                      title="Letters, numbers, spaces, and basic punctuation allowed"
                      className={getFieldClassName('completeAddress', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent resize-none text-gray-900')}
                    />
                    {displayFieldError('completeAddress', formErrors) || displayFieldError('completeAddress', realTimeErrors)}
                  </div>

                  {/* Row 5: Initial Status and Expected Launch Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">
                        Initial Status
                      </label>
                      <select
                        name="initialStatus"
                        value={formData.initialStatus}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      >
                        <option value="Pending Approval">Pending Approval</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">
                        Expected Launch Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="expectedLaunchDate"
                          value={formData.expectedLaunchDate}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                        />
                        <svg
                          className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Row 6: Business Plan (Full Width) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Business Plan/Notes
                    </label>
                    <textarea
                      name="businessPlanNotes"
                      value={formData.businessPlanNotes}
                      onChange={handleInputChange}
                      placeholder="Additional information about franchise..."
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900"
                    />
                  </div>
                </div>

                {/* Information Message */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-blue-800">
                      An invitation email will be sent to the owner with franchise setup instructions.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={Object.keys(realTimeErrors).length > 0}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                      Object.keys(realTimeErrors).length > 0 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {Object.keys(realTimeErrors).length > 0 ? 'Fix Errors to Save' : 'Save Plan'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
