import Link from "next/link";
import StepProgress from './StepProgress';
import Step1BasicInfo from './steps/Step1BasicInfo';
import Step2ProfessionalInfo from './steps/Step2ProfessionalInfo';
import Step3Goals from './steps/Step3Goals';

export default function SignupForm({ 
  currentStep,
  formData,
  handleChange,
  showPassword,
  setShowPassword,
  onGoalToggle,
  onExperienceLevelSelect,
  onNextStep,
  onPrevStep,
  onCompleteSetup,
  currentMainStage,
  handleSubmit,
  validationError,
  fieldErrors
}) {
  return (
    <div className="flex flex-col lg:flex-row bg-white p-4 sm:p-6 lg:p-8 gap-6 lg:gap-8 min-h-screen">
      {/* Left Side - Hero Section (completely unchanged) */}
      <div className="flex-1 bg-white flex items-start justify-center p-4 sm:p-6 lg:p-8 min-h-screen transition-all duration-300 relative overflow-hidden hidden lg:flex">
        <div className="text-left max-w-full w-full relative z-20 mt-8 lg:mt-12">
          <div className="mb-6 lg:mb-8">
            <img
              src="/assets/home/logo.png"
              alt="Rob N Grab"
              className="h-16 lg:h-[5rem] w-auto "
            />
          </div>
          <div className="mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 leading-tight text-black ">
              Start Your Career Journey Today
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-8 opacity-90 text-black">
              Join thousands of professionals building their dream careers
              on CareerSpace
            </p>
          </div>

          <div
            className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl p-4 lg:p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] mb-6 lg:mb-8 relative overflow-hidden h-40 lg:h-48"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=300&fit=crop)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-transparent z-10"></div>
            <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 z-20">
              <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2 text-white">
                    Premium oppurtunities
                  </h3>
                  <p className="text-xs lg:text-sm opacity-80 text-white">
                    Access exclusive job listings from top companies
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <div
              className="flex-1 bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl p-4 lg:p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] relative overflow-hidden h-32 lg:h-40"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1554224211-48f1cf6ec27e?w=400&h=250&fit=crop)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 to-transparent z-10"></div>
              <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 z-20">
                <div className="text-xs lg:text-sm opacity-80 text-white">
                  Smart Matching
                </div>
              </div>
            </div>

            <div
              className="flex-1 bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl p-4 lg:p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] relative overflow-hidden h-32 lg:h-40"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 to-transparent z-10"></div>
              <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 z-20">
                <div className="text-xs lg:text-sm opacity-80 text-white">
                  Career growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center bg-white rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] p-4 sm:p-6 lg:p-8 lg:p-12 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <div className="w-full max-w-full lg:max-w-[38rem]">
          {/* Back to Login Button - Only show for sub-stage 1 */}
          {currentStep === 1 && (
            <div className="flex justify-start mb-4">
              <Link
                href="/login"
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to login
              </Link>
            </div>
          )}

          {/* 3 Progress Bars */}
          <StepProgress currentStep={currentStep} />

          {/* Validation Error Message */}
          {validationError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-red-700 text-sm font-medium">{validationError}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <Step1BasicInfo
                formData={formData}
                handleChange={handleChange}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                onNextStep={onNextStep}
                fieldErrors={fieldErrors}
              />
            )}

            {currentStep === 2 && (
              <Step2ProfessionalInfo
                formData={formData}
                handleChange={handleChange}
                onExperienceLevelSelect={onExperienceLevelSelect}
                onNextStep={onNextStep}
                onPrevStep={onPrevStep}
                currentMainStage={currentMainStage}
                fieldErrors={fieldErrors}
              />
            )}

            {currentStep === 3 && (
              <Step3Goals
                formData={formData}
                onGoalToggle={onGoalToggle}
                onCompleteSetup={onCompleteSetup}
                onPrevStep={onPrevStep}
                fieldErrors={fieldErrors}
              />
            )}
          </form>

          <div className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
