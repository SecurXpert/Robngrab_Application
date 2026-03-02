export default function Stage2EmailVerification({ 
  formData, 
  countdown, 
  canResend, 
  onVerifyEmail, 
  onResendCode 
}) {
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
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                placeholder="0"
              />
            ))}
          </div>
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
