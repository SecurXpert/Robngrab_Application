import { EXPERIENCE_LEVELS } from '../../constants';

export default function Step2ProfessionalInfo({ 
  formData, 
  handleChange, 
  onExperienceLevelSelect, 
  onNextStep, 
  onPrevStep,
  currentMainStage 
}) {
  return (
    <div>
      {/* Logo and Stage Info */}
      <div className="flex items-center justify-between mb-8">
        <img
          src="/assets/home/logo.png"
          alt="Rob N Grab"
          className="h-[5rem] w-auto "
        />
        {currentMainStage >= 2 && (
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">
              Stage {currentMainStage} of 4
            </div>
            <div className="text-lg font-medium text-gray-800">
              {currentMainStage === 2 && "Verify Email"}
              {currentMainStage === 3 && "Secure Account"}
              {currentMainStage === 4 && "Complete Setup"}
            </div>
          </div>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="currentRole"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Current Role
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="currentRole"
            name="currentRole"
            value={formData.currentRole}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder:text-gray-500"
            placeholder="e.g., Senior Product Designer"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Location
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder:text-gray-500"
            placeholder="e.g., San Francisco, CA"
            required
          />
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Experience Level
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {EXPERIENCE_LEVELS.map((level) => (
            <div
              key={level.value}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                formData.experienceLevel === level.value
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onClick={() => onExperienceLevelSelect(level.value)}
            >
              <h3 className="font-semibold text-gray-800 mb-1">
                {level.label}
              </h3>
              <p className="text-sm text-gray-600">{level.description}</p>
            </div>
          ))}
        </div>
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
          onClick={onNextStep}
          className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
