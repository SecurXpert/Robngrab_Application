import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { getStatusInfo } from './utils';

export default function ExpandedJobDetails({ application }) {
  return (
    <td colSpan="5" className="px-0 py-0">
      <div className="bg-gray-50">
        <div className="p-6">
          {/* Current Status Summary */}
          <div className="mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Current Status Summary</h4>
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusInfo(application.status).bg} ${getStatusInfo(application.status).text}`}>
                  <img src={getStatusInfo(application.status).icon} alt="status" className="w-4 h-4" />
                  {application.status}
                </span>
                <span className="text-sm text-gray-500">Last updated: Feb 20, 2026 at 3:52pm</span>
              </div>
            </div>
          </div>

          {/* Application Timeline and Right Side Content */}
          <div className="flex flex-col xl:flex-row gap-6 mb-6">
            {/* Application Timeline - Left Side */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Application Timeline</h4>
              <div className="relative space-y-4 pl-8">
                {/* Timeline Item 1 */}
                <div className="flex items-center">
                  <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 ring-4 ring-white">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">Applied</div>
                  </div>
                  <div className="text-sm text-gray-500">Feb 15, 2024</div>
                </div>
                {/* Vertical Line */}
                <div className="absolute left-0 top-6 bottom-0 w-0.5 bg-blue-300"></div>

                {/* Timeline Item 2 */}
                <div className="flex items-center">
                  <div className="absolute -left-3 top-10 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 ring-4 ring-white">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">Under Review</div>
                  </div>
                  <div className="text-sm text-gray-500">Feb 18, 2024</div>
                </div>
                {/* Vertical Line */}
                <div className="absolute left-0 top-[calc(2.5rem+1.5rem)] bottom-0 w-0.5 bg-blue-300"></div>

                {/* Timeline Item 3 */}
                <div className="flex items-center">
                  <div className="absolute -left-3 top-20 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 ring-4 ring-white">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">On Hold</div>
                  </div>
                  <div className="text-sm text-gray-500">Feb 20, 2024</div>
                </div>
              </div>
              <div className="mt-4 ml-5">
                <span className="text-blue-600 font-medium text-sm">Current Stage</span>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="w-full xl:w-96">
              {/* Recruiter Activity */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-6">Recruiter Activity</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-800 font-medium mb-1">Hiring for this position has been temporarily paused</p>
                      <p className="text-xs text-gray-500">Feb 20, 2024 at 3:52pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-800 font-medium mb-1">We will keep your application under consideration</p>
                      <p className="text-xs text-gray-500">Feb 20, 2024 at 3:52pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Expected Step */}
              <div className="bg-[#DBEAFE] p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <FaArrowRight className="text-blue-600 text-2xl" />
                  <h4 className="text-lg font-semibold uppercase text-[#1C398E]">NEXT EXPECTED STEP</h4>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <div>
                    <p className="text-md font-sans text-[#193CB8] mb-1">No action needed at this time. We'll contact you with updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Available Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start">
            <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm sm:text-base">
              Withdraw Application
            </button>
          </div>
        </div>
      </div>
    </td>
  );
}
