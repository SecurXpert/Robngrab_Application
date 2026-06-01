import React from 'react';

export default function SmartHighlights() {
  return (
    <section className='bg-white shadow-md p-5 rounded-lg'>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img src="/Assets/Home/Highlights.svg" alt="Smart Highlights" className="w-10 h-10" />
          <h3 className="text-lg font-semibold text-gray-900">Smart Highlights</h3>
        </div>
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">AI-Powered</span>
      </div>

      <div className="space-y-4">
        <div className="bg-purple-50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3">
            <div className="bg-purple-200 p-2 rounded-lg">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Strong match for Frontend roles</h4>
            </div>
          </div>
        </div>
        <div className="bg-teal-50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3">
            <div className="bg-teal-200 p-2 rounded-lg">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">4+ years experience in React ecosystem</h4>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3">
            <div className="bg-orange-200 p-2 rounded-lg">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Top 10% profile completion in platform</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
