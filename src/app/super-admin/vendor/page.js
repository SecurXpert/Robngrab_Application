"use client";

import { useState, useRef, useEffect } from 'react';
import { LuPlus } from "react-icons/lu";
import { validateForm, vendorValidationSchema } from '@/utils/validation';

import VendorStats from '@/app/super-admin/vendor/Model/VendorStats';
import VendorFilters from '@/app/super-admin/vendor/Model/VendorFilters';
import VendorTable from '@/app/super-admin/vendor/Model/VendorTable';
import EditVendorModal from '@/app/super-admin/vendor/Model/EditVendorModal';
import AddVendorModal from '@/app/super-admin/vendor/Model/AddVendorModal';

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
          email: 'contact@techsolutionsinc.com', 
          category: 'IT',
          recruiters: 12,
          status: 'Active', 
          balance: '$24,500',
          location: 'Silicon Valley, CA, USA',
          phone: '+1 800 555 1234',
          subscription: 'Enterprise'
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
            <h1 className="text-3xl font-family-inter font-weight-500 text-[#0A0A0A ] mb-2">Vendors / Tenants Management</h1>
            <p className="text-[#4A5565]">Complete operational, hiring, and activity visibility for all vendors</p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#2563EB] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <LuPlus className="-ml-1 mr-3 h-5 w-5" />
            Add Vendor
          </button>
        </div>

        <VendorStats />

        <VendorFilters 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          statusFilter={statusFilter} 
          setStatusFilter={setStatusFilter} 
        />

        <VendorTable 
          isClient={isClient}
          filteredVendors={filteredVendors}
          setSelectedVendor={setSelectedVendor}
          setIsEditModalOpen={setIsEditModalOpen}
          handleDeleteVendor={handleDeleteVendor}
        />

        {isEditModalOpen && selectedVendor && (
          <EditVendorModal 
            selectedVendor={selectedVendor}
            setIsEditModalOpen={setIsEditModalOpen}
            editFormRef={editFormRef}
            handleUpdateVendor={handleUpdateVendor}
            handleRealTimeValidation={handleRealTimeValidation}
            editFormErrors={editFormErrors}
            realTimeEditErrors={realTimeEditErrors}
          />
        )}

        {isAddModalOpen && (
          <AddVendorModal 
            setIsAddModalOpen={setIsAddModalOpen}
            addFormRef={addFormRef}
            handleAddVendor={handleAddVendor}
            handleRealTimeValidation={handleRealTimeValidation}
            formErrors={formErrors}
            realTimeErrors={realTimeErrors}
          />
        )}
      </div>
    </div>
  );
}
