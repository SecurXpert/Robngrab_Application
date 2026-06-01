import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function StepBar({ currentStep, totalSteps = 3 }) {
  const stepTitles = ["Account basics", "Professional details", "Verification"];

  return (
    <div className="mb-8">
      {/* Back to login option */}
      <div className="flex justify-start mb-4">
        <Link
          href="/Login"
          className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to login
        </Link>
      </div>

      {/* Step progress bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-500 font-medium">Step {currentStep} of {totalSteps}</div>
        <div className="text-sm text-gray-700 font-medium">{stepTitles[currentStep - 1]}</div>
      </div>
      
      <div className="flex items-center space-x-2">
        {[...Array(totalSteps)].map((_, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex-1 h-2 rounded-full transition-colors ${
                index + 1 <= currentStep
                  ? 'bg-blue-600'
                  : 'bg-gray-200'
              }`}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
