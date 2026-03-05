export default function Stage2EmailVerification({ 
  formData, 
  countdown, 
  canResend, 
  onVerifyEmail, 
  onResendCode,
  handleChange,
  fieldErrors,
  validationError
}) {
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1 && /^\d*$/.test(value)) {
      // Update the verification code in form data
      const newCode = formData.verificationCode.split('');
      newCode[index] = value;
      const fullCode = newCode.join('');
      
      // Create synthetic event for handleChange
      const syntheticEvent = {
        target: {
          name: 'verificationCode',
          value: fullCode
        }
      };
      handleChange(syntheticEvent);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace to go to previous input
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        <img src="/assets/home/logo.png" className="w-28 -ml-4" alt="" />
        <span className="text-xs text-[#0265D9] bg-gray-200 rounded-full mb-1 p-2">
          Stage 2 of 4
        </span>
        <div className="text-center mb-6">
          <img
            src="/assets/home/MailIcon.svg"
            className="w-12 h-12 mx-auto mb-4 bg-[#CAE2FF] p-2 rounded-xl"
            alt=""
          />

          <div className="text-2xl font-medium text-gray-800">
            Verify Your Email
          </div>
          <div className="text-sm text-gray-500">
            We sent a 6-digit code to{" "}
          </div>
          <div className="text-sm text-gray-500">{formData.email}</div>
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
          <label
            htmlFor="verificationCode"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Verification Code
          </label>
          <div className="flex gap-2 justify-center mb-4">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={formData.verificationCode[index] || ''}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`w-12 h-12 text-center text-lg font-semibold border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 ${
                  fieldErrors.verificationCode 
                    ? 'border-red-500 text-red-600' 
                    : 'border-gray-300 text-gray-800'
                }`}
                placeholder="0"
              />
            ))}
          </div>
          {fieldErrors.verificationCode && (
            <span className="text-red-500 text-xs text-center block">
              {fieldErrors.verificationCode}
            </span>
          )}
          {formData.verificationCode && formData.verificationCode.length < 6 && (
            <div className="mt-2 text-xs text-red-600 text-center">
              ✗ Please enter all 6 digits
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onVerifyEmail}
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg mb-4"
        >
          Verify & Continue
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Didn't receive code?{" "}
            {canResend ? (
              <button
                type="button"
                onClick={onResendCode}
                className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
              >
                Resend Code
              </button>
            ) : (
              <span className="text-gray-400">
                Resend Code ({countdown}s)
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
