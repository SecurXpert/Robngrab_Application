 'use client';

import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function CopyRightSection() {
  return (
    <div className="bg-blue-600 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright Text */}
          <div className="text-center md:text-left">
            <p className="text-white text-sm flex items-center">
              @ 2026 Rob N Grab - Job Portal. All rights Reserved
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-1 items-center justify-center md:justify-end">
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}