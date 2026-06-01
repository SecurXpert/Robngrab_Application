import React from 'react';

export default function PrivacySettings() {
  return (
    <section className='bg-white shadow-md p-5 rounded-lg mt-6'>
      <div className="flex items-center gap-3 mb-6">
        <div className="rounded-lg">
          <img src="/Assets/Home/Privacyandvis.svg" alt="Privacy & Visibility" className="w-10 h-10" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Privacy & Visibility</h3>
      </div>

      <div className="space-y-4">
        {/* Profile Visibility Card */}
        <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0F9FF] border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Profile Visibility</h4>
                <p className="text-sm text-gray-600">Your profile is visible to recruiters</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          </div>
        </div>

        {/* Two Smaller Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Show Contact Info Card */}
          <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0F9FF] border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Show contact info</h4>
                <p className="text-xs text-gray-600">Email and phone</p>
              </div>
            </div>
          </div>

          {/* Show Resume Card */}
          <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0F9FF] border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Show resume</h4>
                <p className="text-xs text-gray-600">PDF download</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
