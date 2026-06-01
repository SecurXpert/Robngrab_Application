"use client";

import { Suspense } from "react";
import { useSignupData } from '@/utils/useSignupData';
import ProgressBar from '@/app/signup/Model/ProgressBar';
import SignupForm from '@/app/signup/Model/SignupForm';
import Verify from '@/app/signup/Model/Verify';
import ConfirmProfile from '@/app/signup/Model/ConfirmProfile';

function SignupContent() {
  const {
    formData,
    currentStep,
    currentMainStage,
    showPassword,
    setShowPassword,
    countdown,
    canResend,
    handleChange,
    handleExperienceLevelSelect,
    handleTwoFAMethodSelect,
    handleResendCode,
    nextStep,
    prevStep,
    handleCompleteSetup,
    handleVerifyEmail,
    handleEnable2FA,
    handleConfirm2FA,
    handleSkip2FA,
    handleBackToSignup,
  } = useSignupData();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top 4-stage progress bar - lines between circles only */}
      <ProgressBar currentMainStage={currentMainStage} />

      {/* Content area */}
      <div className="flex-1">
        {currentMainStage === 1 && (
          <SignupForm
            currentStep={currentStep}
            formData={formData}
            handleChange={handleChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            onExperienceLevelSelect={handleExperienceLevelSelect}
            onNextStep={nextStep}
            onPrevStep={prevStep}
            onCompleteSetup={handleCompleteSetup}
            currentMainStage={currentMainStage}
          />
        )}

        {currentMainStage === 2 && (
          <Verify
            onVerify={handleVerifyEmail}
            onBack={handleBackToSignup}
            countdown={countdown}
            canResend={canResend}
            onResendCode={handleResendCode}
          />
        )}

        {currentMainStage === 3 && (
          <ConfirmProfile
            formData={formData}
            onBack={handleBackToSignup}
            onConfirm={handleEnable2FA}
          />
        )}

        {currentMainStage === 4 && (
          <SignupStages
            currentMainStage={currentMainStage}
            formData={formData}
            onTwoFAMethodSelect={handleTwoFAMethodSelect}
            onEnable2FA={handleEnable2FA}
            onSkip2FA={handleSkip2FA}
          />
        )}

        {currentMainStage === 5 && (
          <SignupStages
            currentMainStage={currentMainStage}
            onConfirm2FA={handleConfirm2FA}
          />
        )}

        {currentMainStage === 6 && (
          <SignupStages
            currentMainStage={currentMainStage}
            formData={formData}
          />
        )}
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupContent />
    </Suspense>
  );
}
