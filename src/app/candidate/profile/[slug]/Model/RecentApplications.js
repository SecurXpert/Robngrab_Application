import React from 'react';

export default function RecentApplications() {
  return (
    <section className='bg-white shadow-md p-5 rounded-lg mt-6'>
      <div className="flex items-center gap-3 mb-6">
        <div className="rounded-lg">
          <img src="/Assets/Home/Recentapps.svg" alt="Recent Applications" className="w-10 h-10" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Recent Applications</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Application Card 1 */}
        <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0F9FF] border border-gray-100">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm">TechCorp Solutions</h4>
              <p className="text-xs text-gray-600 mt-1">Senior Frontend Engineer</p>
              <div className="flex items-center justify-between mt-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  In Progress
                </span>
                <span className="text-xs text-gray-500">3 days ago</span>
              </div>
            </div>
            <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Application Card 2 */}
        <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0F9FF] border border-gray-100">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm">Digital Innovations Inc.</h4>
              <p className="text-xs text-gray-600 mt-1">Frontend Developer</p>
              <div className="flex items-center justify-between mt-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Interview Scheduled
                </span>
                <span className="text-xs text-gray-500">1 week ago</span>
              </div>
            </div>
            <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Application Card 3 */}
        <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0F9FF] border border-gray-100">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm">StartupHub</h4>
              <p className="text-xs text-gray-600 mt-1">React Developer</p>
              <div className="flex items-center justify-between mt-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Applied
                </span>
                <span className="text-xs text-gray-500">2 weeks ago</span>
              </div>
            </div>
            <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
