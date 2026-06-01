import React from 'react';
import Image from 'next/image';

export default function ProfileSidebar({ onEditClick }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="text-center">
        <div className="relative inline-block">
          <Image
            src="/Alex-rivera.png"
            alt="Alex Rivera"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-200"
          />
          <span className="absolute bottom-2 right-2 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"></span>
        </div>
        <h2 className="mt-4 text-xl font-bold text-gray-900">Alex Rivera</h2>
        <p className="text-sm text-gray-600">Frontend Engineer | React & TypeScript</p>
        <a href="#" className="text-blue-600 text-sm mt-1 flex items-center justify-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Edit tagline
        </a>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded-lg">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Experience</p>
            <p className="text-gray-900">4+ years</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-lg">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Location</p>
            <p className="text-gray-900">San Francisco, CA</p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-semibold text-green-800">Open to work</span>
        </div>
        <p className="text-sm text-green-700">Frontend Engineer roles</p>
        <p className="text-xs text-green-600 mt-1">Last updated: 2 days ago</p>
      </div>

      <div className="mt-6 space-y-3">
        <button 
          onClick={onEditClick}
          className="block w-full px-4 py-2 bg-[#0163D5] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
        >
          Edit Profile
        </button>
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 bg-[#F1F5F9] text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Resume
          </button>
          <button className="flex-1 px-4 py-2 bg-[#F1F5F9] text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
