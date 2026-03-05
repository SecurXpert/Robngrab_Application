"use client";

import { Suspense } from "react";
import { useSignupData } from './useSignupData';
import ProgressBar from './components/ProgressBar';
// import StepProgress from './components/StepProgress';
import SignupForm from './components/SignupForm';
import Stage2EmailVerification from './components/stages/Stage2EmailVerification';
import Stage3TwoFASetup from './components/stages/Stage3TwoFASetup';
import Stage4TwoFAConfirmation from './components/stages/Stage4TwoFAConfirmation';
import Stage5Welcome from './components/stages/Stage5Welcome';

function SignupContent() {
  const {
    formData,
    currentStep,
    currentMainStage,
    showPassword,
    setShowPassword,
    countdown,
    canResend,
    validationError,
    fieldErrors,
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
            onGoalToggle={handleGoalToggle}
            onExperienceLevelSelect={handleExperienceLevelSelect}
            onNextStep={nextStep}
            onPrevStep={prevStep}
            onCompleteSetup={handleCompleteSetup}
            currentMainStage={currentMainStage}
            handleSubmit={handleSubmit}
            validationError={validationError}
            fieldErrors={fieldErrors}
          />
        )}

        {currentMainStage === 2 && (
          <Stage2EmailVerification
            formData={formData}
            countdown={countdown}
            canResend={canResend}
            onVerifyEmail={handleVerifyEmail}
            onResendCode={handleResendCode}
            handleChange={handleChange}
            fieldErrors={fieldErrors}
            validationError={validationError}
          />
        )}

        {currentMainStage === 3 && (
          <Stage3TwoFASetup
            formData={formData}
            onTwoFAMethodSelect={handleTwoFAMethodSelect}
            onEnable2FA={handleEnable2FA}
            onSkip2FA={handleSkip2FA}
          />
        )}

        {currentMainStage === 4 && (
          <Stage4TwoFAConfirmation
            onConfirm2FA={handleConfirm2FA}
            formData={formData}
            handleChange={handleChange}
            fieldErrors={fieldErrors}
            validationError={validationError}
          />
        )}

        {currentMainStage === 5 && (
          <Stage5Welcome
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
