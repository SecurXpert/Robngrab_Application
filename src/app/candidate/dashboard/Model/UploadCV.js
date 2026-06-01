"use client";

import React from 'react';
import { FiUpload } from 'react-icons/fi';

const UploadCV = () => {
  return (
    <div className="rounded-xl border border-gray-200/80 p-5 shadow-sm flex-1 flex flex-col justify-between" style={{ background: 'linear-gradient(180deg, rgba(1, 99, 213, 0.05) 0%, rgba(22, 43, 92, 0.05) 100%)' }}>
      <div>
        <h2 className="text-base font-bold text-gray-900 mb-3.5">Upload Your CV</h2>
      </div>
      <div className="bg-white rounded-xl border border-gray-100/90 p-8 shadow-sm flex-1 flex items-center justify-center cursor-pointer hover:bg-gray-50/50 transition-colors">
        <div className="flex items-center space-x-5">
          <FiUpload className="w-12 h-12 text-[#0163D5] flex-shrink-0" strokeWidth={2.2} />
          <div className="leading-snug">
            <p className="text-lg font-medium text-gray-500">
              Drag & drop your photo here
            </p>
            <p className="text-sm text-gray-400 text-center mt-1">
              (Max 10Mb)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadCV;
