"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../dashboard/components/Header';

export default function InterviewDetails() {
  const router = useRouter();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Interviews
          </button>

          {/* Interview Details Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Senior Frontend Engineer</h1>
              <p className="text-lg text-gray-600">TechCorp Inc.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Interview Information */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Interview Information</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date</p>
                    <p className="text-gray-900">Monday, February 16, 2026</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Time</p>
                    <p className="text-gray-900">10:00 AM - 11:00 AM</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Interview Type</p>
                    <p className="text-gray-900">Video Interview</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Status</p>
                    <span className="inline-flex px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                      Scheduled
                    </span>
                  </div>
                </div>
              </div>

              {/* Interview Details */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Interview Details</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Interviewer</p>
                    <p className="text-gray-900">John Smith (Technical Lead)</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Meeting Platform</p>
                    <p className="text-gray-900">Google Meet</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Meeting Link</p>
                    <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                      Join Meeting
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Duration</p>
                    <p className="text-gray-900">60 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Join Interview
              </button>
              <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Reschedule
              </button>
              <button className="px-6 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                Cancel Interview
              </button>
            </div>

            {/* Additional Information */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">Interview Preparation Tips</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Test your video and audio setup 15 minutes before the interview</li>
                <li>• Have your resume and portfolio ready to share</li>
                <li>• Research the company and prepare questions for the interviewer</li>
                <li>• Find a quiet, well-lit space for the video call</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
