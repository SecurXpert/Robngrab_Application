import { GOALS } from '../../constants';

export default function Step3Goals({ 
  formData, 
  onGoalToggle, 
  onCompleteSetup, 
  onPrevStep 
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        What are you looking for?
      </h2>
      <p className="text-gray-600 mb-8">
        We'll tailor your feed to match your goals
      </p>

      <div className="space-y-4 mb-8">
        {GOALS.map((goal) => (
          <div
            key={goal.value}
            className={`border-2 rounded-lg p-5 cursor-pointer transition-all duration-200 ${
              formData.goals.includes(goal.value)
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onClick={() => onGoalToggle(goal.value)}
          >
            <div className="flex items-center">
              <div className="p-1.5 bg-blue-100 rounded-full mr-3">
                <svg
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={goal.icon}
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {goal.label}
                </h3>
                <p className="text-xs text-gray-600">
                  {goal.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onPrevStep}
          className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition-all duration-200 font-medium"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onCompleteSetup}
          className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
        >
          Complete Setup →
        </button>
      </div>
    </div>
  );
}
