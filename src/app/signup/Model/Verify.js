import React, { useState } from "react";
import { FiMail } from "react-icons/fi";

export default function Verify({ onVerify, onBack, countdown = 30, canResend = false, onResendCode }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length === 6) {
      onVerify(code);
    }
  };

  const handleResend = () => {
    if (canResend && onResendCode) {
      onResendCode();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-gray-100">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">

          {/* Logo and step indicator in top-left */}
          <div className="flex justify-start mb-4">
            <div>
              <img
                src="/Assets/Home/Logo.png"
                alt="Rob N Grab"
                className="h-12 w-auto mb-2"
              />
              <p className="text-sm text-blue-500 bg-blue-100 px-1 py-1 rounded-xl">Step 2 of 3</p>
            </div>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FiMail className="w-7 h-7 text-blue-600" />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800">
            Verify your email
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            We sent a 6-digit code to <br />
            <span className="text-blue-600 font-medium">
              Amit097@gmail.com
            </span>
          </p>

          <form onSubmit={handleSubmit}>
            {/* OTP Inputs */}
            <div className="flex justify-center gap-2 mt-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  className="w-13 h-12 border border-gray-200 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            <p className="text-sm text-gray-400 mt-3">
              Resend code in <span className="text-blue-500">{countdown}s</span>
            </p>

            {/* Button */}
            <button 
              type="submit"
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
            >
              Verify & Continue →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}