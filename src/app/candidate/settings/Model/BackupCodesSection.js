import React from 'react';
import { FaEye, FaDownload, FaCopy } from 'react-icons/fa';

export default function BackupCodesSection({ codes, revealed, onToggleVisibility, onToggleAll }) {
  return (
    <div className="p-6 space-y-6">
      {/* First Row */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-900">
          {codes.length} of 8 codes remaining
        </p>
        <button 
          onClick={onToggleAll}
          className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
        >
          {revealed ? 'Hide All' : 'Reveal All'}
        </button>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {codes.slice(0, 6).map((codeItem) => (
          <div key={codeItem.id} className="relative p-6 bg-gray-50 border border-gray-200 rounded-lg font-mono text-sm text-gray-800">
            <div className="flex items-center justify-between">
              <span className="flex-1">
                {revealed || codeItem.visible ? codeItem.code : '••••••••••'}
              </span>
              <button
                onClick={() => onToggleVisibility(codeItem.id)}
                className="ml-2 p-1 text-gray-500 hover:text-gray-700 transition-colors"
                title={codeItem.visible ? 'Hide code' : 'Show code'}
              >
                <FaEye className={`h-4 w-4 ${codeItem.visible ? 'text-blue-600' : 'text-gray-400'}`} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Important Text */}
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <span className="font-semibold">Important:</span> 
        </p>
        <p className="text-sm text-yellow-800">Save these backup codes in a safe place. You can use them to access your account if you lose your phone.</p>
      </div>

      {/* Buttons Row */}
      <div className="flex flex-wrap gap-3">
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg">
          Generate New Codes
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-700  transition-colors border border-gray-700 rounded-lg hover:bg-gray-100 flex items-center gap-2">
          <FaDownload className="h-4 w-4 " />
          Download Codes
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors border border-gray-700 rounded-lg hover:bg-gray-100 flex items-center gap-2">
          <FaCopy className="h-4 w-4" />
          Copy All
        </button>
      </div>
    </div>
  );
}
