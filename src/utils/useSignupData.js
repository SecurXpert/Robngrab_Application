import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { INITIAL_FORM_DATA } from '@/utils/signupConstants';

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
  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : type === "checkbox" ? checked : value,
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
    if (currentStep < 2) setCurrentStep(currentStep + 1);
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
  };

  const handleVerifyEmail = () => {
    setCurrentMainStage(3);
  };

  const handleEnable2FA = () => {
    if (formData.twoFAMethod === "authenticator") {
      setCurrentMainStage(6);
    } else {
      setCurrentMainStage(6);
    }
  };

  const handleConfirm2FA = () => {
    setCurrentMainStage(6);
  };

  const handleSkip2FA = () => {
    setCurrentMainStage(6);
  };

  const handleBackToSignup = () => {
    setCurrentMainStage(1);
    setCurrentStep(2);
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

    // Handlers
    handleChange,
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
    handleBackToSignup,
  };
};
