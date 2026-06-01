'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CandiateAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMFA, setRememberMFA] = useState(false);
  const [showMFAModal, setShowMFAModal] = useState(false);
  const [showReenrollMFAModal, setShowReenrollMFAModal] = useState(false);
  const [mfaCode, setMfaCode] = useState('');
  const [useBackupCode, setUseBackupCode] = useState(false);
  const [reenrollBackupCode, setReenrollBackupCode] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password, rememberMFA });
    
    // Redirect to candidate dashboard after successful login
    router.push('/candidate/dashboard');
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Google login attempt');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50 p-4 sm:p-6 lg:p-8 gap-6 lg:gap-8">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] p-6 sm:p-8 lg:p-12 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <div className="w-full max-w-full lg:max-w-[38rem]">
          {/* Logo */}
          <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-0 text-left">
            <img src="/Assets/Home/Logo.png" alt="Rob N Grab" className="h-12 sm:h-14 lg:h-[7rem] w-auto" />
          </div>

          {/* Form Title */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Step into your career space</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Secure access to your professional identity</p>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder:text-black"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder:text-black"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Form Options */}
            <div className="flex justify-between items-center mb-6">
              {/* MFA Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="mfa"
                  checked={rememberMFA}
                  onChange={(e) => {
                    setRememberMFA(e.target.checked);
                    if (e.target.checked) {
                      setShowMFAModal(true);
                    }
                  }}
                  className="w-4 h-4 mr-2 accent-blue-500"
                />
                <label htmlFor="mfa" className="text-sm text-gray-700">
                  Remember MFA
                </label>
              </div>

              {/* Forgot Password Link */}
              <Link href="/forgot-password" className="text-blue-500 no-underline text-sm hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Login Buttons */}
            <div className="flex flex-col gap-4 mb-8">
              <button type="submit" className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer border-none text-base text-center flex items-center justify-center no-underline bg-[#0163D7] text-white hover:bg-blue-600">
                Login
              </button>
              <Link href="/Signup" className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer border-[#0163D7] text-base text-center flex items-center justify-center no-underline text-[#0163D7] border border-[#0163D7] hover:bg-gray-200">
                Signup
              </Link>
            </div>
          </form>

          {/* Divider */}
          {/* <div className="text-center my-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200"></div>
            <span className="bg-white px-4 text-gray-600 text-sm relative z-10">Or continue with email</span>
          </div> */}

          {/* Google Login Button */}
          {/* <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:border-gray-400">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button> */}
        </div>
      </div>

      {/* Right Side - Hero Section */}
      <div className="flex-1 bg-[url('/Assets/Home/Formimg.png')] bg-center bg-cover flex items-center justify-center p-6 sm:p-8 lg:p-12 text-white rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] transition-all duration-300 relative overflow-hidden hover:translate-y-[-4px] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hidden lg:flex">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/40 z-10"></div>
        <div className="flex flex-col gap-12 lg:gap-20 text-left max-w-full w-full relative z-20">
          <div className="inline-block bg-white/25 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] lg:max-w-[16rem]">
            <span className="text-white text-xs sm:text-sm font-medium flex items-center gap-2 ">
              <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 "></span>
              Trusted by 50k+ professionals
            </span>
          </div>

          <div className="mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 leading-tight text-white">
              Your career, <br /> reimagined
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mb-0 opacity-90 text-white">
              Connect with opportunities that match your skills and ambitions
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 text-center">
            <div className="px-4 sm:px-6 py-4 sm:py-6 bg-white/15 backdrop-blur-sm rounded-xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.25)]">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-white">500+</div>
              <div className="text-xs sm:text-sm opacity-90 text-white">Top Companies</div>
            </div>
            <div className="px-4 sm:px-6 py-4 sm:py-6 bg-white/15 backdrop-blur-sm rounded-xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.25)]">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-white">94%</div>
              <div className="text-xs sm:text-sm opacity-90 text-white">Success Rate</div>
            </div>
            <div className="px-4 sm:px-6 py-4 sm:py-6 bg-white/15 backdrop-blur-sm rounded-xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.25)]">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-white">2.5k</div>
              <div className="text-xs sm:text-sm opacity-90 text-white">Hired Monthly</div>
            </div>
          </div>
        </div>
      </div>

      {/* MFA Verification Modal */}
      {showMFAModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            {/* Header */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{useBackupCode ? 'Backup Code' : 'MFA Verification'}</h2>
            <p className="text-sm text-gray-600 mb-6">{useBackupCode ? 'Enter your backup code' : 'Enter 6-digit code from your authenticator app'}</p>

            {/* Code Input */}
            <div className="mb-6">
              <input
                type="text"
                value={mfaCode}
                onChange={(e) => setMfaCode(e.target.value)}
                placeholder={useBackupCode ? 'Enter backup code' : '000000'}
                className="w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-lg text-center text-xl font-mono focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Backup Code Option */}
            <div className="mb-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={useBackupCode}
                  onChange={(e) => {
                    setUseBackupCode(e.target.checked);
                    setMfaCode(''); // Clear code when switching modes
                  }}
                  className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Use backup code instead</span>
              </label>
            </div>

            {/* Lost Phone Link */}
            <div className="mb-6">
              <button
                onClick={() => {
                  setShowMFAModal(false);
                  setShowReenrollMFAModal(true);
                  setMfaCode('');
                  setUseBackupCode(false);
                }}
                className="text-blue-500 text-sm hover:underline"
              >
                Lost your phone? Re-enroll with backup code
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  setShowMFAModal(false);
                  setRememberMFA(false);
                  setMfaCode('');
                  setUseBackupCode(false);
                }}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle MFA verification logic here
                  console.log('MFA Code:', mfaCode);
                  console.log('Use Backup Code:', useBackupCode);
                  setShowMFAModal(false);
                  setMfaCode('');
                  setUseBackupCode(false);
                }}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Re-enroll MFA Modal */}
      {showReenrollMFAModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            {/* Header */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Re-enroll MFA</h2>
            <p className="text-sm text-gray-600 mb-6">Enter your backup code to start re-enrollment. You'll need to scan a new QR code with your authenticator app.</p>

            {/* Backup Code Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Backup Code
              </label>
              <input
                type="text"
                value={reenrollBackupCode}
                onChange={(e) => setReenrollBackupCode(e.target.value)}
                placeholder="Enter your backup code"
                className="w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  setShowReenrollMFAModal(false);
                  setReenrollBackupCode('');
                  setRememberMFA(false);
                }}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle re-enrollment logic here
                  console.log('Re-enroll Backup Code:', reenrollBackupCode);
                  setShowReenrollMFAModal(false);
                  setReenrollBackupCode('');
                  // You can add navigation to QR code scanning page here
                }}
                className="flex-1 px-6 py-3 bg-purple-600 text-sm text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Start Re-enrollment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}