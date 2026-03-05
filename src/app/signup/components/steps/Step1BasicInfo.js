import Link from "next/link";

export default function Step1BasicInfo({ 
  formData, 
  handleChange, 
  showPassword, 
  setShowPassword, 
  onNextStep,
  fieldErrors
}) {
  const PasswordToggleIcon = () => (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 bottom-3 text-gray-500 hover:text-gray-700"
    >
      {showPassword ? (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      )}
    </button>
  );

  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder:text-gray-500 text-gray-500 ${
            fieldErrors.fullName ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter your Full name"
          required
        />
        {fieldErrors.fullName && (
          <span className="text-red-500 text-xs mt-1">{fieldErrors.fullName}</span>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2 "
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder:text-gray-500 text-gray-500 ${
            fieldErrors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Email Address"
          autoComplete="off"
          required
        />
        {fieldErrors.email && (
          <span className="text-red-500 text-xs mt-1">{fieldErrors.email}</span>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder:text-gray-500 text-gray-500 ${
              fieldErrors.password ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Create a strong password"
            autoComplete="new-password"
            required
          />
          <PasswordToggleIcon />
        </div>
        {fieldErrors.password && (
          <span className="text-red-500 text-xs mt-1">{fieldErrors.password}</span>
        )}
        {formData.password && (
          <div className="mt-2 text-xs">
            <p className="text-gray-600 mb-1">Password requirements:</p>
            <ul className="space-y-1">
              <li className={formData.password.length >= 8 && formData.password.length <= 20 ? 'text-green-600' : 'text-red-600'}>
                {formData.password.length >= 8 && formData.password.length <= 20 ? '✓' : '✗'} 8-20 characters
                {formData.password.length < 8 && ` (${formData.password.length}/8)`}
                {formData.password.length > 20 && ` (exceeds 20)`}
              </li>
              <li className={/[a-z]/.test(formData.password) ? 'text-green-600' : 'text-red-600'}>
                {/[a-z]/.test(formData.password) ? '✓' : '✗'} One lowercase letter
              </li>
              <li className={/[A-Z]/.test(formData.password) ? 'text-green-600' : 'text-red-600'}>
                {/[A-Z]/.test(formData.password) ? '✓' : '✗'} One uppercase letter
              </li>
              <li className={/\d/.test(formData.password) ? 'text-green-600' : 'text-red-600'}>
                {/\d/.test(formData.password) ? '✓' : '✗'} One number
              </li>
              <li className={/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formData.password) ? 'text-green-600' : 'text-red-600'}>
                {/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formData.password) ? '✓' : '✗'} One special character
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder:text-gray-500 text-gray-500 ${
              fieldErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Confirm your password"
            autoComplete="new-password"
            required
          />
          <PasswordToggleIcon />
        </div>
        {fieldErrors.confirmPassword && (
          <span className="text-red-500 text-xs mt-1">{fieldErrors.confirmPassword}</span>
        )}
      </div>

      <div className="mb-8">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            required
          />
          <label
            htmlFor="agreeToTerms"
            className="text-sm text-gray-700"
          >
            I agree to the Terms of Service and Privacy Policy
          </label>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onNextStep}
          className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
