"use client";

import { useRouter } from 'next/navigation';

export default function Stage5Welcome({ formData }) {
  const router = useRouter();

  const handleGoToProfile = () => {
    router.push('/candidate/profile');
  };

  const handleCompleteProfile = () => {
    router.push('/candidate/profile');
  };
  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-full lg:w-[38rem] bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        <div className="flex justify-center mb-4">
          <img
            src="/assets/home/logo.png"
            className="w-28"
            alt=""
          />
        </div>
        
        <div className="flex justify-center mb-6">
          <img
            src="/assets/home/Completetick.svg"
            className="w-32 h-32"
            alt=""
          />
        </div>
        
        <div className="text-center mb-8">
          <div className="text-2xl font-bold text-gray-800 mb-2">
            Welcome to your career space, {formData.firstName || 'Amit'}
          </div>
          <div className="text-sm text-gray-500">
            Your secure profile is ready
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div className="bg-blue-50 p-3 rounded-lg text-center">
            <div className="flex justify-center mb-2">
              <div className="p-2 bg-white rounded-lg">
                <img
                  src="/assets/home/TickIcon.svg"
                  className="w-5 h-5 text-blue-600"
                  alt=""
                />
              </div>
            </div>
            <div className="text-xs font-semibold text-blue-600">Verified</div>
            <div className="text-xs text-gray-600 mt-1">Account secured with 2FA</div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg text-center">
            <div className="flex justify-center mb-2">
              <div className="p-2 bg-white rounded-lg">
                <img
                  src="/assets/home/personIcon.svg"
                  className="w-5 h-5 text-blue-600"
                  alt=""
                />
              </div>
            </div>
            <div className="text-xs font-semibold text-blue-600">Profile Active</div>
            <div className="text-xs text-gray-600 mt-1">Ready for recruiters</div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg text-center">
            <div className="flex justify-center mb-2">
              <div className="p-2 bg-white rounded-lg">
                <img
                  src="/file.svg"
                  className="w-5 h-5 text-blue-600"
                  alt=""
                />
              </div>
            </div>
            <div className="text-xs font-semibold text-blue-600">Get Started</div>
            <div className="text-xs text-gray-600 mt-1">Complete your profile</div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={handleGoToProfile}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Go to Profile
          </button>
          
          <button
            type="button"
            onClick={handleCompleteProfile}
            className="w-full border-2 border-blue-500 text-blue-500 py-3 px-6 rounded-lg hover:bg-blue-50 transition-all duration-200 font-medium"
          >
            Complete profile (recommended)
          </button>
        </div>
      </div>
    </div>
  );
}
