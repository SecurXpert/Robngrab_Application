import React from 'react';
import { LuMail } from "react-icons/lu";

export default function AccountRecoverySection() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
        <div className="flex items-center">
          <LuMail className="mr-3 h-8 w-8 text-gray-600 bg-gray-100 rounded-lg p-2" />
          <div>
            <p className="text-sm font-medium text-gray-900">Recovery Email</p>
            <p className="text-sm text-gray-600">sarah.candidate@email.com</p>
            <p className="text-sm text-gray-600">Verified on January 10, 2026</p>
          </div>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
          Update
        </button>
      </div>
      <div className="mt-4">
        <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
          Contact Support for Help
        </a>
      </div>
    </div>
  );
}
