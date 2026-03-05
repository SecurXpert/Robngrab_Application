export default function StepProgress({ currentStep }) {
  return (
    <div className="mb-8">
      <div className="mb-1">
        <span className="text-xs text-blue-500 font-medium">
          {currentStep} of 3
        </span>
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              currentStep >= 1 ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        </div>
        <div className="flex-1">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              currentStep >= 2 ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        </div>
        <div className="flex-1">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              currentStep >= 3 ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
