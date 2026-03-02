import { TWO_FA_METHODS } from '../../constants';

export default function Stage3TwoFASetup({ 
  formData, 
  onTwoFAMethodSelect, 
  onEnable2FA, 
  onSkip2FA 
}) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        <img src="/assets/home/logo.png" className="w-28 -ml-4" alt="" />
        <span className="text-xs text-[#0265D9] bg-gray-200 rounded-full mb-1 p-2">
          Stage 3 of 4
        </span>
        <div className="text-center mb-6">
          <img
            src="/assets/home/SecurityIcon.svg"
            className="w-12 h-12 mx-auto mb-4 bg-[#E8F5E8] p-2 rounded-xl"
            alt=""
          />

          <div className="text-2xl font-medium text-gray-800">
            Secure Your Account
          </div>
          <div className="text-sm text-gray-500">
            Add an extra layer of security to protect your account
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Choose your 2FA method
          </label>
          <div className="space-y-3">
            {TWO_FA_METHODS.map((method) => (
              <div
                key={method.value}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                  formData.twoFAMethod === method.value
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onClick={() => onTwoFAMethodSelect(method.value)}
              >
                <div className="flex items-center">
                  <div className="">
                    <div className={`p-2 ${method.bgColor} rounded-md mr-3`}>
                      <img
                        src={method.icon}
                        className="w-5 h-5 text-white"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-800 text-sm mb-1">
                        {method.label}
                      </h3>
                      {method.recommended && (
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium mr-2">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 flex items-center">
                      {method.description}
                    </p>
                  </div>
                  {formData.twoFAMethod === method.value && (
                    <svg
                      className="w-5 h-5 text-blue-600 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 p-4 rounded-lg border border-blue-200 bg-gradient-to-br from-[#F0FDFA] to-[#EEF2FF]">
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-row text-black">
              <img src="/assets/home/SecurityIcon.svg" className="w-5 h-5 text-blue-600 mt-0.5" />
              
              <p className="font-medium mb-1 ml-2">Why enable 2FA?</p>
            </div>
            <p className="text-xs text-black flex flex-row">
              <img src="/assets/home/TickIcon.svg" className="w-4 h-5 mr-2" />
              Verified badge on your profile
            </p>
            <p className="text-xs text-black flex flex-row">
              <img src="/assets/home/TickIcon.svg" className="w-4 h-5 mr-2" />
              Higher ranking in recruiter searches
            </p>
            <p className="text-xs text-black flex flex-row">
              <img src="/assets/home/TickIcon.svg" className="w-4 h-5 mr-2" />
              Protection against unauthorized access
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={onEnable2FA}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Enable 2FA
          </button>
          <button
            type="button"
            onClick={onSkip2FA}
            className="text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200"
          >
            Skip for Now
          </button>
        </div>
      </div>
    </div>
  );
}
