import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { INITIAL_FORM_DATA } from './constants';

export const useSignupData = () => {
  // Form state
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  
  // Navigation state
  const [currentStep, setCurrentStep] = useState(1);
  const [currentMainStage, setCurrentMainStage] = useState(1);
  
  // UI state
  const [showPassword, setShowPassword] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    currentRole: '',
    location: '',
    verificationCode: '',
    twoFACode: '',
  });

  // Handle URL parameters for stage navigation
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const stage = searchParams.get('stage');
    if (stage === '3') {
      setCurrentMainStage(3);
      setCurrentStep(3);
    }
  }, [searchParams]);

  // Countdown timer effect
  useEffect(() => {
    if (currentMainStage === 2 && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCanResend(true);
    }
  }, [currentMainStage, countdown]);

  // Form handlers
  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Name should contain only letters';
        } else if (value.length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;
      
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email format';
        }
        break;
      
      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 8) {
          error = 'Password must be at least 8 characters';
        } else if (value.length > 20) {
          error = 'Password must not exceed 20 characters';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(value)) {
          error = 'Password must contain uppercase, lowercase, number, and special character';
        }
        break;
      
      case 'confirmPassword':
        if (!value) {
          error = 'Please confirm your password';
        } else if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
      
      case 'phone':
        if (value && !/^[0-9]+$/.test(value)) {
          error = 'Phone should contain only numbers';
        } else if (value && value.length > 15) {
          error = 'Phone number is too long';
        }
        break;
      
      case 'currentRole':
        if (!value.trim()) {
          error = 'Current role is required';
        } else if (value.length < 2) {
          error = 'Please enter a valid role';
        } else if (value.length > 50) {
          error = 'Current role must not exceed 50 characters';
        }
        break;
      
      case 'location':
        if (!value.trim()) {
          error = 'Location is required';
        } else if (value.length < 2) {
          error = 'Please enter a valid location';
        } else if (value.length > 50) {
          error = 'Location must not exceed 50 characters';
        }
        break;
      
      case 'verificationCode':
        if (!value.trim()) {
          error = 'Verification code is required';
        } else if (!/^\d{6}$/.test(value)) {
          error = 'Please enter a valid 6-digit code';
        }
        break;
      
      case 'twoFACode':
        if (!value.trim()) {
          error = 'Authentication code is required';
        } else if (!/^\d{6}$/.test(value)) {
          error = 'Please enter a valid 6-digit authentication code';
        }
        break;
      
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Apply input restrictions
    let processedValue = value;
    if (name === 'fullName') {
      processedValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'phone') {
      processedValue = value.replace(/[^0-9]/g, '');
    } else if (name === 'password' || name === 'confirmPassword') {
      // Limit password fields to maximum 20 characters
      processedValue = value.slice(0, 20);
    } else if (name === 'currentRole' || name === 'location') {
      // Limit current role and location to maximum 50 characters
      processedValue = value.slice(0, 50);
    } else if (name === 'verificationCode') {
      // Only allow digits and limit to 6 characters
      processedValue = value.replace(/[^0-9]/g, '').slice(0, 6);
    } else if (name === 'twoFACode') {
      // Only allow digits and limit to 6 characters
      processedValue = value.replace(/[^0-9]/g, '').slice(0, 6);
    }
    
    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : processedValue,
    }));
    
    // Validate field and update errors
    const error = validateField(name, processedValue);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: error
    }));
    
    // Clear validation error when user starts typing
    if (validationError) {
      setValidationError('');
    }
  };

  const handleGoalToggle = (goal) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleExperienceLevelSelect = (level) => {
    setFormData((prev) => ({
      ...prev,
      experienceLevel: level,
    }));
  };

  const handleTwoFAMethodSelect = (method) => {
    setFormData((prev) => ({
      ...prev,
      twoFAMethod: method,
    }));
  };

  // Navigation handlers
  const nextStep = () => {
    // Clear previous error
    setValidationError('');
    
    // Validation for each step using field errors
    if (currentStep === 1) {
      // Check all required fields for step 1
      const step1Fields = ['fullName', 'email', 'password', 'confirmPassword'];
      const hasErrors = step1Fields.some(field => {
        const error = validateField(field, formData[field]);
        if (error) {
          setFieldErrors(prev => ({ ...prev, [field]: error }));
          return true;
        }
        return false;
      });
      
      if (!formData.agreeToTerms) {
        setValidationError('Please agree to the Terms of Service and Privacy Policy');
        return;
      }
      
      if (hasErrors) {
        setValidationError('Please fix all errors before proceeding');
        return;
      }
    } else if (currentStep === 2) {
      // Check all required fields for step 2
      const step2Fields = ['currentRole', 'location'];
      const hasErrors = step2Fields.some(field => {
        const error = validateField(field, formData[field]);
        if (error) {
          setFieldErrors(prev => ({ ...prev, [field]: error }));
          return true;
        }
        return false;
      });
      
      if (!formData.experienceLevel) {
        setValidationError('Please select an experience level');
        return;
      }
      
      if (hasErrors) {
        setValidationError('Please fill all required fields');
        return;
      }
    } else if (currentStep === 3) {
      // Step 3 validation: goals (at least one goal should be selected)
      const isStep3Valid = formData.goals && formData.goals.length > 0;
      
      if (!isStep3Valid) {
        setValidationError('Please select at least one goal');
        return;
      }
    }
    
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempt:", formData);
    // After real creation → setCurrentMainStage(2);
  };

  const handleResendCode = () => {
    setCountdown(30);
    setCanResend(false);
    // Add resend logic here
    console.log("Resending verification code to:", formData.email);
  };

  const handleCompleteSetup = () => {
    setCurrentMainStage(2);
    setCurrentStep(1);
  };

  const handleVerifyEmail = () => {
    // Validate verification code
    const codeError = validateField('verificationCode', formData.verificationCode);
    if (codeError) {
      setFieldErrors(prev => ({ ...prev, verificationCode: codeError }));
      setValidationError('Please enter a valid verification code');
      return;
    }
    
    // Clear any existing errors
    setValidationError('');
    setFieldErrors(prev => ({ ...prev, verificationCode: '' }));
    
    setCurrentMainStage(3);
  };

  const handleEnable2FA = () => {
    if (formData.twoFAMethod === "authenticator") {
      setCurrentMainStage(4);
    } else {
      setCurrentMainStage(5);
    }
  };

  const handleConfirm2FA = () => {
    // Validate 2FA code
    const codeError = validateField('twoFACode', formData.twoFACode);
    if (codeError) {
      setFieldErrors(prev => ({ ...prev, twoFACode: codeError }));
      setValidationError('Please enter a valid authentication code');
      return;
    }
    
    // Clear any existing errors
    setValidationError('');
    setFieldErrors(prev => ({ ...prev, twoFACode: '' }));
    
    setCurrentMainStage(5);
  };

  const handleSkip2FA = () => {
    setCurrentMainStage(5);
  };

  return {
    // Form data
    formData,
    setFormData,
    
    // Navigation state
    currentStep,
    setCurrentStep,
    currentMainStage,
    setCurrentMainStage,
    
    // UI state
    showPassword,
    setShowPassword,
    countdown,
    canResend,
    validationError,
    fieldErrors,
    
    // Handlers
    handleChange,
    handleGoalToggle,
    handleExperienceLevelSelect,
    handleTwoFAMethodSelect,
    handleSubmit,
    handleResendCode,
    nextStep,
    prevStep,
    handleCompleteSetup,
    handleVerifyEmail,
    handleEnable2FA,
    handleConfirm2FA,
    handleSkip2FA,
  };
};
