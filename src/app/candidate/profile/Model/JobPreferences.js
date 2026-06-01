import React from 'react';

export default function JobPreferences() {
  return (
    <section className='bg-white shadow-md p-5 rounded-lg mt-6'>
      <div className="flex items-center gap-3 mb-6">
        <img src="/Assets/Home/JobPrefer.svg" alt="Job Preferences" className="w-10 h-10" />
        <h3 className="text-lg font-semibold text-gray-900">Job Preferences</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Desired Role Card */}
        <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#E0E7FF]">
          <div className="flex items-center gap-3">
            <img src="/Assets/Home/Jobsuitcase.svg" alt="Desired Role" className="w-8 h-8" />
            <div>
              <p className="text-sm text-gray-600">Desired Role</p>
              <h4 className="font-semibold text-gray-900">Senior Frontend</h4>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#CBFBF1]">
          <div className="flex items-center gap-3">
            <img src="/Assets/Home/Greenlocation.svg" alt="Location" className="w-8 h-8" />
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <h4 className="font-semibold text-gray-900">Remote / SF Bay</h4>
            </div>
          </div>
        </div>

        {/* Salary Range Card */}
        <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#E0E7FF]">
          <div className="flex items-center gap-3">
            <img src="/Assets/Home/Bluedollar.svg" alt="Salary Range" className="w-8 h-8" />
            <div>
              <p className="text-sm text-gray-600">Salary Range</p>
              <h4 className="font-semibold text-gray-900">$120k - $180k</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
