export default function Stage4TwoFAConfirmation({ 
  onConfirm2FA,
  formData,
  handleChange,
  fieldErrors,
  validationError
}) {
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1 && /^\d*$/.test(value)) {
      // Update the 2FA code in form data
      const newCode = formData.twoFACode.split('');
      newCode[index] = value;
      const fullCode = newCode.join('');
      
      // Create synthetic event for handleChange
      const syntheticEvent = {
        target: {
          name: 'twoFACode',
          value: fullCode
        }
      };
      handleChange(syntheticEvent);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`twoFA-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace to go to previous input
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      const prevInput = document.getElementById(`twoFA-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleConfirm = () => {
    if (formData.twoFACode.length === 6) {
      onConfirm2FA();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        <img src="/assets/home/logo.png" className="w-28 -ml-4" alt="" />
        <span className="text-xs text-[#0265D9] bg-gray-200 rounded-full mb-1 p-2">
          Step 4 of 4
        </span>
        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-green-50 rounded-full mb-4">
            <img
              src="/assets/home/SecurityIcon.svg"
              className="w-12 h-12 text-green-600"
              alt=""
            />
          </div>

          <div className="text-2xl font-medium text-gray-800 mb-2">
            Confirm your identity
          </div>
          <div className="text-sm text-gray-500">
            Enter 6-digit code from your authenticator app
          </div>
        </div>

        {/* Validation Error Message */}
        {validationError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-red-500 mr-2"
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
              <span className="text-red-700 text-xs font-medium">{validationError}</span>
            </div>
          </div>
        )}

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Authentication Code
          </label>
          <div className="flex justify-center gap-2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                id={`twoFA-${index}`}
                type="text"
                maxLength="1"
                value={formData.twoFACode[index] || ''}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`w-12 h-12 text-center text-xl font-semibold border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 ${
                  fieldErrors.twoFACode 
                    ? 'border-red-500 text-red-600' 
                    : 'border-gray-300 text-gray-800'
                }`}
              />
            ))}
          </div>
          {fieldErrors.twoFACode && (
            <span className="text-red-500 text-xs text-center block mt-2">
              {fieldErrors.twoFACode}
            </span>
          )}
          {formData.twoFACode && formData.twoFACode.length < 6 && (
            <div className="mt-2 text-xs text-red-600 text-center">
              Please enter all 6 digits
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleConfirm}
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          Confirm & Continue
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="text-center mt-4">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Can't access your authenticator app? Use backup code
          </button>
        </div>
      </div>
    </div>
  );
}
