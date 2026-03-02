'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [securityKey, setSecurityKey] = useState('');
  const [currentMainStage, setCurrentMainStage] = useState(1);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', { email, password, role, firstName, lastName, securityKey });
    // After successful signup, move to verification stage
    setCurrentMainStage(2);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Google login attempt');
  };

  // Countdown timer effect
  useEffect(() => {
    if (currentMainStage === 2 && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCanResend(true);
    }
  }, [currentMainStage, countdown]);

  const handleResendCode = () => {
    setCountdown(30);
    setCanResend(false);
    // Add resend logic here
    console.log("Resending verification code to:", email);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentMainStage === 1 && (
        <div className="flex flex-col lg:flex-row bg-gray-50 p-4 sm:p-6 lg:p-8 gap-6 lg:gap-8">
          {/* Left Side - Signup Form */}
          <div className="flex-1 flex items-center justify-center bg-white rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] p-6 sm:p-8 lg:p-12 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <div className="w-full max-w-full lg:max-w-[38rem]">
              {/* Logo */}
              <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-0 text-left">
                <img src="/assets/home/logo.png" alt="Rob N Grab" className="h-12 sm:h-14 lg:h-[7rem] w-auto" />
              </div>

              {/* Form Title */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Create your admin account</h1>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Join the administrative control panel</p>

              {/* Signup Form */}
              <form onSubmit={handleSubmit}>
                {/* Role Field */}
                <div className="mb-6">
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] text-black"
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="super-admin">Super Admin</option>
                    <option value="prime-admin">Prime Admin</option>
                    <option value="creator">Creator</option>
                    <option value="accountant">Accountant</option>
                    <option value="it-admin">IT Admin</option>
                  </select>
                </div>

                {/* First Name Field */}
                <div className="mb-6">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder:text-black"
                    placeholder="Enter your first Name"
                    required
                  />
                </div>

                {/* Last Name Field */}
                <div className="mb-6">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder:text-black"
                    placeholder="Enter your last Name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg text-base transition-colors duration-200 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder:text-black"
                      placeholder="you@company.com"
                      required
                    />
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Password Field */}
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-base transition-colors duration-200 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder:text-black"
                      placeholder=""
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Security Key Field */}
                <div className="mb-6">
                  <label htmlFor="securityKey" className="block text-sm font-medium text-gray-700 mb-2">
                    Security Key
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="securityKey"
                      value={securityKey}
                      onChange={(e) => setSecurityKey(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder:text-black"
                      placeholder=""
                      required
                    />
                  </div>
                </div>

                {/* Signup Button */}
                <div className="flex flex-col gap-4 mb-8">
                  <button type="submit" className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer border-none text-base text-center flex items-center justify-center no-underline bg-[#0163D7] text-white hover:bg-blue-600">
                    Create Account
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentMainStage(2)}
                    className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer border-[#0163D7] text-base text-center flex items-center justify-center no-underline text-[#0163D7] border border-[#0163D7] hover:bg-gray-200"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Hero Section */}
          <div className="flex-1 bg-[url('/assets/home/formimg.png')] bg-center bg-cover flex items-center justify-center p-6 sm:p-8 lg:p-12 text-white rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] transition-all duration-300 relative overflow-hidden hover:translate-y-[-4px] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hidden lg:flex">
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
        </div>
      )}

      {currentMainStage === 2 && (
        <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
            <img src="/assets/home/logo.png" className="w-28 -ml-4" alt="" />
            {/* <span className="text-xs text-[#0265D9] bg-gray-200 rounded-full mb-1 p-2">
              Stage 2 of 4
            </span> */}
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
              <div className="text-sm text-gray-500">{email}</div>
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
              onClick={() => setCurrentMainStage(3)}
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
                    onClick={handleResendCode}
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
      )}
    </div>
  );
}
