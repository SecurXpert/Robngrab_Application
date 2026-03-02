export default function Stage4TwoFAConfirmation({ onConfirm2FA }) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        <img src="/assets/home/logo.png" className="w-28 -ml-4" alt="" />
        <span className="text-xs text-[#0265D9] bg-gray-200 rounded-full mb-1 p-2">
          Step 3 of 4
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
            Enter the 6-digit code from your authenticator app
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-center gap-2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                onChange={(e) => {
                  if (e.target.value && index < 5) {
                    const nextInput = e.target.parentNode.children[index + 1];
                    if (nextInput) nextInput.focus();
                  }
                }}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onConfirm2FA}
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
