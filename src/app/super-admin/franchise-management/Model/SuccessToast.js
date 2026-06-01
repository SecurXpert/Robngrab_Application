"use client";

import React from "react";

export default function SuccessToast({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed z-50 flex items-center gap-3 px-5 py-4 bg-white border border-green-200 shadow-lg bottom-6 right-6 rounded-xl animate-fade-in">
      <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
        <svg
          className="w-5 h-5 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">
          Franchise Created!
        </p>
        <p className="text-xs text-gray-500">
          New franchise has been added successfully.
        </p>
      </div>
      <button
        onClick={onClose}
        className="ml-2 text-gray-400 hover:text-gray-600"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
