// Form validation utilities for vendor and franchise management

export const validationRules = {
  required: (value) => {
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      return 'This field is required';
    }
    return null;
  },
  
  email: (value) => {
    if (!value) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return null;
  },
  
  phone: (value) => {
    if (!value) return 'Phone number is required';
    const phoneRegex = /^[\d]+$/; // Only numbers allowed
    if (!phoneRegex.test(value)) {
      return 'Phone number can only contain digits';
    }
    if (value.length < 10) {
      return 'Phone number must be at least 10 digits';
    }
    if (value.length > 10) {
      return 'Phone number must not exceed 10 digits';
    }
    return null;
  },
  
  name: (value) => {
    if (!value) return 'Name is required';
    if (value.trim().length < 2) {
      return 'Name must be at least 2 characters long';
    }
    if (value.trim().length > 50) {
      return 'Name must be less than 50 characters';
    }
    if (!/^[a-zA-Z\s\-\.'']+$/.test(value)) {
      return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }
    return null;
  },
  
  address: (value) => {
    if (!value) return 'Address is required';
    if (value.trim().length < 5) {
      return 'Address must be at least 5 characters long';
    }
    if (value.trim().length > 50) {
      return 'Address must be less than 50 characters';
    }
    // Allow letters, numbers, spaces, and common address characters
    const addressRegex = /^[a-zA-Z0-9\s\-\.\,\#\/]+$/;
    if (!addressRegex.test(value)) {
      return 'Address can only contain letters, numbers, spaces, and basic punctuation';
    }
    return null;
  },
  
  minLength: (min) => (value) => {
    if (!value || value.trim().length < min) {
      return `Must be at least ${min} characters long`;
    }
    return null;
  },
  
  maxLength: (max) => (value) => {
    if (value && value.trim().length > max) {
      return `Must be less than ${max} characters`;
    }
    return null;
  }
};

export const validateField = (value, rules) => {
  for (const rule of rules) {
    const error = rule(value);
    if (error) return error;
  }
  return null;
};

export const validateForm = (formData, validationSchema) => {
  const errors = {};
  let isValid = true;

  for (const [fieldName, rules] of Object.entries(validationSchema)) {
    const value = formData[fieldName];
    const error = validateField(value, rules);
    if (error) {
      errors[fieldName] = error;
      isValid = false;
    }
  }

  return { errors, isValid };
};

// Validation schemas for different forms
export const franchiseValidationSchema = {
  franchiseName: [validationRules.required, validationRules.name],
  ownerName: [validationRules.required, validationRules.name],
  ownerEmail: [validationRules.email],
  phoneNumber: [validationRules.phone],
  city: [validationRules.required, validationRules.minLength(2)],
  completeAddress: [validationRules.required, validationRules.address],
  regionState: [validationRules.required, validationRules.minLength(2)],
  name: [validationRules.required, validationRules.name], // For edit form
  email: [validationRules.email], // For edit form
  phone: [validationRules.phone], // For edit form
  category: [validationRules.required], // For edit form
  location: [validationRules.required, validationRules.address] // For edit form
};

export const vendorValidationSchema = {
  name: [validationRules.required, validationRules.name],
  email: [validationRules.email],
  phone: [validationRules.phone],
  location: [validationRules.required, validationRules.address],
  category: [validationRules.required],
  status: [validationRules.required]
};

// Helper function to display validation errors
export const displayFieldError = (fieldName, errors) => {
  if (errors[fieldName]) {
    return (
      <span className="text-red-500 text-xs mt-1 block">
        {errors[fieldName]}
      </span>
    );
  }
  return null;
};

// Helper to add error styling to input fields
export const getFieldClassName = (fieldName, errors, baseClassName) => {
  const errorClass = errors[fieldName] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500';
  return `${baseClassName} ${errorClass}`;
};
